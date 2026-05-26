# SlothMove Project - สรุปสถานการณ์และ Workflow

> อัปเดตล่าสุด: 21 พฤษภาคม 2569

---

## 📋 สรุปสถานการณ์ปัจจุบัน

### ✅ สิ่งที่ยังทำงานได้ปกติ

| หมวด | สถานะ | หมายเหตุ |
|------|--------|----------|
| ไฟล์ `.questions.js` ทั้งหมด | ✅ ปลอดภัย | ข้อมูลคำถามครบถ้วน 100% |
| ไฟล์ CSS (`*.css`) | ✅ ปลอดภัย | shared.css, quiz-pab-shared.css |
| โครงสร้าง Git | ✅ ปกติ | มี commit history ล่าสุด |
| ไฟล์โฟลเดอร์ Industry | ✅ สมบูรณ์ | ใช้เป็น template อ้างอิง |
| ไฟล์โฟลเดอร์ OPSd | ✅ สมบูรณ์ | ทำงานได้ปกติ |

### ❌ สิ่งที่เสียหาย (โฟลเดอร์ PAB)

| หมวด | สถานะ | หมายเหตุ |
|------|--------|----------|
| ไฟล์ `.html` ทั้งหมด | ❌ เสียหาย | มีโครงสร้าง HTML ซ้ำซ้อน |
| Favicon | ❌ ต้องแก้ใหม่ | ต้องเพิ่มอย่างถูกต้อง |

### 🔧 สิ่งที่ต้องทำ

1. **กู้คืนไฟล์ HTML** ของโฟลเดอร์ PAB
2. **เพิ่ม Favicon** อย่างถูกต้องโดยไม่ทำลายโครงสร้าง
3. **ตรวจสอบการทำงาน** หลังจากกู้คืน

---

## 📖 Workflow ของโปรเจกต์ SlothMove

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           SLOTHMOVE WORKFLOW                                │
└─────────────────────────────────────────────────────────────────────────────┘

  ╔══════════════╗     ╔══════════════╗     ╔══════════════╗     ╔══════════════╗
  ║  แหล่งข้อมูล  ║     ║  สกัดข้อมูล   ║     ║  สร้าง Quiz  ║     ║   Deploy     ║
  ║  (PDF/สรุป)  ║ ──► ║  (Python)   ║ ──► ║  (HTML+JS) ║ ──► ║  (GitHub)   ║
  ╚══════════════╝     ╚══════════════╝     ╚══════════════╝     ╚══════════════╝
        │                    │                    │                    │
        ▼                    ▼                    ▼                    ▼
  ┌─────────────┐      ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
  │ • พ.ร.บ.     │      │ • PyPDF2    │      │ • ข้อสอบ   │      │ • slothmove │
  │ • ระเบียบ    │      │ • Regex     │      │ • เฉลย     │      │   th.com    │
  │ • ความรู้    │      │ • JSON      │      │ • CSS      │      │ • Favicon   │
  │ • ภาษาอังกฤษ │      │ • โครงสร้าง │      │ • JS       │      │ • SEO       │
  └─────────────┘      └─────────────┘      └─────────────┘      └─────────────┘
```

---

## 📊 โครงสร้างโฟลเดอร์

```
SlothMove/
├── Page/
│   ├── source/
│   │   ├── PAB/           ← กรมป้องกันและบรรเทาสาธารณภัย (เสียหาย ❌)
│   │   │   ├── *.html     ← ต้องสร้างใหม่
│   │   │   ├── *.questions.js ← ปลอดภัย ✅
│   │   │   ├── quiz-pab-shared.css ← ปลอดภัย ✅
│   │   │   └── shared.css ← ปลอดภัย ✅
│   │   │
│   │   ├── Industry/      ← อุตสาหกรรม (สมบูรณ์ ✅)
│   │   │   ├── *.html
│   │   │   ├── *.questions.js
│   │   │   └── shared.css
│   │   │
│   │   └── OPSd/          ← สำนักนายกรัฐมนตรี (สมบูรณ์ ✅)
│   │       ├── *.html
│   │       ├── *.questions.js
│   │       └── shared.css
│   │
│   └── shared/
│       ├── base.css
│       ├── components.css
│       ├── fonts.css
│       ├── quiz.css
│       └── shared.css
│
├── data ปภ/              ← แหล่งข้อมูลดิบ
│   ├── ความรู้เกี่ยวกับการปฏิบัติราชการ/
│   ├── E1.นักวิเคราะห์นโยบายและแผนปฏิบัติการ/
│   └── ประกาศ.pdf
│
└── extracted-data/        ← ข้อมูลที่สกัดแล้ว
    ├── admin_act/
    ├── disaster_act/
    ├── national_plan/
    └── *.txt, *.json
