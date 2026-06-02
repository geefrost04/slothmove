import re, json, glob, sys

base = "/Users/geefrost/Documents/slothmove/page/source/Pab"

targets = [
    "budget_knowledge/budget_knowledge.questions.js",
    "disaster_situation/disaster_situation.questions.js",
    "national_disaster_plan/national_disaster_plan.questions.js",
    "pab_knowledge/pab_knowledge.questions.js",
    "politics_economy/politics_economy.questions.js",
    "saraban_regulation/saraban_regulation.questions.js",
    "volunteer_regulation/volunteer_regulation.questions.js",
    "english/english.questions.js",
    "national_accident_regulation/national_accident_regulation.questions.js",
    "policy_analysis/policy_analysis.questions.js",
]

for f in targets:
    path = base + "/" + f
    with open(path) as fp:
        txt = fp.read()
    # count occurrences of "question": pattern
    count = len(re.findall(r'"question":', txt))
    print(f + ": " + str(count))
