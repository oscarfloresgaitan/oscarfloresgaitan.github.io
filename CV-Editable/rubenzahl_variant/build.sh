#!/usr/bin/env bash
set -e

# Compile Rubenzahl variant in isolated directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "=== Compiling Rubenzahl Variant CV ==="

if command -v latexmk &> /dev/null; then
    latexmk -pdf -interaction=nonstopmode -halt-on-error main.tex
elif command -v /Library/TeX/texbin/latexmk &> /dev/null; then
    /Library/TeX/texbin/latexmk -pdf -interaction=nonstopmode -halt-on-error main.tex
elif command -v pdflatex &> /dev/null; then
    pdflatex -interaction=nonstopmode -halt-on-error main.tex
    pdflatex -interaction=nonstopmode -halt-on-error main.tex
elif command -v /Library/TeX/texbin/pdflatex &> /dev/null; then
    /Library/TeX/texbin/pdflatex -interaction=nonstopmode -halt-on-error main.tex
    /Library/TeX/texbin/pdflatex -interaction=nonstopmode -halt-on-error main.tex
else
    echo "Error: Neither latexmk nor pdflatex found on PATH or in /Library/TeX/texbin."
    exit 1
fi

cp -f main.pdf CV_Nov2026.pdf
cp -f main.pdf "$DIR/../../public/CV_Nov2026.pdf"
cp -f main.pdf "$DIR/../../public/OscarFloresGaitanCV_ENGLISH.pdf"

echo "Success! Compiled Rubenzahl variant to $DIR/CV_Nov2026.pdf and synced to public/CV_Nov2026.pdf"
