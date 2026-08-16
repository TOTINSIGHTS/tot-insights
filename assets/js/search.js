/* TOT Insights — search.js
 * ---------------------------------------------------------------------------
 * Behaviour for the site-wide search box injected into the header by
 * navigation.js. See docs/SEARCH.md for the whole picture.
 *
 * There are TWO Pagefind indexes, built by scripts/build-search.js:
 *
 *   pagefind/          the site's real pages (briefings, themes, primary
 *                      sources, about ...)
 *   pagefind-records/  the officials and sanctions databases plus the research
 *                      catalogue and media appearances, which are loaded by
 *                      JavaScript and so are invisible to any static crawler
 *
 * They are kept separate on purpose. Database records are short documents where
 * a search term appears densely, so in a single combined index 3,500 of them
 * would out-rank and bury the long prose pages. Two indexes means prose is
 * ranked only against prose, and always renders first.
 *
 * Neither index is loaded until the visitor actually types something.
 * ------------------------------------------------------------------------- */
(function () {
  'use strict';

  var MIN_QUERY = 2;      // characters before we search
  var DEBOUNCE_MS = 180;
  var PROSE_LIMIT = 6;    // prose results shown
  var RECORDS_PER_GROUP = 3;

  /* The four record groups. `key` matches the Pagefind filter value written by
   * scripts/build-search-snapshots.js. `page` is where "see all" goes. */
  var SECTIONS = [
    { key: 'Officials', label: 'Officials database',  page: 'officials.html', searchable: true },
    { key: 'Sanctions', label: 'Sanctions database',  page: 'sanctions.html', searchable: true },
    { key: 'Catalogue', label: 'Research catalogue',  page: 'research.html',  searchable: true },
    { key: 'Media',     label: 'Media appearances',   page: 'media.html',     searchable: false }
  ];

  /* Friendly label for a prose result, derived from its path. */
  function proseKind(url) {
    if (url.indexOf('/briefings/') !== -1) return 'Briefing';
    if (url.indexOf('/primary-sources/') !== -1) return 'Primary source';
    if (url.indexOf('/dashboards/') !== -1) return 'Dashboard';
    if (url.indexOf('/themes/') !== -1) return 'Theme';
    if (url.indexOf('resources') !== -1) return 'Resource';
    return 'Page';
  }

  var prefix = window.__SITE_ROOT_PREFIX || '';
  var abs = function (rel) { return new URL(prefix + rel, document.baseURI).href; };

  var proseIndex = null, recordsIndex = null, loadFailed = false;
  var input, panel, timer = null, seq = 0;

  // ── Loading the indexes (once, lazily) ────────────────────────────────────

  function loadIndexes() {
    if (proseIndex && recordsIndex) return Promise.resolve();
    if (loadFailed) return Promise.reject(new Error('index unavailable'));

    return Promise.all([
      import(abs('pagefind/pagefind.js')),
      import(abs('pagefind-records/pagefind.js'))
    ]).then(function (mods) {
      proseIndex = mods[0];
      recordsIndex = mods[1];
      return Promise.all([proseIndex.init(), recordsIndex.init()]);
    }).then(function () {
      // Pagefind loads its filter index lazily, so the FIRST search after init
      // comes back with empty filter counts. The record group counts are built
      // from those counts, so without this the "Database records" section would
      // be missing from a visitor's very first search. Forcing the load here
      // costs one small request and makes the first search behave like the rest.
      return recordsIndex.filters();
    }).catch(function (err) {
      loadFailed = true;
      throw err;
    });
  }

  /* Pagefind returns root-relative page URLs such as /briefings/x.html. Those
   * already work from any page depth when the site is served from the domain
   * root, which is how totinsights.org is served. Re-basing them onto the
   * detected prefix additionally keeps them correct if the site is ever served
   * from a subdirectory. */
  function pageHref(url) {
    return prefix ? prefix + url.replace(/^\//, '') : url;
  }

  /* When nothing genuinely matches, Pagefind still returns a few loosely
   * related pages rather than an empty list, so typing gibberish would surface
   * an unrelated briefing. Those fallback results come back with no located
   * matches (`sub_results` empty and no <mark> in the excerpt), which is how we
   * tell them apart from a real hit. */
  function hasRealMatch(r) {
    return !!(r && r.sub_results && r.sub_results.length);
  }

  // ── Turning a snapshot path into a real destination ───────────────────────

  /* Record snapshots live at /<section>/<id>.html inside the records index.
   * They are build-time only and never published, so every record result must
   * be rewritten to point at the real page. */
  function recordTarget(url, title) {
    var m = url.replace(/^\/+/, '').replace(/\.html$/, '').split('/');
    var dir = m[0], id = m.slice(1).join('/');

    if (dir === 'officials') return prefix + 'officials.html?id=' + encodeURIComponent(id);

    if (dir === 'sanctions') {
      // ref-<Reference ID> deep-links by id. row-<n> entries have no reference
      // id in the source data, so fall back to a search on the name.
      if (id.indexOf('ref-') === 0) return prefix + 'sanctions.html?id=' + encodeURIComponent(id.slice(4));
      return prefix + 'sanctions.html?q=' + encodeURIComponent(title || '');
    }

    if (dir === 'catalogue') return prefix + 'research.html?id=' + encodeURIComponent(id);
    if (dir === 'media')     return prefix + 'media.html?id=' + encodeURIComponent(id);
    return prefix + 'index.html';
  }

  function groupTarget(section, query) {
    return section.searchable
      ? prefix + section.page + '?q=' + encodeURIComponent(query)
      : prefix + section.page;
  }

  // ── Rendering ─────────────────────────────────────────────────────────────

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* Drop the panel below the whole header bar rather than below the input, so
   * it never tucks under the header's bottom border. The header is 61px tall on
   * the main pages and a thin strip on briefings and dashboards, so measure it
   * rather than hard-coding an offset. Skipped on narrow screens, where the
   * stylesheet pins the panel with position:fixed instead. */
  function positionPanel() {
    if (getComputedStyle(panel).position === 'fixed') { panel.style.top = ''; return; }
    var host = panel.parentElement;
    var anchor = host && (host.closest('header.site-header') || host.parentElement);
    if (!anchor || !host) return;
    var offset = anchor.getBoundingClientRect().bottom - host.getBoundingClientRect().top;
    panel.style.top = Math.round(offset + 8) + 'px';
  }

  function show(node) {
    panel.innerHTML = '';
    panel.appendChild(node);
    panel.hidden = false;
    positionPanel();
  }

  function state(msg, strongPart) {
    var d = el('div', 'ss-state');
    if (strongPart) {
      d.appendChild(document.createTextNode(msg));
      d.appendChild(el('strong', null, strongPart));
    } else {
      d.textContent = msg;
    }
    return d;
  }

  function renderProse(results, frag) {
    var section = el('div', 'ss-section');
    section.appendChild(el('div', 'ss-section-title', 'Pages and documents'));

    results.forEach(function (r) {
      var a = el('a', 'ss-result');
      a.href = pageHref(r.url);
      a.appendChild(el('div', 'ss-result-title', (r.meta && r.meta.title) || r.url));

      var snip = el('div', 'ss-result-snippet');
      snip.innerHTML = r.excerpt;   // Pagefind escapes content and adds <mark>
      a.appendChild(snip);

      a.appendChild(el('div', 'ss-result-meta', proseKind(r.url)));
      section.appendChild(a);
    });

    frag.appendChild(section);
  }

  function renderRecords(groups, query, frag) {
    var section = el('div', 'ss-section');
    section.appendChild(el('div', 'ss-section-title', 'Database records'));

    groups.forEach(function (g) {
      var wrap = el('div', 'ss-group');

      var head = el('a', 'ss-group-head');
      head.href = groupTarget(g.section, query);
      head.appendChild(el('span', 'ss-group-name', g.section.label));
      head.appendChild(el('span', 'ss-group-count',
        g.count === 1 ? '1 match' : g.count.toLocaleString() + ' matches'));
      wrap.appendChild(head);

      g.items.forEach(function (r) {
        var title = (r.meta && r.meta.title) || '';
        var a = el('a', 'ss-record');
        a.href = recordTarget(r.url, title);
        a.appendChild(el('span', 'ss-record-name', title));
        if (r.meta && r.meta.subtitle) {
          a.appendChild(el('span', 'ss-record-sub', r.meta.subtitle));
        }
        wrap.appendChild(a);
      });

      if (g.count > g.items.length) {
        var more = el('a', 'ss-group-more',
          'See all ' + g.count.toLocaleString() + ' in the ' +
          g.section.label.toLowerCase() + ' →');
        more.href = groupTarget(g.section, query);
        wrap.appendChild(more);
      }

      section.appendChild(wrap);
    });

    frag.appendChild(section);
  }

  function renderFooter(proseCount, recordCount, frag) {
    var f = el('div', 'ss-footer');
    f.appendChild(el('span', null,
      proseCount.toLocaleString() + ' pages · ' + recordCount.toLocaleString() + ' records'));
    var hint = el('span');
    hint.innerHTML = '<kbd>↑↓</kbd> move <kbd>↵</kbd> open <kbd>esc</kbd> close';
    f.appendChild(hint);
    frag.appendChild(f);
  }

  // ── Searching ─────────────────────────────────────────────────────────────

  function runSearch(query) {
    var mySeq = ++seq;

    return loadIndexes().then(function () {
      return Promise.all([
        proseIndex.search(query),
        recordsIndex.search(query)
      ]);
    }).then(function (both) {
      if (mySeq !== seq) return;   // a newer keystroke has overtaken this one

      var prose = both[0], records = both[1];

      // Load the prose results we are going to show, plus a few spares to cover
      // any dropped by hasRealMatch() below.
      var proseTop = prose.results.slice(0, PROSE_LIMIT + 4);
      var proseData = Promise.all(proseTop.map(function (r) { return r.data(); }))
        .then(function (rs) { return rs.filter(hasRealMatch).slice(0, PROSE_LIMIT); });

      // Group counts come from Pagefind's filter counts, which are returned
      // with the search and cost nothing extra. Only the handful of records we
      // actually display are fetched.
      var counts = (records.filters && records.filters.section) || {};
      var active = SECTIONS
        .map(function (s) { return { section: s, count: counts[s.key] || 0 }; })
        .filter(function (g) { return g.count > 0; });

      // Fetch one extra per group so that if a catalogue entry is dropped as a
      // duplicate of a prose result, the group is still full.
      var recordData = Promise.all(active.map(function (g) {
        return recordsIndex.search(query, { filters: { section: g.section.key } })
          .then(function (res) {
            return Promise.all(res.results.slice(0, RECORDS_PER_GROUP + 2)
              .map(function (r) { return r.data(); }));
          })
          .then(function (items) { g.items = items.filter(hasRealMatch); return g; });
      }));

      return Promise.all([proseData, recordData, prose.results.length, proseTop.length]);
    }).then(function (out) {
      if (!out || mySeq !== seq) return;

      var proseResults = out[0], groups = out[1], proseTotal = out[2], proseExamined = out[3];
      var recordTotal = groups.reduce(function (n, g) { return n + g.count; }, 0);

      // Pagefind's raw total includes the loose fallback matches filtered out
      // above. If we examined every result and kept fewer, the kept count is
      // the honest number to report.
      if (proseResults.length < PROSE_LIMIT && proseExamined >= proseTotal) {
        proseTotal = proseResults.length;
      }

      // A catalogue entry for, say, the Donetsk water crisis briefing points at
      // briefings/donetsk_water_crisis.html. If that briefing is already listed
      // above under "Pages and documents", showing the catalogue card as well
      // is just the same thing twice, so drop it.
      var shownPages = {};
      proseResults.forEach(function (r) {
        shownPages[r.url.replace(/^\//, '')] = true;
      });
      groups.forEach(function (g) {
        g.items = g.items.filter(function (r) {
          var page = r.meta && r.meta.page;
          return !(page && shownPages[page.replace(/^\//, '')]);
        }).slice(0, RECORDS_PER_GROUP);
      });
      groups = groups.filter(function (g) { return g.items.length > 0; });

      if (!proseResults.length && !groups.length) {
        show(state('No matches for ', query));
        return;
      }

      var frag = document.createDocumentFragment();
      if (proseResults.length) renderProse(proseResults, frag);
      if (groups.length) renderRecords(groups, query, frag);
      renderFooter(proseTotal, recordTotal, frag);
      show(frag);
    }).catch(function (err) {
      if (mySeq !== seq) return;
      // Most likely cause: the index has not been built in this checkout.
      show(state('Search is unavailable on this copy of the site.'));
      if (window.console) console.warn('[search]', err);
    });
  }

  // ── Keyboard navigation ───────────────────────────────────────────────────

  function items() {
    return Array.prototype.slice.call(panel.querySelectorAll('.ss-result, .ss-record, .ss-group-head, .ss-group-more'));
  }

  function move(dir) {
    var list = items();
    if (!list.length) return;
    var i = list.indexOf(document.activeElement);
    var next = i === -1 ? (dir > 0 ? 0 : list.length - 1) : i + dir;
    if (next < 0) { input.focus(); return; }
    if (next >= list.length) next = list.length - 1;
    list.forEach(function (n) { n.classList.remove('ss-active'); });
    list[next].classList.add('ss-active');
    list[next].focus();
  }

  function close() {
    panel.hidden = true;
    panel.innerHTML = '';
  }

  // ── Wiring ────────────────────────────────────────────────────────────────

  function init() {
    input = document.getElementById('site-search-input');
    panel = document.getElementById('site-search-panel');
    if (!input || !panel) return;
    if (input.dataset.ssReady) return;
    input.dataset.ssReady = '1';

    input.addEventListener('input', function () {
      var q = input.value.trim();
      clearTimeout(timer);
      if (q.length < MIN_QUERY) { seq++; close(); return; }
      timer = setTimeout(function () { runSearch(q); }, DEBOUNCE_MS);
    });

    input.addEventListener('focus', function () {
      // Warm the indexes up so the first result feels instant.
      if (input.value.trim().length >= MIN_QUERY) runSearch(input.value.trim());
      else loadIndexes().catch(function () { /* reported on first search */ });
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'Escape') { close(); input.blur(); }
      else if (e.key === 'Enter') {
        // Enter with nothing highlighted opens the first result.
        var first = items()[0];
        if (first && !panel.hidden) { e.preventDefault(); first.click(); }
      }
    });

    panel.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Escape') { close(); input.focus(); }
    });

    // Clicking away closes the panel.
    document.addEventListener('click', function (e) {
      if (panel.hidden) return;
      if (!panel.contains(e.target) && e.target !== input && !input.contains(e.target)) close();
    });

    // Submitting the form (Enter on mobile keyboards) should not reload.
    var form = input.closest('form');
    if (form) form.addEventListener('submit', function (e) { e.preventDefault(); });

    // "/" focuses search, the way most documentation sites behave.
    document.addEventListener('keydown', function (e) {
      if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) return;
      var t = e.target;
      var typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
      if (typing) return;
      e.preventDefault();
      input.focus();
    });
  }

  window.initSiteSearch = init;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
