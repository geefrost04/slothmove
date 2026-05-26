// ============================================================
// CONTENT DATA — english_grammar
// ============================================================

const CONTENT = {
  topic: "english_grammar",
  title: "ไวยากรณ์ (Grammar) — Tense, Subject-Verb Agreement และ Word Form",
  titleShort: "ไวยากรณ์",
  emoji: "📝",
  year: "",
  stats: {
    chapters: 4,
    amendments: 0,
    vocabGroups: 0,
    quizCount: 50,
    sectionNumber: "1",
    sectionLabel: "ส่วนที่ 1 — ฟรี"
  },
  subtitle: "สรุปละเอียด Tense, Subject-Verb Agreement, Preposition, Conjunction และ Word Form",

  chapters: [
    {
      num: 1,
      title: "Tense — กริยาช่วง 4 ประเภทหลัก",
      emoji: "⏰",
      body: [
        { type: "heading", text: "Present Tense" },
        { type: "list", items: [
          "<strong>Present Simple:</strong> กิจวัตร, ความจริงทางวิทยาศาสตร์, ตารางเวลา (every, usually, always)",
          "<strong>Present Continuous:</strong> กำลังเกิดขณะพูด, แผนอนาคตใกล้ (now, right now, at this moment, next month)",
          "<strong>Present Perfect:</strong> เกิดในอดีตดำเนินมาถึงปัจจุบัน (since, for, already, just, yet)"
        ]},
        { type: "heading", text: "Past Tense" },
        { type: "list", items: [
          "<strong>Past Simple:</strong> เหตุการณ์จบลงในอดีต (yesterday, last week, ago)",
          "<strong>Past Continuous:</strong> กำลังทำอยู่ในช่วงเวลาหนึ่งในอดีต (while + past)",
          "<strong>Past Perfect:</strong> เหตุการณ์จบก่อนอีกเหตุการณ์ในอดีต (had + V3)"
        ]},
        { type: "heading", text: "Future Tense" },
        { type: "list", items: [
          "<strong>Future Simple:</strong> will + V1 / be going to + V1",
          "<strong>Future Continuous:</strong> will be + V-ing",
          "<strong>Future Perfect:</strong> will have + V3 (เหตุการณ์จะเสร็จสิ้นก่อนเวลาในอนาคต)"
        ]},
        { type: "keypoint", title: "⚠️ จุดสอบบ่อย", text: "<strong>By this time next week, we will have finished</strong> → Future Perfect | <strong>Listen! Someone is crying</strong> → Present Continuous | <strong>Since / For</strong> → Present Perfect เท่านั้น" }
      ]
    },
    {
      num: 2,
      title: "Subject-Verb Agreement — กริยาผันตามประธาน",
      emoji: "🔢",
      body: [
        { type: "heading", text: "กริยาผันตามประธาน" },
        { type: "list", items: [
          "<strong>A number of + นามพหูพจน์ → are</strong> | <strong>The number of + นาม → is</strong>",
          "<strong>Neither...nor / Either...or:</strong> กริยาผันตามประธานตัวที่อยู่ใกล้สุด",
          "<strong>Along with / Together with / As well as:</strong> กริยาผันตามประธานตัวหน้าสุด"
        ]},
        { type: "heading", text: "ประธานเอกพจน์ที่เป็นพหูพจน์ (Special Plurals)" },
        { type: "list", items: [
          "<strong>The police / The staff / The committee:</strong> → พหูพจน์เสมอ",
          "<strong>Mathematics / News / Politics:</strong> → เอกพจน์ (ลงท้ายด้วย s แต่ไม่นับเป็นพหูพจน์)",
          "<strong>The pliers / The scissors / A pair of glasses:</strong> → พหูพจน์ (มีสองส่วน)",
          "<strong>Each of / Every / Nobody / Everyone / Anybody:</strong> → เอกพจน์",
          "<strong>None of:</strong> → เป็นเอกพจน์หรือพหูพจน์ก็ได้ขึ้นอยู่กับนามที่ตามหลัง"
        ]},
        { type: "keypoint", title: "⚠️ จุดสอบบ่อย", text: "<strong>A number of = are | The number of = is</strong> | Neither...nor กริยาผันตามตัวหลังสุด | <strong>Police / Staff / Committee</strong> = พหูพจน์เสมอ | <strong>Mathematics / News / Politics</strong> = เอกพจน์" }
      ]
    },
    {
      num: 3,
      title: "Preposition และ Conjunction",
      emoji: "🔗",
      body: [
        { type: "heading", text: "Preposition สำคัญ" },
        { type: "list", items: [
          "<strong>at</strong> — จุดเฉพาะ: at the bus stop, at noon, at 10 a.m., at night",
          "<strong>in</strong> — ช่วงเวลา/เดือน/ปี: in the morning, in May, in 1990, in the afternoon",
          "<strong>on</strong> — วันที่/วัน: on Monday, on August 15th, on the table, on the weekend",
          "<strong>between</strong> — ระหว่างสองสิ่ง | <strong>among</strong> — ระหว่างมากกว่าสองสิ่ง",
          "<strong>through</strong> — ผ่าน/ลอด | <strong>over</strong> — ข้าม | <strong>under</strong> — ใต้"
        ]},
        { type: "heading", text: "Conjunction ที่ออกสอบบ่อย" },
        { type: "list", items: [
          "<strong>although / despite / however / moreover / therefore / consequently / otherwise</strong>",
          "<strong>because</strong> — เพราะ | <strong>so</strong> — ดังนั้น | <strong>but</strong> — แต่",
          "<strong>although + ประโยคสมบูรณ์</strong> → แม้ว่า | <strong>despite + นาม/gerund</strong> → แม้ว่า",
          "<strong>therefore</strong> — ดังนั้น (ใช้จุลภาค) | <strong>however</strong> — อย่างไรก็ตาม (ใช้จุลภาค)",
          "<strong>otherwise</strong> — ไม่เช่นนั้น / มิฉะนั้น"
        ]},
        { type: "keypoint", title: "⚠️ จุดสอบบ่อย", text: "<strong>Although it was raining, they went for a walk.</strong> ✓ | <strong>Despite being tired, she continued working.</strong> ✓ | <strong>He spoke quietly so as not to wake the baby.</strong> ✓" }
      ]
    },
    {
      num: 4,
      title: "Word Form — คำแต่ละรูป",
      emoji: "🔤",
      body: [
        { type: "heading", text: "Adj → Adv" },
        { type: "list", items: [
          "<strong>quiet → quietly</strong> | <strong>quick → quickly</strong> | <strong>extreme → extremely</strong>",
          "<strong>sweet → sweetly</strong> | <strong>calm → calmly</strong> | <strong>remarkable → remarkably</strong>",
          "ข้อสังเกต: กริยาผันเมื่อใช้กับ Subject เช่น The athlete ran <strong>quickly</strong> → ใช้ adverb"
        ]},
        { type: "heading", text: "นามที่ลงท้ายด้วย -ment, -tion, -ity, -ance" },
        { type: "list", items: [
          "<strong>-ment:</strong> development, management, establishment, improvement, commitment",
          "<strong>-tion:</strong> information, solution, recognition, construction, explanation",
          "<strong>-ity:</strong> ability, responsibility, possibility, complexity, accessibility",
          "<strong>-ance:</strong> confidence, performance, importance, patience"
        ]},
        { type: "heading", text: "คำผิดบ่อยที่ต้องจำ" },
        { type: "list", items: [
          "<strong>affect (กริยา) ≠ effect (นาม)</strong>",
          "<strong>adapt (ปรับตัว) ≠ adopt (นำมาใช้)</strong>",
          "<strong>historic (มีความสำคัญทางประวัติศาสตร์) ≠ historical (เกี่ยวกับประวัติศาสตร์)</strong>",
          "<strong>discrete (แยกกัน) ≠ discreet (สุขุม)</strong>"
        ]},
        { type: "keypoint", title: "⚠️ จุดสอบบ่อย", text: "<strong>adapt ≠ adopt | affect ≠ effect | historic ≠ historical | discrete ≠ discreet</strong> | เมื่อเลือก Word Form ดูก่อนว่าตำแหน่งนั้นต้องการ noun/verb/adj/adv | conditional type 2: <strong>If I were you</strong> (ใช้ were เสมอกับ I)" }
      ]
    }
  ],

  outline: [
    { num: 1, title: "Tense — กริยาช่วง 4 ประเภทหลัก", emoji: "⏰" },
    { num: 2, title: "Subject-Verb Agreement — กริยาผันตามประธาน", emoji: "🔢" },
    { num: 3, title: "Preposition และ Conjunction", emoji: "🔗" },
    { num: 4, title: "Word Form — คำแต่ละรูป", emoji: "🔤" }
  ],

  glossary: [
    { icon:'📝', term:'Grammar', thai:'ไวยากรณ์', def:'ข้อสอบทดสอบ Tense, Subject-Verb Agreement, Preposition, Conjunction, Relative Pronoun, Word Form — มีข้อสอบมากกว่า 200 ข้อ ครอบคลุมทุกประเภท ต้องเข้าใจโครงสร้างประโยคและการผันกริยา', tag:'หัวข้อ' },
    { icon:'🔢', term:'A number of vs The number of', thai:'จำนวน vs ตัวเลข', def:'<strong>A number of + นามพหูพจน์ → are</strong> | <strong>The number of + นาม → is</strong> — จุดสอบที่พบบ่อยมาก', tag:'ไวยากรณ์' },
    { icon:'🔑', term:'If I were you', thai:'ถ้าฉันเป็นเธอ', def:'Conditional Type 2: ใช้ were เสมอกับ I (ไม่ใช่ was) — ใช้ในสถานการณ์เป็นไปไม่ได้หรือไม่น่าเป็นจริง', tag:'ไวยากรณ์' },
    { icon:'🔤', term:'Word Form', thai:'รูปคำ', def:'การเลือกคำที่ถูกต้องในบริบท เช่น influence (นาม) ≠ affect (กริยา) หรือ adapt (ปรับตัว) ≠ adopt (นำมาใช้) — ต้องรู้ว่าตำแหน่งในประโยคต้องการ noun, verb, adjective หรือ adverb', tag:'ไวยากรณ์' },
    { icon:'🔗', term:'although vs despite', thai:'แม้ว่า', def:'although + ประโยคสมบูรณ์ (although it was raining) | despite + นาม/gerund (despite the rain) — ทั้งสองแปลว่าแม้ว่า แต่โครงสร้างต่างกัน', tag:'ไวยากรณ์' }
  ],

  tips: [
    "<strong>A number of = are | The number of = is</strong>",
    "Neither...nor / Either...or: กริยาผันตามตัวหลังสุด",
    "Police/Staff/Committee = พหูพจน์เสมอ",
    "Mathematics/News/Politics = เอกพจน์ (ลงท้าย s แต่ไม่ใช่พหูพจน์)",
    "<strong>If I were you</strong> — ใช้ were เสมอกับ I (ไม่ใช่ was)",
    "adapt ≠ adopt | affect ≠ effect | historic ≠ historical",
    "เมื่อเลือก Word Form ดูก่อนว่าตำแหน่งนั้นต้องการ noun/verb/adj/adv"
  ],

  quizFile: "Quiz_english_grammar.html"
};