```

---

## 🔄 ขั้นตอนการสร้าง Quiz ใหม่

### Step 1: เตรียมข้อมูล (Data Preparation)

#### 1.1 แหล่งข้อมูลที่ใช้

โปรเจกต์ใช้ข้อมูลจากหลายแหล่ง:

| แหล่งข้อมูล | ประเภท | ตัวอย่าง |
|------------|--------|----------|
| พ.ร.บ. กฎหมาย | PDF | พ.ร.บ. ระเบียบบริหารราชการแผ่นดิน พ.ศ. 2534 |
| ระเบียบ | PDF | ระเบียบสำนักนายกรัฐมนตรีว่าด้วยงานสารบรรณ |
| ความรู้ทั่วไป | PDF | ความรู้เกี่ยวกับการปฏิบัติราชการ |
| แนวข้อสอบ | PDF | ข้อสอบจากสภา, ก.พ. |
| ภาษาอังกฤษ | PDF | คำศัพท์, ไวยากรณ์, บทสนทนา |

#### 1.2 โครงสร้างโฟลเดอร์ข้อมูล

```bash
# โครงสร้างโฟลเดอร์ data ปภ/
data ปภ/
├── ความรู้เกี่ยวกับการปฏิบัติราชการ/
│   ├── 1.(ตัวเต็ม+สรุป+ปรนัย900) พ.ร.บ.ระเบียบบริหารราชการแผ่นดิน พ.ศ. 2534.pdf
│   ├── 2.(สรุป+ปรนัย100) พ.ร.บ.ปรับปรุงกระทรวง ทบวง กรม.pdf
│   ├── 3.(สรุป+ปรนัย100) พ.ร.บ.ข้อมูลข่าวสารของราชการ พ.ศ. 2540.pdf
│   ├── ...
│   └── 18.แนวข้อสอบ ความรู้เกี่ยวกับกรมป้องกันและบรรเทาสาธารณภัย.pdf
│
├── E1.นักวิเคราะห์นโยบายและแผนปฏิบัติการ/
│   ├── 1.แนวข้อสอบ ความรู้เกี่ยวกับการวิเคราะห์นโยบายสาธารณะ.pdf
│   ├── 2.(ฉบับเต็ม+สรุป+ปรนัย100+อัยนัย20) แผนพัฒนาเศรษฐกิจและสังคม.pdf
│   └── ...
│
└── ประกาศ.pdf
```

#### 1.3 การจัดระบบตั้งชื่อไฟล์

รูปแบบ: `[ลำดับ].[สรุป/เต็ม][ปรนัย][จำนวนข้อ] [ชื่อเรื่อง].pdf`

```bash
# ตัวอย่าง
1.(ตัวเต็ม+สรุป+ปรนัย100+อัตนัย50) พ.ร.บ.ระเบียบบริหารราชการแผ่นดิน.pdf
   ├── ลำดับ: 1
   ├── ประเภท: ตัวเต็ม, สรุป
   ├── ปรนัย: 100 ข้อ
   ├── อัตนัย: 50 ข้อ
   └── ชื่อเรื่อง: พ.ร.บ.ระเบียบบริหารราชการแผ่นดิน
```

#### 1.4 เครื่องมือเตรียมข้อมูล

```bash
# ติดตั้ง Python libraries
pip install pdfplumber PyPDF2 python-docx openpyxl --break-system-packages

# หรือใช้ conda
conda install pdfplumber PyPDF2
```

### Step 2: สกัดข้อมูล (Data Extraction)

#### 2.1 สกัดจาก PDF

```python
# _extract_pdf.py
import pdfplumber
import re
import json
import os

def extract_text_from_pdf(pdf_path, output_dir):
    """สกัดข้อความจาก PDF"""
    
    all_text = []
    
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            if text:
                all_text.append(f"--- Page {i+1} ---\n{text}")
    
    return "\n\n".join(all_text)

def extract_tables_from_pdf(pdf_path):
    """สกัดตารางจาก PDF (ถ้ามี)"""
    
    tables = []
    
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages):
            page_tables = page.extract_tables()
            for table in page_tables:
                tables.append({
                    'page': i+1,
                    'data': table
                })
    
    return tables

def extract_quiz_from_text(text):
    """แยกข้อสอบจากข้อความที่สกัดได้"""
    
    questions = []
    
    # รูปแบบข้อสอบปรนัย
    # 1. คำถาม (ก) ข้อ ก (ข) ข้อ ข (ค) ข้อ ค (ง) ข้อ ง
    pattern = r'(\d+)\.\s*([^\(\)]+(?:\([ก-ฮ]\)\s*[^\(\)]+)+)'
    
    # รูปแบบตัวเลือก
    # (ก) ตัวเลือก หรือ ก. ตัวเลือก
    choice_pattern = r'[\(ก-ฮ\.]+\s*([^(\)]+)'
    
    # หาเฉลยจากคำว่า "เฉลย" หรือ "*"
    answer_pattern = r'[เฉลยAnswer*#]+\s*[\(ก-ฮ\.\)]*\s*([ก-ฮ])'
    
    # ... ประมวลผลต่อ
    
    return questions
```

#### 2.2 สกัดจาก Word Document

```python
# _extract_docx.py
from docx import Document

def extract_text_from_docx(docx_path):
    """สกัดข้อความจาก Word"""
    
    doc = Document(docx_path)
    full_text = []
    
    for para in doc.paragraphs:
        full_text.append(para.text)
    
    for table in doc.tables:
        for row in table.rows:
            for cell in row.cells:
                full_text.append(cell.text)
    
    return "\n".join(full_text)
```

#### 2.3 สกัดจาก Excel

```python
# _extract_excel.py
import pandas as pd
import openpyxl

def extract_quiz_from_excel(excel_path, sheet_name=0):
    """สกัดข้อสอบจาก Excel"""
    
    df = pd.read_excel(excel_path, sheet_name=sheet_name)
    
    questions = []
    for _, row in df.iterrows():
        questions.append({
            'question': row['คำถาม'],
            'choices': [
                row['ตัวเลือก ก'],
                row['ตัวเลือก ข'],
                row['ตัวเลือก ค'],
                row['ตัวเลือก ง']
            ],
            'answer': int(row['เฉลย']) - 1,  # แปลงเป็น index
            'explanation': row.get('เหตุผล', '')
        })
    
    return questions
```

#### 2.4 ผลลัพธ์การสกัด

```bash
# ผลลัพธ์จะเก็บใน extracted-data/
extracted-data/
├── admin_act/
│   ├── full_text.txt      # ข้อความทั้งหมด
│   ├── quiz_raw.json       # ข้อสอบดิบ
│   └── quiz_cleaned.json   # ข้อสอบที่清理并格式化
│
├── disaster_act/
│   └── ...
│
└── national_plan/
    └── ...
```

### Step 3: ประมวลผลข้อมูล (Data Processing)

#### 3.1 ทำความสะอาดข้อมูล

```python
# _process_quiz.py
import json
import re

def clean_question(question_text):
    """ทำความสะอาดข้อความคำถาม"""
    
    # ลบหมายเลขข้อ
    text = re.sub(r'^\d+\.\s*', '', question_text)
    
    # ลบช่องว่างเกิน
    text = re.sub(r'\s+', ' ', text)
    
    # ลบอักขระพิเศษที่ไม่จำเป็น
    text = re.sub(r'[^\w\s\u0E00-\u0E7F.,!?()-]', '', text)
    
    return text.strip()

