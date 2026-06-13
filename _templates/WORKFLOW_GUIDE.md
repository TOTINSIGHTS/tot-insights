# TOT Insights Hub — Workflow Guide

**For:** Research assistants and non-technical staff  
**Updated:** June 2026  
**Questions?** Ask a technical team member before making changes you are unsure about.

---

## How to use this guide

Each task below has:
- A numbered checklist of steps to follow in order
- An **exact Claude Code prompt** you can copy and paste directly

**What is Claude Code?** It is the AI assistant embedded in the research team's coding environment. You type prompts into it the same way you would type into a chat window. The prompts in this guide have been tested and are safe to copy exactly as written.

**Before you start any task:** make sure you are working in the correct folder — `C:\Users\jadem\OneDrive\Documents\occupationhub\clean\tot-insights-site`

---

## Task 1 — Adding a new research output card

When a new briefing, paper, dashboard, or dataset is published, you need to add a card for it in the research catalogue.

**File to edit:** `data/documents.js`

### Steps

1. Open `data/documents.js` in Claude Code (or ask Claude to read it).
2. Scroll to the bottom of the list to find the highest DOC number already used.
   - DOC numbers follow the pattern `DOC-A1`, `DOC-A2`, `DOC-B1`, etc.
   - The letter prefix groups outputs by series. A = Economics/Sanctions primary outputs, B = Identity/Education, C = Civilian/IDP, D = Accountability, E = Primary sources, F = Governance, G = Historical.
   - Assign the next number in the correct series. If the last Economics entry is `DOC-A8`, the new one is `DOC-A9`.
3. Gather the following information before editing:
   - **Title** — exact title of the document
   - **Date** — month and year of publication (e.g. `"June 2026"`)
   - **Theme** — one of: `"Economics"`, `"Governance"`, `"Education and Militarisation"`, `"Identity, Culture and Religion"`, `"Accountability and Legal"`, `"Civilian Life"`, `"Coercion, Resistance and Security"`, `"Information Space"` (can be an array of two: `["Economics","Governance"]`)
   - **Format** — one of: `"Briefing"`, `"Paper"`, `"Dashboard"`, `"Visual"`, `"Data"`, `"Primary Sources"`
   - **DOI** — the Zenodo DOI in full format: `https://doi.org/10.5281/zenodo.XXXXXXXX`
   - **desc** — one or two sentences (the card description — what is unique or headline about this output)
   - **descriptor** — a single punchy sentence starting with a verb or noun phrase (the pull-quote)
   - **summary** — two to four sentences (shown in the detail modal)
   - **briefingFile** — path to the HTML page, e.g. `"briefings/my_new_briefing.html"` (leave out if not yet created)

### Exact Claude Code prompt

```
In the TOT Insights Hub, open data/documents.js and add a new entry to the DOCS array. Place it in the correct series order (after the last DOC-[LETTER][NUMBER] in the same series). Use the following values:

id: "DOC-[LETTER][NUMBER]"
doi: "https://doi.org/ZENODO-DOI-HERE"
date: "MONTH YEAR"
theme: "THEME-TAG"
format: "FORMAT"
title: "FULL TITLE OF THE DOCUMENT"
desc: "SHORT CARD DESCRIPTION — one or two sentences."
descriptor: "PULL-QUOTE — punchy one-liner."
summary: "MODAL SUMMARY — two to four sentences."
briefingFile: "briefings/filename.html"

Do not change any other entries. Show me the new entry before saving so I can check it.
```

---

## Task 2 — Creating a new briefing page

Use this when publishing a new written output (briefing, paper, or policy brief).

### Steps

1. Decide which template to use:
   - **Analytical briefing** → `_templates/briefing_template.html`
   - **Longer academic paper with footnotes** → `_templates/paper_template.html`
   - **Policy brief with numbered recommendations** → `_templates/policy_brief_template.html`
   - **Primary source collection** → `_templates/primary_sources_template.html`

2. Name the new file using the document title: all lowercase, spaces replaced with underscores, `.html` at the end.
   - Example: "Settler Colonialism in Mariupol" → `settler_colonialism.html`
   - Save it in the `briefings/` folder.

