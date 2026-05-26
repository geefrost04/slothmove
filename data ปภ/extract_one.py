#!/usr/bin/env python3
"""
PDF text extractor - saves as .pdf.md in same folder as source.
"""
import os
import sys

try:
    import pdfplumber
    HAS_PDFPLUMBER = True
except ImportError:
    HAS_PDFPLUMBER = False

try:
    import PyPDF2
    HAS_PYPDF2 = True
except ImportError:
    HAS_PYPDF2 = False

def extract_pdfplumber(path):
    texts = []
    with pdfplumber.open(path) as pdf:
        for page in pdf.pages:
            t = page.extract_text()
            if t:
                texts.append(t)
    return "\n".join(texts)

def extract_pypdf2(path):
    texts = []
    with open(path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        for page in reader.pages:
            t = page.extract_text()
            if t:
                texts.append(t)
    return "\n".join(texts)

def process_file(pdf_path):
    print(f"  Extracting: {pdf_path}")
    try:
        if HAS_PDFPLUMBER:
            text = extract_pdfplumber(pdf_path)
        elif HAS_PYPDF2:
            text = extract_pypdf2(pdf_path)
        else:
            print("  ERROR: No PDF library available")
            return False
    except Exception as e:
        print(f"  ERROR: {e}")
        return False

    if not text or len(text.strip()) < 50:
        print(f"  WARNING: Very little text extracted ({len(text)} chars)")

    md_path = pdf_path + ".md"
    try:
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"  Saved: {md_path} ({len(text)} chars)")
        return True
    except Exception as e:
        print(f"  ERROR writing: {e}")
        return False

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 extract_one.py <pdf_path>")
        sys.exit(1)
    path = sys.argv[1]
    success = process_file(path)
    sys.exit(0 if success else 1)