#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Parse 2quizPAB.rtf — HTML ทั้ง 3 ชุดในไฟล์ → national_plan.questions.js"""
import json
import re
from html.parser import HTMLParser
from pathlib import Path

RTF_PATH = Path(
    "/Users/geefrost/Documents/SlothMove/data ปภ/E1.นักวิเคราะห์นโยบายและแผนปฏิบัติการ/data/2quizPAB.rtf"
)
OUT_PATH = Path(
    "/Users/geefrost/Documents/SlothMove/Page/source/PAB/national_plan.questions.js"
)


def extract_nth_html_doc(raw: str, n: int) -> str:
    """n = 0,1,2 สำหรับ HTML ลำดับที่ 1–3 หลัง split ด้วย <!DOCTYPE html>"""
    parts = raw.split("<!DOCTYPE html>")
    if n + 1 >= len(parts):
        raise SystemExit(f"Missing HTML document index {n} (have {len(parts)-1} blocks)")
    chunk = "<!DOCTYPE html>" + parts[n + 1]
    end = chunk.find("</html>")
    if end == -1:
        raise SystemExit(f"Closing </html> not found for document {n}")
    return chunk[: end + len("</html>")]


def decode_rtf_embedded_text(s: str) -> str:
    """ถอดรหัสข้อความใน HTML ที่ถูกฝังใน RTF (ไม่ลบ \\ ทั้งหมด)."""
    s = re.sub(r"\\\r?\n", "", s)
    s = s.replace("\\{", "{").replace("\\}", "}")
    s = re.sub(r"\\\\", "\x00BACKSLASH\x00", s)
    s = re.sub(r"\\uc\d+\s?", "", s)

    def u_repl(m: re.Match) -> str:
        n = int(m.group(1))
        if n < 0:
            n += 65536
        return chr(n)

    s = re.sub(r"\\u(-?\d+)\s?", u_repl, s)

    def hex_repl(m: re.Match) -> str:
        b = int(m.group(1), 16)
        if 0x80 <= b <= 0x9F:
            return bytes([b]).decode("cp1252")
        try:
            return bytes([b]).decode("cp874")
        except UnicodeDecodeError:
            return chr(b)

    s = re.sub(r"\\'([0-9a-fA-F]{2})", hex_repl, s)
    s = s.replace("\x00BACKSLASH\x00", "\\")
    s = s.replace("\u00a0", " ")
    return s


def strip_tags(html_snippet: str) -> str:
    class P(HTMLParser):
        def __init__(self):
            super().__init__()
            self.parts = []

        def handle_data(self, data):
            self.parts.append(data)

    p = P()
    try:
        p.feed(html_snippet)
    except Exception:
        return re.sub(r"<[^>]+>", "", html_snippet)
    return "".join(p.parts).strip()


LETTER_TO_IDX = {"ก": 0, "ข": 1, "ค": 2, "ง": 3}


def parse_answer_index(correct_raw: str) -> int:
    m = re.search(r"เฉลย\s*:\s*([กขคง])", correct_raw.strip())
    if not m:
        raise ValueError(f"No answer letter in: {correct_raw[:80]}")
    return LETTER_TO_IDX[m.group(1)]


def parse_questions_from_html(text: str) -> list:
    blocks = re.split(r'<div class="question-block">', text)[1:]
    questions = []
    for block in blocks:
        qm = re.search(
            r'<div class="question">\s*(\d+)\.\s*([\s\S]*?)</div>', block
        )
        if not qm:
            continue
        qnum = int(qm.group(1))
        q_inner = qm.group(2)
        q_text = strip_tags("<div>" + q_inner + "</div>").strip()
        q_text = re.sub(r"^\d+\.\s*", "", q_text).strip()

        ulm = re.search(
            r'<ul class="choices">\s*([\s\S]*?)</ul>', block
        )
        if not ulm:
            raise SystemExit(f"No choices for block {qnum}")
        lis = re.findall(r"<li>([\s\S]*?)</li>", ulm.group(1))
        options = []
        for li in lis:
            opt = strip_tags("<span>" + li + "</span>").strip()
            opt = re.sub(r"^[กขคง]\s*\.\s*", "", opt).strip()
            options.append(opt)
        if len(options) != 4:
            raise SystemExit(f"Q{qnum}: expected 4 options, got {len(options)}")

        am = re.search(
            r'<div class="correct-answer">([\s\S]*?)</div>', block
        )
        if not am:
            raise SystemExit(f"No correct-answer for Q{qnum}")
        correct_text = strip_tags("<div>" + am.group(1) + "</div>")
        ai = parse_answer_index(correct_text)

        em = re.search(
            r'<div class="explanation">([\s\S]*?)</div>', block
        )
        expl = ""
        if em:
            expl = strip_tags("<div>" + em.group(1) + "</div>")
            expl = re.sub(r"^คำอธิบาย\s*:\s*", "", expl, flags=re.I).strip()

        questions.append(
            {
                "question": q_text,
                "choices": options,
                "answer": ai,
                "explanation": expl,
                "_n": qnum,
            }
        )

    questions.sort(key=lambda x: x["_n"])
    for i, it in enumerate(questions, 1):
        if it["_n"] != i:
            raise SystemExit(
                f"Question number mismatch in section: expected {i}, got {it['_n']}"
            )
        del it["_n"]
    return questions


def main():
    raw = RTF_PATH.read_text(encoding="utf-8", errors="replace")
    merged = []
    for doc_i in range(3):
        html_chunk = extract_nth_html_doc(raw, doc_i)
        text = decode_rtf_embedded_text(html_chunk)
        section = parse_questions_from_html(text)
        merged.extend(section)

    for idx, it in enumerate(merged, 1):
        it["tag"] = f"ข้อ {idx}"

    json_body = json.dumps(merged, ensure_ascii=False, indent=2)
    header = (
        "// แบงก์ข้อสอบจาก 2quizPAB.rtf (HTML ฝังใน RTF ทุกชุด) — generate: "
        "Page/source/PAB/_build_national_plan_questions.py\n"
        "const QUESTIONS = "
    )
    footer = (
        ";\n"
        "typeof window !== 'undefined' && (window.national_planQuestions = QUESTIONS);\n"
    )
    OUT_PATH.write_text(header + json_body + footer, encoding="utf-8")
    print(f"Wrote {len(merged)} questions to {OUT_PATH}")


if __name__ == "__main__":
    main()
