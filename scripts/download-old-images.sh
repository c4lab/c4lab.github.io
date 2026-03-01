#!/usr/bin/env bash
# Download all images referenced in the old c4Lab homepage from the Wayback Machine.
# Usage: bash scripts/download-old-images.sh

set -uo pipefail

WAYBACK="https://web.archive.org/web/20250402110125im_/https://c4lab.bime.ntu.edu.tw"
OUT="public/images"

mkdir -p "$OUT/timeline"

ok=0
fail=0

download() {
  local dest="$1" src="$2"
  if [ -f "$dest" ]; then
    echo "SKIP  $dest (already exists)"
    ok=$((ok + 1))
    return
  fi
  echo -n "GET   $dest ... "
  if wget -q --timeout=30 -O "$dest" "$src" 2>/dev/null; then
    echo "OK ($(du -h "$dest" | cut -f1))"
    ok=$((ok + 1))
  else
    echo "FAIL"
    rm -f "$dest"
    fail=$((fail + 1))
  fi
}

# Hero background
download "$OUT/hero-bg.png" \
  "$WAYBACK/wp-content/uploads/2021/11/c4lab%E6%8F%90%E6%A1%88-08.png"

# Body illustration
download "$OUT/lab-illustration.png" \
  "$WAYBACK/wp-content/uploads/2021/12/c4lab%E6%8F%90%E6%A1%88-09.png"

# Logo / favicon
download "$OUT/logo-192.png" \
  "$WAYBACK/wp-content/uploads/2021/12/cropped-c4lab%E6%8F%90%E6%A1%88-10-192x192.png"

# Timeline images
download "$OUT/timeline/2024-ai-multiomics.jpg" \
  "$WAYBACK/wp-content/uploads/2024/11/%E6%95%99%E6%8E%88%E5%B0%88%E9%A1%8C%E6%BC%94%E8%AC%9B.jpg"

download "$OUT/timeline/2023-taiwangenomes.png" \
  "$WAYBACK/wp-content/uploads/2024/01/%E6%88%AA%E5%9C%96-2024-01-09-%E4%B8%AD%E5%8D%8812.06.32.png"

download "$OUT/timeline/2022-ai-lifescience.png" \
  "$WAYBACK/wp-content/uploads/2024/01/%E6%88%AA%E5%9C%96-2024-01-09-%E4%B8%8B%E5%8D%881.01.31.png"

download "$OUT/timeline/2021-ezgeno.jpeg" \
  "$WAYBACK/wp-content/uploads/2022/01/1_gmGZPShZgZ6qwp3BZY6Xww.jpeg"

download "$OUT/timeline/2020-bioinformatics-talk.png" \
  "$WAYBACK/wp-content/uploads/2024/01/%E6%88%AA%E5%9C%96-2024-01-09-%E4%B8%8B%E5%8D%881.10.35.png"

download "$OUT/timeline/2020-dockcov2.jpeg" \
  "$WAYBACK/wp-content/uploads/2021/05/gkaa861fig4.jpeg"

download "$OUT/timeline/2020-genepi.png" \
  "$WAYBACK/wp-content/uploads/2021/05/12859_2020_3368_Fig1_HTML.png"

download "$OUT/timeline/2019-transcript-assembly.png" \
  "$WAYBACK/wp-content/uploads/2021/05/41598_2019_44499_Fig3_HTML.png"

download "$OUT/timeline/2019-regulatory-code.jpg" \
  "$WAYBACK/wp-content/uploads/2022/11/mqdefault.jpg"

download "$OUT/timeline/2018-mikado-pheasant.jpg" \
  "$WAYBACK/wp-content/uploads/2021/05/10627521_10203742044444921_1965290305_o.c4lab.jpg"

download "$OUT/timeline/2017-dosudo.png" \
  "$WAYBACK/wp-content/uploads/2024/01/%E6%88%AA%E5%9C%96-2024-01-09-%E4%B8%AD%E5%8D%8812.49.18.png"

download "$OUT/timeline/2017-deeplearning-bioinformatics.jpg" \
  "$WAYBACK/wp-content/uploads/2022/11/maxresdefault.jpg"

download "$OUT/timeline/2012-ml-talk.jpg" \
  "$WAYBACK/wp-content/uploads/2022/11/0222%E5%A4%A7%E8%85%A6%E6%B5%B7%E5%A0%B1%E5%AE%8C%E7%A8%BFout.jpg"

download "$OUT/timeline/2005-c4lab-founded.png" \
  "$WAYBACK/wp-content/uploads/2021/05/c4Lab-1.png"

echo ""
echo "Done: $ok downloaded, $fail failed."
[ "$fail" -eq 0 ] || exit 1
