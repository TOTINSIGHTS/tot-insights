(function () {
  function closeAll() {
    document.querySelectorAll('.nav-dropdown.open').forEach(function (el) {
      el.classList.remove('open');
      var btn = el.querySelector('.nav-chevron-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  function initMobileMenu() {
    var headerInner = document.querySelector('.header-inner');
    if (!headerInner) return;
    var hamBtn = document.createElement('button');
    hamBtn.className = 'nav-hamburger';
    hamBtn.setAttribute('aria-label', 'Open navigation menu');
    hamBtn.innerHTML = '&#9776;';
    headerInner.appendChild(hamBtn);
    var overlay = document.createElement('div');
    overlay.className = 'nav-mobile-menu';
    var closeBtn = document.createElement('button');
    closeBtn.className = 'nav-mobile-close';
    closeBtn.textContent = '×';
    overlay.appendChild(closeBtn);
    var nav = document.querySelector('.header-nav');
    if (nav) {
      Array.from(nav.children).forEach(function (child) {
        if (child.tagName === 'A') {
          var link = document.createElement('a');
          link.href = child.href;
          link.textContent = child.textContent.trim();
          if (child.classList.contains('active')) link.classList.add('active');
          overlay.appendChild(link);
        } else if (child.classList.contains('nav-dropdown')) {
          var parentA = child.querySelector('.nav-dropdown-link');
          if (parentA) {
            var link = document.createElement('a');
            link.href = parentA.href;
            link.textContent = parentA.textContent.trim();
            if (parentA.classList.contains('active')) link.classList.add('active');
            overlay.appendChild(link);
          }
        }
      });
    }
    document.body.appendChild(overlay);
    function openMenu() { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function closeMenu() { overlay.classList.remove('open'); document.body.style.overflow = ''; }
    hamBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeMenu(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && overlay.classList.contains('open')) closeMenu(); });
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

    initMobileMenu();
  });
}());
