#!/usr/bin/env python3
import pdfplumber, re, os
from datetime import datetime

LOG_PATH = "/Users/geefrost/Documents/SlothMove/data ปภ/progress_log.txt"
logfp = open(LOG_PATH, "a", encoding="utf-8")

def log(msg):
    ts = datetime.now().strftime("%H:%M:%S")
    line = f"[{ts}] {msg}"
    print(line)
    logfp.write(line + "\n")
    logfp.flush()

def extract_numbers(text, max_items=20):
    results = []
    patterns = [
        (r'พ\.ศ\.\s*(\d{4})', 'ปี พ.ศ.'),
        (r'(?:มาตรา|ม\.)\s*(\d+)', 'มาตรา'),
        (r'(?:ข้อ)\s*(\d+)', 'ข้อ'),
        (r'[\d,]+(?:\.\d+)?\s*%', 'เปอร์เซ็นต์'),
        (r'[\d,]+(?:\.\d+)?\s*บาท', 'เงินบาท'),
        (r'(\d+)\s*(?:วัน|เดือน|ปี|ชั่วโมง|นาที)', 'ระยะเวลา'),
        (r'ฉบับที่\s*(\d+)', 'ฉบับที่'),
    ]
    for pattern, label in patterns:
        for m in re.finditer(pattern, text):
            ctx = text[max(0, m.start()-60):m.end()+80].replace('\n',' ').strip()
            results.append((m.group(0), label, ctx[:120]))
    seen = set()
    deduped = []
    for item in results:
        if item[0][:15] not in seen:
            seen.add(item[0][:15])
            deduped.append(item)
    return deduped[:max_items]

def extract_key_sections(text):
    lines = text.split('\n')
    important = []
    keywords = ['มาตรา', 'ข้อ', 'ต้อง', 'ห้าม', 'ให้', 'ระเบียบ', 'พระราชบัญญัติ', 'นิยาม', 'หมายเหตุ', 'อำนาจ', 'หน้าที่', 'โทษ']
    for line in lines:
        line = line.strip()
        if len(line) > 10 and len(line) < 200 and any(k in line for k in keywords):
            important.append(line)
    return important[:30]

def build_md(filename, text, doc_type):
    title = filename.replace('.pdf', '')
    lines = text.split('\n')
    for l in lines:
        l = l.strip()
        if l and len(l) > 5:
            title = l[:150]
            break

    numbers = extract_numbers(text)
    key_secs = extract_key_sections(text)
    questions = re.findall(r'[ก-ฮ]\.\s*(.{10,200})', text)
    if not questions:
        questions = re.findall(r'\d+\.\s*(.{10,200})', text)

    md = f"# {title}\n\n"
    md += "## 📌 สรุปประเด็นสำคัญ (Key Points)\n"

    if doc_type == 'law':
        sections = re.findall(r'(?:มาตรา|ม\.)\s*(\d+)[^\n]{0,150}', text)
        seen = set()
        for s in sections:
            if s not in seen:
                seen.add(s)
                md += f"- **มาตรา {s}** - บทบัญญัติสำคัญ\n"
        if not sections:
            for ks in key_secs[:15]:
                md += f"- {ks[:200]}\n"
    else:
        for ks in key_secs[:20]:
            md += f"- {ks[:200]}\n"

    md += "\n## 🔢 ตัวเลขที่ต้องจำ (Numbers to Remember)\n"
    if numbers:
        for num, label, ctx in numbers[:15]:
            md += f"- **{num}** ({label}): {ctx}...\n"
    else:
        md += "- ไม่พบตัวเลขสำคัญเฉพาะในเอกสารนี้\n"

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

    md += "\n## 💡 จุดออกสอบบ่อย (Exam Hotspots)\n"
    hotspots = []
    for match in re.finditer(r'(?:นิยาม|หมายความว่า|ถือว่า)\s*(.{20,150})', text):
        hotspots.append(('นิยาม', match.group(0)[:150]))
    for match in re.finditer(r'(?:ต้อง|ให้|ห้าม|กำหนด)\s*(.{20,150})', text):
        hotspots.append(('บทบัญญัติ', match.group(0)[:150]))
    for match in re.finditer(r'(?:โทษ|ลงโทษ|จำคุก|ปรับ)\s*(.{20,150})', text):
        hotspots.append(('บทลงโทษ', match.group(0)[:150]))

    seen_hs = set()
    for label, content in hotspots:
        key = content[:50]
        if key not in seen_hs:
            seen_hs.add(key)
            md += f"- **[{label}]** {content}\n"

    if not hotspots:
        for q in questions[:5]:
            md += f"- คำถามที่พบบ่อย: {q.strip()[:150]}\n"

    md += f"\n---\n*สร้างจาก: {filename}*\n"
    return md

