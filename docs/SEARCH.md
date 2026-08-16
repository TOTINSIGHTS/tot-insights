# Site search

Plain-language notes on how search works on TOT Insights, how to test it, and
what to do when you add new material.

**Short version: you do not have to do anything.** The index rebuilds itself
every time you push. Add a briefing, update a database, push as usual, and
search picks it up.

---

## 1. The problem this had to solve

The site is hand-written HTML with no site generator. Most pages (briefings,
theme pages, primary sources, About) have their text sitting right there in the
HTML file, so a search tool can read them straight off the disk.

But four things on the site are **not** in the HTML. They are fetched by
JavaScript after the page opens:

| What | Where the data really lives | How many |
|---|---|---|
| Officials database | `data/officials-data.json` | 1,082 visible entries |
| Sanctions database | `data/sanctions-data.json` | 2,306 entries |
| Research catalogue | `data/documents.js` | 109 documents |
| Media appearances | `data/documents.js` | 67 press items |

`officials.html` is an empty shell. Open it in a text editor and you will find
filter dropdowns and a download button, but not one of the 1,082 names.

Search tools do not run JavaScript. They read files. So without extra work,
searching "Pasechnik" would have found nothing at all.

## 2. How it works now

Search is powered by [Pagefind](https://pagefind.app/), which runs once at build
time and produces an index the visitor's browser downloads in small pieces as
they type. Nothing runs on a server; it works on plain GitHub Pages.

There are **two indexes**, not one:

```
pagefind/          the site's real pages          (135 pages)
pagefind-records/  the database and catalogue records (3,564 records)
```

They are deliberately kept apart. Search ranking favours short documents where
the search term appears densely. A sanctions entry is short; a briefing is long.
In a single combined index, 3,500 short records would out-rank and bury every
piece of your written analysis. Two indexes means prose is ranked only against
prose, so it always comes first.

That is why the results panel has two sections:

```
Pages and documents
   Once Every Three Days: The Water Crisis in Russian-Occupied Donetsk
   Constitution of the Donetsk People's Republic
   ...

Database records
   Officials database        292 matches
      Khryakov Aleksandr Vitalievich
      Makeeva Olga Alexandrovna
      See all 292 in the officials database →
   Sanctions database      1,216 matches
      ...
```

### The snapshot trick

Pagefind cannot read a JSON file. So at build time a script writes one tiny
throwaway HTML page per record into a folder called `.search-build/`, containing
that record's text. Pagefind indexes those, and then **they are deleted**.

They are never committed and never uploaded to the live site. A visitor cannot
reach them because they do not exist on the server. This matters for the
officials database in particular: it holds personal data on named individuals,
and publishing 1,082 crawlable pages about named people would have changed the
site's exposure to search engines. Instead, Google sees exactly what it saw
before, while your own site search sees everything.

The 3 officials flagged `"Hidden": "true"` in the JSON are excluded from the
index, exactly as `officials.html` excludes them from the table.

### Clicking a record result

A search result for a record never links to the throwaway snapshot. The search
UI rewrites the link to the real page:

| Snapshot | Where the result actually links |
|---|---|
| `officials/OFC-002.html` | `officials.html?id=OFC-002` |
| `sanctions/ref-7662.html` | `sanctions.html?id=7662` |
| `catalogue/DOC-A1.html` | `research.html?id=DOC-A1` |
| `media/MED-056.html` | `media.html?id=MED-056` |

## 3. The `?q=` and `?id=` links

These were added so search results can land you in the right place. They are
useful on their own, too: you can now send someone a link to one specific
official instead of telling them to go and search for a name.

**`?q=` fills in the page's own search box.**

    officials.html?q=donetsk

opens the officials database with `donetsk` already typed into its search box
and the results filtered. Works on `officials.html`, `sanctions.html` and
`research.html`.

**`?id=` opens one specific record.**

    officials.html?id=OFC-002     opens Pasechnik Leonid Ivanovich's detail panel
    sanctions.html?id=22409       opens that sanctions entry
    research.html?id=DOC-A1       opens that catalogue entry
    media.html?id=MED-056         scrolls to that press item and highlights it

Opening a record on the officials or sanctions page also writes its id into the
address bar, so you can copy the address straight out of the browser and share
it. Closing the record removes it again.

### One wrinkle worth knowing

The search index reads **every field** of an officials record, including
`Notes on Role` and `Career Before`. The officials page's own search box only
looks at name and role. So site search may say "12 matches" while clicking
through shows 9: the other 3 matched on a note rather than on a name.

This is a one-line change in `officials.html` if it ever bothers you (widen the
`applyFilters` test to cover more fields), but it has been left alone so the
database page behaves exactly as it always has.

## 4. Testing locally

Search needs the site served over `http://`, not opened as a file from disk.
Build the index first, then start a server:

```bash
node scripts/build-search.js
```

```bash
python -m http.server 8000
```

Then open <http://localhost:8000/> and use the box in the header. Serve from the
site root, so pages are at `/officials.html`, not a nested path.

Things worth trying:

- `donetsk` — should give briefings and legal acts on top, then large record groups
- `tourism` — one page, then officials with tourism portfolios
- `Pasechnik` — barely any prose, one officials hit, two sanctions hits
- gibberish — should say "No matches", not show an unrelated briefing

If the box appears but searching says "Search is unavailable on this copy of the
site", you have not run `node scripts/build-search.js` yet in that checkout.

## 5. Rebuilding the index

**Normally: nothing to do.** `.github/workflows/deploy.yml` runs the build on
every push to `master`, before publishing. The index cannot go stale, and there
is nothing to commit — `pagefind/` and `pagefind-records/` are in `.gitignore`.

Only if you want to see the change locally before pushing:

```bash
node scripts/build-search.js
```

That single command does everything: indexes the site pages, generates the
record snapshots, indexes those, and deletes the snapshots. It takes about 30
seconds.

If the search build fails, the deploy fails and the site does not update. That
is deliberate: it is better to be told loudly than to publish a broken search
quietly.

## 6. The files involved

| File | What it does |
|---|---|
| `scripts/build-search.js` | The one command. Runs everything below in order. |
| `scripts/build-search-snapshots.js` | Turns the JSON/JS data into throwaway HTML for indexing. |
| `assets/js/search.js` | The search box behaviour and the two-section results panel. |
| `assets/css/search.css` | Styling, using the site's existing tokens. |
| `navigation.js` | Injects the search box into the shared header. |
| `.github/workflows/deploy.yml` | Rebuilds the index on every push. |

The search box is added in `navigation.js`, which is the single source of truth
for the header, so it appears on all 135 pages without touching them
individually. The 55 briefings and dashboards that keep their own top nav get a
compact version of the box in their "← Back" bar instead.

## 7. Two traps for future-you

**Never add `data-pagefind-body` to a page.** The moment any page on the site
carries that attribute, Pagefind switches to indexing *only* pages that have it,
and silently drops everything else. This happened during the original build: the
index went from 135 pages to zero without an error message.
`scripts/build-search.js` now checks for this and fails loudly if the page count
comes back suspiciously low.

**Pagefind loads its filter data lazily.** The very first search after the page
loads returns empty filter counts, which would leave the "Database records"
section blank on a visitor's first query. `search.js` works around this by
forcing that data to load up front. If you ever rewrite the loading code, keep
the `recordsIndex.filters()` call.
