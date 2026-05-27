# คู่มือโครงสร้างระบบ PAB — Data-Driven Architecture

> ระบบใหม่สำหรับจัดการเนื้อหาและข้อสอบแบบแยก Data ออกจาก Template

---

## 🎯 หลักการสำคัญ

**แยก Data ออกจาก Template** — แทนที่จะสร้าง HTML ใหม่ทุกครั้ง เราแยกเป็น:
- **Template 1 ชุด** (`_system/`) ใช้กับทุกวิชา
- **Data แยกตามวิชา** (`content/`) เก็บเนื้อหาแต่ละวิชา

### ข้อดี
- ✅ สร้างวิชาใหม่ไม่ต้องเขียน HTML ใหม่
- ✅ แก้ Design ที่เดียว อัพเดตทุกวิชา
- ✅ Data อยู่ใน JSON แก้ง่าย อ่านง่าย
- ✅ ลดขนาดไฟล์ ลดความซ้ำซ้อน

---

## 📁 โครงสร้างไฟล์

```
PAB/
├── index.html                    # Hub รวมทุกวิชา
├── _system/                      # ระบบกลาง (ใช้ร่วมทุกวิชา)
│   ├── loader.js                 # Template Engine + Render Logic
│   └── styles.css                # CSS ทั้งหมด
├── content/                      # Data แต่ละวิชา
│   ├── ministry_act.json         # เนื้อหา ministry_act
│   └── ministry_act.json.js      # JSON ห่อใน JS variable
│
└── ministry_act/                 # โฟลเดอร์แต่ละวิชา
    ├── ministry_act.html         # Hub เนื้อหาวิชานี้
    ├── quiz.html                 # Hub ควิซวิชานี้
    ├── ministry_act.questions.js # Data ข้อสอบ
    └── oldfile/                  # ไฟล์เก่า (สำรอง)
```

---

## 🔧 ไฟล์ระบบหลัก

### 1. `_system/loader.js`
**หน้าที่:** Template Engine หลัก
- สร้าง HTML structure (navbar, hero, sections)
- Render เนื้อหาจาก JSON data
- จัดการ Accordion, Glossary, ScrollSpy
- Quiz logic (timer, scoring, navigation)

**รองรับ 2 โหมด:**
- `PAGE_TYPE = 'lesson'` → แสดงเนื้อหา
- `PAGE_TYPE = 'quiz'` → แสดงข้อสอบ

### 2. `_system/styles.css`
**หน้าที่:** CSS ร่วมทั้งหมด
- CSS Variables (theme colors)
- Layout components
- Responsive design
- Quiz components

### 3. `content/[วิชา].json`
**หน้าที่:** Data เนื้อหา
```json
{
  "id": "ministry_act",
  "title": "พ.ร.บ. ปรับปรุงกระทรวงฯ",
  "emoji": "🏢",
  "stats": { "chapters": 6, "vocab": 12 },
  "sections": [
    { "id": "s1", "title": "สาระสำคัญ", "chapters": [...] },
    { "id": "s2", "title": "โครงสร้าง", "orgChart": {...} },
    { "id": "s3", "title": "คลังศัพท์", "glossary": [...] }
  ],
  "tips": [...]
}
```

---

## 📝 วิธีสร้างวิชาใหม่

### Step 1: สร้าง JSON Data

สร้างไฟล์ `content/[subject_id].json`:

```json
{
  "id": "admin_act",
  "title": "พ.ร.บ. ระเบียบบริหารราชการ",
  "subtitle": "ระเบียบบริหารราชการแผ่นดิน พ.ศ. 2534",
  "emoji": "🏛️",
  "stats": {
    "chapters": 7,
    "vocab": 15,
    "quiz": 50
  },
  "sections": [
    {
      "id": "s1",
      "title": "สาระสำคัญ",
      "chapters": [
        {
          "num": 1,
          "title": "หลักการทั่วไป",
          "emoji": "📖",
          "body": [
            { "type": "p", "text": "เนื้อหาย่อหน้า..." },
            { "type": "list", "items": ["ข้อ 1", "ข้อ 2"] },
            { "type": "box", "color": "blue", "title": "💡 จำง่าย", "items": ["..."] }
          ]
        }
      ]
    },
    {
      "id": "s2",
      "title": "โครงสร้างองค์กร",
      "orgChart": {
        "levels": [...],
        "description": "..."
      }
    },
    {
      "id": "s3",
      "title": "คลังคำศัพท์",
      "glossary": [
        { "icon": "🏛️", "term": "...", "thai": "...", "meaning": "...", "tag": "..." }
      ]
    }
  ],
  "tips": ["เคล็ดลับ 1", "เคล็ดลับ 2"]
}
```

### Step 2: สร้าง JSON.js Wrapper

สร้าง `content/[subject_id].json.js`:

```javascript
window.ADMIN_ACT_DATA = {
  // copy จาก JSON ทั้งหมด
};
```

### Step 3: สร้าง HTML Wrapper (เนื้อหา)

สร้าง `[subject_id]/[subject_id].html`:

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>ชื่อวิชา | SlothMove ปภ.</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&family=Sarabun:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Content Data -->
    <script src="../content/admin_act.json.js"></script>
    
    <!-- System Loader -->
    <script>
        window.PAGE_TYPE = 'lesson';
        window.LESSON_DATA = window.ADMIN_ACT_DATA;
        window.BASE_PATH = '../_system/';
    </script>
    <script src="../_system/loader.js"></script>
