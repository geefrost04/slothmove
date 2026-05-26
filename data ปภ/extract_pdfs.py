#!/usr/bin/env python3
"""
Batch PDF extractor and summarizer for SlothMove exam prep.
Processes PDFs from two folders, extracts text, and creates .md summaries.
"""

import os
import re
import traceback
from datetime import datetime

# Set up paths
BASE_DIR = "/Users/geefrost/Documents/SlothMove/data ปภ"
FOLDER1 = os.path.join(BASE_DIR, "E1.นักวิเคราะห์นโยบายและแผนปฏิบัติการ")
FOLDER2 = os.path.join(BASE_DIR, "ความรู้เกี่ยวกับการปฏิบัติราชการ")
PROGRESS_LOG = os.path.join(BASE_DIR, "progress.log")

LOGfp = open(PROGRESS_LOG, "w", encoding="utf-8")
def log(msg):
    ts = datetime.now().strftime("%H:%M:%S")
    line = f"[{ts}] {msg}"
    print(line)
    LOGfp.write(line + "\n")
    LOGfp.flush()

def log_section(title):
    sep = "=" * 60
    log(sep)
    log(title)
    log(sep)

try:
    import pdfplumber
    PDFLIB = "pdfplumber"
except ImportError:
    import PyPDF2
    PDFLIB = "PyPDF2"

log(f"PDF library: {PDFLIB}")

# ─────────────────────────────────────────────
# Text extraction
# ─────────────────────────────────────────────
def extract_text_pdfplumber(pdf_path):
    """Extract full text using pdfplumber."""
    texts = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            t = page.extract_text()
            if t:
                texts.append(t)
    return "\n".join(texts)

def extract_text_pypdf2(pdf_path):
    """Extract full text using PyPDF2."""
    texts = []
    with open(pdf_path, "rb") as f:
        reader = PyPDF2.PdfReader(f)
        for page in reader.pages:
            t = page.extract_text()
            if t:
                texts.append(t)
    return "\n".join(texts)

def extract_text(pdf_path):
    """Extract text using best available library."""
    try:
        text = extract_text_pdfplumber(pdf_path)
        if text and len(text.strip()) > 100:
            return text
    except Exception as e:
        log(f"  pdfplumber failed: {e}")
    
    try:
        text = extract_text_pypdf2(pdf_path)
        if text and len(text.strip()) > 100:
            return text
    except Exception as e:
        log(f"  PyPDF2 failed: {e}")
    
    return None

# ─────────────────────────────────────────────
# Check if PDF is image-based / empty
# ─────────────────────────────────────────────
def is_empty_text(text):
    return not text or len(text.strip()) < 200

# ─────────────────────────────────────────────
# Save output
# ─────────────────────────────────────────────
def save_md(output_path, content):
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)
    log(f"  ✓ Saved: {os.path.basename(output_path)}")

# ─────────────────────────────────────────────
# Strip Thai punctuation noise at line starts
# ─────────────────────────────────────────────
def clean_line(line):
    # Remove repeated punctuation from start
    return re.sub(r'^[\.\-\*\s]+', '', line).strip()

