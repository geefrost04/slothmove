#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Parse disaster_act PDF extract -> disaster_act.questions.js (QUESTIONS bank)."""
import json
import re
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

ROOT = Path(__file__).resolve().parent
REPO = ROOT.parent.parent.parent
PDF = REPO / "data ปภ/E1.นักวิเคราะห์นโยบายและแผนปฏิบัติการ/6.(สรุป+ข้อสอบ100+ฉบับเต็ม) พ.ร.บ.ป้องกันและบรรเทาสาธารณภัย พ.ศ. 2550 .pdf"
OUT_JS = ROOT / "disaster_act.questions.js"

LETTER_TO_IDX = {"ก": 0, "ข": 1, "ค": 2, "ง": 3}
Q_HEAD = re.compile(r"^ข้อ\s*(\d+)\.\s*(.*)$")
OPT_LINE = re.compile(r"^([กขคง])\.\s*(.*)$")
ANS1 = re.compile(r"^ข้อ\s*(\d+)\.\s*ตอบ\s*([กขคง])\.")
ANS2 = re.compile(r"^เฉลยข้อ\s*(\d+)\.\s*ตอบ\s*([กขคง])")

def read_text() -> str:
    from pypdf import PdfReader
    r = PdfReader(str(PDF))
    parts = []
    for p in r.pages:
        parts.append(p.extract_text() or "")
    return "\n".join(parts)

def normalize(s: str) -> str:
    return re.sub(r"\s+", " ", s.strip())

def parse_question_block(lines: List[str], start_i: int) -> Tuple[Optional[Dict[str, Any]], int]:
    """From lines[start_i] starting with 'ข้อ N.', return q dict and index after block."""
    m = Q_HEAD.match(lines[start_i])
    if not m:
        return None, start_i + 1
    n = int(m.group(1))
    qparts = [m.group(2).strip()]
    i = start_i + 1
    opts: dict[str, list[str]] = {"ก": [], "ข": [], "ค": [], "ง": []}
    current_letter = None
    while i < len(lines):
        line = lines[i]
        if Q_HEAD.match(line) and int(Q_HEAD.match(line).group(1)) != n:
            break
        om = OPT_LINE.match(line)
        if om:
            current_letter = om.group(1)
            opts[current_letter].append(om.group(2).strip())
            i += 1
            continue
        if current_letter:
            if line.strip() and not Q_HEAD.match(line) and not OPT_LINE.match(line):
                opts[current_letter].append(line.strip())
                i += 1
                continue
            if not line.strip():
                i += 1
                continue
        if Q_HEAD.match(line):
            break
        qparts.append(line.strip())
        i += 1
    choices = []
    for L in ("ก", "ข", "ค", "ง"):
        t = normalize(" ".join(opts[L]))
        choices.append(t)
    qtext = normalize(" ".join(qparts))
    return {"num": n, "question": qtext, "choices": choices}, i

def extract_q_regions(full: str) -> List[Tuple[int, int, int]]:
    """Return list of (start_line_index, end_line_exclusive, expected_start_num) for question lists."""
    lines = full.splitlines()
    regions = []
    # Block 1: from first 'ข้อ 1.' in quiz section to before 'เฉลยและคำอธิบาย'
    try:
        i0 = next(i for i, L in enumerate(lines) if L.strip().startswith("แนวข้อสอบ"))
    except StopIteration:
        i0 = 0
    start1 = next(i for i in range(i0, len(lines)) if Q_HEAD.match(lines[i]) and int(Q_HEAD.match(lines[i]).group(1)) == 1)
    end1 = next(i for i in range(start1, len(lines)) if "เฉลยและคำอธิบายประกอบข้อสอบ" in lines[i])
    regions.append((start1, end1, 1))
    # Block 2: ข้อ 51 — before 'เฉลยข้อสอบ (พร้อมคำอธิบายละเอียด)' or 'เฉลยข้อ 51'
    start2 = next(i for i in range(end1, len(lines)) if Q_HEAD.match(lines[i]) and int(Q_HEAD.match(lines[i]).group(1)) == 51)
    try:
        end2 = next(i for i in range(start2, len(lines)) if lines[i].strip().startswith("เฉลยข้อสอบ (พร้อมคำอธิบายละเอียด)"))
    except StopIteration:
        end2 = next(i for i in range(start2, len(lines)) if lines[i].strip().startswith("เฉลยข้อ 51."))
    regions.append((start2, end2, 51))
    return regions

def parse_all_questions(full: str) -> Dict[int, Dict]:
    lines = full.splitlines()
    regions = extract_q_regions(full)
    by_num: Dict[int, Dict] = {}
    for start, end, _ in regions:
        i = start
        while i < end:
            if Q_HEAD.match(lines[i]):
                q, ni = parse_question_block(lines, i)
                if q and all(q["choices"]):
                    by_num[q["num"]] = {"question": q["question"], "choices": q["choices"]}
                i = ni
            else:
                i += 1
    return by_num