# Process missing files
files = [
    ("/Users/geefrost/Documents/SlothMove/data ปภ/ความรู้เกี่ยวกับการปฏิบัติราชการ/1.(ตัวเต็ม+สรุป+ปรนัย900) พ.ร.บ.ระเบียบบริหารราชการแผ่นดิน พ.ศ. 2534 และที่แก้ไขเพิ่มเติมถึง(ฉบับที่ 8) พ.ศ. 2553.pdf", "law"),
    ("/Users/geefrost/Documents/SlothMove/data ปภ/ความรู้เกี่ยวกับการปฏิบัติราชการ/11.(เนื้อหา+ปรนัย100) ความรู้เบื้องต้นด้านงบประมาณและการเงินการบัญชี.pdf", "budget"),
    ("/Users/geefrost/Documents/SlothMove/data ปภ/ความรู้เกี่ยวกับการปฏิบัติราชการ/9.(สรุป+ปรนัย50+ฉบับเต็ม) ระเบียบกระทรวงมหาดไทยว่าด้วยกิจการอาสาสมัครป้องกันภัยฝ่ายพลเรือน พ.ศ. 2553 และฉบับที่ 2 พ.ศ. 2565.pdf", "regulation"),
]

for pdf_path, doc_type in files:
    filename = os.path.basename(pdf_path)
    log(f"Processing: {filename}")

    text = ''
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                t = page.extract_text()
                if t: text += t + '\n'
    except Exception as e:
        log(f"  ERROR: {e}")
        continue

    if not text or len(text.strip()) < 50:
        log(f"  WARNING: Very little text ({len(text)} chars)")
        text = '[ไม่สามารถแยกข้อความได้]\n'

    md = build_md(filename, text, doc_type)
    md_path = pdf_path + ".md"
    with open(md_path, 'w', encoding='utf-8') as f:
        f.write(md)
    log(f"  ✓ Saved: {md_path} ({len(text)} chars)")

# Handle ประกาศ.pdf (scanned)
pdf_path = "/Users/geefrost/Documents/SlothMove/data ปภ/ประกาศ.pdf"
filename = "ประกาศ.pdf"
log(f"Processing: {filename}")
placeholder = """# ประกาศ

## 📌 สรุปประเด็นสำคัญ (Key Points)
- เอกสารนี้เป็นไฟล์ PDF ที่สแกนจากต้นฉบับ (Image-based PDF)
- ไม่สามารถแยกข้อความ (Text Extraction) ได้ เนื่องจากไม่มี text layer
- จำเป็นต้องใช้ OCR (Optical Character Recognition) เพื่อแปลงภาพเป็นข้อความ

## 🔢 ตัวเลขที่ต้องจำ (Numbers to Remember)
- ไม่สามารถแยกข้อมูลได้จากเอกสารสแกน

## 💡 จุดออกสอบบ่อย (Exam Hotspots)
- เอกสารประกาศนี้ไม่สามารถประมวลผลได้เนื่องจากเป็นภาพสแกน
- แนะนำให้เปิดอ่านด้วยตนเองหรือใช้โปรแกรม OCR

---
*สร้างจาก: ประกาศ.pdf (Image-based PDF)*

## ⚠️ หมายเหตุ
หากต้องการข้อมูลจากไฟล์นี้ กรุณา:
1. เปิดไฟล์ด้วย Adobe Acrobat Reader หรือโปรแกรมอ่าน PDF ที่มีฟีเจอร์ OCR
2. หรือส่งไฟล์ผ่านบริการ OCR เพื่อแปลงเป็นข้อความ
"""
md_path = pdf_path + ".md"
with open(md_path, 'w', encoding='utf-8') as f:
    f.write(placeholder)
log(f"  ✓ Saved placeholder (scanned PDF - 0 chars extracted)")

log("All missing files processed.")
logfp.close()
print("Done.")