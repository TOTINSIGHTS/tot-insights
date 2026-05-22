(function () {
  'use strict';

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = window.innerWidth < 700;

  if (prefersReduced || isMobile) return;

  function formatComma(n) {
    return Math.round(n).toLocaleString('en-GB');
  }

  function animateCounter(el) {
    var count = parseFloat(el.getAttribute('data-count'));
    var fmt = el.getAttribute('data-format') || 'comma';
    var suffix = el.getAttribute('data-suffix') || '';
    if (!count) return;

    var duration = 1200;
    var start = null;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = count * eased;
      var display;
      if (fmt === 'decimal') {
        display = current.toFixed(2) + suffix;
      } else {
        display = formatComma(current) + suffix;
      }
      el.textContent = display;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = fmt === 'decimal' ? count.toFixed(2) + suffix : formatComma(count) + suffix;
    }

    requestAnimationFrame(step);
  }

  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.stat-number[data-count]').forEach(function (el) {
    observer.observe(el);
  });
}());
