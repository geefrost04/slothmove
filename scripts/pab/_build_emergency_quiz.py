#!/usr/bin/env python3
# Parse _pdf_emergency_extract.txt -> _emergency_bank.json (intermediate)
import json
import re

path = "/Users/geefrost/Documents/SlothMove/Page/source/PAB/_pdf_emergency_extract.txt"
with open(path, encoding="utf-8") as f:
    raw = f.read()

text = re.sub(r"\n--- page \d+ ---\n", "\n", raw)
opt_pat = re.compile(r"^[กขคง]\.\s*(.+)$")


def find_question_blocks(segment: str):
    pat = re.compile(r"(?m)^ข้อ\s*(\d+)\.\s*")
    matches = list(pat.finditer(segment))
    out = []
    for i, m in enumerate(matches):
        n = int(m.group(1))
        start = m.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(segment)
        out.append((n, segment[start:end]))
    return out


def parse_one_block(block: str):
    lines = block.splitlines()
    if not lines:
        return None
    first = lines[0]
    m = re.match(r"^\s*ข้อ\s*\d+\.\s*(.*)$", first)
    stem = [m.group(1).strip()] if m else [first.strip()]
    i = 1
    while i < len(lines):
        line = lines[i]
        if opt_pat.match(line.strip()):
            break
        stem.append(line.strip())
        i += 1
    stem = " ".join(s for s in stem if s).strip()
    stem = stem.replace("\u00a0", " ")
    opts = []
    while i < len(lines) and len(opts) < 4:
        line = lines[i].strip()
        om = opt_pat.match(line)
        if not om:
            return None
        opt_text = om.group(1).strip()
        i += 1
        while i < len(lines):
            nx = lines[i].strip()
            if opt_pat.match(nx):
                break
            if re.match(r"^ข้อ\s*\d+\.", nx):
                break
            opt_text += " " + nx
            i += 1
        opts.append(re.sub(r"\s+", " ", opt_text.strip()))
    if len(opts) != 4:
        return None
    return {"q": stem, "o": opts}


def parse_answer_map(answer_chunk: str) -> dict:
    out = {}
    chunk = answer_chunk.replace("\u00a0", " ")
    pat = re.compile(r"ข้อ\s*(\d+)\.\s*ตอบ\s*([ก-ง])\.\s*")
    for m in pat.finditer(chunk):
        n = int(m.group(1))
        letter = m.group(2)
        start = m.end()
        nxt = pat.search(chunk, m.end())
        block = chunk[start : nxt.start() if nxt else len(chunk)]
        expl = block.strip()
        if "คำอธิบาย:" in expl:
            expl = expl.split("คำอธิบาย:", 1)[1].strip()
        elif "คำอธิบาย" in expl:
            expl = re.split(r"คำอธิบาย\s*", expl, maxsplit=1)[-1].strip()
        nex = re.search(r"\n\s*ข้อ\s*\d+\.\s*ตอบ", expl)
        if nex:
            expl = expl[: nex.start()].strip()
        expl = re.sub(r"\s+", " ", expl)
        if len(expl) > 4000:
            expl = expl[:4000] + "…"
        out[n] = (letter, expl)
    return out


# --- regions ---
m_ans = re.search(r"\n\s*เฉลยและคำอธิบายอย่างละเอียด\s*\n", text)
if not m_ans:
    raise SystemExit("first answer section not found")
ix_q1 = text.index("ข้อ 1.")
quiz1_region = text[ix_q1 : m_ans.start()]

quiz2_marker = "(ข้อ 51 - 100)"
ix_mark = text.find(quiz2_marker)
if ix_mark < 0:
    raise SystemExit("marker 51-100 not found")
qi51 = text.find("ข้อ 51.", ix_mark)
if qi51 < 0:
    raise SystemExit("ข้อ 51 not found")
sub = text[qi51:]
m_ans2 = re.search(
    r"เฉลยและคำอธิบายอย่างละเอียด\s*\([^)]*51[^)]*100[^)]*\)",
    sub,
)
if not m_ans2:
    raise SystemExit("second answer header not found")
quiz2_region = sub[: sub.index(m_ans2.group())]

# answers: from first เฉลย through end of 50-explanations (before second quiz duplicate)
answer1_text = text[m_ans.start() : qi51]
answer2_text = sub[sub.index(m_ans2.group()) :]

answers = {}
answers.update(parse_answer_map(answer1_text))
answers.update(parse_answer_map(answer2_text))

blks1 = find_question_blocks(quiz1_region)
blks2 = find_question_blocks(quiz2_region)
by_num = {n: b for n, b in blks1 + blks2}

letter_to_i = {"ก": 0, "ข": 1, "ค": 2, "ง": 3}
items = []
missing = []

for n in range(1, 101):
    if n not in by_num:
        missing.append(("no_q", n))
        continue
    pq = parse_one_block(by_num[n])
    if not pq:
        missing.append(("parse_fail", n))
        continue
    if n not in answers:
        missing.append(("no_ans", n))
        continue
    let, expl = answers[n]
    ai = letter_to_i.get(let)
    if ai is None:
        missing.append(("bad_letter", n, let))
        continue
    items.append(
        {
            "question": pq["q"],
            "choices": pq["o"],
            "answer": ai,
            "explanation": expl,
            "tag": f"ข้อ {n}",
        }
    )

out_path = "/Users/geefrost/Documents/SlothMove/Page/source/PAB/_emergency_bank.json"
with open(out_path, "w", encoding="utf-8") as wf:
    json.dump(items, wf, ensure_ascii=False, indent=2)

print("questions parsed:", len(items), "missing:", missing)
