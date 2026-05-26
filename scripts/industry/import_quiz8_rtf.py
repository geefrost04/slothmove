"""Rebuild factory_act.questions.js from data/Quiz_8.rtf (embedded HTML + answer key)."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
RTF_PATH = ROOT / "data" / "Quiz_8.rtf"
OUT_PATH = ROOT / "factory_act.questions.js"

THAI_TO_IX = {"ก": 0, "ข": 1, "ค": 2, "ง": 3}


def decode_rtf_text(fragment: str) -> str:
    fragment = fragment.replace("\\uc0", "")
    chars: list[str] = []
    i = 0
    high: int | None = None

    while i < len(fragment):
        mu = re.match(r"\\u(-?\d+)\s?", fragment[i:])
        if mu:
            v = int(mu.group(1))
            if v < 0:
                v += 65536
            if 0xD800 <= v <= 0xDBFF:
                high = v
                i += len(mu.group(0))
                continue
            if high is not None and 0xDC00 <= v <= 0xDFFF:
                cp = ((high - 0xD800) << 10) + (v - 0xDC00) + 0x10000
                chars.append(chr(cp))
                high = None
                i += len(mu.group(0))
                continue
            if high is not None:
                chars.append(chr(high))
                high = None
            chars.append(chr(v))
            i += len(mu.group(0))
            continue
        if high is not None and fragment[i] != "\\":
            chars.append(chr(high))
            high = None

        if fragment[i] == "\\" and i + 1 < len(fragment):
            if fragment[i + 1] in "{}":
                chars.append(fragment[i + 1])
                i += 2
                continue
            cw = re.match(r"\\([a-zA-Z]+)(?:-?\d+)? ?", fragment[i:])
            if cw:
                i += len(cw.group(0))
                continue
        chars.append(fragment[i])
        i += 1
    if high is not None:
        chars.append(chr(high))
    return "".join(chars)


def parse_rtf(path: Path) -> list[dict]:
    text = path.read_text(encoding="utf-8", errors="replace")
    text = re.sub(r"\\\s*\r?\n", "", text)

    ans_map: dict[int, str] = {}
    for m in re.finditer(r"<div class=\"ans-item\">(\d+)\.\s*<b>(.*?)</b>", text):
        qi = int(m.group(1))
        letter = decode_rtf_text(m.group(2)).strip().split()[0]
        ans_map[qi] = letter
    if len(ans_map) != 100:
        raise ValueError(f"expected 100 answers, got {len(ans_map)}")

    start = text.find('<div class="q-box">')
    end = text.find('<div id="answer-key">')
    if start < 0 or end < 0:
        raise ValueError("missing q-box / answer-key in RTF")
    html_raw = text[start:end]

    questions: list[dict] = []
    for qb in re.finditer(
        r"<div class=\"q-box\">\s*<div class=\"question\">([\s\S]*?)</div>\s*"
        r"<ul class=\"choices\">\s*((?:<li>\s*</li>|<li[^>]*>[\s\S]*?</li>\s*)+)</ul>",
        html_raw,
    ):
        dq_dec = decode_rtf_text(qb.group(1)).strip()
        lis = re.findall(r"<li>([\s\S]*?)</li>", qb.group(2))
        if len(lis) != 4:
            continue
        opts = []
        for li in lis:
            lt = decode_rtf_text(li).strip()
            lt = re.sub(r"^[กขคง]\s*\.\s*", "", lt.strip())
            opts.append(lt)
        mm = re.match(r"^\s*\d+\.\s*", dq_dec)
        qtext = dq_dec[mm.end() :].strip() if mm else dq_dec
        questions.append({"q": qtext, "o": opts})

    if len(questions) != 100:
        raise ValueError(f"expected 100 questions, parsed {len(questions)}")

    bank: list[dict] = []
    for idx, row in enumerate(questions, start=1):
        letter = ans_map[idx]
        ai = THAI_TO_IX.get(letter)
        if ai is None:
            raise ValueError(f"q{idx}: bad answer letter {letter!r}")
        bank.append({"q": row["q"], "o": row["o"], "a": ai})
    return bank


def main() -> None:
    bank = parse_rtf(RTF_PATH)
    OUT_PATH.write_text(
        "/** 100 MCQ imported from data/Quiz_8.rtf — run import_quiz8_rtf.py to regenerate */\n"
        "const factoryActQuestions = "
        + json.dumps(bank, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print("wrote", OUT_PATH.name, len(bank), "questions")


if __name__ == "__main__":
    main()