def normalize_choices(choices):
    """จัดรูปแบบตัวเลือก"""
    
    normalized = []
    for choice in choices:
        # ลบข้อความที่ไม่จำเป็น
        choice = re.sub(r'^\([ก-ฮ]\)\s*', '', choice)
        choice = re.sub(r'^[ก-ฮ]\.\s*', '', choice)
        normalized.append(choice.strip())
    
    return normalized

def extract_answer_from_text(text, answer_text):
    """หา index ของคำตอบที่ถูกต้อง"""
    
    # รูปแบบ: "เฉลย: ก" หรือ "Ans: ก" หรือ "*ก"
    match = re.search(r'เฉลย[:\s]*([ก-ฮ])', answer_text)
    if match:
        answer_char = match.group(1)
        # แปลงเป็น index
        return ord(answer_char) - ord('ก')
    
    return 0  # default

def create_questions_js(questions, topic_name):
    """สร้างไฟล์ questions.js"""
    
    js_content = f"""// Quiz {topic_name}
const QUESTIONS = [
"""
    
    for q in questions:
        js_content += f"""  {{
        "question": "{q['question']}",
        "choices": {json.dumps(q['choices'], ensure_ascii=False)},
        "answer": {q['answer']},
        "explanation": "{q.get('explanation', '')}"
    }},
"""
    
    js_content += "];"
    
    return js_content
```

#### 3.2 สร้างไฟล์ questions.js และเพิ่มข้อสอบให้ครบ 100 ข้อ

**หลักการสำคัญ:** แต่ละหัวข้อต้องมีข้อสอบอย่างน้อย **100 ข้อ** เพื่อให้ผู้ใช้ได้ฝึกฝนอย่างเพียงพอ

```python
# _build_questions.py
import json
import random

def build_questions_file(topic, extracted_data, target_count=100):
    """
    สร้างไฟล์ questions.js และเพิ่มข้อสอบให้ครบ 100 ข้อ
    
    target_count: จำนวนข้อสอบที่ต้องการ (default = 100)
    """
    
    # อ่านข้อมูลจาก extracted-data
    with open(f'extracted-data/{topic}/quiz_cleaned.json') as f:
        quiz_data = json.load(f)
    
    questions = quiz_data['questions']
    current_count = len(questions)
    
    print(f"ข้อสอบปัจจุบัน: {current_count} ข้อ")
    
    # เพิ่มข้อสอบจนถึง 100 ข้อ
    if current_count < target_count:
        needed = target_count - current_count
        print(f"ต้องเพิ่มอีก: {needed} ข้อ")
        
        # วิธีที่ 1: ดึงข้อสอบจากไฟล์อื่นที่เกี่ยวข้อง
        additional_questions = get_related_questions(topic, needed)
        
        # วิธีที่ 2: สร้างข้อสอบจากเนื้อหาที่ยังไม่มี
        if len(additional_questions) < needed:
            more = needed - len(additional_questions)
            additional_questions.extend(generate_quiz_from_content(topic, more))
        
        questions.extend(additional_questions)
        
        # วิธีที่ 3: ถ้ายังไม่พอ สุ่มเพิ่มจากการปรับเปลี่ยนข้อสอบเดิม
        if len(questions) < target_count:
            remaining = target_count - len(questions)
            questions.extend(modify_existing_questions(questions, remaining))
    
    print(f"ข้อสอบทั้งหมด: {len(questions)} ข้อ")
    
    # สร้าง JS
    js_content = create_questions_js(questions, topic)
    
    # เขียนไฟล์
    output_path = f'Page/source/PAB/{topic}.questions.js'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Created: {output_path}")

def get_related_questions(topic, needed):
    """ดึงข้อสอบจากหัวข้อที่เกี่ยวข้อง"""
    
    # Mapping หัวข้อที่เกี่ยวข้อง
    related_topics = {
        'admin_act': ['info_act', 'bureau_act', 'state_enterprise'],
        'disaster_act': ['road_safety', 'firefighting', 'rescue'],
        'national_plan': ['plan_10', 'plan_13', 'plan_20'],
        # เพิ่มได้ตามความเหมาะสม
    }
    
    additional = []
    if topic in related_topics:
        for related in related_topics[topic]:
            try:
                with open(f'extracted-data/{related}/quiz_cleaned.json') as f:
                    data = json.load(f)
                    # สุ่มดึงมาไม่เกิน needed ข้อ
                    sample = random.sample(data['questions'], 
                                          min(len(data['questions']), needed))
                    additional.extend(sample)
                    needed -= len(sample)
            except FileNotFoundError:
                pass
            
            if needed <= 0:
                break
    
    return additional[:needed]

def generate_quiz_from_content(topic, count):
    """สร้างข้อสอบจากเนื้อหาที่ยังไม่มี"""
    
    # อ่านเนื้อหาที่สกัดได้
    with open(f'extracted-data/{topic}/full_text.txt') as f:
        content = f.read()
    
    generated = []
    
    # ใช้ AI หรือ regex สร้างข้อสอบจากประโยคในเนื้อหา
    # ตัวอย่าง: หาประโยคที่มี "ต้อง", "ห้าม", "กำหนด", "มีผลบังคับ"
    patterns = [
        r'([ก-๙]+)\s*ต้อง\s*([ก-๙]+)',
        r'([ก-๙]+)\s*ห้าม\s*([ก-๙]+)',
        r'([ก-๙]+)\s*กำหนด\s*ให้\s*([ก-๙]+)',
        r'([ก-๙]+)\s*มีผลบังคับ\s*ตั้งแต่\s*([ก-๙]+)',
    ]
    
    # ... ประมวลผลสร้างข้อสอบ
    
    return generated[:count]

