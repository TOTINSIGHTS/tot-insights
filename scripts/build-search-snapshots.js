#!/usr/bin/env node
/*
 * Generates the "snapshot" pages that make the site's JavaScript-loaded data
 * visible to the Pagefind search index.
 *
 * Normally run via:   node scripts/build-search.js   (which also runs Pagefind)
 *
 * WHY THIS EXISTS
 * ---------------
 * officials.html, sanctions.html, research.html and media.html are empty
 * shells: their content is fetched as JSON/JS and drawn by the browser after
 * the page opens. Pagefind reads HTML files off the disk and does not run
 * JavaScript, so those records would be completely invisible to site search.
 *
 * This script writes one tiny HTML file per record into .search-build/. Those
 * files exist ONLY for Pagefind to read at build time, and are deleted again
 * as soon as the index is built. They are never committed and never deployed,
 * so no crawler can ever reach them. (They also carry noindex, as a belt-and-
 * braces measure in case one is ever built into the published tree.)
 *
 * A search result for a snapshot never sends the visitor to the snapshot. The
 * search UI rewrites the link to the real page (e.g. officials.html?id=OFC-002)
 * using the snapshot's own path. See assets/js/search.js.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, '.search-build');

process.chdir(ROOT);

// ── helpers ──────────────────────────────────────────────────────────────────

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* One snapshot page.
 *
 * `title`    becomes the search result heading (Pagefind reads the first <h1>).
 * `subtitle` is the muted line under it, exposed as Pagefind metadata.
 * `section`  is the Pagefind filter value used to group and count results.
 *
 * NOTE: deliberately NO data-pagefind-body attribute. If any page carries that
 * tag, Pagefind indexes ONLY tagged pages, which would silently drop every
 * prose page from the site index.
 */
function snapshot({ title, subtitle, section, page, fields }) {
  const body = fields
    .filter(([, v]) => v != null && String(v).trim() !== '')
    .map(([label, v]) => `<p><strong>${esc(label)}:</strong> ${esc(v)}</p>`)
    .join('\n  ');

  // `page` records that this catalogue entry also has a real page on the site
  // (a briefing or dashboard). The search UI uses it to drop the catalogue
  // duplicate when that page is already showing in the prose results.
  // Written with the inline "key:value" form so the value is metadata only and
  // never becomes searchable text.
  const pageMeta = page ? `<span data-pagefind-meta="page:${esc(page)}"></span>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="robots" content="noindex, nofollow">
<title>${esc(title)}</title>
</head>
<body data-pagefind-filter="section:${esc(section)}">
<main>
  <h1>${esc(title)}</h1>
  ${subtitle ? `<p data-pagefind-meta="subtitle">${esc(subtitle)}</p>` : ''}
  ${pageMeta}
  ${body}
</main>
</body>
</html>
`;
}

function write(relDir, name, html) {
  const dir = path.join(OUT, relDir);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, name + '.html'), html, 'utf8');
}

/* Filenames must be safe on Windows and in URLs. The search UI parses the
 * filename back out to build the real destination link, so keep it stable. */
