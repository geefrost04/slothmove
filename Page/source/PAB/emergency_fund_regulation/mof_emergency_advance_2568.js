const TAGS_ALL = ['ทั้งหมด','นิยาม','องค์กร','ตัวเลข / วงเงิน','จับข้อสอบ'];
let activeTag = 'ทั้งหมด';

const glossaryData = [
  { term:'ภัยพิบัติ', thai:'', def:'รวมเหตุจากธรรมชาติหรือบุคคล เช่น อุทกภัย ไฟไหม้ ลมพายุ ภัยแล้ง โรคระบาด ภัยสงคราม ฯลฯ', icon:'🌋', tag:'นิยาม' },
  { term:'ฉุกเฉิน', thai:'', def:'สถานการณ์เกิดทันทีทันใดหรือคาดว่าจะเกิดในระยะใกล้ และต้องได้รับการจัดการอย่างเร่งด่วน', icon:'⏱️', tag:'นิยาม' },
  { term:'ในเชิงป้องกันหรือยับยั้ง', thai:'', def:'การดำเนินการลดผลกระทบจากภัยที่คาดว่าจะเกิดในเร็ว ๆ นี้', icon:'🛡️', tag:'นิยาม' },
  { term:'ผู้รักษาการตามระเบียบ', thai:'', def:'รัฐมนตรีว่าการกระทรวงการคลัง', icon:'💼', tag:'องค์กร' },
  { term:'ก.ช.ภ.จ.', thai:'ระดับจังหวัด', def:'ประธานคือผู้ว่าราชการจังหวัด ทำหน้าที่กลั่นกรองความช่วยเหลือจากอำเภอและประกาศเขตตามกรอบของระเบียบ', icon:'🏛️', tag:'องค์กร' },
  { term:'ก.ช.ภ.อ.', thai:'ระดับอำเภอ', def:'ประธานคือนายอำเภอหรือปลัดอำเภอผู้เป็นหัวหน้าประจำกิ่งอำเภอ ประเมินความเสียหายและความเหมาะของการช่วยเหลือในเขต', icon:'👥', tag:'องค์กร' },
  { term:'กรรมการและเลขานุการ ก.ช.ภ.จ.', thai:'จากแบบเฉลย', def:'หัวหน้าสำนักงานป้องกันและบรรเทาสาธารณภัยจังหวัด', icon:'📝', tag:'จับข้อสอบ' },
  { term:'วงเงิน (ตัวอย่าง)', thai:'กรมปภ.', def:'หนึ่งร้อยล้านบาท ตามตารางวงทดรองในระเบียบและสรุปแนวสอบ', icon:'💯', tag:'ตัวเลข / วงเงิน' },
  { term:'วงเงิน (ตัวอย่าง)', thai:'ปภ.จังหวัด', def:'ห้าสิบล้านบาทต่อแห่ง ตามตารางวงทดรองในระเบียบ', icon:'5️⃣', tag:'ตัวเลข / วงเงิน' },
  { term:'วงเงิน (ตัวอย่าง)', thai:'สป.มท.', def:'ห้าสิบล้านบาท ตามตารางวงทดรองในระเบียบ', icon:'5️⃣', tag:'ตัวเลข / วงเงิน' },
  { term:'เพดานจัดสรรอำเภอ', thai:'', def:'ผู้ว่าราชการจังหวัดจัดสรรให้อำเภอหรือกิ่งอำเภอได้แห่งละไม่เกินหนึ่งล้านบาท', icon:'1️⃣', tag:'ตัวเลข / วงเงิน' },
  { term:'ป้องกันหรือยับยั้ง', thai:'วงยกเว้นประกาศเขต', def:'ใช้จ่ายได้ไม่เกินสิบล้านบาทโดยไม่ต้องประกาศเขตตามลักษณะที่ระเบียบกำหนด', icon:'🔟', tag:'จับข้อสอบ' },
  { term:'กรอบเวลา', thai:'ใบสำคัญ', def:'หกสิบวันทำการ นับจากได้รับเงินจากคลัง ให้ส่งใบสำคัญและหลักฐานแก่กรมบัญชีกลาง', icon:'6️⃣', tag:'จับข้อสอบ' },
  { term:'กรอบเวลา', thai:'ชดใช้', def:'หนึ่งร้อยยี่สิบวันทำการ เสร็จสิ้นกระบวนการขอรับการโอนงบประมาณเพื่อชดใช้เงินทดรองราชการ', icon:'🔢', tag:'จับข้อสอบ' },
  { term:'กรอบเวลา', thai:'ตรวจสอบภายใน', def:'สามสิบวัน นับจากวันสิ้นสุดการช่วยเหลือ ให้ผู้ตรวจสอบภายในรายงานผล', icon:'3️⃣', tag:'จับข้อสอบ' },
  { term:'ประกาศเขตใน กทม.', thai:'', def:'จากแบบเฉลย ผู้มีอำนาจประกาศเขตการให้ความช่วยเหลือฉุกเฉินในกรุงเทพมหานครคืออธิบดีกรมป้องกันและบรรเทาสาธารณภัย', icon:'🏙️', tag:'จับข้อสอบ' },
  { term:'ฐานกฎหมายออกระเบียบ', thai:'', def:'พระราชบัญญัติวินัยการเงินการคลังของรัฐ พ.ศ. 2561', icon:'📜', tag:'จับข้อสอบ' },
  { term:'ยกเลิกระเบียบเดิม', thai:'', def:'ระเบียบกระทรวงการคลังว่าด้วยเรื่องเดียวกัน พ.ศ. 2562', icon:'🗑️', tag:'จับข้อสอบ' },
];

