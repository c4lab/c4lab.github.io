#!/usr/bin/env bash
# Download blog post thumbnail images from the Wayback Machine archive
# of the old c4lab.bime.ntu.edu.tw WordPress site.
#
# Usage: bash scripts/download-blog-images.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
DEST_DIR="$PROJECT_ROOT/public/images/blog"

# Wayback Machine snapshot timestamp (pre-hack)
WB_TS="20250405031304"
WB_PREFIX="https://web.archive.org/web/${WB_TS}im_"

# Original WordPress upload base URL
WP_BASE="https://c4lab.bime.ntu.edu.tw/wp-content/uploads"

# Map: local filename -> original WordPress path (full-size where available)
declare -a NAMES=(
  "blog-01-i2ai.webp"
  "blog-02-scientific-writing.jpeg"
  "blog-03-learn-bioinformatics.png"
  "blog-04-taiwangenomes.png"
  "blog-05-prs.png"
  "blog-06-hla.png"
  "blog-07-automl.jpeg"
  "blog-08-nebula.png"
  "blog-09-ai-bioinformatics.png"
  "blog-10-ldts.png"
  "blog-11-graph-mapping.png"
  "blog-12-deg.png"
  "blog-13-read-mapping.png"
  "blog-14-rna-quant.png"
  "blog-15-dada2.png"
  "blog-16-single-cell.png"
  "blog-17-epistasis.png"
)

declare -a PATHS=(
  "2024/01/I2AI.webp"
  "2022/11/1_5CYSG6i5L6n2GD3tXZ3Xzg.jpeg"
  "2022/04/1_Kva_j5bxhVNJnbCjqGal6g.png"
  "2022/03/1_LPr33PnZT1E-nAX0fXOXsA.png"
  "2022/03/1_AEeKFoEKCVCabLJdUYKcaQ.png"
  "2021/10/unnamed.png"
  "2021/10/1_gmGZPShZgZ6qwp3BZY6Xww.jpeg"
  "2021/05/1_3_5E2wkTZYckISvi2jPLGw1.png"
  "2021/04/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2-2021-04-08-191523.png"
  "2021/04/1_qKTr3-y-4ajDGmi9XQvVcA1.png"
  "2021/03/graph-1.png"
  "2021/04/1_Gw4I9eNUiD-iAUqGXC_Leg1.png"
  "2021/04/1_nyQ0uPI0WwnHea_HgFBxSw1.png"
  "2021/04/medium_quant.png"
  "2021/04/1_DqdAtoKdkt5xTLl4pkJQFQ1.png"
  "2021/04/1_DkeGyD61xiOMT9uqMxlV1A1.png"
  "2021/04/0_WhPQBmAfto_k_L0e1.png"
)

mkdir -p "$DEST_DIR"

success=0
fail=0

for i in "${!NAMES[@]}"; do
  name="${NAMES[$i]}"
  path="${PATHS[$i]}"
  dest="$DEST_DIR/$name"

  if [[ -f "$dest" ]]; then
    echo "[skip] $name (already exists)"
    success=$((success + 1))
    continue
  fi

  src_url="${WP_BASE}/${path}"
  wb_url="${WB_PREFIX}/${src_url}"

  echo "[download] $name"

  # Try Wayback Machine first, fall back to direct URL
  if curl -fsSL --max-time 30 -o "$dest" "$wb_url" 2>/dev/null; then
    echo "  -> OK (Wayback Machine)"
    success=$((success + 1))
  elif curl -fsSL --max-time 30 -o "$dest" "$src_url" 2>/dev/null; then
    echo "  -> OK (direct)"
    success=$((success + 1))
  else
    echo "  -> FAILED"
    rm -f "$dest"
    fail=$((fail + 1))
  fi

  # Be polite to the Wayback Machine
  sleep 1
done

echo ""
echo "Done: $success downloaded, $fail failed"
echo "Images saved to: $DEST_DIR"
