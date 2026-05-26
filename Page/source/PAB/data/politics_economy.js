const CONTENT = {
  topic: "politics_economy",
  title: "ความรู้ทั่วไปเรื่องการเมือง เศรษฐกิจ และสังคม",
  titleShort: "การเมือง-เศรษฐกิจ",
  emoji: "🏛️",
  year: "2566",
  stats: {
    chapters: 0,
    amendments: 0,
    vocabGroups: 0,
    quizCount: 50,
    sectionNumber: "2",
    sectionLabel: "ส่วนที่ 2"
  },
  subtitle: "เตรียมสอบ ก.พ. / ภาค ก. รวมเนื้อหา การเมือง เศรษฐกิจ สังคม ระดับชาติ",
  chapters: [
    {
      num: 1,
      title: "ยุทธศาสตร์ชาติ 20 ปี (พ.ศ. 2561-2580)",
      emoji: "📋",
      body: [
        { type: "p", text: "ยุทธศาสตร์ชาติว่าด้วยการพัฒนาประเทศไทย 20 ปี มีเป้าหมายหลักเพื่อให้ประเทศ<b>มั่นคง มั่งคั่ง ยั่งยืน</b> เป็นประเทศพัฒนาแล้ว" },
        { type: "heading", text: "แนวคิดสำคัญที่ออกสอบบ่อย" },
        { type: "list", items: [
          "<strong>BCG Model</strong> — B=Bio, C=Circular, G=Green",
          "<strong>Soft Power</strong> — เผยแพร่วัฒนธรรม อาหาร ภาพยนตร์ ความคิดสร้างสรรค์",
          "<strong>Digital Wallet 10,000 บาท</strong> — กระตุ้นเศรษฐกิจระดับพื้นที่",
          "<strong>Net Zero Emission</strong> — ลดการปล่อยก๊าซเรือนกระจกสุทธิเป็นศูนย์"
        ]}
      ]
    },
    {
      num: 2,
      title: "เศรษฐกิจพอเพียง & SDGs",
      emoji: "💰",
      body: [
        { type: "heading", text: "เศรษฐกิจพอเพียง — หลัก 3 ห่วง 2 เงื่อนไข" },
        { type: "list", items: [
          "<strong>พอประมาณ</strong> — ไม่สุ่มเสี่ยง",
          "<strong>มีเหตุผล</strong> — คำนึงถึงเหตุผล",
          "<strong>มีภูมิคุ้มกันที่ดี</strong> — ในสภาวะที่เปลี่ยนแปลง"
        ]},
        { type: "heading", text: "SDGs — เป้าหมายการพัฒนาที่ยั่งยืน" },
        { type: "list", items: [
          "17 เป้าหมาย (Goals)",
          "มุ่งแก้ปัญหาความยากจน ความหิวโหย สิ่งแวดล้อม",
          "ส่งเสริมสันติธรรม ความเท่าเทียม ความเป็นหุ้นส่วน"
        ]}
      ]
    },
    {
      num: 3,
      title: "สังคมผู้สูงอายุ & ภาวะเศรษฐกิจ",
      emoji: "👴",
      body: [
        { type: "heading", text: "สังคมสูงวัย (Aging Society)" },
        { type: "list", items: [
          "<strong>Aging Society</strong> — สังคมเริ่มสูงวัย (65+ > 14%)",
          "<strong>Aged Society</strong> — สังคมสูงวัยอย่างสมบูรณ์ (65+ > 20%)",
          "<strong>Super-Aged Society</strong> — สูงวัยระดับสุดยอด (65+ > 28%)"
        ]},
        { type: "heading", text: "ภาวะเงินเฟ้อ (Inflation)" },
        { type: "list", items: [
          "<strong>เงินเฟ้อ</strong> — ราคาสินค้าสูงขึ้นอย่างต่อเนื่อง ทำให้อำนาจซื้อลดลง",
          "<strong>เงินฝืด (Deflation)</strong> — ราคาสินค้าลดลงอย่างต่อเนื่อง",
          "<strong>GDP</strong> — มูลค่าสินค้าและบริการขั้นสุดท้ายในประเทศ"
        ]}
      ]
    },
    {
      num: 4,
      title: "องค์กร & หน่วยงานสำคัญ",
      emoji: "🏢",
      body: [
        { type: "heading", text: "องค์กรที่ควรรู้" },
        { type: "list", items: [
          "<strong>ศาลรัฐธรรมนูญ</strong> — วินิจฉัยความชอบด้วยรัฐธรรมนูญของกฎหมาย",
          "<strong>CPI (Corruption Perceptions Index)</strong> — จัดทำโดย Transparency International",
          "<strong>APEC</strong> — เวทีความร่วมมือเศรษฐกิจเอเชีย-แปซิฟิก",
          "<strong>กสทช.</strong> — การสื่อสารและดิจิทัล"
        ]},
        { type: "heading", text: "องค์กรปกครองส่วนท้องถิ่นรูปแบบพิเศษ" },
        { type: "list", items: [
          "<strong>กรุงเทพมหานคร (กทม.)</strong> — เทศบาลพิเศษ",
          "<strong>เมืองพัทยา</strong> — เทศบาลนคร",
          "นครหาดใหญ่ — เทศบาลนคร (ตัวอย่าง อปท. รูปแบบพิเศษอื่นๆ)"
        ]}
      ]
    }
  ],

  outline: [
    { num: 1, title: "ยุทธศาสตร์ชาติ & นโยบายสำคัญ", emoji: "📋" },
    { num: 2, title: "เศรษฐกิจพอเพียง & SDGs", emoji: "💰" },
    { num: 3, title: "สังคมสูงวัย & ภาวะเศรษฐกิจ", emoji: "👴" },
    { num: 4, title: "องค์กร & หน่วยงานสำคัญ", emoji: "🏢" }
  ],

  glossary: [
    { icon:'🏛️', term:'BCG Model', thai:'Bio-Circular-Green', def:'แนวทางเศรษฐกิจชีวภาพ หมุนเวียน สีเขียว', tag:'เศรษฐกิจ' },
    { icon:'🌐', term:'Soft Power', thai:'อำนาจนุ่ม', def:'เผยแพร่วัฒนธรรม อาหาร ภาพยนตร์ สร้างมูลค่าประเทศ', tag:'นโยบาย' },
    { icon:'📊', term:'CPI', thai:'Corruption Perceptions Index', def:'ดัชนีชี้วัดภาพลักษณ์คอร์รัปชัน จัดทำโดย Transparency International', tag:'องค์กร' },
    { icon:'🌱', term:'Net Zero', thai:'การปล่อยก๊าซสุทธิเป็นศูนย์', def:'ลดการปล่อยก๊าซเรือนกระจกให้เหลือศูนย์', tag:'สิ่งแวดล้อม' },
    { icon:'💰', term:'Digital Wallet', thai:'กระเป๋าเงินดิจิทัล', def:'นโยบายกระตุ้นเศรษฐกิจ 10000 บาท ต่อคน', tag:'นโยบาย' },
    { icon:'👴', term:'Aging Society', thai:'สังคมสูงวัย', def:'ประชากร 65+ มากกว่า 14% ของประชากรทั้งหมด', tag:'สังคม' },
    { icon:'📈', term:'Inflation', thai:'เงินเฟ้อ', def:'ราคาสินค้าสูงขึ้นอย่างต่อเนื่อง ลดอำนาจซื้อ', tag:'เศรษฐกิจ' },
    { icon:'🎯', term:'SDGs', thai:'Sustainable Development Goals', def:'เป้าหมายการพัฒนาที่ยั่งยืน 17 เป้าหมายของ UN', tag:'เศรษฐกิจ' }
  ],

  tips: [
    "<strong>ยุทธศาสตร์ชาติ 20 ปี</strong> → เป้าหมาย = มั่นคง มั่งคั่ง ยั่งยืน เป็นประเทศพัฒนาแล้ว",
    "<strong>BCG</strong> → B=Bio, C=Circular, G=Green",
    "<strong>Soft Power</strong> → เผยแพร่วัฒนธรรม อาหาร ภาพยนตร์",
    "<strong>Aging Society</strong> → 65+ > 14% | <strong>Aged</strong> → 20% | <strong>Super-Aged</strong> → 28%",
    "<strong>เงินเฟ้อ</strong> = ราคาสูงขึ้น | <strong>เงินฝืด</strong> = ราคาลดลง",
    "<strong>SDG</strong> มี <strong>17 เป้าหมาย</strong>",
    "<strong>CPI</strong> จัดทำโดย <strong>Transparency International</strong>",
    "<strong>ศาลรัฐธรรมนูญ</strong> = วินิจฉัยความชอบด้วย รธน. ของกฎหมาย"
  ],

  quizFile: "Quiz_politics_economy.html"
};