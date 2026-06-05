// Content data for: ความรู้เกี่ยวกับการเมือง เศรษฐกิจและสังคม
// Redesigned for memorability: comparisons, mnemonics, relationship maps, exam points
window.POLITICAL_ECONOMY_DATA = {
  title: "ความรู้เกี่ยวกับการเมือง เศรษฐกิจและสังคม",
  titleShort: "การเมือง เศรษฐกิจ สังคม",
  subtitle: "การปกครอง · เศรษฐกิจไทย · สังคม · นโยบายสาธารณะ",
  badgeLabel: "สำหรับเตรียมสอบภาค ข. ปภ.",
  emoji: "🏛️",
  stats: { chapters: 6, parts: 24, vocab: 20, quiz: 100 },
  PAGE_TYPE: "knowledge",
  id: "political_economy",
  knowledgeSections: [
    {
      navIcon: "🏛️",
      navLabel: "การเมืองการปกครอง",
      icon: "🏛️",
      title: "ส่วนที่ 1 · การเมืองการปกครองของไทย",
      description: "รูปแบบรัฐ · รัฐธรรมนูญ · อำนาจอธิปไตย · โครงสร้างสถาบันการเมือง",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "🏛️ รูปแบบการปกครองของไทย",
          content: "<strong>ไทย: ประชาธิปไตยอันมีพระมหากษัตริย์ทรงเป็นประมุข</strong><br><br><strong>💡 จำง่าย:</strong> พระมหากษัตริย์ = ประมุข (ไม่ใช่ผู้ปกครอง) อยู่เหนือการเมือง ดำรงพระองค์เป็นกลาง<br><br><strong>🔑 อำนาจอธิปไตยเป็นของปวงชนชาวไทย</strong> — ใช้ผ่าน 3 สถาบัน<br><br><strong>รัฐธรรมนูญ พ.ศ. 2560:</strong><br>• กฎหมายสูงสุด → กฎหมายใดขัดแย้ง ใช้ไม่ได้<br>• มี <strong>ศาลรัฐธรรมนูญ</strong> วินิจฉัยคดีรัฐธรรมนูญ"
        },
        {
          type: "comparison-table",
          color: "blue",
          title: "⚖️ [จำง่าย: นิติ-บริหาร-ตุลา] อำนาจอธิปไตย 3 ฝ่าย",
          headers: ["อำนาจ", "สถาบัน", "จำนวน", "มาจาก", "ทำหน้าที่"],
          rows: [
            ["1️⃣ นิติบัญญัติ", "รัฐสภา", "—", "—", "ตรากฎหมาย"],
            ["  • ส.ส.", "สภาผู้แทนฯ", "500 คน", "เลือกตั้ง", "—"],
            ["    ↳ แบ่งเขต", "—", "400 คน", "1 เขต 1 คน", "—"],
            ["    ↳ บัญชีรายชื่อ", "—", "100 คน", "สัดส่วนพรรค", "—"],
            ["  • ส.ว.", "วุฒิสภา", "200 คน", "สรรหา", "พิจารณากฎหมาย"],
            ["2️⃣ บริหาร", "ครม.", "ไม่เกิน 36 คน", "—", "บริหารราชการแผ่นดิน"],
            ["  • นายกฯ", "—", "1 คน", "จาก ส.ส.", "หัวหน้า ครม."],
            ["3️⃣ ตุลาการ", "ศาล", "—", "—", "พิจารณาคดี"],
            ["  • ยุติธรรม", "—", "—", "—", "คดีแพ่ง/อาญาทั่วไป"],
            ["  • ปกครอง", "—", "—", "—", "ประชาชน vs รัฐ"],
            ["  • รัฐธรรมนูญ", "—", "—", "—", "วินิจฉัยรัฐธรรมนูญ"],
            ["  • ทหาร", "—", "—", "—", "คดีทหาร"]
          ],
          examNote: "🔴 จุดสอบ: ส.ส. 500 คน (400+100) | ส.ว. 200 คน (สรรหา ไม่ใช่เลือกตั้ง) | รัฐมนตรี ≤36 คน"
        },
        {
          type: "comparison-table",
          color: "amber",
          title: "📋 โครงสร้างการบริหาร: ส่วนกลาง → ภูมิภาค → ท้องถิ่น",
          headers: ["ระดับ", "หน่วยงาน", "หัวหน้า", "🔗 ความเชื่อมโยงกับ ปภ."],
          rows: [
            ["🏛️ ส่วนกลาง", "กระทรวง/ทบวง/กรม", "รัฐมนตรี", "ปภ. สังกัด <strong>กระทรวงมหาดไทย</strong>"],
            ["🗺️ ส่วนภูมิภาค", "จังหวัด", "ผู้ว่าฯ จังหวัด", "ปภ.ประจำจังหวัด รายงานผู้ว่าฯ"],
            ["", "อำเภอ", "นายอำเภอ", "ปภ.ประจำอำเภอ สนับสนุน อบต./เทศบาล"],
            ["🏘️ ส่วนท้องถิ่น (อปท.)", "องค์การบริหารส่วนจังหวัด (อบจ.)", "นายก อบจ.", "จัดการปัญหาสาธารณะในระดับจังหวัด"],
            ["", "เทศบาล (นคร/เมือง/ตำบล)", "นายกเทศมนตรี", "เทศบาลนคร มีศูนย์ป้องกันฯ"],
            ["", "องค์การบริหารส่วนตำบล (อบต.)", "นายก อบต.", "อบต. เป็นหน่วยพื้นที่ระดับตำบล"],
            ["", "กรุงเทพมหานคร (กทม.)", "ผู้ว่าฯ กทม. (เลือกตั้ง)", "กทม. มีระบบป้องกันฯ เป็นของตัวเอง"],
            ["", "เมืองพัทยา", "นายกเมืองพัทยา", "รูปแบบพิเศษ ไม่อยู่ใน อบต./เทศบาล"]
          ],
          examNote: "🔴 จุดสอบ: ปภ. = กระทรวง<strong>มหาดไทย</strong> ไม่ใช่สาธารณสุข! กทม.เลือกตั้งผู้ว่าฯ เอง"
        },
        {
          type: "highlight-box",
          color: "teal",
          title: "🗳️ ระบบเลือกตั้ง + หลักประชาธิปไตย",
          content: "<strong>📊 ระบบเลือกตั้ง ส.ส. (รัฐธรรมนูญ 2560):</strong><br><br><table style='width:100%;border-collapse:collapse;font-size:0.85rem;'><tr style='background:#1a1a2e;color:#fff;'><th style='padding:8px;border:1px solid #333;text-align:left;'>ประเภท</th><th style='padding:8px;border:1px solid #333;'>จำนวน</th><th style='padding:8px;border:1px solid #333;text-align:left;'>หลัก</th></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'><strong>แบ่งเขต</strong></td><td style='padding:8px;border:1px solid #ddd;text-align:center;'>400 คน</td><td style='padding:8px;border:1px solid #ddd;'>1 เขต = 1 คน (SMD)</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;'><strong>บัญชีรายชื่อ</strong></td><td style='padding:8px;border:1px solid #ddd;text-align:center;'>100 คน</td><td style='padding:8px;border:1px solid #ddd;'>คำนวณสัดส่วนคะแนนพรรค</td></tr></table><br><strong>💡 จำง่าย: 4+1 = 5 ร้อย</strong><br><br><strong>4 หลักประชาธิปไตย:</strong><br>① เสรีภาพในการแสดงออก<br>② สิทธิเลือกตั้ง<br>③ นิติธรรม (Rule of Law)<br>④ ความโปร่งใส & ตรวจสอบได้<br><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> กกต. ดูแลเลือกตั้ง → ปภ. เตรียมพร้อมด้านความมั่นคงในช่วงเลือกตั้ง"
        }
      ]
    },
    {
      navIcon: "💰",
      navLabel: "เศรษฐกิจไทยและโลก",
      icon: "💰",
      title: "ส่วนที่ 2 · เศรษฐกิจไทยและเศรษฐกิจโลก",
      description: "โครงสร้างเศรษฐกิจ · GDP · การค้าระหว่างประเทศ · เศรษฐกิจพอเพียง",
      blocks: [
        {
          type: "comparison-table",
          color: "navy",
          title: "📊 [จำง่าย: บ-อ-ก = บริการ > อุตสาหกรรม > เกษตร] โครงสร้างเศรษฐกิจไทย",
          headers: ["ภาค", "สัดส่วน GDP", "สินค้าหลัก", "ลักษณะเด่น", "🔗 ความเชื่อมโยง ปภ."],
          rows: [
            ["1️⃣ บริการ", "~55-60%", "ท่องเที่ยว ค้า โทรคมนาคม", "สร้างรายได้มากสุด ก่อน COVID ~2.8 ล้านล้าน/ปี", "ภัยพิบัติกระทบท่องเที่ยว → ปภ. ช่วยเยียวยา"],
            ["2️⃣ อุตสาหกรรม", "~30-35%", "ยานยนต์ อิเล็กทรอนิกส์ อาหาร", "EEC (ฉะเชิงเทรา ชลบุรี ระยอง)", "โรงงานเสี่ยงอุบัติเหตุทางอุตสาหกรรม → ปภ. รับผิดชอบ"],
            ["3️⃣ เกษตร", "~8-10%", "ข้าว ยางพารา มันฯ ข้าวโพด", "ใช้แรงงานมาก (~30%) แต่ GDP ต่ำ ส่งออกข้าวชั้นนำ", "พื้นที่เกษตรเสี่ยงน้ำท่วม ภัยแล้ง → ปภ. ติดตาม"]
          ],
          examNote: "🔴 จุดสอบ: บริการ > อุตสาหกรรม > เกษตร (เรียงลำดับตามสัดส่วน GDP จากมากไปน้อย)"
        },
        {
          type: "highlight-box",
          color: "amber",
          title: "📈 GDP + ตัวชี้วัดเศรษฐกิจ",
          content: "<strong>GDP</strong> = มูลค่าสินค้า+บริการทั้งหมดที่ผลิตในประเทศ 1 ปี<br><br><strong>💡 จำง่าย: GDP = ขนาดของกินของประเทศ</strong><br><br><strong>ตัวชี้วัดสำคัญ 4 ตัว:</strong><br><table style='width:100%;border-collapse:collapse;font-size:0.82rem;margin:8px 0;'><tr style='background:#1a1a2e;color:#fff;'><th style='padding:6px 10px;border:1px solid #333;text-align:left;'>ตัวชี้วัด</th><th style='padding:6px 10px;border:1px solid #333;'>วัดอะไร</th><th style='padding:6px 10px;border:1px solid #333;'>ใครดูแล</th></tr><tr style='background:#faf8f4;'><td style='padding:6px 10px;border:1px solid #ddd;'>📈 อัตราเติบโต GDP</td><td style='padding:6px 10px;border:1px solid #ddd;'>ความแข็งแกร่งเศรษฐกิจ</td><td style='padding:6px 10px;border:1px solid #ddd;'>—</td></tr><tr style='background:#f5f0e8;'><td style='padding:6px 10px;border:1px solid #ddd;'>💹 เงินเฟ้อ</td><td style='padding:6px 10px;border:1px solid #ddd;'>ราคาสูงขึ้น กำลังซื้อลด</td><td style='padding:6px 10px;border:1px solid #ddd;'><strong>ธปท.</strong> กนง.กำหนด</td></tr><tr style='background:#faf8f4;'><td style='padding:6px 10px;border:1px solid #ddd;'>💰 อัตราดอกเบี้ย</td><td style='padding:6px 10px;border:1px solid #ddd;'>ต้นทุนการกู้ยืม</td><td style='padding:6px 10px;border:1px solid #ddd;'><strong>กนง.</strong> (แขก ธปท.)</td></tr><tr style='background:#f5f0e8;'><td style='padding:6px 10px;border:1px solid #ddd;'>👷 อัตราว่างงาน</td><td style='padding:6px 10px;border:1px solid #ddd;'>สุขภาพตลาดแรงงาน</td><td style='padding:6px 10px;border:1px solid #ddd;'>กระทรวงแรงงาน</td></tr></table><br><strong>ธปท. ทำอะไร:</strong> นโยบายการเงิน | ควบคุมปริมาณเงิน | กำกับธนาคารพาณิชย์ | ทุนสำรองระหว่างประเทศ<br><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> ภัยพิบัติทำ GDP ตก → ปภ. กู้ฟื้น ดูแลโครงสร้างพื้นฐาน"
        },
        {
          type: "highlight-box",
          color: "teal",
          title: "🌐 การค้าระหว่างประเทศและ FTA",
          content: "<strong>คู่ค้าสำคัญ:</strong> จีน | สหรัฐฯ | ญี่ปุ่น | อาเซียน | สหภาพยุโรป<br><br><strong>💡 จำง่าย FTA: A→R→C (จากเล็กไปใหญ่)</strong><br><br><table style='width:100%;border-collapse:collapse;font-size:0.82rem;'><tr style='background:#1a1a2e;color:#fff;'><th style='padding:8px;border:1px solid #333;'>ข้อตกลง</th><th style='padding:8px;border:1px solid #333;'>ระดับ</th><th style='padding:8px;border:1px solid #333;text-align:left;'>สิ่งที่ทำ</th></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'><strong>AFTA</strong></td><td style='padding:8px;border:1px solid #ddd;'>อาเซียน</td><td style='padding:8px;border:1px solid #ddd;'>ลดภาษีในกลุ่มอาเซียน</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;'><strong>RCEP</strong></td><td style='padding:8px;border:1px solid #ddd;'>อาเซียน+5</td><td style='padding:8px;border:1px solid #ddd;'>ข้อตกลงใหญ่ที่สุดในโลก — อาเซียน+จีน+ญี่ปุ่น+เกาหลี+ออสฯ+นิวซีแลนด์</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'><strong>CPTPP</strong></td><td style='padding:8px;border:1px solid #ddd;'>แปซิฟิก</td><td style='padding:8px;border:1px solid #ddd;'>ไทย<strong>อยู่ระหว่างพิจารณา</strong></td></tr></table><br><strong>สินค้าส่งออก 5 อันดับ:</strong> รถยนต์/ชิ้นส่วน → อิเล็กทรอนิกส์ → อาหารแปรรูป → ยางพารา → ข้าว<br><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> ภัยพิบัติกระทบห่วงโซ่อุปทาน → ปภ. ประสานฟื้นฟูการค้า"
        },
        {
          type: "highlight-box",
          color: "blue",
          title: "🌱 เศรษฐกิจพอเพียง (SEP) — ปรัชญาของรัชกาลที่ 9",
          content: "<strong>💡 จำง่าย: 3 ห่วง = พอ-เหตุ-ภูมิ | 2 เงื่อนไข = รู้-ดี</strong><br><br><strong>3 ห่วง (ที่ต้องมี):</strong><br>① <strong>พอประมาณ</strong> — ไม่มากเกิน ไม่น้อยเกิน พอดีกับความสามารถ<br>② <strong>มีเหตุผล</strong> — มีเหตุผลรองรับ คิดพิจารณาก่อน<br>③ <strong>ภูมิคุ้มกันในตัวที่ดี</strong> — เตรียมพร้อมรับมือความเสี่ยง<br><br><strong>2 เงื่อนไข (ที่ต้องมี):</strong><br>• <strong>ความรู้</strong> — รอบรู้ รอบคอบ ระมัดระวัง<br>• <strong>คุณธรรม</strong> — ซื่อสัตย์ ขยัน อดทน แบ่งปัน<br><br><strong>นำไปสู่:</strong> ความสมดุล → มั่นคง → ยั่งยืน<br><br><strong>บรรจุใน:</strong> แผนพัฒนาฯ ฉบับที่ 10-12 + ยุทธศาสตร์ชาติ<br><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> SEP สอนเตรียมพร้อมรับภัยพิบัติ → ชุมชนพึ่งตัวเองได้ → ปภ. ส่งเสริม"
        }
      ]
    },
    {
      navIcon: "👥",
      navLabel: "สังคมและประชากร",
      icon: "👥",
      title: "ส่วนที่ 3 · สังคม ประชากร และวัฒนธรรมไทย",
      description: "โครงสร้างประชากร · สังคมผู้สูงอายุ · ความเหลื่อมล้ำ · วัฒนธรรม",
      blocks: [
        {
          type: "comparison-table",
          color: "navy",
          title: "👴 [จำง่าย: 10-20-28 = เริ่ม-สูงวัย-สุงวัย] สังคมผู้สูงอายุ",
          headers: ["ระดับ", "เกณฑ์ (ประชากร 60+)", "สถานะไทย", "💡 จำ"],
          rows: [
            ["เริ่มวัย (Aging)", "10-20%", "ไทยเข้าแล้ว", "10% ขึ้นไป"],
            ["สูงวัย (Aged)", ">20%", "ไทยเข้าแล้ว ปี 2549", ">20%"],
            ["สุงวัย (Super Aged)", ">28%", "—", ">28%"]
          ],
          content: "<br><strong>ผลกระทบ 3 ด้าน:</strong><br>• <strong>แรงงาน ↓</strong> — วัยทำงานลด ผลิตภาพลด<br>• <strong>คลัง ↓</strong> — สวัสดิการ+สุขภาพเพิ่ม<br>• <strong>Silver Economy ↑</strong> — ตลาดผู้สูงอายุเติบโต<br><br><strong>นโยบายรับมือ:</strong> กบช. | กองทุนบำเหน็จบำนาญ | Reskill | Silver Economy<br><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> ผู้สูงอายุเป็นกลุ่มเปราะบางที่สุดต่อภัยพิบัติ → ปภ. จัดการอพยพ+ดูแลพิเศษ"
        },
        {
          type: "highlight-box",
          color: "blue",
          title: "⚖️ ความเหลื่อมล้ำทางสังคม + นโยบายเฉพาะ",
          content: "<strong>ค่า Gini Coefficient:</strong> 0 = เสมอภาค | 1 = ไม่เสมอภาค | ไทย ~0.43 (สูง)<br><br><strong>💡 จำง่าย: 4+3 = ไทยยังเหลื่อม (0.43)</strong><br><br><strong>ความเหลื่อมล้ำในไทย:</strong><br>• เมือง ↔ ชนบท<br>• การเข้าถึงการศึกษา<br>• ระหว่างกลุ่มอาชีพ<br><br><strong>นโยบายลดความเหลื่อมล้ำ 4 ด้าน:</strong><br><table style='width:100%;border-collapse:collapse;font-size:0.82rem;margin:8px 0;'><tr style='background:#1a1a2e;color:#fff;'><th style='padding:6px 10px;border:1px solid #333;text-align:left;'>นโยบาย</th><th style='padding:6px 10px;border:1px solid #333;'>ใครดูแล</th><th style='padding:6px 10px;border:1px solid #333;text-align:left;'>ช่วยกลุ่มไหน</th></tr><tr style='background:#faf8f4;'><td style='padding:6px 10px;border:1px solid #ddd;'>บัตรสวัสดิการแห่งรัฐ</td><td style='padding:6px 10px;border:1px solid #ddd;'>สำนักงบฯ</td><td style='padding:6px 10px;border:1px solid #ddd;'>รายได้น้อย</td></tr><tr style='background:#f5f0e8;'><td style='padding:6px 10px;border:1px solid #ddd;'>ประกันสังคม</td><td style='padding:6px 10px;border:1px solid #ddd;'>สปส.</td><td style='padding:6px 10px;border:1px solid #ddd;'>แรงงาน</td></tr><tr style='background:#faf8f4;'><td style='padding:6px 10px;border:1px solid #ddd;'>สปสช. (บัตรทอง 30 บ.)</td><td style='padding:6px 10px;border:1px solid #ddd;'>สปสช.</td><td style='padding:6px 10px;border:1px solid #ddd;'>ผู้ป่วย ทุกคน</td></tr><tr style='background:#f5f0e8;'><td style='padding:6px 10px;border:1px solid #ddd;'>เบี้ยยังชีพผู้สูงอายุ</td><td style='padding:6px 10px;border:1px solid #ddd;'>ปภ./ท้องถิ่น</td><td style='padding:6px 10px;border:1px solid #ddd;'>ผู้สูงอายุ</td></tr></table><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> ภัยพิบัติกระทบคนจนหนักกว่า → ปภ. ประสาน สปสช. เยียวยา"
        },
        {
          type: "highlight-box",
          color: "amber",
          title: "🎭 วัฒนธรรมและอัตลักษณ์ไทย",
          content: "<strong>เสาหลักสังคมไทย:</strong><br>🏛️ ชาติ — 🛕 ศาสนา — 👑 พระมหากษัตริย์<br><br><strong>💡 จำง่าย: ช-ศ-พ = ชาติ ศาสนา พระมหากษัตริย์</strong><br><br><strong>คุณค่าไทย:</strong><br>• น้ำใจไทย — อยู่อย่างเอื้อเฟื้อเผื่อแผ่<br>• ให้เกียรติผู้อาวุโส<br><br><strong>ศาสนาในไทย:</strong><br>• พุทธ (~95%) — ศาสนาหลัก<br>• อิสลาม — ภาคใต้ ชุมชนมุสลิม<br>• คริสต์ ฮินดู ซิกข์ — ชนกลุ่มน้อย<br><br><strong>ความหลากหลาย:</strong> ชนเผ่าพื้นเมือง (เหนือ) | ไทยมุสลิม (ใต้) | ชุมชนจีน (ผสมผสาน)<br><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> วัฒนธรรมอยู่ร่วมกัน → ปภ. ต้องเคารพความหลากหลายในการช่วยเหลือ"
        },
        {
          type: "highlight-box",
          color: "teal",
          title: "📚 การศึกษาไทย vs ปัญหา",
          content: "<strong>ระบบการศึกษา:</strong><br>อนุบาล (3-5ป) → ประถม (6ป) → มัธยม (6ป) → อุดมศึกษา<br><br><strong>💡 จำง่าย: บังคับ 9 ปี = ประถม+มัธยมต้น | ฟรี 12 ปี = ถึงมัธยมปลาย</strong><br><br><strong>HDI (ดัชนีพัฒนามนุษย์) — ไทย: ระดับสูง</strong><br>วัดจาก: อายุยืน (สุขภาพ) + การศึกษา + รายได้<br><br><strong>ปัญหา 4 ด้าน:</strong><br>① คุณภาพต่างกัน เมือง↔ชนบท<br>② PISA ต่ำกว่า OECD<br>③ ขาดครูพื้นที่ห่างไกล<br>④ ทักษะดิจิทัล & 21st Century Skills<br><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> การศึกษาสร้างความรู้ภัยพิบัติ → ปภ. ส่งเสริมการเรียนรู้ภัยพิบัติในโรงเรียน"
        }
      ]
    },
    {
      navIcon: "📋",
      navLabel: "นโยบายสาธารณะ",
      icon: "📋",
      title: "ส่วนที่ 4 · นโยบายสาธารณะและการบริหารภาครัฐ",
      description: "วงจรนโยบาย · ธรรมาภิบาล · การกระจายอำนาจ · ยุทธศาสตร์ชาติ",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "🔄 [จำง่าย: วาระ→เลือก→ตัดสิน→ทำ→วัด] วงจรนโยบายสาธารณะ 5 ระยะ",
          content: "<strong>วงจรนโยบาย (Policy Cycle) = แนวทางรัฐจัดการปัญหาสังคม</strong><br><br><table style='width:100%;border-collapse:collapse;font-size:0.82rem;'><tr style='background:#1a1a2e;color:#fff;'><th style='padding:8px;border:1px solid #333;width:40px;'>ขั้น</th><th style='padding:8px;border:1px solid #333;'>ชื่อ</th><th style='padding:8px;border:1px solid #333;text-align:left;'>ทำอะไร</th></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'><strong>①</strong></td><td style='padding:8px;border:1px solid #ddd;'><strong>วาระ</strong><br><small>(Agenda)</small></td><td style='padding:8px;border:1px solid #ddd;'>ปัญหาได้รับความสนใจจากสาธารณะและผู้กำหนดนโยบาย</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'><strong>②</strong></td><td style='padding:8px;border:1px solid #ddd;'><strong>กำหนด</strong><br><small>(Formulate)</small></td><td style='padding:8px;border:1px solid #ddd;'>ออกแบบทางเลือก วิเคราะห์ผลกระทบ</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'><strong>③</strong></td><td style='padding:8px;border:1px solid #ddd;'><strong>ตัดสินใจ</strong><br><small>(Decision)</small></td><td style='padding:8px;border:1px solid #ddd;'>อนุมัติผ่านฝ่ายบริหาร/นิติบัญญัติ</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'><strong>④</strong></td><td style='padding:8px;border:1px solid #ddd;'><strong>ปฏิบัติ</strong><br><small>(Implement)</small></td><td style='padding:8px;border:1px solid #ddd;'>หน่วยงานรัฐดำเนินงาน</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'><strong>⑤</strong></td><td style='padding:8px;border:1px solid #ddd;'><strong>วัดผล</strong><br><small>(Evaluate)</small></td><td style='padding:8px;border:1px solid #ddd;'>วัดผลสัมฤทธิ์ ปรับปรุง → วกลับไปขั้น ①</td></tr></table><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> ปภ. อยู่ขั้น ④ ปฏิบัติ → ขั้น ⑤ วัดผล → วนกลับปรับปรุง"
        },
        {
          type: "highlight-box",
          color: "amber",
          title: "⭐ [จำง่าย: นิ-คุ-โป-มี-รับ-คุ้ม] ธรรมาภิบาล 6 หลัก (2542)",
          content: "<strong>💡 จำง่าย: นิ-คุ-โป-มี-รับ-คุ้ม</strong><br><br><table style='width:100%;border-collapse:collapse;font-size:0.82rem;'><tr style='background:#1a1a2e;color:#fff;'><th style='padding:8px;border:1px solid #333;width:40px;'>ลำดับ</th><th style='padding:8px;border:1px solid #333;'>หลัก</th><th style='padding:8px;border:1px solid #333;text-align:left;'>หมายถึง</th></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'>①</td><td style='padding:8px;border:1px solid #ddd;'><strong>นิติธรรม</strong></td><td style='padding:8px;border:1px solid #ddd;'>ทุกคนอยู่ภายใต้กฎหมาย เท่าเทียม</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'>②</td><td style='padding:8px;border:1px solid #ddd;'><strong>คุณธรรม</strong></td><td style='padding:8px;border:1px solid #ddd;'>ยึดมั่นความถูกต้อง ซื่อสัตย์</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'>③</td><td style='padding:8px;border:1px solid #ddd;'><strong>โปร่งใส</strong></td><td style='padding:8px;border:1px solid #ddd;'>เปิดเผยข้อมูล ตรวจสอบได้</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'>④</td><td style='padding:8px;border:1px solid #ddd;'><strong>มีส่วนร่วม</strong></td><td style='padding:8px;border:1px solid #ddd;'>ประชาชนมีส่วนในกระบวนการตัดสินใจ</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'>⑤</td><td style='padding:8px;border:1px solid #ddd;'><strong>รับผิดชอบ</strong></td><td style='padding:8px;border:1px solid #ddd;'>รับผิดชอบต่อผลการกระทำ</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'>⑥</td><td style='padding:8px;border:1px solid #ddd;'><strong>คุ้มค่า</strong></td><td style='padding:8px;border:1px solid #ddd;'>ใช้ทรัพยากรอย่างประหยัด+มีประสิทธิภาพ</td></tr></table><br>🔴 <strong>จุดสอบ: ธรรมาภิบาล = <u>6 หลัก</u> (ไม่ใช่ 5 หรือ 7) ตามระเบียบสำนักนายกฯ พ.ศ. 2542<br>⚠️ หมายเหตุ: UN มี 8 ข้อ แต่ไทยใช้ 6 หลักของตัวเอง</strong><br><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> ธรรมาภิบาล = กรอบการทำงานของ ปภ. ทุกระดับ → โปร่งใส มีส่วนร่วม รับผิดชอบ"
        },
        {
          type: "highlight-box",
          color: "teal",
          title: "🎯 [จำง่าย: ม-แ-ค-ส-ร-ป] ยุทธศาสตร์ชาติ 6 ด้าน (2561-2580)",
          content: "<strong>💡 จำง่าย: ม-แ-ค-ส-ร-ป = ม(ั่นคง)-(แข่งขัน)-(คน)-(สิ่งแวดล้อม)-(รัฐ)</strong><br><br><table style='width:100%;border-collapse:collapse;font-size:0.82rem;'><tr style='background:#1a1a2e;color:#fff;'><th style='padding:8px;border:1px solid #333;width:40px;'>ด้าน</th><th style='padding:8px;border:1px solid #333;'>ชื่อ</th><th style='padding:8px;border:1px solid #333;text-align:left;'>เป้าหมาย</th></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'>①</td><td style='padding:8px;border:1px solid #ddd;'><strong>มั่นคง</strong></td><td style='padding:8px;border:1px solid #ddd;'>ปกป้องเอกราช บูรณภาพแผ่นดิน</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'>②</td><td style='padding:8px;border:1px solid #ddd;'><strong>แข่งขัน</strong></td><td style='padding:8px;border:1px solid #ddd;'>ยกระดับเศรษฐกิจ+นวัตกรรม</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'>③</td><td style='padding:8px;border:1px solid #ddd;'><strong>คน</strong></td><td style='padding:8px;border:1px solid #ddd;'>คนไทยคุณภาพ (ทรัพยากรมนุษย์)</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'>④</td><td style='padding:8px;border:1px solid #ddd;'><strong>สิ่งแวดล้อม</strong></td><td style='padding:8px;border:1px solid #ddd;'>BCG — เติบโตคุณภาพชีวิต+สิ่งแวดล้อม</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'>⑤</td><td style='padding:8px;border:1px solid #ddd;'><strong>สมดุล</strong></td><td style='padding:8px;border:1px solid #ddd;'>โอกาส+ความเสมอภาคทางสังคม</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'>⑥</td><td style='padding:8px;border:1px solid #ddd;'><strong>รัฐ</strong></td><td style='padding:8px;border:1px solid #ddd;'>รัฐบาลดิจิทัล ปรับสมดุลภาครัฐ</td></tr></table><br><strong>เป้าหมายรวม:</strong> ไทยเป็น <strong>ประเทศพัฒนาแล้ว</strong> — มั่นคง มั่งคั่ง ยั่งยืน<br><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> ยุทธศาสตร์ชาติ ด้าน 1 ความมั่นคง → ปภ. เป็นหน่วยงานหลักด้านความมั่นคงพลเรือน"
        },
        {
          type: "highlight-box",
          color: "blue",
          title: "🏘️ การกระจายอำนาจสู่ท้องถิ่น — รูปแบบ อปท.",
          content: "<strong>หลักการ:</strong> รัฐถ่ายโอนอำนาจ+ทรัพยากร → ท้องถิ่น → ประชาชนจัดการตนเอง<br><br><strong>รูปแบบ อปท. (เรียงจากเล็ก→ใหญ่):</strong><br><br><table style='width:100%;border-collapse:collapse;font-size:0.82rem;'><tr style='background:#1a1a2e;color:#fff;'><th style='padding:8px;border:1px solid #333;'>รูปแบบ</th><th style='padding:8px;border:1px solid #333;'>ระดับ</th><th style='padding:8px;border:1px solid #333;text-align:left;'>ผู้บริหาร</th></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'>อบต.</td><td style='padding:8px;border:1px solid #ddd;'>ตำบล</td><td style='padding:8px;border:1px solid #ddd;'>นายก อบต. (เลือกตั้ง)</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;'>เทศบาลตำบล</td><td style='padding:8px;border:1px solid #ddd;'>ตำบล/ชุมชน</td><td style='padding:8px;border:1px solid #ddd;'>นายกเทศมนตรี (เลือกตั้ง)</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'>เทศบาลเมือง</td><td style='padding:8px;border:1px solid #ddd;'>เขตเมือง</td><td style='padding:8px;border:1px solid #ddd;'>นายกเทศมนตรี (เลือกตั้ง)</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;'>เทศบาลนคร</td><td style='padding:8px;border:1px solid #ddd;'>เมืองใหญ่</td><td style='padding:8px;border:1px solid #ddd;'>นายกเทศมนตรี (เลือกตั้ง)</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'>อบจ.</td><td style='padding:8px;border:1px solid #ddd;'>จังหวัด</td><td style='padding:8px;border:1px solid #ddd;'>นายก อบจ. (เลือกตั้ง)</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;'>กทม.</td><td style='padding:8px;border:1px solid #ddd;'>กรุงเทพฯ</td><td style='padding:8px;border:1px solid #ddd;'>ผู้ว่าฯ กทม. (เลือกตั้งโดยตรง — พิเศษ!)</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'>เมืองพัทยา</td><td style='padding:8px;border:1px solid #ddd;'>รูปแบบพิเศษ</td><td style='padding:8px;border:1px solid #ddd;'>นายกเมืองพัทยา (เลือกตั้ง)</td></tr></table><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> อปท. เป็นหน่วยพื้นที่ระดับแรกที่ปภ. ประสานงาน → อบต. เทศบาล มีศูนย์ป้องกันฯ"
        }
      ]
    },
    {
      navIcon: "🌏",
      navLabel: "ความสัมพันธ์ระหว่างประเทศ",
      icon: "🌏",
      title: "ส่วนที่ 5 · ความสัมพันธ์ระหว่างประเทศและอาเซียน",
      description: "ASEAN · ความร่วมมือระหว่างประเทศ · นโยบายต่างประเทศ · UN",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "🌏 [จำง่าย: ก→จ→8 = ก่อตั้งที่กรุงเทพฯ จาการ์ตาเป็นสำนักงาน 8 ส.ค. 2510] ASEAN",
          content: "<strong>ASEAN = Association of Southeast Asian Nations</strong><br><br><table style='width:100%;border-collapse:collapse;font-size:0.82rem;margin:8px 0;'><tr style='background:#1a1a2e;color:#fff;'><th style='padding:8px;border:1px solid #333;'>ข้อมูล</th><th style='padding:8px;border:1px solid #333;text-align:left;'>รายละเอียด</th></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'><strong>ก่อตั้ง</strong></td><td style='padding:8px;border:1px solid #ddd;'>8 สิงหาคม 2510 ที่ <strong>กรุงเทพฯ</strong> (ปฏิญญาบางกอก)</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;'><strong>สำนักเลขาฯ</strong></td><td style='padding:8px;border:1px solid #ddd;'><strong>กรุงจาการ์ตา อินโดนีเซีย</strong> (ไม่ใช่กรุงเทพฯ!)</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'><strong>สมาชิก</strong></td><td style='padding:8px;border:1px solid #ddd;'>10 ประเทศ</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;'><strong>ไทย</strong></td><td style='padding:8px;border:1px solid #ddd;'>1 ใน 5 ผู้ก่อตั้ง | ประธาน ASEAN 2562</td></tr></table><br><strong>3 เสาหลัก (วิสัยทัศน์อาเซียน):</strong><br>① <strong>APSC</strong> — ประชาคมการเมืองและความมั่นคง<br>② <strong>AEC</strong> — ประชาคมเศรษฐกิจ<br>③ <strong>ASCC</strong> — ประชาคมสังคมและวัฒนธรรม<br><br><strong>💡 จำง่าย: ก-จ-3 = ก่อตั้ง→จาการ์ตา→3 เสาหลัก</strong><br><br><strong>🔴 จุดสอบ: สำนักเลขาฯ ASEAN = กรุง<strong>จาการ์ตา</strong> (ไม่ใช่กรุงเทพฯ)</strong><br><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> ASEAN = กรอบความร่วมมือด้านภัยพิบัติระดับภูมิภาค → ปภ. ประสานกับศูนย์ป้องกันฯ อาเซียน (AHA Centre)"
        },
        {
          type: "highlight-box",
          color: "blue",
          title: "🌐 [จำง่าย: ภัยพิบัติ→UNDRR/UNOCHA ศึกษา→UNESCO สุข→WHO] UN และองค์กรที่เกี่ยวกับ ปภ.",
          content: "<strong>UN = United Nations</strong> ก่อตั้ง 1945 | สมาชิก 193 ประเทศ | สำนักงานใหญ่: <strong>นิวยอร์ก</strong><br><br><strong>องค์กรที่เกี่ยวข้องกับงาน ปภ. โดยตรง:</strong><br><table style='width:100%;border-collapse:collapse;font-size:0.82rem;margin:8px 0;'><tr style='background:#1a1a2e;color:#fff;'><th style='padding:8px;border:1px solid #333;'>องค์กร</th><th style='padding:8px;border:1px solid #333;text-align:left;'>ทำอะไร</th></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'><strong>UNDRR</strong></td><td style='padding:8px;border:1px solid #ddd;'>ลดความเสี่ยงจากภัยพิบัติ (Disaster Risk Reduction)</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;'><strong>UNOCHA</strong></td><td style='padding:8px;border:1px solid #ddd;'>ประสานงานการช่วยเหลือด้านมนุษยธรรม</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'><strong>UNHCR</strong></td><td style='padding:8px;border:1px solid #ddd;'>ผู้ลี้ภัย</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;'><strong>WHO</strong></td><td style='padding:8px;border:1px solid #ddd;'>อนามัยโลก (COVID-19 → ปภ.ร่วม)</td></tr></table><br><strong>องค์กรเศรษฐกิจ:</strong><br>• <strong>IMF</strong> — กองทุนการเงินระหว่างประเทศ<br>• <strong>World Bank</strong> — ธนาคารโลก<br>• <strong>WTO</strong> — องค์การการค้าโลก<br>• <strong>ADB</strong> — ธนาคารพัฒนาเอเชีย (มีโครงการช่วยเหลือภัยพิบัติในไทย)<br><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> ปภ. รับการสนับสนุนจาก UNDRR/UNOCHA/ADB เมื่อเกิดภัยพิบัติใหญ่"
        },
        {
          type: "highlight-box",
          color: "amber",
          title: "📌 นโยบายต่างประเทศของไทย",
          content: "<strong>หลักการ:</strong> ความเป็นกลาง + ดุลยภาพ + ส่งเสริมสันติภาพ<br><br><strong>💡 จำง่าย: กลาง-ดุล-ค้า = นโยบายต่างประเทศไทย</strong><br><br><strong>ความสัมพันธ์กับมหาอำนาจ:</strong><br><table style='width:100%;border-collapse:collapse;font-size:0.82rem;margin:8px 0;'><tr style='background:#1a1a2e;color:#fff;'><th style='padding:8px;border:1px solid #333;'>ประเทศ</th><th style='padding:8px;border:1px solid #333;text-align:left;'>ความสัมพันธ์</th></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'><strong>สหรัฐฯ</strong></td><td style='padding:8px;border:1px solid #ddd;'>พันธมิตรด้านความมั่นคง (สนธิสัญญาเชียงใหม่)</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;'><strong>จีน</strong></td><td style='padding:8px;border:1px solid #ddd;'>หุ้นส่วนยุทธศาสตร์ ลงทุนมากในไทย</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'><strong>ญี่ปุ่น</strong></td><td style='padding:8px;border:1px solid #ddd;'>ลงทุนอุตสาหกรรมยานยนต์/อิเล็กทรอนิกส์</td></tr></table><br><strong>การทูตเชิงเศรษฐกิจ:</strong> ส่งเสริมการค้า ลงทุน ท่องเที่ยว ดึงดูดต่างชาติ<br><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> ภัยพิบัติข้ามพรมแดน → ปภ. ประสานความช่วยเหลือระหว่างประเทศ"
        }
      ]
    },
    {
      navIcon: "🔮",
      navLabel: "แนวโน้มและความท้าทาย",
      icon: "🔮",
      title: "ส่วนที่ 6 · แนวโน้มและความท้าทายของประเทศไทย",
      description: "BCG Economy · ดิจิทัล · ความยั่งยืน · SDGs · Thailand 4.0",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "🌱 [จำง่าย: B=ชีวภาพ C=หมุนเวียน G=สีเขียว] BCG Economy",
          content: "<strong>BCG = Bio-Circular-Green Economy</strong> — โมเดลเศรษฐกิจใหม่ของไทย<br><br><table style='width:100%;border-collapse:collapse;font-size:0.82rem;'><tr style='background:#1a1a2e;color:#fff;'><th style='padding:8px;border:1px solid #333;width:40px;'>ตัว</th><th style='padding:8px;border:1px solid #333;'>ชื่อ</th><th style='padding:8px;border:1px solid #333;text-align:left;'>แนวคิด</th></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'><strong>B</strong></td><td style='padding:8px;border:1px solid #ddd;'><strong>Bio (ชีวภาพ)</strong></td><td style='padding:8px;border:1px solid #ddd;'>ใช้ทรัพยากรชีวภาพอย่างคุ้มค่า เกษตรมูลค่าสูง เทคโนโลยีชีวภาพ</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'><strong>C</strong></td><td style='padding:8px;border:1px solid #ddd;'><strong>Circular (หมุนเวียน)</strong></td><td style='padding:8px;border:1px solid #ddd;'>ลดของเสีย นำกลับมาใช้ใหม่ ลดการบริโภคทรัพยากร</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;text-align:center;'><strong>G</strong></td><td style='padding:8px;border:1px solid #ddd;'><strong>Green (สีเขียว)</strong></td><td style='padding:8px;border:1px solid #ddd;'>ลดก๊าซเรือนกระจก พลังงานสะอาด ลด Carbon Footprint</td></tr></table><br><strong>เป้าหมายไทย:</strong><br>• <strong>Carbon Neutrality 2050</strong> — ปล่อย = ดูดซับ<br>• <strong>Net Zero 2065</strong> — ปล่อย < ดูดซับ<br><br>🔴 <strong>จุดสอบ: BCG ≠ เศรษฐกิจพอเพียง แต่สอดคล้องกันในเชิงความยั่งยืน</strong><br><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> BCG ลดความเสี่ยงภัยพิบัติทางธรรมชาติ → ปภ. สนับสนุน BCG เป็นนโยบายลดความเสี่ยง"
        },
        {
          type: "highlight-box",
          color: "blue",
          title: "💻 [จำง่าย: Made in Thailand → Innovation from Thailand] Thailand 4.0",
          content: "<strong>Thailand 4.0</strong> = ขับเคลื่อนเศรษฐกิจด้วยนวัตกรรม+เทคโนโลยี<br><br><strong>S-Curve ใหม่ 5 อุตสาหกรรม:</strong><br>① หุ่นยนต์และระบบอัตโนมัติ<br>② ดิจิทัล AI และ Big Data<br>③ การบินและอวกาศ<br>④ เชื้อเพลิงชีวภาพ/เคมีชีวภาพ<br>⑤ การแพทย์ครบวงจร<br><br><strong>EEC (Eastern Economic Corridor):</strong><br>• ฉะเชิงเทรา | ชลบุรี | ระยอง<br>• ดึงดูดอุตสาหกรรมแห่งอนาคต<br>• มีความเสี่ยงอุบัติเหตุอุตสาหกรรม → <strong>ปภ. รับผิดชอบ</strong><br><br><strong>รัฐบาลดิจิทัล:</strong> บริการภาครัฐออนไลน์ | e-Government | Open Data | GFMIS<br><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> ปภ. ใช้เทคโนโลยี EWS (Early Warning System) แจ้งเตือนภัยล่วงหน้า"
        },
        {
          type: "highlight-box",
          color: "amber",
          title: "🌍 [จำง่าย: 17 เป้าหมาย 3 มิติ = คน+โลก+เงิน] SDGs",
          content: "<strong>SDGs = Sustainable Development Goals</strong><br>= 17 เป้าหมายการพัฒนาอย่างยั่งยืนของ UN ปี 2030<br><br><strong>3 มิติ:</strong><br>① <strong>เศรษฐกิจ</strong> — ขจัดความยากจน สร้างงาน<br>② <strong>สังคม</strong> — การศึกษา สุขภาพ ความเสมอภาค<br>③ <strong>สิ่งแวดล้อม</strong> — ลดโลกร้อน ปกป้องระบบนิเวศ<br><br><strong>SDGs ที่เชื่อมโยงกับงาน ปภ. โดยตรง:</strong><br><table style='width:100%;border-collapse:collapse;font-size:0.82rem;margin:8px 0;'><tr style='background:#1a1a2e;color:#fff;'><th style='padding:8px;border:1px solid #333;'>SDG</th><th style='padding:8px;border:1px solid #333;text-align:left;'>เป้าหมาย</th></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'><strong>SDG 1</strong></td><td style='padding:8px;border:1px solid #ddd;'>ขจัดความยากจน (ภัยพิบัติทำคนจนเพิ่ม)</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;'><strong>SDG 11</strong></td><td style='padding:8px;border:1px solid #ddd;'>เมืองและชุมชนยั่งยืน (เมืองเผชิญภัยพิบัติ)</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'><strong>SDG 13</strong></td><td style='padding:8px;border:1px solid #ddd;'><strong>รับมือการเปลี่ยนแปลงสภาพภูมิอากาศ ← หน้าที่หลักของ ปภ.</strong></td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;'><strong>SDG 17</strong></td><td style='padding:8px;border:1px solid #ddd;'>ความร่วมมือระหว่างประเทศ (ช่วยเหลือข้ามพรมแดน)</td></tr></table><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> SDG 13 = ภารกิจหลักของ ปภ. ทุกระดับ ต้องรายงาน HLPF ทุก 4 ปี"
        },
        {
          type: "highlight-box",
          color: "teal",
          title: "⚠️ [จำง่าย: ติดกับดัก-แก้ยาก-ทำไม่ได้] ความท้าทาย 4 ด้าน",
          content: "<table style='width:100%;border-collapse:collapse;font-size:0.82rem;'><tr style='background:#1a1a2e;color:#fff;'><th style='padding:8px;border:1px solid #333;'>ด้าน</th><th style='padding:8px;border:1px solid #333;text-align:left;'>ปัญหา</th></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'><strong>💰 เศรษฐกิจ</strong></td><td style='padding:8px;border:1px solid #ddd;'>• <strong>Middle Income Trap</strong> — ติดรายได้ปานกลาง<br>• ความสามารถแข่งขันต่ำ<br>• พึ่งพาการท่องเที่ยวสูงเกินไป</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;'><strong>👥 สังคม</strong></td><td style='padding:8px;border:1px solid #ddd;'>• ประชากรสูงอายุเพิ่มเร็ว<br>• ความเหลื่อมล้ำระหว่างพื้นที่<br>• คุณภาพการศึกษาไม่เท่าเทียม</td></tr><tr style='background:#faf8f4;'><td style='padding:8px;border:1px solid #ddd;'><strong>🌍 สิ่งแวดล้อม</strong></td><td style='padding:8px;border:1px solid #ddd;'>• <strong>PM 2.5</strong> + มลพิษทางอากาศ<br>• การเปลี่ยนแปลงสภาพภูมิอากาศ<br>• การจัดการขยะและน้ำเสีย</td></tr><tr style='background:#f5f0e8;'><td style='padding:8px;border:1px solid #ddd;'><strong>🏛️ การเมือง/ราชการ</strong></td><td style='padding:8px;border:1px solid #ddd;'>• <strong>Corruption</strong> — ไทยอันดับ ~100/180 ประเทศ (CPI)<br>• ราชการยังไม่ทันสมัยเท่าที่ควร</td></tr></table><br><strong>🔗 ความเชื่อมโยง ปภ.:</strong> ทุกความท้าทาย → เพิ่มความเสี่ยงภัยพิบัติ → ปภ. ต้องเตรียมรับมือทุกด้าน"
        }
      ]
    }
  ],
  vocabulary: [
    { groupTitle: "🏛️ คำศัพท์หลัก — การเมือง เศรษฐกิจ สังคม", terms: [
      { term: "ประชาธิปไตย", eng: "Democracy", category: "การเมือง", def: "ระบอบการปกครองที่อำนาจสูงสุดเป็นของประชาชน ใช้อำนาจผ่านตัวแทนที่เลือกตั้งขึ้นมา ยึดหลักสิทธิเสรีภาพและความเสมอภาค", mnemonic: "ประ-ชา-ธิปไตย = ประชามีอำนาจสูงสุด (ไม่ใช่กษัตริย์หรือเผด็จการ)" },
      { term: "รัฐธรรมนูญ", eng: "Constitution", category: "การเมือง", def: "กฎหมายสูงสุดของประเทศ กำหนดโครงสร้างการปกครอง อำนาจหน้าที่ของสถาบัน และสิทธิของประชาชน รัฐธรรมนูญไทยปัจจุบัน พ.ศ. 2560", mnemonic: "รัฐธรรมนูญ 2560 = ฉบับปัจจุบัน กฎหมายใดขัดแย้งใช้ไม่ได้" },
      { term: "อำนาจอธิปไตย", eng: "Sovereignty", category: "การเมือง", def: "อำนาจสูงสุดในการปกครองรัฐ เป็นของปวงชนชาวไทย ใช้ผ่าน 3 ฝ่าย: นิติบัญญัติ บริหาร ตุลาการ", mnemonic: "อธิปไตย = อำนาจสูงสุด 3 ฝ่าย: นิติ-บริหาร-ตุลา" },
      { term: "ธรรมาภิบาล", eng: "Good Governance", category: "นโยบาย", def: "หลักการบริหารกิจการบ้านเมืองที่ดี 6 ประการ: นิติธรรม คุณธรรม โปร่งใส มีส่วนร่วม รับผิดชอบ คุ้มค่า (พ.ศ. 2542)", mnemonic: "จำ: นิ-คุ-โป-มี-รับ-คุ้ม (6 หลัก ไม่ใช่ 5 หรือ 7)" },
      { term: "GDP", eng: "Gross Domestic Product", category: "เศรษฐกิจ", def: "ผลิตภัณฑ์มวลรวมในประเทศ = มูลค่าสินค้าและบริการทั้งหมดที่ผลิตในประเทศใน 1 ปี วัดขนาดและการเติบโตของเศรษฐกิจ", mnemonic: "GDP = ขนาดของกินของประเทศ" },
      { term: "เงินเฟ้อ", eng: "Inflation", category: "เศรษฐกิจ", def: "ภาวะที่ระดับราคาสินค้าโดยทั่วไปสูงขึ้นอย่างต่อเนื่อง กำลังซื้อของเงินลดลง ธปท.ดูแลให้อัตราเงินเฟ้ออยู่ในกรอบ 1-3%", mnemonic: "เงินเฟ้อ = เงินซื้อของได้น้อยลง" },
      { term: "เศรษฐกิจพอเพียง", eng: "Sufficiency Economy Philosophy", category: "เศรษฐกิจ", def: "ปรัชญาของรัชกาลที่ 9 มี 3 ห่วง (พอประมาณ มีเหตุผล มีภูมิคุ้มกัน) และ 2 เงื่อนไข (ความรู้ คุณธรรม) นำสู่ความสมดุลและยั่งยืน", mnemonic: "3 ห่วง = พอ-เหตุ-ภูมิ | 2 เงื่อนไข = รู้-ดี" },
      { term: "ค่า Gini Coefficient", eng: "Gini Coefficient", category: "สังคม", def: "ดัชนีวัดความเหลื่อมล้ำด้านรายได้ 0=เสมอภาคสมบูรณ์ / 1=ไม่เสมอภาค ไทยอยู่ ~0.43 ถือว่าสูง", mnemonic: "Gini ไทย 0.43 = ยังเหลื่อมอยู่" },
      { term: "สังคมผู้สูงอายุ", eng: "Aging/Aged Society", category: "สังคม", def: "Aging = 10-20% | Aged = >20% | Super Aged = >28% ไทยเข้าสู่ Aged Society แล้ว", mnemonic: "10-20-28 = เริ่ม-สูงวัย-สุงวัย" },
      { term: "ASEAN", eng: "Association of SE Asian Nations", category: "ต่างประเทศ", def: "ก่อตั้ง 8 ส.ค. 2510 ที่กรุงเทพฯ (สำนักเลขาฯ อยู่กรุงจาการ์ตา) มี 10 ประเทศ 3 เสาหลัก: การเมือง เศรษฐกิจ สังคม-วัฒนธรรม", mnemonic: "ก่อตั้งที่กรุงเทพฯ แต่สำนักงานที่จาการ์ตา" },
      { term: "BCG Economy", eng: "Bio-Circular-Green Economy", category: "เศรษฐกิจ", def: "โมเดลเศรษฐกิจใหม่ของไทย: B=ชีวภาพ C=หมุนเวียน G=สีเขียว มุ่งสู่ความยั่งยืน ตั้งเป้า Carbon Neutrality 2050 Net Zero 2065", mnemonic: "BCG = ชีว-หมุนเวียน-สีเขียว (≠ เศรษฐกิจพอเพียง)" },
      { term: "ยุทธศาสตร์ชาติ 20 ปี", eng: "National Strategy 20 Years", category: "นโยบาย", def: "แผนระยะยาว 2561-2580 มี 6 ด้าน ม.แ.ค.ส.ร.ป. (มั่นคง-แข่งขัน-คน-สิ่งแวดล้อม-เสมอภาค-รัฐ) เป้าหมายไทยพัฒนาแล้ว", mnemonic: "6 ด้าน: ม-แ-ค-ส-ร-ป" },
      { term: "SDGs", eng: "Sustainable Development Goals", category: "ต่างประเทศ", def: "17 เป้าหมายการพัฒนาอย่างยั่งยืนของ UN ปี 2030 ครอบคลุม 3 มิติ: เศรษฐกิจ สังคม สิ่งแวดล้อม ทุกประเทศร่วมมือกัน", mnemonic: "17 เป้าหมาย 3 มิติ = คน+โลก+เงิน" },
      { term: "EEC", eng: "Eastern Economic Corridor", category: "เศรษฐกิจ", def: "ระเบียงเศรษฐกิจพิเศษภาคตะวันออก ครอบคลุม ฉะเชิงเทรา ชลบุรี ระยอง ดึงดูดอุตสาหกรรม S-Curve ใหม่ เสี่ยงอุบัติเหตุ → ปภ.รับผิดชอบ", mnemonic: "EEC = ตะวันออก 3 จังหวัด: ฉะ-ชล-ระ" },
      { term: "HDI", eng: "Human Development Index", category: "สังคม", def: "ดัชนีพัฒนามนุษย์ วัดจาก 3 มิติ: อายุยืน (สุขภาพ) + การศึกษา + รายได้ ไทยอยู่กลุ่ม HDI ระดับสูง", mnemonic: "HDI = สุข+เรียน+รวย" },
      { term: "นโยบายสาธารณะ", eng: "Public Policy", category: "นโยบาย", def: "แนวทางรัฐจัดการปัญหาสาธารณะ มีวงจร 5 ระยะ: วาระ → กำหนด → ตัดสินใจ → ปฏิบัติ → ประเมิน", mnemonic: "วาระ→เลือก→ตัดสินใจ→ทำ→วัด" },
      { term: "Middle Income Trap", eng: "Middle Income Trap", category: "เศรษฐกิจ", def: "กับดักรายได้ปานกลาง ประเทศติดอยู่ไม่ยกระดับเป็นรายได้สูง ไทยพยายามหลุดผ่าน Thailand 4.0 และ BCG", mnemonic: "ติดกับดัก = ไม่โตต่อ" },
      { term: "Carbon Neutrality / Net Zero", eng: "Carbon Neutrality / Net Zero", category: "สังคม", def: "Carbon Neutrality = ปล่อย=ดูดซับ (2050) | Net Zero = ปล่อย<ดูดซับ (2065) ไทยตั้งเป้าทั้งสอง", mnemonic: "2050 CN = เท่ากัน | 2065 NZ = ปล่อยน้อยกว่าดูด" },
      { term: "Thailand 4.0", eng: "Thailand 4.0", category: "เศรษฐกิจ", def: "ขับเคลื่อนเศรษฐกิจด้วยนวัตกรรม+เทคโนโลยี เปลี่ยนจาก Made in Thailand → Innovation from Thailand ผ่านอุตสาหกรรม S-Curve ใหม่", mnemonic: "Thailand 4.0 = Made in Thailand → Innovation from Thailand" },
      { term: "CPI", eng: "Corruption Perception Index", category: "สังคม", def: "ดัชนีชี้วัดการรับรู้การทุจริต (Transparency International) คะแนนสูง = ทุจริตน้อย ไทยอยู่อันดับ ~100 จาก 180 ประเทศ", mnemonic: "CPI สูง = ซื่อสัตย์ (ไทยยังอันดับ 100 = ยังทุจริตมาก)" }
    ]}
  ],
  additionalSections: [
    {
      navIcon: "🔢",
      navLabel: "ตัวเลขน่ารู้",
      icon: "🔢",
      title: "📌 ตัวเลขน่ารู้ — ตัวเลขที่ต้องจำ",
      description: "รวบรวมตัวเลขสำคัญจากการเมือง เศรษฐกิจ และสังคมไทย",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "🏛️ ตัวเลขการเมือง",
          content: "<strong>2560</strong> = ปีรัฐธรรมนูญฉบับปัจจุบัน<br><strong>500</strong> = จำนวน ส.ส. (400 แบ่งเขต + 100 บัญชีรายชื่อ)<br><strong>200</strong> = จำนวน ส.ว. (สรรหา)<br><strong>36</strong> = รัฐมนตรีสูงสุด (รวมนายกฯ)<br><strong>6</strong> = หลักธรรมาภิบาล<br><strong>3</strong> = อำนาจอธิปไตย (นิติบัญญัติ บริหาร ตุลาการ)"
        },
        {
          type: "highlight-box",
          color: "blue",
          title: "💰 ตัวเลขเศรษฐกิจ",
          content: "<strong>~55-60%</strong> = สัดส่วน GDP จากภาคบริการ<br><strong>~30-35%</strong> = สัดส่วน GDP จากภาคอุตสาหกรรม<br><strong>~8-10%</strong> = สัดส่วน GDP จากภาคเกษตร<br><strong>1-3%</strong> = กรอบเงินเฟ้อที่ ธปท. ดูแล<br><strong>2050</strong> = เป้าหมาย Carbon Neutrality ของไทย<br><strong>2065</strong> = เป้าหมาย Net Zero ของไทย"
        },
        {
          type: "highlight-box",
          color: "amber",
          title: "👥 ตัวเลขสังคม",
          content: "<strong>>20%</strong> = เกณฑ์ Aged Society (ผู้สูงอายุเกิน 20%)<br><strong>~0.43</strong> = ค่า Gini Coefficient ของไทย (สูง)<br><strong>17</strong> = จำนวน SDGs ของ UN<br><strong>10</strong> = สมาชิก ASEAN<br><strong>8 ส.ค. 2510</strong> = วันก่อตั้ง ASEAN<br><strong>20 ปี</strong> = ระยะเวลายุทธศาสตร์ชาติ (2561-2580)"
        },
        {
          type: "highlight-box",
          color: "teal",
          title: "📅 ปีสำคัญ",
          content: "<strong>2510</strong> = ก่อตั้ง ASEAN<br><strong>2542</strong> = ระเบียบสำนักนายกฯ ว่าด้วยธรรมาภิบาล<br><strong>2560</strong> = รัฐธรรมนูญฉบับปัจจุบัน / พ.ร.บ.ยุทธศาสตร์ชาติ<br><strong>2561</strong> = เริ่มใช้ยุทธศาสตร์ชาติ 20 ปี<br><strong>2580</strong> = สิ้นสุดยุทธศาสตร์ชาติ<br><strong>2030</strong> = เป้าหมาย SDGs ของ UN"
        }
      ]
    },
    {
      navIcon: "⚖️",
      navLabel: "จุดพลิดจำ",
      icon: "⚖️",
      title: "⚖️ จุดพลิดและความเข้าใจผิดที่พบบ่อย",
      description: "รวบรวมจุดหลอกจากแนวข้อสอบ การเมือง เศรษฐกิจ สังคม",
      blocks: [
        {
          type: "highlight-box",
          color: "rose",
          title: "❌ พลิดจำ #1: ธรรมาภิบาล 6 หลัก ไม่ใช่ 5 หรือ 7",
          content: "<strong>❌ ผิด:</strong> ธรรมาภิบาลมี 8 หลัก (จำสับสนกับของ UN)<br><strong>✅ ถูก:</strong> ธรรมาภิบาลของไทยมี <strong>6 หลัก</strong> ตามระเบียบสำนักนายกรัฐมนตรี พ.ศ. 2542<br><br><strong>💡 จำง่าย: นิ-คุ-โป-มี-รับ-คุ้ม</strong><br>① นิติธรรม ② คุณธรรม ③ โปร่งใส ④ มีส่วนร่วม ⑤ รับผิดชอบ ⑥ คุ้มค่า"
        },
        {
          type: "highlight-box",
          color: "rose",
          title: "❌ พลิดจำ #2: ASEAN สำนักงานที่จาการ์ตา ไม่ใช่กรุงเทพฯ",
          content: "<strong>❌ ผิด:</strong> สำนักเลขาธิการ ASEAN อยู่ที่กรุงเทพฯ<br><strong>✅ ถูก:</strong> สำนักเลขาธิการ ASEAN อยู่ที่ <strong>กรุงจาการ์ตา ประเทศอินโดนีเซีย</strong><br><br><strong>💡 จำง่าย:</strong> ก่อตั้ง<strong>ที่กรุงเทพฯ</strong> แต่สำนักงาน<strong>ที่จาการ์ตา</strong><br><strong>วันก่อตั้ง:</strong> 8 สิงหาคม 2510 (ปฏิญญาบางกอก)"
        },
        {
          type: "highlight-box",
          color: "rose",
          title: "❌ พลิดจำ #3: BCG ≠ เศรษฐกิจพอเพียง",
          content: "<strong>❌ ผิด:</strong> BCG Economy กับเศรษฐกิจพอเพียงเป็นสิ่งเดียวกัน<br><strong>✅ ถูก:</strong> เป็น<strong>คนละนโยบาย</strong> แต่<strong>สอดคล้องกัน</strong><br><br><strong>BCG:</strong> โมเดลเศรษฐกิจของรัฐบาล มุ่งพัฒนาเศรษฐกิจผ่านชีวภาพ-หมุนเวียน-สีเขียว<br><br><strong>เศรษฐกิจพอเพียง (SEP):</strong> ปรัชญาส่วนบุคคล/ชุมชน เน้นความพอประมาณ มีเหตุผล มีภูมิคุ้มกัน<br><br><strong>ร่วมกัน:</strong> ความยั่งยืนและความสมดุล"
        },
        {
          type: "highlight-box",
          color: "rose",
          title: "❌ พลิดจำ #4: ปภ. สังกัดกระทรวงมหาดไทย ไม่ใช่สาธารณสุข",
          content: "<strong>❌ ผิด:</strong> กรมป้องกันและบรรเทาสาธารณภัย (ปภ.) อยู่ในกระทรวงสาธารณสุข<br><strong>✅ ถูก:</strong> ปภ. อยู่ใน <strong>กระทรวงมหาดไทย</strong><br><br><strong>กระทรวงมหาดไทยดูแล:</strong><br>• กรมส่งเสริมการปกครองท้องถิ่น<br>• กรมการปกครอง<br>• กรมที่ดิน<br>• <strong>กรมป้องกันและบรรเทาสาธารณภัย (ปภ.)</strong><br>• กรมพัฒนาชุมชน<br>• กรมโยธาธิการและผังเมือง"
        }
      ]
    },
    {
      navIcon: "🔗",
      navLabel: "แผนที่ความเชื่อมโยง",
      icon: "🔗",
      title: "🔗 แผนที่ความเชื่อมโยง: การเมือง-เศรษฐกิจ-สังคม → งาน ปภ.",
      description: "บทสรุปว่าความรู้แต่ละด้านเชื่อมกับงานป้องกันและบรรเทาสาธารณภัยอย่างไร",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "🗺️ ทำไมต้องรู้การเมือง-เศรษฐกิจ-สังคม?",
          content: "<strong>ทุกเนื้อหาในบทนี้เชื่อมโยงกับงาน ปภ. โดยตรง:</strong><br><br><strong>🏛️ การเมือง:</strong><br>• ปภ.สังกัดกระทรวงมหาดไทย (โครงสร้างราชการ)<br>• เลือกตั้ง → ปภ. เตรียมความพร้อมด้านความมั่นคง<br>• ยุทธศาสตร์ชาติ ด้าน 1 = ปภ.เป็นหน่วยหลักความมั่นคงพลเรือน<br><br><strong>💰 เศรษฐกิจ:</strong><br>• ภัยพิบัติทำ GDP ตก → ปภ. กู้ฟื้น<br>• ภัยพิบัติกระทบท่องเที่ยว/อุตสาหกรรม → ปภ.เยียวยา<br>• ภัยพิบัติข้ามพรมแดน → ปภ. ประสาน FTA/อาเซียน<br><br><strong>👥 สังคม:</strong><br>• ผู้สูงอายุ = กลุ่มเปราะบางที่สุดต่อภัยพิบัติ<br>• ความเหลื่อมล้ำ → คนจนกระทบหนักกว่า → ปภ.ช่วยเหลือพิเศษ<br>• วัฒนธรรมหลากหลาย → ปภ.ต้องเคารพในการช่วยเหลือ<br><br><strong>📋 นโยบายสาธารณะ:</strong><br>• วงจรนโยบาย = กรอบทำงานของ ปภ.<br>• ธรรมาภิบาล = มาตรฐานการทำงานของ ปภ. ทุกระดับ<br>• กระจายอำนาจ → ท้องถิ่นรับผิดชอบภัยพิบัติระดับแรก<br><br><strong>🌏 ความสัมพันธ์ระหว่างประเทศ:</strong><br>• ASEAN → AHA Centre ช่วยเหลือภัยพิบัติระดับภูมิภาค<br>• UNDRR/UNOCHA/ADB → แหล่งความช่วยเหลือระหว่างประเทศ<br><br><strong>🔮 แนวโน้ม:</strong><br>• ภัยพิบัติเพิ่มขึ้นจาก PM2.5/ภูมิอากาศ → ปภ. รับมือ<br>• BCG/SDGs → นโยบายลดความเสี่ยงภัยพิบัติ<br>• Thailand 4.0 → EWS แจ้งเตือนล่วงหน้า<br><br><strong>💡 จำง่าย: ทุกอย่างเชื่อมกับ ปภ. เพราะ ปภ. = หน่วยงานที่ทำงานข้ามศาสตร์มากที่สุดของไทย</strong>"
        }
      ]
    }
  ]
};
