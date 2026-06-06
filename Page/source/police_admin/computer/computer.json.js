window.COMPUTER_DATA =
{
  "id": "computer",
  "title": "คอมพิวเตอร์และเทคโนโลยีสารสนเทศเพื่อสำนักงาน",
  "titleShort": "คอมพิวเตอร์และ IT",
  "emoji": "💻",
  "subtitle": "ความรู้พื้นฐานคอมพิวเตอร์ เครือข่าย โปรแกรมสำนักงาน และความปลอดภัยทางไซเบอร์",
  "badgeLabel": "สำหรับเตรียมสอบนายสิบตำรวจ สายอำนวยการ",
  "stats": {
    "chapters": 8,
    "parts": 47,
    "vocab": 12,
    "quiz": 200
  },
  "heroStats": [
    {"value": "8", "label": "บทเรียน"},
    {"value": "47", "label": "หัวข้อ"},
    {"value": "200", "label": "ข้อสอบ"},
    {"value": "ฟรี", "label": "ตลอดเว็บ"}
  ],
  "knowledgeSections": [
    {
      "navIcon": "💡",
      "navLabel": "พื้นฐาน IT",
      "icon": "💡",
      "title": "ส่วนที่ 1 · ความรู้เบื้องต้นเกี่ยวกับเทคโนโลยีสารสนเทศ",
      "description": "องค์ประกอบของระบบ IT และโครงสร้างข้อมูล",
      "blocks": [
        {
          "type": "highlight-box",
          "color": "amber",
          "title": "💡 เทคโนโลยีสารสนเทศ (IT) คืออะไร?",
          "content": "<strong>เทคโนโลยีสารสนเทศ (Information Technology: IT)</strong> คือการประยุกต์ใช้<strong>คอมพิวเตอร์</strong> และ<strong>อุปกรณ์สื่อสาร</strong> ในการ<strong>จัดเก็บ ประมวลผล และเผยแพร่</strong>ข้อมูล/สารสนเทศ เพื่อเพิ่มประสิทธิภาพในการทำงาน"
        },
        {
          "type": "cards",
          "color": "blue",
          "cards": [
            {"icon": "🖥️", "title": "ฮาร์ดแวร์ (Hardware)", "content": "ชิ้นส่วนที่จับต้องได้ เช่น CPU, RAM, จอภาพ, คีย์บอร์ด, เมาส์", "color": "blue"},
            {"icon": "📦", "title": "ซอฟต์แวร์ (Software)", "content": "โปรแกรมที่สั่งงานฮาร์ดแวร์ เช่น Windows, macOS, Microsoft Office, Photoshop", "color": "purple"},
            {"icon": "👥", "title": "บุคลากร (Peopleware)", "content": "ผู้ใช้งาน ผู้ดูแลระบบ (Admin) และผู้พัฒนา (Developer)", "color": "green"},
            {"icon": "📊", "title": "ข้อมูล (Data/Information)", "content": "ข้อมูลดิบ → สารสนเทศ (เมื่อประมวลผล) → ความรู้ (เมื่อวิเคราะห์)", "color": "amber"}
          ]
        },
        {
          "type": "highlight-box",
          "color": "navy",
          "title": "📊 โครงสร้างข้อมูล (Data Structure) — จากเล็กไปใหญ่",
          "content": "<strong>Bit</strong> (0/1) → <strong>Byte</strong> (8 Bit) → <strong>Field</strong> (เขตข้อมูล) → <strong>Record</strong> (ระเบียน) → <strong>File</strong> (แฟ้ม) → <strong>Database</strong> (ฐานข้อมูล)<br><br><strong>ตัวอย่าง:</strong> นักเรียนคนหนึ่ง → <strong>Bit</strong> (เพศ) → <strong>Byte</strong> (รวม 8 Bit) → <strong>Field</strong> (ชื่อ, อายุ) → <strong>Record</strong> (ข้อมูลนักเรียน 1 คน) → <strong>File</strong> (ตารางนักเรียน) → <strong>Database</strong> (ระบบทะเบียนนักเรียน)"
        },
        {
          "type": "bullet-list",
          "title": "📏 หน่วยวัดข้อมูล",
          "items": [
            "<strong>1 Bit</strong> = 0 หรือ 1 (เล็กที่สุด)",
            "<strong>1 Byte</strong> = 8 Bit (เก็บตัวอักษร 1 ตัว)",
            "<strong>1 KB</strong> = 1,024 Bytes",
            "<strong>1 MB</strong> = 1,024 KB",
            "<strong>1 GB</strong> = 1,024 MB (ภาพถ่าย ~500 รูป)",
            "<strong>1 TB</strong> = 1,024 GB (ฮาร์ดดิสก์ทั่วไป)",
            "<strong>1 PB</strong> = 1,024 TB (ระดับ Data Center)"
          ]
        },
        {
          "type": "highlight-box",
          "color": "teal",
          "title": "💡 จำง่าย",
          "content": "ระบบ IT ที่ดีต้องมีทั้ง 4 องค์ประกอบ: <strong>ฮาร์ดแวร์ + ซอฟต์แวร์ + บุคลากร + ข้อมูล</strong> ขาดอย่างใดอย่างหนึ่ง ระบบจะไม่สมบูรณ์"
        }
      ]
    },
    {
      "navIcon": "🖥️",
      "navLabel": "ฮาร์ดแวร์",
      "icon": "🖥️",
      "title": "ส่วนที่ 2 · ระบบการทำงานของคอมพิวเตอร์ (ฮาร์ดแวร์)",
      "description": "หน่วยประมวลผล หน่วยความจำ และอุปกรณ์ Input/Output",
      "blocks": [
        {
          "type": "highlight-box",
          "color": "navy",
          "title": "🖥️ หน่วยประมวลผลกลาง (CPU = Central Processing Unit)",
          "content": "เป็น<strong>สมองของคอมพิวเตอร์</strong> ประกอบด้วย 2 ส่วนหลัก:<br>• <strong>ALU</strong> (Arithmetic Logic Unit) — คำนวณทางคณิตศาสตร์และตรรกะ<br>• <strong>Control Unit</strong> — ควบคุมและประสานงานการทำงานของทุกส่วน<br><br><strong>ความเร็ว:</strong> วัดเป็น <strong>GHz</strong> (กิกะเฮิรตซ์) เช่น 3.5 GHz = 3,500,000,000 รอบ/วินาที"
        },
        {
          "type": "cards",
          "color": "blue",
          "cards": [
            {"icon": "🔢", "title": "32-bit vs 64-bit", "content": "CPU 64-bit ประมวลผล 64 บิต/รอบ รองรับ RAM มากกว่า 4 GB เร็วกว่า", "color": "blue"},
            {"icon": "⚙️", "title": "Multi-core", "content": "มีหลาย Core ในชิปเดียว เช่น Quad-core = 4 แกน ทำงานพร้อมกันได้", "color": "purple"},
            {"icon": "🎮", "title": "GPU", "content": "Graphics Processing Unit ประมวลผลภาพ/กราฟิกโดยเฉพาะ เช่น การ์ดจอ NVIDIA, AMD", "color": "green"}
          ]
        },
        {
          "type": "highlight-box",
          "color": "rose",
          "title": "💾 หน่วยความจำ (Memory) — RAM vs ROM",
          "content": "<strong>RAM (Random Access Memory)</strong><br>• หน่วยความจำ<strong>ชั่วคราว (Volatile)</strong><br>• ข้อมูล<strong>หายเมื่อปิดเครื่องหรือไฟดับ</strong><br>• ใช้เก็บโปรแกรมที่กำลังทำงาน<br>• ยิ่งเยอะยิ่งเร็ว (8 GB, 16 GB, 32 GB)<br><br><strong>ROM (Read Only Memory)</strong><br>• หน่วยความจำ<strong>ถาวร (Non-volatile)</strong><br>• เก็บข้อมูลได้แม้ปิดเครื่อง<br>• เก็บคำสั่ง <strong>BIOS/UEFI</strong> สำหรับบูตระบบ"
        },
        {
          "type": "bullet-list",
          "title": "🔧 ประเภทหน่วยเก็บข้อมูล (Storage)",
          "items": [
            "<strong>HDD (Hard Disk Drive)</strong> — ใช้จานหมุน เก็บข้อมูลเยอะ ราคาถูก แต่ช้ากว่า",
            "<strong>SSD (Solid State Drive)</strong> — ใช้ชิป Flash เร็วกว่า HDD 3-5 เท่า เงียบ ไม่มีชิ้นส่วนเคลื่อนไหว",
            "<strong>NVMe SSD</strong> — เร็วที่สุด ใช้กับพอร์ต M.2",
            "<strong>External HDD/SSD</strong> — พกพาได้ ต่อผ่าน USB",
            "<strong>USB Flash Drive</strong> — แฟลชไดรฟ์ ขนาดเล็ก",
            "<strong>Cloud Storage</strong> — เก็บบนอินเทอร์เน็ต เช่น Google Drive, OneDrive"
          ]
        },
        {
          "type": "highlight-box",
          "color": "purple",
          "title": "⌨️ อุปกรณ์ Input/Output — แยกให้ออก",
          "content": "<strong>Input (รับข้อมูลเข้า):</strong> เมาส์, คีย์บอร์ด, สแกนเนอร์, ไมโครโฟน, Webcam, Barcode Scanner<br><br><strong>Output (แสดงผล):</strong> จอภาพ, ลำโพง, เครื่องพิมพ์, หูฟัง<br><br><strong>Input/Output (ทำได้ทั้งสองอย่าง):</strong> Touchscreen, หน้าจอสัมผัส, แท็บเล็ต"
        },
        {
          "type": "cards",
          "color": "amber",
          "cards": [
            {"icon": "🔥", "title": "Thermal Printer", "content": "ใช้ความร้อนพิมพ์บนกระดาษพิเศษ นิยมกับใบเสร็จ/ใบกำกับภาษี", "color": "amber"},
            {"icon": "🧮", "title": "Dot Matrix", "content": "ใช้หัวเข็มตีผ่านผ้าหมึกคาร์บอน เหมาะพิมพ์สลิปเงินเดือน/ฟอร์มต่อเนื่อง", "color": "rose"},
            {"icon": "🖨️", "title": "Inkjet", "content": "พิมพ์ภาพสี/รูปถ่าย ใช้หมึกเหลว คุณภาพดี แต่ช้า", "color": "blue"},
            {"icon": "📄", "title": "Laser Printer", "content": "ใช้หมึกผง (Toner) เร็ว คุณภาพสูง เหมาะสำนักงาน", "color": "green"}
          ]
        }
      ]
    },
    {
      "navIcon": "🌐",
      "navLabel": "เครือข่าย",
      "icon": "🌐",
      "title": "ส่วนที่ 3 · เครือข่ายคอมพิวเตอร์และอินเทอร์เน็ต",
      "description": "ประเภทเครือข่าย สายสัญญาณ และโปรโตคอล",
      "blocks": [
        {
          "type": "highlight-box",
          "color": "blue",
          "title": "🌐 ประเภทเครือข่ายตามขนาดพื้นที่",
          "content": "<strong>PAN (Personal Area Network)</strong> — เครือข่ายส่วนบุคคล ระยะไม่เกิน 10 เมตร เช่น Bluetooth, AirDrop<br><br><strong>LAN (Local Area Network)</strong> — เครือข่ายภายในอาคาร/สำนักงาน เช่น Wi-Fi บริษัท, ห้องแล็บ<br><br><strong>MAN (Metropolitan Area Network)</strong> — เครือข่ายระดับเมือง/จังหวัด<br><br><strong>WAN (Wide Area Network)</strong> — เครือข่ายข้ามเมือง/ประเทศ เช่น <strong>อินเทอร์เน็ต</strong>"
        },
        {
          "type": "cards",
          "color": "blue",
          "cards": [
            {"icon": "🔵", "title": "Twisted Pair (คู่บิดเกลียว)", "content": "สาย LAN ทั่วไป ราคาถูก เช่น Cat5e, Cat6", "color": "blue"},
            {"icon": "📺", "title": "Coaxial (โคแอกเชียล)", "content": "นิยมใช้กับเคเบิลทีวี โทรทัศน์", "color": "purple"},
            {"icon": "💡", "title": "Fiber Optic (ใยแก้วนำแสง)", "content": "เร็วที่สุด ป้องกันรบกวนดีที่สุด แพงที่สุด ใช้ใน Backbone", "color": "amber"}
          ]
        },
        {
          "type": "highlight-box",
          "color": "amber",
          "title": "📡 ทิศทางการสื่อสาร",
          "content": "<strong>Simplex</strong> — ส่งได้ทางเดียว เช่น โทรทัศน์, วิทยุกระจายเสียง, เคเบิลทีวี<br><br><strong>Half-duplex</strong> — สลับกันส่งทีละฝ่าย เช่น <strong>วิทยุสื่อสาร (Walkie-talkie)</strong> ต้องกดปุ่ม PTT<br><br><strong>Full-duplex</strong> — ส่งพร้อมกันได้ทั้งสองทาง เช่น <strong>โทรศัพท์</strong>, แชทออนไลน์"
        },
        {
          "type": "highlight-box",
          "color": "green",
          "title": "🛰️ รูปแบบเครือข่าย",
          "content": "<strong>Peer-to-Peer (P2P)</strong><br>• ทุกเครื่อง<strong>เท่าเทียมกัน</strong> เป็นได้ทั้ง Client และ Server<br>• เหมาะกับเครือข่ายเล็ก ๆ เช่น BitTorrent, แชร์ไฟล์ในบ้าน<br><br><strong>Client-Server</strong><br>• มี <strong>Server กลาง</strong> ให้บริการ ส่วน Client ร้องขอ<br>• เหมาะกับองค์กร เช่น เว็บไซต์, Email Server, Database"
        },
        {
          "type": "bullet-list",
          "title": "🔌 อุปกรณ์เครือข่ายที่ต้องรู้จัก",
          "items": [
            "<strong>Hub</strong> — ส่ง packet ไปทุก port (โง่ ไม่เลือกปลายทาง) — เลิกใช้แล้ว",
            "<strong>Switch</strong> — ส่ง packet ไปยัง port ปลายทางจริง ใช้ MAC Address",
            "<strong>Router</strong> — เชื่อมต่อเครือข่ายหลายเครือข่าย + กำหนดเส้นทาง",
            "<strong>Modem</strong> — แปลงสัญญาณดิจิทัล/อนาล็อก (เช่น DSL, Fiber)",
            "<strong>Access Point (AP)</strong> — กระจายสัญญาณ Wi-Fi"
          ]
        },
        {
          "type": "highlight-box",
          "color": "purple",
          "title": "🌐 Internet & Web Protocol",
          "content": "<strong>HTTP (Port 80)</strong> — ท่องเว็บ ไม่เข้ารหัส<br><strong>HTTPS (Port 443)</strong> — ท่องเว็บแบบเข้ารหัส SSL/TLS ปลอดภัย<br><strong>DNS</strong> — แปลงชื่อโดเมน (google.com) เป็น IP (142.250.x.x)<br><strong>DHCP</strong> — แจก IP Address ให้เครื่องในเครือข่ายอัตโนมัติ<br><strong>FTP (Port 20/21)</strong> — ถ่ายโอนไฟล์<br><strong>SSH (Port 22)</strong> — เข้าถึง Server ระยะไกลอย่างปลอดภัย"
        }
      ]
    },
    {
      "navIcon": "📊",
      "navLabel": "เว็บ/E-commerce",
      "icon": "📊",
      "title": "ส่วนที่ 4 · อินเทอร์เน็ต เว็บไซต์ และ E-commerce",
      "description": "โดเมน ประเภทเว็บ และธุรกิจออนไลน์",
      "blocks": [
        {
          "type": "highlight-box",
          "color": "blue",
          "title": "🌐 ประเภทโดเมน (Domain Name)",
          "content": "<strong>.com / .co.th</strong> — องค์กรพาณิชย์/ธุรกิจ (Commercial)<br><strong>.go.th / .gov</strong> — หน่วยงาน<strong>รัฐบาล</strong> (Government)<br><strong>.ac.th / .edu</strong> — สถานศึกษา/มหาวิทยาลัย (Academic)<br><strong>.mil</strong> — ทหาร (Military)<br><strong>.org</strong> — องค์กรไม่แสวงกำไร<br><strong>.net</strong> — ผู้ให้บริการเครือข่าย"
        },
        {
          "type": "highlight-box",
          "color": "amber",
          "title": "🛒 E-commerce — 4 ประเภทหลัก",
          "content": "<strong>B2B (Business to Business)</strong> — ธุรกิจกับธุรกิจ เช่น Alibaba, การสั่งซื้อวัตถุดิบ<br><br><strong>B2C (Business to Consumer)</strong> — ธุรกิจกับผู้บริโภค เช่น Shopee, Lazada, Amazon<br><br><strong>C2C (Consumer to Consumer)</strong> — ผู้บริโภคขายให้ผู้บริโภค เช่น Facebook Marketplace, ขายของมือสอง<br><br><strong>C2G / G2C (Consumer/Government)</strong> — ประชาชน-รัฐบาล เช่น ยื่นภาษีออนไลน์, ตรวจสอบสถานะคดี"
        },
        {
          "type": "cards",
          "color": "blue",
          "cards": [
            {"icon": "🌍", "title": "Web 1.0", "content": "เว็บแบบอ่านอย่างเดียว ไม่มีปฏิสัมพันธ์ (ยุค 1990s)", "color": "blue"},
            {"icon": "👥", "title": "Web 2.0", "content": "ผู้ใช้สร้างเนื้อหาเอง เช่น Facebook, YouTube, Wikipedia", "color": "purple"},
            {"icon": "🔗", "title": "Web 3.0", "content": "Decentralized, Blockchain, AI, Semantic Web", "color": "green"},
            {"icon": "📱", "title": "Responsive Design", "content": "เว็บปรับขนาดตามอุปกรณ์อัตโนมัติ (มือถือ แท็บเล็ต PC)", "color": "amber"}
          ]
        },
        {
          "type": "highlight-box",
          "color": "rose",
          "title": "🎬 OTT (Over The Top)",
          "content": "การให้บริการ<strong>เนื้อหาภาพ เสียง วิดีโอ</strong>ผ่านอินเทอร์เน็ต โดยไม่ผ่าน ISP โดยตรง<br><br><strong>ตัวอย่าง:</strong> Netflix, Disney+, HBO Go, Spotify, YouTube Premium, Apple TV+<br><br><strong>Streaming</strong> = ส่งข้อมูลแบบ real-time ไม่ต้องดาวน์โหลดทั้งไฟล์ก่อน"
        }
      ]
    },
    {
      "navIcon": "📝",
      "navLabel": "Office",
      "icon": "📝",
      "title": "ส่วนที่ 5 · โปรแกรมสำนักงาน (Microsoft Office)",
      "description": "Word, Excel, PowerPoint และนามสกุลไฟล์",
      "blocks": [
        {
          "type": "highlight-box",
          "color": "blue",
          "title": "📝 Microsoft Word — คำสั่งที่ใช้บ่อย",
          "content": "<strong>แถบ Layout</strong> — ตั้งค่าหน้ากระดาษ ระยะขอบ การวางแนว คอลัมน์<br><br><strong>แถบ View</strong> — จัดการมุมมอง เช่น Print Layout, Web Layout, ซ่อน/แสดง<strong>ไม้บรรทัด (Ruler)</strong><br><br><strong>Justify (Thai Distributed)</strong> — จัดข้อความ<strong>เต็มความกว้าง</strong>บรรทัด เว้นระยะคำเท่ากัน (ใช้ในเอกสารราชการ)<br><br><strong>Spelling & Grammar</strong> — ตรวจคำสะกดและไวยากรณ์"
        },
        {
          "type": "highlight-box",
          "color": "amber",
          "title": "📊 Microsoft PowerPoint — มาสเตอร์",
          "content": "<strong>Slide Master</strong><br>• สร้าง<strong>สไลด์ต้นแบบ</strong> เพื่อให้สไลด์อื่นใช้รูปแบบเดียวกัน<br>• กำหนด Font, สี, Layout ไว้ที่เดียว เปลี่ยนที่เดียวได้ทั้งหมด<br><br><strong>Handout Master</strong><br>• ออกแบบหน้าสำหรับ<strong>พิมพ์ handout</strong> เช่น 3 สไลด์/หน้า หรือ 6 สไลด์/หน้า<br>• ใช้แจกเอกสารประกอบการบรรยาย"
        },
        {
          "type": "bullet-list",
          "title": "💼 Microsoft Excel — สูตรที่ต้องรู้",
          "items": [
            "<strong>=SUM(A1:A5)</strong> — หาผลรวม",
            "<strong>=AVERAGE(A1:A5)</strong> — หาค่าเฉลี่ย",
            "<strong>=COUNT(A1:A5)</strong> — นับเซลล์ที่เป็นตัวเลข",
            "<strong>=COUNTA(A1:A5)</strong> — นับเซลล์ที่ไม่ว่าง",
            "<strong>=MAX/MIN(A1:A5)</strong> — หาค่าสูงสุด/ต่ำสุด",
            "<strong>=COUNTIF(range, criteria)</strong> — นับตามเงื่อนไข เช่น COUNTIF(A1:A10, '>50')",
            "<strong>=VLOOKUP(value, table, col, FALSE)</strong> — ค้นหาค่าในตารางแนวตั้ง",
            "<strong>=IF(cond, true, false)</strong> — ตรวจเงื่อนไข",
            "<strong>=CONCATENATE(a, b)</strong> — รวมข้อความ",
            "<strong>Pivot Table</strong> — สรุปข้อมูลแบบ Dynamic"
          ]
        },
        {
          "type": "highlight-box",
          "color": "purple",
          "title": "📁 นามสกุลไฟล์ที่ต้องรู้",
          "content": "<strong>เอกสาร:</strong> .docx (Word), .xlsx (Excel), .pptx (PowerPoint), .pdf (Portable Document)<br><br><strong>ภาพ:</strong><br>• <strong>.JPG/.JPEG</strong> — ภาพถ่าย ขนาดเล็ก ใช้บนเว็บ<br>• <strong>.PNG</strong> — รองรับ<strong>พื้นหลังโปร่งใส</strong> เหมาะทำโลโก้<br>• <strong>.SVG</strong> — ภาพ<strong>Vector</strong> ขยายไม่แตก เหมาะทำบิลบอร์ด/โลโก้ใหญ่<br>• <strong>.GIF</strong> — ภาพเคลื่อนไหว/อนิเมชันสั้น<br>• <strong>.RAW</strong> — ภาพดิบจากกล้อง เก็บข้อมูลครบ"
        }
      ]
    },
    {
      "navIcon": "📱",
      "navLabel": "Social Media",
      "icon": "📱",
      "title": "ส่วนที่ 6 · Social Media และการสื่อสารออนไลน์",
      "description": "แพลตฟอร์มยอดนิยมและการใช้งาน",
      "blocks": [
        {
          "type": "cards",
          "color": "blue",
          "cards": [
            {"icon": "👍", "title": "Facebook", "content": "เครือข่ายสังคมทั่วไป โพสต์ รูป วิดีโอ แชท กลุ่ม", "color": "blue"},
            {"icon": "📷", "title": "Instagram", "content": "เน้นแชร์รูปภาพ/วิดีโอสั้น (Reels) Stories", "color": "purple"},
            {"icon": "🐦", "title": "Twitter / X", "content": "โพสต์ข้อความสั้น (Tweet) ≤ 280 ตัวอักษร", "color": "blue"},
            {"icon": "▶️", "title": "YouTube", "content": "แชร์วิดีโอ ดูสตรีมมิ่ง หา How-to", "color": "rose"},
            {"icon": "💬", "title": "Line", "content": "แชทยอดนิยมในไทย สติกเกอร์ LINE Pay", "color": "green"},
            {"icon": "💼", "title": "LinkedIn", "content": "เครือข่ายอาชีพ หางาน สร้างโปรไฟล์", "color": "amber"}
          ]
        },
        {
          "type": "highlight-box",
          "color": "teal",
          "title": "💡 Cloud Computing — 3 บริการหลัก",
          "content": "<strong>IaaS (Infrastructure as a Service)</strong><br>• เช่า VM, Storage เช่น AWS EC2, DigitalOcean, Azure VM<br><br><strong>PaaS (Platform as a Service)</strong><br>• แพลตฟอร์มพัฒนาแอป เช่น Heroku, Google App Engine, Vercel<br><br><strong>SaaS (Software as a Service)</strong><br>• ซอฟต์แวร์ใช้ผ่านเว็บ เช่น Google Workspace, Microsoft 365, Dropbox"
        }
      ]
    },
    {
      "navIcon": "🔒",
      "navLabel": "Cybersecurity",
      "icon": "🔒",
      "title": "ส่วนที่ 7 · ความปลอดภัยทางไซเบอร์ (Cybersecurity)",
      "description": "มัลแวร์ ภัยคุกคาม และการป้องกัน",
      "blocks": [
        {
          "type": "highlight-box",
          "color": "rose",
          "title": "⚠️ ประเภทมัลแวร์ (Malware) — ต้องจำให้ได้",
          "content": "<strong>1. Virus (ไวรัส)</strong> — ต้องอาศัย host (ไฟล์/โปรแกรม) ไม่แพร่เอง<br><br><strong>2. Worm (เวิร์ม)</strong> — แพร่กระจาย<strong>ผ่านเครือข่าย</strong>ได้เอง ไม่ต้อง host<br><br><strong>3. Trojan (ม้าโทรจัน)</strong> — แฝงตัวในโปรแกรมที่ดูปกติ เมื่อรันจะทำอันตราย<br><br><strong>4. Ransomware</strong> — <strong>เข้ารหัสไฟล์</strong>แล้วเรียกค่าไถ่ (เช่น Bitcoin) เพื่อปลดล็อค เช่น WannaCry<br><br><strong>5. Phishing</strong> — ส่ง<strong>ลิงก์/เว็บปลอม</strong>หลอกขโมยรหัสผ่าน<br><br><strong>6. Spyware</strong> — แอบสอดส่องพฤติกรรมผู้ใช้<br><br><strong>7. Adware</strong> — แสดงโฆษณากวนใจ"
        },
        {
          "type": "highlight-box",
          "color": "amber",
          "title": "🤖 ภัยคุกคามสมัยใหม่",
          "content": "<strong>Deepfake</strong> — ใช้ AI/Deep Learning <strong>ปลอมแปลงใบหน้า/เสียง</strong>เพื่อหลอกลวง เช่น โทรเข้ามาเป็นเสียงคนรู้จัก<br><br><strong>DDoS Attack</strong> — ส่ง traffic จำนวนมากจากคอมพิวเตอร์นับพันเครื่องเพื่อทำเซิร์ฟเวอร์ล่ม<br><br><strong>Pharming</strong> — เปลี่ยน DNS หรือ hosts file ให้ชี้ไปเว็บปลอม แม้พิมพ์ URL ถูก<br><br><strong>Social Engineering</strong> — ใช้จิตวิทยาหลอกคน เช่น โทรปลอมเป็นเจ้าหน้าที่ IT ขอรหัสผ่าน"
        },
        {
          "type": "highlight-box",
          "color": "blue",
          "title": "🛡️ การยืนยันตัวตน (Authentication)",
          "content": "<strong>อัตลักษณ์เฉพาะบุคคล (Biometrics) — โลกจริง</strong><br>• ลายนิ้วมือ, ม่านตา (Iris), ใบหน้า, DNA, เสียง, ลายเซ็น<br>• ม่านตา (Iris) ปลอดภัยสุดเพราะลวดลายซับซ้อน ยากปลอม<br><br><strong>อัตลักษณ์ดิจิทัล (Digital Identity) — โลกออนไลน์</strong><br>• Username, รหัสผ่าน, PIN, OTP (One-Time Password), 2FA<br><br><strong>2FA (Two-Factor Authentication)</strong><br>• ยืนยัน 2 ชั้น: สิ่งที่<strong>รู้</strong> (รหัสผ่าน) + สิ่งที่<strong>มี</strong> (โทรศัพท์รับ OTP)"
        },
        {
          "type": "bullet-list",
          "title": "✅ แนวทางป้องกันตัวเอง",
          "items": [
            "ใช้<strong>รหัสผ่านยาว ≥ 12 ตัว</strong> ผสม a-z, A-Z, 0-9, สัญลักษณ์ ไม่ใช้ข้อมูลส่วนตัว",
            "เปิด <strong>2FA</strong> ทุกบัญชีที่รองรับ (Gmail, Facebook, ธนาคาร)",
            "อัปเดต <strong>OS และ Software</strong> สม่ำเสมอ เพื่อปิดช่องโหว่",
            "สำรองข้อมูล (<strong>Backup</strong>) ไว้บน Cloud/External Drive",
            "ระวัง <strong>อีเมล/ลิงก์แปลก</strong> แม้มาจากคนรู้จัก (อาจถูกแฮกบัญชี)",
            "ใช้ <strong>Antivirus</strong> อัปเดตอัตโนมัติ",
            "หลีกเลี่ยงการทำธุรกรรมสำคัญบน <strong>Public Wi-Fi</strong> หรือใช้ VPN"
          ]
        },
        {
          "type": "highlight-box",
          "color": "navy",
          "title": "🛡️ แนวคิด Zero Trust",
          "content": "<strong>Zero Trust Security</strong> = <strong>ไม่เชื่อใครเลย</strong> ต้องตรวจสอบทุกครั้ง แม้อยู่ในเครือข่ายภายใน<br><br>หลักการ: <strong>Never trust, always verify</strong><br>• ทุก request ต้องผ่านการ authenticate<br>• ทุกอุปกรณ์ต้อง verify ก่อนเข้าถึง<br>• ใช้ <strong>Least Privilege</strong> — ให้สิทธิ์เท่าที่จำเป็น"
        }
      ]
    },
    {
      "navIcon": "👮",
      "navLabel": "แอปตำรวจ",
      "icon": "👮",
      "title": "ส่วนที่ 8 · แอปพลิเคชันของสำนักงานตำรวจแห่งชาติ",
      "description": "Police Care และ One Police — แอปสำคัญสำหรับตำรวจ",
      "blocks": [
        {
          "type": "cards",
          "color": "rose",
          "cards": [
            {"icon": "👮", "title": "Police Care (สำหรับประชาชน)", "content": "ฟีเจอร์: ค้นหาสถานีตำรวจ, ตรวจสอบรายชื่อตำรวจจริง/ปลอม, เช็คเบอร์มิจฉาชีพ, ร้องเรียนการปฏิบัติหน้าที่", "color": "rose"},
            {"icon": "🛡️", "title": "One Police (สำหรับข้าราชการตำรวจ)", "content": "ฟีเจอร์: ดูสถิติคดี Real-time, สแกนบัตรประชาชน/พาสปอร์ต, เช็คหมายจับ, ดูข้อมูลเงินเดือน", "color": "blue"}
          ]
        },
        {
          "type": "highlight-box",
          "color": "purple",
          "title": "💡 เทคโนโลยีสมัยใหม่ที่ตำรวจใช้",
          "content": "<strong>AI & Big Data</strong> — วิเคราะห์คดี ทำนายอาชญากรรม (Predictive Policing)<br><strong>Face Recognition</strong> — ระบบจดจำใบหน้าใน CCTV<br><strong>IoT</strong> — กล้อง/เซ็นเซอร์อัจฉริยะในเมือง<br><strong>Cloud</strong> — เก็บหลักฐาน/ภาพ CCTV จำนวนมาก<br><strong>Mobile App</strong> — รายงานคด�ผ่านมือถือ Real-time"
        }
      ]
    }
  ],
  "vocabulary": [
    {"term": "CPU", "eng": "Central Processing Unit", "def": "หน่วยประมวลผลกลาง เป็นสมองของคอมพิวเตอร์"},
    {"term": "RAM", "eng": "Random Access Memory", "def": "หน่วยความจำหลัก เก็บข้อมูลชั่วคราว ข้อมูลหายเมื่อปิดเครื่อง"},
    {"term": "ROM", "eng": "Read Only Memory", "def": "หน่วยความจำถาวร เก็บคำสั่ง BIOS"},
    {"term": "SSD", "eng": "Solid State Drive", "def": "ฮาร์ดดิสก์แบบชิป เร็วกว่า HDD ไม่มีชิ้นส่วนเคลื่อนไหว"},
    {"term": "OS", "eng": "Operating System", "def": "ระบบปฏิบัติการ เช่น Windows, macOS, Linux"},
    {"term": "LAN", "eng": "Local Area Network", "def": "เครือข่ายภายในอาคาร/สำนักงาน"},
    {"term": "WAN", "eng": "Wide Area Network", "def": "เครือข่ายขนาดใหญ่ เช่น อินเทอร์เน็ต"},
    {"term": "Wi-Fi", "eng": "Wireless Fidelity", "def": "เทคโนโลยีเครือข่ายไร้สาย WLAN"},
    {"term": "DNS", "eng": "Domain Name System", "def": "ระบบแปลงชื่อโดเมนเป็น IP Address"},
    {"term": "VPN", "eng": "Virtual Private Network", "def": "เครือข่ายส่วนตัวเสมือน เข้ารหัสการเชื่อมต่อ"},
    {"term": "URL", "eng": "Uniform Resource Locator", "def": "ที่อยู่ของเว็บเพจ เช่น https://google.com"},
    {"term": "SEO", "eng": "Search Engine Optimization", "def": "การปรับแต่งเว็บให้ติดอันดับบน Google"}
  ]
};
