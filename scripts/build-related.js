#!/usr/bin/env node
/*
 * Writes a "Keep reading" block at the foot of every briefing, dashboard and
 * theme introduction, so a reader who lands on one page has somewhere to go next.
 *
 * Run from the repo root:   node scripts/build-related.js
 *
 * Links are chosen from the catalogue (data/documents.js), nothing is hand-picked:
 * - briefings and dashboards get up to three links:
 *     1. a companion output: any entry whose text cites this page's DOC id, or
 *        that this page's entry cites (a briefing prefers its data, a dashboard
 *        its briefing)
 *     2. the next briefing or dashboard in the same theme (most shared themes,
 *        then most recent)
 *     3. the theme introduction, with a link to every output in that theme
 * - theme introductions get the three most recent briefings in the theme,
 *   plus the link to every output in it
 *
 * The block sits between <!-- related:start --> and <!-- related:end --> markers.
 * Rerunning replaces it, so run this after adding or retagging an output.
 * Pages with no catalogue entry are skipped and listed.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
process.chdir(ROOT);

const DOCS = new Function(fs.readFileSync('data/documents.js', 'utf8') + ';return DOCS;')()
  .filter(d => !d.media);

// Theme name -> theme introduction page (coercion-resistance-and-security.html is a redirect stub)
const THEME_PAGE = {
  'Governance': 'governance.html',
  'Economics': 'economics.html',
  'Civilian Life and Resistance': 'civilian-life.html',
  'Identity, Culture and Religion': 'identity-culture-and-religion.html',
  'Education and Militarisation': 'education-and-militarisation.html',
  'Coercion, Entrapment and Slavery': 'coercion-entrapment-and-slavery.html',
  'Information Space': 'information-space.html',
  'Accountability and Legal': 'accountability-and-legal.html',
};
const PAGE_THEME = Object.fromEntries(Object.entries(THEME_PAGE).map(([t, f]) => [f, t]));

const FORMAT_LABEL = {
  Briefing: 'Briefing', Dashboard: 'Dashboard', Data: 'Dataset', Visual: 'Visual',
  'Primary Sources': 'Primary source', Report: 'Report', 'Journal Article': 'Journal article',
};
const EVIDENCE = new Set(['Data', 'Dashboard', 'Visual', 'Primary Sources']);

const MON = { January: 1, February: 2, March: 3, April: 4, May: 5, June: 6, July: 7, August: 8,
  September: 9, October: 10, November: 11, December: 12, Jan: 1, Feb: 2, Mar: 3, Apr: 4,
  Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };
function dateSort(d) {
  let m;
  if (!d) return 0;
  if ((m = d.match(/^([A-Za-z]+)\s+(\d{4})$/))) return +m[2] * 10000 + (MON[m[1]] || 0) * 100;
  if ((m = d.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/))) return +m[3] * 10000 + (MON[m[2]] || 0) * 100 + +m[1];
  if ((m = d.match(/(\d{4})/))) return +m[1] * 10000;
  return 0;
}

const themes = d => [].concat(d.theme || []);
const pageOf = d => d.briefingFile || d.dashboardFile || null;
const text = d => [d.desc, d.descriptor, d.summary].join(' ');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Link from a page one folder down (briefings/, dashboards/, themes/)
function href(d) {
  if (d.externalUrl) return d.externalUrl;
  const p = pageOf(d);
  return p ? '../' + p : '../research.html?id=' + encodeURIComponent(d.id);
}

// Ids cited in an entry's text, matched exactly (so DOC-A5 does not match DOC-A5b)
function cites(d) {
  return new Set((text(d).match(/DOC-[A-Z0-9]+(?:-[0-9]+)?[a-z]?/g) || []));
}

// Catalogue pages the page already links as a companion (its in-text "related-output" box)
function inlineCompanions(html) {
  const re = /class="related-output"[^>]*href="\.\.\/([^"#?]+)"|href="\.\.\/([^"#?]+)"[^>]*class="related-output"/g;
  const files = new Set();
  let m;
  while ((m = re.exec(html))) files.add(m[1] || m[2]);
  return files;
}

function companion(doc, html) {
  const out = cites(doc);
  const inline = inlineCompanions(html);
  const linked = DOCS.filter(d => d.id !== doc.id
    && (out.has(d.id) || cites(d).has(doc.id) || inline.has(pageOf(d))));
  if (!linked.length) return null;
  // A briefing points to its evidence; anything else points back to the analysis
  const wantEvidence = doc.format === 'Briefing';
  const rank = d => (EVIDENCE.has(d.format) === wantEvidence ? 0 : 1) * 1e9 - dateSort(d.date);
  return linked.sort((a, b) => rank(a) - rank(b))[0];
}

// Similarity of two entries' wording (TF-IDF cosine over title, card line and summary),
// so "next" means the closest subject, not just the newest item with the same tag
const STOP = new Set(('that this with from have were been their which into they them than also more over such ' +
  'occupied occupation russian russia ukraine ukrainian territories territory briefing dashboard interactive ' +
  'companion documents document data across under where after while what when these those within about').split(' '));
const tokens = s => (s.toLowerCase().match(/[a-zа-яё]{4,}/g) || []).filter(w => !STOP.has(w));
const DF = {};
DOCS.forEach(d => new Set(tokens(d.title + ' ' + text(d))).forEach(w => { DF[w] = (DF[w] || 0) + 1; }));
const VEC = new Map(DOCS.map(d => {
  const tf = {};
  tokens(d.title + ' ' + d.title + ' ' + text(d)).forEach(w => { tf[w] = (tf[w] || 0) + 1; });
  const v = {};
  let norm = 0;
  for (const w in tf) { v[w] = tf[w] * Math.log(DOCS.length / DF[w]); norm += v[w] * v[w]; }
  return [d.id, { v, norm: Math.sqrt(norm) || 1 }];
}));
function similarity(a, b) {
  const A = VEC.get(a.id), B = VEC.get(b.id);
  let dot = 0;
  for (const w in A.v) if (B.v[w]) dot += A.v[w] * B.v[w];
  return dot / (A.norm * B.norm);
}

// Closest briefing or dashboard: same lead theme first, then any shared theme, then anything
function nextRead(doc, exclude) {
  const mine = themes(doc);
  const pool = DOCS.filter(d => !exclude.has(d.id) && pageOf(d) && (d.format === 'Briefing' || d.format === 'Dashboard'));
  const tiers = [
    pool.filter(d => themes(d).includes(mine[0])),
    pool.filter(d => themes(d).some(t => mine.includes(t))),
    pool,
  ];
  for (const tier of tiers) {
    if (!tier.length) continue;
    const best = tier.map(d => ({ d, s: similarity(doc, d) })).sort((a, b) => b.s - a.s)[0];
    if (best.s > 0.04 || tier === pool) return best.d;
  }
  return null;
}
const sharedTheme = (doc, d) => themes(d).find(t => themes(doc).includes(t)) || themes(d)[0];

function card(kicker, d) {
  return `    <a class="tot-next-card" href="${esc(href(d))}">
      <span class="tot-next-kicker">${esc(kicker)}</span>
      <span class="tot-next-title">${esc(d.title)}</span>
      <span class="tot-next-desc">${esc(d.desc)}</span>
    </a>`;
}

function themeCard(theme, own) {
  const n = DOCS.filter(d => themes(d).includes(theme)).length;
  const intro = own ? '' : `<a href="../themes/${THEME_PAGE[theme]}">Read the ${esc(theme)} introduction &#8594;</a>`;
  return `    <div class="tot-next-theme">
      <span class="tot-next-kicker">Theme: ${esc(theme)}</span>
      ${intro}
      <a href="../research.html?theme=${encodeURIComponent(theme)}">All ${n} outputs in this theme &#8594;</a>
    </div>`;
}

const STYLE = `<style>
.tot-next{max-width:var(--content-width,1100px);margin:2.5rem auto 1.5rem;padding:1.5rem 1.5rem 0;border-top:1px solid rgba(26,26,46,0.12);box-sizing:border-box;}
.tot-next-label{font-family:var(--font-mono,'IBM Plex Mono',monospace);font-size:var(--fs-label,0.78rem);letter-spacing:0.18em;text-transform:uppercase;color:var(--gold,#b5923a);margin-bottom:1rem;}
.tot-next-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;}
.tot-next-card,.tot-next-theme{display:flex;flex-direction:column;gap:6px;background:var(--card-bg,#fff);border:1px solid #e0e4ed;border-left:3px solid var(--gold,#c9a84c);border-radius:3px;padding:14px 16px;text-decoration:none;color:inherit;box-sizing:border-box;}
.tot-next-card:hover{transform:translateY(-2px);}
.tot-next-kicker{font-family:var(--font-mono,'IBM Plex Mono',monospace);font-size:var(--fs-label,0.78rem);letter-spacing:0.12em;text-transform:uppercase;color:var(--gold,#b5923a);}
.tot-next-title{font-family:var(--font-serif,Georgia,serif);font-size:var(--fs-body,1rem);font-weight:700;color:#1a1a2e;line-height:1.35;}
.tot-next-desc{font-family:var(--font-source,inherit);font-size:var(--fs-label,0.85rem);color:#3a3a4a;line-height:1.55;}
.tot-next-theme a{font-family:var(--font-sans,'IBM Plex Sans',sans-serif);font-size:var(--fs-label,0.85rem);font-weight:500;color:#253545;text-decoration:none;}
.tot-next-theme a:hover{color:var(--gold,#b5923a);}
@media(max-width:640px){.tot-next{padding:1.25rem 16px 0;}}
</style>`;

function block(items) {
  return `<!-- related:start (generated by scripts/build-related.js; edits here are overwritten) -->
<aside class="tot-next" aria-label="Keep reading">
${STYLE}
  <div class="tot-next-label">Keep reading</div>
  <div class="tot-next-grid">
${items.join('\n')}
  </div>
</aside>
<!-- related:end -->`;
}

function forOutput(doc, html) {
  const items = [];
  const used = new Set([doc.id]);
  const c = companion(doc, html);
  if (c) {
    used.add(c.id);
    const kicker = EVIDENCE.has(c.format) && !EVIDENCE.has(doc.format) ? 'The evidence behind this'
      : c.format === 'Briefing' && doc.format !== 'Briefing' ? 'The briefing behind this'
      : 'Companion ' + (FORMAT_LABEL[c.format] || c.format).toLowerCase();
    items.push(card(kicker, c));
  }
  const theme = themes(doc)[0];
  const n = nextRead(doc, used);
  if (n) { used.add(n.id); items.push(card('Next in ' + sharedTheme(doc, n), n)); }
  if (!c) {
    // No companion: offer a second related piece instead
    const n2 = nextRead(doc, used);
    if (n2) items.push(card('Also in ' + sharedTheme(doc, n2), n2));
  }
  items.push(themeCard(theme, false));
  return block(items);
}

function forTheme(theme) {
  const picks = DOCS
    .filter(d => d.format === 'Briefing' && d.briefingFile && themes(d).includes(theme))
    .sort((a, b) => dateSort(b.date) - dateSort(a.date))
    .slice(0, 3)
    .map(d => card('Latest in this theme', d));
  return block([...picks, themeCard(theme, true)]);
}

// Where the block goes when the page has none yet
function insert(html, blockHtml) {
  const integrity = html.indexOf('Research integrity');
  if (integrity > -1) {
    const at = html.lastIndexOf('<div style="position:relative', integrity);
    if (at > -1) return html.slice(0, at) + blockHtml + '\n\n  ' + html.slice(at);
  }
  for (const marker of ['<div id="site-footer">', '</main>', '<script src="../navigation.js']) {
    const at = html.indexOf(marker);
    if (at > -1) return html.slice(0, at) + blockHtml + '\n' + html.slice(at);
  }
  return null;
}

const MARKERS = /<!-- related:start[\s\S]*?<!-- related:end -->/;
const skipped = [];
let written = 0;

for (const dir of ['briefings', 'dashboards', 'themes']) {
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.html') && !f.startsWith('_'))) {
    const p = dir + '/' + f;
    const html = fs.readFileSync(p, 'utf8');
    let blockHtml;
    if (dir === 'themes') {
      if (!PAGE_THEME[f]) { skipped.push(p + ' (no theme)'); continue; }
      blockHtml = forTheme(PAGE_THEME[f]);
    } else {
      const doc = DOCS.find(d => pageOf(d) === p);
      if (!doc) { skipped.push(p + ' (not in catalogue)'); continue; }
      blockHtml = forOutput(doc, html);
    }
    const next = MARKERS.test(html) ? html.replace(MARKERS, () => blockHtml) : insert(html, blockHtml);
    if (!next) { skipped.push(p + ' (no insertion point)'); continue; }
    if (next !== html) { fs.writeFileSync(p, next); written++; }
  }
}

console.log(`Keep-reading blocks written or refreshed: ${written}`);
if (skipped.length) console.log('Skipped:\n  ' + skipped.join('\n  '));