3. Replace every ALL-CAPS placeholder. The full list:

   | Placeholder | Replace with |
   |-------------|--------------|
   | `DOCUMENT TITLE` | Full title of the briefing |
   | `THEME-TAG` | Theme name (e.g. `Economics`) |
   | `DOC-NUMBER` | The DOC ID you assigned in Task 1 |
   | `MONTH YEAR` | Publication date (e.g. `June 2026`) |
   | `SURNAME, Initials. et al. (YEAR).` | Citation author line |
   | `DOCUMENT-TITLE` (in citation) | Exact title again |
   | `ZENODO-DOI-PLACEHOLDER` | Full DOI URL |
   | `ONE-LINE DESCRIPTOR` | The pull-quote sentence |
   | `FILENAME.html` | The new filename |
   | `EXECUTIVE-SUMMARY-TEXT` | Executive summary text |
   | `SECTION-HEADING` | Heading for each section |
   | `SECTION-TEXT` | Body text for each section |

4. Replace the three Key Findings placeholders (`KEY FINDING — Replace this text`) with the actual findings.

5. Once the HTML file is saved, go back to `data/documents.js` and set the `briefingFile` field to the correct path (e.g. `"briefings/settler_colonialism.html"`).

### Exact Claude Code prompt

```
In the TOT Insights Hub, create a new briefing page at briefings/FILENAME.html by copying _templates/briefing_template.html. Replace all ALL-CAPS placeholders with the following values:

Title: FULL TITLE
Theme: THEME-TAG
DOC number: DOC-NUMBER
Date: MONTH YEAR
Citation author line: AUTHOR-CITATION
DOI: https://doi.org/ZENODO-DOI
Descriptor (pull-quote): DESCRIPTOR-TEXT
Filename in integrity link: FILENAME.html

For the Key Findings block, use these three bullet points:
1. FIRST KEY FINDING
2. SECOND KEY FINDING
3. THIRD KEY FINDING

For the Executive Summary section: EXECUTIVE-SUMMARY-TEXT

For the body sections: [provide section headings and text, or say "I will fill the body sections manually later"]

Do not change any other files.
```

---

## Task 3 — Updating an existing briefing

Use this to correct a figure, fix a factual error, add new information, or update the "Last updated" date.

### Steps

1. Find the correct HTML file. Briefing files are in the `briefings/` folder.
   - If you are not sure which file, search for a distinctive phrase from the text.

2. Identify exactly what needs to change:
   - Write down the **current text** (what it says now).
   - Write down the **replacement text** (what it should say).
   - Note the section or heading near the change so Claude can find it.

3. If you are only updating the "Last updated" date, it appears near the top of the file immediately below the title, in a line that reads `Last updated: MONTH YEAR`.

4. After the edit, ask Claude to confirm the change and check nothing else was altered.

### Exact Claude Code prompt

**To correct a specific figure or sentence:**
```
In the TOT Insights Hub, open briefings/FILENAME.html. Find the text that currently reads:

"CURRENT TEXT HERE"

Replace it with:

"NEW TEXT HERE"

Do not change anything else on the page. Confirm what was changed when done.
```

**To update the "Last updated" date only:**
```
In the TOT Insights Hub, open briefings/FILENAME.html. Find the "Last updated:" line near the top of the page and change the date to "MONTH YEAR". Do not change anything else.
```

---

## Task 4 — Adding a new team member to the About page

**File to edit:** `about.html`

### Steps

1. Gather the following information:
   - Full name (with title if applicable)
   - Job title or role at the programme
   - Short biography (2–4 sentences)
   - Profile link — either a university staff page URL or an ORCID URL (format: `https://orcid.org/XXXX-XXXX-XXXX-XXXX`)
   - Photo file (optional — see step 4)

2. Decide where in the team grid the new member should appear (by seniority or alphabetical order).

3. The HTML structure for each team member is:
   ```html
   <div class="profile-card">
     <!-- Photo placeholder: add <img> here when available -->
     <div class="profile-name">NAME</div>
     <div class="profile-title">ROLE TITLE</div>
     <p class="profile-bio">BIOGRAPHY TEXT.</p>
     <a class="profile-link" href="PROFILE-URL" target="_blank" rel="noopener noreferrer">LINK-LABEL ↗</a>
   </div>
   ```

4. **Adding a photo:** Save the photo as a `.jpg` or `.webp` file in `assets/images/` using the format `team_firstname_lastname.jpg`. Then replace the comment `<!-- Photo placeholder -->` with `<img src="../assets/images/team_firstname_lastname.jpg" alt="NAME" loading="lazy">`.

### Exact Claude Code prompt