def modify_existing_questions(existing, count):
    """ปรับเปลี่ยนข้อสอบเดิมเพื่อสร้างข้อใหม่"""
    
    modified = []
    
    for i, q in enumerate(random.sample(existing, min(len(existing), count))):
        new_q = q.copy()
        
        # เปลี่ยนวิธีถาม (เช่น จาก "ใคร" เป็น "อะไร")
        # หรือสลับตัวเลือก
        
        new_q['question'] = f"ตามที่กล่าวมาข้อใดถูกต้อง: {q['question']}"
        
        # สลับตัวเลือก
        if i % 2 == 0:
            new_q['choices'] = q['choices'][::-1]  # กลับตัวเลือก
            # ปรับคำตอบ
            new_q['answer'] = 3 - q['answer']
        
        modified.append(new_q)
    
    return modified

# รัน
build_questions_file('admin_act', extracted_data, target_count=100)
```

**แนวทางการเพิ่มข้อสอบให้ครบ 100 ข้อ:**

| วิธี | รายละเอียด | ข้อดี | ข้อเสีย |
|------|-----------|------|---------|
| 1. ดึงจากหัวข้อที่เกี่ยวข้อง | ข้อสอบจากกฎหมายใกล้เคียง | ข้อมูลถูกต้อง | อาจไม่ตรงประเด็น |
| 2. สร้างจากเนื้อหา | ใช้ AI หรือ regex สร้างใหม่ | ครอบคลุมเนื้อหา | อาจมีข้อผิดพลาด |
| 3. ปรับเปลี่ยนข้อเดิม | สลับตัวเลือก, เปลี่ยนวิธีถาม | ง่ายและเร็ว | อาจซ้ำกัน |
| 4. รวบรวมจากแหล่งอื่น | แนวข้อสอบจากเว็บอื่น | หลากหลาย | ต้องตรวจสอบความถูกต้อง |
```

### Step 4: สร้างไฟล์ HTML เนื้อหา (Content HTML Generation)

นอกจากไฟล์ Quiz แล้ว โปรเจกต์ยังมีไฟล์ **HTML เนื้อหา** ที่แสดงข้อมูลทฤษฎีให้ผู้ใช้อ่านก่อนทำข้อสอบ

#### 4.1 โครงสร้างไฟล์เนื้อหา

```html
<!-- admin_act.html -->
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>เนื้อหา — พ.ร.บ. ระเบียบบริหารราชการแผ่นดิน พ.ศ. 2534 | SlothMove</title>
    
    <!-- SEO Meta Tags -->
    <link href="..." rel="canonical"/>
    <meta property="og:*" content="..."/>
    
    <!-- Styles -->
    <link href="shared.css" rel="stylesheet"/>
    <link href="quiz-pab-shared.css" rel="stylesheet"/>
    <style>
        /* Content-specific styles */
        .content-container { max-width: 800px; margin: 0 auto; }
        .chapter { margin-bottom: 2rem; }
        .section { margin-left: 1rem; }
    </style>
</head>
<body class="min-h-screen bg-slate-50">
    <!-- Navigation -->
    <nav>...</nav>
    
    <!-- Content Header -->
    <header class="bg-slate-900 text-white py-12">
        <div class="max-w-3xl mx-auto px-4">
            <h1 class="text-3xl font-bold mb-2">พ.ร.บ. ระเบียบบริหารราชการแผ่นดิน พ.ศ. 2534</h1>
            <p class="text-slate-300">สรุปเนื้อหาสำคัญและประเด็นที่ออกสอบบ่อย</p>
        </div>
    </header>
    
    <!-- Main Content -->
    <main class="max-w-3xl mx-auto px-4 py-8">
        <div class="content-container">
            
            <!-- Chapter 1 -->
            <section class="chapter" id="ch1">
                <h2 class="text-xl font-bold text-slate-800 mb-4 pb-2 border-b">
                    บทที่ 1 ความเป็นมาและวัตถุประสงค์
                </h2>
                <div class="section prose">
                    <p class="mb-4">...</p>
                </div>
            </section>
            
            <!-- Chapter 2 -->
            <section class="chapter" id="ch2">
                <h2 class="text-xl font-bold text-slate-800 mb-4 pb-2 border-b">
                    บทที่ 2 หลักการบริหารกิจการบ้านเมืองที่ดี
                </h2>
                <div class="section prose">
                    <ul class="list-disc pl-6 mb-4">
                        <li>...</li>
                    </ul>
                </div>
            </section>
            
            <!-- ประเด็นสำคัญ -->
            <section class="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
                <h3 class="font-bold text-amber-800 mb-3">📌 ประเด็นที่ออกสอบบ่อย</h3>
                <ul class="space-y-2">
                    <li>• ...</li>
                </ul>
            </section>
            
        </div>
    </main>
    
    <!-- Footer -->
    <footer>...</footer>
    
    <!-- CTA to Quiz -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div class="max-w-3xl mx-auto">
            <a href="Quiz_admin_act.html" class="block w-full py-3 text-center bg-amber-500 text-white rounded-xl font-bold">
                ทำข้อสอบ →
            </a>
        </div>
    </div>
</body>
</html>
```

#### 4.2 สร้างไฟล์เนื้อหาอัตโนมัติ

ไฟล์เนื้อหาสรุปแต่ละหัวข้อต้องมี **3 ส่วนหลัก** เพื่อให้ผู้อ่านเข้าใจเนื้อหาอย่างครบถ้วน:

##### 4.2.1 ส่วนที่ 1: เนื้อหาสรุปสำคัญ (Content Summary)

สรุปเนื้อหาส่วนสำคัญให้ละเอียดจนสามารถทำข้อสอบได้:

