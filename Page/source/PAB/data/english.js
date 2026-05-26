// ============================================================
// CONTENT DATA — english (rebuilt from extracted-data/english/)
// ============================================================

const CONTENT = {
  topic: "english",
  title: "ภาษาอังกฤษ (ข้อสอบ ก. กทม. / ภาค ก)",
  titleShort: "ภาษาอังกฤษ",
  emoji: "🌍",
  year: "",
  stats: {
    chapters: 4,
    amendments: 0,
    vocabGroups: 4,
    quizCount: 200,
    sectionNumber: "1",
    sectionLabel: "ส่วนที่ 1 — ฟรี"
  },
  subtitle: "สรุปละเอียด 4 หัวข้อ: บทสนทนา · ไวยากรณ์ · การอ่านจับใจความ · คำศัพท์",

  chapters: [
    {
      num: 1,
      title: "บทสนทนา (Conversation) — สำนวนและรูปแบบการสื่อสาร",
      emoji: "💬",
      body: [
        { type: "p", text: "ข้อสอบ Conversation ทดสอบความสามารถในการ<strong>เลือกสำนวน/รูปแบบประโยคที่เหมาะสม</strong>ในสถานการณ์ต่างๆ เน้นสุภาพ ความสุภาพ และความเหมาะสมในบริบท" },
        { type: "heading", text: "รูปแบบสำนวนที่พบบ่อยในข้อสอบ" },
        { type: "list", items: [
          "<strong>การทักทาย/แนะนำตัว:</strong> Nice to meet you. / Pleased to meet you. / What a surprise!",
          "<strong>การขอข้อมูล:</strong> Could you please tell me...? / Do you mind telling me...? / Can you help me...?",
          "<strong>การเสนอความช่วยเหลือ:</strong> Can I give you a hand? / Let me help you with that.",
          "<strong>การตอบรับคำขอบคุณ:</strong> You're welcome. / Don't mention it. / It's my pleasure.",
          "<strong>การนัดหมาย:</strong> make an appointment / That works for me. / Sounds good.",
          "<strong>การแสดงความยินดี/เสียใจ:</strong> Congratulations! / I'm so sorry to hear that. / My condolences.",
          "<strong>การแนะนำทาง:</strong> Go straight down this road for two blocks. / It's on your right.",
          "<strong>การปฏิเสธอย่างสุภาพ:</strong> I'd love to, but I can't. / I'm afraid I can't.",
          "<strong>การขออนุญาต:</strong> Would you mind...? / Is it alright if...? / No, not at all. Go ahead."
        ]},
        { type: "heading", text: "สิ่งที่ต้องระวังในข้อสอบ Conversation" },
        { type: "list", items: [
          "<strong>No, not at all</strong> = อนุญาต ไม่รังเกียจ (ปฏิเสธความรังเกียจ → แปลว่ายอมรับ)",
          "<strong>You shouldn't have.</strong> = แสดงความเกรงใจเมื่อได้รับของขวัญ",
          "<strong>Good for you!</strong> = ชื่นชมให้กำลังใจ (ไม่ใช่ sarcastic)",
          "<strong>I see.</strong> = เข้าใจแล้ว (ตอบรับข้อมูล)",
          "<strong>No problem.</strong> / <strong>Of course.</strong> = คำตอบมาตรฐานเมื่อมีคนขอบคุณหรือขอความช่วยเหลือ"
        ]},
        { type: "keypoint", title: "⚠️ จุดสอบบ่อย", text: "<strong>make an appointment</strong> (ถูก) | make appointment (ผิด) | <strong>Do you mind telling me</strong> = ถามอย่างสุภาพมาก | <strong>I'm pleased to meet you</strong> = ตอบรับการแนะนำตัว | <strong>Drop, Cover, Hold on</strong> = มาตรฐานสากลแผ่นดินไหว" }
      ]
    },
    {
      num: 2,
      title: "ไวยากรณ์ (Grammar) — Tense, Subject-Verb Agreement และ Word Form",
      emoji: "📝",
      body: [
        { type: "p", text: "ข้อสอบ Grammar ครอบคลุม <strong>Tense, Subject-Verb Agreement, Preposition, Conjunction, Relative Pronoun และ Word Form</strong> มากกว่า 200 ข้อ ด้านล่างเป็นสรุปจุดสำคัญ" },
        { type: "heading", text: "Tense — กริยาช่วง 4 ประเภทหลัก" },
        { type: "list", items: [
          "<strong>Present Simple:</strong> กิจวัตร, ความจริงทางวิทยาศาสตร์, ตารางเวลา (every, usually, always)",
          "<strong>Present Continuous:</strong> กำลังเกิดขณะพูด, แผนอนาคตใกล้ (now, right now, at this moment, next month)",
          "<strong>Past Simple:</strong> เหตุการณ์จบลงในอดีต (yesterday, last week, ago)",
          "<strong>Present Perfect:</strong> เกิดในอดีตดำเนินมาถึงปัจจุบัน (since, for, already, just)",
          "<strong>Past Perfect:</strong> เหตุการณ์จบก่อนอีกเหตุการณ์ในอดีต (had + V3)",
          "<strong>Future Simple:</strong> will + V1 / be going to + V1",
          "<strong>Future Perfect:</strong> will have + V3 (เหตุการณ์จะเสร็จสิ้นก่อนเวลาในอนาคต)"
        ]},
        { type: "heading", text: "Subject-Verb Agreement — กริยาผันตามประธาน" },
        { type: "list", items: [
          "<strong>A number of + นามพหูพจน์ → are</strong> | <strong>The number of + นาม → is</strong>",
          "<strong>Neither...nor / Either...or:</strong> กริยาผันตามประธานตัวที่อยู่ใกล้สุด",
          "<strong>Along with / Together with / As well as:</strong> กริยาผันตามประธานตัวหน้าสุด",
          "<strong>Each of / Every / Nobody / Everyone / Anybody:</strong> → เอกพจน์",
          "<strong>The police / The staff / The committee:</strong> → พหูพจน์ (Police, Staff, Committee เป็นนามพหูพจน์เสมอ)",
          "<strong>Mathematics / News / Politics:</strong> → เอกพจน์ (ลงท้ายด้วย s แต่ไม่นับเป็นพหูพจน์)",
          "<strong>The pliers / The scissors / A pair of glasses:</strong> → พหูพจน์ (มีสองส่วน)"
        ]},
        { type: "heading", text: "Preposition สำคัญ" },
        { type: "list", items: [
          "<strong>at</strong> — จุดเฉพาะ: at the bus stop, at noon, at 10 a.m.",
          "<strong>in</strong> — ช่วงเวลา/เดือน/ปี: in the morning, in May, in 1990",
          "<strong>on</strong> — วันที่/วัน: on Monday, on August 15th, on the table",
          "<strong>between</strong> — ระหว่างสองสิ่ง | <strong>among</strong> — ระหว่างมากกว่าสองสิ่ง",
          "<strong>through</strong> — ผ่าน/ลอด | <strong>over</strong> — ข้าม | <strong>under</strong> — ใต้"
        ]},
        { type: "heading", text: "Word Form — คำแต่ละรูป" },
        { type: "list", items: [
          "<strong>Adj → Adv:</strong> quiet → quietly | quick → quickly | extreme → extremely",
          "<strong>Noun:</strong> confidence, intelligence, loyalty, passion, enthusiasm, construction, analysis",
          "<strong>รูปผิดที่พบบ่อย:</strong> affect (กริยา) ≠ effect (นาม) | adapt (ปรับตัว) ≠ adopt (นำมาใช้)",
          "<strong>conjunction:</strong> although / despite / however / moreover / therefore / consequently / otherwise"
        ]},
        { type: "keypoint", title: "⚠️ จุดสอบบ่อย", text: "<strong>A number of = are | The number of = is</strong> | Neither...nor กริยาผันตามตัวหลังสุด | <strong>It is my regret to inform you</strong> = สำนวนทางการแจ้งข่าวร้าย | conditional type 2: <strong>If I were you</strong> (ใช้ were เสมอกับ I)" }
      ]
    },
    {
      num: 3,
      title: "การอ่านจับใจความ (Reading Comprehension) — Passage สั้นและการวิเคราะห์",
      emoji: "📖",
      body: [
        { type: "p", text: "ข้อสอบ Reading มี<strong>Passage สั้นหลากหลายประเภท</strong> พร้อมคำถาม Main Idea, Inference, Vocabulary in Context และ Detail Understanding" },
        { type: "heading", text: "ประเภท Passage ที่พบในข้อสอบ" },
        { type: "list", items: [
          "<strong>ประกาศ/ป้าย:</strong> ปิดปรับปรุงห้องสมุด, แจ้งเตือนสาธารณูปโภค",
          "<strong>อีเมล/บันทึกข้อความ:</strong> งานบริหาร แจ้งเตือนภายในองค์กร",
          "<strong>บทความนิดเจอด์/บทสัมภาษณ์:</strong> ความรู้รอบตัว วิทยาศาสตร์ สิ่งแวดล้อม",
          "<strong>โฆษณา/ประกาศรับสมัครงาน:</strong> รายละเอียดผลิตภัณฑ์ คุณสมบัติผู้สมัคร",
          "<strong>บทวิจารณ์:</strong> หนังสือ ภาพยนตร์ รีวิวสินค้า"
        ]},
        { type: "heading", text: "ประเภทคำถามที่ต้องรู้" },
        { type: "list", items: [
          "<strong>Main Purpose / Main Idea:</strong> ถามวัตถุประสงค์หลักหรือใจความสำคัญของ Passage",
          "<strong>Detail Understanding:</strong> ถามรายละเอียดที่ระบุชัดใน Passage",
          "<strong>Inference:</strong> ต้องอนุมานจากข้อมูลที่ให้ ไม่ใช่ตอบตรงๆ",
          "<strong>Vocabulary in Context:</strong> คำศัพท์ใน Passage มีความหมายอย่างไรในบริบทนั้น",
          "<strong>Reference (It/This/That):</strong> คำสรรพนาม指什么东西",
          "<strong>Opinion vs. Fact:</strong> แยกว่าข้อความเป็นความเห็นหรือข้อเท็จจริง"
        ]},
        { type: "heading", text: "คำศัพท์ที่ออกบ่อยใน Reading" },
        { type: "list", items: [
          "<strong>vital / essential / crucial:</strong> จำเป็นอย่างยิ่ง",
          "<strong>comprehensive / thorough:</strong> ครอบคลุม ละเอียดถี่ถ้วน",
          "<strong>concise / brief:</strong> สั้นกระชับ",
          "<strong>intricate / complex:</strong> ซับซ้อน",
          "<strong>controversial:</strong> เป็นที่ถกเถียง",
          "<strong>substitute / alternative:</strong> สิ่งทดแทน ตัวเลือกอื่น",
          "<strong>alternative:</strong> ไม่ใช่ mandatory (บังคับ) แต่ = substitute (ทดแทน)"
        ]},
        { type: "keypoint", title: "⚠️ จุดสอบบ่อย", text: "<strong>alternative = substitute</strong> ไม่ใช่ mandatory | <strong>albeit = อย่างไรก็ตาม / แม้ว่า</strong> | <strong>The latter</strong> = สิ่งที่กล่าวถึงเป็นลำดับสุดท้าย | ต้องตอบตาม Passage ไม่ใช้ความรู้ส่วนตัว | อย่าเลือกข้อที่ "ดูถูก" หรือ extreme" }
      ]
    },
    {
      num: 4,
      title: "คำศัพท์ (Vocabulary) — คำแปล ความหมาย และ Word Form",
      emoji: "🔤",
      body: [
        { type: "p", text: "ข้อสอบ Vocabulary ทดสอบความเข้าใจความหมายของ<strong>คำศัพท์ที่พบบ่อยในชีวิตจริงและบริบททางวิชาการ</strong> รวมถึงการเลือกรูปคำที่ถูกต้อง (Word Form)" },
        { type: "heading", text: "คำศัพท์ที่พบบ่อยในข้อสอบพร้อมคำแปล" },
        { type: "list", items: [
          "<strong>collaborate</strong> — ร่วมมือ | <strong>postpone</strong> — เลื่อนออกไป | <strong>mandatory</strong> — บังคับ",
          "<strong>qualified</strong> — มีคุณสมบัติ | <strong>compelling</strong> — น่าเชื่อถือ | <strong>agreement</strong> — ข้อตกลง",
          "<strong>stimulate</strong> — กระตุ้น | <strong>dedication</strong> — ความทุ่มเท | <strong>discovery</strong> — การค้นพบ",
          "<strong>complicated</strong> — ซับซ้อน | <strong>preserve</strong> — อนุรักษ์ | <strong>cite</strong> — อ้างอิง",
          "<strong>identify</strong> — ระบุ/ชี้ตัว | <strong>inspiring</strong> — สร้างแรงบันดาลใจ | <strong>critically</strong> — อย่างมีวิจารณญาณ",
          "<strong>objective</strong> — วัตถุประสงค์ | <strong>distinctive</strong> — โดดเด่น | <strong>calm</strong> — สงบ/ใจเย็น",
          "<strong>impact / effect</strong> — ผลกระทบ | <strong>beneficial</strong> — เป็นประโยชน์ | <strong>evaluate</strong> — ประเมิน",
          "<strong>extensive</strong> — กว้างขวาง | <strong>launch</strong> — เปิดตัว | <strong>appropriate</strong> — เหมาะสม",
          "<strong>clarify</strong> — อธิบายให้ชัดเจน | <strong>coexist</strong> — อยู่ร่วมกัน | <strong>acquitted</strong> — พ้นผิด",
          "<strong>balanced</strong> — สมดุล | <strong>insight</strong> — ความเข้าใจลึกซึ้ง | <strong>tense</strong> — ตึงเครียด",
          "<strong>adapt</strong> — ปรับตัว | <strong>sufficient</strong> — เพียงพอ | <strong>enthusiasm</strong> — ความกระตือรือร้น",
          "<strong>underscores</strong> — เน้นย้ำ | <strong>threatened</strong> — ถูกคุกคาม | <strong>replace</strong> — แทนที่",
          "<strong>lucid</strong> — ชัดเจนเข้าใจง่าย | <strong>regret</strong> — เสียใจ | <strong>conscientious</strong> — รอบคอบใจสุขุม",
          "<strong>comprehensive</strong> — ครอบคลุม | <strong>irregularities</strong> — ความผิดปกติ | <strong>react</strong> — ทำปฏิกิริยา",
          "<strong>explicit</strong> — ชัดเจน | <strong>collection</strong> — ชุดสะสม | <strong>sustainable</strong> — ยั่งยืน",
          "<strong>persuasive</strong> — โน้มน้าวใจ | <strong>commitment</strong> — ความมุ่งมั่น | <strong>crucial</strong> — สำคัญอย่างยิ่ง",
          "<strong>obnoxious</strong> — น่ารังเกียจ | <strong>decipher</strong> — ถอดรหัส | <strong>foster</strong> — ส่งเสริม",
          "<strong>hollow</strong> — ว่างเปล่า (คำสัญญาว่าง) | <strong>resilience</strong> — ความสามารถในการฟื้นตัว",
          "<strong>lay off</strong> — เลิกจ้าง | <strong>coherent</strong> — สอดคล้องกัน | <strong>tirelessly</strong> — ไม่รู้จักเหน็ดเหนื่อย",
          "<strong>accessible</strong> — เข้าถึงได้ | <strong>reluctant</strong> — ไม่เต็มใจ | <strong>implications</strong> — ผลกระทบโดยนัย",
          "<strong>address</strong> — จัดการกับ (ปัญหา) | <strong>impartial</strong> — เป็นกลางยุติธรรม | <strong>merge</strong> — ควบรวม",
          "<strong>precarious</strong> — ไม่มั่นคง | <strong>fascinated</strong> — หลงใหล | <strong>compromise</strong> — ประนีประนอม",
          "<strong>devise</strong> — วางแผน/ประดิษฐ์ | <strong>conclusive</strong> — สรุปแน่ชัด | <strong>attributed</strong> — เป็นผลมาจาก",
          "<strong>discreet</strong> — สุขุมรอบคอบ | <strong>implement</strong> — นำไปปฏิบัติ | <strong>outstanding</strong> — โดดเด่นยอดเยี่ยม"
        ]},
        { type: "heading", text: "Word Form ที่ออกสอบบ่อย" },
        { type: "list", items: [
          "<strong>เติม -ment:</strong> development, management, establishment, improvement, commitment",
          "<strong>เติม -tion / -sion:</strong> information, solution, recognition, decision, preservation",
          "<strong>เติม -ity:</strong> ability, responsibility, possibility, complexity, accessibility",
          "<strong>เติม -al:</strong> professional, natural, cultural, essential, environmental",
          "<strong>เติม -ly (adverb):</strong> carefully, quickly, recently, properly, efficiently",
          "<strong>เติม -able / -ible:</strong> comfortable, responsible, possible, valuable"
        ]},
        { type: "keypoint", title: "⚠️ จุดสอบบ่อย", text: "<strong>adapt</strong> (ปรับตัว) ≠ <strong>adopt</strong> (นำมาใช้) | <strong>affect</strong> (กริยา) ≠ <strong>effect</strong> (นาม) | <strong>historic</strong> (ที่มีความสำคัญทางประวัติศาสตร์) ≠ <strong>historical</strong> (เกี่ยวกับประวัติศาสตร์) | <strong>discrete</strong> (แยกกัน) ≠ <strong>discreet</strong> (สุขุม) | <strong>regret</strong> (นาม: ความเสียใจ) | เมื่อเลือก verb → ดูว่า tense ถูกต้องหรือไม่ | เมื่อเลือก noun → ดูว่า article/the/possessive ถูกต้องหรือไม่" }
      ]
    }
  ],

  outline: [
    { num: 1, title: "บทสนทนา: สำนวนสื่อสารในสถานการณ์ต่างๆ", emoji: "💬" },
    { num: 2, title: "ไวยากรณ์: Tense, S-V Agreement, Preposition, Word Form", emoji: "📝" },
    { num: 3, title: "การอ่าน: Passage สั้น + Main Idea/Inference/Vocab in Context", emoji: "📖" },
    { num: 4, title: "คำศัพท์: คำแปล + Word Form + คำผิดบ่อย", emoji: "🔤" }
  ],

  glossary: [
    { icon:'💬', term:'Conversation', thai:'บทสนทนา', def:'ทดสอบการเลือกสำนวนที่เหมาะสมในสถานการณ์ต่างๆ เช่น การทักทาย การขอความช่วยเหลือ การแสดงความเห็น การนัดหมาย การให้ความเห็นใจ — ต้องเข้าใจ nuance ของแต่ละสำนวน', tag:'หัวข้อ' },
    { icon:'📝', term:'Grammar', thai:'ไวยากรณ์', def:'ทดสอบ Tense, Subject-Verb Agreement, Preposition, Conjunction, Relative Pronoun, Word Form — มีข้อสอบมากกว่า 200 ข้อ ครอบคลุมทุกประเภท ต้องเข้าใจโครงสร้างประโยคและการผันกริยา', tag:'หัวข้อ' },
    { icon:'📖', term:'Reading Comprehension', thai:'การอ่านจับใจความ', def:'ทดสอบความเข้าใจ Passage สั้นหลากหลายประเภท ทั้ง Main Idea, Detail, Inference, Vocabulary in Context, Reference — ตอบตาม Passage ไม่ใช้ความรู้ส่วนตัว', tag:'หัวข้อ' },
    { icon:'🔤', term:'Vocabulary', thai:'คำศัพท์', def:'ทดสอบความเข้าใจความหมายคำศัพท์และ Word Form — มีข้อสอบมากกว่า 200 ข้อ ต้องรู้คำแปล คำผิดบ่อย และรูปคำ (noun/verb/adj/adv)', tag:'หัวข้อ' },
    { icon:'📌', term:'Word Form', thai:'รูปคำ', def:'การเลือกคำที่ถูกต้องในบริบท เช่น influence (นาม) ≠ affect (กริยา) หรือ adapt (ปรับตัว) ≠ adopt (นำมาใช้) — ต้องรู้ว่าตำแหน่งในประโยคต้องการ noun, verb, adjective หรือ adverb', tag:'ไวยากรณ์' },
    { icon:'🔢', term:'ตัวเลขสำคัญ', thai:'Key Numbers', def:'Grammar 200+ ข้อ | Vocab 200+ ข้อ | Conversation 100 ข้อ | Reading 100 ข้อ | รวม 500+ ข้อ ครอบคลุมทั้ง 4 หัวข้อ', tag:'ตัวเลข' }
  ],

  tips: [
    "<strong>Conversation:</strong> No, not at all = อนุญาต | make an appointment = ถูก | Do you mind telling me? = ถามสุภาพมาก | I see = เข้าใจแล้ว | Good for you = ชื่นชม",
    "<strong>Grammar:</strong> A number of = are | The number of = is | If I were you (ใช้ were เสมอ) | neither/either...or กริยาผันตามตัวหลังสุด | Police/Staff/Committee = พหูพจน์เสมอ",
    "<strong>Reading:</strong> ตอบตาม Passage ไม่ใช้ความรู้ส่วนตัว | alternative = substitute ไม่ใช่ mandatory | albeit = อย่างไรก็ตาม | The latter = สิ่งสุดท้ายที่กล่าวถึง",
    "<strong>Vocabulary:</strong> adapt ≠ adopt | affect ≠ effect | historic ≠ historical | discrete ≠ discreet | เมื่อเลือก Word Form ดูก่อนว่าตำแหน่งนั้นต้องการ noun/verb/adj/adv",
    "ข้อสอบ English มี<strong>4 หัวข้อ</strong>: Conversation, Grammar, Reading, Vocab — รวมกันมากกว่า 500 ข้อ ครอบคลุมทุกด้านของภาษาอังกฤษพื้นฐาน"
  ],

  quizFile: "Quiz_english.html"
};