function slug(s) {
  return String(s).replace(/[^A-Za-z0-9._-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
}

// ── 1. Officials ─────────────────────────────────────────────────────────────

function buildOfficials() {
  const all = JSON.parse(fs.readFileSync('data/officials-data.json', 'utf8'));

  // Entries flagged Hidden are deliberately withheld from the live table
  // (officials.html does the same filter). They must not leak into search.
  const rows = all.filter(r => r['Hidden'] !== 'true');
  const skipped = all.length - rows.length;
  let written = 0;

  rows.forEach(r => {
    const id = String(r['Official ID'] || '').trim();
    if (!id) return;
    written++;

    const years = [r['Year Start'], r['Year End']].filter(Boolean).join('-');

    write('officials', slug(id), snapshot({
      title: r['Name (Latin)'] || id,
      subtitle: [r['Role / Position'], r['Territory']].filter(Boolean).join(' · '),
      section: 'Officials',
      fields: [
        ['Name (Cyrillic)', r['Name (Cyrillic)']],
        ['Role / position', r['Role / Position']],
        ['Territory', r['Territory']],
        ['Level', r['Level']],
        ['Location', r['Location']],
        ['Years in role', years],
        ['Still in post', r['Still in Post?']],
        ['Origin', r['Origin']],
        ['Career before', r['Career Before']],
        ['Career after', r['Career After']],
        ['Notes on role', r['Notes on Role']],
        ['Links to other officials', r['Links to Other Officials']],
        ['Links to Russian state bodies', r['Links to Russian State Bodies']],
        ['Business / economic connections', r['Business / Economic Connections']],
        ['Military connections', r['Military Connections']],
        ['Entry ID', id]
      ]
    }));
  });

  return { written, skipped };
}

// ── 2. Sanctions ─────────────────────────────────────────────────────────────

function buildSanctions() {
  const rows = JSON.parse(fs.readFileSync('data/sanctions-data.json', 'utf8'));
  let noId = 0;

  rows.forEach((r, i) => {
    const ref = String(r['Reference ID'] || '').trim();
    if (!ref) noId++;

    // Entries without a Reference ID cannot be deep-linked by id, so the search
    // UI falls back to a name search on the sanctions page.
    const fileName = ref ? 'ref-' + slug(ref) : 'row-' + String(i).padStart(5, '0');

    write('sanctions', fileName, snapshot({
      title: r['Name'] || 'Entry ' + (i + 1),
      subtitle: [r['Type'], r['Jurisdiction']].filter(Boolean).join(' · '),
      section: 'Sanctions',
      fields: [
        ['Type', r['Type']],
        ['Position', r['Position']],
        ['Date of birth', r['D.O.B']],
        ['Nationality', r['Nationality']],
        ['Territory', r['Territory']],
        ['Jurisdiction', r['Jurisdiction']],
        ['Date designated', r['Date Designated']],
        ['Programme / authority', r['Programme / Authority']],
        ['Notes', r['Notes']],
        ['Reference ID', ref]
      ]
    }));
  });

  return { written: rows.length, noId };
}

// ── 3. Research catalogue + media appearances (data/documents.js) ────────────

function loadCatalogue() {
  // documents.js is a plain script that declares `const DOCS` and
  // `const CONTEXT_NOTES`. Evaluate it in an isolated scope and read them back.
  const src = fs.readFileSync('data/documents.js', 'utf8');
  const scope = {};
  new Function(src + '\n;this.DOCS = DOCS; this.CONTEXT_NOTES = CONTEXT_NOTES;').call(scope);
  return scope;
}

function buildCatalogue() {
  const { DOCS, CONTEXT_NOTES } = loadCatalogue();
  let research = 0, media = 0;

  DOCS.forEach(d => {
    const id = String(d.id || '').trim();
    if (!id) return;

    const isMedia = d.media === true;
    isMedia ? media++ : research++;

    const themes = Array.isArray(d.theme) ? d.theme.join(', ') : (d.theme || '');
    const note = CONTEXT_NOTES[id];

    write(isMedia ? 'media' : 'catalogue', slug(id), snapshot({
      title: d.title || id,
      subtitle: isMedia
        ? [d.format, d.outlet, d.date].filter(Boolean).join(' · ')
        : [d.format, themes, d.date].filter(Boolean).join(' · '),
      section: isMedia ? 'Media' : 'Catalogue',
      page: d.briefingFile || d.dashboardFile || d.vizFile || null,
      fields: [
        ['Summary', d.desc],
        ['Descriptor', d.descriptor],
        ['Full summary', d.summary],
        ['Contextualising note', Array.isArray(note) ? note.join(' ') : note],
        ['Themes', themes],
        ['Format', d.format],
        ['Outlet', d.outlet],
        ['Date', d.date],
        ['Catalogue ID', id]
      ]
    }));
  });

  return { research, media };
}

// ── run ──────────────────────────────────────────────────────────────────────

fs.rmSync(OUT, { recursive: true, force: true });

const o = buildOfficials();
const s = buildSanctions();
const c = buildCatalogue();

console.log('  officials  ' + String(o.written).padStart(5) + '   (' + o.skipped + ' hidden entries excluded)');
console.log('  sanctions  ' + String(s.written).padStart(5) + '   (' + s.noId + ' without a Reference ID -> name-search links)');
console.log('  catalogue  ' + String(c.research).padStart(5) + '   research documents');
console.log('  media      ' + String(c.media).padStart(5) + '   press appearances');
console.log('  total      ' + String(o.written + s.written + c.research + c.media).padStart(5) + '   snapshots in .search-build/');