```html
<!-- ส่วนที่ 1: เนื้อหาสรุปสำคัญ -->
<section id="content-summary" class="mb-12">
    <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <span class="text-3xl">📚</span>
        เนื้อหาสรุปสำคัญ
    </h2>
    
    <!-- มาตรา/บท -->
    <article class="space-y-8">
        
        <!-- หมวด 1: บทนำ -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 class="text-xl font-bold text-slate-800 mb-4 pb-2 border-b">
                หมวดที่ 1: บทนำและความเป็นมา
            </h3>
            
            <div class="prose">
                <!-- ประเด็นสำคัญ -->
                <div class="mb-6">
                    <h4 class="font-semibold text-slate-700 mb-2">🎯 ความเป็นมา</h4>
                    <p class="text-slate-600 leading-relaxed">
                        [เขียนความเป็นมาอย่างละเอียด]
                    </p>
                </div>
                
                <div class="mb-6">
                    <h4 class="font-semibold text-slate-700 mb-2">🎯 วัตถุประสงค์</h4>
                    <ul class="list-disc pl-6 space-y-2 text-slate-600">
                        <li>[วัตถุประสงค์ข้อ 1]</li>
                        <li>[วัตถุประสงค์ข้อ 2]</li>
                        <li>[วัตถุประสงค์ข้อ 3]</li>
                    </ul>
                </div>
                
                <!-- Key Point Box -->
                <div class="p-4 bg-amber-50 rounded-xl border border-amber-200 mb-4">
                    <h5 class="font-bold text-amber-800 mb-2">💡 จุดที่ออกสอบบ่อย</h5>
                    <p class="text-amber-700 text-sm">
                        [ประเด็นสำคัญที่เคยออกสอบ]
                    </p>
                </div>
            </div>
        </div>
        
        <!-- หมวด 2: นิยามและคำจำกัดความ -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 class="text-xl font-bold text-slate-800 mb-4 pb-2 border-b">
                หมวดที่ 2: นิยามและคำจำกัดความ
            </h3>
            
            <div class="grid gap-4">
                <div class="p-4 bg-slate-50 rounded-xl">
                    <strong class="text-slate-800">"คำว่า XXX"</strong>
                    <p class="text-slate-600 mt-1">
                        หมายถึง [นิยามที่ชัดเจน] (มาตรา X วรรค X)
                    </p>
                </div>
            </div>
        </div>
        
        <!-- หมวด 3: สิทธิและหน้าที่ -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 class="text-xl font-bold text-slate-800 mb-4 pb-2 border-b">
                หมวดที่ 3: สิทธิและหน้าที่
            </h3>
            
            <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 bg-green-50 rounded-xl border border-green-200">
                    <h4 class="font-bold text-green-800 mb-2">✅ สิทธิ</h4>
                    <ul class="list-disc pl-4 text-green-700 text-sm space-y-1">
                        <li>[สิทธิที่ 1]</li>
                        <li>[สิทธิที่ 2]</li>
                    </ul>
                </div>
                <div class="p-4 bg-red-50 rounded-xl border border-red-200">
                    <h4 class="font-bold text-red-800 mb-2">❌ หน้าที่</h4>
                    <ul class="list-disc pl-4 text-red-700 text-sm space-y-1">
                        <li>[หน้าที่ที่ 1]</li>
                        <li>[หน้าที่ที่ 2]</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- หมวด 4: บทลงโทษ -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 class="text-xl font-bold text-slate-800 mb-4 pb-2 border-b">
                หมวดที่ 4: บทลงโทษ
            </h3>
            
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead class="bg-slate-100">
                        <tr>
                            <th class="p-3 text-left">การกระทำ</th>
                            <th class="p-3 text-left">โทษ</th>
                            <th class="p-3 text-left">มาตรา</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <td class="p-3">[การกระทำผิด]</td>
                            <td class="p-3 text-red-600">[โทษ]</td>
                            <td class="p-3">[มาตรา]</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    </article>
</section>
```

##### 4.2.2 ส่วนที่ 2: โครงสร้างองค์กร (Organization Structure)

อธิบายว่าใครทำอะไรบ้างในกฎหมายนี้:

```html
<!-- ส่วนที่ 2: โครงสร้างองค์กร -->
<section id="org-structure" class="mb-12">
    <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <span class="text-3xl">🏛️</span>
        โครงสร้างองค์กร
    </h2>
    
    <div class="space-y-6">
        
        <!-- หน่วยงานหลัก -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 class="text-xl font-bold text-slate-800 mb-4">
                หน่วยงานที่เกี่ยวข้อง
            </h3>
            
            <div class="grid gap-4">
                
                <!-- หน่วยงานที่ 1 -->
                <div class="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                    <div class="flex items-start justify-between">
                        <div>
                            <h4 class="font-bold text-blue-800">[ชื่อหน่วยงาน]</h4>
                            <p class="text-blue-600 text-sm mb-2">[ตำแหน่ง/บทบาท]</p>
                            <ul class="text-blue-700 text-sm space-y-1">
                                <li>• [หน้าที่ที่ 1]</li>
                                <li>• [หน้าที่ที่ 2]</li>
                                <li>• [หน้าที่ที่ 3]</li>
                            </ul>
                        </div>
                        <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                            [มาตรา X]
                        </span>
                    </div>
                </div>
                
                <!-- หน่วยงานที่ 2 -->
                <div class="p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                    <div class="flex items-start justify-between">
                        <div>
                            <h4 class="font-bold text-green-800">[ชื่อหน่วยงาน]</h4>
                            <p class="text-green-600 text-sm mb-2">[ตำแหน่ง/บทบาท]</p>
                            <ul class="text-green-700 text-sm space-y-1">
                                <li>• [หน้าที่ที่ 1]</li>
                                <li>• [หน้าที่ที่ 2]</li>
                            </ul>
                        </div>
                        <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                            [มาตรา X]
                        </span>
                    </div>
                </div>
                
                <!-- หน่วยงานที่ 3 -->
                <div class="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                    <div class="flex items-start justify-between">
                        <div>
                            <h4 class="font-bold text-purple-800">[ชื่อหน่วยงาน]</h4>
                            <p class="text-purple-600 text-sm mb-2">[ตำแหน่ง/บทบาท]</p>
                            <ul class="text-purple-700 text-sm space-y-1">
                                <li>• [หน้าที่ที่ 1]</li>
                                <li>• [หน้าที่ที่ 2]</li>
                            </ul>
                        </div>
                        <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                            [มาตรา X]
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
        
        <!-- ตารางสรุปผู้มีอำนาจหน้าที่ -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border overflow-x-auto">
            <h3 class="text-lg font-bold text-slate-800 mb-4">📊 สรุปอำนาจหน้าที่</h3>
            <table class="w-full text-sm">
                <thead class="bg-slate-100">
                    <tr>
                        <th class="p-3 text-left">หน่วยงาน</th>
                        <th class="p-3 text-left">อำนาจหน้าที่</th>
                        <th class="p-3 text-left">กฎหมายอ้างอิง</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b hover:bg-slate-50">
                        <td class="p-3 font-medium">[หน่วยงาน]</td>
                        <td class="p-3">[อำนาจหน้าที่]</td>
                        <td class="p-3 text-slate-500">[มาตรา]</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</section>
```

