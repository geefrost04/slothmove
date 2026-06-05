/* =========================================================================
   🎴 PAB FLASHCARD LOGIC — v4 (Warm Editorial)
   - PAB (กรมป้องกันและบรรเทาสาธารณภัย) branding
   - Cream/Navy/Yellow palette + Kanit + Sarabun Thai fonts
   - Card-type-aware layouts (vocab / list / comparison / process)
   - PAB seal + ปภ-XXX card code + rubber stamp aesthetic
   ========================================================================= */
(function () {
    'use strict';

    var BRAND = {
        logo: '../system/img/slothmove_mascot.png',
        name: 'การ์ดช่วยจำ PAB',
        sub: 'เตรียมสอบ ก.ป.ภ. · SlothMove',
        orgShort: 'ก.ป.ภ.',
        orgFull: 'กรมป้องกันและบรรเทาสาธารณภัย',
        tagPrefix: 'ปภ'
    };

    // ========== PAB Seal SVG (inline) ==========
    var PAB_SEAL_SVG = '' +
        '<svg class="fc-pab-seal" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="ตรากรมป้องกันและบรรเทาสาธารณภัย">' +
            '<circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" stroke-width="1.5"/>' +
            '<circle cx="50" cy="50" r="43" fill="none" stroke="currentColor" stroke-width="0.4" stroke-dasharray="1,1"/>' +
            '<text x="50" y="14" text-anchor="middle" font-family="Kanit, sans-serif" font-size="5.4" font-weight="600" fill="currentColor" letter-spacing="0.3">กรมป้องกันและบรรเทาสาธารณภัย</text>' +
            '<path d="M 50 26 L 64 32 L 64 54 Q 64 68 50 74 Q 36 68 36 54 L 36 32 Z" fill="none" stroke="currentColor" stroke-width="1.2"/>' +
            '<path d="M 41 50 Q 45.5 45.5 50 50 T 59 50" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>' +
            '<path d="M 41 56 Q 45.5 51.5 50 56 T 59 56" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>' +
            '<text x="50" y="45" text-anchor="middle" font-family="Kanit, sans-serif" font-size="11" font-weight="800" fill="currentColor" letter-spacing="-0.2">ก.ป.ภ.</text>' +
            '<text x="50" y="91" text-anchor="middle" font-family="Kanit, sans-serif" font-size="4.5" font-weight="600" fill="currentColor" letter-spacing="0.4">ป้องกัน · บรรเทา · ฟื้นฟู</text>' +
        '</svg>';

    function esc(s) {
        if (s == null) return '';
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function md(s) {
        if (!s) return '';
        var h = esc(s);
        h = h.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        h = h.replace(/\n/g, '<br>');
        return h;
    }

    // ========== Card type detection ==========
    function detectCardType(card) {
        var front = (card.front || '').toLowerCase();
        var back = card.back || '';
        // Explicit type field wins
        if (card.type && /^(vocab|list|comparison|process|number)$/i.test(card.type)) {
            return card.type.toLowerCase();
        }
        if (/(มีกี่|กี่ชนิด|กี่ประเภท|กี่ข้อ|กี่ลักษณะ|กี่อย่าง|กี่จำนวน)/.test(front)) return 'list';
        if (/(ต่างกัน|ต่างจาก|เปรียบเทียบ|vs\.?|แตกต่าง|เหมือนกัน|เทียบกัน)/.test(front)) return 'comparison';
        if (/(ขั้นตอน|วิธีการ|ลำดับขั้น|กระบวนการ|การ\w+อย่างไร|อย่างไร$)/.test(front)) return 'process';
        // Back content: starts of lines that look like list items
        if (/^[1-9]️⃣/m.test(back)) return 'list';
        if (/^[1-9]\./m.test(back)) return 'list';
        // Colored circles often used for severity/list items
        if (/^[\u{1F7E0}\u{1F7E1}\u{1F7E2}\u{1F7E3}\u{1F534}\u{1F535}\u{26AB}\u{26AA}]/um.test(back)) return 'list';
        return 'vocab';
    }

    var TYPE_LABEL = {
        vocab: '📚 ความหมาย',
        list: '📋 รายการ',
        comparison: '⚖️ เปรียบเทียบ',
        process: '🔧 ขั้นตอน',
        number: '🔢 จำนวน'
    };

    function renderBack(s) {
        if (!s) return { main: '', source: '' };
        var lines = s.split('\n');
        var mainLines = [];
        var sourceLine = '';
        lines.forEach(function (line) {
            var t = line.trim();
            if (!t) return;
            // Source line: only 📜/📖 followed by reference keyword
            if (/^📜\s+(?:ข้อ|มาตรา|อ้างอิง|หน้า|chapter|Article)/u.test(t) ||
                /^📖\s+(?:ข้อ|มาตรา|อ้างอิง|หน้า|chapter|Article)/u.test(t)) {
                sourceLine = t;
            } else {
                mainLines.push(line);
            }
        });
        var main = mainLines.map(function (line) {
            var t = line.trim();
            var cls = 'ic-note';
            if (/^[✅❌]/u.test(t)) cls = 'ic-answer';
            else if (/^[💡🔑]/u.test(t)) cls = 'ic-anchor';
            else if (/^[⚠️🚨]/u.test(t)) cls = 'ic-trap';
            else if (/^[📌📍🎯]/u.test(t)) cls = 'ic-context';
            var content = esc(line).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
            content = content.replace(/^(\s*)([\u{1F000}-\u{1FFFF}]|[\u{2600}-\u{27BF}]|[\u{2B00}-\u{2BFF}]|[\u{FE0F}\u{200D}]+)/u,
                function (_m, ws, emo) {
                    return ws + '<span class="' + cls + ' ic-emoji">' + emo + '</span>';
                });
            return '<p>' + content + '</p>';
        }).join('');
        return { main: main, source: sourceLine };
    }

    function shuffle(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
        }
        return a;
    }

    // ============== State ==============
    var rawAllCards = [];
    var allCards = [];
    var order = [];
    var deckIdx = 0;
    var isFlipped = false;
    var knownSet = new Set();
    var unknownSet = new Set();
    var STORAGE_PROGRESS = '';
    var STORAGE_SESSION = '';
    var timerSec = 30 * 60;
    var timerHandle = null;

    // ============== Persistence ==============
    function loadProgress() {
        // Clear any old stored data
        try {
            localStorage.removeItem(STORAGE_PROGRESS);
            sessionStorage.removeItem(STORAGE_SESSION);
        } catch (e) { /* ignore */ }
    }

    function saveProgress() {
        // Saving disabled
    }

    function loadSession() {
        return null; // Always start fresh
    }

    function saveSession() {
        // Saving disabled
    }

    function fmtTime(sec) {
        var m = Math.floor(sec / 60);
        var s = sec % 60;
        return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    }

    function startTimer() {
        if (timerHandle) clearInterval(timerHandle);
        timerHandle = setInterval(function () {
            if (timerSec > 0) {
                timerSec--;
                var el = document.getElementById('fc-timer-time');
                if (el) el.textContent = fmtTime(timerSec);
            } else if (timerHandle) {
                clearInterval(timerHandle);
                timerHandle = null;
            }
        }, 1000);
    }

    // ============== Helper: build the card HTML (front + back) ==========
    function buildCardHtml() {
        return '' +
            '<div class="fc-card-wrap" id="fc-card-wrap">' +
                '<div class="fc-face fc-face-front" id="fc-face-front">' +
                    '<p class="fc-card-num" id="fc-card-num-front">ข้อ 1</p>' +
                    '<div class="fc-card-logo"><img src="../system/img/slothmove_mascot.png" alt="SlothMove"></div>' +
                    '<div class="fc-content">' +
                        '<div class="fc-content-front" id="fc-content-front"></div>' +
                        '<div class="fc-content-front-sub" id="fc-content-front-sub"></div>' +
                    '</div>' +
                    '<div class="fc-hint">แตะเพื่อพลิก 🔄</div>' +
                '</div>' +
                '<div class="fc-face fc-face-back" id="fc-face-back">' +
                    '<div class="fc-card-logo"><img src="../system/img/slothmove_mascot.png" alt="SlothMove"></div>' +
                    '<div class="fc-content">' +
                        '<div class="fc-content-back" id="fc-content-back"></div>' +
                        '<div class="fc-source" id="fc-source-line"></div>' +
                    '</div>' +
                    '<div class="fc-hint">แตะเพื่อพลิก 🔄</div>' +
                '</div>' +
            '</div>';
    }

    // ============== Render ==============
    function renderApp(data) {
        var cfg = window.PAGE_CONFIG || {};
        var title = cfg.title || 'นักวิเคราะห์นโยบายและแผน';
        var titleEn = cfg.titleEn || 'Policy and Planning Analyst';
        var backHref = cfg.backHref || '';

        var size = order.length;
        var total = rawAllCards.length;
        var presets = [10, 20, 50, 100];
        var tabHtml = '';
        var matched = false;

        presets.forEach(function (p) {
            if (total > p) {
                var active = (size === p);
                if (active) matched = true;
                tabHtml += '<button class="fc-tab' + (active ? ' active' : '') + '" data-size="' + p + '">สุ่ม ' + p + ' ข้อ</button>';
            }
        });

        var isAllActive = !matched || (size === total);
        tabHtml += '<button class="fc-tab' + (isAllActive ? ' active' : '') + '" data-size="' + total + '">ลุยทั้งหมด (' + total + ')</button>';

        document.body.className = 'fc-app';
        document.body.innerHTML =
            '<header class="fc-header">' +
                '<div class="fc-header-brand">' +
                    '<img src="../system/img/slothmove_mascot.png" alt="SlothMove" style="width:42px;height:42px;object-fit:contain;border-radius:8px;flex-shrink:0;">' +
                    '<div class="fc-header-text">' +
                        '<h1 class="fc-header-title">' + esc(title) + '</h1>' +
                        '<p class="fc-header-subtitle">' + BRAND.orgFull + ' · ' + esc(titleEn) + '</p>' +
                    '</div>' +
                '</div>' +
                '<div class="fc-header-actions">' +
                    '<div class="fc-timer">' +
                        '<span class="fc-timer-icon">⏱</span>' +
                        '<span id="fc-timer-time">' + fmtTime(timerSec) + '</span>' +
                        '<span class="fc-timer-unit">เหลือเวลา</span>' +
                    '</div>' +
                    '<button class="fc-donate-btn" onclick="if(window.showDonatePopup) window.showDonatePopup()">☕ เลี้ยงกาแฟ</button>' +
                '</div>' +
            '</header>' +
            '<div class="fc-progress-bar">' +
                '<div class="fc-progress-bar-track"><div class="fc-progress-bar-fill" id="fc-progress-fill"></div></div>' +
                '<div class="fc-progress-text" id="fc-progress-text">0 / ' + order.length + '</div>' +
            '</div>' +
            '<div class="fc-tabs">' +
                tabHtml +
            '</div>' +
            (backHref ? '<a class="fc-back-btn" href="' + esc(backHref) + '">← กลับหน้าหลัก</a>' : '') +
            '<div class="fc-stage-wrap">' +
                '<div class="fc-stage" id="fc-stage">' + buildCardHtml() + '</div>' +
            '</div>' +
            '<div class="fc-floating-actions">' +
                '<button class="fc-btn-circle fc-btn-unknown" id="fc-action-dontknow" aria-label="ทบทวน">' +
                    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>' +
                    '<span>ทบทวน</span>' +
                '</button>' +
                '<button class="fc-btn-circle fc-btn-known" id="fc-action-know" aria-label="จำได้">' +
                    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>' +
                    '<span>จำได้</span>' +
                '</button>' +
            '</div>' +
            '<div class="fc-dots" id="fc-dots"></div>' +
            '<div class="fc-stats">' +
                '<div class="fc-stat">' +
                    '<div class="fc-stat-value total" id="fc-stat-total">' + order.length + '</div>' +
                    '<div class="fc-stat-label">ในรอบนี้</div>' +
                '</div>' +
                '<div class="fc-stat">' +
                    '<div class="fc-stat-value known" id="fc-stat-known">0</div>' +
                    '<div class="fc-stat-label">จำได้</div>' +
                '</div>' +
                '<div class="fc-stat">' +
                    '<div class="fc-stat-value unknown" id="fc-stat-review">0</div>' +
                    '<div class="fc-stat-label">ทบทวน</div>' +
                '</div>' +
            '</div>' +
            '<div class="fc-mini-actions">' +
                '<button class="fc-mini-btn" id="fc-shuffle-btn">🔀 สับเปลี่ยน</button>' +
                '<button class="fc-mini-btn" id="fc-clear-btn">🗑 ล้างความจำ</button>' +
            '</div>' +
            // Theme toggle button - inserted as last child so it stays (fixed position)
            '<button class="fc-theme-toggle" id="fc-theme-toggle" aria-label="สลับธีม">' +
                '<span class="fc-theme-knob">' +
                    '<span class="fc-theme-icon sun">☀️</span>' +
                    '<span class="fc-theme-icon moon">🌙</span>' +
                '</span>' +
            '</button>' +
            '<div id="donatePopup" style="display:none;position:fixed;inset:0;z-index:99999;background:rgba(26,26,46,0.65);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:16px;">' +
                '<div style="background:var(--fc-white);width:100%;max-width:360px;border-radius:24px;padding:32px;text-align:center;box-shadow:var(--fc-shadow-card);position:relative;animation:fc-scaleIn 0.3s cubic-bezier(0.34,1.56,0.64,1);">' +
                    '<button onclick="closeDonatePopup()" style="position:absolute;top:16px;right:16px;width:32px;height:32px;border-radius:16px;background:rgba(150,150,150,0.15);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--fc-text-muted);font-size:1.2rem;transition:all 0.2s">✕</button>' +
                    '<img src="pic/qr.jpg" onerror="this.onerror=null; this.src=\'../../../../pic/qr.jpg\';" alt="QR Code" style="width:200px;height:200px;border-radius:16px;margin:0 auto 20px;display:block;box-shadow:var(--fc-shadow-soft);">' +
                    '<h2 id="donatePopupTitle" style="font-weight:900;font-size:1.3rem;color:var(--fc-navy);margin-bottom:8px">เลี้ยงกาแฟผมหน่อยครับ</h2>' +
                    '<p style="font-size:0.95rem;color:var(--fc-text-muted);line-height:1.5;margin-bottom:24px">เพื่อเป็นกำลังใจในการพัฒนาเว็บให้ดีขึ้น<br>ขอบคุณมากครับ 🙏</p>' +
                    '<button onclick="closeDonatePopup()" style="background:var(--fc-navy);color:#fff;border:none;border-radius:99px;padding:12px 32px;font-weight:600;font-size:1rem;cursor:pointer;width:100%;box-shadow:var(--fc-shadow-btn);transition:transform 0.2s">ปิดหน้าต่าง</button>' +
                '</div>' +
            '</div>';

        document.title = title + ' · ' + BRAND.name;

        // Build dots
        var dotsEl = document.getElementById('fc-dots');
        if (dotsEl) {
            for (var i = 0; i < order.length; i++) {
                var d = document.createElement('button');
                d.className = 'fc-dot';
                d.setAttribute('data-idx', String(i));
                d.setAttribute('aria-label', 'ข้อ ' + (i + 1));
                d.addEventListener('click', (function (idx) {
                    return function () { jumpTo(idx); };
                })(i));
                dotsEl.appendChild(d);
            }
        }

        bindEvents();
        startTimer();
        renderCurrent();
        updateStats();
    }

    // ============== Render current card ==============
    function renderCurrent() {
        if (deckIdx >= order.length) {
            showDone();
            return;
        }
        var realIdx = order[deckIdx];
        var card = allCards[realIdx];
        if (!card) return;

        var cardType = detectCardType(card);
        var cardCode = BRAND.tagPrefix + '-' + String(deckIdx + 1).padStart(3, '0');
        var typeLabel = TYPE_LABEL[cardType] || TYPE_LABEL.vocab;

        // Set type class on card wrap
        var wrap = document.getElementById('fc-card-wrap');
        if (wrap) {
            wrap.className = 'fc-card-wrap fc-type-' + cardType;
        }

        // Update strip on both faces (removed in v6)
        // var typeFront = document.getElementById('fc-card-type-front');
        // var typeBack = document.getElementById('fc-card-type-back');
        // [typeFront, typeBack].forEach(function (el) {
        //     if (!el) return;
        //     el.className = 'fc-card-type fc-type-' + cardType;
        //     var label = el.querySelector('.fc-type-label');
        //     if (label) label.textContent = typeLabel;
        // });

        // Update stamp code on both faces
        var stampFront = document.getElementById('fc-card-stamp-code-front');
        var stampBack = document.getElementById('fc-card-stamp-code-back');
        if (stampFront) stampFront.textContent = cardCode;
        if (stampBack) stampBack.textContent = cardCode;

        // Front content
        var contentFront = document.getElementById('fc-content-front');
        if (contentFront) contentFront.innerHTML = md(card.front);

        // Front subtitle (from card.hint or empty)
        var contentFrontSub = document.getElementById('fc-content-front-sub');
        if (contentFrontSub) {
            contentFrontSub.textContent = card.hint || '';
            contentFrontSub.style.display = card.hint ? '' : 'none';
        }

        // Back content
        var contentBack = document.getElementById('fc-content-back');
        if (contentBack) {
            var parts = renderBack(card.back);
            contentBack.innerHTML = parts.main;
            contentBack.className = 'fc-content-back is-' + cardType;
            var srcEl = document.getElementById('fc-source-line');
            if (srcEl) {
                srcEl.style.display = 'none';
            }
        }

        // Card number
        var numFront = document.getElementById('fc-card-num-front');
        var num = 'ข้อ ' + (deckIdx + 1);
        if (numFront) numFront.textContent = num;

        // Progress
        var progressText = document.getElementById('fc-progress-text');
        if (progressText) progressText.textContent = (deckIdx + 1) + ' / ' + order.length;
        var progressFill = document.getElementById('fc-progress-fill');
        if (progressFill) progressFill.style.width = (((deckIdx + 1) / order.length) * 100) + '%';

        // Reset flip
        isFlipped = false;
        if (wrap) wrap.classList.remove('flipped');

        // Update dots
        updateDots();

        saveSession();
    }

    function updateDots() {
        var dots = document.querySelectorAll('.fc-dot');
        dots.forEach(function (d, i) {
            d.className = 'fc-dot';
            if (i === deckIdx) d.classList.add('current');
            else if (i < deckIdx) {
                var realIdx = order[i];
                var card = allCards[realIdx];
                if (card && knownSet.has(card.id)) d.classList.add('known');
                else if (card && unknownSet.has(card.id)) d.classList.add('unknown');
            }
        });
    }

    function updateStats() {
        var elK = document.getElementById('fc-stat-known');
        var elR = document.getElementById('fc-stat-review');
        if (elK) elK.textContent = knownSet.size;
        if (elR) elR.textContent = unknownSet.size;
    }

    function showDone() {
        var stage = document.getElementById('fc-stage');
        if (!stage) return;
        var pct = order.length > 0 ? Math.round((knownSet.size / order.length) * 100) : 0;
        var trophy = pct >= 80 ? '🏆' : (pct >= 50 ? '🎉' : '💪');

        var reviewBtnHtml = '';
        if (unknownSet.size > 0) {
            reviewBtnHtml = '<button id="fc-review-mistakes" class="fc-btn-done-primary">🎯 ทบทวนข้อที่ผิดอีกครั้ง (' + unknownSet.size + ')</button>';
        }

        stage.innerHTML =
            '<div class="fc-done">' +
                '<div class="fc-done-seal"><img src="../system/img/slothmove_mascot.png" alt="SlothMove" style="width:80px;height:80px;object-fit:contain;border-radius:12px;"></div>' +
                '<h2 class="fc-done-title">' + trophy + ' จบรอบการฝึกแล้ว</h2>' +
                '<p class="fc-done-sub">จำได้ <strong>' + knownSet.size + '</strong> / ' + order.length + ' ใบ (' + pct + '%)</p>' +
                '<div class="fc-done-actions" style="display:flex; flex-direction:column; gap:16px; width:100%; max-width:320px; margin-top:16px;">' +
                    reviewBtnHtml +
                    '<button id="fc-restart" class="fc-btn-done-primary">🔀 เริ่มรอบใหม่</button>' +
                '</div>' +
            '</div>';

        var btnRestart = document.getElementById('fc-restart');
        if (btnRestart) btnRestart.addEventListener('click', restart);

        var btnReview = document.getElementById('fc-review-mistakes');
        if (btnReview) btnReview.addEventListener('click', reviewMistakes);

        // Show popup automatically
        setTimeout(function() {
            if (window.showDonatePopup) window.showDonatePopup();
        }, 800);
    }

    function reviewMistakes() {
        var newOrder = [];
        for (var i = 0; i < order.length; i++) {
            var realIdx = order[i];
            var card = allCards[realIdx];
            if (card && unknownSet.has(card.id)) {
                newOrder.push(realIdx);
            }
        }
        order = newOrder;
        deckIdx = 0;
        knownSet.clear();
        unknownSet.clear();
        saveProgress();
        saveSession();
        var keys = Object.keys(window).filter(function (k) { return k.indexOf('FLASHCARD_DATA_') === 0; });
        var data = keys.length > 0 ? window[keys[0]] : {};
        renderApp(data);
    }

    function restart() {
        var keys = Object.keys(window).filter(function (k) { return k.indexOf('FLASHCARD_DATA_') === 0; });
        var data = keys.length > 0 ? window[keys[0]] : {};
        startSession(order.length, data);
    }

    // ============== Navigation ==============
    function next() {
        if (deckIdx < order.length - 1) {
            deckIdx++;
            renderCurrent();
        } else {
            deckIdx++;
            showDone();
        }
    }

    function prev() {
        if (deckIdx > 0) {
            deckIdx--;
            renderCurrent();
        }
    }

    function jumpTo(idx) {
        if (idx >= 0 && idx < order.length) {
            deckIdx = idx;
            renderCurrent();
        }
    }

    function flip() {
        isFlipped = !isFlipped;
        var wrap = document.getElementById('fc-card-wrap');
        if (wrap) wrap.classList.toggle('flipped', isFlipped);
    }

    function markKnown() {
        var realIdx = order[deckIdx];
        var card = allCards[realIdx];
        if (card) {
            knownSet.add(card.id);
            unknownSet.delete(card.id);
            saveProgress();
            updateStats();
        }
        next();
    }

    function markUnknown() {
        var realIdx = order[deckIdx];
        var card = allCards[realIdx];
        if (card) {
            unknownSet.add(card.id);
            knownSet.delete(card.id);
            saveProgress();
            updateStats();
        }
        next();
    }

    function clearProgress() {
        if (!confirm('ล้างความจำทั้งหมด?')) return;
        knownSet.clear();
        unknownSet.clear();
        saveProgress();
        updateStats();
        updateDots();
    }

    function reshuffle() {
        if (!confirm('สับเปลี่ยนลำดับการ์ดใหม่?')) return;
        order = shuffle(allCards.map(function (_, i) { return i; }));
        deckIdx = 0;
        saveSession();
        renderCurrent();
    }

    // ============== Events ==============
    function bindEvents() {
        var stage = document.getElementById('fc-stage');
        if (stage) stage.addEventListener('click', function (e) {
            if (e.target.closest('.fc-card-next, .fc-card-prev, button')) return;
            flip();
        });

        var nextFront = document.getElementById('fc-next-front');
        var nextBack = document.getElementById('fc-next-back');
        var prevBack = document.getElementById('fc-card-prev-back');
        if (nextFront) nextFront.addEventListener('click', function (e) { e.stopPropagation(); next(); });
        if (nextBack) nextBack.addEventListener('click', function (e) { e.stopPropagation(); next(); });
        if (prevBack) prevBack.addEventListener('click', function (e) { e.stopPropagation(); prev(); });

        var knowBtn = document.getElementById('fc-action-know');
        var dontBtn = document.getElementById('fc-action-dontknow');
        if (knowBtn) knowBtn.addEventListener('click', markKnown);
        if (dontBtn) dontBtn.addEventListener('click', markUnknown);

        var shuf = document.getElementById('fc-shuffle-btn');
        var clear = document.getElementById('fc-clear-btn');
        if (shuf) shuf.addEventListener('click', reshuffle);
        if (clear) clear.addEventListener('click', clearProgress);

        var tabs = document.querySelectorAll('.fc-tab');
        tabs.forEach(function (t) {
            t.addEventListener('click', function () {
                if (t.classList.contains('active') || t.disabled) return;
                var size = parseInt(t.getAttribute('data-size'), 10) || 10;
                var keys = Object.keys(window).filter(function (k) { return k.indexOf('FLASHCARD_DATA_') === 0; });
                var data = keys.length > 0 ? window[keys[0]] : {};
                startSession(size, data);
            });
        });

        document.removeEventListener('keydown', onKey);
        document.addEventListener('keydown', onKey);
    }

    function onKey(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.key === 'ArrowRight') { next(); e.preventDefault(); }
        else if (e.key === 'ArrowLeft') { prev(); e.preventDefault(); }
        else if (e.key === ' ' || e.key === 'Enter') { flip(); e.preventDefault(); }
        else if (e.key.toLowerCase() === 'k') { markKnown(); e.preventDefault(); }
        else if (e.key.toLowerCase() === 'd') { markUnknown(); e.preventDefault(); }
    }

    // ============== Theme Toggle ==============
    function initThemeToggle() {
        var btn = document.getElementById('fc-theme-toggle');
        if (!btn) return;
        // Sync initial state from saved preference or OS setting
        (function syncTheme() {
            try {
                var saved = localStorage.getItem('fc_theme');
                if (saved === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    btn.classList.add('dark-mode');
                } else if (saved === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                    btn.classList.remove('dark-mode');
                } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    btn.classList.add('dark-mode');
                }
            } catch (e) {}
        }());
        btn.addEventListener('click', function () {
            var isDark = btn.classList.toggle('dark-mode');
            if (isDark) {
                document.documentElement.setAttribute('data-theme', 'dark');
                try { localStorage.setItem('fc_theme', 'dark'); } catch (e) {}
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                try { localStorage.setItem('fc_theme', 'light'); } catch (e) {}
            }
        });
    }

    window.showDonatePopup = function() {
        var popup = document.getElementById('donatePopup');
        if (popup) {
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };
    
    window.closeDonatePopup = function() {
        var popup = document.getElementById('donatePopup');
        if (popup) {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        }
    };

    // ============== Init ==============
    function init() {
        var keys = Object.keys(window).filter(function (k) {
            return k.indexOf('FLASHCARD_DATA_') === 0;
        });
        if (keys.length === 0) {
            document.body.innerHTML = '<div style="padding:40px;text-align:center;">ไม่พบข้อมูล Flash Card</div>';
            return;
        }
        var data = window[keys[0]];
        if (!data || !Array.isArray(data.cards) || data.cards.length === 0) return;

        rawAllCards = data.cards;
        allCards = rawAllCards;
        STORAGE_PROGRESS = 'fc_progress_' + data.subject;
        STORAGE_SESSION = 'fc_session_' + data.subject;

        loadProgress();

        var sess = loadSession();
        if (sess && sess.order && sess.order.length > 0) {
            order = sess.order;
            deckIdx = Math.min(sess.idx, order.length);
        } else {
            var indices = rawAllCards.map(function (_, i) { return i; });
            indices = shuffle(indices);
            order = indices.slice(0, Math.min(10, indices.length));
            deckIdx = 0;
        }
        
        renderApp(data);
        initThemeToggle();
    }

    function startSession(size, data) {
        var indices = rawAllCards.map(function (_, i) { return i; });
        indices = shuffle(indices);
        order = indices.slice(0, Math.min(size, indices.length));
        deckIdx = 0;
        
        knownSet.clear();
        unknownSet.clear();
        saveProgress();
        saveSession();
        
        renderApp(data);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
