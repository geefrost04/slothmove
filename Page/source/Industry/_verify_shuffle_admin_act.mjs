/**
 * Offline verification: shuffle helpers match Quiz_admin_act.html logic.
 * Run: node _verify_shuffle_admin_act.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bankSrc = fs.readFileSync(path.join(__dirname, 'admin_act.questions.js'), 'utf8');
const adminActQuestions = new Function(`${bankSrc}\nreturn adminActQuestions;`)();

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

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

// --- 1) Duplicate option texts per question (would break indexOf remap) ---
const dupIssues = [];
adminActQuestions.forEach((q, qi) => {
  const seen = new Map();
  for (let i = 0; i < q.o.length; i++) {
    const t = q.o[i];
    if (seen.has(t)) dupIssues.push({ qi, q: q.q.slice(0, 60), dup: t });
    seen.set(t, i);
  }
});

// --- 2) Many shuffles: pointed answer always matches bank intent ---
const trialsPerQuestion = 200;
let shuffleFailures = 0;
for (let qi = 0; qi < adminActQuestions.length; qi++) {
  const raw = adminActQuestions[qi];
  const intended = raw.o[raw.a];
  for (let t = 0; t < trialsPerQuestion; t++) {
    const sh = shuffleQuestionOptions({ ...raw, o: [...raw.o] });
    assert(sh.a >= 0 && sh.a < sh.o.length, `bad index qi=${qi}`);
    if (sh.o[sh.a] !== intended) shuffleFailures++;
  }
}

// --- 3) buildQuizDeck does not mutate bank; sizes for modes ---
const snapshot = JSON.stringify(adminActQuestions.map(q => ({ ...q, o: [...q.o] })));
for (const mode of [10, 50, 100]) {
  for (let r = 0; r < 50; r++) {
    const deck = buildQuizDeck(adminActQuestions, mode);
    assert(deck.length === Math.min(mode, 100, adminActQuestions.length), `deck length mode=${mode}`);
    assert(JSON.stringify(adminActQuestions) === snapshot, 'bank mutated');
    for (const q of deck) {
      const raw = adminActQuestions.find(r => r.q === q.q);
      assert(raw, 'question missing from bank match');
      assert(q.o[q.a] === raw.o[raw.a], 'deck answer text mismatch');
    }
  }
}

console.log('Quiz_admin_act shuffle verification');
console.log('  Bank size:', adminActQuestions.length);
console.log('  Duplicate-option rows:', dupIssues.length);
if (dupIssues.length) console.log('  Sample:', dupIssues.slice(0, 3));
console.log('  Shuffle remap failures:', shuffleFailures, '/', adminActQuestions.length * trialsPerQuestion);
console.log(shuffleFailures === 0 && dupIssues.length === 0 ? 'PASS' : 'CHECK WARNINGS');

process.exit(shuffleFailures > 0 ? 1 : 0);
