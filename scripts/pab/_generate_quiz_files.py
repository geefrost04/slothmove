#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate all Quiz_*.html files for PAB folder."""
import os, re

OUT_DIR = os.path.dirname(os.path.abspath(__file__))

NAVY   = '#1d1d42'
NAVY_L = '#fffbeb'
YELLOW = '#fcec4a'
YELLOW_STRONG = '#ddcf00'

# Placeholders used in template (unique strings unlikely to appear in HTML/JS)
P = {
    '__NAVY__':          NAVY,
    '__NAVY_L__':        NAVY_L,
    '__YELLOW__':        YELLOW,
    '__YELLOW_STRONG__': YELLOW_STRONG,
}

QUIZZES = [
    # (filename_stem, subject_th, icon, content_file, tags)
    ('admin_act',               'พ.ร.บ. ระเบียบบริหารราชการแผ่นดิน พ.ศ. 2534',         '🏛️', 'admin_act.html',               ['โครงสร้างราชการ','อำนาจหน้าที่','บทบัญญัติสำคัญ']),
    ('ministry_act',            'พ.ร.บ. ปรับปรุงกระทรวง ทบวง กรม พ.ศ. 2545',          '🏢', 'ministry_act.html',            ['โครงสร้างกระทรวง','กรมปภ.','การจัดองค์กร']),
    ('info_act',                'พ.ร.บ. ข้อมูลข่าวสารของราชการ พ.ศ. 2540',            '📋', 'info_act.html',                ['สิทธิรับรู้ข้อมูล','ข้อมูลลับ','บทลงโทษ']),
    ('civil_service_act',       'พ.ร.บ. ระเบียบข้าราชการพลเรือน พ.ศ. 2551',           '👔', 'civil_service_act.html',       ['การบรรจุแต่งตั้ง','วินัย','สิทธิประโยชน์']),
    ('saraban_regulation',      'ระเบียบงานสารบรรณ พ.ศ. 2526',                         '📁', 'saraban_regulation.html',      ['หนังสือราชการ','การรับ-ส่ง','การเก็บรักษา']),
    ('warning_regulation',      'ระเบียบการบริหารระบบเตือนภัย',                         '🚨', 'warning_regulation.html',      ['ระบบเตือนภัย','การแจ้งเตือน','การประสานงาน']),
    ('road_safety_regulation',  'ระเบียบความปลอดภัยทางถนน',                             '🛣️', 'road_safety_regulation.html',  ['อุบัติเหตุทางถนน','มาตรการป้องกัน','หน่วยงาน']),
    ('national_accident_regulation', 'ระเบียบป้องกันอุบัติภัยแห่งชาติ',               '⚠️', 'national_accident_regulation.html', ['บัญชาการเหตุการณ์','แผนฉุกเฉิน','การประสานงาน']),
    ('volunteer_regulation',    'ระเบียบกิจการ อปพร. พ.ศ. 2553',                       '🤝', 'volunteer_regulation.html',    ['อาสาสมัคร','อำนาจหน้าที่','การฝึกอบรม']),
    ('national_disaster_plan',  'แผนป้องกันและบรรเทาสาธารณภัยแห่งชาติ',               '🗺️', 'national_disaster_plan.html',  ['ยุทธศาสตร์','กลไกบริหาร','การฟื้นฟู']),
    ('budget_knowledge',        'ความรู้เรื่องงบประมาณ',                               '💰', 'budget_knowledge.html',        ['วงจรงบประมาณ','การจัดสรร','การควบคุม']),
    ('disaster_situation',      'สถานการณ์สาธารณภัย',                                  '🌊', 'disaster_situation.html',      ['ประเภทภัย','สถิติ','แนวโน้ม']),
    ('politics_economy',        'การเมือง เศรษฐกิจ สังคม',                             '🌐', 'politics_economy.html',        ['การปกครอง','นโยบายเศรษฐกิจ','สังคมไทย']),
    ('english',                 'ภาษาอังกฤษ',                                           '🔤', 'english.html',                 ['Vocabulary','Grammar','Reading']),
    ('pab_knowledge',           'ความรู้เกี่ยวกับ ปภ.',                                '🛡️', 'pab_knowledge.html',           ['ประวัติปภ.','ภารกิจ','โครงสร้าง']),
    ('policy_analysis',         'การวิเคราะห์นโยบายและแผน',                            '📊', 'policy_analysis.html',         ['วิเคราะห์นโยบาย','การวางแผน','การประเมิน']),
    ('national_plan',           'แผนพัฒนาเศรษฐกิจและสังคมแห่งชาติ ฉบับที่ 13',        '🇹🇭', 'national_plan.html',           ['ยุทธศาสตร์ชาติ','แผนพัฒนาฯ','การปฏิรูป']),
    ('budget_act',              'พ.ร.บ. วิธีการงบประมาณ พ.ศ. 2561',                   '📑', 'budget_act.html',              ['จัดทำงบประมาณ','การอนุมัติ','การโอนงบ']),
    ('disaster_act',            'พ.ร.บ. ป้องกันและบรรเทาสาธารณภัย พ.ศ. 2550',        '🔥', 'disaster_act.html',            ['อำนาจหน้าที่','ระบบบัญชาการ','ภาวะฉุกเฉิน']),
    ('emergency_fund_regulation','ระเบียบกระทรวงการคลังว่าด้วยเงินทดรองราชการ',        '🏦', 'emergency_fund_regulation.html',['เงินทดรองราชการ','ช่วยเหลือผู้ประสบภัย','ระเบียบเบิกจ่าย']),
]

