#!/usr/bin/env python3
"""
Revise existing .md files with the new simplified structure:
- สรุปประเด็นสำคัญ
- ตัวเลขที่ต้องจำ
- โครงสร้างองค์กร (if law)
- จุดที่ออกสอบบ่อย
"""

import os
import re
from datetime import datetime

BASE_DIR = "/Users/geefrost/Documents/SlothMove/data ปภ"
PROGRESS_LOG = os.path.join(BASE_DIR, "progress.log")

LOGfp = open(PROGRESS_LOG, "a", encoding="utf-8")
def log(msg):
    ts = datetime.now().strftime("%H:%M:%S")
    line = f"[{ts}] [REVISE] {msg}"
    print(line)
    LOGfp.write(line + "\n")
    LOGfp.flush()

def slug(text):
    s = re.sub(r'[^\w\s\u0E00-\u0E7F]', '', text)
    s = re.sub(r'\s+', '-', s)[:40]
    return s

# ─── Extract numbers from Thai text ───
def extract_numbers(text):
    """Extract meaningful numbers and their context from Thai text."""
    number_patterns = [
        # พ.ศ. years
        (r'พ\.ศ\.\s*(\d{4})', 'ปี พ.ศ.'),
        # Article/section numbers (มาตรา, ข้อ)
        (r'(?:มาตรา|ข้อ)\s*(\d+)', 'มาตรา/ข้อ'),
        # วัน/เดือน numbers
        (r'(\d+)\s*(?:วัน|เดือน|ปี|ชั่วโมง|นาที|บาท|คน|ครั้ง|รอบ)', 'ระยะเวลา/จำนวน'),
        # ครั้งที่
        (r'ครั้งที่\s*(\d+)', 'ลำดับครั้ง'),
        # พ.ร.บ. / ฉบับที่
        (r'ฉบับที่\s*(\d+)', 'ฉบับที่'),
        # เงินบาท with comma-separated
        (r'[\d,]+(?:\.\d+)?\s*บาท', 'จำนวนเงินบาท'),
        # Percentage
        (r'[\d,]+(?:\.\d+)?\s*%', 'ร้อยละ/เปอร์เซ็นต์'),
        # Standalone large numbers
        (r'(?<!\w)[\d,]{4,}(?!\w)', 'ตัวเลขสำคัญ'),
    ]
    results = []
    for pattern, label in number_patterns:
        for m in re.finditer(pattern, text):
            num = m.group(0)
            # Get surrounding context (50 chars before and after)
            start = max(0, m.start() - 50)
            end = min(len(text), m.end() + 80)
            context = text[start:end].replace('\n', ' ').strip()
            # Avoid very short contexts
            if len(context) > 15:
                results.append((num, label, context))
    return results

# ─── Parse existing md to extract content ───
def parse_existing_md(md_text):
    """Parse existing md content to extract structured info."""
    lines = md_text.split('\n')
    
    # Extract title
    title = ""
    for line in lines:
        m = re.match(r'^#\s+(.+)$', line)
        if m:
            title = m.group(1).strip()
            break
    
    # Extract key points (from ## สรุป Key Points or similar)
    key_points = []
    in_key_section = False
    in_full_section = False
    
    for line in lines:
        if re.match(r'^##\s+.*สรุป.*Key', line) or re.match(r'^##\s+🔑', line):
            in_key_section = True
            in_full_section = False
            continue
        if re.match(r'^##\s+', line):
            in_key_section = False
        if 'เนื้อหาฉบับเต็ม' in line or '📖' in line:
            in_full_section = True
            in_key_section = False
            continue
        if in_key_section and not re.match(r'^#', line):
            stripped = line.strip()
            if stripped and not stripped.startswith('**'):
                key_points.append(stripped)
    
    # Extract numbers from full text
    numbers = extract_numbers(md_text)
    
    # Extract org structure
    org_keywords = ['รัฐมนตรี', 'ปลัด', 'อธิบดี', 'กรม', 'กอง', 'สำนัก', 'ศูนย์', 'คณะกรรมการ', 'คณะอนุกรรมการ', 'ผู้อำนวยการ', 'เจ้าพนักงาน']
    org_lines = []
    seen_org = set()
    for line in lines:
        if any(kw in line for kw in org_keywords):
            cleaned = line.strip().lstrip('-*').strip()
            if cleaned and cleaned not in seen_org and len(cleaned) < 200:
                org_lines.append(cleaned)
                seen_org.add(cleaned)
    
    # Detect if law
    is_law = any(kw in md_text for kw in ['พระราชบัญญัติ', 'พ.ร.บ.', 'ระเบียบ', 'มาตรา', 'ข้อ', 'ประกาศ'])
    is_exam = any(kw in md_text for kw in ['ข้อสอบ', 'คำตอบ', 'เฉลย', 'ปรนัย', 'อัตนัย'])
    
    # Extract exam questions / common exam points
    exam_points = []
    exam_keywords = ['ข้อ', 'คำถาม', 'จง', 'เลือก', 'ตอบ', 'ข.', 'ก.', 'ง.', 'จ.', 'สอบ', 'ออก', 'สำคัญ', 'ต้อง', 'ควร']
    seen_exam = set()
    for line in lines:
        if any(kw in line for kw in exam_keywords):
            cleaned = line.strip()
            if cleaned and cleaned not in seen_exam and len(cleaned) > 15 and len(cleaned) < 200:
                exam_points.append(cleaned)
                seen_exam.add(cleaned)
    
    # Deduplicate numbers
    seen_num = set()
    deduped_numbers = []
    for num, label, ctx in numbers:
        key = num[:30]
        if key not in seen_num:
            seen_num.add(key)
            deduped_numbers.append((num, label, ctx))
    
    return {
        'title': title,
        'key_points': key_points[:30],  # cap at 30
        'numbers': deduped_numbers[:40],  # cap at 40
        'org_lines': org_lines[:20],
        'exam_points': exam_points[:30],
        'is_law': is_law,
        'is_exam': is_exam,
    }

