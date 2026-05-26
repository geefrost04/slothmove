// ============================================================
// CONTENT DATA — english_reading
// ============================================================

const CONTENT = {
  topic: "english_reading",
  title: "การอ่านจับใจความ (Reading Comprehension) — Passage สั้นและการวิเคราะห์",
  titleShort: "การอ่าน",
  emoji: "📖",
  year: "",
  stats: {
    chapters: 3,
    amendments: 0,
    vocabGroups: 0,
    quizCount: 50,
    sectionNumber: "1",
    sectionLabel: "ส่วนที่ 1 — ฟรี"
  },
  subtitle: "สรุปละเอียด Passage สั้นหลากหลายประเภท + Main Idea/Inference/Vocab in Context",

  chapters: [
    {
      num: 1,
      title: "ประเภท Passage และคำถามที่พบในข้อสอบ",
      emoji: "📄",
      body: [
        { type: "heading", text: "ประเภท Passage ที่พบในข้อสอบ" },
        { type: "list", items: [
          "<strong>ประกาศ/ป้าย:</strong> ปิดปรับปรุงห้องสมุด, แจ้งเตือนสาธารณูปโภค, ประกาศจากองค์กร",
          "<strong>อีเมล/บันทึกข้อความ:</strong> งานบริหาร, แจ้งเตือนภายในองค์กร, เชิญประชุม",
          "<strong>บทความนิดเจอด์/บทสัมภาษณ์:</strong> ความรู้รอบตัว, วิทยาศาสตร์, สิ่งแวดล้อม",
          "<strong>โฆษณา/ประกาศรับสมัครงาน:</strong> รายละเอียดผลิตภัณฑ์, คุณสมบัติผู้สมัคร",
          "<strong>บทวิจารณ์:</strong> หนังสือ, ภาพยนตร์, รีวิวสินค้า",
          "<strong>ประกาศจากร้านค้า/โรงแรม:</strong> การจอง, นโยบาย, ข้อกำหนด"
        ]},
        { type: "heading", text: "ประเภทคำถามที่ต้องรู้" },
        { type: "list", items: [
          "<strong>Main Purpose / Main Idea:</strong> ถามวัตถุประสงค์หลักหรือใจความสำคัญของ Passage",
          "<strong>Detail Understanding:</strong> ถามรายละเอียดที่ระบุชัดใน Passage",
          "<strong>Inference:</strong> ต้องอนุมานจากข้อมูลที่ให้ ไม่ใช่ตอบตรงๆ",
          "<strong>Vocabulary in Context:</strong> คำศัพท์ใน Passage มีความหมายอย่างไรในบริบทนั้น",
          "<strong>Reference (It/This/That/The latter):</strong> คำสรรพนาม指什么东西",
          "<strong>Opinion vs. Fact:</strong> แยกว่าข้อความเป็นความเห็นหรือข้อเท็จจริง"
        ]},
        { type: "keypoint", title: "⚠️ จุดสอบบ่อย", text: "<strong>alternative = substitute</strong> ไม่ใช่ mandatory | <strong>albeit = อย่างไรก็ตาม / แม้ว่า</strong> | <strong>The latter</strong> = สิ่งที่กล่าวถึงเป็นลำดับสุดท้าย | ต้องตอบตาม Passage ไม่ใช่ความรู้ส่วนตัว" }
      ]
    },
    {
      num: 2,
      title: "คำศัพท์ที่ออกบ่อยใน Reading และความหมาย",
      emoji: "🔤",
      body: [
        { type: "heading", text: "คำศัพท์ที่ออกบ่อยใน Reading" },
        { type: "list", items: [
          "<strong>vital / essential / crucial:</strong> จำเป็นอย่างยิ่ง",
          "<strong>comprehensive / thorough:</strong> ครอบคลุม ละเอียดถี่ถ้วน",
          "<strong>concise / brief:</strong> สั้นกระชับ",
          "<strong>intricate / complex:</strong> ซับซ้อน",
          "<strong>controversial:</strong> เป็นที่ถกเถียง",
          "<strong>substitute / alternative:</strong> สิ่งทดแทน ตัวเลือกอื่น",
          "<strong>mandatory:</strong> บังคับ (alternative ไม่ใช่ mandatory)",
          "<strong>albeit:</strong> อย่างไรก็ตาม / แม้ว่า",
          "<strong>latter:</strong> สิ่งสุดท้ายที่กล่าวถึง (คนละอันกับ former)",
          "<strong>commend / praise:</strong> ชื่นชม / ยกย่อง",
          "<strong>venture / explore:</strong> สำรวจ / จารก",
          "<strong>dweller:</strong> ผู้อยู่อาศัย",
          "<strong>democratized:</strong> ทำให้เป็นประชาธิปไตย / เปิดโอกาสให้ทุกคน"
        ]},
        { type: "heading", text: "คำที่หมายถึง 'บังคับ' ในข้อสอบ" },
        { type: "list", items: [
          "<strong>mandatory = compulsory = required</strong> = บังคับ",
          "<strong>alternative ≠ mandatory</strong> — alternative แปลว่า 'ตัวเลือกอื่น' ไม่ใช่ 'บังคับ'",
          "ข้อสอบมักให้ alternative เป็นตัวเลือกผิดเมื่อถามความหมายของ mandatory"
        ]},
        { type: "keypoint", title: "⚠️ จุดสอบบ่อย", text: "<strong>alternative = substitute</strong> ไม่ใช่ mandatory | <strong>albeit = อย่างไรก็ตาม / แม้ว่า</strong> | <strong>The latter</strong> = สิ่งที่กล่าวถึงเป็นลำดับสุดท้าย | อย่าเลือกข้อที่ "ดูถูก" หรือ extreme | ตอบตาม Passage ไม่ใช่ความรู้ส่วนตัว" }
      ]
    },
    {
      num: 3,
      title: "เทคนิคการทำข้อสอบ Reading",
      emoji: "🎯",
      body: [
        { type: "heading", text: "วิธีคิดเมื่อเจอคำถามแต่ละประเภท" },
        { type: "list", items: [
          "<strong>Main Idea:</strong> ถามว่า passage เกี่ยวกับอะไรโดยรวม — ดูย่อหน้าแรกและย่อหน้าสุดท้ายเป็นหลัก",
          "<strong>Detail:</strong> ถามข้อเท็จจริงที่ระบุใน passage — ใช้ scanning หาตำแหน่งใน passage",
          "<strong>Inference:</strong> ต้องอนุมาน — คำตอบไม่ได้เขียนตรงๆ แต่ต้อง logically follow จากข้อมูล",
          "<strong>Vocab in Context:</strong> แปลความหมายจากบริบท ไม่ใช่ดู dictionary — ดูประโยครอบๆ คำนั้น",
          "<strong>Reference (It/This/That):</strong> ดูว่าคำนั้น指回ไปที่อะไรในประโยคก่อนหน้าหรือย่อหน้าก่อน"
        ]},
        { type: "heading", text: "กับดักที่ต้องระวัง" },
        { type: "list", items: [
          "<strong>คำตอบที่ extreme เกินไป:</strong> เช่น always, never, all, none — มักผิดถ้าไม่ได้ระบุชัด",
          "<strong>ความรู้ส่วนตัว:</strong> อย่าใช้ความรู้ของตัวเอง ตอบตาม passage เท่านั้น",
          "<strong>คำที่ Similar กันแต่หมายความต่างกัน:</strong> เช่น alternative (ตัวเลือกอื่น) ≠ mandatory (บังคับ)",
          "<strong>การอนุมานเกินไป:</strong> ถ้าคำตอบต้อง infer หลายขั้น อาจผิด — มองหาคำตอบที่ตรงไปตรงมาที่สุด"
        ]},
        { type: "keypoint", title: "📝 สูตรลัด", text: "Main Idea → ย่อหน้าแรก + สุดท้าย | Detail → scan หาคีย์เวิร์ด | Inference → หาคำตอบที่ logically follow | Vocab in Context → ดูประโยครอบๆ | Reference → หาว่า指回ไปที่อะไร" }
      ]
    }
  ],

  outline: [
    { num: 1, title: "ประเภท Passage และคำถามที่พบในข้อสอบ", emoji: "📄" },
    { num: 2, title: "คำศัพท์ที่ออกบ่อยใน Reading และความหมาย", emoji: "🔤" },
    { num: 3, title: "เทคนิคการทำข้อสอบ Reading", emoji: "🎯" }
  ],

  glossary: [
    { icon:'📖', term:'Reading Comprehension', thai:'การอ่านจับใจความ', def:'ข้อสอบทดสอบความเข้าใจ Passage สั้นหลากหลายประเภท ทั้ง Main Idea, Detail, Inference, Vocabulary in Context, Reference — ตอบตาม Passage ไม่ใช่ความรู้ส่วนตัว', tag:'หัวข้อ' },
    { icon:'🔑', term:'alternative = substitute', thai:'ตัวเลือกอื่น ไม่ใช่ บังคับ', def:'คำว่า alternative ในข้อสอบ Reading มักเป็นตัวเลือกผิดเมื่อถามว่า "mandatory" แปลว่าอะไร เพราะ alternative = substitute = สิ่งทดแทน/ตัวเลือกอื่น ไม่ใช่ บังคับ', tag:'คำศัพท์' },
    { icon:'🔑', term:'albeit = อย่างไรก็ตาม / แม้ว่า', thai:'แม้ว่า', def:'คำเชื่อมที่แปลว่า "อย่างไรก็ตาม" หรือ "แม้ว่า" มักอยู่ในบริบทที่มี contrast เช่น fascinating, albeit crowded', tag:'คำศัพท์' },
    { icon:'🔑', term:'The latter', thai:'สิ่งที่กล่าวถึงเป็นลำดับสุดท้าย', def:'สรรพนาม指สิ่งที่กล่าวถึงเป็นลำดับสุดท้ายในรายการ ตรงข้ามกับ The former (สิ่งแรก)', tag:'คำศัพท์' },
    { icon:'🔤', term:'vital / essential / crucial', thai:'จำเป็นอย่างยิ่ง', def:'คำคุณศัพท์ที่แปลว่า "จำเป็นอย่างยิ่ง" มักอยู่ในบริบทที่เกี่ยวกับความสำคัญของสิ่งใดสิ่งหนึ่ง', tag:'คำศัพท์' }
  ],

  tips: [
    "<strong>alternative = substitute</strong> ไม่ใช่ mandatory",
    "<strong>albeit = อย่างไรก็ตาม / แม้ว่า</strong>",
    "<strong>The latter</strong> = สิ่งสุดท้ายที่กล่าวถึง",
    "ตอบตาม Passage ไม่ใช่ความรู้ส่วนตัว",
    "อย่าเลือกข้อที่ extreme เช่น always, never, all, none",
    "เมื่อเจอ Vocab in Context ดูประโยครอบๆ คำนั้น — ไม่ต้องดู dictionary"
  ],

  quizFile: "Quiz_english_reading.html"
};