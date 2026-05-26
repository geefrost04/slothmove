#!/usr/bin/env python3
"""
Process all PDFs and create structured exam prep summaries.
"""
import os
import re
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

# ─── Directories ───────────────────────────────────────────
BASE_DIR = "/Users/geefrost/Documents/SlothMove/data ปภ"
FOLDER1 = os.path.join(BASE_DIR, "E1.นักวิเคราะห์นโยบายและแผนปฏิบัติการ")
FOLDER2 = os.path.join(BASE_DIR, "ความรู้เกี่ยวกับการปฏิบัติราชการ")
ROOT_PDF = os.path.join(BASE_DIR, "ประกาศ.pdf")

PROGRESS_LOG = os.path.join(BASE_DIR, "progress_log.txt")

# ─── Logging ──────────────────────────────────────────────
LOGfp = open(PROGRESS_LOG, "w", encoding="utf-8")

def log(msg):
    ts = __import__('datetime').datetime.now().strftime("%H:%M:%S")
    line = f"[{ts}] {msg}"
    print(line)
    LOGfp.write(line + "\n")
    LOGfp.flush()

def log_section(title):
    sep = "=" * 60
    log(sep)
    log(title)
    log(sep)

# ─── Extract text ──────────────────────────────────────────
def extract_text(pdf_path):
    text = ""
    if HAS_PDFPLUMBER:
        try:
            with pdfplumber.open(pdf_path) as pdf:
                for page in pdf.pages:
                    t = page.extract_text()
                    if t:
                        text += t + "\n"
        except Exception as e:
            log(f"  pdfplumber error: {e}")
    
    if not text and HAS_PYPDF2:
        try:
            with open(pdf_path, 'rb') as f:
                reader = PyPDF2.PdfReader(f)
                for page in reader.pages:
                    t = page.extract_text()
                    if t:
                        text += t + "\n"
        except Exception as e:
            log(f"  PyPDF2 error: {e}")
    
    return text

# ─── Extract numbers ───────────────────────────────────────
def extract_key_numbers(text, max_items=20):
    results = []
    
    # พ.ศ. years
    for m in re.finditer(r'พ\.ศ\.\s*(\d{4})', text):
        ctx = text[max(0, m.start()-60):m.end()+80].replace('\n',' ').strip()
        results.append((m.group(0), 'ปี พ.ศ.', ctx))
    
    # มาตรา numbers
    for m in re.finditer(r'(?:มาตรา|ม\.)\s*(\d+)', text):
        ctx = text[max(0, m.start()-60):m.end()+80].replace('\n',' ').strip()
        results.append((m.group(0), 'มาตรา', ctx))
    
    # ข้อ numbers  
    for m in re.finditer(r'(?:ข้อ)\s*(\d+)', text):
        ctx = text[max(0, m.start()-60):m.end()+80].replace('\n',' ').strip()
        results.append((m.group(0), 'ข้อ', ctx))
    
    # Percentages
    for m in re.finditer(r'[\d,]+(?:\.\d+)?\s*%', text):
        ctx = text[max(0, m.start()-60):m.end()+80].replace('\n',' ').strip()
        results.append((m.group(0), 'เปอร์เซ็นต์', ctx))
    
    # Money (บาท)
    for m in re.finditer(r'[\d,]+(?:\.\d+)?\s*บาท', text):
        ctx = text[max(0, m.start()-60):m.end()+80].replace('\n',' ').strip()
        results.append((m.group(0), 'เงินบาท', ctx))
    
    # Time durations
    for m in re.finditer(r'(\d+)\s*(?:วัน|เดือน|ปี|ชั่วโมง|นาที)', text):
        ctx = text[max(0, m.start()-60):m.end()+80].replace('\n',' ').strip()
        results.append((m.group(0), 'ระยะเวลา', ctx))
    
    # ฉบับที่
    for m in re.finditer(r'ฉบับที่\s*(\d+)', text):
        ctx = text[max(0, m.start()-60):m.end()+80].replace('\n',' ').strip()
        results.append((m.group(0), 'ฉบับที่', ctx))
    
    # Large standalone numbers
    for m in re.finditer(r'(?<!\w)[\d,]{4,}(?!\w)', text):
        ctx = text[max(0, m.start()-60):m.end()+80].replace('\n',' ').strip()
        results.append((m.group(0), 'ตัวเลขสำคัญ', ctx))
    
    # Deduplicate by number value
    seen = set()
    deduped = []
    for item in results:
        key = item[0][:20]
        if key not in seen:
            seen.add(key)
            deduped.append(item)
    
    return deduped[:max_items]