def apply_placeholders(s, extra=None):
    d = dict(P)
    if extra:
        d.update(extra)
    for k, v in d.items():
        s = s.replace(k, v)
    return s

def tag_chips(tags):
    chips = ''
    for t in tags:
        chips += f'<span class="px-2.5 py-1 rounded-full text-xs font-kanit font-bold" style="background:__NAVY_L__;color:__NAVY__">{t}</span>\n'
    return chips

TEMPLATE = '''<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Quiz — {subject} | SlothMove</title>
<meta content="ฝึกทำข้อสอบออนไลน์ {subject}: พร้อมเฉลยและบันทึกคะแนนกระดาน — SlothMove · คอร์สปภ." name="description"/>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&family=Kanit:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<link href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='{NAVY}'/><text y='.9em' font-size='72' x='50%' text-anchor='middle'>{icon}</text></svg>" rel="icon"/>
<script src="{stem}.questions.js"></script>
<style>
  body {{ font-family:'Sarabun',sans-serif; background:#f8fafc; }}
  .font-kanit {{ font-family:'Kanit',sans-serif; }}
  .screen {{ display:none; }}
  .screen.active {{ display:block; }}
  .opt-btn {{ transition:all .15s; }}
  .opt-btn:hover:not(:disabled) {{ transform:translateX(3px); border-color:{NAVY} !important; background:{NAVY_L} !important; }}
  .opt-correct {{ background:#dcfce7 !important; border-color:#16a34a !important; color:#15803d !important; }}
  .opt-wrong   {{ background:#fee2e2 !important; border-color:#dc2626 !important; color:#b91c1c !important; }}
  .review-correct {{ background:#dcfce7; border-color:#16a34a; color:#15803d; }}
  .review-wrong   {{ background:#fee2e2; border-color:#dc2626; color:#b91c1c; }}
  #sharePreview {{ display:none; border-radius:1.25rem; width:100%; max-width:480px; margin:0 auto .75rem; box-shadow:0 8px 32px rgba(0,0,0,0.18); }}
  .mode-row .mode-chip:focus-visible {{ outline: 2px solid {NAVY}; outline-offset: 3px; }}
</style>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>
</head>
<body class="min-h-screen">
<!-- NAV -->
<nav class="border-b border-slate-700 sticky top-0 z-50" style="background:{NAVY}">
<div class="max-w-3xl mx-auto px-4 flex items-center justify-between h-14">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg flex items-center justify-center text-lg" style="background:{YELLOW};color:{NAVY}">{icon}</div>
<span class="font-bold text-white font-kanit text-sm hidden sm:block">Quiz — {subject}</span>
</div>
<div class="flex items-center gap-2">
<a class="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white text-xs font-kanit border border-slate-600 hover:border-amber-500/60 transition-all whitespace-nowrap" href="{content_file}" style="background:rgba(255,255,255,0.08)">📖 เนื้อหา</a>
<a class="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-white text-xs font-kanit border border-amber-400 transition-all font-bold" href="leaderboard.html">🏅 กระดาน</a>
<a class="px-3 py-1.5 rounded-lg text-white text-xs font-kanit transition-all hover:opacity-90 font-bold" href="indexPAB.html" style="background:{YELLOW_STRONG};color:{NAVY}">หน้าคอร์ส</a>
</div>
</div>
</nav>
<!-- ═══ START SCREEN ═══ -->
<div class="screen active" id="startScreen">
<div class="min-h-[calc(100vh-56px)] flex items-center justify-center px-4 py-12">
<div class="max-w-lg w-full">
<div class="bg-white rounded-3xl shadow-xl overflow-hidden">
<div class="h-2" style="background:{NAVY}"></div>
<div class="p-8 text-center">
<div class="text-5xl mb-4">{icon}</div>
<h1 class="font-black font-kanit text-xl text-slate-900 mb-2">{subject}</h1>
<p class="text-slate-500 font-sarabun text-sm mb-4">ข้อสอบพร้อมเฉลยละเอียดทุกข้อ</p>
<div class="flex flex-wrap justify-center gap-2 mb-6">
{chips}
</div>
<div class="grid grid-cols-3 gap-3 mb-8">
<div class="rounded-2xl p-3" style="background:{NAVY_L}">
<div class="font-black font-kanit text-xl" style="color:{NAVY}">100</div>
<div class="text-xs text-slate-500 font-kanit">ข้อต่อรอบสูงสุด</div>
</div>
<div class="rounded-2xl p-3" style="background:{NAVY_L}">
<div class="font-black font-kanit text-xl" style="color:{NAVY}">สุ่ม</div>
<div class="text-xs text-slate-500 font-kanit">ไม่ซ้ำทุกรอบ</div>
</div>
<div class="rounded-2xl p-3" style="background:{NAVY_L}">
<div class="font-black font-kanit text-xl" style="color:{NAVY}">เฉลย</div>
<div class="text-xs text-slate-500 font-kanit">ทุกข้อทันที</div>
</div>
</div>
<p class="font-semibold font-kanit text-sm text-slate-600 mb-3 text-center">จำนวนข้อในรอบนี้</p>
<div class="mode-row flex gap-2 sm:gap-3">
<button class="mode-chip flex-1 min-h-[4.5rem] rounded-2xl font-black font-kanit text-2xl sm:text-[1.65rem] border-2 bg-white hover:bg-amber-50/80 active:scale-[0.98] transition-all shadow-sm hover:shadow" onclick="startQuiz(10)" style="border-color:#e9e338;color:{NAVY}" type="button">10</button>
<button class="mode-chip flex-1 min-h-[4.5rem] rounded-2xl font-black font-kanit text-2xl sm:text-[1.65rem] border-2 bg-white hover:bg-amber-50/80 active:scale-[0.98] transition-all shadow-sm hover:shadow" onclick="startQuiz(50)" style="border-color:#e9e338;color:{NAVY}" type="button">50</button>
<button class="mode-chip flex-1 min-h-[4.5rem] rounded-2xl font-black font-kanit text-2xl sm:text-[1.65rem] border-2 text-white active:scale-[0.98] transition-all hover:opacity-95" onclick="startQuiz(100)" style="background:{NAVY};border-color:{NAVY};box-shadow:0 6px 20px rgba(29,29,66,0.28)" type="button">100</button>
</div>
<p class="text-xs text-slate-400 font-sarabun mt-4 text-center leading-relaxed">สุ่มข้อใหม่และสลับตัวเลือกทุกครั้งที่เริ่ม</p>
</div>
</div>
</div>
</div>
</div>
<!-- ═══ QUIZ SCREEN ═══ -->
<div class="screen" id="quizScreen">
<div class="max-w-3xl mx-auto px-4 py-8">
<div class="flex items-center gap-3 mb-6">
<span class="font-black font-kanit text-sm" id="qNum" style="color:{NAVY}"></span>
<div class="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
<div class="h-full rounded-full transition-all duration-500" id="progressBar" style="background:{NAVY};width:0%"></div>
</div>
<span class="text-xs font-kanit font-bold text-slate-400" id="timerDisplay">⏱ 00:00</span>
<span class="font-bold font-kanit text-sm text-slate-600" id="scoreDisplay"></span>
</div>
<div class="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-4">
<div class="h-1" style="background:{NAVY}"></div>
<div class="p-6 md:p-8">
<p class="font-sarabun text-slate-800 text-base leading-relaxed mb-6" id="questionText"></p>
<div class="space-y-2.5" id="optionsContainer"></div>
</div>
</div>
<div class="hidden rounded-2xl p-5 mb-4" id="explanationBox" style="background:{NAVY_L};border:1px solid #e9e338">
<p class="font-bold font-kanit text-sm mb-1" style="color:{NAVY}">💡 เฉลย</p>
<p class="font-sarabun text-sm text-slate-800 leading-relaxed" id="explanationText"></p>
</div>
<div class="flex justify-end">
<button class="hidden px-8 py-3 rounded-2xl font-bold font-kanit text-sm text-white transition-all hover:opacity-90" id="nextBtn" onclick="nextQuestion()" style="background:{NAVY}">ถัดไป →</button>
</div>
</div>
</div>
<!-- ═══ RESULT SCREEN ═══ -->
<div class="screen" id="resultScreen">
<div class="min-h-[calc(100vh-56px)] flex items-center justify-center px-4 py-12">
<div class="max-w-lg w-full">
<div class="bg-white rounded-3xl shadow-xl overflow-hidden">
<div class="h-2" style="background:{NAVY}"></div>
<div class="p-8 text-center">
<div class="text-5xl mb-4" id="resultEmoji"></div>
<h2 class="font-black font-kanit text-2xl text-slate-900 mb-2">ผลการทำข้อสอบ</h2>
<div class="my-5 p-5 rounded-2xl" style="background:{NAVY_L}">
<div class="font-black font-kanit text-4xl" id="scoreText" style="color:{NAVY}"></div>
<div class="text-slate-500 font-kanit text-sm mt-1" id="scoreDetail"></div>
</div>
<div class="hidden mb-5" id="wrongBadge">
<span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 border border-red-100 text-red-600 rounded-full text-sm font-kanit font-bold">
<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fill-rule="evenodd"></path></svg>
<span id="wrongCount"></span>
</span>
</div>
<div class="text-slate-600 font-sarabun text-sm mb-5" id="resultMsg"></div>
<div class="flex gap-3 mb-3">
<button class="flex-1 py-3 rounded-2xl font-bold font-kanit text-sm border-2 hover:opacity-80 transition-all" onclick="restartQuiz()" style="border-color:#e9e338;color:{NAVY}">ทำใหม่</button>
<a class="flex-1 py-3 rounded-2xl font-bold font-kanit text-sm text-white text-center hover:opacity-90 transition-all" href="{content_file}" style="background:{NAVY}">กลับเนื้อหา</a>
</div>
<button class="hidden w-full py-3 rounded-2xl font-bold font-kanit text-sm bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-all mb-3" id="reviewBtn" onclick="showReview()">📋 ดูข้อที่ทำผิด</button>
<canvas id="sharePreview"></canvas>
<button class="w-full py-3 rounded-2xl font-bold font-kanit text-sm border-2 border-slate-200 text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-center gap-2" id="shareBtn" onclick="shareResult()">
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
แชร์ผลคะแนน</button>
<button class="w-full mt-2 py-3 rounded-2xl font-bold font-kanit text-sm border-2 border-slate-200 text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-center gap-2" onclick="downloadCard()">
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
ดาวน์โหลดรูปภาพ</button>
<button class="w-full mt-2 py-3 rounded-2xl font-bold font-kanit text-sm text-white transition-all flex items-center justify-center gap-2" onclick="openSaveModal()" style="background:{NAVY}">🏅 บันทึกคะแนนขึ้นกระดาน</button>
<div class="mt-4 pt-5 border-t border-slate-100">
<p class="font-sarabun text-sm text-slate-600 mb-3 leading-relaxed text-center">อยากได้หน่วยงานไหนเพิ่มเติม inbox บอกในแฟนเพจเลยครับ</p>
<a class="w-full py-3.5 rounded-2xl font-bold font-kanit text-sm text-white bg-[#1877F2] hover:bg-[#166ADF] transition-all shadow-sm flex items-center justify-center gap-2.5" href="https://www.facebook.com/profile.php?id=61589670089745" rel="noopener noreferrer" target="_blank">
<svg aria-hidden="true" class="w-5 h-5 shrink-0" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"></path></svg>
ติดตามข่าวควิซ · Facebook</a>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- ═══ REVIEW SCREEN ═══ -->
<div class="screen" id="reviewScreen">
<div class="max-w-3xl mx-auto px-4 py-8">
<div class="flex items-center justify-between mb-6">
<button class="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-kanit text-sm font-bold transition-all" onclick="showScreen('resultScreen')">← ผลคะแนน</button>
<div class="text-center">
<div class="font-black font-kanit text-lg text-slate-900">ข้อที่ทำผิด</div>
<div class="text-xs text-slate-500 font-kanit" id="reviewHeader"></div>
</div>
<button class="flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold font-kanit text-sm text-white hover:opacity-90 transition-all" onclick="retryWrong()" style="background:{NAVY}">🔄 ลองใหม่</button>
</div>
<div class="space-y-4 mb-8" id="reviewList"></div>
<div class="bg-white rounded-2xl border border-slate-200 p-5 text-center shadow-sm">
<p class="font-sarabun text-slate-600 text-sm mb-4">ทำข้อที่ผิดซ้ำจนกว่าจะผ่าน 💪</p>
<button class="w-full py-3.5 rounded-2xl font-bold font-kanit text-sm text-white hover:opacity-90 transition-all" onclick="retryWrong()" style="background:{NAVY}">🔄 ลองใหม่เฉพาะข้อที่ผิด (<span id="retryCount"></span> ข้อ)</button>
</div>
</div>
</div>
<!-- Donate -->
<div class="py-16 text-white text-center" style="background:{NAVY}">
<h2 class="text-2xl font-bold mb-3 font-kanit">เลี้ยงกาแฟผมหน่อยครับ ☕</h2>
<p class="mb-10 font-sarabun text-sm" style="color:rgba(255,255,255,0.6)">หากเนื้อหามีประโยชน์ สนับสนุนได้ตามกำลังครับ</p>
<div class="bg-white p-5 rounded-[2rem] max-w-[220px] mx-auto shadow-2xl">
<img alt="QR พร้อมเพย์สำหรับสนับสนุน SlothMove" class="w-full rounded-xl mb-3 border border-slate-100" src="../../../pic/qr.jpg"/>
<p class="text-slate-500 text-[10px] italic">* สแกนผ่านแอปธนาคารทุกแห่ง</p>
</div>
</div>
<footer class="bg-white border-t border-slate-100 py-8">
<div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">
<div class="flex items-center gap-2 font-kanit font-bold text-slate-700">
<img src="../../../pic/logo ปภ.png" alt="" class="h-7 w-auto object-contain opacity-90">
ข้อสอบ — {subject}
</div>
<p>© 2026 SlothMove · เนื้อหาฟรีตลอดชีพ</p>
<a class="hover:text-slate-700 transition" href="indexPAB.html">← กลับหน้าคอร์ส</a>
</div>
</footer>
<script>
/* ════════════════ STATE ════════════════ */
let questions = [], current = 0, score = 0, answered = false;
let wrongAnswers = [];
const LETTERS  = ['ก', 'ข', 'ค', 'ง'];
const ACCENT   = '{NAVY}';
const ACCENT_L = '{NAVY_L}';
const SUBJECT  = '{subject}';
const ICON_CH  = '{icon}';

function showScreen(id) {{
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({{top:0, behavior:'smooth'}});
}}

let _quizTimer = null, _quizSec = 0, _quizMode = 0;
function _startTimer() {{
  clearInterval(_quizTimer); _quizSec = 0; _updateTimerDisplay();
  _quizTimer = setInterval(() => {{ _quizSec++; _updateTimerDisplay(); }}, 1000);
}}
function _stopTimer() {{ clearInterval(_quizTimer); }}
function _updateTimerDisplay() {{
  const m = String(Math.floor(_quizSec/60)).padStart(2,'0');
  const s = String(_quizSec%60).padStart(2,'0');
  const el = document.getElementById('timerDisplay');
  if (el) el.textContent = `⏱ ${{m}}:${{s}}`;
}}

function _fisherYatesIndices(len) {{
  const idx = Array.from({{ length: len }}, (_, i) => i);
  for (let i = len - 1; i > 0; i--) {{
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }}
  return idx;
}}
function _shuffleArrayCopy(arr) {{
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {{
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }}
  return a;
}}
function shouldKeepQuizOptionOrder(opts) {{
  return (opts || []).some(t => {{
    const s = String(t);
    return /ถูกทุกข้อ/.test(s) || (/ถูกทั้ง/i.test(s) && /และ/.test(s));
  }});
}}
function shuffleQuestionOptions(raw) {{
  const q = {{ ...raw, o: [...raw.o] }};
  if (shouldKeepQuizOptionOrder(q.o)) return q;
  const correctText = q.o[q.a];
  q.o = _shuffleArrayCopy(q.o);
  q.a = q.o.indexOf(correctText);
  return q;
}}
function buildQuizDeck(source, requestedCount) {{
  const take = Math.min(requestedCount, 100, source.length);
  const order = _fisherYatesIndices(source.length).slice(0, take);
  return order.map(i => shuffleQuestionOptions({{ ...source[i], o: [...source[i].o] }}));
}}

function startQuiz(n, pool) {{
  const source = pool || (typeof QUESTIONS !== 'undefined' ? QUESTIONS : []);
  questions    = buildQuizDeck(source, n);
  current      = 0; score = 0; wrongAnswers = [];
  _quizMode    = questions.length;
  _startTimer();
  showScreen('quizScreen');
  renderQuestion();
}}
function restartQuiz() {{ showScreen('startScreen'); }}

function renderQuestion() {{
  answered = false;
  const q = questions[current], total = questions.length;
  document.getElementById('qNum').textContent        = `ข้อ ${{current + 1}} / ${{total}}`;
  document.getElementById('progressBar').style.width = `${{(current / total) * 100}}%`;
  document.getElementById('scoreDisplay').textContent = `✅ ${{score}}`;
  document.getElementById('questionText').textContent = q.q;
  document.getElementById('explanationBox').classList.add('hidden');
  document.getElementById('nextBtn').classList.add('hidden');
  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';
  q.o.forEach((opt, i) => {{
    const btn = document.createElement('button');
    btn.className = 'opt-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-left text-sm font-sarabun text-slate-700';
    btn.innerHTML = `<span class="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-kanit font-bold shrink-0">${{LETTERS[i]}}</span><span>${{opt}}</span>`;
    btn.onclick = () => selectAnswer(i);
    container.appendChild(btn);
  }});
}}

function selectAnswer(idx) {{
  if (answered) return;
  answered = true;
  const q = questions[current];
  document.querySelectorAll('.opt-btn').forEach((btn, i) => {{
    btn.disabled = true;
    if (i === q.a) btn.classList.add('opt-correct');
    else if (i === idx && idx !== q.a) btn.classList.add('opt-wrong');
  }});
  if (idx === q.a) {{ score++; }} else {{ wrongAnswers.push({{ q, userIdx: idx }}); }}
  const exp = q.exp ? ` — ${{q.exp}}` : '';
  document.getElementById('explanationText').textContent =
    `คำตอบที่ถูกต้องคือ ${{LETTERS[q.a]}}. ${{q.o[q.a]}}${{exp}}`;
  document.getElementById('explanationBox').classList.remove('hidden');
  const nb = document.getElementById('nextBtn');
  nb.classList.remove('hidden');
  nb.textContent = current + 1 < questions.length ? 'ถัดไป →' : 'ดูผลลัพธ์ 🎉';
}}

function nextQuestion() {{
  current++;
  if (current >= questions.length) showResult();
  else renderQuestion();
}}

function showResult() {{
  _stopTimer();
  const total = questions.length;
  const pct   = Math.round((score / total) * 100);
  document.getElementById('scoreText').textContent   = `${{score}} / ${{total}}`;
  document.getElementById('scoreDetail').textContent = `คิดเป็น ${{pct}}%`;
  let emoji = '😅', msg = 'อ่านทบทวนเพิ่มอีกนิดนะครับ';
  if (pct >= 80) {{ emoji = '🏆'; msg = 'ยอดเยี่ยม! พร้อมสอบแล้ว'; }}
  else if (pct >= 60) {{ emoji = '👍'; msg = 'ดีมาก! ฝึกเพิ่มอีกหน่อย'; }}
  document.getElementById('resultEmoji').textContent = emoji;
  document.getElementById('resultMsg').textContent   = msg;
  const wc = wrongAnswers.length;
  const wrongBadgeEl = document.getElementById('wrongBadge');
  const reviewBtnEl  = document.getElementById('reviewBtn');
  if (wc > 0) {{
    document.getElementById('wrongCount').textContent = `ผิด ${{wc}} ข้อ`;
    wrongBadgeEl.classList.remove('hidden');
    reviewBtnEl.classList.remove('hidden');
    reviewBtnEl.textContent = `📋 ดูข้อที่ทำผิด (${{wc}} ข้อ)`;
    document.getElementById('retryCount').textContent = wc;
  }} else {{
    wrongBadgeEl.classList.add('hidden');
    reviewBtnEl.classList.add('hidden');
  }}
  showScreen('resultScreen');
  buildSharePreview(score, total, pct, emoji);
}}

function showReview() {{
  const wc = wrongAnswers.length;
  document.getElementById('reviewHeader').textContent = `${{wc}} ข้อจากทั้งหมด ${{questions.length}} ข้อ`;
  document.getElementById('retryCount').textContent   = wc;
  const list = document.getElementById('reviewList');
  list.innerHTML = '';
  wrongAnswers.forEach((item, n) => {{
    const {{q, userIdx}} = item;
    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm';
    let html = `<div class="px-5 pt-5 pb-3">
      <div class="flex items-center gap-2 mb-3">
        <span class="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-black font-kanit">${{n + 1}}</span>
        <span class="text-xs font-bold font-kanit text-red-500 uppercase tracking-wide">ตอบผิด</span>
      </div>
      <p class="font-sarabun text-slate-800 text-sm leading-relaxed">${{escHtml(q.q)}}</p>
    </div><div class="px-5 pb-5 space-y-2">`;
    q.o.forEach((opt, i) => {{
      let cls = 'border-2 border-slate-100 bg-slate-50 text-slate-600', badge = '';
      if (i === q.a) {{ cls = 'review-correct border-2'; badge = `<span class="ml-auto shrink-0 text-xs font-bold font-kanit text-green-700 bg-green-100 px-2 py-0.5 rounded-full">✓ เฉลย</span>`; }}
      else if (i === userIdx) {{ cls = 'review-wrong border-2'; badge = `<span class="ml-auto shrink-0 text-xs font-bold font-kanit text-red-700 bg-red-100 px-2 py-0.5 rounded-full">✗ คำตอบคุณ</span>`; }}
      html += `<div class="flex items-center gap-3 px-4 py-3 rounded-xl ${{cls}}">
        <span class="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-kanit font-bold shrink-0">${{LETTERS[i]}}</span>
        <span class="font-sarabun text-sm flex-1">${{escHtml(opt)}}</span>${{badge}}</div>`;
    }});
    if (q.exp) {{ html += `<div class="mt-3 p-3 rounded-xl text-xs font-sarabun text-slate-600 leading-relaxed" style="background:{NAVY_L}">💡 ${{escHtml(q.exp)}}</div>`; }}
    html += `</div>`;
    card.innerHTML = html;
    list.appendChild(card);
  }});
  showScreen('reviewScreen');
}}

function retryWrong() {{
  const pool = wrongAnswers.map(w => shuffleQuestionOptions({{ ...w.q, o: [...w.q.o] }}));
  if (!pool.length) {{ showScreen('startScreen'); return; }}
  questions = _shuffleArrayCopy(pool);
  current = 0; score = 0; wrongAnswers = [];
  document.getElementById('wrongBadge').classList.add('hidden');
  document.getElementById('reviewBtn').classList.add('hidden');
  showScreen('quizScreen');
  renderQuestion();
}}

function escHtml(s) {{
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}}

/* ════ SHARE ════ */
let _qrImg = null;
function loadQR() {{
  return new Promise(resolve => {{
    if (_qrImg) {{ resolve(_qrImg); return; }}
    const img = new Image();
    img.onload  = () => {{ _qrImg = img; resolve(img); }};
    img.onerror = () => resolve(null);
    fetch('../../../pic/qr.jpg').then(r=>r.blob()).then(blob=>{{ img.src=URL.createObjectURL(blob); }}).catch(()=>{{ img.src='../../../pic/qr.jpg'; }});
  }});
}}
let _logoImg = null;
function loadLogo(relPath) {{
  return new Promise(resolve => {{
    if (_logoImg) {{ resolve(_logoImg); return; }}
    const img = new Image();
    img.onload = () => {{ _logoImg = img; resolve(img); }};
    img.onerror = () => resolve(null);
    fetch(relPath).then(r=>r.blob()).then(blob=>{{ img.src=URL.createObjectURL(blob); }}).catch(()=>{{ img.src=relPath; }});
  }});
}}

async function buildSharePreview(sc, total, pct, emoji) {{
  await document.fonts.ready;
  const qr  = await loadQR();
  const logo = await loadLogo('../../../pic/Slothmovelogoo.png');
  const cvs = document.getElementById('sharePreview');
  drawCard(cvs, sc, total, pct, emoji, qr, logo);
  cvs.style.display = 'block';
}}

function rrect(ctx,x,y,w,h,r){{ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();}}
function clipText(ctx,txt,maxW){{if(ctx.measureText(txt).width<=maxW)return txt;while(txt.length>0&&ctx.measureText(txt+'...').width>maxW)txt=txt.slice(0,-1);return txt+'...';}}

function drawCard(cvs, sc, total, pct, emoji, qr, logo) {{
  const W=1080, H=1080;
  cvs.width=W; cvs.height=H;
  const ctx=cvs.getContext('2d');
  ctx.fillStyle='#0d0d1f'; ctx.fillRect(0,0,W,H);
  const vig=ctx.createRadialGradient(W/2,H/2,200,W/2,H/2,780);
  vig.addColorStop(0,'rgba(0,0,0,0)'); vig.addColorStop(1,'rgba(0,0,0,0.35)');
  ctx.fillStyle=vig; ctx.fillRect(0,0,W,H);
  ctx.fillStyle='{YELLOW}'; ctx.fillRect(0,0,W/3.5,6);
  ctx.fillStyle='{NAVY}'; ctx.fillRect(W/3.5,0,W,6);
  const LOGO_SIZE=150, LOGO_X=W/2-LOGO_SIZE/2, LOGO_Y=40;
  if(logo){{ctx.save();ctx.beginPath();ctx.arc(W/2,LOGO_Y+LOGO_SIZE/2,LOGO_SIZE/2+6,0,Math.PI*2);ctx.fillStyle='#1a1a3e';ctx.fill();ctx.strokeStyle='{YELLOW}';ctx.lineWidth=2;ctx.stroke();ctx.clip();ctx.drawImage(logo,LOGO_X,LOGO_Y,LOGO_SIZE,LOGO_SIZE);ctx.restore();}}
  const brandY=LOGO_Y+LOGO_SIZE+44;
  ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.font='900 48px "Kanit",sans-serif';
  const slothW=ctx.measureText('Sloth').width, moveW=ctx.measureText('Move').width;
  ctx.fillStyle='#f4f1eb'; ctx.fillText('Sloth',W/2-moveW/2,brandY);
  ctx.fillStyle='{YELLOW}'; ctx.fillText('Move',W/2+slothW/2,brandY);
  ctx.font='400 22px "Sarabun",sans-serif'; ctx.fillStyle='rgba(255,255,255,0.38)';
  ctx.fillText('กรมป้องกันและบรรเทาสาธารณภัย', W/2, brandY+36);
  const divY=brandY+64;
  ctx.strokeStyle='rgba(252,236,74,0.2)'; ctx.lineWidth=1;
  ctx.beginPath(); ctx.moveTo(120,divY); ctx.lineTo(W-120,divY); ctx.stroke();
  ctx.font='bold 28px "Kanit","Sarabun",sans-serif';
  const sub=clipText(ctx,emoji+'  '+SUBJECT,820);
  const sW=ctx.measureText(sub).width+72, sX=(W-sW)/2, sY=divY+16;
  ctx.fillStyle='rgba(252,236,74,0.1)'; rrect(ctx,sX,sY,sW,54,27); ctx.fill();
  ctx.strokeStyle='rgba(252,236,74,0.4)'; ctx.lineWidth=1.5; rrect(ctx,sX,sY,sW,54,27); ctx.stroke();
  ctx.fillStyle='#ffffff'; ctx.fillText(sub,W/2,sY+27);
  ctx.textBaseline='alphabetic';
  const BIG_SIZE=220, MID_SIZE=100;
  ctx.font='900 '+BIG_SIZE+'px "Kanit",sans-serif';
  const numW=ctx.measureText(''+sc).width;
  ctx.font='300 '+MID_SIZE+'px "Kanit",sans-serif';
  const denStr=' / '+total, denW=ctx.measureText(denStr).width;
  const SCORE_Y=660, scoreStartX=W/2-(numW+denW)/2;
  ctx.font='900 '+BIG_SIZE+'px "Kanit",sans-serif'; ctx.fillStyle='#ffffff'; ctx.textAlign='left';
  ctx.fillText(''+sc,scoreStartX,SCORE_Y);
  ctx.font='300 '+MID_SIZE+'px "Kanit",sans-serif'; ctx.fillStyle='rgba(255,255,255,0.45)';
  ctx.fillText(denStr,scoreStartX+numW,SCORE_Y);
  ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.font='bold 66px "Kanit",sans-serif'; ctx.fillStyle='{YELLOW}';
  ctx.fillText(pct+'%',W/2,SCORE_Y+54);
  const bx=110,by=SCORE_Y+84,bw=W-220,bh=12,br=6;
  ctx.fillStyle='rgba(252,236,74,0.15)'; rrect(ctx,bx,by,bw,bh,br); ctx.fill();
  const fw=Math.max(br*2,Math.round(bw*pct/100));
  const fg=ctx.createLinearGradient(bx,0,bx+fw,0);
  fg.addColorStop(0,'{NAVY}'); fg.addColorStop(1,'{YELLOW_STRONG}');
  ctx.fillStyle=fg; rrect(ctx,bx,by,fw,bh,br); ctx.fill();
  ctx.font='400 22px "Sarabun",sans-serif'; ctx.fillStyle='rgba(255,255,255,0.38)';
  ctx.fillText('ตอบถูก '+sc+' จาก '+total+' ข้อ',W/2,by+30);
  const sepY=by+58;
  ctx.strokeStyle='rgba(252,236,74,0.15)'; ctx.lineWidth=1;
  ctx.beginPath(); ctx.moveTo(0,sepY); ctx.lineTo(W,sepY); ctx.stroke();
  ctx.fillStyle='rgba(0,0,0,0.28)'; ctx.fillRect(0,sepY,W,H-sepY);
  if(qr){{const QS=170,QX=W-90-QS,QY=sepY+22;ctx.fillStyle='#ffffff';rrect(ctx,QX-8,QY-8,QS+16,QS+16,10);ctx.fill();ctx.drawImage(qr,QX,QY,QS,QS);ctx.font='400 16px "Sarabun",sans-serif';ctx.fillStyle='rgba(255,255,255,0.30)';ctx.fillText('สแกนเพื่อลองทำ',QX+QS/2,QY+QS+18);}}
  ctx.fillStyle='rgba(252,236,74,0.12)'; rrect(ctx,90,sepY+26,190,44,22); ctx.fill();
  ctx.strokeStyle='{YELLOW_STRONG}'; ctx.lineWidth=1.5; rrect(ctx,90,sepY+26,190,44,22); ctx.stroke();
  ctx.font='bold 26px "Kanit",sans-serif'; ctx.fillStyle='{YELLOW}';
  ctx.textAlign='center'; ctx.fillText('SlothMove',185,sepY+48);
}}

async function shareResult(){{
  const btn=document.getElementById('shareBtn');
  const total=questions.length, pct=Math.round((score/total)*100);
  const emoji=pct>=80?'🏆':pct>=60?'👍':'😅';
  const shareText=`${{emoji}} ฉันทำข้อสอบ "${{SUBJECT}}" ได้ ${{score}}/${{total}} ข้อ (${{pct}}%)\nลองทำดูที่ SlothMove 👉 slothmoveth.com`;
  const pageUrl=window.location.href;
  const cvs=document.getElementById('sharePreview');
  async function tryShareWithFile(){{return new Promise((res,rej)=>{{cvs.toBlob(async blob=>{{try{{const file=new File([blob],'slothmove-result.png',{{type:'image/png'}});if(navigator.canShare&&navigator.canShare({{files:[file]}})){{await navigator.share({{files:[file],text:shareText}});res('file');}}else rej(new Error('no canShare'));}}catch(e){{rej(e);}}}}},'image/png');}});}};
  setShareBtn(btn,'⏳ กำลังเตรียม...',true);
  try{{await tryShareWithFile();setShareBtn(btn,'✓ แชร์แล้ว!',false);setTimeout(()=>resetShareBtn(btn),2500);return;}}
  catch(e1){{if(e1.name==='AbortError'){{resetShareBtn(btn);return;}}
    try{{if(navigator.share){{await navigator.share({{text:shareText,url:pageUrl}});setShareBtn(btn,'✓ แชร์แล้ว!',false);setTimeout(()=>resetShareBtn(btn),2500);return;}}}}
    catch(e2){{if(e2.name==='AbortError'){{resetShareBtn(btn);return;}}}}
    try{{await navigator.clipboard.writeText(shareText+'\n'+pageUrl);setShareBtn(btn,'✓ คัดลอกข้อความแล้ว!',false);}}
    catch{{const ta=document.createElement('textarea');ta.value=shareText+'\n'+pageUrl;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();setShareBtn(btn,'✓ คัดลอกแล้ว!',false);}}
    setTimeout(()=>resetShareBtn(btn),2500);}}
}}
function setShareBtn(btn,label,disabled){{btn.innerHTML=label;btn.disabled=disabled;}}
function resetShareBtn(btn){{btn.innerHTML=`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg> แชร์ผลคะแนน`;btn.disabled=false;}}

async function downloadCard(){{
  if(typeof score==='undefined')return;
  const total=questions.length;if(!total)return;
  const pct=Math.round((score/total)*100);
  const emoji=pct>=80?'🏆':pct>=60?'🎯':'📚';
  await buildSharePreview(score,total,pct,emoji);
  const cvs=document.getElementById('sharePreview');
  if(!cvs||!cvs.width)return;
  try{{const a=document.createElement('a');a.download='slothmove-result.png';a.href=cvs.toDataURL('image/png');a.click();}}
  catch(e){{alert('ไม่สามารถดาวน์โหลดได้: '+e.message);}}
}}

/* ════ SUPABASE ════ */
const _supa = window.supabase
  ? window.supabase.createClient('https://rtedyfalsfqcjsvgjqmx.supabase.co','sb_publishable_vn5tbKzxOtHlmuFLlG_BJQ_54Lk-626')
  : null;
let _savedScore = null;

function openSaveModal(){{
  if(!_supa){{alert('ไม่สามารถเชื่อมต่อ Supabase ได้');return;}}
  _savedScore={{s:score,t:questions.length,p:Math.round((score/questions.length)*100)}};
  _stopTimer();
  document.getElementById('saveError').classList.add('hidden');
  document.getElementById('nicknameInput').value='';
  document.getElementById('saveModal').classList.remove('hidden');
  setTimeout(()=>document.getElementById('nicknameInput').focus(),100);
}}
function closeSaveModal(){{document.getElementById('saveModal').classList.add('hidden');}}
async function confirmSave(){{
  const nick=document.getElementById('nicknameInput').value.trim();
  const errEl=document.getElementById('saveError');
  if(!nick){{errEl.textContent='กรุณาใส่ชื่อเล่น';errEl.classList.remove('hidden');return;}}
  const btn=document.getElementById('saveConfirmBtn');
  btn.textContent='กำลังบันทึก...';btn.disabled=true;
  try{{
    const payload={{nickname:nick,dept:'pab',subject:SUBJECT,score:_savedScore.s,total:_savedScore.t,pct:_savedScore.p,mode:_quizMode,time_sec:_quizSec}};
    let {{error}}=await _supa.from('scores').insert(payload);
    if(error&&/dept|schema cache/i.test(error.message)){{const{{dept:_d,...noDept}}=payload;({{error}}=await _supa.from('scores').insert(noDept));}}
    if(error)throw new Error(error.message);
    closeSaveModal();
    const saveBtn=document.querySelector('[onclick="openSaveModal()"]');
    if(saveBtn){{saveBtn.innerHTML='✅ บันทึกแล้ว';saveBtn.disabled=true;saveBtn.style.opacity='0.6';}}
  }}catch(e){{errEl.textContent='เกิดข้อผิดพลาด: '+e.message;errEl.classList.remove('hidden');btn.textContent='บันทึก';btn.disabled=false;}}
}}
</script>
<!-- ═══ SAVE SCORE MODAL ═══ -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm hidden" id="saveModal">
<div class="bg-white rounded-3xl shadow-2xl p-7 w-80 max-w-full mx-4">
<h3 class="font-kanit font-bold text-lg text-slate-800 mb-1 text-center">🏅 บันทึกขึ้นกระดาน</h3>
<p class="text-slate-500 font-sarabun text-sm text-center mb-4">ใส่ชื่อเล่นของคุณ</p>
<input class="w-full border-2 border-slate-200 focus:border-amber-400 rounded-2xl px-4 py-3 font-kanit text-slate-700 outline-none mb-3 text-center text-lg" id="nicknameInput" maxlength="20" placeholder="ชื่อเล่น..." type="text"/>
<p class="text-red-500 font-sarabun text-xs text-center mb-2 hidden" id="saveError"></p>
<div class="flex gap-2">
<button class="flex-1 py-3 rounded-2xl font-bold font-kanit text-sm border-2 border-slate-200 text-slate-500 hover:bg-slate-50" onclick="closeSaveModal()">ยกเลิก</button>
<button class="flex-1 py-3 rounded-2xl font-bold font-kanit text-sm text-white hover:opacity-90 transition-all" id="saveConfirmBtn" onclick="confirmSave()" style="background:{YELLOW_STRONG};color:{NAVY}">บันทึก</button>
</div>
</div>
</div>
</body>
</html>'''

def main():
    count = 0
    for stem, subject, icon, content_file, tags in QUIZZES:
        html = make_quiz(stem, subject, icon, content_file, tags)
        out_path = os.path.join(OUT_DIR, f'Quiz_{stem}.html')
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(html)
        size = os.path.getsize(out_path)
        print(f'  ✓ Quiz_{stem}.html ({size:,} bytes)')
        count += 1
    print(f'\nDone: {count} Quiz files generated.')

if __name__ == '__main__':
    main()