# ─── Build new simplified markdown ───
def build_new_md(data, original_filename):
    md = []
    
    md.append(f"# {data['title']}\n")
    md.append(f"**ไฟล์ต้นฉบับ:** `{original_filename}`\n")
    md.append(f"**ประเภท:** {'กฎหมาย/ระเบียบ' if data['is_law'] else 'ความรู้ทั่วไป/แผนยุทธศาสตร์'}\n")
    
    # ── สรุปประเด็นสำคัญ ──
    md.append("\n## 📌 สรุปประเด็นสำคัญ\n")
    
    if data['key_points']:
        # Filter to bullet points and meaningful lines
        for kp in data['key_points']:
            clean = kp.lstrip('-*•').strip()
            if len(clean) > 10:
                md.append(f"- {clean}\n")
    else:
        md.append("- ไม่พบข้อมูลเพียงพอสำหรับการสรุป\n")
    
    # ── ตัวเลขที่ต้องจำ ──
    md.append("\n## 🔢 ตัวเลขที่ต้องจำ\n")
    numbers = data['numbers']
    
    if numbers:
        # Group by type
        by_type = {}
        for num, label, ctx in numbers:
            if label not in by_type:
                by_type[label] = []
            by_type[label].append((num, ctx))
        
        for label, items in by_type.items():
            md.append(f"**{label}**\n")
            for num, ctx in items[:8]:  # max 8 per type
                # Clean context
                ctx_clean = ctx.replace('-', ' ').strip()
                md.append(f"- **{num}**{ctx}\n")
            md.append("\n")
    else:
        md.append("- ไม่พบตัวเลขสำคัญในเอกสารนี้\n")
    
    # ── โครงสร้างองค์กร ──
    if data['is_law'] and data['org_lines']:
        md.append("\n## 🏛️ โครงสร้างองค์กร\n")
        for org in data['org_lines']:
            md.append(f"- {org}\n")
    
    # ── จุดที่ออกสอบบ่อย ──
    md.append("\n## 💡 จุดที่ออกสอบบ่อย\n")
    
    if data['exam_points']:
        seen = set()
        count = 0
        for ep in data['exam_points']:
            # Deduplicate
            key = ep[:50]
            if key not in seen and count < 15:
                seen.add(key)
                md.append(f"- {ep}\n")
                count += 1
    elif data['key_points']:
        # Fallback: use key points as exam points
        count = 0
        for kp in data['key_points'][:10]:
            clean = kp.lstrip('-*•').strip()
            if len(clean) > 15:
                md.append(f"- {clean}\n")
                count += 1
    else:
        md.append("- ไม่พบข้อมูลสำหรับจุดออกสอบบ่อย\n")
    
    return ''.join(md)

# ─── Process all md files ───
def process_all_mds():
    folders = [
        os.path.join(BASE_DIR, "E1.นักวิเคราะห์นโยบายและแผนปฏิบัติการ"),
        os.path.join(BASE_DIR, "ความรู้เกี่ยวกับการปฏิบัติราชการ"),
    ]
    
    # Also root
    root_mds = [os.path.join(BASE_DIR, f) for f in os.listdir(BASE_DIR) if f.endswith('.md')]
    
    all_mds = []
    for folder in folders:
        if os.path.isdir(folder):
            for f in os.listdir(folder):
                if f.endswith('.md'):
                    all_mds.append(os.path.join(folder, f))
    
    all_mds.extend(root_mds)
    all_mds.sort()
    
    log(f"Found {len(all_mds)} .md files to revise")
    
    results = []
    for i, md_path in enumerate(all_mds):
        original_name = os.path.basename(md_path).replace('.md', '')
        log(f"[{i+1}/{len(all_mds)}] Revising: {original_name}")
        
        try:
            with open(md_path, 'r', encoding='utf-8') as f:
                md_text = f.read()
            
            data = parse_existing_md(md_text)
            new_md = build_new_md(data, original_name)
            
            with open(md_path, 'w', encoding='utf-8') as f:
                f.write(new_md)
            
            log(f"  ✓ Saved ({len(new_md):,} chars)")
            results.append((original_name, "OK"))
        except Exception as e:
            import traceback
            log(f"  ✗ ERROR: {e}")
            traceback.print_exc()
            results.append((original_name, f"ERROR: {e}"))
    
    return results

# ─── Main ───
log("\n" + "="*60)
log("STARTING MD REVISION - New Simplified Structure")
log(f"Time: {datetime.now().isoformat()}")
log("="*60)

results = process_all_mds()

log("\n" + "="*60)
ok = sum(1 for _, r in results if 'OK' in r)
err = sum(1 for _, r in results if 'ERROR' in r)
log(f"Complete: {len(results)} files | OK: {ok} | Errors: {err}")
log("="*60)

LOGfp.close()
print("Done.")