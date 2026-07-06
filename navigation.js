(function () {
  // ─────────────────────────────────────────────────────────────────────
  // SINGLE SOURCE OF TRUTH for the site header + footer.
  // This script injects the same header and footer into every page, so the
  // pages can never drift apart. To change the menu or footer, edit ONLY the
  // chromeHTML() function below.
  //
  // `p` is the relative path prefix to the site root ("" for top-level pages,
  // "../../" for pages nested two folders deep). It is detected automatically.
  // ─────────────────────────────────────────────────────────────────────
  function chromeHTML(p) {
    return {
      header:
        '<header class="site-header">' +
          '<div class="header-inner">' +
            '<div class="site-brand">' +
              '<a class="site-logo" href="' + p + 'index.html">' +
                '<span class="logo-main">TOT Insights</span>' +
              '</a>' +
              '<img class="site-crest" src="' + p + 'assets/logos/kcl-logo-dark.svg" alt="King&#39;s College London">' +
            '</div>' +
            '<nav class="header-nav">' +
              '<a href="' + p + 'index.html" data-nav="home">Home</a>' +
              '<a href="' + p + 'themes.html" data-nav="themes">Themes</a>' +
              '<div class="nav-dropdown">' +
                '<a href="' + p + 'data.html" class="nav-dropdown-link" data-nav="data">Data</a>' +
                '<button class="nav-chevron-btn" aria-expanded="false" aria-label="Toggle Data submenu"><span class="nav-chevron">&#9662;</span></button>' +
                '<div class="nav-dropdown-panel">' +
                  '<a href="' + p + 'data.html" data-nav="data-all">All Data</a>' +
                  '<a href="' + p + 'data.html#databases">Databases</a>' +
                  '<a href="' + p + 'officials.html" data-nav="officials">Officials Database</a>' +
                  '<a href="' + p + 'sanctions.html" data-nav="sanctions">Sanctions Database</a>' +
                  '<a href="' + p + 'data.html#dashboards">Interactive dashboards</a>' +
                '</div>' +
              '</div>' +
              '<a href="' + p + 'primary-sources.html" data-nav="primary-sources">Primary sources</a>' +
              '<a href="' + p + 'media.html" data-nav="media">Media</a>' +
              '<a href="' + p + 'resources.html" data-nav="resources">Resources</a>' +
              '<a href="' + p + 'about.html" data-nav="about">About</a>' +
            '</nav>' +
          '</div>' +
        '</header>',
      footer:
        '<footer class="site-footer">' +
          '<div class="footer-inner">' +
            '<span>TOT Insights &nbsp;&middot;&nbsp; Ukraine &amp; Russia Programme &nbsp;&middot;&nbsp; Centre for Statecraft and National Security &nbsp;&middot;&nbsp; King&#39;s College London &nbsp;&middot;&nbsp; Leverhulme Centre for Research on Slavery in War</span>' +
            '<span><a href="mailto:TOTInsightsHub@protonmail.com">Contact</a> &nbsp;&middot;&nbsp; <a href="' + p + 'privacy.html">Privacy Notice</a></span>' +
          '</div>' +
        '</footer>'
    };
  }

  // Detect the relative path back to the site root from the existing
  // navigation.css link (every page already loads it with the correct prefix).
  function rootPrefix() {
    var link = document.querySelector('link[href$="navigation.css"]');
    if (link) return link.getAttribute('href').replace(/navigation\.css.*$/, '');
    var script = document.querySelector('script[src$="navigation.js"], script[src$="site-chrome.js"]');
    if (script) return script.getAttribute('src').replace(/(navigation|site-chrome)\.js.*$/, '');
    return '';
  }

  // Highlight the current page's menu item.
  function setActive(root) {
    var path = location.pathname.replace(/\\/g, '/');
    var file = path.substring(path.lastIndexOf('/') + 1).replace('.PREVIEW', '');
    if (!file) file = 'index.html';
    var key = null;
    if (file === 'index.html') key = 'home';
    else if (file === 'themes.html') key = 'themes';
    else if (file === 'media.html') key = 'media';
    else if (file === 'about.html') key = 'about';
    else if (file === 'data.html') key = 'data-all';
    else if (file === 'primary-sources.html') key = 'primary-sources';
    else if (file === 'officials.html') key = 'officials';
    else if (file === 'sanctions.html') key = 'sanctions';
    else if (file.indexOf('resources') === 0 || file === 'research.html') key = 'resources';
    if (!key) return;
    var el = root.querySelector('[data-nav="' + key + '"]');
    if (el) el.classList.add('active');
    if (key === 'data-all' || key === 'officials' || key === 'sanctions') {
      var parent = root.querySelector('[data-nav="data"]');
      if (parent) parent.classList.add('active');
    }
  }

  // Replace the page's existing header/footer (or fill a placeholder) with the
  // single canonical version.
  function injectChrome() {
    var html = chromeHTML(rootPrefix());
    // Pages that opt into data-chrome="footer-only" (e.g. dashboards/briefings that
    // keep their own top nav) receive ONLY the shared footer, not the site header.
    var footerOnly = document.body.getAttribute('data-chrome') === 'footer-only';
    if (!footerOnly) {
      var header = document.querySelector('header.site-header') || document.getElementById('site-header');
      if (header) header.outerHTML = html.header;
      else document.body.insertAdjacentHTML('afterbegin', html.header);
    }
    var footer = document.querySelector('footer.site-footer') || document.getElementById('site-footer');
    if (footer) footer.outerHTML = html.footer;
    else document.body.insertAdjacentHTML('beforeend', html.footer);
    setActive(document);
  }

  // Mark links to other domains: open them in a new tab and append a small
  // external-link icon (skipping links that already carry a ↗).
  var EXT_ICON = '<svg class="ext-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 5h5v5"/><path d="M19 5l-8.5 8.5"/><path d="M18 14.5V18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3.5"/></svg>';
  function markExternalLinks(root) {
    root.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (!/^https?:\/\//i.test(href)) return;
      var url; try { url = new URL(href, location.href); } catch (e) { return; }
      if (url.host === location.host) return;
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      if (a.querySelector('.ext-icon') || a.textContent.indexOf('↗') !== -1) return;
      var title = a.querySelector('.theme-start-title');
      (title || a).insertAdjacentHTML('beforeend', EXT_ICON);
    });
  }

  // ── Dropdown + mobile-menu behaviour (unchanged from the original) ──────
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
    injectChrome();
    markExternalLinks(document);

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
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });

    initMobileMenu();
  });
}());
