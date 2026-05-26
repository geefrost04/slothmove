#!/usr/bin/env python3
import re

answer_key = {
    1:1, 2:3, 3:1, 4:2, 5:2, 6:3, 7:2, 8:0, 9:0, 10:0,
    11:1, 12:2, 13:1, 14:3, 15:1, 16:1, 17:0, 18:2, 19:1, 20:2,
    21:1, 22:1, 23:2, 24:1, 25:2, 26:2, 27:0, 28:0, 29:2, 30:1,
    31:1, 32:3, 33:1, 34:2, 35:1, 36:1, 37:2, 38:1, 39:2, 40:1,
    41:0, 42:3, 43:0, 44:1, 45:1, 46:2, 47:2, 48:1, 49:0, 50:1,
    51:1, 52:0, 53:2, 54:0, 55:2, 56:2, 57:1, 58:2, 59:1, 60:0,
    61:0, 62:1, 63:1, 64:1, 65:1, 66:2, 67:2, 68:2, 69:0, 70:2,
    71:0, 72:2, 73:1, 74:0, 75:0, 76:3, 77:1, 78:0, 79:1, 80:1,
    81:2, 82:2, 83:1, 84:1, 85:1, 86:0, 87:1, 88:3, 89:0, 90:1,
    91:2, 92:1, 93:2, 94:1, 95:1, 96:1, 97:2, 98:3, 99:1, 100:1
}

filepath = '/Users/geefrost/Documents/SlothMove/Page/source/PAB/saraban_regulation/saraban_regulation.questions.js'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Split by question pattern
# Each question looks like: {"question": "...", "choices": [...], "answer": N, "explanation": "..."}
parts = content.split('{"question":')
print(f"Found {len(parts)-1} questions")

# Process each question
new_parts = [parts[0]]
for i in range(1, len(parts)):
    q_num = i
    part = parts[i]
    
    if q_num in answer_key:
        correct_ans = answer_key[q_num]
        # Find the "answer":X pattern and replace it
        m = re.search(r'"answer":\d+', part)
        if m:
            old = m.group()
            new = f'"answer":{correct_ans}'
            part = part[:m.start()] + new + part[m.end():]
            print(f"Q{q_num}: {old} -> {new}")
        else:
            print(f"Q{q_num}: answer pattern not found!")
    new_parts.append(part)

result = '{"question":'.join(new_parts)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(result)

print("Done!")
