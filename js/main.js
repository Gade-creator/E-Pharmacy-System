// ============================================================
// FUTURE_FS_03: CarePoint Medical Center — Gadisa Gutema
// ============================================================

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile nav toggle ──
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
// Close on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Smooth active nav highlight ──
const sections = document.querySelectorAll('section[id], div[id]');
const links    = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

// ── Scroll fade-in animations ──
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => fadeObserver.observe(el));

// ── Booking form ──
function submitBooking(e) {
  e.preventDefault();
  const status = document.getElementById('bfStatus');
  const btn    = e.target.querySelector('button[type="submit"]');

  btn.disabled    = true;
  btn.textContent = 'Submitting…';

  // Simulate submission (replace with real backend/EmailJS)
  setTimeout(() => {
    status.className  = 'bf-status success';
    status.textContent = '✓ Appointment request sent! We will confirm via SMS within 1 hour.';
    e.target.reset();
    btn.disabled    = false;
    btn.textContent = '📅 Confirm Appointment';
    // Auto-hide after 6s
    setTimeout(() => { status.className = 'bf-status'; }, 6000);
  }, 1400);
}

// ── Set min date for booking ──
document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.querySelector('input[type="date"]');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
});
