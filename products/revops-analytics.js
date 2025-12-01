/* ----------------------------------------------------
   Cerebral Ops – Analytics & UTM Tracking System
   Vanilla JS | No third-party overhead
----------------------------------------------------- */

/* ======================
   UTM CAPTURE + SESSION STORAGE
======================= */
function getUTMs() {
    const params = new URLSearchParams(window.location.search);
    const utms = {
        source: params.get('utm_source') || 'direct',
        medium: params.get('utm_medium') || 'none',
        campaign: params.get('utm_campaign') || 'none',
        content: params.get('utm_content') || 'none',
        term: params.get('utm_term') || 'none'
    };
    sessionStorage.setItem('CO_UTM', JSON.stringify(utms));
    return utms;
}
const sessionUTM = getUTMs();

/* ======================
   CLICK TRACKING
======================= */
document.querySelectorAll('[data-track]').forEach(el => {
    el.addEventListener('click', () => {
        const payload = {
            event: 'click',
            label: el.getAttribute('data-track'),
            utm: sessionUTM,
            ts: Date.now()
        };
        console.log('CTA Click:', payload); // Replace with GTM push if using
        // dataLayer.push(payload); // if GTM enabled
    });
});

/* ======================
   SCROLL DEPTH TRACKING
======================= */
let scrollTracked25 = false;
let scrollTracked50 = false;
let scrollTracked75 = false;

window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100;

    if (!scrollTracked25 && scrolled > 25) { trackScroll('25%'); scrollTracked25 = true; }
    if (!scrollTracked50 && scrolled > 50) { trackScroll('50%'); scrollTracked50 = true; }
    if (!scrollTracked75 && scrolled > 75) { trackScroll('75%'); scrollTracked75 = true; }
});

function trackScroll(depth) {
    const payload = {
        event: 'scroll_depth',
        depth: depth,
        utm: sessionUTM,
        ts: Date.now()
    };
    console.log('Scroll depth:', payload);
}

/* ======================
   FORM SUBMISSION TRACKING
======================= */
function initFormTracking() {
    const leadForm = document.querySelector('#lead-form');
    if (!leadForm) return;

    leadForm.addEventListener('submit', () => {
        const payload = {
            event: 'lead_form_submit',
            utm: sessionUTM,
            ts: Date.now()
        };
        console.log('Lead Form Submitted:', payload);
        // dataLayer.push(payload); // if GTM enabled
    });
}
initFormTracking();

/* ======================
   TRACK CALENDLY / BOOKING CTA
======================= */
document.querySelectorAll('[data-booking]').forEach(btn => {
    btn.addEventListener('click', () => {
        const payload = {
            event: 'booking_click',
            utm: sessionUTM,
            ts: Date.now()
        };
        console.log('Booking CTA Clicked:', payload);
    });
});

/* ======================
   OPTIONAL – ADD TO LOCAL STORAGE FOR CRM/FORM FILL
======================= */
function attachUTMToForm() {
    const leadForm = document.querySelector('#lead-form');
    if (!leadForm) return;

    const utmField = leadForm.querySelector('input[name="utm_payload"]');
    if (utmField) utmField.value = JSON.stringify(sessionUTM);
}
attachUTMToForm();

/* ======================
   OPTIONAL – GOOGLE TAG MANAGER PLACEHOLDER
   Enable by uncommenting script tag in HTML
======================= */
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', '{{G-XXXXXXX}}'); // Replace with real ID

/* ======================
   OPTIONAL – META PIXEL PLACEHOLDER
======================= */
/*
!function(f,b,e,v,n,t,s){
  if(f.fbq)return; n=f.fbq=function(){n.callMethod ?
  n.callMethod.apply(n,arguments) : n.queue.push(arguments)};
  if(!f._fbq) f._fbq = n;
  n.push = n; n.loaded = !0; n.version = '2.0';
  n.queue = []; t=b.createElement(e); t.async = !0;
  t.src = v; s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s);
}(window, document, 'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '{{PIXEL_ID}}');
fbq('track', 'PageView');
*/


/* ======================
   END OF FILE
======================= */
// JavaScript source code
