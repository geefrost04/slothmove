/**
 * ทดสอบ logic เดียวกับ Quiz HTML: shouldKeepQuizOptionOrder + shuffleQuestionOptions
 * รัน: node Page/source/Industry/_test_keep_option_order.mjs
 */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function shouldKeepQuizOptionOrder(opts) {
  return (opts || []).some((t) => {
    const s = String(t);
    return /ถูกทุกข้อ/.test(s) || (/ถูกทั้ง/i.test(s) && /และ/.test(s));
  });
}

function shuffleArrayCopy(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleQuestionOptions(raw) {
  const q = { ...raw, o: [...raw.o] };
  if (shouldKeepQuizOptionOrder(q.o)) return q;
  const correctText = q.o[q.a];
  q.o = shuffleArrayCopy(q.o);
  q.a = q.o.indexOf(correctText);
  return q;
}

function loadQuestionsBank(relPath, exportKey) {
  const full = path.join(__dirname, relPath);
  const code = fs.readFileSync(full, 'utf8');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`${code}\n;this.__bank = ${exportKey};`, sandbox);
  const bank = sandbox.__bank;
  if (!Array.isArray(bank) || !bank.length) {
    throw new Error(`Empty or missing bank ${exportKey} in ${relPath}`);
  }
  return { key: exportKey, bank, file: relPath };
}

const BANKS = [
  ['admin_act.questions.js', 'adminActQuestions'],
  ['factory_act.questions.js', 'factoryActQuestions'],
  ['good_governance.questions.js', 'goodGovQuestions'],
  ['industry_knowledge.questions.js', 'industryKnowledgeQuestions'],
  ['industry_volunteer.questions.js', 'industryVolunteerQuestions'],
  ['info_act.questions.js', 'infoActQuestions'],
  ['national_plan.questions.js', 'allQ'],
  ['official_letter.questions.js', 'officialLetterQuestions'],
  ['strategy_planning.questions.js', 'strategyQuestions'],
];

function classifyOptionText(s) {
  const t = String(s);
  const allCorrect = /ถูกทุกข้อ/.test(t);
  const composite = /ถูกทั้ง/i.test(t) && /และ/.test(t);
  return { allCorrect, composite };
}

function run() {
  const trials = 80;
  let totalMatch = 0;
  let failures = [];
  const synthetic = {
    q: 'synthetic',
    o: ['ข้อก', 'ถูกทั้ง ข้อ ก และ ข้อ ข', 'ข้อค'],
    a: 1,
  };

  // synthetic: ต้องคงลำดับและ index
  for (let i = 0; i < trials; i++) {
    const out = shuffleQuestionOptions({ ...synthetic, o: [...synthetic.o] });
    if (out.o.join('|') !== synthetic.o.join('|') || out.a !== synthetic.a) {
      failures.push({ case: 'synthetic ถูกทั้ง…และ…', trial: i, out });
      break;
    }
  }

  for (const [file, exportKey] of BANKS) {
    const { bank, key } = loadQuestionsBank(file, exportKey);
    for (let qi = 0; qi < bank.length; qi++) {
      const raw = bank[qi];
      if (!raw || !Array.isArray(raw.o) || typeof raw.a !== 'number') continue;
      const match = shouldKeepQuizOptionOrder(raw.o);
      if (!match) continue;
      totalMatch++;
      const reasons = raw.o.map(classifyOptionText);
      const hasAll = reasons.some((r) => r.allCorrect);
      const hasComp = reasons.some((r) => r.composite);
      for (let t = 0; t < trials; t++) {
        const copy = { ...raw, o: [...raw.o] };
        const out = shuffleQuestionOptions(copy);
        if (out.o.join('||') !== copy.o.join('||')) {
          failures.push({
            case: `${file} #${qi} (${key})`,
            reason: 'order changed',
            q: raw.q?.slice?.(0, 80),
          });
          break;
        }
        if (out.a !== raw.a) {
          failures.push({
            case: `${file} #${qi} (${key})`,
            reason: 'index a changed',
            q: raw.q?.slice?.(0, 80),
          });
          break;
        }
      }
      if (!hasAll && !hasComp) {
        failures.push({
          case: `${file} #${qi}`,
          note: 'shouldKeep=true but no ถูกทุกข้อ / ถูกทั้ง+และ in options (regex edge?)',
          opts: raw.o.map(String),
        });
      }
    }
  }

  console.log('Industry option-order guard test');
  console.log(`Questions with guard active (matched regex): ${totalMatch}`);
  console.log(`Trials per question: ${trials}`);
  if (failures.length) {
    console.error('FAILURES:', JSON.stringify(failures, null, 2));
    process.exit(1);
  }
  console.log('OK — ทุกข้อที่เข้าเงื่อนไขคงลำดับตัวเลือกและดัชนี a ครบทุกรอบทดสอบ');
}

run();
