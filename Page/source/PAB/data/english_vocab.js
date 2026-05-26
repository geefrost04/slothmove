// ============================================================
// CONTENT DATA — english_vocab
// ============================================================

const CONTENT = {
  topic: "english_vocab",
  title: "คำศัพท์ (Vocabulary) — คำแปล ความหมาย และ Word Form",
  titleShort: "คำศัพท์",
  emoji: "🔤",
  year: "",
  stats: {
    chapters: 3,
    amendments: 0,
    vocabGroups: 3,
    quizCount: 50,
    sectionNumber: "1",
    sectionLabel: "ส่วนที่ 1 — ฟรี"
  },
  subtitle: "สรุปละเอียดคำศัพท์ที่พบบ่อยในข้อสอบพร้อมคำแปลและ Word Form",

  chapters: [
    {
      num: 1,
      title: "คำศัพท์ที่พบบ่อยในข้อสอบพร้อมคำแปล",
      emoji: "📝",
      body: [
        { type: "heading", text: "กลุ่ม A — คำที่เกี่ยวกับการทำงานและความสำเร็จ" },
        { type: "list", items: [
          "<strong>collaborate</strong> — ร่วมมือ | <strong>postpone</strong> — เลื่อนออกไป | <strong>mandatory</strong> — บังคับ",
          "<strong>qualified</strong> — มีคุณสมบัติ | <strong>compelling</strong> — น่าเชื่อถือ | <strong>agreement</strong> — ข้อตกลง",
          "<strong>stimulate</strong> — กระตุ้น | <strong>dedication</strong> — ความทุ่มเท | <strong>discovery</strong> — การค้นพบ",
          "<strong>commitment</strong> — ความมุ่งมั่น | <strong>objective</strong> — วัตถุประสงค์ | <strong>evaluate</strong> — ประเมิน",
          "<strong>implement</strong> — นำไปปฏิบัติ | <strong>outstanding</strong> — โดดเด่นยอดเยี่ยม"
        ]},
        { type: "heading", text: "กลุ่ม B — คำที่เกี่ยวกับความซับซ้อนและการจัดการ" },
        { type: "list", items: [
          "<strong>complicated</strong> — ซับซ้อน | <strong>preserve</strong> — อนุรักษ์ | <strong>cite</strong> — อ้างอิง",
          "<strong>identify</strong> — ระบุ/ชี้ตัว | <strong>inspiring</strong> — สร้างแรงบันดาลใจ | <strong>critically</strong> — อย่างมีวิจารณญาณ",
          "<strong>distinctive</strong> — โดดเด่น | <strong>calm</strong> — สงบ/ใจเย็น | <strong>impact / effect</strong> — ผลกระทบ",
          "<strong>beneficial</strong> — เป็นประโยชน์ | <strong>extensive</strong> — กว้างขวาง | <strong>launch</strong> — เปิดตัว"
        ]},
        { type: "heading", text: "กลุ่ม C — คำที่เกี่ยวกับความสัมพันธ์และการดำเนินการ" },
        { type: "list", items: [
          "<strong>clarify</strong> — อธิบายให้ชัดเจน | <strong>coexist</strong> — อยู่ร่วมกัน | <strong>acquitted</strong> — พ้นผิด",
          "<strong>balanced</strong> — สมดุล | <strong>insight</strong> — ความเข้าใจลึกซึ้ง | <strong>tense</strong> — ตึงเครียด",
          "<strong>adapt</strong> — ปรับตัว | <strong>sufficient</strong> — เพียงพอ | <strong>enthusiasm</strong> — ความกระตือรือร้น",
          "<strong>underscores</strong> — เน้นย้ำ | <strong>threatened</strong> — ถูกคุกคาม | <strong>replace</strong> — แทนที่"
        ]},
        { type: "heading", text: "กลุ่ม D — คำที่เกี่ยวกับความคิดและการสื่อสาร" },
        { type: "list", items: [
          "<strong>lucid</strong> — ชัดเจนเข้าใจง่าย | <strong>regret</strong> — เสียใจ | <strong>conscientious</strong> — รอบคอบใจสุขุม",
          "<strong>comprehensive</strong> — ครอบคลุม | <strong>irregularities</strong> — ความผิดปกติ | <strong>react</strong> — ทำปฏิกิริยา",
          "<strong>explicit</strong> — ชัดเจน | <strong>collection</strong> — ชุดสะสม | <strong>sustainable</strong> — ยั่งยืน",
          "<strong>persuasive</strong> — โน้มน้าวใจ | <strong>crucial</strong> — สำคัญอย่างยิ่ง | <strong>obnoxious</strong> — น่ารังเกียจ"
        ]},
        { type: "keypoint", title: "⚠️ จุดสอบบ่อย", text: "<strong>adapt</strong> (ปรับตัว) ≠ <strong>adopt</strong> (นำมาใช้) | <strong>affect</strong> (กริยา) ≠ <strong>effect</strong> (นาม) | <strong>historic</strong> (ที่มีความสำคัญทางประวัติศาสตร์) ≠ <strong>historical</strong> (เกี่ยวกับประวัติศาสตร์)" }
      ]
    },
    {
      num: 2,
      title: "Word Form ที่ออกสอบบ่อย",
      emoji: "🔄",
      body: [
        { type: "heading", text: "การเติม suffix ที่พบบ่อย" },
        { type: "list", items: [
          "<strong>เติม -ment:</strong> development, management, establishment, improvement, commitment",
          "<strong>เติม -tion / -sion:</strong> information, solution, recognition, decision, preservation",
          "<strong>เติม -ity:</strong> ability, responsibility, possibility, complexity, accessibility",
          "<strong>เติม -al:</strong> professional, natural, cultural, essential, environmental",
          "<strong>เติม -ly (adverb):</strong> carefully, quickly, recently, properly, efficiently",
          "<strong>เติม -able / -ible:</strong> comfortable, responsible, possible, valuable"
        ]},
        { type: "heading", text: "คำแปลงรูปที่ต้องจำ" },
        { type: "list", items: [
          "<strong>quiet (adj) → quietly (adv)</strong> | quick → quickly | extreme → extremely",
          "<strong>calm (adj) → calmly (adv)</strong> | sweet → sweetly | remarkable → remarkably",
          "<strong>confident (adj) → confidence (n)</strong> | intelligent → intelligence | loyal → loyalty",
          "<strong>analyze (v) → analysis (n)</strong> | diagnose → diagnosis | provide → provision"
        ]},
        { type: "heading", text: "คำที่มีรูปหลายอย่างและต้องแยกใช้" },
        { type: "list", items: [
          "<strong>affect (กริยา) ≠ effect (นาม)</strong> — เช่น The new policy will affect (กริยา) the economy. The effect (นาม) of the new policy is positive.",
          "<strong>adapt (ปรับตัว) ≠ adopt (นำมาใช้)</strong> — เช่น He adapted (ปรับตัว) to the new environment. They adopted (นำมาใช้) the new method.",
          "<strong>historic (มีความสำคัญทางประวัติศาสตร์) ≠ historical (เกี่ยวกับประวัติศาสตร์)</strong>",
          "<strong>discrete (แยกกัน) ≠ discreet (สุขุมรอบคอบ)</strong>"
        ]},
        { type: "keypoint", title: "⚠️ วิธีเลือก Word Form", text: "1) ดูว่าตำแหน่งในประโยคต้องการ noun, verb, adjective หรือ adverb | 2) ดูว่า article (the/a) หรือ preposition (of/for) ต้องการ noun | 3) ดู tense ของกริยาว่าถูกต้องหรือไม่ | 4) ดูว่าคำนั้นต้องเติม suffix อะไร" }
      ]
    },
    {
      num: 3,
      title: "คำผิดบ่อยในข้อสอบและเทคนิคการจำ",
      emoji: "💡",
      body: [
        { type: "heading", text: "คู่คำที่สะกดคล้ายกันแต่หมายความต่างกัน" },
        { type: "list", items: [
          "<strong>adapt</strong> (ปรับตัว) ≠ <strong>adopt</strong> (นำมาใช้/รับเข้า)",
          "<strong>affect</strong> (กริยา: มีผลกระทบ) ≠ <strong>effect</strong> (นาม: ผลกระทบ)",
          "<strong>historic</strong> (มีความสำคัญทางประวัติศาสตร์) ≠ <strong>historical</strong> (เกี่ยวกับประวัติศาสตร์)",
          "<strong>discrete</strong> (แยกกันเป็นส่วนๆ) ≠ <strong>discreet</strong> (สุขุมรอบคอบ)",
          "<strong>desert</strong> (ทะเลทราย) ≠ <strong>dessert</strong> (ของหวาน)",
          "<strong>principal</strong> (หลัก/อาจารย์ใหญ่) ≠ <strong>principle</strong> (หลักการ)"
        ]},
        { type: "heading", text: "คำที่ทำให้สับสนเพราะ prefix/suffix คล้ายกัน" },
        { type: "list", items: [
          "<strong>intelligent</strong> (ฉลาด) vs <strong>intellectual</strong> (นักปัญญา/เกี่ยวกับปัญญา)",
          "<strong>economic</strong> (เกี่ยวกับเศรษฐกิจ) vs <strong>economical</strong> (ประหยัด)",
          "<strong>historical</strong> (เกี่ยวกับประวัติศาสตร์) vs <strong>historic</strong> (มีความสำคัญทางประวัติศาสตร์)",
          "<strong>practical</strong> (เกี่ยวกับการปฏิบัติ) vs <strong>practicable</strong> (เป็นไปได้ในทางปฏิบัติ)"
        ]},
        { type: "heading", text: "เทคนิคการจำคำผิด" },
        { type: "list", items: [
          "<strong>adapt → ปรับตัว</strong>: มี 'ad' คล้าย 'add' = เพิ่มการปรับตัว",
          "<strong>adopt → นำมาใช้</strong>: มี 'op' คล้าย 'option' = เลือกนำมา",
          "<strong>affect → กริยา 'a'</strong> นำหน้า: a + ffect = มีผล",
          "<strong>effect → นาม 'e'</strong> นำหน้า: e + ffect = ผลลัพธ์",
          "<strong>discrete → แยก</strong>: มี 'cre' คล้าย 'create' = แยกสร้างเป็นส่วน",
          "<strong>discreet → สุขุม</strong>: มี 'eet' คล้าย 'sweet' = อารมณ์ดี สุขุม"
        ]},
        { type: "keypoint", title: "📝 สูตรลัด", text: "เมื่อเจอคำถาม Word Form: ดูก่อนว่าตำแหน่งนั้นต้องการ noun/verb/adj/adv → เลือกรูปคำที่ถูกต้อง → ตรวจสอบว่า suffix ถูกต้องหรือไม่ → ดูว่า article หรือ preposition รองรับรูปคำนั้นหรือไม่" }
      ]
    }
  ],

  outline: [
    { num: 1, title: "คำศัพท์ที่พบบ่อยในข้อสอบพร้อมคำแปล", emoji: "📝" },
    { num: 2, title: "Word Form ที่ออกสอบบ่อย", emoji: "🔄" },
    { num: 3, title: "คำผิดบ่อยในข้อสอบและเทคนิคการจำ", emoji: "💡" }
  ],

  glossary: [
    { icon:'🔤', term:'Vocabulary', thai:'คำศัพท์', def:'ข้อสอบทดสอบความเข้าใจความหมายของคำศัพท์ที่พบบ่อยในชีวิตจริงและบริบททางวิชาการ รวมถึงการเลือกรูปคำที่ถูกต้อง (Word Form) — มีข้อสอบมากกว่า 200 ข้อ', tag:'หัวข้อ' },
    { icon:'🔑', term:'adapt ≠ adopt', thai:'ปรับตัว ≠ นำมาใช้', def:'adapt (ปรับตัวให้เข้ากับสถานการณ์) ≠ adopt (นำเอาสิ่งใหม่มาใช้) — คำที่สะกดคล้ายกันมากและออกสอบบ่อยมาก', tag:'คำผิดบ่อย' },
    { icon:'🔑', term:'affect ≠ effect', thai:'มีผล (กริยา) ≠ ผลกระทบ (นาม)', def:'affect เป็นกริยา (มีผลกระทบ) | effect เป็นนาม (ผลกระทบ) — สะกดต่างกันแค่ตัวแรก ออกสอบบ่อยมาก', tag:'คำผิดบ่อย' },
    { icon:'🔑', term:'historic ≠ historical', thai:'มีความสำคัญทางประวัติศาสตร์ ≠ เกี่ยวกับประวัติศาสตร์', def:'historic = มีความสำคัญทางประวัติศาสตร์ (a historic event) | historical = เกี่ยวกับประวัติศาสตร์ (historical research) — ต่างกันแค่ suffix', tag:'คำผิดบ่อย' },
    { icon:'🔤', term:'Word Form', thai:'รูปคำ', def:'การเลือกคำที่ถูกต้องในบริบท เช่น influence (นาม) ≠ affect (กริยา) หรือ adapt (ปรับตัว) ≠ adopt (นำมาใช้) — ต้องรู้ว่าตำแหน่งในประโยคต้องการ noun, verb, adjective หรือ adverb', tag:'ไวยากรณ์' }
  ],

  tips: [
    "<strong>adapt</strong> (ปรับตัว) ≠ <strong>adopt</strong> (นำมาใช้)",
    "<strong>affect</strong> (กริยา) ≠ <strong>effect</strong> (นาม)",
    "<strong>historic</strong> (มีความสำคัญทางประวัติศาสตร์) ≠ <strong>historical</strong> (เกี่ยวกับประวัติศาสตร์)",
    "<strong>discrete</strong> (แยกกัน) ≠ <strong>discreet</strong> (สุขุม)",
    "เมื่อเลือก Word Form ดูก่อนว่าตำแหน่งนั้นต้องการ noun/verb/adj/adv",
    "ดู article (the/a) หรือ preposition (of/for) เป็นตัวบอกว่าต้องการ noun",
    "ดูว่ากริยา tense ถูกต้องหรือไม่ก่อนเลือก"
  ],

  quizFile: "Quiz_english_vocab.html"
};