#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
META_FILE="$SCRIPT_DIR/metadata/pre_hack_snapshots.tsv"
OUT_DIR="$SCRIPT_DIR/raw_html"

mkdir -p "$OUT_DIR"

while IFS=$'\t' read -r timestamp url slug; do
  [[ -z "${timestamp}" ]] && continue
  echo "Fetching $slug ($timestamp)"
  curl -s -L --max-time 45 "https://web.archive.org/web/${timestamp}id_/${url}" -o "$OUT_DIR/${slug}.html"
  echo "Saved $OUT_DIR/${slug}.html"
done < "$META_FILE"

echo "Done."
