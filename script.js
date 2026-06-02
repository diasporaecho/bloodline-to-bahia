/* =====================================================================
   BLOODLINE TO BAHIA 2028 — THE ISSUE
   - Masthead reveals after the cover
   - Mobile contents menu
   - Departures countdown
   - Scroll-reveal animations
   ===================================================================== */

(function () {
  'use strict';

  /* ---------- CONFIG ----------
     Real target date. Format: 'YYYY-MM-DDTHH:MM:SS'
     Carnival 2028 falls in late February — placeholder below, change freely. */
  var TARGET_DATE = '2028-02-25T00:00:00';
  /* --------------------------- */

  document.addEventListener('DOMContentLoaded', function () {
    initMasthead();
    initMenu();
    initCountdown();
    initReveal();
  });

  /* ---------- Masthead reveal after the cover ---------- */
  function initMasthead() {
    var mast = document.getElementById('masthead');
    if (!mast) return;

    var onScroll = function () {
      // show once the reader has scrolled most of the way past the cover
      var trigger = window.innerHeight * 0.75;
      if (window.scrollY > trigger) {
        mast.classList.add('masthead--show');
      } else {
        mast.classList.remove('masthead--show');
        mast.classList.remove('masthead--open');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile contents menu ---------- */
  function initMenu() {
    var mast = document.getElementById('masthead');
    var toggle = document.getElementById('mastToggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      var open = mast.classList.toggle('masthead--open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close contents' : 'Open contents');
    });

    document.querySelectorAll('#mastNav a').forEach(function (link) {
      link.addEventListener('click', function () {
        mast.classList.remove('masthead--open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open contents');
      });
    });
  }

  /* ---------- Departures countdown ---------- */
  function initCountdown() {
    var target = new Date(TARGET_DATE).getTime();
    var elDays = document.getElementById('cdDays');
    var elHours = document.getElementById('cdHours');
    var elMins = document.getElementById('cdMinutes');
    var elSecs = document.getElementById('cdSeconds');
    var elNote = document.getElementById('cdNote');
    if (!elDays) return;

    var pad = function (n) { return String(n).padStart(2, '0'); };
    var timer;

    function tick() {
      var diff = target - Date.now();
      if (diff <= 0) {
        elDays.textContent = '00'; elHours.textContent = '00';
        elMins.textContent = '00'; elSecs.textContent = '00';
        if (elNote) elNote.textContent = 'The bloodline returns to Bahia.';
        clearInterval(timer);
        return;
      }
      elDays.textContent = Math.floor(diff / 86400000);
      elHours.textContent = pad(Math.floor((diff % 86400000) / 3600000));
      elMins.textContent = pad(Math.floor((diff % 3600000) / 60000));
      elSecs.textContent = pad(Math.floor((diff % 60000) / 1000));
    }

    tick();
    timer = setInterval(tick, 1000);
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (i) { i.classList.add('is-visible'); });
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    items.forEach(function (i) { obs.observe(i); });
  }
})();