# ─────────────────────────────────────────────
# Build summary markdown
# ─────────────────────────────────────────────
def build_summary(title, extracted_text, original_filename):
    """
    Build a structured .md summary from extracted text.
    Handles: full content, summary sections, law/organizational content.
    """
    
    # Detect language (Thai vs English)
    thai_chars = len(re.findall(r'[\u0E00-\u0E7F]', extracted_text))
    is_thai = thai_chars > 100
    
    # --- Detect what kind of content this is ---
    is_law = any(kw in extracted_text for kw in ['พระราชบัญญัติ', 'พ.ร.บ.', 'ระเบียบ', 'มาตรา', 'ข้อ', 'ประกาศ'])
    is_plan = any(kw in extracted_text for kw in ['ยุทธศาสตร์ชาติ', 'แผนพัฒนา', 'แผนการ'])
    is_exam = any(kw in extracted_text for kw in ['ข้อสอบ', 'คำตอบ', 'เฉลย', 'ปรนัย', 'อัตนัย'])
    
    # Split into pages/sections heuristically
    # Use multiple newlines as section breaks
    pages = re.split(r'\n{3,}', extracted_text)
    pages = [p.strip() for p in pages if p.strip()]
    
    lines = extracted_text.split('\n')
    lines = [l.strip() for l in lines if l.strip()]
    
    # Build content sections
    content_chunks = []
    current_section = []
    current_title = "เนื้อหาหลัก"
    
    for line in lines:
        # Section header detection (all caps Thai or numbered)
        is_header = (
            re.match(r'^(ส่วน|ตอน|หมวด|บท|ภาค|ลักษณะ)\s', line) or
            re.match(r'^(ก|ข|ค|ง|จ|ฉ|ช|ซ|ฌ|ญ|ด|ต|ท|น|บ|ป|ผ|พ|ฟ|ภ|ม|ย|ร|ล|ว|ศ|ษ|ส|ห|อ)\.\s', line) or
            re.match(r'^\d+[\.\)]\s', line) or
            re.match(r'^[A-Z][A-Z\s]+$', line) or
            re.match(r'^---+$', line) or
            re.match(r'^(Key Points|สรุป|สารบัญ|เฉลย|คำตอบ)', line)
        )
        if is_header and len(current_section) > 3:
            content_chunks.append((current_title, '\n'.join(current_section)))
            current_section = []
            current_title = line
        current_section.append(line)
    
    if current_section:
        content_chunks.append((current_title, '\n'.join(current_section)))
    
    # If we got very few chunks, try page-based
    if len(content_chunks) <= 2 and len(pages) > 2:
        content_chunks = []
        for i, pg in enumerate(pages[:20]):  # cap at 20 sections
            content_chunks.append((f"ส่วนที่ {i+1}", pg))
    
    # ============================================
    # Build markdown output
    # ============================================
    md = []
    md.append(f"# {title}\n")
    
    # Metadata
    md.append(f"**ไฟล์ต้นฉบับ:** `{original_filename}`\n")
    md.append(f"**ประเภท:** {'กฎหมาย/ระเบียบ' if is_law else ('แผนยุทธศาสตร์' if is_plan else 'ความรู้ทั่วไป')}\n")
    
    # Table of Contents
    md.append("\n## สารบัญ\n")
    if content_chunks:
        for i, (ctitle, _) in enumerate(content_chunks[:15]):
            anchor = ctitle[:60]
            md.append(f"{i+1}. [{anchor}](#{slug(anchor)})\n")
    
    # Key Points section
    md.append("\n## 🔑 สรุป Key Points\n")
    if content_chunks:
        for i, (ctitle, chunk_text) in enumerate(content_chunks[:5]):
            # Extract bullet-like lines as key points
            bullet_lines = [l for l in chunk_text.split('\n') if len(l) > 20 and len(l) < 200][:5]
            if bullet_lines:
                md.append(f"**{ctitle[:80]}**\n")
                for bl in bullet_lines[:3]:
                    md.append(f"- {bl[:150]}\n")
                md.append("\n")
    
    # Full content reorganized
    md.append("\n## 📖 เนื้อหาฉบับเต็ม (จัดเรียงใหม่)\n")
    
    if content_chunks:
        for i, (ctitle, chunk_text) in enumerate(content_chunks):
            md.append(f"\n### {ctitle}\n")
            # Filter to meaningful lines
            meaningful = [l for l in chunk_text.split('\n') if len(l.strip()) > 5]
            for ml in meaningful[:80]:  # cap lines per section
                md.append(f"{ml}\n")
            if len(meaningful) > 80:
                md.append(f"\n_... (แสดง {80} จาก {len(meaningful)} บรรทัด)_\n")
    else:
        # Fallback: just dump lines
        for line in lines[:200]:
            if len(line) > 5:
                md.append(f"{line}\n")
    
    # Exam questions section
    if is_exam:
        md.append("\n## 📝 ข้อสอบแนวทาง\n")
        exam_lines = [l for l in lines if any(kw in l for kw in ['ข้อ', 'คำถาม', 'จง', 'เลือก', 'ตอบ', 'ข.', 'ก.', 'ง.', 'จ.'])]
        for el in exam_lines[:50]:
            md.append(f"{el}\n")
    
    # Organizational structure for laws
    if is_law:
        md.append("\n## 🏛️ โครงสร้างองค์กร\n")
        org_keywords = ['รัฐมนตรี', 'ปลัด', 'อธิบดี', 'กรม', 'กอง', 'สำนัก', 'ศูนย์', 'คณะกรรมการ', 'คณะอนุกรรมการ']
        org_lines = [l for l in lines if any(kw in l for kw in org_keywords)]
        seen = set()
        for ol in org_lines:
            if ol not in seen and len(ol) < 200:
                md.append(f"- {ol}\n")
                seen.add(ol)
        md.append("\n")
    
    return ''.join(md)

def slug(text):
    """Create a simple anchor slug from Thai text."""
    s = re.sub(r'[^\w\s\u0E00-\u0E7F]', '', text)
    s = re.sub(r'\s+', '-', s)[:50]
    return s

