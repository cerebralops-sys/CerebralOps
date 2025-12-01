/* ----------------------------------------------------
   Cerebral Ops – RevOps Sales Page JS
   Notes:
   - Vanilla JS only. No external libraries.
   - All features OFF unless toggled via flags.
   - Placeholders auto-hidden if empty.
----------------------------------------------------- */

/* =====================
   CONFIG FLAGS
===================== */
const ENABLE_SCARCITY = false; // Must be true AND [[LIMITED_SLOTS_COUNT]] provided
const ENABLE_COOKIE_BANNER = false;
const ENABLE_EXIT_INTENT_MODAL = true;

/* =====================
   UTILS
===================== */
function smoothScroll(target) {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function hideIfEmpty(selector, placeholder) {
    const el = document.querySelector(selector);
    if (el && el.innerHTML.includes(placeholder)) {
        el.style.display = 'none';
    }
}

/* =====================
   PERSONA TAB SWITCHER
===================== */
function initPersonaTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.persona-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.target;
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.querySelector(`#${target}`).classList.add('active');
        });
    });
}
initPersonaTabs();

/* =====================
   FAQ ACCORDION
===================== */
function initFAQ() {
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isOpen = answer.style.display === 'block';
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            answer.style.display = isOpen ? 'none' : 'block';
        });
    });
}
initFAQ();

/* =====================
   ROI CALCULATOR
===================== */
function initROICalc() {
    //const form = document.querySelector('#roi-form');
    //if (!form) return;

    //form.addEventListener('submit', e => {
    //    e.preventDefault();

    
        const revenue = parseFloat(document.querySelector('#monthlyRevenue').value) || 0;
        const closeRate = parseFloat(document.querySelector('#closeRate').value) || 0;
        const acv = parseFloat(document.querySelector('#acv').value) || 0;
        const toolSpend = parseFloat(document.querySelector('#toolSpend').value) || 0;

        const upliftLow = (revenue * 0.05).toFixed(0);
        const upliftHigh = (revenue * 0.20).toFixed(0);
        const payback = (toolSpend / (revenue * 0.10 + 1)).toFixed(1);

        const output = document.querySelector('.roi-output');
        output.innerHTML = `
            <p><strong>Estimated Uplift Range:</strong> $${upliftLow} – $${upliftHigh} / month</p>
            <p><strong>Estimated Payback Time:</strong> ${payback} months (non-binding estimate)</p>
        `;
        output.style.display = 'block';
    //});
}
//initROICalc();

/* =====================
   TESTIMONIAL CAROUSEL
===================== */
function initTestimonials() {
    const items = document.querySelectorAll('.testimonial');
    if (!items.length) return;

    let index = 0;
    function showNext() {
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');
        index = (index + 1) % items.length;
    }
    showNext();
    setInterval(showNext, 6000);
}
initTestimonials();

/* =====================
   STICKY HEADER REVEAL
===================== */
window.addEventListener('scroll', () => {
    const sticky = document.querySelector('.sticky-cta');
    if (!sticky) return;
    sticky.style.display = window.scrollY > 160 ? 'flex' : 'none';
});

/* =====================
   EXIT INTENT MODAL
===================== */
function initExitIntent() {
    if (!ENABLE_EXIT_INTENT_MODAL) return;
    let shown = false;
    document.addEventListener('mouseout', e => {
        if (e.clientY < 20 && !shown) {
            const modal = document.querySelector('#exitModal');
            if (modal) modal.style.display = 'block';
            shown = true;
        }
    });
}
initExitIntent();

/* =====================
   COOKIE BANNER
===================== */
function initCookieBanner() {
    if (!ENABLE_COOKIE_BANNER) return;
    const banner = document.querySelector('#cookie-banner');
    const btn = document.querySelector('#cookie-accept');
    if (banner && btn) {
        banner.style.display = 'block';
        btn.addEventListener('click', () => banner.style.display = 'none');
    }
}
initCookieBanner();

/* =====================
   FORM VALIDATION
===================== */
function initLeadForm() {
    const form = document.querySelector('#lead-form');
    if (!form) return;

    form.addEventListener('submit', e => {
        const email = form.querySelector('#email');
        const honeypot = form.querySelector('#hp-field').value;

        if (honeypot !== '') {
            e.preventDefault();
            return; // Spam detected
        }
        if (!email.value.includes('@')) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
}
initLeadForm();

/* =====================
   SMOOTH SCROLL LINKS
===================== */
document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.scroll;
        smoothScroll(target);
    });
});

/* =====================
   HIDE EMPTY PLACEHOLDERS
===================== */
hideIfEmpty('#testimonials-section', '[[TESTIMONIALS_JSON]]');
hideIfEmpty('#case-studies-section', '[[CASE_STUDIES_HTML]]');
hideIfEmpty('#pricing-section', '[[PRICING_TEXT]]');
hideIfEmpty('#guarantee', '[[GUARANTEE_TEXT]]');

/* =====================
   SCARCITY DISPLAY
===================== */
if (ENABLE_SCARCITY) {
    const el = document.querySelector('#scarcity');
    if (el && el.innerHTML.includes('[[LIMITED_SLOTS_COUNT]]')) {
        el.innerHTML = ''; // If data missing
    }
} else {
    const el = document.querySelector('#scarcity');
    if (el) el.style.display = 'none';
}

// AUTO UPDATE FOOTER YEAR
document.getElementById('year').textContent = new Date().getFullYear();

/* =====================
   END OF FILE
===================== */
