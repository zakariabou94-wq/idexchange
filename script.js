// ═══════════════════════════════════════════════════════════════
//  SCRIPT.JS  —  Interactions + language system
//  DO NOT EDIT unless you are changing website features.
//  All text lives in content.js.
// ═══════════════════════════════════════════════════════════════

// ── Language state ──────────────────────────────────────────────
let currentLang = (function () {
  const stored = localStorage.getItem('idexchange-lang');
  if (stored && CONTENT[stored]) return stored;
  return navigator.language.toLowerCase().startsWith('nl') ? 'nl' : 'en';
})();

// ── Translation helpers ──────────────────────────────────────────
function t(key) {
  const parts = key.split('.');
  let val = CONTENT[currentLang];
  for (const p of parts) val = val?.[p];
  return val ?? '';
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = t('nav.lang');
  });
  document.documentElement.lang = currentLang;
}

// ── SVG icon used in expertise cards ────────────────────────────
const CARD_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;

// ── Dynamic section renderers ────────────────────────────────────
function renderExpertiseCards() {
  const el = document.getElementById('expertise-cards');
  if (!el) return;
  const delays = ['', ' data-reveal-delay="1"', ' data-reveal-delay="2"'];
  el.innerHTML = CONTENT[currentLang].expertise.cards.map((card, i) => `
    <div class="expertise-card" data-reveal${delays[i] || ''}>
      <div class="card-icon">${CARD_ICON}</div>
      <h3>${card.title}</h3>
      <p>${card.text}</p>
    </div>`).join('');
}

function renderStats() {
  const el = document.getElementById('stats-grid');
  if (!el) return;
  const delays = ['', ' data-reveal-delay="1"', ' data-reveal-delay="2"', ' data-reveal-delay="3"', ' data-reveal-delay="4"'];
  el.innerHTML = CONTENT[currentLang].stats.map((stat, i) => `
    <div data-reveal${delays[i] || ''}>
      <span class="stat-number">${stat.number}</span>
      <span class="stat-label">${stat.label}</span>
    </div>`).join('');
}

function renderTimeline() {
  const el = document.getElementById('experience-timeline');
  if (!el) return;
  const delays = ['', ' data-reveal-delay="1"', ' data-reveal-delay="2"', ' data-reveal-delay="3"'];
  el.innerHTML = CONTENT[currentLang].experience.items.map((item, i) => `
    <div class="timeline-item" data-reveal${delays[i] || ''}>
      <div class="timeline-period">${item.period}</div>
      <div class="timeline-body">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </div>`).join('');
}

function renderStatementLists() {
  const bad  = document.getElementById('statement-bad');
  const good = document.getElementById('statement-good');
  const data = CONTENT[currentLang].statement;
  const makeItem = text => `<li><span class="dash">—</span><span>${text}</span></li>`;
  if (bad)  bad.innerHTML  = data.bad_items.map(makeItem).join('');
  if (good) good.innerHTML = data.good_items.map(makeItem).join('');
}

function renderReviews() {
  const el = document.getElementById('review-cards');
  if (!el) return;
  const delays = ['', ' data-reveal-delay="1"', ' data-reveal-delay="2"'];
  el.innerHTML = CONTENT[currentLang].reviews.items.map((r, i) => `
    <div class="review-card" data-reveal${delays[i] || ''}>
      <div class="review-mark">&ldquo;</div>
      <p class="review-text">${r.text}</p>
      <div>
        <div class="review-author">${r.author}</div>
        <div class="review-role">${r.role}</div>
      </div>
    </div>`).join('');
}

function renderAll() {
  renderExpertiseCards();
  renderStats();
  renderTimeline();
  renderStatementLists();
  renderReviews();
  applyTranslations();
  // Re-observe any newly rendered elements for scroll reveal
  document.querySelectorAll('[data-reveal]:not(.revealed)').forEach(el => revealObserver.observe(el));
}

// ── Language switch ──────────────────────────────────────────────
function switchLang() {
  currentLang = currentLang === 'nl' ? 'en' : 'nl';
  localStorage.setItem('idexchange-lang', currentLang);
  renderAll();
}

document.querySelectorAll('.lang-toggle').forEach(btn => {
  btn.addEventListener('click', switchLang);
});

// ── Sticky header + active nav ───────────────────────────────────
const header   = document.getElementById('site-header');
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

function onScroll() {
  header.classList.toggle('scrolled', window.scrollY > 50);

  // Active nav link: find the last section whose top is above the fold midpoint
  const midpoint = window.scrollY + 140;
  let active = '';
  sections.forEach(sec => { if (sec.offsetTop <= midpoint) active = sec.id; });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${active}`);
  });
}

window.addEventListener('scroll', onScroll, { passive: true });

// ── Mobile nav ───────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── Smooth scroll ────────────────────────────────────────────────
document.addEventListener('click', e => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute('href'));
  if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
});

// ── Scroll reveal ────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '-80px' });

// ── Contact form — Formspree AJAX ────────────────────────────────
const form      = document.getElementById('contact-form');
const msgEl     = document.getElementById('form-message');
const submitBtn = document.getElementById('form-submit-btn');

if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    submitBtn.disabled = true;
    msgEl.textContent = '';
    msgEl.className = 'form-message';

    try {
      const res = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        msgEl.textContent = t('contact.success');
        msgEl.classList.add('success');
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      msgEl.textContent = t('contact.error');
      msgEl.classList.add('error');
    } finally {
      submitBtn.disabled = false;
    }
  });
}

// ── Init ─────────────────────────────────────────────────────────
renderAll();
