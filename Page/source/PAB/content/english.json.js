// Content data for: ภาษาอังกฤษ (ข้อสอบ ก. กทม. / ภาค ก ปภ.) - ฉบับเตรียมสอบ 100 คะแนนเต็ม
window.ENGLISH_DATA = {
  id: "english",
  PAGE_TYPE: "knowledge",
  title: "ภาษาอังกฤษ (ข้อสอบ ก. กทม. / ภาค ก ปภ.)",
  titleShort: "ภาษาอังกฤษ",
  subtitle: "Conversation · Grammar · Reading · Vocabulary",
  badgeLabel: "สำหรับเตรียมสอบภาค ก. / ก. กทม. (100 คะแนนเต็ม)",
  emoji: "🌍",
  stats: {
    chapters: 5,
    parts: 40,
    vocab: 12,
    quiz: 100
  },
  heroStats: [
    { value: "5 บทสรุป", label: "หัวข้อสำคัญ" },
    { value: "12 คำหลัก", label: "คำศัพท์ออกสอบบ่อย" },
    { value: "100 ข้อ", label: "ข้อสอบแนวใหม่" },
    { value: "10 ทริค", label: "จุดหลอกทำคะแนน" }
  ],
  knowledgeSections: [
    // ═══════════════════════════════════════════════════════════
    // บทที่ 1 — บทสนทนาทั่วไป & สำนวนที่พบบ่อย
    // ═══════════════════════════════════════════════════════════
    {
      navIcon: "💬",
      navLabel: "บทสนทนา",
      icon: "💬",
      title: "บทที่ 1 · บทสนทนาทั่วไป และสำนวนสื่อสารที่พบบ่อย (Conversation)",
      description: "ทำความเข้าใจสำนวนการสนทนาในชีวิตประจำวัน การขออนุญาตอย่างสุภาพ และการตอบรับที่ไม่ตรงตัว",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "💬 รูปแบบสำนวนที่ออกข้อสอบบ่อยที่สุด",
          content: "• <strong>การทักทาย / แนะนำตัว:</strong> Nice to meet you · Pleased to meet you · What a surprise! (เจอกันโดยไม่คาดคิด)<br>" +
            "• <strong>การขอความช่วยเหลือ:</strong> Could you please tell me...? · Do you mind telling me...? · Can you give me a hand? (ช่วยหน่อยได้ไหม)<br>" +
            "• <strong>การตอบรับคำขอบคุณ:</strong> You're welcome · Don't mention it · It's my pleasure · My pleasure.<br>" +
            "• <strong>การนัดหมาย:</strong> make an appointment · That works for me (สะดวกตามนั้น) · Sounds good (ฟังดูดี)<br>" +
            "• <strong>การแสดงความยินดี / เสียใจ:</strong> Congratulations! · I'm so sorry to hear that (แสดงความเห็นใจข่าวร้าย)<br>" +
            "• <strong>การปฏิเสธอย่างสุภาพ:</strong> I'd love to, but I can't · I'm afraid I can't (เกรงว่าฉันจะทำไม่ได้)"
        },
        {
          type: "highlight-box",
          color: "blue",
          title: "⚠️ จุดจำจุดลวง: การขออนุญาตด้วย 'Do you mind / Would you mind'?",
          content: "เมื่อประโยคถามขึ้นต้นด้วย <strong>Do you mind...?</strong> หรือ <strong>Would you mind...?</strong> (คุณจะรังเกียจไหม...?) มีความหมายเชิงปฏิเสธในตัว การตอบรับและปฏิเสธต้องจำสัญญะดังนี้:"
        },
        {
          type: "premium-flowchart",
          cards: [
            {
              title: "1. ตอบตกลง (อนุญาตให้ทำ)",
              icon: "✅",
              status: "allowed",
              authority: "No / Not at all",
              desc: "ตอบว่า <strong>'No, not at all.'</strong> หรือ <strong>'Of course not.'</strong> หรือ <strong>'Please go ahead.'</strong> (แปลว่า ไม่รังเกียจเลย เชิญตามสบาย)"
            },
            {
              title: "2. ตอบปฏิเสธ (ไม่อนุญาต)",
              icon: "❌",
              status: "prohibited",
              authority: "Yes / I'm afraid...",
              desc: "ตอบว่า <strong>'Yes, I do.'</strong> หรือ <strong>'I'm afraid I do.'</strong> หรือสุภาพขึ้น <strong>'I'd rather you didn't.'</strong> (แปลว่า รังเกียจ / ไม่อยากให้ทำ)"
            }
          ]
        },
        {
          type: "highlight-box",
          color: "amber",
          title: "📌 สำนวนเฉพาะที่มักเจอในโจทย์ Conversation",
          content: "• <strong>Good for you!</strong> = ดีจังเลยนะ! (แสดงความชื่นชมยินดี)<br>" +
            "• <strong>I couldn't agree more.</strong> = ฉันเห็นด้วยอย่างยิ่ง (เห็นด้วยจนไม่สามารถเห็นด้วยได้มากกว่านี้แล้ว = เห็นด้วย 100%)<br>" +
            "• <strong>You shouldn't have.</strong> = ไม่จำเป็นต้องลำบากซื้อมาให้เลย (แสดงความเกรงใจและขอบคุณเมื่อได้รับของขวัญ)<br>" +
            "• <strong>Please feel at home.</strong> = ทำตัวตามสบายเหมือนอยู่บ้านนะ (ใช้ต้อนรับแขก)<br>" +
            "• <strong>I see.</strong> = อ๋อ เข้าใจแล้ว (ไม่ใช่แปลว่าฉันเห็น)"
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // บทที่ 2 — ไวยากรณ์ & การเลือกใช้คำ
    // ═══════════════════════════════════════════════════════════
    {
      navIcon: "📝",
      navLabel: "ไวยากรณ์ & คำศัพท์",
      icon: "📝",
      title: "บทที่ 2 · ไวยากรณ์ และโครงสร้างประธาน-กริยา (Subject-Verb Agreement)",
      description: "กฎการเลือกใช้คำกริยาให้ตรงตามประเภทประธาน คำนามรูปหลอก และโครงสร้างประโยคเงื่อนไขที่ออกสอบบ่อย",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "👥 Subject-Verb Agreement: ประธานและกริยาต้องสัมพันธ์กัน",
          content: "กฎไวยากรณ์ที่ออกสอบในข้อสอบเกือบทุกชุด มีกฎที่ต้องจดจำลงสมองดังนี้:"
        },
        {
          type: "premium-flowchart",
          cards: [
            {
              title: "A number of vs The number of",
              icon: "🔢",
              status: "allowed",
              authority: "ต่างกันตรงกริยา",
              desc: "• <strong>A number of</strong> + นามพหูพจน์ → ใช้กริยา <strong>พหูพจน์ (are, have, do)</strong><br>• <strong>The number of</strong> + นามพหูพจน์ → ใช้กริยา <strong>เอกพจน์ (is, has, does)</strong> (เพราะเน้นจำนวนตัวเลขหนึ่งกลุ่ม)"
            },
            {
              title: "Neither...nor / Either...or",
              icon: "⚖️",
              status: "warning",
              authority: "กริยาตามตัวใกล้สุด",
              desc: "เมื่อเชื่อมประธานสองตัว กริยาจะผันตามประธานตัวที่อยู่ <strong>'ใกล้กริยาที่สุด'</strong> เช่น Neither the teacher nor the students <strong>are</strong> here."
            },
            {
              title: "Along with / Together with",
              icon: "🤝",
              status: "restricted",
              authority: "กริยาตามประธานหน้า",
              desc: "เมื่อประธานเชื่อมด้วย Along with, Together with, As well as กริยาจะผันตาม <strong>'ประธานตัวหน้าสุด'</strong> เท่านั้น เช่น The manager along with his team <strong>is</strong> attending."
            }
          ]
        },
        {
          type: "highlight-box",
          color: "teal",
          title: "📌 คำนามรูปเอกพจน์/พหูพจน์ที่หลอกในข้อสอบ",
          content: "• <strong>รูปพหูพจน์แต่ใช้กริยาเอกพจน์ (เป็นวิชา/ชื่อ):</strong> Mathematics, Physics, News (ข่าว), Politics (การเมือง) → ใช้กริยาเอกพจน์ (is/has)<br>" +
            "• <strong>คำไม่มีรูปเติม s แต่เป็นพหูพจน์เสมอ:</strong> The police (ตำรวจ), The staff (ทีมงาน), The committee (คณะกรรมการ) → ใช้กริยาพหูพจน์ (are/have)<br>" +
            "• <strong>นามเอกพจน์เสมอ:</strong> Everybody, Everyone, Someone, Anyone, Nobody, Each, Every → ใช้กริยาเอกพจน์เสมอ"
        },
        {
          type: "highlight-box",
          color: "rose",
          title: "🔤 คำที่มักสับสนในรูปฟอร์ม (Word Form & Conditionals)",
          content: "• <strong>adapt (ปรับตัว) ≠ adopt (รับมาเลี้ยง/นำมาใช้):</strong> She decided to <strong>adopt</strong> a new strategy.<br>" +
            "• <strong>affect (กริยา: ส่งผลกระทบ) ≠ effect (คำนาม: ผลกระทบ):</strong> The weather <strong>affects</strong> our flight (V). / The <strong>effect</strong> was clear (N).<br>" +
            "• <strong>discrete (แยกจากกันเป็นชิ้น) ≠ discreet (สุขุม, ระมัดระวังรอบคอบ):</strong> Please be <strong>discreet</strong> about this matter.<br>" +
            "• <strong>ประโยคสมมติเงื่อนไข (Conditional Type 2):</strong> ใช้สมมติเหตุการณ์ที่เป็นไปไม่ได้ในปัจจุบัน โครงสร้างคือ <strong>If + S + V2, S + would + V1</strong> และกริยา to be ในประพจน์ If จะใช้ <strong>were</strong> เสมอ ไม่ว่าประธานจะเป็นอะไร เช่น If I <strong>were</strong> you, I <strong>would</strong> accept the job."
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // บทที่ 3 — เจาะลึก กริยา & Tenses
    // ═══════════════════════════════════════════════════════════
    {
      navIcon: "⏱️",
      navLabel: "เจาะลึก Tenses",
      icon: "⏱️",
      title: "บทที่ 3 · เจาะลึกโครงสร้างกาลเวลา (Tenses) และคำบอกเวลาคีย์หลัก",
      description: "เปรียบเทียบ Tense ที่พบในข้อสอบบ่อยที่สุด และคีย์บอกใบ้เวลาสำหรับการเลือกชอยส์กริยา",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "⏱️ สรุปไทม์ไลน์ Tenses ยอดนิยมในข้อสอบ",
          content: "การเลือกตอบ Tense ให้ถูกต้อง ต้องมองหาคำระบุเวลา (Time Markers) ในประโยคเป็นคีย์หลักในการเชื่อมโยง:"
        },
        {
          type: "premium-timeline",
          steps: [
            {
              step: "1",
              title: "Present Simple (S + V1/V_s,es)",
              badge: "ความจริง/กิจวัตร",
              badgeColor: "rose",
              desc: "ใช้บอกกฎธรรมชาติหรือตารางเวลา คีย์หลัก: <strong>every morning, usually, always, routinely, normally</strong>"
            },
            {
              step: "2",
              title: "Present Continuous (S + is/am/are + V_ing)",
              badge: "กำลังเกิดขณะนี้",
              badgeColor: "amber",
              desc: "ใช้เมื่อเหตุการณ์กำลังเกิดขึ้น คีย์ระบุ: <strong>now, right now, at this moment, Listen!, Look!</strong>"
            },
            {
              step: "3",
              title: "Past Simple (S + V2)",
              badge: "เกิดและจบแล้วในอดีต",
              badgeColor: "blue",
              desc: "เหตุการณ์เกิดขึ้นและสิ้นสุดลงไปแล้ว คีย์สำคัญ: <strong>yesterday, last week, ago, in 1999</strong>"
            },
            {
              step: "4",
              title: "Present Perfect (S + has/have + V3)",
              badge: "อดีตโยงถึงปัจจุบัน",
              badgeColor: "green",
              desc: "เหตุการณ์ในอดีตที่ส่งผลหรือดำเนินต่อเนื่อง คีย์หลอกยอดฮิต: <strong>since, for, already, yet, just, recently, so far</strong>"
            },
            {
              step: "5",
              title: "Past Perfect (S + had + V3)",
              badge: "เกิดก่อนในอดีต",
              badgeColor: "purple",
              desc: "ใช้เมื่อมีเหตุการณ์อดีต 2 อย่างเกิดไม่พร้อมกัน <strong>เหตุการณ์ที่เกิดก่อนใช้ Past Perfect (had + V3)</strong> เหตุการณ์เกิดทีหลังใช้ Past Simple (V2)"
            }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // บทที่ 4 — เทคนิคการทำข้อสอบ Reading
    // ═══════════════════════════════════════════════════════════
    {
      navIcon: "📖",
      navLabel: "เทคนิค Reading",
      icon: "📖",
      title: "บทที่ 4 · เทคนิคการทำข้อสอบ Reading และคำศัพท์เชื่อมประโยค",
      description: "กลยุทธ์การจับใจความสั้น ประกาศทางราชการ อีเมล และการหา Main Idea โดยไม่ต้องแปลหมด",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "📖 5 วิธีแกะรอยประโยคข้อสอบ Reading Comprehension",
          content: "การทำข้อสอบการอ่านเพื่อไม่ให้เสียเวลาเยอะ มีขั้นตอนการวิเคราะห์เชิงรุกดังนี้:"
        },
        {
          type: "premium-flowchart",
          cards: [
            {
              title: "1. อ่านโจทย์ก่อนบทความ",
              icon: "🔍",
              status: "allowed",
              authority: "สแกนคีย์เวิร์ด",
              desc: "อ่านโจทย์เพื่อดูว่าถามหาสถิติ ตัวเลข ชื่อคน หรือใจความกว้างๆ จะช่วยลดขอบเขตการกวาดสายตาได้ดี"
            },
            {
              title: "2. ดูประโยคแรกและสุดท้าย",
              icon: "📰",
              status: "allowed",
              authority: "หา Main Idea",
              desc: "หัวข้อข่าว ประกาศ หรืออีเมล มักจะใส่ใจความสำคัญหรือวัตถุประสงค์หลักไว้ที่ <strong>'ย่อหน้าแรกสุด'</strong> หรือ <strong>'สรุปข้อความท้ายสุด'</strong>"
            },
            {
              title: "3. ระวังคำที่เป็น Absolute",
              icon: "⚠️",
              status: "warning",
              authority: "ชอยส์ลวงยอดฮิต",
              desc: "ตัวเลือกชอยส์ที่มีคำว่า <strong>always (เสมอ), never (ไม่มีวัน), only (เท่านั้น), all (ทั้งหมด)</strong> มักจะเป็นชอยส์ที่ลวงหรือผิดบริบทจริง"
            },
            {
              title: "4. การหาจุดคำสรรพนาม (Reference)",
              icon: "🔗",
              status: "restricted",
              authority: "หาคำก่อนหน้า",
              desc: "คำสรรพนาม เช่น <strong>it, they, this, these</strong> ชี้ไปหาคำนามที่อยู่ <strong>'ในประโยคก่อนหน้า'</strong> ให้ไล่สายตาถอยหลังขึ้นไป"
            }
          ]
        },
        {
          type: "highlight-box",
          color: "amber",
          title: "📌 คำเชื่อมประโยค (Conjunctions) ที่ออกสอบบ่อย",
          content: "• <strong>albeit (ถึงแม้ว่า):</strong> ใช้เชื่อมความขัดแย้งแบบกระชับ เช่น The project was successful, <strong>albeit</strong> expensive.<br>" +
            "• <strong>therefore / thus / consequently:</strong> ดังนั้น (บอกผลลัพธ์การกระทำ)<br>" +
            "• <strong>however / nevertheless / nonetheless:</strong> อย่างไรก็ตาม (แสดงความขัดแย้ง)<br>" +
            "• <strong>furthermore / moreover / in addition:</strong> ยิ่งกว่านั้น (บอกข้อมูลเพิ่มเติมปูความ)"
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // บทที่ 5 — จุดหลอกออกสอบบ่อย & ทริค 100 คะแนน
    // ═══════════════════════════════════════════════════════════
    {
      navIcon: "🔢",
      navLabel: "ทริค 100 คะแนน",
      icon: "🔢",
      title: "บทที่ 5 · สรุปคีย์ลัดสูตรจำ และ 10 จุดลวงในห้องสอบภาษาอังกฤษ",
      description: "สูตรจำไวยากรณ์ด้วยกลอนช่วยท่องจำ ตารางเปรียบเทียบคำ และสรุปคะแนนเต็ม",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "🔢 สถิติคีย์ตัวเลขสำคัญในกฎไวยากรณ์ภาษาอังกฤษ",
          content: "<strong>1/2</strong> — กริยา Neither...nor ผันตามประธานตัวหลัง (ตัวใกล้สุด)<br>" +
            "<strong>1</strong> — The number of + นามพหูพจน์ = <strong>กริยาเอกพจน์ (is/has)</strong><br>" +
            "<strong>∞</strong> — A number of + นามพหูพจน์ = <strong>กริยาพหูพจน์ (are/have)</strong><br>" +
            "<strong>Were</strong> — ใช้ใน If Clause Type 2 เสมอเมื่อประธานเป็น I / He / She (If I were you...)<br>" +
            "<strong>V2</strong> — Past Simple (จบไปแล้ว) | <strong>had + V3</strong> — Past Perfect (เกิดก่อนและเสร็จสิ้นก่อน V2)"
        },
        {
          type: "comparison-table",
          title: "⚖️ ตารางสรุปเปรียบเทียบคำศัพท์หลอกคู่ตรงข้าม (Words Commonly Confused)",
          headers: ["คำศัพท์", "หน้าที่คำ", "ความหมายจริง", "ข้อควรระวังในการทำข้อสอบ"],
          rows: [
            ["<strong>affect</strong>", "Verb (กริยา)", "ส่งผลกระทบ", "มีผลทำให้เกิดการเปลี่ยนแปลง (เช่น The rain affects our plans.)"],
            ["<strong>effect</strong>", "Noun (คำนาม)", "ผลลัพธ์ / ผลกระทบ", "ตัวผลลัพธ์ที่เกิดตามหลังมา (เช่น The layout has a good effect.)"],
            ["<strong>adapt</strong>", "Verb (กริยา)", "ปรับปรุง / ปรับตัว", "ปรับตัวเข้ากับสภาพใหม่ (เช่น Animals adapt to changes.)"],
            ["<strong>adopt</strong>", "Verb (กริยา)", "นำมาใช้ / รับเลี้ยง", "นำวิธี/เด็กมาเลี้ยงมาใช้ (เช่น They adopt a new policy.)"],
            ["<strong>discrete</strong>", "Adjective", "แยกตัวออกต่างหาก", "มีค่าเฉพาะตัวแยกชิ้นได้ (เช่น These are discrete categories.)"],
            ["<strong>discreet</strong>", "Adjective", "ระมัดระวัง / สุขุม", "ทำอย่างไม่ประเจิดประเจ้อ (เช่น Please keep it discreet.)"]
          ],
          examNote: "⚠️ <strong>ข้อสอบลวง:</strong> มักนำคำเหล่านี้มาสลับพาร์ทออฟสปีชกันในพาร์ทเติมคำในช่องว่าง (Vocabulary Fill-in) ตรวจสอบความหมายบริบทก่อนกากบาท"
        },
        {
          type: "key-summary",
          title: "🧠 สูตรลัดช่วยท่องจำพิชิตข้อสอบพาร์ทภาษาอังกฤษ",
          content: "• <strong>สูตรลัดบอร์ดประธาน:</strong> \"The number of... ให้เลือก <strong>is</strong> | A number of... ให้กาวิ่งไปหา <strong>are</strong>\"<br>" +
            "• <strong>สูตรลับ Do you mind?:</strong> \"ถ้าผู้พูดขอใจกว้าง ให้ตอบ <strong>No / Not at all</strong> แปลว่าทำได้เลย ถ้าตอบ Yes คือห้ามทำนะจ๊ะ\"<br>" +
            "• <strong>สูตรลัด Tenses อดีตซ้อน:</strong> \"เมื่อเกิดอดีตซ้อนกัน 2 ครา: ตัวเกิดก่อนเสร็จก่อนใช้ <strong>had V3</strong> | ตัวเกิดหลังแทรกเข้ามาใช้ <strong>V2</strong>\""
        }
      ]
    }
  ],

  vocabulary: [
    {
      groupTitle: "📝 คำศัพท์ออกสอบบ่อย — Grammar & Reading",
      terms: [
        { term: "mandatory", eng: "mandatory (Adj.)", def: "บังคับตามกฎหมายหรือข้อบังคับ (เช่น wearing seatbelts is mandatory)" },
        { term: "optional", eng: "optional (Adj.)", def: "เป็นทางเลือก สามารถเลือกได้ ไม่ใช่ข้อบังคับ (เช่น extra training is optional)" },
        { term: "albeit", eng: "albeit (Conj.)", def: "ถึงแม้ว่า (มักใช้ขัดแย้งประโยคสั้น เช่น He accepted the job, albeit with reservations.)" },
        { term: "alternative", eng: "alternative (N./Adj.)", def: "ทางเลือกที่เป็นไปได้ หรือสิ่งทดแทน (เช่น green energy is a good alternative)" }
      ]
    },
    {
      groupTitle: "🔤 คำศัพท์คู่ตรงข้าม — Words Confused",
      terms: [
        { term: "substitute", eng: "substitute (N./V.)", def: "สิ่งทดแทน ใช้แทนที่ (เช่น plastic can be used as a substitute for wood)" },
        { term: "latter", eng: "latter (N./Adj.)", def: "สิ่งที่เอ่ยถึงทีหลังหรือลำดับสุดท้ายของกลุ่ม (ตรงข้ามกับ former)" },
        { term: "former", eng: "former (N./Adj.)", def: "สิ่งที่เอ่ยถึงคนแรกหรือลำดับแรกของกลุ่ม (ตรงข้ามกับ latter)" },
        { term: "discreetly", eng: "discreetly (Adv.)", def: "กระทำอย่างระมัดระวัง สุขุมรอบคอบ เพื่อป้องกันความวุ่นวาย" }
      ]
    },
    {
      groupTitle: "💡 คำกริยาพบบ่อย",
      terms: [
        { term: "affect", eng: "affect (V.)", def: "ส่งผลกระทบต่อสิ่งอื่น (เช่น Smoking affects health.)" },
        { term: "effect", eng: "effect (N.)", def: "ตัวผลลัพธ์หรือประสิทธิผลที่ตามมา (เช่น The new law had a huge effect.)" },
        { term: "adapt", eng: "adapt (V.)", def: "ปรับตัวให้เข้ากับสภาวะใหม่ (เช่น adapt to change)" },
        { term: "adopt", eng: "adopt (V.)", def: "รับสิ่งใหม่เข้ามาใช้งานหรือรับเด็กมาอุปการะเลี้ยงดู (เช่น adopt a new policy)" }
      ]
    }
  ],

  quizFile: "quiz.html"
};
