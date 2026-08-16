#!/usr/bin/env node
/*
 * Builds the site search index.
 *
 * Run from the repo root:   node scripts/build-search.js
 *
 * This is the ONLY search command you need. It produces two folders:
 *
 *   pagefind/          index of the site's real pages (briefings, themes,
 *                      primary sources, about, and so on)
 *   pagefind-records/  index of the database records and catalogue entries,
 *                      which are otherwise invisible because they are loaded
 *                      by JavaScript
 *
 * Two separate indexes, not one, so that 3,500 short database records can never
 * out-rank and bury the prose pages in the results list. The search UI queries
 * both and shows prose first. See docs/SEARCH.md.
 *
 * Order matters: the prose index is built BEFORE the record snapshots are
 * generated, so the snapshots cannot leak into it. The snapshots are deleted
 * again at the end, so they are never committed and never deployed.
 */
const { execSync, execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
process.chdir(ROOT);

// Pinned so a rebuild produces the same index today and in a year's time.
const PAGEFIND = 'pagefind@1.5.2';

const SNAPSHOTS = '.search-build';
const PROSE_OUT = 'pagefind';
const RECORDS_OUT = 'pagefind-records';

/* Run Pagefind through npx. Uses execSync with a single command string rather
 * than execFileSync, because on Windows npx is a .cmd launcher that cannot be
 * spawned directly. Every argument here is a fixed literal, never user input. */
function pagefind(args) {
  const out = execSync('npx -y ' + PAGEFIND + ' ' + args.join(' '), {
    encoding: 'utf8'
  });
  // Surface just the useful summary lines, not the whole banner.
  out.split('\n')
    .filter(l => /Indexed|Error|error|Warning|warning/.test(l))
    .forEach(l => console.log('  ' + l.trim()));
  return out;
}

function clean() {
  [SNAPSHOTS, PROSE_OUT, RECORDS_OUT].forEach(d =>
    fs.rmSync(path.join(ROOT, d), { recursive: true, force: true }));
}

console.log('\nTOT Insights — building site search\n');

// 1. Start from a clean slate so a deleted page can never linger in the index.
clean();

// 2. Index the real site pages. .search-build/ does not exist yet, so there is
//    no way for a record snapshot to end up in the prose index.
console.log('[1/3] Indexing site pages');
const proseLog = pagefind(['--site', '.', '--output-path', PROSE_OUT]);

// Guard against the failure mode where a stray data-pagefind-body attribute
// somewhere on the site silently reduces the index to a handful of pages.
const proseCount = parseInt((proseLog.match(/Indexed (\d+) pages/) || [])[1] || '0', 10);
if (proseCount < 100) {
  console.error('\nERROR: only ' + proseCount + ' site pages indexed; expected 130+.');
  console.error('A data-pagefind-body attribute on any page puts Pagefind into');
  console.error('"only index tagged pages" mode. Search docs/SEARCH.md.');
  process.exit(1);
}

// 3. Generate the record snapshots, then index them separately.
console.log('\n[2/3] Generating record snapshots');
execFileSync(process.execPath, [path.join('scripts', 'build-search-snapshots.js')], { stdio: 'inherit' });

console.log('\n[3/3] Indexing database records');
const recLog = pagefind(['--site', SNAPSHOTS, '--output-path', RECORDS_OUT]);

const recCount = parseInt((recLog.match(/Indexed (\d+) pages/) || [])[1] || '0', 10);
if (recCount < 1000) {
  console.error('\nERROR: only ' + recCount + ' records indexed; expected 3,500+.');
  process.exit(1);
}

// 4. Remove the snapshots. They have served their purpose and must not ship.
fs.rmSync(path.join(ROOT, SNAPSHOTS), { recursive: true, force: true });

console.log('\nDone.');
console.log('  ' + proseCount + ' site pages      -> ' + PROSE_OUT + '/');
console.log('  ' + recCount + ' database records -> ' + RECORDS_OUT + '/');
console.log('  snapshots deleted (never published)\n');
