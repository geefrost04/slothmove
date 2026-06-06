// Override PAB nav with Police Admin brand
// Runs after loader.js renders the nav
(function() {
    function overrideNav() {
        const navLogo = document.querySelector('.nav .nav-logo');
        if (!navLogo) return;
        navLogo.innerHTML = `
            <div class="logo-group">
                <img src="../pic/slothmove_mascot.png" alt="SlothMove">
                <img src="../pic/logo_police.png" alt="Royal Thai Police">
            </div>
            <div class="logo-stack">
                <span><span class="logo-accent">Sloth</span><span class="logo-sep">×</span>ตำรวจ</span>
                <span class="logo-sub">นายสิบ · สายอำนวยการ</span>
            </div>
        `;
        // Fix href to point to police_admin index
        navLogo.href = '../index.html';
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(overrideNav, 50));
    } else {
        setTimeout(overrideNav, 50);
    }
})();
