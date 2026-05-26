---
name: create-quiz
description: Builds Thai multiple-choice quiz pages from reference sources (RTF, extracted text, PDF-backed notes) into HTML plus a *.questions.js bank; randomizes which questions and option order appear each run without repeating questions in the same session; preserves original option order when choices are phrased as all-correct or combined-correct (ถูกทั้งหมด, ถูกทั้ง…และ…). Use when adding or editing SlothMove quizzes under Page/source, importing items from data files, or implementing shuffle and answer-check behavior.
disable-model-invocation: true
---

# Create Quiz

## ข้อกำหนดจากผู้ใช้ (verbatim)

ทำไฟล์ quiz โดยให้ดึงข้อมูลจากไฟล์อ้างอิง และ เพิ่มฟังชั่นสุ่มข้อสอบและตัวเลือกให้ไม่ซ้ำกัน ในการทำแต่ละครั้ง และ เช็คคำตอบ ถ้ามีคำตอบว่า ถูกทั้งหมด หรือ ถูกทั้ง...และ.... ให้คงช้อยส์ไว้เหมือนเดิม

## โครงสร้างในโปรเจกต์นี้

- **แบงก์ข้อ**: ไฟล์ `*.questions.js` — อาร์เรย์ของอ็อบเจ็กต์ `{ "q", "o", "a" }` โดย `o` เป็นอาร์เรย์สตริงตัวเลือก และ `a` เป็นดัชนีข้อที่ถูก (0-based)
- **หน้าเล่น**: HTML คู่กัน (เช่น `Quiz_*.html`) โหลด `<script src="....questions.js">` แล้วใช้ฟังก์ชันสร้างชุดข้อ + สลับตัวเลือก

## ดึงข้อมูลจากไฟล์อ้างอิง

1. ระบุแหล่ง (RTF, `.txt` ที่สกัดแล้ว, หรือสคริปต์นำเข้าในโฟลเดอร์เดียวกัน)
2. แปลงเป็นรายการข้อปรนัย; ตรวจว่ามีตัวเลือกซ้ำใน `o` เดียวกันหรือไม่ — ถ้าซ้ำ การ remap `a` หลังสลับจะพัง ต้องทำให้ข้อความตัวเลือกคนละสตริง
3. เขียนลง `topic.questions.js` เป็น `const topicQuestions = [ ... ]` (หรือชื่อที่ HTML ใช้)

## สุ่มข้อและสุ่มตัวเลือก (แต่ละครั้งที่เริ่มทำข้อสอบ)

- **ลำดับข้อ**: สุ่มเต็มแบงก์ด้วย Fisher–Yates แล้วหยิงชุดย่อยขนาด `take = min(ที่ผู้ใช้ขอ, 100, ความยาวแบงก์)` — ในรอบเดียวกันข้อไม่ซ้ำ
- **ลำดับตัวเลือก**: สลับสำเนาของ `o` แล้วตั้ง `a` ใหม่ด้วย `indexOf` ของ **ข้อความ**ตัวเลือกที่ถูกเดิม (ไม่เก็บแค่ดัชนีเดิมหลังสลับ)

## คงลำดับตัวเลือก (ไม่สลับ `o`)

ถ้า**ข้อความตัวเลือกใดๆ**ในข้อนั้นบ่งว่าเป็นข้อ «รวมหลายข้อถูก» ให้**ไม่สลับ** `o` และ**ไม่เปลี่ยน** `a`

ใช้เกณฑ์เดียวกับที่โปรเจกต์ใช้ โดยเพิ่มวลีตามที่ผู้ใช้ระบุ:

- มีข้อความ `ถูกทั้งหมด` **หรือ**
- มีข้อความ `ถูกทุกข้อ` **หรือ**
- มีทั้ง `ถูกทั้ง` (ไม่สนตัวพิมพ์) **และ** `และ`

ตัวอย่างตรรกะ (ปรับชื่อตัวแปรให้เข้ากับไฟล์จริง):

```javascript
function shouldKeepQuizOptionOrder(opts) {
  return (opts || []).some(t => {
    const s = String(t);
    return (
      /ถูกทั้งหมด/.test(s) ||
      /ถูกทุกข้อ/.test(s) ||
      (/ถูกทั้ง/i.test(s) && /และ/.test(s))
    );
  });
}
function shuffleQuestionOptions(raw) {
  const q = { ...raw, o: [...raw.o] };
  if (shouldKeepQuizOptionOrder(q.o)) return q;
  const correctText = q.o[q.a];
  q.o = _shuffleArrayCopy(q.o);
  q.a = q.o.indexOf(correctText);
  return q;
}
```

## เช็คคำตอบใน UI

- เปรียบเทียบดัชนีที่ผู้ใช้เลือกกับ `questions[i].a` หลังสุ่มแล้ว
- สำหรับข้อที่ไม่สลับตัวเลือก: `a` ยังชี้ตำแหน่งเดิมใน `o` ตามแบงก์

## Checklist ก่อนปิดงาน

- [ ] แบงก์โหลดใน HTML ได้ และ `startQuiz` ดึงจากตัวแปรที่ถูกต้อง
- [ ] ทุกครั้งที่เริ่มข้อสอบ ได้ชุดข้อ/ลำดับตัวเลือกใหม่ และข้อในรอบเดียวกันไม่ซ้ำจนถึงขีดจำกัด `take`
- [ ] ข้อที่มีวลีแบบ «ถูกทั้งหมด / ถูกทุกข้อ / ถูกทั้ง…และ…» แสดงตัวเลือกลำดับเดิม
- [ ] ไม่มีตัวเลือกซ้ำข้อความในข้อเดียวกัน (ถ้ามี แก้แบงก์หรือป้องกันก่อนสลับ)

## อ้างอิงในรีโป

รูปแบบฟังก์ชันสุ่มและ `shouldKeepQuizOptionOrder` มีอยู่แล้วในแบบ `Page/source/Industry/Quiz_*.html` — เวลาเพิ่มข้อสอบใหม่ให้คัดลอกบล็อกนี้ให้สอดคล้องกัน และอัปเดต regex ใน `shouldKeepQuizOptionOrder` ให้ครอบคลุมวลีใน **ข้อกำหนดจากผู้ใช้** ด้านบน
