# 🎴 Flash Card System — สรุปงานที่ทำ

> เปลี่ยน quiz เป็น flash card — เน้นความถูกต้อง แยกไฟล์ design ให้แก้ไขง่าย

## โครงสร้างไฟล์

```
PAB/
├── flashcards/                          ← ข้อมูลการ์ด (19 ไฟล์)
│   ├── admin_act.json.js               ← 50 cards
│   ├── disaster_act.json.js            ← 50 cards
│   ├── ... (19 ไฟล์)
│   └── political_economy.json.js       ← 50 cards
│
├── system/                              ← ไฟล์ระบบ (แก้ไขตรงนี้ได้)
│   ├── flashcard.css                    ← 🎨 Design — แก้ CSS ที่นี่
│   ├── flashcard.js                     ← ⚙️ Logic — แก้ behavior ที่นี่
│   └── loader.js                        ← (อัปเดต: เปลี่ยนปุ่ม quiz → flashcard)
│
├── disaster_department/                 ← โฟลเดอร์แต่ละวิชา
│   ├── disaster_department.html         ← หน้าเนื้อหา (เดิม)
│   ├── flashcard.html                   ← 🆕 หน้า Flash Card ใหม่
│   ├── quiz.html.deprecated             ← 📦 backup quiz
│   └── disaster_department.questions.js.deprecated  ← 📦 backup ข้อสอบ
│
└── (อีก 18 โฟลเดอร์ โครงสร้างเดียวกัน)
```

## ไฟล์ที่แก้ไข (design แยกเพื่อแก้ง่าย)

### 1. `system/flashcard.css` — Design
- แก้สี, ขนาด, animation, layout ตรงนี้ที่เดียว
- ตัวแปร CSS ที่ใช้: `--white`, `--text`, `--yellow`, `--yellow-strong`, `--navy`, `--border`, `--text-muted`
- Responsive: รองรับ mobile

### 2. `system/flashcard.js` — Logic
- Shuffle, flip, mark known/don't know, progress, localStorage
- Keyboard shortcuts: Space (flip), ←/→ (prev/next), 1/2 (mark)
- Review mode (เฉพาะการ์ดที่ยังจำไม่ได้)
- ปรับ behavior ตรงนี้

### 3. `flashcards/{subject}.json.js` — ข้อมูล
- 50 cards × 19 วิชา = **950 cards ทั้งหมด**
- Generate จาก PDF ใน `/Users/geefrost/Documents/data ปภ/ไม่มีชื่อโฟลเดอร์/`
- Format: `window.FLASHCARD_DATA_{SUBJECT} = { cards: [...] }`
- แก้ content ของการ์ด: แก้ไฟล์ .json.js ใน `/flashcards/` โฟลเดอร์

### 4. `{subject}/flashcard.html` — หน้าเว็บ
- โหลด flashcards/{subject}.json.js
- โหลด system/flashcard.css + flashcard.js
- Generate อัตโนมัติทุกวิชา

## Features

| Feature | คำอธิบาย |
|---|---|
| 🔄 Flip | คลิกการ์ด หรือกด Space เพื่อพลิก |
| ✓ จำได้ | ติ๊กว่าจำได้ → เก็บใน localStorage |
| ✗ จำไม่ได้ | ติ๊กว่าจำไม่ได้ → เก็บไว้ทบทวน |
| 🔀 สลับลำดับ | shuffle deck |
| 📋 โหมดทบทวน | เล่นเฉพาะการ์ดที่ยังจำไม่ได้ |
| 📊 Progress | แสดงความคืบหน้า + สถิติ |
| ⌨️ Keyboard | Space/←/→/1/2 |
| 💾 Save | localStorage — จำความคืบหน้า |

## วิธีใช้

1. เปิด knowledge page (เช่น `disaster_department/disaster_department.html`)
2. กดปุ่ม **🎴 ฝึก Flash Card** ในแถบนำทาง
3. คลิกการ์ดเพื่อพลิก → กด ✓ ถ้าจำได้ / ✗ ถ้าจำไม่ได้
4. กด **📋 โหมด: ทบทวน** เพื่อเล่นเฉพาะการ์ดที่ติ๊กว่าจำไม่ได้

## แหล่งข้อมูล

- PDF 25 ไฟล์ → map เป็น 19 วิชา
- แต่ละวิชามี 50 cards
- Total: **950 cards**
- Source: `/Users/geefrost/Documents/data ปภ/ไม่มีชื่อโฟลเดอร์/`

## วิธี regenerate (ถ้าต้องการ)

```bash
# 1. Extract text จาก PDF
python3 /tmp/extract_all.py

# 2. Parse + Generate flashcards
python3 /tmp/generate_flashcards.py

# 3. Generate flashcard.html
python3 /tmp/generate_flashcard_html.py
```

ไฟล์ script อยู่ใน `/tmp/`:
- `extract_pdf.py`, `extract_all.py`
- `parse_cards.py`, `generate_flashcards.py`
- `generate_flashcard_html.py`
- `/tmp/pdf_extract/` — raw text จาก PDF (เก็บไว้)

## Backup

Quiz เก่า (`.html` + `.questions.js`) ถูก rename เป็น `.deprecated` แล้ว — ไม่ลบ
ถ้าอยากกลับไปใช้ quiz:
1. Rename `quiz.html.deprecated` → `quiz.html`
2. Rename `{subject}.questions.js.deprecated` → `{subject}.questions.js`
3. ใน loader.js เปลี่ยน `flashcard.html` กลับเป็น `quiz.html`

## หมายเหตุ

- **ถ้าแก้ CSS**: แก้ที่ `system/flashcard.css` ไฟล์เดียว
- **ถ้าแก้ logic**: แก้ที่ `system/flashcard.js` ไฟล์เดียว
- **ถ้าแก้ content การ์ด**: แก้ที่ `flashcards/{subject}.json.js`
- **ถ้าต้องเพิ่ม/ลด การ์ด**: แก้ไฟล์ .json.js ใน `/flashcards/`
- **ถ้าต้อง regen จาก PDF ใหม่**: รัน 3 scripts ข้างบน