```
In the TOT Insights Hub, open about.html and add a new team member profile card in the Research team section. Insert it after the existing card for [NAME OF PERSON IT SHOULD FOLLOW].

Use these details:
Name: FULL NAME
Title: ROLE TITLE
Bio: BIOGRAPHY TEXT
Profile link URL: PROFILE-URL
Link label: LINK LABEL (e.g. "King's College London profile" or "ORCID")

Leave the photo placeholder comment in place — I will add the photo separately. Do not change any other content on the page.
```

---

## Task 5 — Adding a new media item

**File to edit:** `media.html`

Media items are stored as a JavaScript array near the top of `media.html`. Each entry appears as a card in the Media page grid.

### Steps

1. Gather the following:
   - **Title** — exact headline of the article, video, or podcast episode
   - **Date** — in the format `"DD Mon YYYY"` (e.g. `"12 Jun 2026"`)
   - **Year** — four-digit year as a string (e.g. `"2026"`)
   - **Outlet** — name of the publication or channel
   - **Format** — one of: `"Article"`, `"Video"`, `"Podcast"`, `"Report"`, `"Journal Article"`, `"Blog"`
   - **Description** — two to four sentences describing the content
   - **URL** — full URL to the item (must start with `https://`)

2. New items go at the **top** of the array (so the most recent appears first on the page).

### Exact Claude Code prompt

```
In the TOT Insights Hub, open media.html and add a new media item at the very top of the media items array (so it appears first in the list). Use these details:

Title: "TITLE OF THE ITEM"
Date: "DD Mon YYYY"
Year: "YYYY"
Outlet: "OUTLET NAME"
Format: "FORMAT"
Description: "DESCRIPTION TEXT — two to four sentences."
URL: "https://URL-HERE"

Do not change any other content in the file.
```

---

## Task 6 — Updating the resistance monitoring dashboard

**File to edit:** `dashboards/resistance_analytics.html`

The resistance dashboard tracks verified violent resistance incidents. It is updated when a new monitoring period is complete.

### Steps

1. Locate the monitoring spreadsheet — it is stored locally and on the shared drive. Ask a senior team member for the current file location.

2. You will need the following updated figures from the spreadsheet:
   - **Total incident count** (cumulative)
   - **New biweekly period label** (e.g. `"Jun '26a"`)
   - **New biweekly period incident count** (the number for the new period only)
   - **Updated date range** for the subtitle (e.g. `Dec 2024 – Jun 2026`)
   - **Updated counts** for the four stat cards if they have changed (occupied territory total, RF territory total, etc.)

3. The key locations in the file:
   - **Total count** appears in the `<div class="stat-val">464</div>` near the top of the body — change `464` to the new total.
   - **Subtitle** reads `Dec 2024 – May 2026 · 464 verified incidents` — update both the date range and number.
   - **Eyebrow** reads `TOT Insights · Resistance Analytics · May 2026` — update the month/year.
   - **`biweeklyLabels`** array — add the new period label at the end.
   - **`biweeklyValues`** array — add the new period's count at the end.

### Exact Claude Code prompt

```
In the TOT Insights Hub, open dashboards/resistance_analytics.html and make the following updates:

1. Change the total incident stat card value from [OLD TOTAL] to [NEW TOTAL]
2. Change the page subtitle to: "Dec 2024 – [NEW END DATE] · [NEW TOTAL] verified incidents · Occupied territories and Russian Federation"
3. Change the page eyebrow to: "TOT Insights · Resistance Analytics · [NEW MONTH YEAR]"
4. Add "[NEW PERIOD LABEL]" to the end of the biweeklyLabels array
5. Add [NEW PERIOD COUNT] to the end of the biweeklyValues array

Do not change any other content or data in the file.
```

---

## Task 7 — Adding photos to research page photo strips

Photos appear in strip-format photo galleries on the research and index pages. New fieldwork photos can be added to these strips.

**Where to save new photos:** `assets/images/fieldwork/`

Use descriptive filenames in lowercase with underscores, for example: `mariupol_port_may2026.jpg`.

### Steps

1. Resize the photo to no wider than 1400px before saving (to keep page load times fast).
2. Save the file as `.jpg` or `.webp` in `assets/images/fieldwork/`.
3. Note the filename and a short description (used as `alt` text for accessibility).
4. Decide which photo strip to add it to — the main one on `index.html` or a page-specific one.

### Exact Claude Code prompt

```
In the TOT Insights Hub, open [index.html or research.html] and find the photo strip section. Add a new photo to the strip using:

File path: assets/images/fieldwork/FILENAME.jpg
Alt text: "SHORT DESCRIPTION OF PHOTO"

Insert it [at the start / at the end / after the photo showing DESCRIPTION OF ADJACENT PHOTO] of the strip. Do not change any other content.
```

