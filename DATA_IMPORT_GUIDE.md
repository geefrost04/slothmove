# คู่มือการใช้ข้อมูลที่ Extract แล้ว

> อัปเดตล่าสุด: 21 พฤษภาคม 2569

---

## 📁 ไฟล์ที่ Extract ออกมาแล้ว

### โครงสร้างโฟลเดอร์

```
extracted-data/
├── admin_act/
│   ├── full_text.txt       # ข้อความทั้งหมดจาก PDF ทุกหน้า
│   ├── quiz_raw.json       # ข้อสอบดิบ (ยังไม่จัดรูปแบบ)
│   ├── quiz_cleaned.json   # ข้อสอบที่จัดรูปแบบแล้ว ✅
│   └── vocabulary.json      # คำศัพท์แยกออกมา
│
├── disaster_act/
│   └── ...
│
├── national_plan/
│   └── ...
│
└── [หัวข้ออื่นๆ]/
    └── ...
```

---

## 📄 ส่วนที่ 1: ไฟล์เนื้อหาสรุป (`full_text.txt`)

### ใช้ทำอะไร
สร้างไฟล์ HTML เนื้อหาสรุป 3 ส่วน

### โครงสร้างไฟล์

```txt
=== หน้า 1 ===
[ข้อความบทนำ]

=== หน้า 2 ===
มาตรา 1  ความเป็นมา...
มาตรา 2  นิยาม...
มาตรา 3  วัตถุประสงค์...

=== หน้า 3 ===
มาตรา 4  ...

...
```

### วิธีนำไปใช้

```python
# อ่านไฟล์
with open('extracted-data/admin_act/full_text.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# แยกตามมาตรา
import re
sections = re.split(r'มาตรา\s*(\d+)', content)

# สร้าง HTML
html = create_content_html(sections)
```

### สร้างไฟล์ HTML เนื้อหา

```python
def create_content_html(topic, full_text):
    """สร้างไฟล์ HTML เนื้อหาสรุป 3 ส่วน"""
    
    # แยกส่วนที่ 1: เนื้อหาสรุปสำคัญ
    content_summary = extract_content_summary(full_text)
    
    # แยกส่วนที่ 2: โครงสร้างองค์กร
    org_structure = extract_org_structure(full_text)
    
    # แยกส่วนที่ 3: คำศัพท์และตัวเลข
    vocabulary = extract_vocabulary(full_text)
    
    return f'''<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="utf-8"/>
    <title>เนื้อหา — {topic} | SlothMove</title>
</head>
<body>
    <!-- ส่วนที่ 1: เนื้อหาสรุปสำคัญ -->
    <section id="content-summary">
        <h1>📚 เนื้อหาสรุปสำคัญ</h1>
        {content_summary}
    </section>
    
    <!-- ส่วนที่ 2: โครงสร้างองค์กร -->
    <section id="org-structure">
        <h1>🏛️ โครงสร้างองค์กร</h1>
        {org_structure}
    </section>
    
    <!-- ส่วนที่ 3: คำศัพท์และตัวเลข -->
    <section id="vocabulary">
        <h1>📊 คำศัพท์และตัวเลขน่ารู้</h1>
        {vocabulary}
    </section>
</body>
</html>'''
```

---

## ❓ ส่วนที่ 2: ไฟล์ข้อสอบ (`quiz_cleaned.json`)

### ใช้ทำอะไร
สร้างไฟล์ Quiz + เพิ่มข้อสอบให้ครบ 100 ข้อ

### โครงสร้างไฟล์

```json
{
  "topic": "admin_act",
  "title": "พ.ร.บ. ระเบียบบริหารราชการแผ่นดิน พ.ศ. 2534",
  "total_questions": 85,
  "questions": [
    {
      "number": 1,
      "question": "พ.ร.บ. ฉบับนี้มีผลบังคับใช้ตั้งแต่เมื่อใด",
      "choices": [
        "ตั้งแต่วันประกาศในราชกิจจานุเบกษา",
        "ตั้งแต่วันถัดจากวันประกาศ",
        "เมื่อพ้น 30 วันนับแต่วันประกาศ",
        "ตามที่คณะรัฐมนตรีกำหนด"
      ],
      "answer": 1,
      "source": "สรุปแนวข้อสอบ หน้า 10",
      "explanation": ""
    }
  ]
}
```

### วิธีนำไปใช้

```python
import json

# อ่านไฟล์
with open('extracted-data/admin_act/quiz_cleaned.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

questions = data['questions']
print(f"ข้อสอบที่มี: {len(questions)} ข้อ")

# เพิ่มข้อสอบให้ครบ 100 ข้อ
if len(questions) < 100:
    questions = fill_up_to_100(questions)

# สร้างไฟล์ questions.js
js_content = f'''const QUESTIONS = {json.dumps(questions, ensure_ascii=False)};'''
with open('admin_act.questions.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
```

### เพิ่มข้อสอบให้ครบ 100 ข้อ

```python
def fill_up_to_100(questions, target=100):
    """เพิ่มข้อสอบให้ครบ 100 ข้อ"""
    
    current = len(questions)
    needed = target - current
    
    if needed <= 0:
        return questions[:target]
    
    # วิธีที่ 1: ดึงจากหัวข้อที่เกี่ยวข้อง
    related = get_related_questions(questions[0]['topic'], needed)
    
    # วิธีที่ 2: ปรับเปลี่ยนข้อเดิม
    modified = modify_existing_questions(questions, needed)
    
    questions.extend(related + modified)
    
    return questions[:target]
```

---

## 📋 สรุป: ขั้นตอนการทำต่อ

| ขั้นตอน | ไฟล์ที่ใช้ | ผลลัพธ์ |
|--------|-----------|--------|
| 1. สร้าง HTML เนื้อหา | `full_text.txt` | `[topic].html` |
| 2. สร้าง Quiz HTML | `quiz_cleaned.json` | `Quiz_[topic].html` |
| 3. สร้าง questions.js | `quiz_cleaned.json` | `[topic].questions.js` |
| 4. เพิ่มข้อสอบ | `quiz_cleaned.json` + หัวข้อที่เกี่ยวข้อง | 100 ข้อ |

---

*ต้องการให้ผมช่วยสร้างไฟล์ HTML เนื้อหา หรือ Quiz ให้เลยไหมครับ?*