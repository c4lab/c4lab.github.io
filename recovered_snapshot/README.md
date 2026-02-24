# c4Lab Recovery Snapshot (Wayback)

This folder stores pre-hack Wayback snapshots for core c4Lab pages.

## Saved files

- `raw_html/home.html`
- `raw_html/blog.html`
- `raw_html/galaxy.html`
- `raw_html/member.html`
- `raw_html/publication.html`
- `raw_html/research.html`
- `metadata/pre_hack_snapshots.tsv`
- `fetch_pre_hack_snapshots.sh`

## Snapshot sources

Timestamps are in `YYYYMMDDhhmmss` (Wayback format).

- `20250402110125` -> `https://c4lab.bime.ntu.edu.tw/`
- `20250405031304` -> `https://c4lab.bime.ntu.edu.tw/blog/`
- `20250419232953` -> `https://c4lab.bime.ntu.edu.tw/galaxy/`
- `20241103134603` -> `https://c4lab.bime.ntu.edu.tw/member/`
- `20250328062607` -> `https://c4lab.bime.ntu.edu.tw/publication/`
- `20250420002203` -> `https://c4lab.bime.ntu.edu.tw/research/`

## Notes

- This is a targeted recovery bundle for key content pages, not a full website mirror.
- HTML content still contains WordPress markup/scripts from archived output.
- Use this bundle as source material for static-site migration and content auditing.

## Refresh snapshots

Run:

- `./recovered_snapshot/fetch_pre_hack_snapshots.sh`