---

## Task 8 — Running a site audit

Run a full site audit before any major public announcement, after a batch of content updates, or at least once per quarter.

**When to run:**
- Before sharing the site with a new partner or funder
- After updating five or more pages in one session
- Before any media appearance that will direct traffic to the site
- Once per quarter as a routine quality check

### Full audit prompt (copy and paste this exactly)

```
Conduct a full functionality audit of the entire TOT Insights Hub. Check every page and report what works and what doesn't. Do not fix anything — report only.

Check every HTML file including: index.html, research.html, media.html, data.html, projects.html, resources.html, about.html, all files in briefings/, all files in dashboards/, and any other HTML files present.

For each page check and report:

Links and navigation:
- Does the back navigation link work (correct relative path)?
- Do all internal links point to files that actually exist in the repository?
- Do all DOI links follow the correct format (https://doi.org/...)?
- Do all external links have https:// — no broken or malformed URLs?
- Does the main navigation bar appear and link correctly?

Content completeness:
- Are there any empty Key Findings sections (placeholder bullets with no text)?
- Are there any visible HTML comment placeholders (<!-- ADD ... HERE -->)?
- Are there any "TBC", "coming soon", or placeholder strings visible?
- Are there any internal labels still visible in body text (Hub v4, RESTRICTED, Classification, Hub Ref, Hub Internal)?

Text readability:
- Is any text colour set to a dark value (#333, #444, #555, #1a1a1a) on a dark background?
- Is any text colour set to a light value (white, #e8eaf0) on a white or light background?

Technical functionality:
- Does each dashboard file load without React/Babel dependencies?
- Are there any broken image references (src="" pointing to non-existent files)?
- Do all JavaScript data arrays appear to be populated (not empty)?

Data accuracy:
- Does the resistance analytics dashboard show the correct total incidents?
- Do any card descriptions still reference "(v1)" or "(v2)"?

Output format: Produce a structured report organised by page. For each issue state which file and which section, what the problem is, and Pass or Fail. At the end provide a summary count of total passes and fails, a prioritised list of the top 10 most critical issues, and a separate list of all readability failures only.

Do not make any changes.
```

---

## Task 9 — Adding a primary source (existing standalone page) to the research catalogue

**File to edit:** `data/documents.js`

Use this task when a primary source document already has its own standalone HTML page (e.g. in `primary-sources/mariupol-admin-2026/`) and you want it to appear on research.html as a searchable, filterable card.

This task does NOT create a new page. It only adds an entry to the catalogue so the existing page becomes discoverable.

### Before you start

Gather the following from the document's existing standalone page — do not invent or assume any detail that is not on the page:

- **DOC ID** — visible in the page eyebrow (e.g. `DOC-095`)
- **Title** — the `<h1>` page title, verbatim
- **Date** — the document date shown on the page (not the "Last updated" platform date); use format `"Month YYYY"` (e.g. `"April 2026"`)
- **Theme** — the theme tag shown on the page; confirm with the lead researcher whether a secondary theme applies
- **Summary** — the `<p class="summary">` paragraph, verbatim; apply the em-dash rule below before copying
- **Source and decree details** — the source name, decree number, and date, for the `file` field; cite by name and date only, no live hyperlink
- **PDF filename** — used only to confirm the page loads correctly; do not link to the PDF directly from documents.js
- **Provenance** — check that the page has a source note. If provenance is missing, flag it in your report and do not fill it in yourself

### Standing rules (apply to every primary source entry)

1. **No live hyperlink to occupation-administration sources.** Do not add a URL pointing to a Russian or DNR government website. The `gdocs` field should be `""` unless there is an existing Google Drive folder for that source collection.
2. **Em-dash conversion.** Before copying any text into the entry, convert any em-dash (—) to a comma, colon, or parentheses, whichever reads most naturally. Count the conversions and include the count in your report.
3. **No invented detail.** Every word in `desc`, `descriptor`, and `summary` must be traceable to the page. Do not draw from external sources, prior knowledge, or other documents.
4. **Names: role not name, unless a public official acting in official capacity.** Do not introduce an individual's name into summary text unless the page names them in their official role.
5. **Use `dashboardFile`, not `briefingFile`.** Primary source pages open in the iframe viewer via the `dashboardFile` field. Using `briefingFile` will not work for these pages.

### Entry structure

