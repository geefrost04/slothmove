/**
 * Offline: เฉลยหลังสลับตัวเลือกตรงกับข้อความคำตอบที่ถูกจากธนาคร์หรือไม่ (เหมือน logic ใน Quiz HTML)
 * Run: node _verify_shuffle_all_banks.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BANKS = [
  ['admin_act.questions.js', 'adminActQuestions'],
  ['factory_act.questions.js', 'factoryActQuestions'],
  ['good_governance.questions.js', 'goodGovQuestions'],
  ['industry_knowledge.questions.js', 'industryKnowledgeQuestions'],
  ['industry_volunteer.questions.js', 'industryVolunteerQuestions'],
  ['info_act.questions.js', 'infoActQuestions'],
  ['national_plan.questions.js', 'allQ'],
  ['strategy_planning.questions.js', 'strategyQuestions'],
  ['official_letter.questions.js', 'officialLetterQuestions'],
];

function loadBank(filename, exportName) {
  const bankSrc = fs.readFileSync(path.join(__dirname, filename), 'utf8');
  return new Function(`${bankSrc}\nreturn ${exportName};`)();
}

function _fisherYatesIndices(len) {
  const idx = Array.from({ length: len }, (_, i) => i);
  for (let i = len - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

function _shuffleArrayCopy(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleQuestionOptions(raw) {
  const q = { ...raw, o: [...raw.o] };
  const correctText = q.o[q.a];
  q.o = _shuffleArrayCopy(q.o);
  q.a = q.o.indexOf(correctText);
  return q;
}

function buildQuizDeck(source, requestedCount) {
  const take = Math.min(requestedCount, 100, source.length);
  const order = _fisherYatesIndices(source.length).slice(0, take);
  return order.map(i => shuffleQuestionOptions({ ...source[i], o: [...source[i].o] }));
}

/** Deck พร้อมดัชนีธนาคร์จริง — ใช้ทดสอบความตรงของเฉลย (ไม่พึ่งข้อความคำถามที่อาจซ้ำ) */
function buildQuizDeckIndexed(source, requestedCount) {
  const take = Math.min(requestedCount, 100, source.length);
  const order = _fisherYatesIndices(source.length).slice(0, take);
  return order.map(i => ({
    bankIndex: i,
    q: shuffleQuestionOptions({ ...source[i], o: [...source[i].o] }),
  }));
}

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

function verifyBank(label, bank, trialsPerQuestion = 80, deckRuns = 30) {
  const dupIssues = [];
  bank.forEach((q, qi) => {
    const seen = new Map();
    for (let i = 0; i < q.o.length; i++) {
      const t = q.o[i];
      if (seen.has(t)) dupIssues.push({ qi, snippet: q.q.slice(0, 60), dup: t.slice(0, 80) });
      seen.set(t, i);
    }
  });

  let shuffleFailures = 0;
  for (let qi = 0; qi < bank.length; qi++) {
    const raw = bank[qi];
    const intended = raw.o[raw.a];
    for (let t = 0; t < trialsPerQuestion; t++) {
      const sh = shuffleQuestionOptions({ ...raw, o: [...raw.o] });
      assert(sh.a >= 0 && sh.a < sh.o.length, `${label} bad index qi=${qi}`);
      if (sh.o[sh.a] !== intended) shuffleFailures++;
    }
  }

  const snapshot = JSON.stringify(bank.map(q => ({ ...q, o: [...q.o] })));
  let deckMismatch = 0;
  for (const mode of [10, 50, 100]) {
    for (let r = 0; r < deckRuns; r++) {
      const deck = buildQuizDeckIndexed(bank, mode);
      assert(deck.length === Math.min(mode, 100, bank.length), `${label} deck length mode=${mode}`);
      assert(JSON.stringify(bank) === snapshot, `${label} bank mutated`);
      for (const row of deck) {
        const raw = bank[row.bankIndex];
        const q = row.q;
        if (!raw || q.o[q.a] !== raw.o[raw.a]) deckMismatch++;
      }
    }
  }

  return {
    label,
    size: bank.length,
    dupIssues,
    shuffleFailures,
    shuffleTrials: bank.length * trialsPerQuestion,
    deckMismatch,
  };
}

let exitCode = 0;
console.log('Shuffle/correctness verification (all *.questions.js banks)\n');

for (const [file, exportName] of BANKS) {
  let bank;
  try {
    bank = loadBank(file, exportName);
  } catch (e) {
    console.error(`${file}: LOAD FAIL`, e.message);
    exitCode = 1;
    continue;
  }
  if (!Array.isArray(bank) || bank.length === 0) {
    console.error(`${file}: empty or not array`);
    exitCode = 1;
    continue;
  }
  const r = verifyBank(file, bank);
  const dupWarn = r.dupIssues.length ? ` DUPLICATE_OPTS=${r.dupIssues.length}` : '';
  const shFail = r.shuffleFailures > 0 ? ` SHUFFLE_FAIL=${r.shuffleFailures}` : '';
  const deckFail = r.deckMismatch > 0 ? ` DECK_MISMATCH=${r.deckMismatch}` : '';
  console.log(`${r.label}: size=${r.size}${dupWarn}${shFail}${deckFail}`);
  if (r.dupIssues.length) console.log('  sample dup:', r.dupIssues[0]);
  if (r.shuffleFailures || r.deckMismatch) exitCode = 1;
}

console.log(exitCode === 0 ? '\nALL BANKS PASS (เฉลยหลัง shuffle ตรงข้อความคำตอบเดิม)' : '\nมีข้อผิดพลาดหรือคำเตือน — ดูด้านบน');
process.exit(exitCode);