# ─── Extract key sections ───────────────────────────────────
def extract_key_sections(text):
    """Extract lines that look like definitions, important statements."""
    lines = text.split('\n')
    important = []
    
    keywords = [
        'มาตรา', 'ข้อ', 'ต้อง', 'ห้าม', 'ให้', 'ตั้ง', 'ระเบียบ', 
        'พระราชบัญญัติ', 'ประกาศ', 'คำสั่ง', 'นิยาม', 'หมายเหตุ',
        'อำนาจ', 'หน้าที่', 'โทษ', 'ยกเว้น', 'สิทธิ', 'ภาระ'
    ]
    
    for line in lines:
        line = line.strip()
        if not line or len(line) < 10:
            continue
        if any(k in line for k in keywords):
            if len(line) < 200:
                important.append(line)
    
    return important[:40]

# ─── Detect document type ─────────────────────────────────
def detect_doc_type(filename, text):
    fn_lower = filename.lower()
    if 'พระราชบัญญัติ' in text or 'พ.ร.บ.' in fn_lower or 'พ.ร.บ.' in text:
        return 'law'
    elif 'ยุทธศาสตร์' in text:
        return 'strategy'
    elif 'แผนพัฒนา' in text:
        return 'plan'
    elif 'นโยบาย' in text:
        return 'policy'
    elif 'ระเบียบ' in text:
        return 'regulation'
    elif 'ความรู้เกี่ยวกับ' in text or 'แนวข้อสอบ' in fn_lower:
        return 'exam'
    elif 'ภาษาอังกฤษ' in text or 'English' in text:
        return 'english'
    else:
        return 'general'

# ─── Extract title ─────────────────────────────────────────
def extract_title(text, filename):
    lines = text.split('\n')
    # Look for first significant heading
    for line in lines:
        line = line.strip()
        if len(line) > 5 and len(line) < 200:
            # Remove page numbers and common prefixes
            if not re.match(r'^\d+\s', line):
                return line
    return filename.replace('.pdf', '')

