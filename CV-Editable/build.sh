#!/usr/bin/env bash
set -e

# Ensure PATH includes TeXLive binaries on macOS
export PATH="/Library/TeX/texbin:$PATH"

CV_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$CV_DIR/.." && pwd)"

echo "=== Compiling Active CV (Rubenzahl Variant) ==="
cd "$CV_DIR/rubenzahl_variant"
bash build.sh

echo "Success! Active CV (Rubenzahl Variant) compiled and synced to public/CV_Nov2026.pdf"
