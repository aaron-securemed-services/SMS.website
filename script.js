/**
 * script.js — reads from content.js and renders all dynamic sections.
 * You should never need to edit this file.
 */

// ─── ICON HELPERS ─────────────────────────────────────────────
const CLOCK_ICON = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3.5v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`;
const CAL_ICON   = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="2" width="10" height="8" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M4 2V1M8 2V1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`;
const KIT_ICON   = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10l2-2 2 2 2-2 2 2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 6l2-2 2 2 2-2 2 2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// ─── RENDER: STANDARDS ────────────────────────────────────────
function renderStandards() {
  const el = document.getElementById('standards-list');
  if (!el) return;
  el.innerHTML = STANDARDS.map(s => `
    <div class="cert-bar">
      <span class="cert-dot"></span>
      <span class="cert-text">${s}</span>
    </div>
  `).join('');
}

// ─── RENDER: COURSES ──────────────────────────────────────────
function renderCourses() {
  const grid = document.getElementById('courses-grid');
  if (!grid) return;

  grid.innerHTML = COURSES.map(c => `
    <div class="course-card">
      <span class="course-level level-${c.level}">${capitalise(c.level)}</span>
      <h3>${c.title}</h3>
      <p>${c.description}</p>
      <div class="course-meta">
        <span class="meta-tag">${CLOCK_ICON} ${c.ages}</span>
        <span class="meta-tag">${CAL_ICON} ${c.format}</span>
        ${c.labKit ? `<span class="meta-tag">${KIT_ICON} Lab Kit Included</span>` : ''}
      </div>
    </div>
  `).join('');
}

// ─── RENDER: SESSIONS ─────────────────────────────────────────
function renderSessions() {
  const grid = document.getElementById('sessions-grid');
  if (!grid) return;

  if (!SESSIONS || SESSIONS.length === 0) {
    grid.innerHTML = `
      <div class="sessions-empty">
        <strong>Sessions Coming Soon</strong>
        Dates are being finalised. Email <a href="mailto:aaron@securemed.services" style="color:var(--accent)">aaron@securemed.services</a> to be notified when new sessions are posted.
      </div>`;
    return;
  }

  grid.innerHTML = SESSIONS.map(s => `
    <div class="session-card">
      <span class="session-type type-${s.type}">${s.type === 'inperson' ? '📍 In-Person' : '💻 Online'}</span>
      <h3>${s.title}</h3>
      <div class="session-detail">📅 <strong>${s.date}</strong></div>
      <div class="session-detail">📌 <strong>${s.location}</strong></div>
      <div class="session-detail">🎓 <strong>${s.level}</strong></div>
      ${s.spots != null ? `
        <div class="session-spots">
          <span>${s.spots} spots remaining</span> — email to register
        </div>` : ''}
    </div>
  `).join('');
}

// ─── RENDER: KIT ITEMS ────────────────────────────────────────
function renderKitItems() {
  const el = document.getElementById('kit-contents');
  if (!el) return;
  el.innerHTML = KIT_ITEMS.map(k => `
    <div class="kit-item">
      <div class="kit-item-icon">${k.icon}</div>
      <div class="kit-item-text">
        <strong>${k.title}</strong>
        <span>${k.detail}</span>
      </div>
    </div>
  `).join('');
}

// ─── RENDER: CONTACT TOPICS ───────────────────────────────────
function renderContactTopics() {
  const el = document.getElementById('contact-topics-list');
  if (!el) return;
  el.innerHTML = CONTACT_TOPICS.map(t => `
    <div class="contact-topic">
      <div class="contact-topic-icon">${t.icon}</div>
      ${t.text}
    </div>
  `).join('');
}

// ─── SCROLL REVEAL ────────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal, .reveal-group').forEach(el => {
    observer.observe(el);
  });
}

// ─── UTIL ─────────────────────────────────────────────────────
function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ─── BOOT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderStandards();
  renderCourses();
  renderSessions();
  renderKitItems();
  renderContactTopics();
  initScrollReveal();
});
