#!/usr/bin/env node
/*
 * Regenerates sitemap.xml at the repo root from the catalogue (data/documents.js)
 * plus the site's standalone public pages.
 *
 * Run from the repo root:   node scripts/generate-sitemap.js
 *
 * - <loc> uses absolute URLs on https://totinsights.org
 * - <lastmod> is each file's last git commit date (YYYY-MM-DD); no date is invented
 * - no <changefreq> / <priority>
 * - research outputs (briefings, dashboards, primary sources) come from the catalogue,
 *   so unpublished/orphaned files in those dirs are never included
 */
const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const DOMAIN = 'https://totinsights.org';
const ROOT = path.resolve(__dirname, '..');
const INCLUDE_PRIMARY_SOURCE_PDFS = true; // the 7 education-and-memory source PDFs

process.chdir(ROOT);

// --- 1. Standalone public pages (curated: real, reachable, indexable) ---
const standalone = [
  'index.html',            // home -> served at "/"
  'themes.html',
  'data.html',
  'research.html',
  'primary-sources.html',
  'about.html',
  'media.html',
  'resources.html',
  'privacy.html',
  'sanctions.html',
  'officials.html',
  // resources detail pages (linked from resources.html)
  'resources-academic.html',
  'resources-bibliography.html',
  'resources-bibliography-topic1.html',
  'resources-bibliography-topic2.html',
  'resources-bibliography-topic3.html',
  'resources-bibliography-topic4.html',
  'resources-bibliography-topic5.html',
  'resources-bibliography-topic6.html',
  'resources-bibliography-topic7.html',
  'resources-bibliography-topic8.html',
  'resources-human-rights.html',
  'resources-legal.html',
  'resources-long-form-media.html',
  'resources-organisations.html',
];

// --- 2. Theme intros under /themes/ ---
const themeIntros = fs.readdirSync('themes')
  .filter(f => f.endsWith('.html'))
  .sort()
  .map(f => 'themes/' + f);

// --- 3. Research outputs from the catalogue (source of truth) ---
let DOCS;
{
  const srcTxt = fs.readFileSync('data/documents.js', 'utf8');
  eval(srcTxt + '\nglobal.__DOCS = DOCS;'); // documents.js declares `const DOCS = [...]`
  DOCS = global.__DOCS;
}
const outputs = [];
for (const d of DOCS) {
  const p = d.briefingFile || d.dashboardFile || '';
  if (!p || /^https?:/i.test(p)) continue;          // external / no internal page
  if (/\.html$/i.test(p)) outputs.push(p);           // briefings, dashboards, primary-source pages
  else if (/\.pdf$/i.test(p) && INCLUDE_PRIMARY_SOURCE_PDFS) outputs.push(p);
  // anything else (assets, etc.) is skipped
}

// --- Combine, de-dup, keep only files that exist ---
let paths = [...standalone, ...themeIntros, ...outputs]
  .filter((p, i, a) => a.indexOf(p) === i)
  .filter(p => fs.existsSync(p));

// --- last git commit date per file (YYYY-MM-DD) ---
function lastmod(p) {
  try {
    const out = cp.execSync('git log -1 --format=%cs -- "' + p + '"', { encoding: 'utf8' }).trim();
    return out || null;
  } catch (e) { return null; }
}
function locOf(p) { return p === 'index.html' ? DOMAIN + '/' : DOMAIN + '/' + p; }

// Order: home first, then everything else alphabetically by URL
const entries = paths.map(p => ({ loc: locOf(p), lastmod: lastmod(p) }));
entries.sort((a, b) => {
  if (a.loc === DOMAIN + '/') return -1;
  if (b.loc === DOMAIN + '/') return 1;
  return a.loc.localeCompare(b.loc);
});

// --- Emit sitemap.xml ---
const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
];
for (const e of entries) {
  lines.push('  <url>');
  lines.push('    <loc>' + e.loc + '</loc>');
  if (e.lastmod) lines.push('    <lastmod>' + e.lastmod + '</lastmod>');
  lines.push('  </url>');
}
lines.push('</urlset>', '');
fs.writeFileSync('sitemap.xml', lines.join('\n'), 'utf8');
console.error('Wrote sitemap.xml with ' + entries.length + ' URLs.');
