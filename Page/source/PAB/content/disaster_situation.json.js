// Content data for: สถานการณ์สาธารณภัยและการบริหารจัดการภัยพิบัติ
window.DISASTER_SITUATION_DATA = {
  title: "สถานการณ์สาธารณภัยและการบริหารจัดการภัยพิบัติ",
  titleShort: "สถานการณ์สาธารณภัย",
  subtitle: "วงจรจัดการภัย · กรอบเซนได · ภัยพิบัติประเภทต่างๆ · ระบบเตือนภัย",
  badgeLabel: "สำหรับเตรียมสอบภาค ข. ปภ.",
  emoji: "🌍",
  stats: { chapters: 7, parts: 20, vocab: 16, quiz: 50 },
  PAGE_TYPE: "knowledge",
  id: "disaster_situation",
  knowledgeSections: [
    {
      navIcon: "⚙️",
      navLabel: "พื้นฐานความเสี่ยงภัย",
      icon: "⚙️",
      title: "ส่วนที่ 1 · พื้นฐานความเสี่ยงภัยพิบัติ (Hazard, Exposure, Vulnerability)",
      description: "สมการความเสี่ยง · Hazard ≠ Disaster · Resilience",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "⚙️ สมการความเสี่ยงภัยพิบัติ",
          content: "<strong>ความเสี่ยงจากภัยพิบัติ (Disaster Risk)</strong><br>= <strong>Hazard × Exposure × Vulnerability</strong><br><br><strong>1. Hazard (ภัย)</strong><br>ปรากฏการณ์หรือเหตุการณ์ที่อาจก่อให้เกิดอันตราย เช่น แผ่นดินไหว พายุ น้ำท่วม<br><br><strong>2. Exposure (ความล่อแหลม)</strong><br>จำนวนคน ทรัพย์สิน หรือโครงสร้างพื้นฐานที่อยู่ในพื้นที่เสี่ยงภัย<br><br><strong>3. Vulnerability (ความเปราะบาง)</strong><br>ความอ่อนแอทางกายภาพและสังคม เช่น บ้านไม่แข็งแรง กลุ่มผู้สูงอายุ/เด็ก/คนพิการ"
        },
        {
          type: "highlight-box",
          color: "blue",
          title: "🚫 Hazard ≠ Disaster — จุดสำคัญที่ต้องเข้าใจ",
          content: "<strong>Hazard (ภัย)</strong> = ปรากฏการณ์ทางธรรมชาติหรือมนุษย์<br>เช่น แผ่นดินไหวขนาด 7.0 — ยังไม่ใช่ภัยพิบัติ<br><br><strong>Disaster (ภัยพิบัติ)</strong> = เมื่อภัยส่งผลกระทบ<strong>รุนแรงจนชุมชนไม่สามารถรับมือได้ด้วยทรัพยากรของตนเอง</strong><br><br><strong>Resilience (ความพยายาม)</strong><br>= ความสามารถในการ<strong>ปรับตัวและฟื้นคืน</strong>จากผลกระทบได้อย่างรวดเร็ว<br><strong>≠ ป้องกันไม่ให้เกิด</strong> (นั่นคือ Prevention)"
        },
        {
          type: "highlight-box",
          color: "teal",
          title: "📌 กลุ่มเปราะบาง (Vulnerable Groups)",
          content: "<strong>กลุ่มเปราะบาง</strong> = กลุ่มคนที่ต้องได้รับการดูแลเป็นพิเศษในภัยพิบัติ<br><br>• <strong>ผู้สูงอายุ</strong> — เคลื่อนย้ายช้า ต้องการยาและอุปกรณ์พิเศษ<br>• <strong>เด็ก</strong> — ต้องการผู้ดูแล ยังไม่สามารถช่วยตัวเองได้<br>• <strong>คนพิการ</strong> — ต้องการอุปกรณ์ช่วยเคลื่อนย้าย<br>• <strong>ผู้มีรายได้น้อย</strong> — ขาดทรัพยากรสำรอง ฟื้นตัวช้า<br>• <strong>ผู้ไม่รู้หนังสือ/ภาษา</strong> — เข้าถึงข้อมูลเตือนภัยไม่ได้<br><br><strong>หลักการ:</strong> แผนอพยพและศูนย์พักพิงต้อง<strong>ออกแบบให้รองรับกลุ่มเปราะบางเป็นลำดับแรก</strong>"
        }
      ]
    },
    {
      navIcon: "🔄",
      navLabel: "วงจรการจัดการภัย",
      icon: "🔄",
      title: "ส่วนที่ 2 · วงจรการจัดการสาธารณภัย (Disaster Management Cycle)",
      description: "3 ระยะ: Before / During / After · Build Back Better",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "🔄 วงจร 3 ระยะของการจัดการภัยพิบัติ",
          content: "<strong>ระยะที่ 1 — ก่อนเกิดภัย (Before Disaster)</strong><br>• <strong>Prevention (การป้องกัน)</strong> — ลดความเสี่ยงไม่ให้เกิดภัย<br>• <strong>Mitigation (การบรรเทา)</strong> — ลดผลกระทบหากเกิดภัยขึ้น<br>• <strong>Preparedness (การเตรียมความพร้อม)</strong> — ฝึกซ้อม จัดเตรียมทรัพยากร<br><br><strong>ระยะที่ 2 — ขณะเกิดภัย (During Disaster)</strong><br>• <strong>Response (การตอบโต้)</strong> — กู้ภัย อพยพ ให้ความช่วยเหลือ<br>• <strong>Search and Rescue (ค้นหาและกู้ภัย)</strong><br><br><strong>ระยะที่ 3 — หลังเกิดภัย (After Disaster)</strong><br>• <strong>Recovery (การฟื้นฟู)</strong> — ซ่อมแซม สร้างใหม่<br>• <strong>Reconstruction (การก่อสร้างใหม่)</strong>"
        },
        {
          type: "highlight-box",
          color: "amber",
          title: "🏗️ Build Back Better — แนวคิดสำคัญในระยะฟื้นฟู",
          content: "<strong>Build Back Better (BBB)</strong><br>= การสร้างให้<strong>ดีกว่าเดิม</strong>เพื่อลดความเสี่ยงที่จะเกิดความเสียหายซ้ำในอนาคต<br><br><strong>ต้องทำ 2 อย่าง:</strong><br>① <strong>แข็งแรงขึ้น</strong> — สร้างโครงสร้างที่ทนทานต่อภัยธรรมชาติมากขึ้น<br>② <strong>ปลอดภัยกว่าเดิม</strong> — เลือกพื้นที่ที่เสี่ยงน้อยกว่า ออกแบบชุมชนให้รองรับ<br><br><strong>จุดออกสอบ:</strong> BBB อยู่ในระยะ <strong>Recovery</strong> (ฟื้นฟู) ไม่ใช่ Prevention หรือ Mitigation<br><br><strong>ตัวอย่าง:</strong> หลังสึนามิ 2011 ญี่ปุ่นสร้างกำแพงกันคลื่นสูงขึ้น + อาคารหลบภัยที่ได้มาตรฐาน"
        },
        {
          type: "highlight-box",
          color: "teal",
          title: "📊 Damage and Loss Assessment (DaLA)",
          content: "<strong>DaLA</strong> = การประเมินความเสียหายและความสูญเสีย<br><br><strong>วัตถุประสงค์:</strong><br>① เป็นฐานในการ<strong>วางแผนฟื้นฟู</strong><br>② ใช้ในการ<strong>ร้องขอความช่วยเหลือจากนานาชาติ</strong><br>③ กำหนด<strong>งบประมาณกู้ชีพเยียวยา</strong><br><br><strong>องค์ประกอบ:</strong><br>• ความเสียหาย (Damage) = ทรัพย์สินที่เสียหายโดยตรง<br>• ความสูญเสีย (Loss) = ผลกระทบทางเศรษฐกิจที่เกิดขึ้นหลังภัย (เช่น รายได้ที่หายไป การเติบโตที่ชะลอตัว)"
        }
      ]
    },
    {
      navIcon: "🌐",
      navLabel: "กรอบเซนได",
      icon: "🌐",
      title: "ส่วนที่ 3 · กรอบการดำเนินงานเซนได (Sendai Framework 2015-2030)",
      description: "4 ลำดับความสำคัญ · ประเทศไทยกับ Sendai Framework",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "🌐 Sendai Framework — 4 ลำดับความสำคัญ",
          content: "<strong>กรอบการดำเนินงานเซนได (Sendai Framework)</strong><br>ข้อตกลงระหว่างประเทศ 2015-2030 ว่าด้วยการลดความเสี่ยงภัยพิบัติ<br>ประเทศไทยเป็นภาคีสมาชิก<br><br><strong>ลำดับที่ 1:</strong> ทำความเข้าใจความเสี่ยงภัยพิบัติ<br><strong>ลำดับที่ 2:</strong> เสริมสร้างการจัดการความเสี่ยงภัยพิบัติ<br><strong>ลำดับที่ 3:</strong> ลงทุนในการลดความเสี่ยงภัยพิบัติ<br><strong>ลำดับที่ 4:</strong> เพิ่มพูนความพร้อมรับมือเพื่อตอบโต้ได้อย่างมีประสิทธิภาพ<br><br><strong>UNDRR</strong> (สำนักงานลดความเสี่ยงภัยพิบัติแห่งสหประชาชาติ) เป็นหน่วยงานหลักในการขับเคลื่อน Sendai Framework"
        },
        {
          type: "highlight-box",
          color: "amber",
          title: "⚠️ จุดออกสอบบ่อย — Sendai Framework",
          content: "<strong>Q: ลำดับความสำคัญของ Sendai Framework ลำดับที่ 1 คืออะไร?</strong><br><strong>A: ทำความเข้าใจความเสี่ยงภัยพิบัติ</strong><br>(ไม่ใช่ การเตรียมความพร้อม หรือ การลงทุน)<br><br><strong>อย่าสับสนกับ:</strong><br>• Prevention = การป้องกันไม่ให้เกิด<br>• Mitigation = การบรรเทาผลกระทบ<br>• Preparedness = การเตรียมพร้อม<br>• Response = การตอบโต้ขณะเกิดภัย<br><br><strong>จำได้ง่าย:</strong> Sendai มาก่อน = ต้อง<strong>เข้าใจก่อน</strong>แล้วค่อยทำอะไรต่อไป"
        }
      ]
    },
    {
      navIcon: "🔥",
      navLabel: "ภัยพิบัติประเภทต่างๆ",
      icon: "🔥",
      title: "ส่วนที่ 4 · ภัยพิบัติประเภทต่างๆ และลักษณะสำคัญ",
      description: "ภัยธรรมชาติ 5 ประเภท · ภัยจากมนุษย์ · การปฏิบัติเมื่อเกิดภัย",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "🌊 ภัยธรรมชาติ — ประเภทและลักษณะเด่น",
          content: "<strong>อุทกภัย (น้ำท่วม)</strong><br>• ภัยที่เกิดขึ้น<strong>บ่อยที่สุด</strong>และส่งผลกระทบทาง<strong>เศรษฐกิจมากที่สุด</strong>ในรอบ 20 ปี<br>• น้ำท่วมฉับพลัน (Flash Flood) = เกิดภายใน 6 ชม. หลังฝนตกหนัก มักพบในพื้นที่ลาดเชิงเขา<br><br><strong>แผ่นดินไหว</strong><br>• เกิดจากกระบวนการภายในเปลือกโลก<br>• ขนาด ≥ 7.0 จะเป็น<strong>อันตราย</strong><br>• เกิดใต้ทะเลจะก่อให้เกิด <strong>สึนามิ</strong> ต่อเนื่อง<br><br><strong>สึนามิ</strong><br>• เคลื่อนที่เร็วมาก (เครื่องบินไล่ทัน)<br>• สัญญาณเตือน: น้ำทะเลลดลงผิดปกติอย่างรวดเร็ว<br>• การปฏิบัติ: <strong>รีบไปที่สูงหรืออาคารหลบภัยสึนามิ</strong>"
        },
        {
          type: "highlight-box",
          color: "blue",
          title: "🌀 พายุหมุนเขตร้อน — ชื่อเรียกต่างกันตามภูมิศาสตร์",
          content: "<strong>พายุหมุนเขตร้อน</strong> — เกิดเหนือน้ำทะเลที่อุ่น > 26.5°C<br><br><strong>ไต้ฝุ่น (Typhoon)</strong><br>= พายุที่เกิดใน<strong>มหาสมุทรแปซิฟิกตะวันตก</strong> (รวมทะเลจีนใต้ น่านฝั่งอ่าวไทย)<br><br><strong>ไซโคลน (Cyclone)</strong><br>= พายุที่เกิดใน<strong>มหาสมุทรอินเดีย</strong><br><br><strong>เฮอริเคน (Hurricane)</strong><br>= พายุที่เกิดใน<strong>มหาสมุทรแอตแลนติก</strong><br><br><strong>ปรากฏการณ์ลานีญา (La Nina):</strong><br>ลมค้ามีกำลังแรงขึ้น → พัดมวลน้ำอุ่นมาฝั่งเอเชียมากขึ้น → <strong>ฝนตกหนัก อุทกภัยในไทยมากขึ้น</strong><br><br><strong>ปรากฏการณ์เอลนีโญ (El Nino):</strong><br>อุณหภูมิน้ำทะเลเย็นลง → ฝนทิ้งช่วง → <strong>ภัยแล้ง ความร้อนสูง</strong>"
        },
        {
          type: "highlight-box",
          color: "amber",
          title: "🌫️ PM 2.5 และฝุ่นละออง — สาเหตุในภาคเหนือไทย",
          content: "<strong>สาเหตุ PM 2.5 ในภาคเหนือ:</strong><br>① <strong>การเผาในที่โล่ง</strong> — เผาป่า เผาอ้อย วิถีเกษตรเดิม<br>② <strong>สภาพภูมิประเทศเป็นแอ่งกระทะ</strong> — ลำน้ำล้อมรอบ ลมพัดพาฝุ่นออกยาก<br>③ <strong>อากาศนิ่ง</strong> (Inversion Layer) — ฝุ่นไม่สามารถลอยตัวขึ้นสูงได้<br><br><strong>PM 2.5 คืออะไร:</strong><br>อนุภาคขนาดเล็กกว่า 2.5 ไมโครเมตร สามารถเข้าไปถึงถุงลมปอดและเข้าเส้นเลือดได้<br><br><strong>ผลกระทบ:</strong><br>• โรคทางเดินหายใจ • มะเร็งปอด • หัวใจ • ความตายก่อนวัยอันควร"
        },
        {
          type: "highlight-box",
          color: "teal",
          title: "📋 สรุปภัยพิบัติประเภทต่างๆ",
          content: "<strong>ภัยจากธรรมชาติ:</strong><br>• อุทกภัย / น้ำท่วมฉับพลัน<br>• แผ่นดินไหว / สึนามิ<br>• พายุหมุนเขตร้อน (ไต้ฝุ่น/ไซโคลน/เฮอริเคน)<br>• ดินโคลนถล่ม (สัญญาณ: น้ำในลำห้วยเพิ่มสูง สีขุ่น มีซากไม้ลงมา)<br>• ภัยแล้ง (เกิด พ.ย.-เม.ย. ฤดูแล้งของไทย)<br>• PM 2.5 / หมอกควัน<br><br><strong>ภัยจากมนุษย์ / เทคโนโลยี:</strong><br>• ภัยทางชีวภาพ (โรคระบาด เช่น โควิด-19)<br>• ภัยทางเคมี (ก๊าซพิษรั่วไหลจากโรงงาน)<br>• อัคคีภัย (ห้ามใช้น้ำดับไฟฟ้า Class C — ใช้ CO2 หรือผงเคมีแห้งแทน)<br>• Hotspot = จุดความร้อนจากดาวเทียม (MODIS/VIIRS)"
        }
      ]
    },
    {
      navIcon: "📡",
      navLabel: "ระบบเตือนภัยล่วงหน้า",
      icon: "📡",
      title: "ส่วนที่ 5 · ระบบเตือนภัยล่วงหน้า (Early Warning System) และการสื่อสารวิกฤต",
      description: "4 เสาหลัก · Crisis Communication · TTX vs Full-Scale Exercise",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "📡 4 เสาหลักของระบบเตือนภัยล่วงหน้า (UNDRR)",
          content: "<strong>ระบบเตือนภัยล่วงหน้าที่มีประสิทธิภาพต้องประกอบด้วย 4 เสาหลัก:</strong><br><br><strong>เสาที่ 1 — ความรู้เรื่องความเสี่ยง</strong><br>การประเมินและทำความเข้าใจความเสี่ยงที่อาจเกิดขึ้น<br><br><strong>เสาที่ 2 — การเฝ้าระวังและการแจ้งเตือน</strong><br>ระบบตรวจวัด สถานีเตือน ดาวเทียม ข้อมูลสมุทรศาสตร์<br><br><strong>เสาที่ 3 — การสื่อสารข้อมูลเตือนภัย</strong><br>การส่งข้อมูลไปยังผู้รับอย่างทันท่วงที ครอบคลุม ทั่วถึง<br><br><strong>เสาที่ 4 — ขีดความสามารถในการตอบโต้</strong><br>ความพร้อมของผู้รับเหตุในการตอบสนอง มีแผนอพยพที่ชัดเจน"
        },
        {
          type: "highlight-box",
          color: "teal",
          title: "📻 Crisis Communication — การสื่อสารในภาวะวิกฤต",
          content: "<strong>หลักการสำคัญ:</strong><br>• <strong>รวดเร็ว</strong> — แจ้งทันทีเมื่อมีข้อมูลพร้อม<br>• <strong>ถูกต้อง</strong> — มีแหล่งข้อมูลเดียว (Single Information Source)<br>• <strong>เป็นทิศทางเดียวกัน</strong> — ทุกช่องทางต้องสื่อสารข้อมูลเดียวกัน<br><br><strong>ข้อความเตือนต้องมี 3 องค์ประกอบ:</strong><br>① <strong>เกิดอะไรขึ้น</strong> — ชื่อภัย ตำแหน่ง ขนาด/ความรุนแรง<br>② <strong>ประชาชนต้องทำอะไร</strong> — หนีไปไหน ทำอย่างไร<br>③ <strong>สถานการณ์สิ้นสุดเมื่อใด</strong> — เมื่อไหร่ปลอดภัย<br><br><strong>ป้องกัน Fake News:</strong> มีช่องทางให้ประชาชนตรวจสอบข้อมูลได้โดยตรงจากแหล่งทางการ"
        },
        {
          type: "highlight-box",
          color: "amber",
          title: "🏢 การซ้อมแผน — TTX vs Full-Scale vs Functional",
          content: "<strong>Table Top Exercise (TTX)</strong><br>การฝึกบนโต๊ะ ประชุมปรึกษาหารือตามแผนที่มีอยู่<br><strong>ไม่ลงพื้นที่จริง</strong> — เหมาะสำหรับตรวจสอบข้อบกพร่องของแผน<br><br><strong>Full-Scale Exercise</strong><br>การฝึก<strong>ปฏิบัติจริงในพื้นที่จริง</strong> ทุกหน่วยงานเข้าร่วมเต็มรูปแบบ<br>ต้องลงพื้นที่ + ใช้ทรัพยากรจริง<br><br><strong>Functional Exercise</strong><br>การฝึก<strong>ปฏิบัติบางส่วนของระบบ</strong><br>เช่น ฝึกระบบสื่อสารเท่านั้น ไม่ต้องซ้อมทั้งหมด<br><br><strong>จุดสอบ:</strong> TTX = <strong>ฝึกบนโต๊ะ ไม่ลงพื้นที่</strong>"
        }
      ]
    },
    {
      navIcon: "🏢",
      navLabel: "ICS และองค์กรระหว่างประเทศ",
      icon: "🏢",
      title: "ส่วนที่ 6 · ระบบบัญชาการเหตุการณ์ (ICS) และองค์กรระหว่างประเทศ",
      description: "Unity of Command · UNDRR · WHO · SOP",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "🏢 Incident Command System (ICS)",
          content: "<strong>ICS</strong> = ระบบบัญชาการเหตุการณ์<br>โครงสร้างมาตรฐานสำหรับ<strong>ปฏิบัติการฉุกเฉิน</strong>ขณะเกิดภัยพิบัติ<br><br><strong>หลัก Unity of Command</strong><br>= มี<strong>ผู้บัญชาการคนเดียว</strong>ที่มีอำนาจตัดสินใจสูงสุด<br>ทุกหน่วยงานที่มาร่วมปฏิบัติต้องรายงานผ่านผู้บัญชาการเดียวกัน<br><br><strong>ข้อดีของ ICS:</strong><br>• ลดความสับสนในการสั่งการ<br>• มีโครงสร้างชัดเจน: แผนปฏิบัติการ / การส่งกำลังบำรุง / การเงิน<br>• ทำงานข้ามหน่วยงานได้อย่างมีมาตรฐานเดียวกัน"
        },
        {
          type: "highlight-box",
          color: "blue",
          title: "📋 SOP — Standard Operating Procedures",
          content: "<strong>SOP</strong> = ขั้นตอนปฏิบัติมาตรฐาน<br><br><strong>หน้าที่ของ SOP ในภัยพิบัติ:</strong><br>• กำหนด<strong>ใครทำอะไร เมื่อไหร่ อย่างไร</strong><br>• เจ้าหน้าที่ทุกคนเข้าใจตรงกัน<br>• ลดความสับสนในภาวะวิกฤตที่มีความกดดันสูง<br><br><strong>องค์ประกอบ SOP ที่ดี:</strong><br>① ผู้รับผิดชอบชัดเจน<br>② ขั้นตอนละเอียดเป็นลำดับ<br>③ ระยะเวลาที่ชัดเจน<br>④ สัญลักษณ์/รหัสประจำหน่วย<br>⑤ ช่องทางสื่อสารที่กำหนดไว้ล่วงหน้า"
        },
        {
          type: "highlight-box",
          color: "teal",
          title: "🌍 องค์กรระหว่างประเทศที่เกี่ยวข้อง",
          content: "<strong>UNDRR</strong> (สำนักงานลดความเสี่ยงภัยพิบัติแห่งสหประชาชาติ)<br>หน่วยงานหลักในการขับเคลื่อน <strong>Sendai Framework</strong><br>ประสานงานระหว่างประเทศเพื่อลดความเสี่ยงภัยพิบัติ<br><br><strong>WHO</strong> (องค์การอนามัยโลก)<br>ด้านสุขภาพและโรคระบาด<br>ให้คำแนะนำด้านการเตรียมพร้อมต่อภัยทางชีวภาพ<br><br><strong>UNESCO</strong><br>ด้านการศึกษาและวัฒนธรรม<br>สนับสนุนการฟื้นฟูโบราณสถานหลังภัยพิบัติ<br><br><strong>IFRC</strong> (สมาพันธ์กาชาดและเสี้ยววงเดือน)<br>ประสานการช่วยเหลือระหว่างประเทศ<br>เข้าถึงพื้นที่ได้เร็วที่สุดในภัยพิบัติใหญ่"
        }
      ]
    },
    {
      navIcon: "🏔️",
      navLabel: "การปฏิบัติและแนวคิดเฉพาะ",
      icon: "🏔️",
      title: "ส่วนที่ 7 · การปฏิบัติเมื่อเกิดภัยและแนวคิดสำคัญ",
      description: "Drop Cover Hold on · ถุงยังชีพ 72 ชม. · NbS · CBDRM",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "🏠 การปฏิบัติเมื่อเกิดภัยประเภทต่างๆ",
          content: "<strong>เกิดแผ่นดินไหว — Drop, Cover, Hold on</strong><br>① <strong>หมอบ</strong>ใต้เฟอร์นิเจอร์ที่แข็งแรง (โต๊ะ เตียง)<br>② <strong>คลุม</strong> ศีรษะและลำตัวด้วยแขน<br>③ <strong>เกาะ</strong>ขาโต๊ะไว้แน่นจนกว่าสั่นจะหยุด<br><strong>ห้าม:</strong> ใช้ลิฟต์ / วิ่งลงบันไดขณะสั่น<br><br><strong>ได้รับแจ้งเตือนสึนามิ</strong><br>① รีบ<strong>ไปที่สูงหรืออาคารหลบภัยสึนามิ</strong><br>② ห้ามเก็บของ ห้ามไปดูน้ำ<br>③ อยู่ห่างจากชายฝั่งจนกว่าจะประกาศปลอดภัย<br><br><strong>เกิดน้ำท่วมฉับพลัน (Flash Flood)</strong><br>① หนีไปที่สูงทันที อย่าข้ามน้ำที่กำลังไหลแรง<br>② ห้ามเข้าไปในถ้ำ/ลำห้วย<br>③ สัญญาณเตือน: น้ำเพิ่มสูงเร็ว สีขุ่น มีเสียงดังผิดปกติ"
        },
        {
          type: "highlight-box",
          color: "amber",
          title: "🎒 ถุงยังชีพ 72 ชั่วโมง — ต้องมีอะไรบ้าง",
          content: "<strong>ถุงยังชีพ 72 ชม.</strong><br>อุปกรณ์ที่ครอบครัวควรเตรียมไว้สำหรับอพยพฉุกเฉิน<br>เพียงพอสำหรับ<strong>3 วัน</strong>โดยไม่ต้องพึ่งความช่วยเหลือจากภายนอก<br><br><strong>สิ่งที่ต้องมี:</strong><br>• <strong>น้ำดื่ม</strong> — อย่างน้อย 3 ลิตร/คน/วัน<br>• <strong>อาหารแห้ง</strong> — พร้อมทาน ไม่ต้องปรุง (บิ๊กเกอร์ ข้าวเร็ว คุกกี้)<br>• <strong>ยาสามัญ</strong> — ยาแก้ปวด ยาฆ่าเชื้อ ผ้าพันแผล<br>• <strong>ไฟฉาย + ถ่านไฟฉาย</strong> — ไฟดับใช้ได้<br>• <strong>นกหวีด</strong> — ส่งสัญญาณขอความช่วยเหลือ<br>• <strong>เอกสารสำคัญ</strong> — บัตรประชาชน สมุดบัญชี ยา<br><br><strong>สิ่งที่ไม่จำเป็น:</strong><br>❌ เครื่องใช้ไฟฟ้าขนาดใหญ่ (ไฟดับใช้ไม่ได้)<br>❌ ของมีค่าหรือเงินสดมากเกินไป"
        },
        {
          type: "highlight-box",
          color: "teal",
          title: "🌿 Nature-Based Solutions (NbS) และ CBDRM",
          content: "<strong>NbS (Nature-Based Solutions)</strong><br>ใช้<strong>ระบบนิเวศธรรมชาติ</strong>เป็นเกราะป้องกันภัยพิบัติแทนโครงสร้างทางวิศวกรรมเพียงอย่างเดียว<br><br><strong>ตัวอย่าง NbS:</strong><br>• ปลูก<strong>ป่าชายเลน</strong>กันสึนามิ — ดูดซับพลังคลื่นได้ 70%<br>• สร้าง<strong>แก้มลิง</strong> (Wetland) รับน้ำท่วม — กักเก็บน้ำไว้ชั่วคราว<br>• ปลูกป่า<strong>ต้นน้ำ</strong> ลดดินโคลนถล่ม<br><br><strong>CBDRM (Community-Based Disaster Risk Management)</strong><br>ให้<strong>ชุมชนเป็นฐาน</strong>ในการจัดการภัยพิบัติ<br>• ชุมชนวิเคราะห์ความเสี่ยงของตนเอง<br>• ทำ<strong>แผนที่เสี่ยงภัย (Hazard Map)</strong><br>• กำหนด<strong>จุดปลอดภัย</strong>และเส้นทางอพยพ<br>• ฝึกซ้อม<strong>รับมือกันเอง</strong>ก่อนที่ความช่วยเหลือจากภายนอกจะมาถึง"
        }
      ]
    }
  ],
  vocabularyGroups: [
    { groupTitle: "🌍 คำศัพท์หลัก — สถานการณ์สาธารณภัยและการจัดการภัยพิบัติ", terms: [
      { term: "Hazard (ภัย)", eng: "Hazard", def: "ปรากฏการณ์หรือเหตุการณ์ที่อาจก่อให้เกิดอันตราย เช่น แผ่นดินไหว พายุ น้ำท่วม ยังไม่เป็น Disaster จนกว่าจะส่งผลกระทบรุนแรงเกินขีดความสามารถของชุมชน" },
      { term: "Exposure (ความล่อแหลม)", eng: "Exposure", def: "จำนวนคน ทรัพย์สิน หรือโครงสร้างพื้นฐานที่อยู่ในพื้นที่เสี่ยงภัย — บ้านริมตลิ่งมี Exposure สูงกว่าบ้านบนที่สูง" },
      { term: "Vulnerability (ความเปราะบาง)", eng: "Vulnerability", def: "ความอ่อนแอทางกายภาพและสังคม เช่น บ้านไม่แข็งแรง ผู้สูงอายุ เด็ก คนพิการ ผู้มีรายได้น้อย — เป็นปัจจัยที่ทำให้ความสูญเสียรุนแรงขึ้น" },
      { term: "Disaster Risk (ความเสี่ยงจากภัยพิบัติ)", eng: "Disaster Risk", def: "ผลรวมของ Hazard × Exposure × Vulnerability หรือค่าคาดหมายของความสูญเสียที่อาจเกิดขึ้นจากภัยพิบัติในอนาคต" },
      { term: "Resilience (ความสามารถในการฟื้นคืน)", eng: "Resilience", def: "ความสามารถของระบบหรือชุมชนในการปรับตัวและฟื้นตัวจากผลกระทบได้อย่างรวดเร็วหลังภัยพิบัติ — ≠ ป้องกันไม่ให้เกิด" },
      { term: "Build Back Better (BBB)", eng: "Build Back Better", def: "แนวคิดในระยะฟื้นฟู (Recovery) ว่าการสร้างใหม่หลังภัยพิบัติต้องทำให้แข็งแรงและปลอดภัยกว่าเดิม เพื่อลดความเสี่ยงที่จะเกิดความเสียหายซ้ำ — ไม่ใช่ Prevention หรือ Mitigation" },
      { term: "Sendai Framework 2015-2030", eng: "Sendai Framework", def: "ข้อตกลงระหว่างประเทศว่าด้วยการลดความเสี่ยงภัยพิบัติ มี 4 ลำดับความสำคัญ นำโดย 'ทำความเข้าใจความเสี่ยง' เป็นลำดับแรก UNDRR เป็นหน่วยงานหลักในการขับเคลื่อน" },
      { term: "Early Warning System (EWS)", eng: "Early Warning System", def: "ระบบเตือนภัยล่วงหน้าต้องมี 4 เสาหลัก: ความรู้เสี่ยง → เฝ้าระวัง → สื่อสาร → ตอบโต้ (UNDRR) — ขาดเสาหลักใดเสาหลักหนึ่ง = ระบบไม่สมบูรณ์" },
      { term: "ICS (Incident Command System)", eng: "Incident Command System", def: "ระบบบัญชาการเหตุการณ์ มีหลัก Unity of Command (ผู้บัญชาการคนเดียว) ช่วยลดความสับสนในการปฏิบัติงานในภาวะวิกฤต มีโครงสร้างชัดเจน: แผน/การส่งกำลัง/การเงิน" },
      { term: "DaLA (Damage and Loss Assessment)", eng: "Damage and Loss Assessment", def: "การประเมินความเสียหายและความสูญเสียหลังเกิดภัย เป็นฐานในการวางแผนฟื้นฟูและร้องขอความช่วยเหลือจากนานาชาติ" },
      { term: "Drop, Cover, Hold on", eng: "Drop, Cover, Hold on", def: "วิธีปฏิบัติเมื่อเกิดแผ่นดินไหว: หมอบ → คลุมศีรษะและลำตัว → เกาะขาโต๊ะไว้แน่น ห้ามใช้ลิฟต์หรือวิ่งลงบันไดขณะสั่น" },
      { term: "NbS (Nature-Based Solutions)", eng: "Nature-Based Solutions", def: "การใช้ระบบนิเวศธรรมชาติเป็นเกราะป้องกันภัย เช่น ปลูกป่าชายเลนกันสึนามิ สร้างแก้มลิงรับน้ำท่วม ยั่งยืนกว่าสิ่งก่อสร้างทางวิศวกรรม" },
      { term: "CBDRM", eng: "Community-Based Disaster Risk Management", def: "การจัดการภัยพิบัติโดยชุมชนเป็นฐาน ให้ชุมชนวิเคราะห์ความเสี่ยง ทำแผนที่เสี่ยงภัย กำหนดจุดปลอดภัย และฝึกซ้อมรับมือกันเองก่อนความช่วยเหลือจากภายนอกมาถึง" },
      { term: "ถุงยังชีพ 72 ชม.", eng: "72-Hour Emergency Kit", def: "ถุงอุปกรณ์ฉุกเฉินเพียงพอสำหรับ 3 วัน โดยไม่ต้องพึ่งความช่วยเหลือจากภายนอก ประกอบด้วย น้ำ อาหารแห้ง ยาสามัญ ไฟฉาย นกหวีด เอกสารสำคัญ — ไม่จำเป็นต้องมีเครื่องใช้ไฟฟ้าขนาดใหญ่" },
      { term: "TTX (Table Top Exercise)", eng: "Table Top Exercise", def: "การฝึกบนโต๊ะ ไม่ลงพื้นที่จริง เหมาะสำหรับตรวจสอบข้อบกพร่องของแผน — ต่างจาก Full-Scale Exercise ที่ต้องลงพื้นที่จริง" },
      { term: "La Nina / El Nino", eng: "La Nina / El Nino", def: "La Nina = ลมค้ามีกำลังแรงขึ้น → ฝนตกหนักในไทย → อุทกภัย | El Nino = น้ำทะเลเย็น → ฝนทิ้งช่วง → ภัยแล้ง ความร้อนสูง — ทั้งสองส่งผลตรงข้ามกัน" }
    ]}
  ],
  additionalSections: [
    {
      navIcon: "🔢",
      navLabel: "ตัวเลขน่ารู้",
      icon: "🔢",
      title: "📌 ตัวเลขน่ารู้ — ตัวเลขที่ต้องจำ",
      description: "รวบรวมตัวเลขสำคัญจากสถานการณ์สาธารณภัยและการจัดการภัยพิบัติ",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "📊 ตัวเลขเกี่ยวกับความเสี่ยง",
          content: "<strong>3 ตัว</strong> = องค์ประกอบความเสี่ยง (Hazard × Exposure × Vulnerability)<br><strong>3 ระยะ</strong> = วงจรจัดการภัย (Before / During / After)<br><strong>4 ลำดับ</strong> = Sendai Framework 2015-2030<br><strong>4 เสาหลัก</strong> = ระบบเตือนภัยล่วงหน้า (รู้เสี่ยง / เฝ้าระวัง / สื่อสาร / ตอบโต้)<br><strong>7.0</strong> = ขนาดแผ่นดินไหวที่เป็นอันตรายเริ่มต้น<br><strong>6 ชม.</strong> = Flash Flood = น้ำท่วมฉับพลันภายใน 6 ชม."
        },
        {
          type: "highlight-box",
          color: "blue",
          title: "📅 ตัวเลขเกี่ยวกับเวลา",
          content: "<strong>72 ชม.</strong> = ถุงยังชีพฉุกเฉิน (พอสำหรับ 3 วันโดยไม่ต้องพึ่งความช่วยเหลือ)<br><strong>2015-2030</strong> = ระยะเวลาของ Sendai Framework<br><strong>พ.ย.-เม.ย.</strong> = ฤดูแล้งของประเทศไทย (ช่วงเกิดภัยแล้ง)<br><strong>26.5°C</strong> = อุณหภูมิน้ำทะเลที่พายุหมุนเขตร้อนก่อตัวได้"
        },
        {
          type: "highlight-box",
          color: "amber",
          title: "🌍 ตัวเลขเกี่ยวกับประเทศไทย",
          content: "<strong>อุทกภัย</strong> = ภัยที่เกิดขึ้นบ่อยที่สุดในรอบ 20 ปี<br><strong>ภัยทางเศรษฐกิจมากที่สุด</strong> = อุทกภัย (สูงกว่าทุกภัยรวมกันในรอบ 20 ปี)<br><strong>ภาคเหนือ</strong> = พื้นที่เผชิญ PM 2.5 รุนแรงที่สุด (แอ่งกระทะ + การเผา + อากาศนิ่ง)<br><strong>อันดามัน</strong> = ชายฝั่งที่เสี่ยงสึนามิสูงสุดของไทย"
        },
        {
          type: "highlight-box",
          color: "teal",
          title: "🔑 ตัวเลขอื่นๆ",
          content: "<strong>ญี่ปุ่น</strong> = ต้นแบบด้านจัดการแผ่นดินไหวและสึนามิ<br><strong>ถ้ำหลวง</strong> = บทเรียนด้าน Crisis Management + Multi-agency Coordination<br><strong>70%</strong> = พลังคลื่นที่ป่าชายเลนดูดซับได้<br><strong>ปี 2011</strong> = ปีสึนามิญี่ปุ่น (หลังแผ่นดินไหวขนาด 9.1)"
        }
      ]
    },
    {
      navIcon: "⚖️",
      navLabel: "จุดพลิดจำ",
      icon: "⚖️",
      title: "⚖️ จุดพลิดและความเข้าใจผิดที่พบบ่อย",
      description: "รวบรวมจุดหลอกจากแนวข้อสอบเก่า",
      blocks: [
        {
          type: "highlight-box",
          color: "navy",
          title: "❌ ความเข้าใจผิด: Hazard = Disaster",
          content: "<strong>❌ ผิด:</strong> แผ่นดินไหว = ภัยพิบัติ<br><strong>✅ ถูก:</strong> แผ่นดินไหว = <strong>Hazard</strong> (ภัย) — จะกลายเป็น Disaster ได้ต้องส่งผลกระทบ<strong>รุนแรงจนชุมชนไม่สามารถรับมือได้ด้วยทรัพยากรของตนเอง</strong><br><br><strong>จำได้ง่าย:</strong><br>Hazard = <strong>ภัยที่จะเกิด</strong> / Disaster = <strong>ภัยที่เกิดแล้วส่งผลกระทบหนัก</strong>"
        },
        {
          type: "highlight-box",
          color: "amber",
          title: "❌ ความเข้าใจผิด: Build Back Better = ป้องกันไม่ให้เกิดซ้ำ",
          content: "<strong>❌ ผิด:</strong> BBB = สร้างให้ไม่เกิดภัยอีก<br><strong>✅ ถูก:</strong> BBB = สร้างให้<strong>แข็งแรงและปลอดภัยกว่าเดิมเมื่อเกิดภัยขึ้นอีก</strong><br><br><strong>BBB อยู่ในระยะใด?</strong><br>→ <strong>Recovery (ฟื้นฟู)</strong> ไม่ใช่ Prevention/Mitigation<br><br><strong>ตัวอย่าง:</strong> หลังสึนามิ 2011 ญี่ปุ่นสร้างกำแพงกันคลื่นสูงขึ้น + อาคารหลบภัยที่ได้มาตรฐาน → <strong>แข็งแรงกว่าเดิม</strong> แม้จะเกิดภัยอีกได้"
        },
        {
          type: "highlight-box",
          color: "rose",
          title: "❌ ความเข้าใจผิด: สึนามิใช้น้ำดับไฟได้",
          content: "<strong>❌ ผิดมาก:</strong> ใช้น้ำดับไฟไฟไฟไฟ (จะเกิดคลื่นถานำทะเลเข้ามาและทำให้สูญเสียโอกาสในการหนี)<br><strong>✅ ถูก:</strong> รีบ<strong>ไปที่สูงหรืออาคารหลบภัยสึนามิ</strong><br><br><strong>สัญญาณเตือนสึนามิ:</strong><br>• น้ำทะเล<strong>ลดลงผิดปกติอย่างรวดเร็ว</strong><br>• ได้รับแจ้งเตือนจากศูนย์เตือนภัยฯ<br><br><strong>ห้ามทำ:</strong> เก็บของ | ไปดูน้ำ | อยู่ใกล้ชายฝั่งจนกว่าจะประกาศปลอดภัย"
        },
        {
          type: "highlight-box",
          color: "teal",
          title: "✅ จำเป็นจำ: ผลกระทบตรงข้ามของ El Nino vs La Nina",
          content: "<strong>El Nino:</strong><br>อุณหภูมิน้ำทะเลเย็น → ฝนทิ้งช่วง → <strong>ภัยแล้ง ความร้อนสูง ลมมรสุมอ่อน</strong><br><br><strong>La Nina:</strong><br>ลมค้ามีกำลังแรง → พัดมวลน้ำอุ่นมาฝั่งเอเชียมากขึ้น → <strong>ฝนตกหนัก อุทกภัย ดินโคลนถล่มในไทย</strong><br><br><strong>จำง่าย:</strong><br>El <strong>N</strong>ino = <strong>N</strong>othing (ฝนไม่มา) = แล้ง<br>La <strong>N</strong>ina = <strong>N</strong>injas (ฝนมากมายเหมือนนินจา) = ฝนมาก = ท่วม"
        }
      ]
    }
  ]
};
