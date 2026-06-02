# Content Accuracy Verification Report
**Project:** SlothMove PAB (กรมป้องกันและบรรเทาสาธารณภัย)
**Verification Date:** 2025
**Scope:** Factual accuracy of `.json.js` content files against live web sources
**Method:** Web search + source document cross-reference

---

## Summary

| File | Status | Issues |
|---|---|---|
| `disaster_act.json.js` | FAIL | Wrong gazette publication date + missing กปภ.ช. member |
| `emergency_fund_regulation.json.js` | FAIL | Wrong announcement date + wrong ปภ. fund limit |
| `ministry_act.json.js` | PASS | Consistent |
| `volunteer_regulation.json.js` | PASS | Consistent |
| `national_disaster_plan.json.js` | PASS | Consistent |
| `budget_act.json.js` | PASS | Consistent |
| `civil_service_act.json.js` | PASS | Consistent |
| `national_plan.json.js` | PASS | Consistent |

**Total: 2 files with factual errors, 6 files consistent.**

---

## ERROR 1 — `disaster_act.json.js`

### Issue A: Wrong Gazette Publication Date

**Location:** Line 27 (section 1, highlight-box "สรุป พ.ร.บ. ป้องกันและบรรเทาสาธารณภัย พ.ศ. 2550")

**Content says:**
> "ประกาศในราชกิจจานุเบกษา ฉบับพิเศษ ลำดับที่ 116 วันที่ 6 พ.ย. 2550"

**Evidence from authoritative sources:**
- mahidol.ac.th PDF: "ประกาศในราชกิจจานุเบกษา เล่ม 124 ตอนที่ 52 ก วันที่ **7 กันยายน 2550**"
- backofficeminisite.disaster.go.th: "ประกาศในราชกิจจานุเบกษา เล่ม 124 ตอนที่ 52 ก วันที่ **7 กันยายน 2550**"
- klongyanglocal.go.th PDF: "ประกาศในราชกิจจานุเบกษา เล่ม 124 ตอนที่ 52 ก"

**Correct values:**
- Gazette date: **7 กันยายน 2550** (NOT 6 พ.ย.)
- Gazette volume: **เล่ม 124 ตอนที่ 52 ก** (NOT "ฉบับพิเศษ ลำดับที่ 116")
- Effective date: 6 พ.ย. 2550 (60 days after) — **correct**

Note: The effective date (6 พ.ย. 2550) is correctly stated but the gazette publication date is wrong AND the "ลำดับที่ 116" detail is invented — no authoritative source confirms this specific number.

---

### Issue B: กปภ.ช. Composition — Missing กรรมการ by Position

**Location:** Line 87 (section 3, highlight-box "องค์ประกอบ กปภ.ช. (มาตรา 6)")

**Content says กรรมการ includes:**
> "รัฐมนตรีว่าการกระทรวงสาธารณสุข, รัฐมนตรีว่าการกระทรวงกลาโหม, รัฐมนตรีว่าการกระทรวงเกษตรฯ, รัฐมนตรีว่าการกระทรวงอุตสาหกรรม, รัฐมนตรีว่าการกระทรวงคมนาคม"

**Evidence from authoritative sources (hydrolaw.thaiwater.net, mahidol.ac.th):**
The actual มาตรา 6 lists:
> ปลัดกระทรวงกลาโหม · ปลัดกระทรวงการพัฒนาสังคมฯ · ปลัดกระทรวงเกษตรฯ · ปลัดกระทรวงคมนาคม · ปลัดกระทรวงทรัพยากรฯ · ปลัดกระทรวงเทคโนโลยีฯ · ปลัดกระทรวงสาธารณสุข · ผู้อำนวยการสำนักงบประมาณ · ผู้บัญชาการตำรวจฯ · ผู้บัญชาการทหารสูงสุด · ผู้บัญชาการทหารบก · ผู้บัญชาการทหารเรือ · ผู้บัญชาการทหารอากาศ · เลขาธิการสภาความมั่นคงฯ · ผู้ทรงคุณวุฒิ ≤5 คน

**Problem:** The content says "รัฐมนตรีว่าการ..." but the law says **"ปลัดกระทรวง..."** (permanent secretary level, not minister level). This is a material legal distinction.

---

## ERROR 2 — `emergency_fund_regulation.json.js`

### Issue A: Wrong Announcement Date

**Location:** Line 26 (section 1, highlight-box "ประกาศ" and "บังคับใช้")

**Content says:**
> "ประกาศ: **16 ตุลาคม 2568** | บังคับใช้: 1 มกราคม 2569 (30 วันหลังประกาศ)"