# ─── Build markdown summary ────────────────────────────────
def build_summary(filename, text, doc_type):
    # Extract title
    title = extract_title(text, filename)
    
    # Extract key numbers
    numbers = extract_key_numbers(text)
    
    # Extract key sections
    key_sections = extract_key_sections(text)
    
    # Extract question patterns (for exam files)
    questions = re.findall(r'[ก-ฮ]\.\s*(.{10,200})', text)
    if not questions:
        questions = re.findall(r'\d+\.\s*(.{10,200})', text)
    
    # Build structure
    md = f"# {title}\n\n"
    
    # === Key Points ===
    md += "## 📌 สรุปประเด็นสำคัญ (Key Points)\n"
    
    if doc_type == 'law':
        # Extract law-specific structure
        sections = re.findall(r'(?:มาตรา|ม\.)\s*(\d+)[^\n]{0,150}', text)
        unique_secs = []
        seen = set()
        for s in sections:
            if s not in seen:
                seen.add(s)
                unique_secs.append(s)
        for sec in unique_secs[:15]:
            md += f"- **มาตรา {sec}** - บทบัญญัติสำคัญ\n"
    
    elif doc_type == 'exam':
        # Group by topic
        topics = []
        for q in questions[:20]:
            if len(q) > 20:
                topics.append(q.strip()[:150])
        for t in topics:
            md += f"- {t}\n"
    
    else:
        # General important lines
        for ks in key_sections[:15]:
            md += f"- {ks[:200]}\n"
    
    # === Numbers ===
    md += "\n## 🔢 ตัวเลขที่ต้องจำ (Numbers to Remember)\n"
    if numbers:
        for num, label, ctx in numbers[:15]:
            md += f"- **{num}** ({label}): {ctx[:120]}...\n"
    else:
        md += "- ไม่พบตัวเลขสำคัญเฉพาะในเอกสารนี้\n"
    
    # === Structure (for laws) ===
    if doc_type == 'law':
        md += "\n## 🏛️ โครงสร้างองค์กร / สถาบันที่เกี่ยวข้อง\n"
        orgs = re.findall(r'(?:กรม|สำนัก|สถาบัน|องค์กร|คณะ|กระทรวง|ทบวง)\s*[ก-ฮA-Za-z]+(?:[ก-ฮA-Za-z\s]+)?', text)
        seen_orgs = set()
        for o in orgs[:10]:
            if o not in seen_orgs:
                seen_orgs.add(o)
                md += f"- {o.strip()}\n"
        if not orgs:
            md += "- ไม่ระบุโครงสร้างเฉพาะในเอกสารนี้\n"
    
    # === Exam Hotspots ===
    md += "\n## 💡 จุดออกสอบบ่อย (Exam Hotspots)\n"
    hotspots = []
    
    # Find definition patterns
    for match in re.finditer(r'(?:นิยาม|หมายความว่า|ถือว่า)\s*(.{20,150})', text):
        hotspots.append(("นิยาม", match.group(0)[:150]))
    
    # Find important provisions
    for match in re.finditer(r'(?:ต้อง|ให้|ห้าม|กำหนด)\s*(.{20,150})', text):
        hotspots.append(("บทบัญญัติ", match.group(0)[:150]))
    
    # Find penalties
    for match in re.finditer(r'(?:โทษ|ลงโทษ|จำคุก|ปรับ)\s*(.{20,150})', text):
        hotspots.append(("บทลงโทษ", match.group(0)[:150]))
    
    # Deduplicate
    seen_hs = set()
    for label, content in hotspots:
        key = content[:50]
        if key not in seen_hs:
            seen_hs.add(key)
            md += f"- **[{label}]** {content}\n"
    
    if not hotspots:
        for q in questions[:5]:
            md += f"- คำถามที่พบบ่อย: {q.strip()[:150]}\n"
    
    # === Footer ===
    md += "\n---\n*สร้างจาก: " + filename + "*\n"
    
    return md

# ─── Process a single PDF ─────────────────────────────────
def process_pdf(pdf_path):
    folder = os.path.dirname(pdf_path)
    filename = os.path.basename(pdf_path)
    log(f"Processing: {filename}")
    
    text = extract_text(pdf_path)
    if not text or len(text.strip()) < 50:
        log(f"  WARNING: Very little text extracted ({len(text)} chars) - may be scanned/image")
        # Try to at least save what we have
        text = f"[ไม่สามารถแยกข้อความได้ - ไฟล์อาจเป็นสแกนหรือภาพ]\n\nOriginal file: {filename}\n"
    
    doc_type = detect_doc_type(filename, text)
    summary = build_summary(filename, text, doc_type)
    
    md_path = pdf_path + ".md"
    try:
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(summary)
        log(f"  ✓ Saved: {md_path} ({len(text)} chars extracted)")
        return True
    except Exception as e:
        log(f"  ERROR: {e}")
        return False

# ─── Main ──────────────────────────────────────────────────
def main():
    log("Starting PDF extraction and summarization")
    log(f"Library: {'pdfplumber' if HAS_PDFPLUMBER else 'PyPDF2'}")
    
    files_to_process = []
    
    # Folder 1
    if os.path.isdir(FOLDER1):
        for f in os.listdir(FOLDER1):
            if f.endswith('.pdf'):
                files_to_process.append(os.path.join(FOLDER1, f))
    
    # Folder 2
    if os.path.isdir(FOLDER2):
        for f in os.listdir(FOLDER2):
            if f.endswith('.pdf'):
                files_to_process.append(os.path.join(FOLDER2, f))
    
    # Root level
    if os.path.isfile(ROOT_PDF):
        files_to_process.append(ROOT_PDF)
    
    total = len(files_to_process)
    log(f"Found {total} PDF files to process")
    log("=" * 60)
    
    for i, pdf_path in enumerate(files_to_process, 1):
        log(f"\n[{i}/{total}] {os.path.basename(pdf_path)}")
        success = process_pdf(pdf_path)
        if success:
            log(f"  ✓ Complete")
        else:
            log(f"  ✗ Failed")
    
    log("=" * 60)
    log(f"COMPLETE: {total} files processed")
    
    LOGfp.close()

if __name__ == "__main__":
    main()