def parse_answers_block1(lines: List[str], start: int, end: int) -> Dict[int, Tuple[str, str]]:
    """Return num -> (letter, explanation tail)."""
    out: Dict[int, Tuple[str, str]] = {}
    text = "\n".join(lines[start:end])
    parts = re.split(r"(?=^ข้อ\s*\d+\.\s*ตอบ\s*[กขคง]\.)", text, flags=re.MULTILINE)
    for part in parts:
        part = part.strip()
        if not part:
            continue
        m = ANS1.match(part.split("\n")[0])
        if not m:
            continue
        num = int(m.group(1))
        letter = m.group(2)
        rest = part[m.end() :].strip()
        exp = ""
        if "อธิบาย:" in rest:
            exp = rest.split("อธิบาย:", 1)[1].strip()
            exp = re.sub(r"\s+", " ", exp)
        out[num] = (letter, exp)
    return out

def parse_answers_block2(lines: List[str], start: int, end: int) -> Dict[int, Tuple[str, str]]:
    out: Dict[int, Tuple[str, str]] = {}
    text = "\n".join(lines[start:end])
    parts = re.split(r"(?=^เฉลยข้อ\s*\d+\.\s*ตอบ\s*[กขคง]\.?)", text, flags=re.MULTILINE)
    for part in parts:
        part = part.strip()
        if not part:
            continue
        m = ANS2.match(part.split("\n")[0])
        if not m:
            continue
        num = int(m.group(1))
        letter = m.group(2)
        rest = part[m.end() :].strip()
        exp = ""
        if "อธิบาย:" in rest:
            exp = rest.split("อธิบาย:", 1)[1].strip()
            exp = re.sub(r"\s+", " ", exp)
        out[num] = (letter, exp)
    return out

def main():
    full = read_text()
    lines = full.splitlines()
    qs = parse_all_questions(full)

    # PDF typo: ข้อ 45 มี "ค." ซ้ำ ไม่มี "ข." — แก้ให้ครบ 4 ช่องตามเฉลย (ตอบ ก.)
    if 45 not in qs:
        qs[45] = {
            "question": (
                "ผู้ใดแต่งเครื่องแบบอาสาสมัครโดยไม่มีสิทธิเพื่อให้คนอื่นเชื่อว่าตนเป็นอาสาสมัครในขณะเกิดภัย มีโทษอย่างไร"
            ),
            "choices": [
                "จำคุกไม่เกิน 3 เดือน หรือปรับไม่เกิน 6,000 บาท",
                "จำคุกไม่เกิน 1 ปี หรือปรับไม่เกิน 20,000 บาท",
                "จำคุกไม่เกิน 2 ปี หรือปรับไม่เกิน 40,000 บาท",
                "ปรับไม่เกิน 2,000 บาท",
            ],
        }

    # answer regions
    i_ans1 = next(i for i, L in enumerate(lines) if "เฉลยและคำอธิบายประกอบข้อสอบ" in L)
    i_ans1_end = next(i for i in range(i_ans1, len(lines)) if Q_HEAD.match(lines[i]) and int(Q_HEAD.match(lines[i]).group(1)) == 51)
    ans1 = parse_answers_block1(lines, i_ans1, i_ans1_end)

    i_ans2 = next(i for i, L in enumerate(lines) if L.strip().startswith("เฉลยข้อ 51.") or L.strip().startswith("เฉลยข้อสอบ (พร้อมคำอธิบายละเอียด)"))
    if "เฉลยข้อสอบ" in lines[i_ans2] and not lines[i_ans2].strip().startswith("เฉลยข้อ 51"):
        i_ans2 = next(i for i in range(i_ans2, len(lines)) if lines[i].strip().startswith("เฉลยข้อ 51."))
    i_ans2_end = len(lines)
    ans2 = parse_answers_block2(lines, i_ans2, i_ans2_end)

    answers = {**ans1, **ans2}

    missing_q = [n for n in range(1, 101) if n not in qs]
    missing_a = [n for n in range(1, 101) if n not in answers]
    if missing_q:
        print("WARN missing questions:", missing_q[:20], "count", len(missing_q))
    if missing_a:
        print("WARN missing answers:", missing_a[:20], "count", len(missing_a))

    rows = []
    for n in range(1, 101):
        if n not in qs or n not in answers:
            continue
        letter, exp = answers[n]
        ans_idx = LETTER_TO_IDX[letter]
        ch = qs[n]["choices"]
        if len(set(ch)) < 4:
            print("WARN duplicate choices Q", n)
        rows.append({
            "question": qs[n]["question"],
            "choices": ch,
            "answer": ans_idx,
            "explanation": exp,
            "tag": f"ข้อ {n}",
        })

    header = """// พ.ร.บ. ป้องกันและบรรเทาสาธารณภัย พ.ศ. 2550 — ข้อสอบปรนัย 100 ข้อ
// ดึงจากเอกสารสรุป/ข้อสอบในแฟ้ม E1 (สกัดจาก PDF)
// รูปแบบเดียวกับ budget_act.questions.js

"""
    body = "const QUESTIONS = " + json.dumps(rows, ensure_ascii=False, indent=2) + ";\n"
    OUT_JS.write_text(header + body, encoding="utf-8")
    print("Wrote", OUT_JS, "items:", len(rows))


if __name__ == "__main__":
    main()