**Evidence from authoritative sources:**
- audit.dsdw.go.th: "ระเบียบกระทรวงการคลัง ว่าด้วยเงินทดรองราชการ... พ.ศ. 2568" — **วันที่ประกาศ: 17 พฤศจิกายน 2568**
- finance.moph.go.th: "ระเบียบกระทรวงการคลัง ว่าด้วยเงินทดรองราชการ... พ.ศ. 2568" — **26 พ.ย. 2568** (ปีงบประมาณ)
- subsomboon.go.th PDF (ข้อ ๘): The actual ระเบียบ text lists the fund amounts — confirms the ระเบียบ exists

**Problem:** The content claims **16 ตุลาคม 2568** but authoritative government sources indicate the announcement date is **17 พฤศจิกายน 2568** (or later). The "30 วัน" claim would make the effective date ~16 พ.ย., not 1 ม.ค. 2569.

---

### Issue B: Wrong ปภ. Fund Limit — Critical Budget Error

**Location:** Lines 123, 239, 301, 134 (multiple sections — fund table and summary)

**Content says ปภ. fund = "150 ล้านบาท":**
> Row: ["กรมป้องกันและบรรเทาสาธารณภัย (ปภ.)", "**150 ล้านบาท**", "สูงสุด"]

**Evidence from authoritative source (subsomboon.go.th PDF, ข้อ ๘(๗)):**
> (๗) **กรมป้องกันและบรรเทาสาธารณภัย ๕๐,๐๐๐,๐๐๐ บาท**

The actual limit is **50,000,000 บาท (50 ล้านบาท)**, NOT 150 ล้านบาท.

This error is also reproduced in:
- Section 4 table (row for ปภ. = 150M)
- Section 7 summary table (ปภ. = 150 ล้านบาท (สูงสุด))
- Number card: `{"num": "150M", "label": "ปภ. ส่วนกลาง (สูงสุด)"}`
- Tip: "จำ 8 วงเงิน: สำนักเลขา 10 | สาธารณสุข 50 | ปภ.กลาง **150**"

**Correct fund limits (verified from ระเบียบ ข้อ ๘):**
| หน่วยงาน | วงเงิน |
|---|---|
| สำนักเลขาธิการนายกฯ | 100 ล้านบาท |
| สำนักงานปลัดกระทรวงกลาโหม | 50 ล้านบาท |
| สำนักงานปลัดกระทรวง พม. | 10 ล้านบาท |
| สำนักงานปลัดกระทรวงเกษตรฯ | 50 ล้านบาท |
| สำนักงานปลัดกระทรวงมหาดไทย | 50 ล้านบาท |
| สำนักงานปลัดกระทรวงสาธารณสุข | 10 ล้านบาท |
| **กรมป้องกันและบรรเทาสาธารณภัย** | **50 ล้านบาท** |
| สปภ.จ. แห่งละ | 20 ล้านบาท |

---

## Code Errors (Previously Reported)

### Error 3 — `count_questions.py` Path Case Mismatch
**File:** `count_questions.py:3`
**Problem:** `path = "slothmove/page/Pab"` — macOS is case-insensitive so this works locally, but will fail on case-sensitive filesystems (Linux servers, some CI environments).
**Fix:** Change to `path = "slothmove/page/PAB"`

### Error 4 — `loader.js` BASE_PATH Default
**File:** `system/loader.js:8`
**Problem:** `BASE_PATH` defaults to `"_system/"` but actual directory is `"system/"` (without underscore).
**Fix:** Change default to `"system/"`

### Error 5 — Duplicate `case 'number-cards'`
**File:** `system/loader.js:1650`
**Problem:** Dead code — second `case 'number-cards':` at line ~1650 (exact line needs confirmation).
**Fix:** Remove duplicate case.

---

## Quiz Answer Errors (Previously Reported)

**File:** `quiz_answer_errors_report.md` — 53 mismatches across 9 files.
Key pattern: `answer_index` (0-based) doesn't match the letter in `explanation`. See that report for full details.

---

## Notes

- พ.ร.บ. ปภ. 2550 fund limit of 150M in emergency_fund_regulation.json.js is also internally inconsistent — the budget content says 50M, the ระเบียบ itself says 50M, but the fund table says 150M.
- The "ลำดับที่ 116" gazette number in disaster_act is unverified — no authoritative source confirms this number.
- All other content files (ministry_act, volunteer_regulation, national_disaster_plan, budget_act, civil_service_act, national_plan) appear factually consistent with their respective source laws and regulations based on spot-check of key claims.