function scrollToSummaries(){var el=document.getElementById('summaries-start');if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}
function showSection(id){
  document.querySelectorAll('section').forEach(function(s){s.classList.remove('active');});
  if(id==='content'){['content','structure','glossary'].forEach(function(sid){var x=document.getElementById(sid);if(x)x.classList.add('active');});}
  else{var sec=document.getElementById(id);if(sec)sec.classList.add('active');}
  document.querySelectorAll('.nav-tab').forEach(function(t){t.classList.toggle('active',t.getAttribute('data-section')===id);});
  window.scrollTo({top:0,behavior:'smooth'});
}

function toggleAcc(id){
  var body=document.getElementById(id);
  var arr=document.getElementById('arr-'+id);
  if(!body||!arr)return;
  body.classList.toggle('open');
  arr.classList.toggle('open');
}

function expandAll(){
  ['b1','b2','b3','b4'].forEach(function(id){
    var body=document.getElementById(id);
    var arr=document.getElementById('arr-'+id);
    if(body)body.classList.add('open');
    if(arr)arr.classList.add('open');
  });
}

function toggleDrop(menuId){
  var el=document.getElementById('drop-'+menuId);
  if(!el)return;
  el.classList.toggle('open');
  document.addEventListener('click',function handler(e){
    if(!el.contains(e.target)&&!e.target.closest('[onclick*="toggleDrop"]')){
      el.classList.remove('open');
      document.removeEventListener('click',handler);
    }
  });
}

function escapeHtml(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

var TAG_COLORS={
  'นิยาม':{bg:'#dbeafe',text:'#1e40af',border:'#93c5fd'},
  'องค์กร':{bg:'#fce7f3',text:'#9d174d',border:'#f472b6'},
  'ตัวเลข / วงเงิน':{bg:'#fef3c7',text:'#92400e',border:'#fcd34d'},
  'จับข้อสอบ':{bg:'#d1fae5',text:'#065f46',border:'#6ee7b7'},
};

function renderTagFilters(){
  var wrap=document.getElementById('tagFilters');
  if(!wrap)return;
  wrap.innerHTML=TAGS_ALL.map(function(tag){
    var isActive=activeTag===tag;
    if(tag==='ทั้งหมด'){
      return'<button type="button" onclick="setTag('+JSON.stringify(tag)+')" class="px-4 py-1.5 rounded-full text-[11px] font-kanit font-semibold transition-all border '+(isActive?'border-[color:var(--ddpm-navy)] bg-[color:var(--ddpm-navy)] text-white':'border-slate-200 bg-white text-slate-500 hover:border-slate-400')+'">'+escapeHtml(tag)+'</button>';
    }
    var c=TAG_COLORS[tag]||{bg:'#f1f5f9',text:'#334155',border:'#e2e8f0'};
    var style=isActive?'background:'+c.text+';color:white;border-color:'+c.text:'background:'+c.bg+';color:'+c.text+';border-color:'+c.border;
    return'<button type="button" onclick="setTag('+JSON.stringify(tag)+')" class="px-4 py-1.5 rounded-full text-[11px] font-kanit font-semibold transition-all border" style="'+style+'">'+escapeHtml(tag)+'</button>';
  }).join('');
}

function setTag(tag){activeTag=tag;renderTagFilters();filterGloss();}

function glossMatches(g,q){
  if(activeTag!=='ทั้งหมด'&&g.tag!==activeTag)return false;
  if(!q)return true;
  var blob=(g.term+' '+(g.thai||'')+' '+g.def+' '+(g.tag||'')).toLowerCase();
  return blob.indexOf(q)!==-1;
}

function renderGloss(list){
  var grid=document.getElementById('glossGrid');
  var empty=document.getElementById('glossEmpty');
  if(!grid)return;
  if(!list.length){grid.innerHTML='';if(empty)empty.classList.remove('hidden');return;}
  if(empty)empty.classList.add('hidden');
  grid.innerHTML=list.map(function(g){
    var c=TAG_COLORS[g.tag]||{bg:'#f1f5f9',text:'#334155',border:'#e2e8f0'};
    var th=g.thai?'<span class="text-xs font-sarabun font-semibold block" style="color:'+c.text+'">'+escapeHtml(g.thai)+'</span>':'';
    return'<div class="bg-white rounded-2xl p-4 shadow-sm border border-slate-100" style="border-left:4px solid '+c.border+'"><div class="flex items-start gap-3 mb-2"><span class="text-2xl shrink-0 mt-0.5">'+(g.icon||'📘')+'</span><div class="flex-1 min-w-0"><span class="font-bold font-kanit text-slate-900 text-sm block leading-snug">'+escapeHtml(g.term)+'</span>'+th+'</div></div><p class="font-sarabun text-slate-600 text-sm leading-relaxed mb-3">'+escapeHtml(g.def)+'</p><span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold font-kanit" style="background:'+c.bg+';color:'+c.text+';border:1px solid '+c.border+'">'+escapeHtml(g.tag)+'</span></div>';
  }).join('');
}

function filterGloss(){
  var qEl=document.getElementById('glossSearch');
  var q=(qEl&&qEl.value||'').trim().toLowerCase();
  renderGloss(glossaryData.filter(function(g){return glossMatches(g,q);}));
}

var sh=document.getElementById('statCountHero');if(sh)sh.textContent=String(glossaryData.length);
renderTagFilters();filterGloss();