##### 4.2.3 ส่วนที่ 3: คำศัพท์และตัวเลขน่ารู้ (Vocabulary & Numbers)

```html
<!-- ส่วนที่ 3: คำศัพท์และตัวเลขน่ารู้ -->
<section id="vocabulary" class="mb-12">
    <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <span class="text-3xl">📊</span>
        คำศัพท์และตัวเลขน่ารู้
    </h2>
    
    <div class="grid md:grid-cols-2 gap-6">
        
        <!-- คำศัพท์สำคัญ -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span>📖</span> คำศัพท์สำคัญ
            </h3>
            
            <div class="space-y-3">
                <div class="p-3 bg-slate-50 rounded-xl">
                    <strong class="text-amber-600">[คำศัพท์ที่ 1]</strong>
                    <p class="text-slate-600 text-sm mt-1">
                        หมายถึง [ความหมาย] - ใช้ในบริบท [ตัวอย่าง]
                    </p>
                </div>
                <div class="p-3 bg-slate-50 rounded-xl">
                    <strong class="text-amber-600">[คำศัพท์ที่ 2]</strong>
                    <p class="text-slate-600 text-sm mt-1">
                        หมายถึง [ความหมาย] - ใช้ในบริบท [ตัวอย่าง]
                    </p>
                </div>
            </div>
        </div>
        
        <!-- ตัวเลขน่ารู้ -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span>🔢</span> ตัวเลขน่ารู้
            </h3>
            
            <div class="space-y-3">
                <div class="flex items-center gap-3 p-3 bg-amber-50 rounded-xl">
                    <span class="text-2xl font-bold text-amber-600">[X]</span>
                    <span class="text-slate-700">[ความหมาย]</span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-amber-50 rounded-xl">
                    <span class="text-2xl font-bold text-amber-600">[Y]</span>
                    <span class="text-slate-700">[ความหมาย]</span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-amber-50 rounded-xl">
                    <span class="text-2xl font-bold text-amber-600">[Z]</span>
                    <span class="text-slate-700">[ความหมาย]</span>
                </div>
            </div>
        </div>
        
    </div>
    
    <!-- สรุปตัวเลขสำคัญ -->
    <div class="mt-6 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
        <h3 class="text-lg font-bold text-amber-800 mb-4">🎯 ตัวเลขที่ต้องจำ</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-center p-4 bg-white rounded-xl shadow-sm">
                <div class="text-3xl font-bold text-amber-600">[ตัวเลข]</div>
                <div class="text-sm text-slate-600 mt-1">[คำอธิบาย]</div>
            </div>
        </div>
    </div>
</section>
```

#### 4.3 Template ไฟล์เนื้อหา

```python
# _build_content_html.py
def create_content_html(topic, content_data, output_path):
    """สร้างไฟล์ HTML เนื้อหาอัตโนมัติ"""
    
    html = f"""<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>เนื้อหา — {content_data['title']} | SlothMove</title>
    
    <!-- SEO -->
    <link href="{content_data['url']}" rel="canonical"/>
    <meta property="og:title" content="เนื้อหา — {content_data['title']}"/>
    <meta property="og:description" content="{content_data['description']}"/>
    
    <!-- Styles -->
    <link href="shared.css" rel="stylesheet"/>
    <link href="quiz-pab-shared.css" rel="stylesheet"/>
</head>
<body class="min-h-screen bg-slate-50">
    <!-- Navigation -->
    <nav class="bg-slate-900 sticky top-0 z-50">
        <div class="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="indexPAB.html" class="text-white font-bold">← หน้าหลัก</a>
            <a href="Quiz_{topic}.html" class="px-4 py-1.5 bg-amber-500 text-white rounded-lg">
                ทำข้อสอบ
            </a>
        </div>
    </nav>
    
    <!-- Header -->
    <header class="bg-slate-900 text-white py-12">
        <div class="max-w-3xl mx-auto px-4">
            <h1 class="text-3xl font-bold mb-2">{content_data['title']}</h1>
            <p class="text-slate-300">{content_data['subtitle']}</p>
        </div>
    </header>
    
    <!-- Content -->
    <main class="max-w-3xl mx-auto px-4 py-8">
        {content_data['chapters_html']}
    </main>
    
    <!-- Footer CTA -->
    <div class="bg-slate-900 text-white py-8 text-center">
        <p class="mb-4">พร้อมทำข้อสอบแล้วหรือยัง?</p>
        <a href="Quiz_{topic}.html" class="inline-block px-8 py-3 bg-amber-500 rounded-xl font-bold">
            เริ่มทำข้อสอบ →
        </a>
    </div>
</body>
</html>"""
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
```

#### 4.3 Template ไฟล์เนื้อหา

