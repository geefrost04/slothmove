/**
 * PAB System Loader - Data-driven Architecture
 * Detects PAGE_TYPE and loads appropriate template
 */

document.addEventListener('DOMContentLoaded', function() {
    const PAGE_TYPE = window.PAGE_TYPE || 'lesson';
    const BASE_PATH = window.BASE_PATH || '../_system/';

    // Load base styles
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = BASE_PATH + 'styles.css';
    document.head.appendChild(styleLink);

    // Load appropriate template based on page type
    if (PAGE_TYPE === 'lesson') {
        loadLessonPage();
    } else if (PAGE_TYPE === 'quiz') {
        loadQuizPage();
    }

    function loadLessonPage() {
        // Inject lesson template structure
        document.body.innerHTML = `
            <nav class="nav" id="navbar">
                <div class="nav-inner">
                    <a href="../indexPAB.html" class="nav-logo">
                        <img src="../../../../pic/slothmove_mascot.png" alt="SlothMove">
                        Sloth<span class="logo-accent">Move</span>
                        <span class="logo-sep">|</span>
                    </a>
                    <div class="nav-center">
                        <a href="#section-home" class="nav-tab active" data-section="home">🏠 หน้าแรก</a>
                        <a href="#section-s1" class="nav-tab" data-section="s1">📖 สรุปเนื้อหา</a>
                        <a href="#section-s2" class="nav-tab" data-section="s2">🏛️ โครงสร้าง</a>
                        <a href="#section-s3" class="nav-tab" data-section="s3">📚 คำศัพท์</a>
                        <a href="quiz.html" class="nav-tab" data-section="quiz" target="_blank" rel="noopener noreferrer">✏️ ทำข้อสอบ</a>
                    </div>
                    <div class="nav-actions">
                        <a href="../indexPAB.html" class="nav-btn">🏠 หน้าหลัก</a>
                        <button class="nav-btn-accent" onclick="showDonatePopup()">☕ เลี้ยงกาแฟ</button>
                    </div>
                    <button class="nav-hamburger" id="mobileMenuBtn" aria-label="เปิดเมนู">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
                    </button>
                </div>
                <div class="mobile-menu" id="mobileMenu">
                    <a href="#section-home">🏠 หน้าแรก</a>
                    <a href="#section-s1">📖 สรุปเนื้อหา</a>
                    <a href="#section-s2">🏛️ โครงสร้าง</a>
                    <a href="#section-s3">📚 คำศัพท์</a>
                    <a href="quiz.html" target="_blank" rel="noopener noreferrer">✏️ ทำข้อสอบ</a>
                    <button class="mobile-cta" onclick="showDonatePopup()">☕ เลี้ยงกาแฟ</button>
                </div>
            </nav>

            <main class="page-content">
                <section class="hero" id="section-home" style="scroll-margin-top: 72px;">
                    <div class="hero-inner">
                        <div class="hero-content">
                            <div class="hero-badge">
                                <span class="hero-badge-dot"></span>
                                <span id="hero-section-label">พ.ร.บ. ปรับปรุงกระทรวงฯ</span>
                            </div>
                            <h1 class="hero-title">
                                <span class="hl-sub">พ.ร.บ. ปรับปรุงกระทรวง ทบวง กรม พ.ศ. 2545</span>
                                พระราชบัญญัติ<br>ปรับปรุงกระทรวง<br>
                                <span class="hl-yellow" id="hero-title-short">ทบวง กรม</span>
                            </h1>
                            <div class="hero-actions">
                                <a href="#section-s1" class="btn-primary">
                                    📖 เข้าสู่บทเรียน
                                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                                </a>
                                <a href="quiz.html" class="btn-dark" target="_blank" rel="noopener noreferrer">
                                    ✏️ ทำข้อสอบทันที
                                </a>
                            </div>
                        </div>
                        <div class="hero-visual">
                            <div class="hero-mascot">
                                <img src="../../../../pic/logo ปภ.png" alt="ตรากรมป้องกันและบรรเทาสาธารณภัย">
                            </div>
                        </div>
                    </div>
                </section>

                <section class="org-chart-section" id="section-s1" style="scroll-margin-top: 72px;">
                    <div class="container">
                        <div class="sec-break"><span class="sec-break-label">ส่วนที่ 1 · สรุปเนื้อหา</span></div>
                        <h2 style="font-family:var(--font-display); font-weight:900; font-size:clamp(1.5rem,3vw,2.2rem); color:var(--text); text-align:center; margin-bottom:var(--space-xl);">สรุปเนื้อหา พ.ร.บ. ปรับปรุงกระทรวง ทบวง กรม พ.ศ. 2545</h2>
                        <div style="display:flex; justify-content:flex-end; margin-bottom:var(--space-md);">
                            <button onclick="expandAll()" class="btn-secondary" style="font-size:0.8rem; padding:8px 20px;">
                                ขยายทั้งหมด
                            </button>
                        </div>
                        <div id="s1-content"></div>
                    </div>
                </section>

                <section class="org-chart-section" id="section-s2" style="scroll-margin-top: 72px;">
                    <div class="container">
                        <div class="sec-break"><span class="sec-break-label">ส่วนที่ 2 · โครงสร้างกระทรวง</span></div>
                        <h2 style="font-family:var(--font-display); font-weight:900; font-size:clamp(1.5rem,3vw,2.2rem); color:var(--text); text-align:center; margin-bottom:var(--space-sm);">โครงสร้างราชการส่วนกลาง</h2>
                        <p id="s2-description" style="text-align:center; font-family:var(--font-body); font-size:0.88rem; color:var(--text-muted); margin-bottom:var(--space-xl);"></p>
                        <div id="s2-content"></div>
                    </div>
                </section>

                <section class="glossary-section" id="section-s3" style="scroll-margin-top: 72px;">
                    <div class="container">
                        <div class="sec-break"><span class="sec-break-label">ส่วนที่ 3 · คำศัพท์และตัวเลขน่ารู้</span></div>
                        <h2 style="font-family:var(--font-display); font-weight:900; font-size:clamp(1.5rem,3vw,2.2rem); color:var(--text); margin-bottom:var(--space-sm);">คลังคำศัพท์</h2>
                        <p style="font-family:var(--font-body); font-size:0.88rem; color:var(--text-muted); margin-bottom:var(--space-lg);">ศัพท์เชิงกฎหมาย ระเบียบ และคำศัพท์ทางราชการ</p>
                        <div id="s3-content"></div>
                    </div>
                </section>
            </main>

            <div class="donate-popup-overlay" id="donatePopup" style="display:none; position:fixed; inset:0; z-index:99999; background:rgba(26,26,46,0.6); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); align-items:center; justify-content:center; padding:var(--space-lg);">
                <div style="background:var(--white); border-radius:var(--radius-xl); max-width:380px; width:100%; padding:var(--space-xl); text-align:center; box-shadow:var(--shadow-xl); position:relative; animation:fadeUp 0.3s var(--ease-out);">
                    <button onclick="closeDonatePopup()" style="position:absolute; top:12px; right:12px; width:32px; height:32px; border-radius:50%; border:none; background:var(--cream); color:var(--text-muted); font-size:1.1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; line-height:1;">✕</button>
                    <div style="width:72px; height:72px; background:var(--yellow); border-radius:var(--radius-xl); display:flex; align-items:center; justify-content:center; font-size:2.2rem; margin:0 auto var(--space-md); box-shadow:var(--shadow-md);">☕</div>
                    <h2 style="font-family:var(--font-display); font-weight:900; font-size:1.4rem; color:var(--text); margin-bottom:var(--space-sm);">เลี้ยงกาแฟผมหน่อยครับ</h2>
                    <p style="font-family:var(--font-body); font-size:0.9rem; color:var(--text-muted); line-height:1.7; margin-bottom:var(--space-lg);">เราตั้งใจทำเนื้อหาให้ทุกคนเรียนฟรีตลอดไป<br>หากได้รับประโยชน์ สามารถสนับสนุนได้ตามกำลังศรัทธา</p>
                    <div style="background:var(--cream-warm); border-radius:var(--radius-lg); padding:var(--space-md); margin-bottom:var(--space-md);">
                        <img src="../../../../pic/qr.jpg" alt="QR พร้อมเพย์สำหรับสนับสนุน SlothMove" style="width:100%; border-radius:var(--radius-md); border:1px solid var(--border-light);">
                    </div>
                    <p style="font-family:var(--font-body); font-size:0.72rem; color:var(--text-light); margin-bottom:12px;">* สแกนผ่านแอปธนาคารทุกแห่ง</p>
                    <a href="https://www.facebook.com/profile.php?id=61589670089745" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:11px;border-radius:10px;background:#1877F2;color:#fff;font-family:var(--font-display);font-weight:700;font-size:0.85rem;margin-bottom:8px;text-decoration:none;"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>ติดตาม Facebook</a>
                    <button onclick="closeDonatePopup()" style="width:100%;padding:10px;border-radius:10px;border:1.5px solid var(--border);background:var(--cream);font-family:var(--font-display);font-weight:700;font-size:0.82rem;color:var(--text-muted);cursor:pointer;">ปิด</button>
                </div>
            </div>

            <footer class="footer-section">
                    <div class="footer-inner">
                        <div class="footer-brand">
                            <img src="../../../../pic/slothmove_mascot.png" alt="SlothMove" class="footer-logo">
                            <div class="footer-brand-text">
                                <span class="footer-brand-name">Sloth<span class="accent">Move</span></span>
                                <span class="footer-brand-tagline">สาระครบ จบในที่เดียว</span>
                            </div>
                        </div>
                        <div class="footer-actions">
                            <a href="https://www.facebook.com/profile.php?id=61589670089745" target="_blank" rel="noopener noreferrer" class="footer-fb-btn" aria-label="Facebook">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                Facebook
                            </a>
                            <a href="../indexPAB.html" class="footer-back-btn">กลับหน้าคอร์ส →</a>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p class="footer-copy">© 2026 SlothMove <span class="heart">❤</span></p>
                    </div>
                </footer>

            <button class="theme-toggle" id="themeToggle" aria-label="สลับโหมดมืด/สว่าง">
                <span class="toggle-icon sun">☀️</span>
                <span class="toggle-icon moon">🌙</span>
                <span class="toggle-knob"></span>
            </button>
        `;

        // Auto-detect data: check LESSON_DATA, then any window.*_DATA global
        let lessonData = window.LESSON_DATA;
        if (!lessonData) {
            const dataKey = Object.keys(window).find(k => k.endsWith('_DATA') && window[k]?.sections);
            lessonData = dataKey ? window[dataKey] : getDefaultData();
        }
        window.LESSON_DATA = lessonData;
        renderLessonData(lessonData);

        // Render lesson content
        renderLessonContent();
    }

    // ===== LESSON RENDERER FUNCTIONS =====
    function renderLessonContent() {
        const data = window.LESSON_DATA;
        if (!data) {
            console.error('No LESSON_DATA found');
            return;
        }

        renderS1();
        if (data.sections.find(s => s.id === 's2')) {
            renderS2();
        }
        renderS3();

        setupAccordion();
        setupGlossarySearch();
        setupScrollSpy();
        setupThemeToggle();
        setupMobileMenu();
        setupNavbarScroll();
        setupDonatePopup();

        console.log('✅ Lesson rendered:', data.title);
    }

    function renderS1() {
        const s1 = window.LESSON_DATA.sections.find(s => s.id === 's1');
        if (!s1 || !s1.chapters) return;

        const container = document.getElementById('s1-content');
        if (!container) return;

        let html = '';
        s1.chapters.forEach((ch, idx) => {
            html += `
                <div class="chapter-acc" id="acc${idx}">
                    <div class="chapter-acc-header" onclick="toggleAcc(${idx})">
                        <div class="chapter-acc-num">${ch.num}</div>
                        <span class="chapter-acc-emoji">${ch.emoji}</span>
                        <span class="chapter-acc-title">${ch.title}</span>
                        <svg class="chapter-acc-arrow" id="arr${idx}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/></svg>
                    </div>
                    <div class="chapter-acc-body" id="body${idx}"><div class="acc-body-inner">
                        ${renderBodyItems(ch.body)}
                    </div></div>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    function renderBodyItems(items) {
        if (!items) return '';
        return items.map(item => {
            switch(item.type) {
                case 'p': return `<p class="ch-p">${item.text}</p>`;
                case 'heading': return `<p class="ch-subheading">${item.text}</p>`;
                case 'list': return `<ul class="ch-list">${item.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
                case 'box':
                    const colors = {blue: '#e8f4fd', green: '#e8f5ef', purple: '#f3e8fd', amber: '#fef3e8', rose: '#fde8e8'};
                    const borderColors = {blue: '#3b82f6', green: '#22c55e', purple: '#8b5cf6', amber: '#f59e0b', rose: '#f43f5e'};
                    const bg = colors[item.color] || colors.blue;
                    const border = borderColors[item.color] || borderColors.blue;
                    return `<div style="background:${bg};border-left:4px solid ${border};padding:16px;border-radius:8px;margin:16px 0;"><strong>${item.title}</strong>${item.items ? `<ul style="margin:8px 0 0 16px">${item.items.map(i => `<li>${i}</li>`).join('')}</ul>` : `<p style="margin-top:8px">${item.text || ''}</p>`}</div>`;
                case 'keypoint': return `<div class="key-point"><div class="key-point-title">${item.title}</div><div class="key-point-text">${item.text}</div></div>`;
                case 'grid':
                    const gridColors = {blue: '#e8f4fd', green: '#e8f5ef', purple: '#f3e8fd', amber: '#fef3e8'};
                    return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin:16px 0;">${item.items.map(g => `<div style="background:${gridColors[g.color] || '#fff'};padding:16px;border-radius:12px;border:1px solid var(--border-light);"><strong style="color:var(--navy);display:block;margin-bottom:4px">${g.title}</strong><span style="font-size:0.9rem;color:var(--text-muted)">${g.text}</span></div>`).join('')}</div>`;
                case 'table':
                    return `<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.9rem;">${item.rows.map((row, i) => `<tr style="${i === 0 ? 'background:var(--navy);color:white;font-weight:600;' : 'border-bottom:1px solid var(--border-light);'}">${row.map(cell => `<td style="padding:12px;border:1px solid var(--border-light);">${cell}</td>`).join('')}</tr>`).join('')}</table>`;
                default: return '';
            }
        }).join('');
    }

    function renderS2() {
        const s2 = window.LESSON_DATA.sections.find(s => s.id === 's2');
        if (!s2) return;

        const container = document.getElementById('s2-content');
        if (!container) return;

        let html = '';

        // Org Chart
        if (s2.orgChart) {
            const chart = s2.orgChart;
            html += `
                <div class="org-container" style="margin-bottom:var(--space-xl); text-align:center;">
                    <h3 style="font-family:var(--font-display); font-weight:900; font-size:1.1rem; color:var(--yellow-strong); margin-bottom:var(--space-lg);">🏛️ โครงสร้างการบริหารราชการส่วนกลาง</h3>
                    <div style="display:inline-block; background:var(--yellow-strong); color:var(--navy); padding:var(--space-md) clamp(1.5rem,4vw,2.5rem); border-radius:var(--radius-lg); font-family:var(--font-display); font-weight:900; font-size:1rem; margin-bottom:var(--space-sm); box-shadow:var(--shadow-md);">
                        นายกรัฐมนตรี + ครม.
                        <p style="font-size:0.65rem; font-weight:500; color:var(--navy); margin-top:4px; opacity:0.7;">ผู้รักษาการตาม พ.ร.บ. · กำหนดนโยบายและบริหารส่วนกลาง</p>
                    </div>
                    <div class="org-line-v" style="margin:var(--space-sm) auto;"></div>
                    <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:var(--space-md); margin-bottom:var(--space-md);">
                        <div><div class="org-line-v" style="margin:0 auto var(--space-xs);"></div><div class="org-box" style="min-width:200px;">สำนักนายกรัฐมนตรี<p class="org-box-label">มีฐานะเป็นกระทรวง · มาตรา 5(1)</p></div></div>
                        <div><div class="org-line-v" style="margin:0 auto var(--space-xs);"></div><div class="org-box" style="min-width:200px;">20 กระทรวง<p class="org-box-label">มาตรา 5(2)–(21) · มีรัฐมนตรีเป็นผู้บังคับบัญชา</p></div></div>
                        <div><div class="org-line-v" style="margin:0 auto var(--space-xs);"></div><div class="org-box" style="min-width:200px; border-color:rgba(255,255,255,0.2); color:rgba(255,255,255,0.6);">ส่วนราชการไม่สังกัดกระทรวง<p class="org-box-label">มาตรา 46 · ขึ้นตรงนายกรัฐมนตรี</p></div></div>
                    </div>
                    <div class="org-line-h" style="margin:var(--space-md) auto;"></div>
                    <p style="font-family:var(--font-body); font-size:0.7rem; color:rgba(255,255,255,0.3); margin-top:var(--space-sm);">ล่าสุด: ฉบับที่ 20 (พ.ศ. 2564) — จัดตั้ง สคทช. · ฉบับที่ 19 (พ.ศ. 2562) — จัดตั้ง อว.</p>
                </div>
            `;
        }

        // Info Cards
        if (s2.infoCards) {
            html += '<div class="org-grid" style="margin-bottom:var(--space-lg);">';
            s2.infoCards.forEach(card => {
                html += `
                    <div class="org-info-card">
                        <h4>${card.title}</h4>
                        <ul>
                            ${card.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `;
            });
            html += '</div>';
        }

        // Tip
        if (s2.tipText) {
            html += `
                <div class="tip-box">
                    <div class="tip-box-title">💡 ทิปทบทวน</div>
                    <p>${s2.tipText}</p>
                </div>
            `;
        }

        container.innerHTML = html;
    }

    function renderS3() {
        const s3 = window.LESSON_DATA.sections.find(s => s.id === 's3');
        if (!s3) return;

        const container = document.getElementById('s3-content');
        if (!container) return;

        let html = '';

        // Number Cards
        if (s3.numberCards) {
            html += `
                <div style="margin-bottom:var(--space-xl);">
                    <div style="display:flex; align-items:center; gap:var(--space-sm); margin-bottom:var(--space-md);">
                        <span style="font-size:1.3rem;">🔢</span>
                        <h3 style="font-family:var(--font-display); font-weight:700; font-size:1rem; color:var(--navy);">ตัวเลขน่ารู้</h3>
                    </div>
                    <div class="number-card-grid">
                        ${s3.numberCards.map(card => `
                            <div class="number-card">
                                <div class="number-card-num">${card.num}</div>
                                <div class="number-card-label">${card.label}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Glossary
        if (s3.glossary) {
            html += `
                <div class="glossary-search-wrap">
                    <input id="glossarySearch" oninput="filterGloss()" placeholder="🔍 ค้นหาคำศัพท์..." type="text" class="glossary-search">
                </div>
                <div id="glossaryList" class="glossary-grid">
                    ${s3.glossary.map(item => `
                        <div class="glossary-item">
                            <div class="glossary-term">
                                <span class="glossary-term-icon">${item.icon}</span>
                                ${item.term}
                            </div>
                            <div class="glossary-meaning">${item.meaning}</div>
                            ${item.tag ? `<div><span class="glossary-tag">${item.tag}</span></div>` : ''}
                        </div>
                    `).join('')}
                </div>
                <div id="glossaryEmpty" class="glossary-item" style="text-align:center; display:none;">
                    <p style="font-family:var(--font-body); font-size:0.88rem; color:var(--text-muted);">📚 ไม่พบคำที่ค้นหา</p>
                </div>
            `;
        }

        container.innerHTML = html;
    }

    function toggleAcc(idx) {
        var body = document.getElementById('body' + idx);
        var arr = document.getElementById('arr' + idx);
        if (!body) return;
        var isOpen = body.classList.contains('open');
        document.querySelectorAll('.chapter-acc-body').forEach(function(b){b.classList.remove('open');});
        document.querySelectorAll('.chapter-acc-arrow').forEach(function(a){a.classList.remove('open');});
        document.querySelectorAll('.chapter-acc').forEach(function(c){c.classList.remove('open');});
        if (!isOpen) {
            body.classList.add('open');
            if (arr) arr.classList.add('open');
            document.getElementById('acc' + idx).classList.add('open');
        }
    }

    window.toggleAcc = toggleAcc;

    function expandAll() {
        var data = window.LESSON_DATA;
        if (!data) return;
        var s1 = data.sections.find(s => s.id === 's1');
        if (!s1 || !s1.chapters) return;
        s1.chapters.forEach(function(ch, i) {
            var body = document.getElementById('body' + i);
            var arr = document.getElementById('arr' + i);
            if (body) body.classList.add('open');
            if (arr) arr.classList.add('open');
            var acc = document.getElementById('acc' + i);
            if (acc) acc.classList.add('open');
        });
    }

    window.expandAll = expandAll;

    function filterGloss() {
        var q = document.getElementById('glossarySearch').value.toLowerCase();
        var items = document.querySelectorAll('.glossary-item');
        var count = 0;
        items.forEach(function(card) {
            var show = card.textContent.toLowerCase().includes(q);
            card.style.display = show ? '' : 'none';
            if (show) count++;
        });
        var empty = document.getElementById('glossaryEmpty');
        if (empty) empty.style.display = (count === 0 && q.length > 0) ? '' : 'none';
    }

    window.filterGloss = filterGloss;

    function setupAccordion() {
        // Accordion is already set up via toggleAcc
    }

    function setupGlossarySearch() {
        // Glossary search is already set up via filterGloss
    }

    function setupScrollSpy() {
        var sections = ['home', 's1', 's2', 's3'];
        window.addEventListener('scroll', function() {
            var scrollY = window.scrollY + 120;
            var activeId = 'home';
            sections.forEach(function(id) {
                var sec = document.getElementById('section-' + id);
                if (sec && scrollY >= sec.offsetTop) activeId = id;
            });
            document.querySelectorAll('.nav-tab').forEach(function(t) {
                t.classList.toggle('active', t.getAttribute('data-section') === activeId);
            });
        }, { passive: true });
    }

    function setupThemeToggle() {
        var themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;
        var saved = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var isDark = saved ? saved === 'dark' : prefersDark;
        if (saved) document.documentElement.setAttribute('data-theme', saved);
        else if (!prefersDark) document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.classList.toggle('dark-mode', isDark);
        themeToggle.setAttribute('aria-checked', isDark ? 'true' : 'false');
        themeToggle.addEventListener('click', function() {
            var nowDark = document.documentElement.getAttribute('data-theme') === 'dark';
            var next = nowDark ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            themeToggle.classList.toggle('dark-mode', !nowDark);
            themeToggle.setAttribute('aria-checked', !nowDark ? 'true' : 'false');
        });
    }

    function setupMobileMenu() {
        var mobileMenuBtn = document.getElementById('mobileMenuBtn');
        var mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', function() { mobileMenu.classList.toggle('active'); });
            mobileMenu.querySelectorAll('a, button').forEach(function(l) {
                l.addEventListener('click', function() { mobileMenu.classList.remove('active'); });
            });
        }
    }

    function setupNavbarScroll() {
        var navbar = document.getElementById('navbar');
        if (navbar) {
            window.addEventListener('scroll', function() {
                navbar.classList.toggle('scrolled', window.scrollY > 10);
            });
        }
    }

    function showDonatePopup() {
        var popup = document.getElementById('donatePopup');
        if (popup) {
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
    window.showDonatePopup = showDonatePopup;

    function closeDonatePopup() {
        var popup = document.getElementById('donatePopup');
        if (popup) {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
    window.closeDonatePopup = closeDonatePopup;

    function setupDonatePopup() {
        var popup = document.getElementById('donatePopup');
        if (popup) {
            popup.addEventListener('click', function(e) {
                if (e.target === popup) closeDonatePopup();
            });
        }
    }

    // ===== QUIZ FUNCTIONS =====
    function loadQuizPage() {
        var lessonHref = window.LESSON_HREF || 'ministry_act.html';
        var picBase = '../../../../pic/';
        var cssBase = window.BASE_PATH || '../_system/';

        // Load quiz-specific CSS
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssBase + 'quiz.css';
        document.head.appendChild(link);

        document.body.innerHTML =
            '<nav class="nav" id="navbar">' +
            '<div class="nav-inner">' +
            '<a href="' + lessonHref + '" class="nav-logo">' +
            '<img src="' + picBase + 'slothmove_mascot.png" alt="SlothMove">' +
            'Sloth<span class="logo-accent">Move</span>' +
            '<span class="logo-sep">|</span><span class="logo-sub">ปภ.</span></a>' +
            '<div class="nav-center">' +
            '<a href="' + lessonHref + '" class="nav-tab">📖 เนื้อหา</a>' +
            '<a href="#" class="nav-tab active">✏️ ทำข้อสอบ</a></div>' +
            '<div class="nav-actions">' +
            '<a href="' + lessonHref + '" class="nav-btn">📖 เนื้อหา</a>' +
            '<button class="nav-btn-accent" onclick="showDonatePopup()">☕ เลี้ยงกาแฟ</button>' +
            '</div></div></nav>' +

            '<div class="screen active" id="startScreen">' +
            '<div class="start-screen"><div class="start-card-wrap"><div class="start-card fade-up">' +
            '<div class="start-card-topbar"></div>' +
            '<div class="start-card-body">' +
            '<span class="start-badge">แบบทดสอบ · พ.ร.บ. ปรับปรุงกระทรวงฯ</span>' +
            '<span class="start-icon">🏛️</span>' +
            '<h1 class="start-title">พ.ร.บ.ปรับปรุงกระทรวง<br>ทบวง กรม พ.ศ. 2545</h1>' +
            '<p class="start-title-sub">กรมป้องกันและบรรเทาสาธารณภัย (ปภ.)</p>' +
            '<p class="start-desc">เตรียมพร้อมสอบราชการ — สรุปโครงสร้างกระทรวง 20 แห่ง + สำนักนายกรัฐมนตรี พร้อมเฉลยทุกข้อ</p>' +
            '<div class="start-tags">' +
            '<span class="start-tag">📋 ส่วนกลาง &amp; ส่วนภูมิภาค</span>' +
            '<span class="start-tag">🏛️ โครงสร้างราชการ</span>' +
            '<span class="start-tag">✏️ ข้อสอบเฉลย</span></div>' +
            '<p class="start-mode-label">เลือกจำนวนข้อสอบ</p>' +
            '<div class="start-modes">' +
            '<button class="start-mode-btn" onclick="startQuiz(10)"><span class="mode-num">10</span><span class="mode-label">ข้อ · ทดสอบเร็ว</span></button>' +
            '<button class="start-mode-btn active" onclick="startQuiz(50)"><span class="mode-num">50</span><span class="mode-label">ข้อ · ครึ่งชุด</span></button>' +
            '<button class="start-mode-btn" onclick="startQuiz(100)"><span class="mode-num">100</span><span class="mode-label">ข้อ · เต็มรอบ</span></button>' +
            '</div></div></div></div></div></div>' +

            '<div class="screen" id="quizScreen">' +
            '<div class="quiz-screen-wrap">' +
            '<div class="quiz-header">' +
            '<span class="quiz-qnum" id="qNum"></span>' +
            '<div class="quiz-progress-wrap"><div class="quiz-progress-bar" id="progressBar"></div></div>' +
            '<span class="quiz-subject-label">' + (window.QUIZ_ICON || '') + ' ' + (window.QUIZ_SUBJECT || '') + '</span>' +
            '<span class="quiz-timer" id="timerDisplay">⏱ 00:00</span>' +
            '<span class="quiz-score" id="scoreDisplay"></span></div>' +
            '<div class="quiz-card">' +
            '<div class="quiz-card-body">' +
            '<p class="quiz-question" id="questionText"></p>' +
            '<div class="quiz-options" id="optionsContainer"></div></div></div>' +
            '<div class="quiz-explanation" id="explanationBox" style="display:none;">' +
            '<p class="quiz-explanation-title">💡 เฉลย</p>' +
            '<p class="quiz-explanation-text" id="explanationText"></p></div>' +
            '<div class="quiz-actions">' +
            '<button class="btn-next" id="nextBtn" onclick="nextQuestion()" style="display:none;">ถัดไป →</button>' +
            '</div></div></div>' +

            '<div class="screen" id="resultScreen">' +
            '<div class="result-screen-wrap">' +
            '<div class="result-card">' +
            '<div class="result-score-hero">' +
            '<span class="result-emoji" id="resultEmoji">🏆</span>' +
            '<h2 class="result-title">ผลการทำข้อสอบ</h2>' +
            '<div class="result-score-ring">' +
            '<svg viewBox="0 0 120 120" width="110" height="110">' +
            '<defs>' +
            '<linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">' +
            '<stop offset="0%" stop-color="#DCCF00"/>' +
            '<stop offset="60%" stop-color="#F5A623"/>' +
            '<stop offset="100%" stop-color="#DCCF00"/>' +
            '</linearGradient>' +
            '</defs>' +
            '<circle class="result-score-ring-track" cx="60" cy="60" r="52"/>' +
            '<circle class="result-score-ring-fill" id="scoreRingFill" cx="60" cy="60" r="52" stroke-dasharray="326.73" stroke-dashoffset="326.73"/>' +
            '</svg>' +
            '<div class="result-score-center">' +
            '<div class="result-score-num" id="scoreText">–</div>' +
            '<div class="result-score-denom" id="scoreDenom"></div></div></div>' +
            '<div class="result-pct-label" id="scoreDetail"></div>' +
            '<div class="result-stats-grid">' +
            '<div class="result-stat-cell"><div class="result-stat-val c-green" id="statCorrect">–</div><div class="result-stat-lbl">ถูก</div></div>' +
            '<div class="result-stat-cell"><div class="result-stat-val c-red" id="statWrong">–</div><div class="result-stat-lbl">ผิด</div></div>' +
            '<div class="result-stat-cell"><div class="result-stat-val c-yellow" id="statTime">–</div><div class="result-stat-lbl">เวลา</div></div>' +
            '</div></div>' +
            '<div class="result-card-body">' +
            '<p class="result-msg" id="resultMsg"></p>' +
            '<div class="result-actions">' +
            '<button class="btn-result-retry" onclick="restartQuiz()">🔄 ทำใหม่</button>' +
            '<a class="btn-result-home" href="' + lessonHref + '">📖 กลับเนื้อหา</a></div>' +
            '<button class="review-btn" id="reviewBtn" onclick="showReview()" style="display:none;">' +
            '<span>📋 ดูข้อที่ทำผิด</span><span class="review-btn-count" id="wrongCount">0</span></button>' +
            '<canvas id="sharePreview" class="share-preview"></canvas>' +
            '<div class="result-action-row">' +
            '<button class="share-btn" id="shareBtn" onclick="shareResult()">' +
            '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>แชร์คะแนน</button>' +
            '<button class="download-btn" id="downloadBtn" onclick="downloadCard()">' +
            '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>บันทึกรูป</button></div>' +
            '<button class="save-btn" onclick="openSaveModal()">🏅 บันทึกคะแนนขึ้นกระดาน</button>' +
            '<div class="result-fb-cta">' +
            '<p class="result-fb-desc">อยากได้หน่วยงานไหนเพิ่มเติม inbox บอกในแฟนเพจเลยครับ</p>' +
            '<a class="fb-btn" href="https://www.facebook.com/profile.php?id=61589670089745" rel="noopener noreferrer" target="_blank">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' +
            'ติดตามข่าวควิซ · Facebook</a></div>' +
            '</div></div></div></div>' +

            '<div class="screen" id="reviewScreen">' +
            '<div class="review-screen-wrap">' +
            '<div class="review-header">' +
            '<button class="back-btn" onclick="showScreen(\'resultScreen\')">← ผลคะแนน</button>' +
            '<div class="review-title"><div>ข้อที่ทำผิด</div><div class="start-stat-label" id="reviewHeader"></div></div>' +
            '<button class="retry-btn" onclick="retryWrong()">🔄 ลองใหม่</button></div>' +
            '<div class="review-list" id="reviewList"></div>' +
            '<div class="review-footer">' +
            '<p class="review-footer-desc">ทำข้อที่ผิดซ้ำจนกว่าจะผ่าน 💪</p>' +
            '<button class="review-footer-btn" onclick="retryWrong()">🔄 ลองใหม่เฉพาะข้อที่ผิด (<span id="retryCountFooter"></span> ข้อ)</button>' +
            '</div></div></div>' +

            '<div class="donate-section"><div class="donate-top-bar"></div>' +
            '<div class="donate-content">' +
            '<h2 class="donate-title">เลี้ยงกาแฟผมหน่อยครับ <span class="highlight">☕</span></h2>' +
            '<p class="donate-desc">หากเนื้อหามีประโยชน์ สนับสนุนได้ตามกำลังครับ</p>' +
            '<div class="qr-card"><img src="' + picBase + 'qr.jpg" alt="QR พร้อมเพย์" loading="lazy">' +
            '<p class="qr-note">* สแกนผ่านแอปธนาคารทุกแห่ง</p></div></div></div>' +

            '<footer class="footer-section"><div class="footer-inner">' +
            '<div class="footer-brand"><img src="' + picBase + 'slothmove_mascot.png" alt="SlothMove" class="footer-logo">' +
            '<div class="footer-brand-text"><span class="footer-brand-name">Sloth<span class="accent">Move</span></span>' +
            '<span class="footer-brand-tagline">สาระครบ จบในที่เดียว</span></div></div>' +
            '<div class="footer-actions"><a href="' + lessonHref + '" class="footer-back-btn">กลับหน้าคอร์ส →</a></div>' +
            '</div><div class="footer-bottom"><p class="footer-copy">© 2026 SlothMove <span class="heart">❤</span></p></div></footer>' +

            '<button class="theme-toggle" id="themeToggle" aria-label="สลับโหมดมืด/สว่าง" role="switch" aria-checked="false">' +
            '<span class="toggle-icon sun">☀️</span><span class="toggle-icon moon">🌙</span><span class="toggle-knob"></span></button>' +

            '<div id="donatePopup" style="display:none;position:fixed;inset:0;z-index:99999;background:rgba(26,26,46,0.65);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:16px">' +
            '<div style="background:var(--white);border-radius:20px;max-width:360px;width:100%;padding:28px 24px 24px;text-align:center;box-shadow:0 24px 64px rgba(0,0,0,0.3);position:relative">' +
            '<button onclick="closeDonatePopup()" style="position:absolute;top:12px;right:12px;width:32px;height:32px;border-radius:50%;border:1.5px solid var(--border);background:var(--cream);color:var(--text-muted);font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button>' +
            '<div style="width:64px;height:64px;background:var(--yellow);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:2rem;margin:0 auto 16px;box-shadow:0 4px 16px rgba(220,207,0,0.35)">☕</div>' +
            '<h2 style="font-family:var(--font-display);font-weight:900;font-size:1.3rem;color:var(--text);margin-bottom:8px">เลี้ยงกาแฟผมหน่อยครับ</h2>' +
            '<p style="font-family:var(--font-body);font-size:0.85rem;color:var(--text-muted);line-height:1.7;margin-bottom:16px">เราตั้งใจทำเนื้อหาให้ทุกคนเรียนฟรีตลอดไป<br>หากได้รับประโยชน์ สนับสนุนได้ตามกำลังศรัทธา</p>' +
            '<div style="background:var(--cream-warm);border-radius:12px;padding:16px;margin-bottom:16px">' +
            '<img src="' + picBase + 'qr.jpg" alt="QR พร้อมเพย์" style="width:160px;height:160px;border-radius:10px;margin:0 auto 8px;display:block;object-fit:cover">' +
            '<p style="font-family:var(--font-body);font-size:0.75rem;color:var(--text-muted)">สแกนผ่านแอปธนาคารทุกแห่ง</p></div>' +
            '<a href="https://www.facebook.com/profile.php?id=61589670089745" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:11px;border-radius:10px;background:#1877F2;color:#fff;font-family:var(--font-display);font-weight:700;font-size:0.85rem;margin-bottom:8px;text-decoration:none">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' +
            'ติดตาม Facebook</a>' +
            '<button onclick="closeDonatePopup()" style="width:100%;padding:10px;border-radius:10px;border:1.5px solid var(--border);background:var(--cream);font-family:var(--font-display);font-weight:700;font-size:0.82rem;color:var(--text-muted);cursor:pointer">ปิด</button>' +
            '</div></div>' +

            '<div class="save-modal hidden" id="saveModal"><div class="modal-card">' +
            '<h3 class="modal-title">🏅 บันทึกขึ้นกระดาน</h3>' +
            '<p class="modal-desc">ใส่ชื่อเล่นของคุณ</p>' +
            '<input class="modal-input" id="nicknameInput" maxlength="20" placeholder="ชื่อเล่น..." type="text">' +
            '<p class="modal-error hidden" id="saveError"></p>' +
            '<div class="modal-actions">' +
            '<button class="modal-cancel-btn" onclick="closeSaveModal()">ยกเลิก</button>' +
            '<button class="modal-save-btn" onclick="confirmSave()">บันทึก</button>' +
            '</div></div></div>';

        initQuiz();
        setupThemeToggle();
        setupNavbarScroll();
        setupDonatePopup();
        refreshQuizPoolCount();
    }

    function initQuiz() {
        // Auto-detect: QUIZ_DATA, or any window.*_QUESTIONS global
        let raw = window.QUIZ_DATA;
        if (!raw) {
            const key = Object.keys(window).find(k => k.endsWith('_QUESTIONS') && Array.isArray(window[k]));
            raw = key ? window[key] : null;
        }
        raw = raw || getDefaultQuestions();

        // Normalize format: support both {q,o,a} and {question,choices,answer}
        window.QUIZ_QUESTIONS = raw.map(item => {
            if (item.q) return item;
            return {
                q: item.question || '',
                o: item.choices || item.options || [],
                a: item.answer !== undefined ? item.answer : 0,
                exp: item.explanation || item.exp || ''
            };
        }).filter(item => item.q && item.o.length > 0);

        console.log('✅ Quiz loaded:', window.QUIZ_QUESTIONS.length, 'questions');
    }

    function getDefaultQuestions() {
        return [
            {q: "พ.ร.บ. ปรับปรุงกระทรวง ทบวง กรม พ.ศ. 2545 มีผลบังคับใช้เมื่อใด?", o: ["วันที่ประกาศในราชกิจจานุเบกษา", "วันถัดจากวันประกาศในราชกิจจานุเบกษา", "30 วันหลังประกาศ", "90 วันหลังประกาศ"], a: 1, exp: "มาตรา 1 ระบุชัดเจนว่ามีผลบังคับใช้วันถัดจากวันประกาศในราชกิจจานุเบกษา"},
            {q: "หน่วยงานใดที่มีฐานะเป็นนิติบุคคลตาม พ.ร.บ. นี้?", o: ["กระทรวงเท่านั้น", "กระทรวงและทบวง", "กระทรวง ทบวง และกรม", "กระทรวง ทบวง กรม และกอง"], a: 2, exp: "มีเฉพาะ กระทรวง ทบวง และกรม ที่เป็นนิติบุคคล กองไม่เป็นนิติบุคคล"},
            {q: "กรมป้องกันและบรรเทาสาธารณภัย (ปภ.) อยู่ในสังกัดใด?", o: ["ยุบรวมเข้ากับกรมอื่น", "ยกระดับขึ้นตรงต่อกระทรวงมหาดไทย", "ย้ายไปอยู่สำนักงานตำรวจแห่งชาติ", "โอนไปกระทรวงมหาดไทย"], a: 1, exp: "กรม ปภ. ยกระดับขึ้นมาอยู่โดยตรง ไม่ใช่ยุบรวม"},
            {q: "หัวหน้าหน่วยงานระดับกรมมีตำแหน่งว่าอย่างไร?", o: ["รัฐมนตรี", "รัฐมนตรีช่วยว่าการ", "อธิบดี", "ผู้อำนวยการ"], a: 2, exp: "กรมมีอธิบดีเป็นหัวหน้า"},
            {q: "กรมตำรวจตาม พ.ร.บ. นี้อยู่ในสังกัดใด?", o: ["กระทรวงมหาดไทย", "กระทรวงกลาโหม", "สำนักงานตำรวจแห่งชาติ", "กระทรวงยุติธรรม"], a: 2, exp: "กรมตำรวจย้ายออกจากกระทรวงมหาดไทย ไปอยู่ภายใต้ สตช."}
        ];
    }

    var LETTERS = ['ก', 'ข', 'ค', 'ง'];
    var _questions = [], _current = 0, _score = 0, _answered = false;
    var _wrongAnswers = [];
    var _quizTimer = null, _quizSec = 0;

    function refreshQuizPoolCount() {
        var el = document.getElementById('quizPoolCount');
        if (el) el.textContent = String((window.QUIZ_QUESTIONS || []).length);
    }

    function _fisherYatesIndices(len) {
        var idx = Array.from({length: len}, function(_, i) { return i; });
        for (var i = len - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = idx[i]; idx[i] = idx[j]; idx[j] = tmp;
        }
        return idx;
    }

    function _shuffleArrayCopy(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
        }
        return a;
    }

    function _shouldKeepOrder(opts) {
        return (opts || []).some(function(t) {
            var s = String(t);
            return /ถูกทุกข้อ/.test(s) || (/ถูกทั้ง/i.test(s) && /และ/.test(s));
        });
    }

    function _shuffleOptions(raw) {
        var q = {q: raw.q, o: raw.o.slice(), a: raw.a, exp: raw.exp || ''};
        if (_shouldKeepOrder(q.o)) return q;
        var correctText = q.o[q.a];
        q.o = _shuffleArrayCopy(q.o);
        q.a = q.o.indexOf(correctText);
        return q;
    }

    function _buildDeck(source, n) {
        var take = Math.min(n, 100, source.length);
        var order = _fisherYatesIndices(source.length).slice(0, take);
        return order.map(function(i) { return _shuffleOptions({q: source[i].q, o: source[i].o.slice(), a: source[i].a, exp: source[i].exp || ''}); });
    }

    window.showScreen = function(id) {
        document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
        var el = document.getElementById(id);
        if (el) el.classList.add('active');
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    function _startTimer() {
        clearInterval(_quizTimer);
        _quizSec = 0; _updateTimerDisplay();
        _quizTimer = setInterval(function() { _quizSec++; _updateTimerDisplay(); }, 1000);
    }

    function _stopTimer() { clearInterval(_quizTimer); }

    function _updateTimerDisplay() {
        var m = String(Math.floor(_quizSec / 60)).padStart(2, '0');
        var s = String(_quizSec % 60).padStart(2, '0');
        var el = document.getElementById('timerDisplay');
        if (el) el.textContent = '\u23F1 ' + m + ':' + s;
    }

    window.startQuiz = function(n) {
        var source = window.QUIZ_QUESTIONS || getDefaultQuestions();
        if (!source.length) { alert('ไม่มีข้อมูลข้อสอบ'); return; }
        _questions = _buildDeck(source, n);
        _current = 0; _score = 0; _wrongAnswers = [];
        _startTimer();
        window.showScreen('quizScreen');
        _renderQuestion();
    };

    window.restartQuiz = function() { window.showScreen('startScreen'); };

    function _renderQuestion() {
        _answered = false;
        var q = _questions[_current];
        var total = _questions.length;
        document.getElementById('qNum').textContent = 'ข้อ ' + (_current + 1) + ' / ' + total;
        document.getElementById('progressBar').style.width = ((_current / total) * 100) + '%';
        document.getElementById('scoreDisplay').textContent = '\u2705 ' + _score;
        document.getElementById('questionText').textContent = q.q;
        document.getElementById('explanationBox').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'none';

        var container = document.getElementById('optionsContainer');
        container.innerHTML = '';
        q.o.forEach(function(opt, i) {
            var btn = document.createElement('button');
            btn.className = 'quiz-opt-btn';
            btn.innerHTML = '<span class="opt-letter">' + (LETTERS[i] || String(i + 1)) + '</span><span>' + _escHtml(opt) + '</span>';
            btn.onclick = function() { _selectAnswer(i); };
            container.appendChild(btn);
        });
    }

    function _selectAnswer(idx) {
        if (_answered) return;
        _answered = true;
        var q = _questions[_current];
        document.querySelectorAll('.quiz-opt-btn').forEach(function(btn, i) {
            btn.disabled = true;
            if (i === q.a) btn.classList.add('opt-correct');
            else if (i === idx && idx !== q.a) btn.classList.add('opt-wrong');
        });
        if (idx === q.a) { _score++; }
        else { _wrongAnswers.push({q: q, userIdx: idx}); }
        var exp = q.exp ? ' — ' + q.exp : '';
        document.getElementById('explanationText').textContent =
            'คำตอบที่ถูกต้องคือ ' + (LETTERS[q.a] || String(q.a + 1)) + '. ' + q.o[q.a] + exp;
        document.getElementById('explanationBox').style.display = '';
        var nb = document.getElementById('nextBtn');
        nb.style.display = '';
        nb.textContent = (_current + 1 < _questions.length) ? 'ถัดไป →' : 'ดูผลลัพธ์ 🎉';
    }

    window.nextQuestion = function() {
        _current++;
        if (_current >= _questions.length) _showResult();
        else _renderQuestion();
    };

    function _showResult() {
        _stopTimer();
        var total = _questions.length;
        var pct = Math.round((_score / total) * 100);
        var wc = _wrongAnswers.length;

        var emoji = '😅', msg = 'อ่านทบทวนเพิ่มอีกนิดนะครับ ลองทำใหม่ได้เลย!';
        if (pct >= 80) { emoji = '🏆'; msg = 'ยอดเยี่ยมมาก! คุณพร้อมสำหรับการสอบแล้ว 🎉'; }
        else if (pct >= 60) { emoji = '👍'; msg = 'ดีมาก! ฝึกเพิ่มอีกหน่อย แล้วคุณจะผ่านได้แน่นอน'; }

        document.getElementById('resultEmoji').textContent = emoji;
        document.getElementById('resultMsg').textContent = msg;

        var circumference = 326.73;
        var offset = circumference - (pct / 100) * circumference;
        var ringEl = document.getElementById('scoreRingFill');
        var gradStop1 = document.querySelector('#scoreGrad stop:first-child');
        var gradStop2 = document.querySelector('#scoreGrad stop:nth-child(2)');
        if (pct >= 80) {
            if (gradStop1) gradStop1.setAttribute('stop-color', '#68d391');
            if (gradStop2) gradStop2.setAttribute('stop-color', '#22c55e');
            if (ringEl) ringEl.closest('svg').style.filter = 'drop-shadow(0 0 12px rgba(104,211,145,0.4))';
        } else if (pct >= 60) {
            if (gradStop1) gradStop1.setAttribute('stop-color', '#DCCF00');
            if (gradStop2) gradStop2.setAttribute('stop-color', '#F5A623');
            if (ringEl) ringEl.closest('svg').style.filter = 'drop-shadow(0 0 10px rgba(220,207,0,0.35))';
        } else {
            if (gradStop1) gradStop1.setAttribute('stop-color', '#fc8181');
            if (gradStop2) gradStop2.setAttribute('stop-color', '#dc2626');
            if (ringEl) ringEl.closest('svg').style.filter = 'drop-shadow(0 0 10px rgba(220,70,70,0.3))';
        }
        if (ringEl) {
            ringEl.style.strokeDashoffset = circumference;
            requestAnimationFrame(function() {
                setTimeout(function() { ringEl.style.strokeDashoffset = offset; }, 50);
            });
        }

        document.getElementById('scoreText').textContent = _score;
        document.getElementById('scoreDenom').textContent = '/ ' + total;
        document.getElementById('scoreDetail').textContent = pct + '%';
        document.getElementById('statCorrect').textContent = _score;
        document.getElementById('statWrong').textContent = wc;
        var m = String(Math.floor(_quizSec / 60)).padStart(2, '0');
        var s = String(_quizSec % 60).padStart(2, '0');
        document.getElementById('statTime').textContent = m + ':' + s;

        var reviewBtnEl = document.getElementById('reviewBtn');
        if (wc > 0) {
            reviewBtnEl.style.display = '';
            document.getElementById('wrongCount').textContent = wc;
        } else {
            reviewBtnEl.style.display = 'none';
        }
        window.showScreen('resultScreen');
        var _emoji = emoji;
        setTimeout(function() { _buildShareCard(_score, total, pct, _emoji); }, 300);
    }

    window.showReview = function() {
        var wc = _wrongAnswers.length;
        var rh = document.getElementById('reviewHeader');
        if (rh) rh.textContent = wc + ' ข้อจากทั้งหมด ' + _questions.length + ' ข้อ';
        var rc = document.getElementById('retryCountFooter');
        if (rc) rc.textContent = wc;

        var list = document.getElementById('reviewList');
        list.innerHTML = '';
        _wrongAnswers.forEach(function(item, n) {
            var q = item.q, userIdx = item.userIdx;
            var card = document.createElement('div');
            card.className = 'review-card';
            var html = '<div class="review-card-header">' +
                '<div class="review-card-qnum">' +
                '<span class="review-num-badge">' + (n + 1) + '</span>' +
                '<span class="review-wrong-label">ตอบผิด</span></div>' +
                '<p class="review-q-text">' + _escHtml(q.q) + '</p></div>' +
                '<div class="review-options">';
            q.o.forEach(function(opt, i) {
                var cls = 'review-opt', badge = '';
                if (i === q.a) {
                    cls = 'review-opt review-opt-correct';
                    badge = '<span class="review-opt-badge badge-correct">✓ เฉลย</span>';
                } else if (i === userIdx) {
                    cls = 'review-opt review-opt-wrong';
                    badge = '<span class="review-opt-badge badge-wrong">✗ คำตอบคุณ</span>';
                }
                html += '<div class="' + cls + '">' +
                    '<span class="opt-letter">' + (LETTERS[i] || String(i + 1)) + '</span>' +
                    '<span style="flex:1">' + _escHtml(opt) + '</span>' + badge + '</div>';
            });
            if (q.exp) html += '<div class="review-explanation">💡 ' + _escHtml(q.exp) + '</div>';
            html += '</div>';
            card.innerHTML = html;
            list.appendChild(card);
        });
        window.showScreen('reviewScreen');
    };

    window.retryWrong = function() {
        var pool = _wrongAnswers.map(function(w) { return _shuffleOptions({q: w.q.q, o: w.q.o.slice(), a: w.q.a, exp: w.q.exp || ''}); });
        if (!pool.length) { window.showScreen('startScreen'); return; }
        _questions = _shuffleArrayCopy(pool);
        _current = 0; _score = 0; _wrongAnswers = [];
        _startTimer();
        window.showScreen('quizScreen');
        _renderQuestion();
    };

    // ===== SHARE CARD (Canvas) =====
    var _shareLogoImg = null, _shareQrImg = null;

    function _loadImg(src) {
        return new Promise(function(resolve) {
            var img = new Image();
            img.onload = function() { resolve(img); };
            img.onerror = function() { resolve(null); };
            fetch(src).then(function(r) { return r.blob(); })
                .then(function(b) { img.src = URL.createObjectURL(b); })
                .catch(function() { img.src = src; });
        });
    }

    function _rrect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x+r, y); ctx.lineTo(x+w-r, y); ctx.quadraticCurveTo(x+w, y, x+w, y+r);
        ctx.lineTo(x+w, y+h-r); ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
        ctx.lineTo(x+r, y+h); ctx.quadraticCurveTo(x, y+h, x, y+h-r);
        ctx.lineTo(x, y+r); ctx.quadraticCurveTo(x, y, x+r, y); ctx.closePath();
    }

    function _clipText(ctx, txt, maxW) {
        if (ctx.measureText(txt).width <= maxW) return txt;
        while (txt.length > 0 && ctx.measureText(txt + '...').width > maxW) txt = txt.slice(0, -1);
        return txt + '...';
    }

    function _drawCard(cvs, sc, total, pct, emoji, logo, qr) {
        var W = 1080, H = 1080;
        cvs.width = W; cvs.height = H;
        var ctx = cvs.getContext('2d');

        // Background
        ctx.fillStyle = '#0f0f23';
        ctx.fillRect(0, 0, W, H);
        var vig = ctx.createRadialGradient(W/2, H/2, 180, W/2, H/2, 750);
        vig.addColorStop(0, 'rgba(220,207,0,0.04)');
        vig.addColorStop(1, 'rgba(0,0,0,0.45)');
        ctx.fillStyle = vig; ctx.fillRect(0, 0, W, H);

        // Top accent bar
        var barGrad = ctx.createLinearGradient(0, 0, W, 0);
        barGrad.addColorStop(0, '#DCCF00');
        barGrad.addColorStop(0.5, '#F5A623');
        barGrad.addColorStop(1, '#DCCF00');
        ctx.fillStyle = barGrad; ctx.fillRect(0, 0, W, 7);

        // Logo (top-center in circle)
        var LS = 140, LX = W/2 - LS/2, LY = 40;
        ctx.save();
        ctx.beginPath(); ctx.arc(W/2, LY + LS/2, LS/2 + 7, 0, Math.PI*2);
        ctx.fillStyle = '#1a1a2e'; ctx.fill();
        var ringGrad = ctx.createLinearGradient(W/2-LS/2, 0, W/2+LS/2, 0);
        ringGrad.addColorStop(0, '#DCCF00'); ringGrad.addColorStop(1, '#F5A623');
        ctx.strokeStyle = ringGrad; ctx.lineWidth = 3; ctx.stroke();
        ctx.clip();
        if (logo) ctx.drawImage(logo, LX, LY, LS, LS);
        ctx.restore();

        // Brand: SlothMove
        var brandY = LY + LS + 52;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.font = '900 54px "Kanit",sans-serif';
        var slothW = ctx.measureText('Sloth').width;
        var moveW  = ctx.measureText('Move').width;
        ctx.fillStyle = '#f4f1eb';
        ctx.fillText('Sloth', W/2 - moveW/2, brandY);
        ctx.fillStyle = '#DCCF00';
        ctx.fillText('Move', W/2 + slothW/2, brandY);

        // Org name
        var orgName = window.QUIZ_ORG_NAME || 'SlothMove';
        ctx.font = '400 24px "Sarabun","Kanit",sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.42)';
        ctx.fillText(orgName, W/2, brandY + 42);

        // Divider
        var divY = brandY + 76;
        ctx.strokeStyle = 'rgba(220,207,0,0.2)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(120, divY); ctx.lineTo(W-120, divY); ctx.stroke();

        // Subject badge
        var subject = window.QUIZ_SUBJECT || 'ข้อสอบ';
        ctx.font = 'bold 30px "Kanit","Sarabun",sans-serif';
        var badgeStr = _clipText(ctx, emoji + '  ' + subject, 820);
        var bW = ctx.measureText(badgeStr).width + 72, bX = (W-bW)/2, bY = divY + 18;
        ctx.fillStyle = 'rgba(220,207,0,0.1)'; _rrect(ctx, bX, bY, bW, 58, 29); ctx.fill();
        ctx.strokeStyle = 'rgba(220,207,0,0.45)'; ctx.lineWidth = 1.5; _rrect(ctx, bX, bY, bW, 58, 29); ctx.stroke();
        ctx.fillStyle = '#ffffff'; ctx.fillText(badgeStr, W/2, bY + 29);

        // Score number (big)
        ctx.textBaseline = 'alphabetic';
        var BIG = 220, MID = 100;
        ctx.font = '900 ' + BIG + 'px "Kanit",sans-serif';
        var numW = ctx.measureText('' + sc).width;
        ctx.font = '300 ' + MID + 'px "Kanit",sans-serif';
        var denStr = ' / ' + total, denW = ctx.measureText(denStr).width;
        var SCORE_Y = 670, scoreX = W/2 - (numW + denW)/2;
        ctx.font = '900 ' + BIG + 'px "Kanit",sans-serif';
        ctx.fillStyle = '#ffffff'; ctx.textAlign = 'left';
        ctx.fillText('' + sc, scoreX, SCORE_Y);
        ctx.font = '300 ' + MID + 'px "Kanit",sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.42)';
        ctx.fillText(denStr, scoreX + numW, SCORE_Y);

        // Percentage
        var pctColor = pct >= 80 ? '#68d391' : pct >= 60 ? '#DCCF00' : '#fc8181';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.font = 'bold 70px "Kanit",sans-serif'; ctx.fillStyle = pctColor;
        ctx.fillText(pct + '%', W/2, SCORE_Y + 60);

        // Progress bar
        var bx = 110, by2 = SCORE_Y + 96, bw = W-220, bh = 12, br = 6;
        ctx.fillStyle = 'rgba(255,255,255,0.08)'; _rrect(ctx, bx, by2, bw, bh, br); ctx.fill();
        var fw = Math.max(br*2, Math.round(bw * pct/100));
        var fg = ctx.createLinearGradient(bx, 0, bx+fw, 0);
        fg.addColorStop(0, pct >= 80 ? '#22c55e' : pct >= 60 ? '#DCCF00' : '#dc2626');
        fg.addColorStop(1, pct >= 80 ? '#68d391' : pct >= 60 ? '#F5A623' : '#fc8181');
        ctx.fillStyle = fg; _rrect(ctx, bx, by2, fw, bh, br); ctx.fill();
        ctx.font = '400 22px "Sarabun","Kanit",sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.38)';
        ctx.fillText('ตอบถูก ' + sc + ' จาก ' + total + ' ข้อ', W/2, by2 + 30);

        // Bottom separator
        var sepY = by2 + 58;
        ctx.strokeStyle = 'rgba(220,207,0,0.12)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, sepY); ctx.lineTo(W, sepY); ctx.stroke();
        ctx.fillStyle = 'rgba(0,0,0,0.32)'; ctx.fillRect(0, sepY, W, H - sepY);

        // SlothMove badge (bottom-center)
        var badgeW = 260, badgeH = 52, badgeX = (W - badgeW) / 2, badgeY = sepY + (H - sepY) / 2 - badgeH / 2;
        ctx.fillStyle = 'rgba(220,207,0,0.12)'; _rrect(ctx, badgeX, badgeY, badgeW, badgeH, 26); ctx.fill();
        ctx.strokeStyle = '#DCCF00'; ctx.lineWidth = 1.5; _rrect(ctx, badgeX, badgeY, badgeW, badgeH, 26); ctx.stroke();
        ctx.font = 'bold 32px "Kanit",sans-serif'; ctx.fillStyle = '#DCCF00';
        ctx.textAlign = 'center'; ctx.fillText('SlothMove', W/2, badgeY + 34);
        ctx.font = '400 20px "Sarabun","Kanit",sans-serif'; ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.fillText('slothmove.com', W/2, badgeY + 34 + 28);
    }

    function _buildShareCard(sc, total, pct, emoji) {
        return document.fonts.ready.then(function() {
            var picBase = '../../../../pic/';
            return _shareLogoImg ? Promise.resolve(_shareLogoImg)
                : _loadImg(picBase + 'slothmove_mascot.png').then(function(img) { _shareLogoImg = img; return img; });
        }).then(function(logo) {
            var cvs = document.getElementById('sharePreview');
            if (!cvs) return;
            _drawCard(cvs, sc, total, pct, emoji, logo, null);
            cvs.style.display = 'block';
        });
    }

    window.shareResult = function() {
        var btn = document.getElementById('shareBtn');
        var total = _questions.length; if (!total) return;
        var pct = Math.round((_score / total) * 100);
        var emoji = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '😅';
        var subject = window.QUIZ_SUBJECT || 'ข้อสอบ';
        var shareText = emoji + ' ฉันทำข้อสอบ "' + subject + '" ได้ ' + _score + '/' + total + ' (' + pct + '%)\nลองทำดูที่ SlothMove 👉 ' + window.location.href;

        if (btn) { btn.innerHTML = '⏳ กำลังเตรียม...'; btn.disabled = true; }

        _buildShareCard(_score, total, pct, emoji).then(function() {
            var cvs = document.getElementById('sharePreview');

            function tryFileShare() {
                return new Promise(function(res, rej) {
                    cvs.toBlob(function(blob) {
                        try {
                            var file = new File([blob], 'slothmove-result.png', {type: 'image/png'});
                            if (navigator.canShare && navigator.canShare({files: [file]})) {
                                navigator.share({files: [file], text: shareText}).then(function() { res('file'); }).catch(rej);
                            } else rej(new Error('no canShare'));
                        } catch(e) { rej(e); }
                    }, 'image/png');
                });
            }

            function done(label) {
                if (btn) { btn.innerHTML = label; btn.disabled = false; }
                setTimeout(function() {
                    if (btn) btn.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>แชร์คะแนน';
                }, 2500);
            }

            tryFileShare().then(function() { done('✓ แชร์แล้ว!'); }).catch(function(e1) {
                if (e1 && e1.name === 'AbortError') { done('แชร์คะแนน'); return; }
                if (navigator.share) {
                    navigator.share({text: shareText, url: window.location.href})
                        .then(function() { done('✓ แชร์แล้ว!'); })
                        .catch(function(e2) {
                            if (e2.name === 'AbortError') { done('แชร์คะแนน'); return; }
                            navigator.clipboard.writeText(shareText).then(function() { done('✓ คัดลอกแล้ว!'); }).catch(function() { done('แชร์คะแนน'); });
                        });
                } else {
                    navigator.clipboard.writeText(shareText).then(function() { done('✓ คัดลอกแล้ว!'); }).catch(function() { done('แชร์คะแนน'); });
                }
            });
        });
    };

    window.downloadCard = function() {
        var total = _questions.length; if (!total) return;
        var pct = Math.round((_score / total) * 100);
        var emoji = pct >= 80 ? '🏆' : pct >= 60 ? '🎯' : '📚';
        var btn = document.getElementById('downloadBtn');
        if (btn) { btn.innerHTML = '⏳...'; btn.disabled = true; }
        _buildShareCard(_score, total, pct, emoji).then(function() {
            var cvs = document.getElementById('sharePreview');
            if (!cvs || !cvs.width) return;
            try {
                var a = document.createElement('a');
                a.download = 'slothmove-result.png';
                a.href = cvs.toDataURL('image/png');
                a.click();
            } catch(e) { alert('ไม่สามารถดาวน์โหลดได้: ' + e.message); }
            if (btn) { btn.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>บันทึกรูป'; btn.disabled = false; }
        });
    };

    window.openSaveModal = function() {
        var modal = document.getElementById('saveModal');
        if (modal) modal.classList.remove('hidden');
    };

    window.closeSaveModal = function() {
        var modal = document.getElementById('saveModal');
        if (modal) modal.classList.add('hidden');
    };

    window.confirmSave = function() {
        var input = document.getElementById('nicknameInput');
        var name = input ? input.value.trim() : '';
        if (!name) {
            var err = document.getElementById('saveError');
            if (err) { err.textContent = 'กรุณาใส่ชื่อเล่น'; err.classList.remove('hidden'); }
            return;
        }
        alert('บันทึกคะแนนสำเร็จ! (ฟีเจอร์เต็มรูปแบบกำลังพัฒนา)');
        window.closeSaveModal();
    };

    function _escHtml(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function renderLessonData(data) {
        // Update hero
        document.getElementById('hero-title-short').textContent = data.titleShort || 'ทบวง กรม';
        document.title = data.title + ' | SlothMove ปภ.';
        window.LESSON_DATA = data;
    }

    function getDefaultData() {
        return {
            id: 'default',
            title: 'ตัวอย่างบทเรียน',
            emoji: '📚',
            subtitle: 'ระบบ Data-driven สำหรับ SlothMove',
            stats: { chapters: 3, parts: 47, vocab: 10, quiz: 10 },
            sections: [{
                id: 's1',
                title: 'สาระสำคัญ',
                chapters: [{num: 1, title: 'บทนำ', emoji: '📖', body: [{type: 'p', text: 'นี่คือตัวอย่างเนื้อหา...'}]}]
            }]
        };
    }
});