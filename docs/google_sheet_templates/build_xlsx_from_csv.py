#!/usr/bin/env python3
from __future__ import annotations

import csv
import re
import zipfile
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "c4lab_google_sheet_templates.xlsx"

# Sort by numeric prefix (00_, 01_, ...), fallback lexicographic.
csv_files = sorted(
    ROOT.glob("*.csv"),
    key=lambda p: (int(m.group(1)) if (m := re.match(r"^(\d+)_", p.name)) else 9999, p.name),
)

if not csv_files:
    raise SystemExit("No CSV files found")


def sanitize_sheet_name(name: str) -> str:
    # Excel sheet name constraints.
    name = re.sub(r"[:\\/?*\[\]]", "_", name).strip()
    if not name:
        name = "Sheet"
    return name[:31]


def dedupe_sheet_names(names: list[str]) -> list[str]:
    seen = {}
    result = []
    for n in names:
        base = n
        idx = 1
        while n in seen:
            suffix = f"_{idx}"
            n = (base[: 31 - len(suffix)] + suffix)[:31]
            idx += 1
        seen[n] = True
        result.append(n)
    return result


def col_letter(col_num_1_based: int) -> str:
    letters = []
    n = col_num_1_based
    while n > 0:
        n, rem = divmod(n - 1, 26)
        letters.append(chr(65 + rem))
    return "".join(reversed(letters))


def clean_xml_text(text: str) -> str:
    # Remove illegal XML 1.0 control chars except tab/newline/carriage return.
    return "".join(
        ch
        for ch in text
        if ch == "\t" or ch == "\n" or ch == "\r" or ord(ch) >= 0x20
    )


sheet_names = dedupe_sheet_names([sanitize_sheet_name(p.stem) for p in csv_files])

sheet_xmls: list[str] = []
for csv_path in csv_files:
    with csv_path.open("r", encoding="utf-8", newline="") as f:
        reader = csv.reader(f)
        rows = list(reader)

    row_xml = []
    for r_idx, row in enumerate(rows, start=1):
        if not row:
            continue
        cell_xml = []
        for c_idx, val in enumerate(row, start=1):
            cell_ref = f"{col_letter(c_idx)}{r_idx}"
            text = escape(clean_xml_text(val))
            # Keep strings as inline strings to avoid sharedStrings complexity.
            cell_xml.append(
                f'<c r="{cell_ref}" t="inlineStr"><is><t xml:space="preserve">{text}</t></is></c>'
            )
        row_xml.append(f'<row r="{r_idx}">{"".join(cell_xml)}</row>')

    sheet_xml = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
        '<sheetData>'
        + "".join(row_xml)
        + '</sheetData></worksheet>'
    )
    sheet_xmls.append(sheet_xml)


workbook_sheets = []
for i, name in enumerate(sheet_names, start=1):
    n = escape(name)
    workbook_sheets.append(
        f'<sheet name="{n}" sheetId="{i}" r:id="rId{i}"/>'
    )

workbook_xml = (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
    'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
    '<sheets>' + "".join(workbook_sheets) + '</sheets>'
    '</workbook>'
)

rels_entries = []
for i in range(1, len(sheet_xmls) + 1):
    rels_entries.append(
        f'<Relationship Id="rId{i}" '
        'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" '
        f'Target="worksheets/sheet{i}.xml"/>'
    )

# Minimal styles part to keep compatibility with Excel/Sheets.
style_rid = len(sheet_xmls) + 1
rels_entries.append(
    f'<Relationship Id="rId{style_rid}" '
    'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" '
    'Target="styles.xml"/>'
)

workbook_rels_xml = (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
    + "".join(rels_entries)
    + '</Relationships>'
)

root_rels_xml = (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
    '<Relationship Id="rId1" '
    'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" '
    'Target="xl/workbook.xml"/>'
    '</Relationships>'
)

styles_xml = (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
    '<fonts count="1"><font><sz val="11"/><name val="Calibri"/></font></fonts>'
    '<fills count="2"><fill><patternFill patternType="none"/></fill>'
    '<fill><patternFill patternType="gray125"/></fill></fills>'
    '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'
    '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'
    '<cellXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/></cellXfs>'
    '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>'
    '</styleSheet>'
)

content_type_overrides = [
    '<Override PartName="/xl/workbook.xml" '
    'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>',
    '<Override PartName="/xl/styles.xml" '
    'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>',
]
for i in range(1, len(sheet_xmls) + 1):
    content_type_overrides.append(
        f'<Override PartName="/xl/worksheets/sheet{i}.xml" '
        'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
    )

content_types_xml = (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
    '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
    '<Default Extension="xml" ContentType="application/xml"/>'
    + "".join(content_type_overrides)
    + '</Types>'
)

with zipfile.ZipFile(OUT, "w", compression=zipfile.ZIP_DEFLATED) as zf:
    zf.writestr("[Content_Types].xml", content_types_xml)
    zf.writestr("_rels/.rels", root_rels_xml)
    zf.writestr("xl/workbook.xml", workbook_xml)
    zf.writestr("xl/_rels/workbook.xml.rels", workbook_rels_xml)
    zf.writestr("xl/styles.xml", styles_xml)
    for i, sheet_xml in enumerate(sheet_xmls, start=1):
        zf.writestr(f"xl/worksheets/sheet{i}.xml", sheet_xml)

print(f"created={OUT}")
print(f"sheets={len(sheet_xmls)}")
for idx, name in enumerate(sheet_names, start=1):
    print(f"sheet{idx}={name}")
