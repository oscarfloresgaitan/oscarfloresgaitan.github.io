#!/usr/bin/env bash
set -e

# Ensure PATH includes TeXLive binaries on macOS
export PATH="/Library/TeX/texbin:$PATH"

CV_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$CV_DIR/.." && pwd)"

echo "=== Compiling LaTeX CV ==="
cd "$CV_DIR"

if command -v latexmk &> /dev/null; then
    latexmk -pdf -interaction=nonstopmode -halt-on-error main.tex
elif command -v pdflatex &> /dev/null; then
    pdflatex -interaction=nonstopmode -halt-on-error main.tex
    pdflatex -interaction=nonstopmode -halt-on-error main.tex
else
    echo "Error: Neither latexmk nor pdflatex found on system." >&2
    exit 1
fi

echo "=== Syncing PDF to Website Public Directory ==="
TARGET_PDF="$ROOT_DIR/public/OscarFloresGaitanCV_ENGLISH.pdf"
cp -f main.pdf "$TARGET_PDF"

echo "Success! Compiled CV saved to main.pdf and synced to $TARGET_PDF"