```html
<!-- _template_content.html -->
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>เนื้อหา — [ชื่อหัวข้อ] | SlothMove</title>
    
    <!-- Favicon -->
    <link rel="icon" href="data:image/png;base64,..."/>
    
    <!-- SEO Meta Tags -->
    <link href="[canonical_url]" rel="canonical"/>
    <meta property="og:title" content="เนื้อหา — [ชื่อหัวข้อ]"/>
    <meta property="og:description" content="[description]"/>
    <meta property="og:image" content="[logo_url]"/>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&family=Kanit:wght@400;500;600;700&display=swap" rel="stylesheet"/>
    
    <!-- TailwindCSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Custom Styles -->
    <link href="shared.css" rel="stylesheet"/>
    <link href="quiz-pab-shared.css" rel="stylesheet"/>
    
    <style>
        body { font-family: 'Sarabun', sans-serif; }
        .font-kanit { font-family: 'Kanit', sans-serif; }
        
        /* Content Styles */
        .prose h2 { @apply text-xl font-bold text-slate-800 mb-4 pb-2 border-b; }
        .prose h3 { @apply text-lg font-semibold text-slate-700 mb-3 mt-6; }
        .prose p { @apply text-slate-600 leading-relaxed mb-4; }
        .prose ul { @apply list-disc pl-6 mb-4 space-y-2; }
        .prose li { @apply text-slate-600; }
        .prose strong { @apply text-slate-800 font-semibold; }
        
        /* Highlight Box */
        .highlight-box {
            @apply mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200;
        }
    </style>
</head>
<body class="min-h-screen bg-slate-50">
    
    <!-- Sticky Navigation -->
    <nav class="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div class="max-w-3xl mx-auto px-4 flex items-center justify-between h-14">
            <div class="flex items-center gap-3">
                <img src="pic/logo_PAB.png" class="h-8" alt="Logo"/>
                <span class="font-bold text-white font-kanit text-sm">SlothMove</span>
            </div>
            <div class="flex items-center gap-2">
                <a href="indexPAB.html" class="px-3 py-1.5 text-slate-300 hover:text-white text-sm">หน้าหลัก</a>
                <a href="Quiz_[topic].html" class="px-4 py-1.5 bg-amber-500 text-white rounded-lg text-sm font-bold">
                    ทำข้อสอบ
                </a>
            </div>
        </div>
    </nav>
    
    <!-- Page Header -->
    <header class="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div class="max-w-3xl mx-auto px-4 text-center">
            <div class="text-5xl mb-4">[emoji]</div>
            <h1 class="text-3xl font-bold font-kanit mb-3">[ชื่อหัวข้อ]</h1>
            <p class="text-slate-300">[คำอธิบายสั้นๆ]</p>
            
            <div class="flex justify-center gap-4 mt-6">
                <span class="px-3 py-1 bg-white/10 rounded-full text-sm">[จำนวนมาตรา]</span>
                <span class="px-3 py-1 bg-white/10 rounded-full text-sm">[ประเภท]</span>
            </div>
        </div>
    </header>
    
    <!-- Main Content -->
    <main class="max-w-3xl mx-auto px-4 py-8">
        <article class="prose max-w-none">
            
            <!-- Table of Contents -->
            <nav class="mb-8 p-4 bg-white rounded-xl shadow-sm border">
                <h2 class="text-lg font-bold mb-3">📑 สารบัญ</h2>
                <ul class="space-y-1">
                    <li><a href="#section1" class="text-amber-600 hover:underline">1. [หัวข้อที่ 1]</a></li>
                    <li><a href="#section2" class="text-amber-600 hover:underline">2. [หัวข้อที่ 2]</a></li>
                </ul>
            </nav>
            
            <!-- Section 1 -->
            <section id="section1" class="mb-8">
                <h2>1. [ชื่อมาตรา/หัวข้อ]</h2>
                <p>เนื้อหา...</p>
                
                <div class="highlight-box">
                    <h3 class="!mb-2">💡 จำไว้</h3>
                    <p class="!mb-0">ประเด็นสำคัญที่ออกสอบบ่อย...</p>
                </div>
            </section>
            
        </article>
    </main>
    
    <!-- CTA Section -->
    <section class="bg-slate-900 text-white py-12">
        <div class="max-w-3xl mx-auto px-4 text-center">
            <h2 class="text-2xl font-bold mb-4">พร้อมทดสอบความรู้หรือยัง?</h2>
            <p class="text-slate-300 mb-6">ลองทำข้อสอบเพื่อเช็คความเข้าใจ</p>
            <a href="Quiz_[topic].html" 
               class="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-400 rounded-xl font-bold text-lg transition-colors">
                เริ่มทำข้อสอบ →
            </a>
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="bg-white border-t py-6 text-center text-slate-500 text-sm">
        <p>© 2024 SlothMove · เนื้อหาฟรีตลอดชีพ</p>
    </footer>
    
</body>
</html>
```

### Step 5: สร้างไฟล์ HTML Quiz

```html
<!-- โครงสร้าง HTML มาตรฐาน -->
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Quiz — [ชื่อหัวข้อ] | SlothMove</title>
    <link rel="icon" type="image/png" href="data:image/png;base64,..."/>  <!-- Favicon ตรงนี้ -->
    <script src="[topic].questions.js"></script>
    <!-- SEO Meta Tags -->
</head>
<body class="min-h-screen">
    <!-- Navigation -->
    <!-- Start Screen -->
    <!-- Quiz Screen -->
    <!-- Result Screen -->
    <!-- Review Screen -->
    <!-- Footer + QR Code -->
    <script>
        // Quiz Logic
        // Leaderboard Integration
        // Share Result
    </script>
</body>
</html>
```

### Step 5: ตรวจสอบและ Deploy

```bash
# 1. ตรวจสอบไฟล์
python3 _validate_quiz.py --file "Quiz_admin_act.html"

# 2. ตรวจสอบ syntax
python3 -m py_compile _build_*.py

# 3. Deploy ขึ้น GitHub
git add Page/source/PAB/*.html
git add Page/source/PAB/*.questions.js
git commit -m "Add Quiz: [ชื่อหัวข้อ]"
git push origin main
```