</head>
<body></body>
</html>
```

### Step 4: สร้าง HTML Wrapper (ควิซ)

สร้าง `[subject_id]/quiz.html`:

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>แบบทดสอบ ชื่อวิชา | SlothMove ปภ.</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&family=Sarabun:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Quiz Data -->
    <script src="admin_act.questions.js"></script>
    
    <!-- System Loader -->
    <script>
        window.PAGE_TYPE = 'quiz';
        window.QUIZ_DATA = window.ADMIN_ACT_QUESTIONS;
        window.BASE_PATH = '../_system/';
    </script>
    <script src="../_system/loader.js"></script>
</head>
<body></body>
</html>
```

### Step 5: สร้าง Questions JS

สร้าง `[subject_id]/[subject_id].questions.js`:

```javascript
window.ADMIN_ACT_QUESTIONS = [
    {
        q: "คำถาม?",
        o: ["ตัวเลือก A", "ตัวเลือก B", "ตัวเลือก C", "ตัวเลือก D"],
        a: 0,  // index คำตอบถูก
        exp: "คำอธิบาย..."
    },
    // ... ข้อต่อไป
];
```

### Step 6: เพิ่มลิงก์ใน Hub

แก้ไข `index.html` เพิ่มการ์ดวิชาใหม่:

```html
<a href="admin_act/admin_act.html" class="subject-card">
    <div class="subject-emoji">🏛️</div>
    <div class="subject-title">พ.ร.บ. ระเบียบบริหารฯ</div>
    <div class="subject-desc">ระเบียบบริหารราชการแผ่นดิน พ.ศ. 2534</div>
    <div class="subject-stats">
        <span class="subject-stat">7 บท</span>
        <span class="subject-stat">15 ศัพท์</span>
        <span class="subject-stat">50 ข้อ</span>
    </div>
</a>
```

---

## 🎨 Content Types ที่รองรับ

### Body Items (ใน chapters)

| Type | โครงสร้าง | ผลลัพธ์ |
|------|----------|---------|
| `p` | `{type: "p", text: "..."}` | ย่อหน้า |
| `heading` | `{type: "heading", text: "..."}` | หัวข้อ |
| `list` | `{type: "list", items: [...]}` | รายการ bullet |
| `box` | `{type: "box", color: "blue", title: "...", items: [...]}` | กล่อง info |
| `keypoint` | `{type: "keypoint", title: "...", text: "..."}` | กล่องสำคัญ |
| `grid` | `{type: "grid", items: [{color: "...", title: "...", text: "..."}]}` | Grid cards |
| `table` | `{type: "table", rows: [[...], [...]]}` | ตาราง |

### Box Colors
- `blue` — สีฟ้า (info)
- `green` — สีเขียว (success)
- `purple` — สีม่วง (highlight)
- `amber` — สีส้ม (warning)
- `rose` — สีแดง (danger)

---

## 🔄 การย้ายจากระบบเก่า

### ระบบเก่า (แยกไฟล์)
```
ministry_act.s1.html    # เนื้อหาบท 1
ministry_act.s2.html    # เนื้อหาบท 2
ministry_act.s3.html    # เนื้อหาบท 3
Quiz_ministry_act.html  # ควิซ
```

### ระบบใหม่ (รวมไฟล์)
```
content/ministry_act.json       # Data รวมทุกบท
ministry_act/ministry_act.html  # หน้าเดียวโหลดทั้งหมด
ministry_act/quiz.html          # ควิซ
```

### ขั้นตอนย้าย
1. เอาเนื้อหาจาก `.s1.html`, `.s2.html`, `.s3.html` มารวมเป็น JSON
2. แยก glossary ออกมาเป็น array
3. สร้าง `orgChart` object จากภาพโครงสร้าง
4. แยกคำถามจาก `.questions.js` เก่ามาใส่รูปแบบใหม่
5. ย้ายไฟล์เก่าเข้า `oldfile/`

---

## 📌 Checklist สร้างวิชาใหม่

- [ ] สร้าง JSON data ครบทุก section (s1, s2, s3)
- [ ] สร้าง `.json.js` wrapper
- [ ] สร้างโฟลเดอร์วิชา + `oldfile/`
- [ ] สร้าง HTML wrapper (lesson)
- [ ] สร้าง HTML wrapper (quiz)
- [ ] สร้าง questions.js
- [ ] แก้ไข `index.html` เพิ่มการ์ด
- [ ] ทดสอบเปิดหน้า

---

## 🆘 Troubleshooting

### หน้าเปิดไม่ได้ (ขาว)
- ตรวจสอบ `BASE_PATH` ต้องชี้ไป `../_system/`
- ตรวจสอบ JSON data โหลดถูกต้องไหม

### เนื้อหาไม่แสดง
- ตรวจสอบ `window.LESSON_DATA` มีค่าไหม
- ดู Console มี error อะไร

### Quiz ไม่ทำงาน
- ตรวจสอบ `QUIZ_DATA` มี array คำถามไหม
- ตรวจสอบ format คำถามถูกต้อง `{q, o, a, exp}`

---

**เขียนเมื่อ:** 26 พ.ค. 2026
**Version:** 1.0 — Data-Driven Architecture