```javascript
{
  id:            "DOC-095",
  date:          "April 2026",
  theme:         ["Primary Theme","Secondary Theme"],   // string if single theme
  format:        "Primary Sources",
  title:         "Title from the page h1",
  desc:          "One or two sentences — first sentence(s) of the page summary.",
  descriptor:    "One punchy analytical sentence: what the document reveals.",
  summary:       "Full text of the page summary paragraph, verbatim (after em-dash conversion).",
  file:          "Decree No. XXX, Administration of the City District of Mariupol, DNR, DD Month YYYY",
  gdocs:         "",
  dashboardFile: "primary-sources/mariupol-admin-2026/doc-095.html"
}
```

### Where to insert

Add new entries to `data/documents.js` in DOC-ID order within the DOCS array. If the new entries are in a numbered series (DOC-095, DOC-096 etc.) and there is no obvious insertion point, add them before the last entry in the array.

### After adding

- Verify the entries appear on `research.html` and are searchable and filterable.
- Update `CATALOGUE.md` to note the entries are now in the research catalogue.
- If the documents also appear as hardcoded cards on `data.html`, flag this as a duplicate display — do not remove the `data.html` cards without instruction.
- Note: the `REGIONS` object in `research.html` maps DOC IDs to region labels. Entries not in REGIONS fall back to "All occupied territories." If a precise region label matters, ask the lead researcher whether to update REGIONS.

### Exact Claude Code prompt

```
In the TOT Insights Hub, add the following primary source documents to data/documents.js so they appear on research.html as searchable cards. Each already has its own standalone HTML page — do not create new pages. Use dashboardFile to link to each existing page.

For each document, read its existing page at [PATH] and build the catalogue entry from that page only. Apply these rules:
- No live hyperlink to occupation-administration sources; gdocs: ""
- Convert any em-dash (—) to comma, colon, or parentheses; report the count
- Summary taken verbatim from the page's <p class="summary"> paragraph
- Cite source by name and date in the file field only; no URL

Documents to add:
- DOC-XXX: theme [PRIMARY + SECONDARY], page at primary-sources/[FOLDER]/doc-xxx.html
- [repeat for each]

After adding, report: files changed, entries added, em-dash count per document, any provenance gaps, and confirm they appear on research.html.
```

---

## File structure reference

| File or folder | What it controls |
|----------------|-----------------|
| `index.html` | Homepage — hero section, featured outputs, stats strip, news |
| `research.html` | Research outputs catalogue — the main browsable card grid |
| `data/documents.js` | **Edit this to add or update research output cards** — all card data lives here |
| `briefings/` | All briefing, paper, and policy brief HTML files |
| `dashboards/` | All interactive dashboard HTML files (charts, tabs, maps) |
| `_templates/` | Blank templates and this guide — for new staff and new outputs |
| `assets/css/main.css` | Site-wide styles — colours, fonts, spacing (do not edit without guidance) |
| `assets/images/` | All site images including fieldwork photos |
| `data/` | PDF source files and the Excel dataset for Mariupol economy |
| `data.html` | Databases and structured data page |
| `media.html` | Media outputs and public engagement — edit to add new media items |
| `about.html` | Team profiles and institutional partners — edit to add team members |
| `resources.html` | External resources and reading list |
| `projects.html` | Current and past research projects |
| `economics.html`, `sanctions.html`, etc. | Thematic sub-pages |
| `primary-sources/` | Individual primary source document pages |
| `CATALOGUE.md` | Internal catalogue of all outputs — update when adding new DOC entries |

---

## Quality checklist

Run through this checklist before publishing any new content. Do not publish until all boxes are ticked.

- [ ] DOI link is in the correct format — `https://doi.org/...` (not `http://`, not just the number)
- [ ] All ALL-CAPS placeholders have been replaced — search the file for any remaining uppercase placeholder text
- [ ] Key Findings are populated — no bullet still reads "KEY FINDING — Replace this text"
- [ ] "Last updated" date at the top of the page is correct
- [ ] ← Back to Research link is present and links to `../research.html`
- [ ] A card has been added to `data/documents.js` with the correct `briefingFile` path
- [ ] No internal labels are visible on the page — check for: Hub Internal, RESTRICTED, Classification, Hub Ref
- [ ] Research Integrity section is present at the bottom of the page (with the correct page title in the mailto link)
- [ ] The page has been opened in a browser and visually checked — key findings are readable (dark navy background, white text), no broken layouts
- [ ] If the document has a Zenodo record, the DOI resolves when clicked

---

*This guide is maintained by the technical lead. If a task is missing, a prompt does not work as expected, or you are unsure about anything, ask before making changes.*