```html
<!-- โครงสร้าง HTML มาตรฐาน -->
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Quiz — [ชื่อหัวข้อ] | SlothMove</title>
    <link rel="icon" type="image/png" href="data:image/png;base64,..."/>  <!-- Favicon ตรงนี้ -->
    <script src="[topic].questions.js"></script>
    <!-- SEO Meta Tags -->
</head>
<body class="min-h-screen">
    <!-- Navigation -->
    <!-- Start Screen -->
    <!-- Quiz Screen -->
    <!-- Result Screen -->
    <!-- Review Screen -->
    <!-- Footer + QR Code -->
    <script>
        // Quiz Logic
        // Leaderboard Integration
        // Share Result
    </script>
</body>
</html>
```

### Step 5: ตรวจสอบและ Deploy

```bash
# 1. ตรวจสอบไฟล์
python3 _validate_quiz.py --file "Quiz_admin_act.html"

# 2. Deploy ขึ้น GitHub
git add Page/source/PAB/*.html
git commit -m "Add Quiz: [ชื่อหัวข้อ]"
git push origin main
```

---

## 📝 โครงสร้างข้อมูล Quiz

### ไฟล์ Questions (.questions.js)

```javascript
// [topic].questions.js
const QUESTIONS = [
    {
        "question": "คำถามที่ 1?",
        "choices": ["ก. ตัวเลือกที่ 1", "ข. ตัวเลือกที่ 2", "ค. ตัวเลือกที่ 3", "ง. ตัวเลือกที่ 4"],
        "answer": 0,  // ดัชนีของคำตอบที่ถูกต้อง (0-3)
        "explanation": "คำอธิบายเพิ่มเติม (ถ้ามี)"
    },
    // ...
];
```

### ไฟล์ HTML Quiz

```html
<!-- ส่วน Head -->
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Quiz — [ชื่อหัวข้อ] | SlothMove</title>
    <link href="..." rel="canonical"/>
    <meta property="og:*" content="..."/>
    <script src="[topic].questions.js"></script>
    <style>/* Quiz Styles */</style>
</head>

<!-- ส่วน Body -->
<body>
    <nav>...</nav>
    <div id="startScreen">...</div>
    <div id="quizScreen">...</div>
    <div id="resultScreen">...</div>
    <div id="reviewScreen">...</div>
    <script>/* Quiz Logic */</script>
</body>
```

---

## 🎯 ฟีเจอร์ของ Quiz

| ฟีเจอร์ | สถานะ | หมายเหตุ |
|---------|--------|----------|
| สุ่มข้อสอบ | ✅ | Fisher-Yates shuffle |
| สลับตัวเลือก | ✅ | ยกเว้นข้อที่มี "ถูกทุกข้อ" |
| เฉลยทันที | ✅ | แสดงคำตอบที่ถูกต้อง + คำอธิบาย |
| ดูข้อที่ผิด | ✅ | Review mode |
| จับเวลา | ✅ | พร้อม start/stop |
| บันทึกคะแนน | ✅ | Supabase integration |
| แชร์ผล | ✅ | Canvas + QR Code |
| SEO | ✅ | OG tags, canonical |

---

## 🛠 เครื่องมือที่ใช้

| เครื่องมือ | วัตถุประสงค์ |
|-----------|-------------|
| `pdfplumber` | สกัดข้อความจาก PDF |
| `PyPDF2` | อ่าน PDF (backup) |
| `regex` | จัดรูปแบบข้อมูล |
| `TailwindCSS` | UI Framework |
| `Supabase` | Leaderboard Database |
| `GitHub Pages` | Hosting |

---

## 📌 Checklist ก่อน Deploy

- [ ] ไฟล์ `.html` มีโครงสร้างถูกต้อง (ไม่มี tag ซ้ำ)
- [ ] Favicon เป็นรูป slothmove_mascot.png
- [ ] Meta tags ครบ (title, description, OG, canonical)
- [ ] ไฟล์ `.questions.js` มีข้อมูลครบ
- [ ] CSS ลิงก์ถูกต้อง
- [ ] JS ไม่มี error ใน console
- [ ] ทดสอบบน mobile view

---

## ⚠️ ปัญหาที่เกิดขึ้น (21 พ.ค. 2569)

### สิ่งที่เกิดขึ้น
1. พยายามเพิ่ม Favicon ให้ไฟล์ PAB ทั้งหมด
2. สคริปต์ Python ทำงานผิดพลาด
3. ไฟล์ HTML เสียโครงสร้าง (มี `<html>`, `<head>`, `<body>` ซ้ำ)

### สิ่งที่เสียหาย
- ไฟล์ `.html` ทั้งหมดในโฟลเดอร์ PAB

### สิ่งที่ไม่เสียหาย
- ไฟล์ `.questions.js` (ข้อมูลคำถาม)
- ไฟล์ CSS
- ไฟล์โฟลเดอร์อื่น (Industry, OPSd)

### วิธีแก้ไข
1. สร้างไฟล์ HTML ใหม่จาก template ของ Industry
2. เพิ่ม Favicon อย่างถูกต้อง (ใช้ sed หรือแก้ทีละไฟล์)

---

## ✅ สิ่งที่ต้องทำต่อ

1. **กู้คืนไฟล์ PAB HTML**
   - ใช้โครงสร้างจาก Industry เป็น template
   - ดึงข้อมูลจากไฟล์ `.questions.js` ที่ยังอยู่

2. **เพิ่ม Favicon อย่างถูกต้อง**
   - ใช้ Python script ที่ไม่ทำลายโครงสร้าง
   - หรือใช้ sed หรือแก้ทีละไฟล์

3. **ตรวจสอบคุณภาพ**
   - ทดสอบ HTML validator
   - ทดสอบ JS ไม่มี error

4. **Deploy**
   - Commit และ push ขึ้น GitHub

---

## 📚 ไฟล์อ้างอิง

- **Template ที่ดี:** `/Page/source/Industry/Quiz_admin_act.html`
- **ไฟล์ CSS:** `/Page/source/PAB/quiz-pab-shared.css`
- **ไฟล์ JS ที่ใช้:** `/Page/source/PAB/*.questions.js`

---

*เอกสารนี้สร้างเมื่อ 21 พฤษภาคม 2569*
*หากมีข้อสงสัย ติดต่อได้ตลอดเวลา*