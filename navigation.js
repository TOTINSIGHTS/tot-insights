(function () {
  function closeAll() {
    document.querySelectorAll('.nav-dropdown.open').forEach(function (el) {
      el.classList.remove('open');
      var btn = el.querySelector('.nav-chevron-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-chevron-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var dropdown = btn.closest('.nav-dropdown');
        var isOpen = dropdown.classList.contains('open');
        closeAll();
        if (!isOpen) {
          dropdown.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    document.addEventListener('click', closeAll);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAll();
    });
  });
}());
