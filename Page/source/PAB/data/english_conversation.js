// ============================================================
// CONTENT DATA — english_conversation
// ============================================================

const CONTENT = {
  topic: "english_conversation",
  title: "บทสนทนา (Conversation) — สำนวนและรูปแบบการสื่อสาร",
  titleShort: "บทสนทนา",
  emoji: "💬",
  year: "",
  stats: {
    chapters: 3,
    amendments: 0,
    vocabGroups: 0,
    quizCount: 50,
    sectionNumber: "1",
    sectionLabel: "ส่วนที่ 1 — ฟรี"
  },
  subtitle: "ทดสอบการเลือกสำนวน/รูปแบบประโยคที่เหมาะสมในสถานการณ์ต่างๆ",

  chapters: [
    {
      num: 1,
      title: "รูปแบบสำนวนที่พบบ่อยในข้อสอบ",
      emoji: "📌",
      body: [
        { type: "heading", text: "การทักทายและแนะนำตัว" },
        { type: "list", items: [
          "<strong>Nice to meet you.</strong> / <strong>Pleased to meet you.</strong> — ทักทายเมื่อพบคนใหม่",
          "<strong>What a surprise!</strong> — แสดงความประหลาดใจเมื่อเจอคนที่ไม่ได้เจอมานาน",
          "<strong>Good for you!</strong> — ชื่นชมให้กำลังใจ (ไม่ใช่ sarcastic)",
          "<strong>How do you do?</strong> — ทักทายทางการ"
        ]},
        { type: "heading", text: "การขอข้อมูลและขอความช่วยเหลือ" },
        { type: "list", items: [
          "<strong>Could you please tell me...?</strong> — ขออย่างสุภาพมาก",
          "<strong>Do you mind telling me...?</strong> — ถามอย่างสุภาพมากเช่นกัน",
          "<strong>Can I give you a hand?</strong> — เสนอความช่วยเหลือ",
          "<strong>Can you help me...?</strong> — ขอความช่วยเหลือทั่วไป"
        ]},
        { type: "heading", text: "การตอบรับคำขอบคุณและคำขอ" },
        { type: "list", items: [
          "<strong>You're welcome.</strong> / <strong>Don't mention it.</strong> / <strong>It's my pleasure.</strong> — ตอบรับคำขอบคุณ",
          "<strong>No, not at all. Go ahead.</strong> — อนุญาต (ปฏิเสธความรังเกียจ → แปลว่ายอมรับ)",
          "<strong>Of course.</strong> — ยินดีช่วย / ตอบรับคำขอ",
          "<strong>Never mind.</strong> — ไม่เป็นไร"
        ]},
        { type: "heading", text: "การนัดหมายและการโทรศัพท์" },
        { type: "list", items: [
          "<strong>make an appointment</strong> (ถูก) | make appointment (ผิด)",
          "<strong>Could I speak with...?</strong> — ขอพูดกับใครสักคน",
          "<strong>Can I take a message?</strong> — ถามว่าจะให้จดบอกอะไรไหม",
          "<strong>I'll put you through.</strong> — เชื่อมต่อสายให้",
          "<strong>I'd like to make an appointment.</strong> — ขอนัด"
        ]},
        { type: "heading", text: "การแสดงความยินดี/เสียใจ" },
        { type: "list", items: [
          "<strong>Congratulations!</strong> — แสดงความยินดี",
          "<strong>Well done!</strong> — ชื่นชม",
          "<strong>I'm so sorry to hear that.</strong> — แสดงความเสียใจ",
          "<strong>My condolences</strong> — ไว้อาลัย",
          "<strong>Good luck!</strong> — อวยพร"
        ]},
        { type: "keypoint", title: "⚠️ จุดสอบบ่อย", text: "<strong>No, not at all</strong> = อนุญาต (ปฏิเสธความรังเกียจ) | <strong>Good for you!</strong> = ชื่นชม | <strong>I see.</strong> = เข้าใจแล้ว | <strong>make an appointment</strong> = ถูก | <strong>Drop, Cover, Hold on</strong> = มาตรฐานสากลแผ่นดินไหว" }
      ]
    },
    {
      num: 2,
      title: "สถานการณ์ต่างๆ ที่ออกสอบบ่อย",
      emoji: "🎯",
      body: [
        { type: "heading", text: "สถานการณ์: การสื่อสารในชีวิตประจำวัน" },
        { type: "list", items: [
          "<strong>แนะนำทาง:</strong> Go straight down this road for two blocks. It's on your right.",
          "<strong>สั่งอาหาร/เครื่องดื่ม:</strong> I'd like a large latte, please. / Soy milk is available.",
          "<strong>ขอโทษ/ให้อภัย:</strong> I'm afraid I've spilled coffee on your report. → Never mind.",
          "<strong>ปฏิเสธอย่างสุภาพ:</strong> I'd love to, but I can't. / I'm afraid I can't.",
          "<strong>เสนอความช่วยเหลือ:</strong> Those bags look heavy. Can I give you a hand?"
        ]},
        { type: "heading", text: "สถานการณ์: การทำงานและอาชีพ" },
        { type: "list", items: [
          "<strong>แนะนำตัว (ที่ทำงานใหม่):</strong> I'm pleased to meet you. / Nice to meet you too.",
          "<strong>เสนอความช่วยเหลือ (ที่ทำงาน):</strong> I have a spare one on my desk you can use. → Don't mention it. We're a team, after all.",
          "<strong>ยืนยันการจอง:</strong> Could you please hold for a moment? → Of course.",
          "<strong>นัดหมาย:</strong> That works for me. / Sounds good. / That's perfect.",
          "<strong>ขออนุญาต:</strong> Would you mind if I open the window? → No, not at all. Go ahead."
        ]},
        { type: "heading", text: "สถานการณ์: งานสังคมและการพบปู" },
        { type: "list", items: [
          "<strong>ปาร์ตี้:</strong> Thanks for having me. / Please feel at home. / You're welcome.",
          "<strong>แนะนำเพื่อน:</strong> How do you know Tom? / What do you do for a living?",
          "<strong>พูดคุยเรื่องงาน:</strong> Drop by anytime. / I'm pleased to meet you.",
          "<strong>ให้กำลังใจ:</strong> Don't worry. Just be yourself. / Cheer up.",
          "<strong>ขอแสดงความเสียใจ:</strong> My condolences on the loss of your grandfather. → Thank you for your sympathy."
        ]},
        { type: "keypoint", title: "⚠️ สำนวนหลอกบ่อย", text: "<strong>I'm pleased to meet you</strong> = ตอบรับการแนะนำตัว (ไม่ใช่ขานทักทาย) | <strong>It depends on you</strong> ≠ เป็นไปได้ | <strong>Sounds good</strong> = ตกลง | <strong>Oh, that's a shame</strong> = เสียดาย" }
      ]
    },
    {
      num: 3,
      title: "คำแปลและความหมายของสำนวนที่สำคัญ",
      emoji: "🔤",
      body: [
        { type: "heading", text: "สำนวนที่ต้องจำให้แม่น" },
        { type: "list", items: [
          "<strong>No, not at all.</strong> → อนุญาต / ไม่รังเกียจ",
          "<strong>Good for you!</strong> → ชื่นชมให้กำลังใจ",
          "<strong>I see.</strong> → เข้าใจแล้ว",
          "<strong>That's a shame.</strong> → น่าเสียดาย",
          "<strong>Cheer up.</strong> → สู้สิ! ใจเย็นๆ",
          "<strong>Don't mention it.</strong> → ไม่เป็นไร (ตอบคำขอบคุณ)",
          "<strong>You're welcome.</strong> → ไม่เป็นไร (ตอบคำขอบคุณ)",
          "<strong>It depends on you.</strong> → ขึ้นอยู่กับคุณ",
          "<strong>I'm quite flexible.</strong> → ฉันค่อนข้างยืดหยุ่น",
          "<strong>Sounds good.</strong> → ฟังดีดี / ตกลง",
          "<strong>That's perfect.</strong> → ดีเลย / สมบูรณ์แบบ",
          "<strong>You shouldn't have.</strong> → แสดงความเกรงใจเมื่อได้รับของขวัญ",
          "<strong>I'd love to, but I can't.</strong> → ปฏิเสธอย่างสุภาพ",
          "<strong>It works for me.</strong> → เป็นไปได้ / เหมาะกับฉัน"
        ]},
        { type: "heading", text: "สำนวนที่ออกสอบบ่อย — การเลือกรูปแบบที่ถูกต้อง" },
        { type: "list", items: [
          "<strong>make an appointment</strong> ✓ | make appointment ✗",
          "<strong>Do you mind telling me?</strong> ✓ ถามสุภาพมาก",
          "<strong>Could I speak with...?</strong> ✓ | I want to speak to... ✗",
          "<strong>Would you like to leave a message?</strong> ✓",
          "<strong>Can I take a message?</strong> ✓",
          "<strong>I'm pleased to meet you.</strong> ✓ ตอบรับ",
          "<strong>What's your name?</strong> ✗ ในบริบทที่เพิ่งรู้จัก"
        ]},
        { type: "keypoint", title: "📝 การจำ", text: "<strong>แนะนำตัว:</strong> Nice to meet you (ทัก) → I'm pleased to meet you (ตอบรับ) | <strong>ขอบคุณ:</strong> You're welcome / Don't mention it / My pleasure | <strong>ขอโทษ:</strong> Never mind / No problem / It's okay | <strong>เสียใจ:</strong> I'm so sorry to hear that / My condolences" }
      ]
    }
  ],

  outline: [
    { num: 1, title: "รูปแบบสำนวนที่พบบ่อยในข้อสอบ", emoji: "📌" },
    { num: 2, title: "สถานการณ์ต่างๆ ที่ออกสอบบ่อย", emoji: "🎯" },
    { num: 3, title: "คำแปลและความหมายของสำนวนที่สำคัญ", emoji: "🔤" }
  ],

  glossary: [
    { icon:'💬', term:'Conversation', thai:'บทสนทนา', def:'ข้อสอบทดสอบการเลือกสำนวน/รูปแบบประโยคที่เหมาะสมในสถานการณ์ต่างๆ เช่น การทักทาย การขอความช่วยเหลือ การแสดงความเห็น การนัดหมาย — ต้องเข้าใจ nuance ของแต่ละสำนวน เช่น No, not at all = อนุญาต (ไม่ใช่ปฏิเสธ)', tag:'หัวข้อ' },
    { icon:'📌', term:'make an appointment', thai:'นัดหมาย', def:'สำนวนที่ต้องจำ: ใช้ article "an" ก่อน appointment — make an appointment (ถูก) | make appointment (ผิด)', tag:'สำนวน' },
    { icon:'🔑', term:'No, not at all', thai:'ไม่รังเกียจ/อนุญาต', def:'ปฏิเสธความรังเกียจ → แปลว่ายอมรับ/อนุญาต ตัวอย่าง: Would you mind if I open the window? → No, not at all. Go ahead. (อนุญาต)', tag:'สำนวน' },
    { icon:'💬', term:'Do you mind telling me?', thai:'ถามอย่างสุภาพมาก', def:'สำนวนถามที่สุภาพมาก มักเป็นคำตอบที่ถูกต้องในข้อสอบ', tag:'สำนวน' },
    { icon:'💬', term:'Good for you!', thai:'ชื่นชมให้กำลังใจ', def:'ไม่ใช่ sarcastic หรือเยาะเย้ย แต่เป็นการแสดงความยินดี/ชื่นชมให้กำลังใจ', tag:'สำนวน' }
  ],

  tips: [
    "<strong>No, not at all</strong> = อนุญาต (ปฏิเสธความรังเกียจ → แปลว่ายอมรับ)",
    "<strong>Good for you!</strong> = ชื่นชมให้กำลังใจ (ไม่ใช่ sarcastic)",
    "<strong>I see.</strong> = เข้าใจแล้ว (ตอบรับข้อมูล)",
    "<strong>make an appointment</strong> (ถูก) | make appointment (ผิด)",
    "<strong>Do you mind telling me</strong> = ถามอย่างสุภาพมาก มักเป็นคำตอบที่ถูกต้อง",
    "<strong>I'd love to, but I can't.</strong> = ปฏิเสธอย่างสุภาพเป็นสำนวนมาตรฐาน",
    "ในบริบทการขออนุญาต เลือกสำนวนที่สุภาพที่สุด เช่น Would you mind...? / Do you mind...?"
  ],

  quizFile: "Quiz_english_conversation.html"
};