# ─────────────────────────────────────────────
# Main processor
# ─────────────────────────────────────────────
def process_folder(folder_path, folder_name):
    log_section(f"Processing: {folder_name}")
    
    pdfs = [f for f in os.listdir(folder_path) if f.lower().endswith('.pdf')]
    pdfs.sort()
    
    results = []
    
    for i, pdf_file in enumerate(pdfs):
        pdf_path = os.path.join(folder_path, pdf_file)
        log(f"\n[{i+1}/{len(pdfs)}] Processing: {pdf_file}")
        
        try:
            # Extract text
            text = extract_text(pdf_path)
            
            if is_empty_text(text):
                log(f"  ⚠️  Empty or image-based PDF, trying OCR fallback...")
                # Try OCR if available
                try:
                    import subprocess
                    result = subprocess.run(['textutil', '-convert', 'txt', '-stdout', pdf_path],
                                          capture_output=True, timeout=30)
                    if result.returncode == 0 and len(result.stdout.decode('utf-8', errors='ignore').strip()) > 100:
                        text = result.stdout.decode('utf-8', errors='ignore')
                        log("  ✓ textutil extraction succeeded")
                except Exception as ex:
                    log(f"  textutil failed: {ex}")
            
            if is_empty_text(text):
                log(f"  ⚠️  Could not extract text - likely scanned/image PDF")
                # Create a placeholder md noting it's image-based
                placeholder = f"""# {pdf_file.replace('.pdf', '')}

**ไฟล์ต้นฉบับ:** `{pdf_file}`

**หมายเหตุ:** ไฟล์ PDF นี้เป็นแบบสแกน (Image-based PDF) ไม่สามารถแยกข้อความได้อัตโนมัติ

## สรุป Key Points

- ไฟล์เป็น PDF แบบสแกน ไม่มี text layer
- ต้องใช้ OCR เพื่อแยกข้อความ
- แนะนำให้ใช้ Adobe Acrobat, Google Docs หรือเครื่องมือ OCR อื่นๆ

## ข้อมูลไฟล์

- ขนาด: {os.path.getsize(pdf_path):,} bytes
- ประเภท: Scanned PDF / Image-based
"""
                output_path = pdf_path + ".md"
                save_md(output_path, placeholder)
                results.append((pdf_file, "SKIPPED - image PDF"))
                continue
            
            # Build summary
            title = pdf_file.replace('.pdf', '').strip()
            md_content = build_summary(title, text, pdf_file)
            
            output_path = pdf_path + ".md"
            save_md(output_path, md_content)
            
            char_count = len(text)
            log(f"  ✓ Extracted ~{char_count:,} chars, saved to {pdf_file}.md")
            results.append((pdf_file, f"OK - {char_count:,} chars"))
            
        except Exception as e:
            log(f"  ✗ ERROR: {e}")
            traceback.print_exc()
            results.append((pdf_file, f"ERROR: {e}"))
    
    return results

# ─────────────────────────────────────────────
# Run
# ─────────────────────────────────────────────
log_section("STARTING PDF EXTRACTION & SUMMARIZATION")
log(f"Time: {datetime.now().isoformat()}")
log(f"Output: same folder as source PDFs")
log(f"Progress log: {PROGRESS_LOG}")

all_results = []

# Process folder 1
results1 = process_folder(FOLDER1, "E1.นักวิเคราะห์นโยบายและแผนปฏิบัติการ")
all_results.extend(results1)

# Process folder 2
results2 = process_folder(FOLDER2, "ความรู้เกี่ยวกับการปฏิบัติราชการ")
all_results.extend(results2)

# Process root-level pdf
ROOT_PDF = os.path.join(BASE_DIR, "ประกาศ.pdf")
if os.path.exists(ROOT_PDF):
    log_section("Processing: ประกาศ.pdf (root level)")
    try:
        text = extract_text(ROOT_PDF)
        if is_empty_text(text):
            placeholder = f"# ประกาศ\n\n**ไฟล์ต้นฉบับ:** `ประกาศ.pdf`\n\n**หมายเหตุ:** ไฟล์นี้เป็นแบบสแกนหรือไม่สามารถแยกข้อความได้\n"
            save_md(ROOT_PDF + ".md", placeholder)
        else:
            md_content = build_summary("ประกาศ", text, "ประกาศ.pdf")
            save_md(ROOT_PDF + ".md", md_content)
        all_results.append(("ประกาศ.pdf", "OK"))
    except Exception as e:
        log(f"  ✗ ERROR: {e}")
        all_results.append(("ประกาศ.pdf", f"ERROR: {e}"))

# Final summary
log_section("PROCESSING COMPLETE")
ok = sum(1 for _, r in all_results if 'OK' in r)
skip = sum(1 for _, r in all_results if 'SKIP' in r)
err = sum(1 for _, r in all_results if 'ERROR' in r and 'SKIP' not in r)
log(f"\nTotal: {len(all_results)} files | OK: {ok} | Skipped: {skip} | Errors: {err}")

LOGfp.close()
print("\nDone.")