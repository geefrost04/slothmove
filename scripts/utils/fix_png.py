#!/usr/bin/env python3
import os, glob

BASE = os.path.expanduser("~/Documents/SlothMove/Page/source")
files = (
    glob.glob(os.path.join(BASE, "OPSD", "Quiz_*.html")) +
    glob.glob(os.path.join(BASE, "Industry", "Quiz_*.html")) +
    glob.glob(os.path.join(BASE, "OPSD", "general_ability_quiz.html")) +
    glob.glob(os.path.join(BASE, "OPSD", "english_exam_comprehensive.html"))
)

fixed = 0
for fpath in sorted(files):
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    if "slothmove_mascot.svg" in content:
        new_content = content.replace("slothmove_mascot.svg", "slothmove_mascot.png")
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"  OK {os.path.basename(fpath)}")
        fixed += 1
    else:
        print(f"  -- {os.path.basename(fpath)} (ไม่พบ svg)")

print(f"\nแก้ไขแล้ว {fixed} ไฟล์")
