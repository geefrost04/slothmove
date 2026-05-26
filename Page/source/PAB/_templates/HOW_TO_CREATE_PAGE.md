# 📖 คู่มือสร้างหน้าเนื้อหา PAB

## โครงสร้างไฟล์

```
Page/source/PAB/
├── [subject].html          ← หน้าเนื้อหา (สรุป + ศัพท์ + โครงสร้าง)
├── Quiz_[subject].html     ← หน้าทำข้อสอบ
├── [subject].questions.js  ← ข้อสอบ (const QUESTIONS = [...])
├── shared.css              ← CSS ร่วม
└── indexPAB.html           ← หน้าหลักคอร์ส
```

---

## Prompt สร้างหน้าใหม่

### แบบละเอียด

```
สร้างหน้า HTML เรื่อง [ชื่อกฎหมาย/เนื้อหา]
โดยมีโครงสร้างแบบนี้:

LAYOUT:
- Navbar sticky (ธีมสีเข้ม) มี logo + ชื่อ + tab เมนู + dropdown วิชาอื่น
- Section: สรุปเนื้อหา (accordion บท 1-N)
- Section: โครงสร้าง (Org Chart แบบ dark theme)
- Section: คลังคำศัพท์ (grid 2 col + search + tag badge)
- Section: ทำข้อสอบ (dark gradient + ปุ่ม 10/50/100 ข้อ)

STYLE:
- TailwindCSS + font Sarabun/Kanit
- สี navy #1d1d42 + yellow #fcec4a
- Content โหลดจาก JS object ชื่อ CONTENT

CONTENT object:
- title, titleShort, emoji
- stats: { chapters, quizCount, vocabGroups }
- chapters: [ { num, title, emoji, body: [{type, ...}] } ]
- glossary: [ { icon, term, thai, meaning, tag } ]
- quizFile: "Quiz_xxx.html"
```

### แบบสั้น (copy ไปใช้ได้)

```
copy โครงสร้างจาก admin_act.html แล้วทำ [subject].html โดย:
1. เปลี่ยน CONTENT object ให้เป็นเนื้อหา [หัวข้อใหม่]
2. เปลี่ยน title, emoji, quiz link, glossary ให้ตรงเนื้อหา
3. สร้าง Quiz_[subject].html จาก Quiz_admin_act.html
4. เชื่อม [subject].questions.js
```

---

## โครงสร้าง CONTENT object

```js
var CONTENT = {
  topic: "subject_name",
  title: "ชื่อเต็ม พ.ร.บ./ระเบียบ",
  titleShort: "ชื่อย่อ",
  emoji: "🏛️",
  stats: {
    chapters: 7,       // จำนวนบท
    amendments: 20,    // จำนวนครั้งที่แก้ไข
    vocabGroups: 4,    // จำนวนหมวดศัพท์
    quizCount: 50,     // จำนวนข้อสอบ
    sectionLabel: "ส่วนที่ 1 — ฟรี"
  },
  subtitle: "คำอธิบายสั้นๆ",
  chapters: [ /* ดูด้านล่าง */ ],
  glossary: [ /* ดูด้านล่าง */ ],
  tips: [ "เคล็ดลับจำ 1", "เคล็ดลับจำ 2" ],
  quizFile: "Quiz_subject.html"
}
```

---

## Body types ใน chapters[].body

| type | ตัวอย่าง | ใช้สำหรับ |
|------|----------|-----------|
| `"p"` | `{ type:"p", text:"ข้อความ..." }` | ย่อหน้าธรรมดา |
| `"heading"` | `{ type:"heading", text:"หัวข้อย่อย" }` | หัวข้อย่อยในบท |
| `"list"` | `{ type:"list", items:["ข้อ 1","ข้อ 2"] }` | รายการ bullet |
| `"table"` | `{ type:"table", rows:[["คอลัมน์ 1","คอลัมน์ 2"]] }` | ตาราง 2 คอลัมน์ |
| `"box"` | `{ type:"box", color:"blue", title:"หัวข้อ", items:[] }` | กล่องสรุป |
| `"keypoint"` | `{ type:"keypoint", title:"⚠️ จุดสอบ", text:"..." }` | กล่อง highlight |
| `"grid"` | `{ type:"grid", items:[{color:"blue", title:"", text:""}] }` | card grid หลายสี |

**สีที่ใช้ได้ใน box/grid:** `blue` `green` `purple` `amber` `rose`

---

## โครงสร้าง glossary item

```js
{ 
  icon: "🏛️",                    // emoji ประจำคำ
  term: "ชื่อคำศัพท์",           // คำศัพท์ภาษาไทย
  thai: "English Name",          // ชื่ออังกฤษ (optional)
  meaning: "คำอธิบาย...",        // ความหมาย
  tag: "หมวดหมู่"                // badge สีเหลือง (optional)
}
```

---

## Prompt สร้าง Quiz_[subject].html

```
copy Quiz_admin_act.html มาเป็น Quiz_[subject].html แล้วแก้:
1. <script src="[subject].questions.js">  ← เปลี่ยน questions source
2. title และ og:title ทุกจุด             ← เปลี่ยนชื่อ
3. nav-title text                         ← เปลี่ยนชื่อย่อ
4. h1 และ subtitle text                   ← เปลี่ยนคำอธิบาย
5. chips 3 อัน (flex gap-2)               ← เปลี่ยนหัวข้อที่ครอบคลุม
6. href="[content].html" ปุ่ม "เนื้อหา"  ← เปลี่ยน back link
```

---

## Prompt แก้ไขหน้าที่มีอยู่แล้ว

### เพิ่ม Org Chart ใน structure section
```
เพิ่ม Org Chart ใน structure section ของ [subject].html
โดยแสดง [ลำดับชั้น/โครงสร้าง] แบบ dark theme
ใช้ CSS class: org-container, org-line-v, org-line-h
และเพิ่ม 3 กล่องอธิบาย (grid-cols-3) ด้านล่าง
```

### แก้ Glossary ให้เหมือน admin_act
```
แก้ glossary section ของ [subject].html ให้:
- เป็น grid 2 col
- มี search box
- แสดง icon + term + thai + meaning + tag badge
- ใช้ glossary-container div เหมือน admin_act.html
```

---

## ไฟล์ต้นแบบที่ใช้อ้างอิง

| ไฟล์ | ใช้เป็นต้นแบบสำหรับ |
|------|---------------------|
| `admin_act.html` | layout หน้าเนื้อหาทั้งหมด |
| `Quiz_admin_act.html` | layout หน้าทำข้อสอบ |
| `shared.css` | CSS class ร่วม |
