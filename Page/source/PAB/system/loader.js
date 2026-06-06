/**
 * PAB System Loader - Data-driven Architecture
 * Detects PAGE_TYPE and loads appropriate template
 */

document.addEventListener('DOMContentLoaded', function() {
    const PAGE_TYPE = window.PAGE_TYPE || 'lesson';
    const BASE_PATH = window.BASE_PATH || '../system/';

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
    } else if (PAGE_TYPE === 'knowledge') {
        loadKnowledgePage();
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
                        <a href="flashcard.html" class="nav-tab nav-tab-flashcard" data-section="flashcard" target="_blank" rel="noopener noreferrer">
                            <span class="nav-fc-icon">🎴</span>
                            <span>Flashcard</span>
                        </a>
                        <a href="quiz.html" class="nav-tab nav-tab-quiz" data-section="quiz" target="_blank" rel="noopener noreferrer">
                            <span class="nav-fc-icon">✏️</span>
                            <span>ทำข้อสอบ</span>
                        </a>
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
                    <a href="flashcard.html" class="mobile-flashcard-link" target="_blank" rel="noopener noreferrer">
                        <span>🎴 Flashcard</span>
                    </a>
                    <a href="quiz.html" class="mobile-quiz-link" target="_blank" rel="noopener noreferrer">
                        <span>✏️ ทำข้อสอบ</span>
                    </a>
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
                                    <span class="btn-fc-icon">📖</span>
                                    <span class="btn-fc-text"><strong>เข้าสู่บทเรียน</strong></span>
                                    <span class="btn-fc-arrow">→</span>
                                </a>
                                <a href="flashcard.html" class="btn-dark btn-flashcard" target="_blank" rel="noopener noreferrer">
                                    <span class="btn-fc-shimmer"></span>
                                    <span class="btn-fc-icon">🎴</span>
                                    <span class="btn-fc-text">
                                        <strong>Flashcard</strong>
                                    </span>
                                    <span class="btn-fc-arrow">→</span>
                                </a>
                                <a href="quiz.html" class="btn-dark btn-quiz" target="_blank" rel="noopener noreferrer">
                                    <span class="btn-fc-shimmer"></span>
                                    <span class="btn-fc-icon">✏️</span>
                                    <span class="btn-fc-text">
                                        <strong>ทำข้อสอบ</strong>
                                    </span>
                                    <span class="btn-fc-arrow">→</span>
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
                        <div class="sec-break"><span class="sec-break-label">สรุปเนื้อหา</span></div>
                        <h2 id="s1-heading" style="font-family:var(--font-display); font-weight:900; font-size:clamp(1.5rem,3vw,2.2rem); color:var(--text); text-align:center; margin-bottom:var(--space-xl);">สรุปเนื้อหา</h2>
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
        setupFlashcardNudge();

        console.log('✅ Lesson rendered:', data.title);
    }

    function renderS1() {
        const data = window.LESSON_DATA;
        const container = document.getElementById('s1-content');
        if (!container) return;

        // Gather ALL sections that have chapters (not just id='s1')
        const chapterSections = data.sections.filter(s => s.chapters && s.chapters.length > 0);
        if (chapterSections.length === 0) return;

        let html = '';
        let globalIdx = 0;

        chapterSections.forEach((section) => {
            // Section heading
            html += `<div class="sec-break" style="margin-top:var(--space-xl);"><span class="sec-break-label">${section.icon || ''} ${section.title}</span></div>`;

            section.chapters.forEach((ch) => {
                const idx = globalIdx++;
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

        // Org Chart (dynamic)
        if (s2.orgChart) {
            const chart = s2.orgChart;
            const levels = chart.levels || [];
            const cols = levels.length <= 2 ? 1 : levels.length <= 4 ? 2 : 3;
            html += `<div class="org-chart-wrapper" style="margin-bottom:var(--space-xl);">`;
            if (chart.description) {
                html += `<p class="org-chart-desc" style="text-align:center;font-family:var(--font-body);font-size:0.8rem;color:rgba(255,255,255,0.45);margin-bottom:var(--space-lg);">${chart.description}</p>`;
            }
            html += `<div class="org-chart-flow" style="display:flex;flex-direction:column;align-items:center;gap:0;">`;
            levels.forEach((lvl, idx) => {
                const isTop = idx === 0;
                const bg = isTop ? 'var(--yellow-strong)' : 'var(--card-bg)';
                const color = isTop ? 'var(--navy)' : 'var(--text)';
                const border = isTop ? 'none' : '1px solid var(--border)';
                const minW = Math.max(160, 280 - idx * 30);
                html += `<div style="display:flex;flex-direction:column;align-items:center;margin-bottom:var(--space-sm);">
                    <div class="org-level-box" style="
                        background:${bg};
                        color:${color};
                        border:${border};
                        border-radius:var(--radius-md);
                        padding:var(--space-md) clamp(1rem,3vw,1.75rem);
                        text-align:center;
                        min-width:${minW}px;
                        max-width:320px;
                        width:100%;
                        box-shadow:${isTop ? 'var(--shadow-lg)' : 'var(--shadow-sm)'};
                        position:relative;
                        font-family:var(--font-display);
                    ">
                        <div style="font-weight:${isTop ? 900 : 700};font-size:${isTop ? '0.95rem' : '0.82rem'};line-height:1.3;">${lvl.name}</div>
                        <div style="font-size:0.68rem;font-weight:${isTop ? 600 : 500};opacity:${isTop ? 0.7 : 0.6};margin-top:4px;">${lvl.head}</div>
                        ${lvl.example ? `<div style="font-size:0.62rem;font-weight:400;opacity:0.55;margin-top:4px;font-style:italic;">${lvl.example}</div>` : ''}
                    </div>
                </div>`;
                if (idx < levels.length - 1) {
                    html += `<div class="org-arrow" style="color:var(--yellow-strong);font-size:1.2rem;line-height:1;margin:var(--space-xs) 0;">▼</div>`;
                }
            });
            html += `</div></div>`;
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
        const data = window.LESSON_DATA;
        const container = document.getElementById('s3-content');
        if (!container) return;

        // Find numberCards and glossary from ANY section
        const s3 = data.sections.find(s => s.numberCards || s.glossary)
                 || data.sections.find(s => s.id === 's3');
        if (!s3) return;

        // Also check other sections for numberCards/glossary if not in the first match
        const numberCardsSection = data.sections.find(s => s.numberCards);
        const glossarySection = data.sections.find(s => s.glossary);
        if (numberCardsSection) s3.numberCards = numberCardsSection.numberCards;
        if (glossarySection) s3.glossary = glossarySection.glossary;

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
        document.querySelectorAll('.chapter-acc-body').forEach(function(b){ b.classList.add('open'); });
        document.querySelectorAll('.chapter-acc-arrow').forEach(function(a){ a.classList.add('open'); });
        document.querySelectorAll('.chapter-acc').forEach(function(c){ c.classList.add('open'); });
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
        var sections = ['home'];
        // Dynamically discover sections from the DOM (supports knowledge + additionalSections)
        document.querySelectorAll('section[id^="section-"]').forEach(function(sec) {
            var id = sec.id.replace('section-', '');
            if (id && sections.indexOf(id) === -1) sections.push(id);
        });
        if (sections.indexOf('k3') === -1) sections.push('k3');
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

    // ===== Flashcard links — navigate directly (no popup nudge) =====
    function setupFlashcardNudge() {
        // Popup nudge removed — flashcard links open directly
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

        var isEnglish = window.QUIZ_SUBJECT && window.QUIZ_SUBJECT.indexOf('อังกฤษ') !== -1;
        var startModesHtml = '';
        if (isEnglish) {
            startModesHtml = '<p class="start-mode-label">เลือกจำนวนข้อสอบ</p>' +
                '<div class="start-modes">' +
                '<button class="start-mode-btn" onclick="startQuiz(10)"><span class="mode-num">10</span><span class="mode-label">ข้อ · ทดสอบเร็ว</span></button>' +
                '<button class="start-mode-btn active" onclick="startQuiz(50)"><span class="mode-num">50</span><span class="mode-label">ข้อ · ครึ่งชุด</span></button>' +
                '<button class="start-mode-btn" onclick="startQuiz(100)"><span class="mode-num">100</span><span class="mode-label">ข้อ · เต็มรอบ</span></button>' +
                '</div>';
        } else {
            startModesHtml = '<div style="margin-top: 24px;">' +
                '<button class="start-mode-btn active" style="width: 100%; max-width: 280px; margin: 0 auto; display: flex; flex-direction: row; justify-content: center; gap: 8px; align-items: center;" onclick="startQuiz(10)">' +
                '<span class="mode-num">10</span><span class="mode-label" style="font-size: 0.9rem; opacity: 1; font-weight: 700;">ข้อ · เริ่มทำข้อสอบ</span>' +
                '</button>' +
                '</div>';
        }

        var startBadge = 'แบบทดสอบ · ' + (window.QUIZ_SUBJECT || 'บทเรียน ปภ.');
        var startIcon = window.QUIZ_ICON || '🏛️';
        var startTitle = window.QUIZ_SUBJECT || 'ควิซวัดความรู้';
        var startTitleSub = window.QUIZ_ORG_NAME || 'กรมป้องกันและบรรเทาสาธารณภัย (ปภ.)';
        var startDesc = window.QUIZ_DESC || 'เตรียมพร้อมสอบราชการ — สรุปเนื้อหาสำคัญพร้อมแนวข้อสอบสุ่มข้อไม่ซ้ำ พร้อมเฉลยละเอียดทุกข้อ';

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
            '<span class="start-badge">' + startBadge + '</span>' +
            '<span class="start-icon">' + startIcon + '</span>' +
            '<h1 class="start-title">' + startTitle + '</h1>' +
            '<p class="start-title-sub">' + startTitleSub + '</p>' +
            '<p class="start-desc">' + startDesc + '</p>' +
            '<div class="start-tags">' +
            '<span class="start-tag">📋 ส่วนกลาง &amp; ส่วนภูมิภาค</span>' +
            '<span class="start-tag">🏛️ โครงสร้างราชการ</span>' +
            '<span class="start-tag">✏️ ข้อสอบเฉลย</span></div>' +
            startModesHtml +
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
        setupFlashcardNudge();
        refreshQuizPoolCount();
    }

    function initQuiz() {
        // Auto-detect: QUIZ_DATA, window.QUESTIONS, or any window.*_QUESTIONS global
        let raw = window.QUIZ_DATA;
        if (!raw) {
            if (Array.isArray(window.QUESTIONS) && window.QUESTIONS.length > 0) {
                raw = window.QUESTIONS;
            } else {
                const key = Object.keys(window).find(k => k.endsWith('_QUESTIONS') && Array.isArray(window[k]));
                raw = key ? window[key] : null;
            }
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
    var _quizTimer = null, _quizSec = 0, _quizMode = 0;

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
        var take = (n === 0) ? source.length : Math.min(n, source.length);
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
        _quizMode = n;
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

    function _getSupa() {
        if (window.supabase && !window._supaInstance) {
            window._supaInstance = window.supabase.createClient(
                'https://rtedyfalsfqcjsvgjqmx.supabase.co',
                'sb_publishable_vn5tbKzxOtHlmuFLlG_BJQ_54Lk-626'
            );
        }
        return window._supaInstance || null;
    }

    window.confirmSave = function() {
        var input = document.getElementById('nicknameInput');
        var name = input ? input.value.trim() : '';
        var errEl = document.getElementById('saveError');
        
        if (!name) {
            if (errEl) { errEl.textContent = 'กรุณาใส่ชื่อเล่น'; errEl.classList.remove('hidden'); }
            return;
        }
        
        var supaClient = _getSupa();
        if (!supaClient) {
            if (errEl) { errEl.textContent = 'ไม่สามารถเชื่อมต่อระบบฐานข้อมูลได้'; errEl.classList.remove('hidden'); }
            return;
        }
        
        var btn = document.getElementById('saveConfirmBtn');
        if (btn) { btn.textContent = 'กำลังบันทึก...'; btn.disabled = true; }
        
        var total = _questions.length;
        var pct = Math.round((_score / total) * 100);
        var subject = window.QUIZ_SUBJECT || (window.LESSON_DATA ? window.LESSON_DATA.title : 'บทเรียน ปภ.');
        
        var payload = {
            nickname: name,
            dept: 'pab',
            subject: subject,
            score: _score,
            total: total,
            pct: pct,
            mode: _quizMode || total,
            time_sec: _quizSec
        };
        
        supaClient.from('scores').insert(payload).then(function(res) {
            var error = res.error;
            if (error) {
                if (/dept|schema cache/i.test(error.message)) {
                    var noDept = Object.assign({}, payload);
                    delete noDept.dept;
                    return supaClient.from('scores').insert(noDept);
                }
                throw new Error(error.message);
            }
            return res;
        }).then(function(res) {
            if (res && res.error) throw new Error(res.error.message);
            
            window.closeSaveModal();
            var saveBtn = document.querySelector('[onclick="openSaveModal()"]');
            if (saveBtn) {
                saveBtn.innerHTML = '✅ บันทึกแล้ว';
                saveBtn.disabled = true;
                saveBtn.style.opacity = '0.6';
                saveBtn.removeAttribute('onclick');
            }
        }).catch(function(err) {
            if (errEl) { errEl.textContent = 'เกิดข้อผิดพลาด: ' + err.message; errEl.classList.remove('hidden'); }
            if (btn) { btn.textContent = 'บันทึก'; btn.disabled = false; }
        });
    };

    function _escHtml(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function renderLessonData(data) {
        // Update hero title and badge from data
        var heroShort = document.getElementById('hero-title-short');
        if (heroShort) heroShort.textContent = data.titleShort || data.title || '';

        var heroLabel = document.getElementById('hero-section-label');
        if (heroLabel) heroLabel.textContent = data.titleShort || data.title || '';

        // Update hero h1 main content
        var heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.innerHTML =
                '<span class="hl-sub">' + (data.title || '') + '</span>' +
                (data.emoji || '') + ' ' + (data.titleShort || data.title || '') +
                '<br><span class="hl-yellow">' + (data.subtitle || '') + '</span>';
        }

        // Update s1 heading
        var s1Heading = document.getElementById('s1-heading');
        if (s1Heading) s1Heading.textContent = 'สรุปเนื้อหา ' + (data.titleShort || data.title || '');

        // Update page title
        document.title = (data.title || 'บทเรียน') + ' | SlothMove ปภ.';
        window.LESSON_DATA = data;
    }

    // ===== KNOWLEDGE PAGE =====
    function loadKnowledgePage() {
        let kd = window.LESSON_DATA;
        if (!kd) {
            const dataKey = Object.keys(window).find(k => k.endsWith('_DATA') && window[k]?.knowledgeSections);
            kd = dataKey ? window[dataKey] : null;
        }
        if (!kd) return;
        window.LESSON_DATA = kd;

        // Inject premium styles if not already injected
        if (!document.getElementById('premium-explanation-styles')) {
            const style = document.createElement('style');
            style.id = 'premium-explanation-styles';
            style.innerHTML = `
                /* Premium Infographic Styles */
                .premium-timeline {
                    position: relative;
                    padding-left: 45px;
                    margin: 30px 0;
                }
                .premium-timeline::before {
                    content: '';
                    position: absolute;
                    left: 20px;
                    top: 10px;
                    bottom: 10px;
                    width: 3px;
                    background: linear-gradient(to bottom, var(--yellow-strong) 30%, var(--border) 70%);
                }
                .premium-timeline-item {
                    position: relative;
                    margin-bottom: 24px;
                }
                .premium-timeline-item:last-child {
                    margin-bottom: 0;
                }
                .premium-timeline-node {
                    position: absolute;
                    left: -45px;
                    top: 4px;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: var(--navy);
                    border: 3px solid var(--yellow);
                    color: var(--white);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: var(--font-display);
                    font-weight: 900;
                    font-size: 0.95rem;
                    box-shadow: 0 0 0 4px var(--cream);
                    z-index: 2;
                    transition: transform var(--duration-fast) var(--ease-bounce), background-color var(--duration-fast);
                }
                .premium-timeline-item:hover .premium-timeline-node {
                    transform: scale(1.15);
                    background: var(--yellow-strong);
                    color: var(--navy);
                }
                .premium-timeline-card {
                    background: var(--white);
                    border: 1.5px solid var(--border-light);
                    border-radius: var(--radius-lg);
                    padding: 20px;
                    box-shadow: var(--shadow-sm);
                    transition: all var(--duration-normal) var(--ease-smooth);
                }
                .premium-timeline-card:hover {
                    transform: translateX(4px);
                    box-shadow: var(--shadow-md);
                    border-color: var(--yellow-strong);
                }
                .premium-timeline-header {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    gap: 8px;
                    margin-bottom: 8px;
                }
                .premium-timeline-title {
                    font-family: var(--font-display);
                    font-weight: 800;
                    font-size: 1.05rem;
                    color: var(--text);
                }
                .premium-timeline-badge {
                    font-family: var(--font-display);
                    font-size: 0.72rem;
                    font-weight: 700;
                    padding: 3px 10px;
                    border-radius: var(--radius-full);
                }
                .premium-timeline-badge.rose { background: #fff1f2; color: #e11d48; border: 1px solid rgba(225,29,72,0.2); }
                .premium-timeline-badge.amber { background: #fffbeb; color: #d97706; border: 1px solid rgba(217,119,6,0.2); }
                .premium-timeline-badge.blue { background: #eff6ff; color: #2563eb; border: 1px solid rgba(37,99,235,0.2); }
                .premium-timeline-badge.green { background: #f0fdf4; color: #16a34a; border: 1px solid rgba(22,163,74,0.2); }
                .premium-timeline-badge.purple { background: #faf5ff; color: #9333ea; border: 1px solid rgba(147,51,234,0.2); }

                .premium-timeline-desc {
                    font-family: var(--font-body);
                    font-size: 0.88rem;
                    color: var(--text-muted);
                    line-height: 1.75;
                }

                /* Flowchart / Card Grid */
                .premium-flow-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 16px;
                    margin: 24px 0;
                }
                .premium-flow-card {
                    background: var(--white);
                    border: 1.5px solid var(--border-light);
                    border-radius: var(--radius-lg);
                    padding: 20px;
                    position: relative;
                    box-shadow: var(--shadow-sm);
                    transition: all var(--duration-normal) var(--ease-smooth);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .premium-flow-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                }
                .premium-flow-card.status-allowed::before { background: var(--success); }
                .premium-flow-card.status-warning::before { background: #f59e0b; }
                .premium-flow-card.status-restricted::before { background: #d97706; }
                .premium-flow-card.status-prohibited::before { background: #ef4444; }
                .premium-flow-card.status-blue::before { background: #3b82f6; }
                .premium-flow-card.status-navy::before { background: #1a1a2e; }
                .premium-flow-card.status-purple::before { background: #a855f7; }
                .premium-flow-card.status-teal::before { background: #14b8a6; }
                .premium-flow-card.status-amber::before { background: #f59e0b; }
                .premium-flow-card.status-green::before { background: var(--success); }
                .premium-flow-card.status-rose::before { background: #f43f5e; }

                .premium-flow-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-md);
                }
                .premium-flow-card.status-allowed:hover { border-color: var(--success); }
                .premium-flow-card.status-warning:hover { border-color: #f59e0b; }
                .premium-flow-card.status-restricted:hover { border-color: #d97706; }
                .premium-flow-card.status-prohibited:hover { border-color: #ef4444; }
                .premium-flow-card.status-blue:hover { border-color: #3b82f6; }
                .premium-flow-card.status-navy:hover { border-color: #1a1a2e; }
                .premium-flow-card.status-purple:hover { border-color: #a855f7; }
                .premium-flow-card.status-teal:hover { border-color: #14b8a6; }
                .premium-flow-card.status-amber:hover { border-color: #f59e0b; }
                .premium-flow-card.status-green:hover { border-color: var(--success); }
                .premium-flow-card.status-rose:hover { border-color: #f43f5e; }

                .premium-flow-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .premium-flow-title {
                    font-family: var(--font-display);
                    font-weight: 800;
                    font-size: 1rem;
                    color: var(--text);
                }
                .premium-flow-icon {
                    font-size: 1.4rem;
                }
                .premium-flow-authority {
                    font-family: var(--font-display);
                    font-weight: 700;
                    font-size: 0.8rem;
                    padding: 4px 10px;
                    border-radius: var(--radius-md);
                    width: fit-content;
                }
                .status-allowed .premium-flow-authority { background: #e8f5ef; color: var(--success); }
                .status-warning .premium-flow-authority { background: #fffbeb; color: #b45309; }
                .status-restricted .premium-flow-authority { background: #fff7ed; color: #c2410c; }
                .status-prohibited .premium-flow-authority { background: #fef2f2; color: #b91c1c; }
                .status-blue .premium-flow-authority { background: #eff6ff; color: #1e40af; }
                .status-navy .premium-flow-authority { background: #f1f5f9; color: #0f172a; }
                .status-purple .premium-flow-authority { background: #faf5ff; color: #6b21a8; }
                .status-teal .premium-flow-authority { background: #f0fdfa; color: #0d9488; }
                .status-amber .premium-flow-authority { background: #fffbeb; color: #b45309; }
                .status-green .premium-flow-authority { background: #e8f5ef; color: var(--success); }
                .status-rose .premium-flow-authority { background: #fff1f2; color: #be123c; }

                .premium-flow-desc {
                    font-family: var(--font-body);
                    font-size: 0.83rem;
                    color: var(--text-muted);
                    line-height: 1.7;
                }

                /* Dark mode overrides */
                [data-theme="dark"] .premium-timeline-card,
                [data-theme="dark"] .premium-flow-card {
                    background: var(--white);
                    border-color: var(--border-light);
                }
                [data-theme="dark"] .premium-timeline-badge.rose { background: rgba(225,29,72,0.15); }
                [data-theme="dark"] .premium-timeline-badge.amber { background: rgba(217,119,6,0.15); }
                [data-theme="dark"] .premium-timeline-badge.blue { background: rgba(37,99,235,0.15); }
                [data-theme="dark"] .premium-timeline-badge.green { background: rgba(22,163,74,0.15); }
                [data-theme="dark"] .premium-timeline-badge.purple { background: rgba(147,51,234,0.15); }

                [data-theme="dark"] .status-allowed .premium-flow-authority { background: rgba(61,140,108,0.15); color: #34d399; }
                [data-theme="dark"] .status-warning .premium-flow-authority { background: rgba(245,158,11,0.15); color: #fbbf24; }
                [data-theme="dark"] .status-restricted .premium-flow-authority { background: rgba(217,119,6,0.15); color: #fb923c; }
                [data-theme="dark"] .status-prohibited .premium-flow-authority { background: rgba(239,68,68,0.15); color: #f87171; }
                [data-theme="dark"] .status-blue .premium-flow-authority { background: rgba(59,130,246,0.15); color: #60a5fa; }
                [data-theme="dark"] .status-navy .premium-flow-authority { background: rgba(30,41,59,0.3); color: #cbd5e1; }
                [data-theme="dark"] .status-purple .premium-flow-authority { background: rgba(168,85,247,0.15); color: #c084fc; }
                [data-theme="dark"] .status-teal .premium-flow-authority { background: rgba(20,184,166,0.15); color: #2dd4bf; }
                [data-theme="dark"] .status-amber .premium-flow-authority { background: rgba(245,158,11,0.15); color: #fbbf24; }
                [data-theme="dark"] .status-green .premium-flow-authority { background: rgba(61,140,108,0.15); color: #34d399; }
                [data-theme="dark"] .status-rose .premium-flow-authority { background: rgba(244,63,94,0.15); color: #fb7185; }
            `;
            document.head.appendChild(style);
        }

        document.title = (kd.title || 'ความรู้ทั่วไป') + ' | SlothMove ปภ.';

        document.body.innerHTML = `
            <nav class="nav" id="navbar">
                <div class="nav-inner">
                    <a href="../indexPAB.html" class="nav-logo">
                        <img src="../../../../pic/slothmove_mascot.png" alt="SlothMove">
                        Sloth<span class="logo-accent">Move</span>
                        <span class="logo-sep">|</span>
                    </a>
                    <div class="nav-center" id="knav-tabs"></div>
                    <div class="nav-actions">
                        <a href="../indexPAB.html" class="nav-btn">🏠 หน้าหลัก</a>
                        <button class="nav-btn-accent" onclick="showDonatePopup()">☕ เลี้ยงกาแฟ</button>
                    </div>
                    <button class="nav-hamburger" id="mobileMenuBtn" aria-label="เปิดเมนู">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
                    </button>
                </div>
                <div class="mobile-menu" id="mobileMenu"></div>
            </nav>

            <main class="page-content">
                <section class="hero" id="section-home" style="scroll-margin-top:72px;">
                    <div class="hero-inner">
                        <div class="hero-content">
                            <div class="hero-badge">
                                <span class="hero-badge-dot"></span>
                                <span id="hero-section-label">${kd.badgeLabel || 'ความรู้ทั่วไป'}</span>
                            </div>
                            <h1 class="hero-title">
                                <span class="hl-sub">${kd.titleShort || kd.title || ''}</span>
                                ${kd.emoji || ''} ${kd.titleShort || kd.title || ''}
                                <br><span class="hl-yellow">${kd.subtitle || ''}</span>
                            </h1>
                            <div class="hero-actions">
                                <a href="#section-k1" class="btn-primary">
                                    <span class="btn-fc-icon">📖</span>
                                    <span class="btn-fc-text"><strong>เริ่มอ่านเนื้อหา</strong></span>
                                    <span class="btn-fc-arrow">→</span>
                                </a>
                                <a href="flashcard.html" class="btn-dark btn-flashcard" target="_blank" rel="noopener noreferrer">
                                    <span class="btn-fc-shimmer"></span>
                                    <span class="btn-fc-icon">🎴</span>
                                    <span class="btn-fc-text">
                                        <strong>Flashcard</strong>
                                    </span>
                                    <span class="btn-fc-arrow">→</span>
                                </a>
                                <a href="quiz.html" class="btn-dark btn-quiz" target="_blank" rel="noopener noreferrer">
                                    <span class="btn-fc-shimmer"></span>
                                    <span class="btn-fc-icon">✏️</span>
                                    <span class="btn-fc-text">
                                        <strong>ทำข้อสอบ</strong>
                                    </span>
                                    <span class="btn-fc-arrow">→</span>
                                </a>
                            </div>
                        </div>
                        <div class="hero-visual">
                            <div class="hero-mascot">
                                <img src="../../../../pic/logo ปภ.png" alt="ปภ.">
                            </div>
                        </div>
                    </div>
                </section>

                <div id="knowledge-sections"></div>
            </main>

            <div class="donate-popup-overlay" id="donatePopup" style="display:none;position:fixed;inset:0;z-index:99999;background:rgba(26,26,46,0.6);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:var(--space-lg);">
                <div style="background:var(--white);border-radius:var(--radius-xl);max-width:380px;width:100%;padding:var(--space-xl);text-align:center;box-shadow:var(--shadow-xl);position:relative;">
                    <button onclick="closeDonatePopup()" style="position:absolute;top:12px;right:12px;width:32px;height:32px;border-radius:50%;border:none;background:var(--cream);color:var(--text-muted);font-size:1.1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;">✕</button>
                    <div style="width:72px;height:72px;background:var(--yellow);border-radius:var(--radius-xl);display:flex;align-items:center;justify-content:center;font-size:2.2rem;margin:0 auto var(--space-md);box-shadow:var(--shadow-md);">☕</div>
                    <h2 style="font-family:var(--font-display);font-weight:900;font-size:1.4rem;color:var(--text);margin-bottom:var(--space-sm);">เลี้ยงกาแฟผมหน่อยครับ</h2>
                    <p style="font-family:var(--font-body);font-size:0.9rem;color:var(--text-muted);line-height:1.7;margin-bottom:var(--space-lg);">เราตั้งใจทำเนื้อหาให้ทุกคนเรียนฟรีตลอดไป<br>หากได้รับประโยชน์ สามารถสนับสนุนได้ตามกำลังศรัทธา</p>
                    <div style="background:var(--cream-warm);border-radius:var(--radius-lg);padding:var(--space-md);margin-bottom:var(--space-md);">
                        <img src="../../../../pic/qr.jpg" alt="QR พร้อมเพย์" style="width:100%;border-radius:var(--radius-md);border:1px solid var(--border-light);">
                    </div>
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
                        <a href="https://www.facebook.com/profile.php?id=61589670089745" target="_blank" rel="noopener noreferrer" class="footer-fb-btn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            Facebook
                        </a>
                        <a href="../indexPAB.html" class="footer-back-btn">กลับหน้าคอร์ส →</a>
                    </div>
                </div>
                <div class="footer-bottom"><p class="footer-copy">© 2026 SlothMove <span class="heart">❤</span></p></div>
            </footer>

            <button class="theme-toggle" id="themeToggle" aria-label="สลับโหมดมืด/สว่าง">
                <span class="toggle-icon sun">☀️</span>
                <span class="toggle-icon moon">🌙</span>
                <span class="toggle-knob"></span>
            </button>
        `;

        // Build nav tabs from knowledgeSections
        const tabs = document.getElementById('knav-tabs');
        const mobileMenu = document.getElementById('mobileMenu');
        if (tabs) {
            let tabHtml = `<a href="#section-home" class="nav-tab active" data-section="home">🏠 หน้าแรก</a>`;
            let mobileHtml = `<a href="#section-home">🏠 หน้าแรก</a>`;
            (kd.knowledgeSections || []).forEach((sec, i) => {
                const id = 'k' + (i + 1);
                tabHtml += `<a href="#section-${id}" class="nav-tab" data-section="${id}">${sec.navIcon || '📌'} ${sec.navLabel || ('บทที่ ' + (i+1))}</a>`;
                mobileHtml += `<a href="#section-${id}">${sec.navIcon || '📌'} ${sec.navLabel || sec.title}</a>`;
            });
            tabHtml += `<a href="flashcard.html" class="nav-tab nav-tab-flashcard" data-section="flashcard" target="_blank" rel="noopener noreferrer">
                <span class="nav-fc-icon">🎴</span>
                <span>Flashcard</span>
            </a>`;
            tabHtml += `<a href="quiz.html" class="nav-tab nav-tab-quiz" data-section="quiz" target="_blank" rel="noopener noreferrer">
                <span class="nav-fc-icon">✏️</span>
                <span>ทำข้อสอบ</span>
            </a>`;
            (kd.additionalSections || []).forEach((sec, i) => {
                const id = 'add' + (i + 1);
                mobileHtml += `<a href="#section-${id}">${sec.navIcon || '📌'} ${sec.navLabel || sec.title}</a>`;
            });
            mobileHtml += `<a href="flashcard.html" class="mobile-flashcard-link" target="_blank" rel="noopener noreferrer">
                <span>🎴 Flashcard</span>
            </a>`;
            mobileHtml += `<a href="quiz.html" class="mobile-quiz-link" target="_blank" rel="noopener noreferrer">
                <span>✏️ ทำข้อสอบ</span>
            </a>`;
            mobileHtml += `<button class="mobile-cta" onclick="showDonatePopup()">☕ เลี้ยงกาแฟ</button>`;
            tabs.innerHTML = tabHtml;
            if (mobileMenu) mobileMenu.innerHTML = mobileHtml;
        }

        // Render hero stats
        const statsEl = document.getElementById('hero-stats');
        if (statsEl && kd.heroStats) {
            statsEl.innerHTML = kd.heroStats.map(s => `
                <div class="hero-stat">
                    <div class="hero-stat-num yellow">${s.value}</div>
                    <div class="hero-stat-label">${s.label}</div>
                </div>
            `).join('');
        }

        // Render knowledge sections + additionalSections
        const sectionsEl = document.getElementById('knowledge-sections');
        console.log('📦 Knowledge data loaded:', {
            title: kd.title,
            knowledgeSections: (kd.knowledgeSections || []).length,
            additionalSections: (kd.additionalSections || []).length,
            vocabulary: (kd.vocabulary || []).length
        });
        if (sectionsEl) {
            let html = '';
            (kd.knowledgeSections || []).forEach((sec, i) => {
                const id = 'k' + (i + 1);
                html += `
                <section class="org-chart-section" id="section-${id}" style="scroll-margin-top:72px;">
                    <div class="container">
                        <div class="sec-break"><span class="sec-break-label">${sec.icon || ''} ${sec.title}</span></div>
                        <p style="text-align:center;font-family:var(--font-body);font-size:0.88rem;color:var(--text-muted);margin-bottom:var(--space-xl);">${sec.description || ''}</p>
                        ${renderKnowledgeSectionBody(sec)}
                    </div>
                </section>`;
            });
            // Render Vocabulary section if present (corresponds to tab section-k3)
            if (kd.vocabulary && kd.vocabulary.length > 0) {
                html += `
                <section class="glossary-section" id="section-k3" style="scroll-margin-top:72px;">
                    <div class="container">
                        <div class="sec-break"><span class="sec-break-label">📚 คำศัพท์น่ารู้</span></div>
                        <h2 style="font-family:var(--font-display); font-weight:900; font-size:clamp(1.5rem,3vw,2.2rem); color:var(--text); text-align:center; margin-bottom:var(--space-sm);">คลังคำศัพท์</h2>
                        <p style="text-align:center;font-family:var(--font-body);font-size:0.88rem;color:var(--text-muted);margin-bottom:var(--space-xl);">คำศัพท์สำคัญและคำจำกัดความสำหรับการเตรียมสอบ</p>
                        <div id="vocab-content"></div>
                    </div>
                </section>`;
            }
            // Render additionalSections
            (kd.additionalSections || []).forEach((sec, i) => {
                const id = 'add' + (i + 1);
                let secHtml = `
                <section class="org-chart-section" id="section-${id}" style="scroll-margin-top:72px;">
                    <div class="container">
                        <div class="sec-break"><span class="sec-break-label">${sec.icon || ''} ${sec.title}</span></div>
                        <p style="text-align:center;font-family:var(--font-body);font-size:0.88rem;color:var(--text-muted);margin-bottom:var(--space-xl);">${sec.description || ''}</p>`;
                // Handle numberCards for additionalSections
                if (sec.numberCards && sec.numberCards.length > 0) {
                    secHtml += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;">`;
                    sec.numberCards.forEach(card => {
                        secHtml += `<div style="background:var(--white);border:1.5px solid var(--yellow-strong);border-radius:12px;padding:16px;text-align:center;box-shadow:0 2px 8px rgba(252,236,74,0.15);">
                            <div style="font-family:var(--font-display);font-weight:900;font-size:1.8rem;color:var(--navy);">${card.num}</div>
                            <div style="font-family:var(--font-body);font-size:0.78rem;color:var(--text-muted);margin-top:6px;line-height:1.5;">${card.label}</div>
                        </div>`;
                    });
                    secHtml += `</div>`;
                }
                // Render blocks if any
                if (sec.blocks && sec.blocks.length > 0) {
                    secHtml += renderKnowledgeSectionBody(sec);
                }
                secHtml += `</div></section>`;
                html += secHtml;
            });
            sectionsEl.innerHTML = html;
        }

        // Render vocabulary (new beautiful design with search + category tabs + flashcard grid)
        const vocabEl = document.getElementById('vocab-content');
        if (vocabEl && kd.vocabulary && kd.vocabulary.length > 0) {
            const vocabId = 'pab-vocab-' + Math.random().toString(36).substr(2, 6);
            let html = '';

            // Flatten all terms for unified search
            const allTerms = [];
            if (kd.vocabulary[0]?.groupTitle) {
                kd.vocabulary.forEach(group => {
                    (group.terms || []).forEach(term => {
                        allTerms.push({ ...term, _group: group.groupTitle });
                    });
                });
            } else {
                kd.vocabulary.forEach(v => allTerms.push(v));
            }

            // Unique categories from data
            const cats = ['ทั้งหมด'];
            const catColors = { 'ทั้งหมด': '#1a1a2e', 'การเมือง': '#1d4ed8', 'เศรษฐกิจ': '#b45309', 'สังคม': '#065f46', 'นโยบาย': '#6d28d9', 'ต่างประเทศ': '#be185d' };
            allTerms.forEach(t => {
                if (t.category && !cats.includes(t.category)) cats.push(t.category);
            });

            html += `
            <div id="${vocabId}" class="vocab-new-root">
                <!-- Search bar -->
                <div style="margin-bottom:var(--space-lg);">
                    <div style="position:relative;">
                        <input id="vs-${vocabId}" type="text" placeholder="🔍 พิมพ์คำที่ต้องการค้นหา..."
                            oninput="filterVocabNew('${vocabId}')"
                            style="width:100%;padding:14px 20px 14px 46px;border:2px solid var(--border);border-radius:var(--radius-full);font-family:var(--font-body);font-size:1rem;color:var(--text);background:var(--white);outline:none;transition:border-color 0.2s,box-shadow 0.2s;box-sizing:border-box;">
                        <span style="position:absolute;left:18px;top:50%;transform:translateY(-50%);font-size:1.1rem;pointer-events:none;opacity:0.5;">🔍</span>
                    </div>
                    <div id="vc-${vocabId}" style="font-family:var(--font-body);font-size:0.8rem;color:var(--text-muted);margin-top:8px;text-align:right;"></div>
                </div>

                <!-- Category pills -->
                <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:var(--space-xl);">
                    ${cats.map((cat, ci) => {
                        const col = catColors[cat] || '#1a1a2e';
                        const isFirst = ci === 0;
                        return `<button onclick="filterVocabCatNew('${vocabId}','${cat}',this)"
                            style="padding:7px 18px;border-radius:var(--radius-full);font-family:var(--font-display);font-weight:700;font-size:0.8rem;cursor:pointer;border:1.5px solid ${isFirst ? col : 'var(--border)'};background:${isFirst ? col : 'var(--white)'};color:${isFirst ? '#fff' : 'var(--text-muted)'};transition:all 0.15s;letter-spacing:0.01em;"
                            class="vc-btn${isFirst ? ' vc-btn-active' : ''}">${cat}</button>`;
                    }).join('')}
                </div>

                <!-- Flashcard grid -->
                <div id="vg-${vocabId}" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;">`;

            // Render each term card
            allTerms.forEach((term, i) => {
                const cat = term.category || term._group || 'ทั้งหมด';
                const col = catColors[cat] || '#1a1a2e';
                const borderCol = col;
                html += `
                    <div class="vc-card" data-vocab-text="${(term.term + ' ' + (term.eng || '') + ' ' + (term.def || '')).toLowerCase().replace(/<[^>]*>/g,'')}"
                         data-vocab-cat="${cat}"
                         style="background:var(--white);border:1.5px solid var(--border-light);border-radius:16px;padding:18px 20px;display:flex;flex-direction:column;gap:0;transition:all 0.2s;cursor:default;position:relative;overflow:hidden;"
                         onmouseenter="this.style.borderColor='${col}';this.style.boxShadow='0 4px 20px rgba(0,0,0,0.08)';this.style.transform='translateY(-2px)';"
                         onmouseleave="this.style.borderColor='var(--border-light)';this.style.boxShadow='none';this.style.transform='translateY(0)';">
                        <!-- Left color bar -->
                        <div style="position:absolute;left:0;top:0;bottom:0;width:4px;background:${col};border-radius:16px 0 0 16px;"></div>

                        <!-- Category badge -->
                        <div style="margin-bottom:10px;">
                            <span style="display:inline-block;font-family:var(--font-display);font-size:0.62rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:${col};background:${col}18;border:1px solid ${col}40;padding:3px 10px;border-radius:99px;">${cat}</span>
                        </div>

                        <!-- Term + English -->
                        <div style="margin-bottom:10px;">
                            <div style="font-family:var(--font-display);font-weight:800;font-size:1rem;color:var(--text);line-height:1.3;margin-bottom:3px;">${term.term}</div>
                            ${term.eng ? `<div style="font-family:var(--font-body);font-size:0.78rem;color:${col};font-weight:600;">${term.eng}</div>` : ''}
                        </div>

                        <!-- Definition -->
                        <div style="font-family:var(--font-body);font-size:0.85rem;color:var(--text-muted);line-height:1.7;flex:1;">${term.def || term.meaning || ''}</div>

                        <!-- Memory tip (if exists) -->
                        ${term.mnemonic ? `
                        <div style="margin-top:12px;padding-top:10px;border-top:1px dashed var(--border);">
                            <div style="font-family:var(--font-display);font-size:0.68rem;font-weight:700;color:${col};text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">💡 จำง่าย</div>
                            <div style="font-family:var(--font-body);font-size:0.8rem;color:var(--text-muted);line-height:1.6;">${term.mnemonic}</div>
                        </div>` : ''}
                    </div>`;
            });

            html += `</div>
                <div id="ve-${vocabId}" style="text-align:center;padding:var(--space-xl) 0;display:none;">
                    <div style="font-size:3rem;margin-bottom:var(--space-md);">📭</div>
                    <div style="font-family:var(--font-display);font-weight:700;font-size:1.1rem;color:var(--text-muted);">ไม่พบคำที่ค้นหา</div>
                    <div style="font-family:var(--font-body);font-size:0.85rem;color:var(--text-light);margin-top:8px;">ลองพิมพ์คำอื่น</div>
                </div>
            </div>

            <script>
            window.filterVocabNew = function(gid) {
                var q = document.getElementById('vs-' + gid).value.toLowerCase().trim();
                var cards = document.querySelectorAll('#vg-' + gid + ' .vc-card');
                var activeCat = document.querySelector('#' + gid + ' .vc-btn-active') ?
                    document.querySelector('#' + gid + ' .vc-btn-active').textContent.trim() : 'ทั้งหมด';
                var visible = 0;
                cards.forEach(function(c) {
                    var text = c.getAttribute('data-vocab-text');
                    var cat = c.getAttribute('data-vocab-cat');
                    var matchText = q === '' || text.includes(q);
                    var matchCat = activeCat === 'ทั้งหมด' || cat === activeCat;
                    var show = matchText && matchCat;
                    c.style.display = show ? '' : 'none';
                    if (show) visible++;
                });
                var empty = document.getElementById('ve-' + gid);
                if (empty) empty.style.display = visible === 0 ? '' : 'none';
                var count = document.getElementById('vc-' + gid);
                if (count) count.textContent = q ? visible + ' จาก ' + cards.length + ' คำ' : '';
            };
            window.filterVocabCatNew = function(gid, cat, btn) {
                // Update button styles
                var allBtns = document.querySelectorAll('#' + gid + ' .vc-btn');
                var catColors = { 'ทั้งหมด': '#1a1a2e', 'การเมือง': '#1d4ed8', 'เศรษฐกิจ': '#b45309', 'สังคม': '#065f46', 'นโยบาย': '#6d28d9', 'ต่างประเทศ': '#be185d' };
                var col = catColors[cat] || '#1a1a2e';
                allBtns.forEach(function(b) {
                    b.classList.remove('vc-btn-active');
                    b.style.background = 'var(--white)';
                    b.style.color = 'var(--text-muted)';
                    b.style.borderColor = 'var(--border)';
                });
                btn.classList.add('vc-btn-active');
                btn.style.background = col;
                btn.style.color = '#fff';
                btn.style.borderColor = col;
                // Filter cards
                var q = document.getElementById('vs-' + gid).value.toLowerCase().trim();
                var cards = document.querySelectorAll('#vg-' + gid + ' .vc-card');
                var visible = 0;
                cards.forEach(function(c) {
                    var text = c.getAttribute('data-vocab-text');
                    var cardCat = c.getAttribute('data-vocab-cat');
                    var matchText = q === '' || text.includes(q);
                    var matchCat = cat === 'ทั้งหมด' || cardCat === cat;
                    var show = matchText && matchCat;
                    c.style.display = show ? '' : 'none';
                    if (show) visible++;
                });
                var empty = document.getElementById('ve-' + gid);
                if (empty) empty.style.display = visible === 0 ? '' : 'none';
                var count = document.getElementById('vc-' + gid);
                if (count) count.textContent = q ? visible + ' จาก ' + cards.length + ' คำ' : visible + ' คำ';
            };
            // Init count
            (function() {
                var cards = document.querySelectorAll('#vg-${vocabId} .vc-card');
                var count = document.getElementById('vc-${vocabId}');
                if (count) count.textContent = cards.length + ' คำ';
            })();
            </script>`;

            vocabEl.innerHTML = html;
        }

        setupThemeToggle();
        setupMobileMenu();
        setupNavbarScroll();
        setupDonatePopup();
        setupFlashcardNudge();
        setupScrollSpy();
        console.log('✅ Knowledge page rendered:', kd.title);
    }

    function renderKnowledgeSectionBody(sec) {
        let html = '';
        (sec.blocks || []).forEach(block => {
            switch (block.type) {
                case 'highlight-box': {
                    const PALETTE = {
                        amber:  { bg: '#fffbeb', border: '#f59e0b', title: '#92400e', titleDark: '#92400e', content: 'var(--text)', contentDark: 'var(--text)' },
                        blue:   { bg: '#eff6ff', border: '#3b82f6', title: '#1e40af', titleDark: '#3b82f6', content: 'var(--text)', contentDark: 'var(--text)' },
                        navy:   { bg: '#1a1a2e', border: '#fcec4a', title: '#ffffff', titleDark: '#ffffff', content: '#c8d0e0', contentDark: 'var(--text)' },
                        green:  { bg: '#f0fdf4', border: '#22c55e', title: '#166534', titleDark: '#16a34a', content: 'var(--text)', contentDark: 'var(--text)' },
                        rose:   { bg: '#fff1f2', border: '#f43f5e', title: '#9f1239', titleDark: '#e11d48', content: 'var(--text)', contentDark: 'var(--text)' },
                        purple: { bg: '#faf5ff', border: '#a855f7', title: '#7e22ce', titleDark: '#9333ea', content: 'var(--text)', contentDark: 'var(--text)' },
                        teal:   { bg: '#f0fdfa', border: '#14b8a6', title: '#115e59', titleDark: '#0d9488', content: 'var(--text)', contentDark: 'var(--text)' }
                    };
                    const p = PALETTE[block.color] || PALETTE.amber;
                    const isNavy = block.color === 'navy';
                    html += `<div class="kb-highlight kb-hb-${block.color}" style="background:${p.bg};border-left:4px solid ${p.border};padding:18px 20px;border-radius:12px;margin:20px 0;">
                        <div class="kb-hb-title" style="font-family:var(--font-display);font-weight:800;font-size:0.95rem;color:${p.title};margin-bottom:10px;">${block.title || ''}</div>
                        <div class="kb-hb-content" style="font-family:var(--font-body);font-size:0.9rem;color:${isNavy ? p.content : p.content};line-height:1.8;">${block.content || ''}</div>
                        ${block.examNote ? `<div style="background:#fffbeb;border-top:1.5px solid #f59e0b;margin:12px -20px -18px;padding:10px 20px;font-family:var(--font-body);font-size:0.82rem;color:#92400e;line-height:1.6;border-radius:0 0 12px 12px;">${block.examNote}</div>` : ''}
                    </div>`;
                    break;
                }
                case 'cards': {
                    html += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;margin:20px 0;">`;
                    (block.cards || []).forEach(card => {
                        const PALETTE = {
                            amber:  { bg: '#fffbeb', border: '#f59e0b', title: '#92400e' },
                            blue:   { bg: '#eff6ff', border: '#3b82f6', title: '#1e40af' },
                            navy:   { bg: '#1a1a2e', border: '#fcec4a', title: '#ffffff' },
                            green:  { bg: '#f0fdf4', border: '#22c55e', title: '#166534' },
                            rose:   { bg: '#fff1f2', border: '#f43f5e', title: '#9f1239' },
                            purple: { bg: '#faf5ff', border: '#a855f7', title: '#7e22ce' },
                            teal:   { bg: '#f0fdfa', border: '#14b8a6', title: '#115e59' }
                        };
                        const p = PALETTE[card.color] || { bg: 'var(--card-bg)', border: 'var(--border)', title: 'var(--text)' };
                        const isNavy = card.color === 'navy';
                        html += `<div class="kb-card kb-card-${card.color}" style="background:${p.bg};border:1.5px solid ${p.border};border-radius:16px;padding:18px;display:flex;flex-direction:column;gap:6px;">
                            <div style="font-size:1.4rem;">${card.icon || ''}</div>
                            <div class="kb-card-title" style="font-family:var(--font-display);font-weight:800;font-size:0.95rem;color:${p.title};">${card.title}</div>
                            <div class="kb-card-content" style="font-family:var(--font-body);font-size:0.83rem;color:${isNavy ? '#a8b2c8' : 'var(--text-muted)'};line-height:1.7;">${card.content}</div>
                        </div>`;
                    });
                    html += `</div>`;
                    break;
                }
                case 'numbered-list': {
                    html += `<div style="margin:20px 0;">`;
                    if (block.title) html += `<div style="font-family:var(--font-display);font-weight:800;font-size:0.95rem;color:var(--text);margin-bottom:12px;">${block.title}</div>`;
                    html += `<ol style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">`;
                    (block.items || []).forEach((item, idx) => {
                        html += `<li class="kb-numbered-item" style="display:flex;gap:12px;align-items:flex-start;padding:12px 14px;background:var(--card-bg);border:1px solid var(--border-light);border-radius:10px;">
                            <span style="background:var(--yellow);color:var(--navy);font-family:var(--font-display);font-weight:900;font-size:0.82rem;min-width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;">${idx + 1}</span>
                            <span style="font-family:var(--font-body);font-size:0.88rem;color:var(--text);line-height:1.7;">${item}</span>
                        </li>`;
                    });
                    html += `</ol></div>`;
                    break;
                }
                case 'bullet-list': {
                    html += `<div style="margin:20px 0;">`;
                    if (block.title) html += `<div style="font-family:var(--font-display);font-weight:800;font-size:0.95rem;color:var(--text);margin-bottom:12px;">${block.title}</div>`;
                    html += `<ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">`;
                    (block.items || []).forEach(item => {
                        html += `<li style="display:flex;gap:10px;align-items:flex-start;font-family:var(--font-body);font-size:0.88rem;color:var(--text);line-height:1.7;">
                            <span style="color:var(--yellow-strong);font-size:1rem;margin-top:1px;">▸</span>
                            <span>${item}</span>
                        </li>`;
                    });
                    html += `</ul></div>`;
                    break;
                }
                case 'persons-grid': {
                    html += `<div style="margin:20px 0;">`;
                    if (block.title) html += `<div style="font-family:var(--font-display);font-weight:800;font-size:1rem;color:var(--text);margin-bottom:16px;">${block.title}</div>`;
                    html += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;">`;
                    (block.persons || []).forEach(p => {
                        const isMain = p.isMain;
                        html += `<div class="kb-person-card${isMain ? ' kb-person-card-main' : ''}" style="background:${isMain ? 'var(--navy)' : 'var(--white)'};border:${isMain ? '2px solid var(--yellow)' : '1px solid var(--border)'};border-radius:12px;padding:14px 16px;">
                            <div class="kb-person-name" style="font-family:var(--font-display);font-weight:${isMain ? 900 : 700};font-size:${isMain ? '0.95rem' : '0.87rem'};color:${isMain ? 'var(--yellow)' : 'var(--text)'};">${p.name}</div>
                            <div class="kb-person-role" style="font-family:var(--font-body);font-size:0.78rem;color:${isMain ? '#cbd5e1' : 'var(--text-muted)'};margin-top:4px;line-height:1.5;">${p.role}</div>
                            ${p.party ? `<div style="display:inline-block;margin-top:8px;font-size:0.68rem;font-weight:700;background:${isMain ? 'rgba(252,236,74,0.15)' : 'var(--cream)'};color:${isMain ? 'var(--yellow)' : 'var(--text-muted)'};padding:2px 10px;border-radius:20px;">${p.party}</div>` : ''}
                        </div>`;
                    });
                    html += `</div></div>`;
                    break;
                }
                case 'number-badges': {
                    html += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;margin:20px 0;">`;
                    (block.items || []).forEach(item => {
                        html += `<div class="kb-number-badge" style="background:var(--white);border:1px solid var(--border);border-radius:12px;padding:14px;text-align:center;box-shadow:0 1px 3px rgba(26,26,46,0.06);">
                            <div class="kb-number-badge-num" style="font-family:var(--font-display);font-weight:900;font-size:1.6rem;color:var(--navy);">${item.num}</div>
                            <div style="font-family:var(--font-body);font-size:0.75rem;color:var(--text-muted);margin-top:4px;line-height:1.5;">${item.label}</div>
                        </div>`;
                    });
                    html += `</div>`;
                    break;
                }
                case 'key-summary': {
                    html += `<div class="kb-key-summary" style="background:var(--navy);color:#fff;border-radius:16px;padding:20px 24px;margin:24px 0;display:flex;gap:14px;align-items:flex-start;border:1px solid rgba(252,236,74,0.2);">
                        <span style="font-size:1.3rem;flex-shrink:0;filter:saturate(0) brightness(1.3);">✅</span>
                        <div>
                            <div style="font-family:var(--font-display);font-weight:800;font-size:0.9rem;margin-bottom:6px;color:var(--yellow);">${block.title || 'สรุปจำ'}</div>
                            <div style="font-family:var(--font-body);font-size:0.87rem;line-height:1.8;color:#cbd5e1;">${block.content}</div>
                        </div>
                    </div>`;
                    break;
                }
                case 'table':
                case 'comparison-table': {
                    html += `<div style="overflow-x:auto;margin:20px 0;border-radius:12px;border:1.5px solid var(--border);box-shadow:0 2px 8px rgba(26,26,46,0.06);">`;
                    if (block.title) {
                        // Color-coded title bar
                        const PALETTE = {
                            amber:  { bg: '#fef3e8', border: '#f59e0b', title: '#92400e' },
                            blue:   { bg: '#eff6ff', border: '#3b82f6', title: '#1e40af' },
                            navy:   { bg: '#1a1a2e', border: '#fcec4a', title: '#ffffff' },
                            green:  { bg: '#f0fdf4', border: '#22c55e', title: '#166534' },
                            rose:   { bg: '#fff1f2', border: '#f43f5e', title: '#9f1239' },
                            purple: { bg: '#faf5ff', border: '#a855f7', title: '#7e22ce' },
                            teal:   { bg: '#f0fdfa', border: '#14b8a6', title: '#115e59' }
                        };
                        const p = PALETTE[block.color] || PALETTE.blue;
                        html += `<div style="font-family:var(--font-display);font-weight:800;font-size:0.92rem;color:${p.title};padding:12px 18px;background:${p.bg};border-bottom:1.5px solid ${p.border};border-radius:12px 12px 0 0;">${block.title}</div>`;
                    }
                    html += `<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">`;
                    // Optional headers row
                    if (block.headers && block.headers.length > 0) {
                        html += `<thead><tr style="background:#1a1a2e;color:#ffffff;">`;
                        block.headers.forEach((h, hi) => {
                            html += `<th style="padding:10px 13px;text-align:left;font-family:var(--font-display);font-weight:700;font-size:0.8rem;letter-spacing:0.02em;border-bottom:2px solid #fcec4a;color:#ffffff;">${h}</th>`;
                        });
                        html += `</tr></thead>`;
                    }
                    (block.rows || []).forEach((row, i) => {
                        const rowBg = i % 2 === 0 ? '#ffffff' : '#f5f0e8';
                        html += `<tr style="background:${rowBg};border-bottom:1px solid #e5e0d8;transition:background 0.15s;">`;
                        row.forEach(cell => {
                            html += `<td style="padding:10px 13px;font-family:var(--font-body);font-size:0.85rem;color:#1a1a2e;line-height:1.6;vertical-align:top;">${cell}</td>`;
                        });
                        html += `</tr>`;
                    });
                    html += `</table>`;
                    // Exam note
                    if (block.examNote) {
                        html += `<div style="background:#fffbeb;border-top:1.5px solid #f59e0b;padding:10px 16px;font-family:var(--font-body);font-size:0.82rem;color:#92400e;line-height:1.6;border-radius:0 0 12px 12px;">${block.examNote}</div>`;
                    }
                    html += `</div>`;
                    break;
                }
                case 'number-cards': {
                    // For additionalSections with numberCards data
                    if (block.numberCards) {
                        html += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;margin:20px 0;">`;
                        block.numberCards.forEach(card => {
                            html += `<div style="background:var(--white);border:1.5px solid var(--yellow-strong);border-radius:12px;padding:16px;text-align:center;box-shadow:0 2px 8px rgba(252,236,74,0.15);">
                                <div style="font-family:var(--font-display);font-weight:900;font-size:1.8rem;color:var(--navy);">${card.num}</div>
                                <div style="font-family:var(--font-body);font-size:0.78rem;color:var(--text-muted);margin-top:6px;line-height:1.5;">${card.label}</div>
                            </div>`;
                        });
                        html += `</div>`;
                    }
                    break;
                }
                
                case 'vocab-grid': {
                    // New vocabulary section with search + accordion
                    const groups = block.groups || [];
                    const groupId = 'vg-' + Math.random().toString(36).substr(2, 6);
                    html += `
                    <div class="vocab-section" data-vocab-group="${groupId}">
                        <div class="vocab-search-wrap" style="margin-bottom:var(--space-lg);">
                            <input class="vocab-search-input" id="vs-${groupId}" oninput="filterVocab('${groupId}')"
                                placeholder="🔍 ค้นหาคำศัพท์..." type="text"
                                style="width:100%;padding:12px 18px;border:1.5px solid var(--border);border-radius:var(--radius-full);font-family:var(--font-body);font-size:0.95rem;color:var(--text);background:var(--white);outline:none;transition:border-color 0.2s;">
                            <div class="vocab-count" id="vc-${groupId}" style="font-family:var(--font-body);font-size:0.8rem;color:var(--text-muted);margin-top:8px;text-align:right;"></div>
                        </div>
                        <div class="vocab-categories" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:var(--space-lg);">`;
                    const cats = ['ทั้งหมด','กระทรวง','องค์กร','ศัพท์กฎหมาย'];
                    const catColors = { 'ทั้งหมด': 'navy', 'กระทรวง': 'blue', 'องค์กร': 'green', 'ศัพท์กฎหมาย': 'amber' };
                    cats.forEach((cat, ci) => {
                        const col = catColors[cat] || 'blue';
                        html += `<button class="vocab-cat-btn vocab-cat-active" data-cat="${cat}" onclick="filterVocabCat('${groupId}','${cat}',this)"
                            style="padding:6px 16px;border-radius:var(--radius-full);font-family:var(--font-display);font-weight:700;font-size:0.8rem;cursor:pointer;border:1.5px solid var(--border);background:var(--white);color:var(--text-muted);transition:all 0.15s;">${cat}</button>`;
                    });
                    html += `</div><div class="vocab-accordion">`;
                    groups.forEach((grp, gi) => {
                        const grpId = groupId + '-g' + gi;
                        html += `<div class="vocab-group" data-vocab-cat="${grp.category || 'ทั้งหมด'}" style="margin-bottom:var(--space-md);">
                            <div class="vocab-group-header" onclick="toggleVocabGroup('${grpId}')"
                                style="display:flex;align-items:center;justify-content:space-between;padding:12px 18px;background:var(--white);border:1.5px solid var(--border);border-radius:var(--radius-md);cursor:pointer;user-select:none;transition:all 0.15s;margin-bottom:12px;">
                                <div style="display:flex;align-items:center;gap:10px;">
                                    <span style="font-size:1.1rem;">${grp.icon || '📁'}</span>
                                    <span style="font-family:var(--font-display);font-weight:700;font-size:0.92rem;color:var(--text);">${grp.groupTitle}</span>
                                    <span class="vocab-count-badge" style="background:var(--cream);color:var(--text-muted);font-family:var(--font-body);font-size:0.72rem;font-weight:600;padding:2px 8px;border-radius:99px;">${(grp.terms || []).length}</span>
                                </div>
                                <svg class="vocab-group-arrow" id="va-${grpId}" style="width:18px;height:18px;color:var(--text-muted);transition:transform 0.2s;" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </div>
                            <div class="vocab-group-body" id="vb-${grpId}" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:10px;padding-left:2px;">
                            ${(grp.terms || []).map(term => `
                                <div class="vocab-card" data-vocab-text="${(term.term + ' ' + (term.def || '') + ' ' + (term.eng || '')).toLowerCase().replace(/<[^>]*>/g,'')}"
                                    style="background:var(--white);border:1.5px solid var(--border-light);border-radius:12px;padding:14px 16px;transition:all 0.15s;cursor:default;">
                                    <div style="display:flex;align-items:flex-start;gap:10px;">
                                        <div style="flex:1;min-width:0;">
                                            <div style="font-family:var(--font-display);font-weight:800;font-size:0.95rem;color:var(--text);margin-bottom:2px;">${term.term}</div>
                                            ${term.eng ? `<div style="font-family:var(--font-body);font-size:0.72rem;color:var(--accent);font-weight:600;margin-bottom:6px;">${term.eng}</div>` : ''}
                                            <div style="font-family:var(--font-body);font-size:0.83rem;color:var(--text-muted);line-height:1.65;">${term.def}</div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                            </div>
                        </div>`;
                    });
                    html += `</div></div>`;
                    // Add script for this vocab section
                    html += `<script>
                    function filterVocab(gid) {
                        var q = document.getElementById('vs-' + gid).value.toLowerCase();
                        var visible = 0;
                        document.querySelectorAll('[data-vocab-group="' + gid + '"] .vocab-card').forEach(function(c) {
                            var show = c.getAttribute('data-vocab-text').includes(q);
                            c.style.display = show ? '' : 'none';
                            if (show) visible++;
                        });
                        var countEl = document.getElementById('vc-' + gid);
                        if (countEl) countEl.textContent = q ? visible + ' / ' + (document.querySelectorAll('[data-vocab-group="' + gid + '"] .vocab-card').length) + ' คำ' : '';
                    }
                    function filterVocabCat(gid, cat, btn) {
                        document.querySelectorAll('[data-vocab-group="' + gid + '"] .vocab-cat-btn').forEach(function(b){b.classList.remove('vocab-cat-active');b.style.background='var(--white)';b.style.color='var(--text-muted)';b.style.borderColor='var(--border)';});
                        btn.classList.add('vocab-cat-active');
                        btn.style.background = 'var(--navy)';
                        btn.style.color = '#fff';
                        btn.style.borderColor = 'var(--navy)';
                        document.querySelectorAll('[data-vocab-group="' + gid + '"] .vocab-group').forEach(function(g) {
                            g.style.display = (cat === 'ทั้งหมด' || g.getAttribute('data-vocab-cat') === cat) ? '' : 'none';
                        });
                    }
                    function toggleVocabGroup(gid) {
                        var body = document.getElementById('vb-' + gid);
                        var arrow = document.getElementById('va-' + gid);
                        if (!body) return;
                        var isOpen = body.style.display !== 'none';
                        body.style.display = isOpen ? 'none' : '';
                        if (arrow) arrow.style.transform = isOpen ? '' : 'rotate(180deg)';
                    }
                    // Init first group open
                    document.querySelectorAll('[data-vocab-group="' + gid + '"] .vocab-group').forEach(function(g, i) {
                        if (i > 0) {
                            var gid2 = g.querySelector('.vocab-group-body');
                            if (gid2) gid2.style.display = 'none';
                        }
                    });
                    // Init cat button style
                    document.querySelectorAll('[data-vocab-group="' + gid + '"] .vocab-cat-active').forEach(function(b){
                        b.style.background='var(--navy)';b.style.color='#fff';b.style.borderColor='var(--navy)';
                    });
                    </script>`;
                    break;
                }
                case 'premium-timeline': {
                    html += `<div class="premium-timeline">`;
                    (block.steps || []).forEach(step => {
                        html += `
                        <div class="premium-timeline-item">
                            <div class="premium-timeline-node">${step.step}</div>
                            <div class="premium-timeline-card">
                                <div class="premium-timeline-header">
                                    <div class="premium-timeline-title">${step.title}</div>
                                    ${step.badge ? `<span class="premium-timeline-badge ${step.badgeColor || 'amber'}">${step.badge}</span>` : ''}
                                </div>
                                <div class="premium-timeline-desc">${step.desc}</div>
                            </div>
                        </div>`;
                    });
                    html += `</div>`;
                    break;
                }
                case 'premium-flowchart': {
                    html += `<div class="premium-flow-grid">`;
                    (block.cards || []).forEach(card => {
                        html += `
                        <div class="premium-flow-card status-${card.status || 'allowed'}">
                            <div class="premium-flow-header">
                                <div class="premium-flow-title">${card.title}</div>
                                <div class="premium-flow-icon">${card.icon || 'ℹ️'}</div>
                            </div>
                            ${card.authority ? `
                            <div class="premium-flow-authority">${card.authorityLabel === '' || card.authorityLabel === 'none' ? '' : (card.authorityLabel || 'อนุมัติ') + ': '}${card.authority}</div>
                            ` : ''}
                            <div class="premium-flow-desc">${card.desc}</div>
                        </div>`;
                    });
                    html += `</div>`;
                    break;
                }
                default: break;
            }
        });
        return html;
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