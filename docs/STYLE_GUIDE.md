# TOT Insights: visualisation style guide

This is the single set of rules every visualisation, chart, diagram, and dashboard on the site must follow. It exists so the visualisations stop drifting into their own styles. This file is the shared reference — keep it here in the repository.

The order of priority is: **clarity and accessibility first, house style second.** Where they agree, follow both. Where a chart cannot be both readable and perfectly on-brand, readability wins, within the disciplined limits below. Plain is the goal; plain but never cheap.

---

## 1. Backgrounds

- Reading content sits on the **cream panel**.
- Dark navy is only for the hero strip at the top of a page and the frame around the content. **Never put reading text or data directly on dark navy.**
- No other background colours or gradients.

## 2. Fonts

- **Garamond serif** for all headings and body text.
- The **gold monospace** style is only for small uppercase labels (section labels, tags).
- No other fonts anywhere, including inside charts and diagram boxes.

## 3. Headings

- Dark navy serif, always clearly readable.
- Never pale-on-pale or washed-out. If a heading is hard to read against its background, it is wrong.

## Type scale (the only font sizes on the site)

There are **five** font sizes, defined once as tokens in the shared styles (`assets/css/main.css`), and **nothing uses a size outside this list.** Body errs on the larger side (comfortable on an 11-inch laptop; most readers are on bigger screens). Sizes are fixed, not responsive clamps.

| Token | Size | Use for |
|---|---|---|
| `--fs-title` | 38px | Large heading — page/dashboard titles |
| `--fs-section` | 30px | Section headings |
| `--fs-subheading` | 24px | Sub-headings, lead paragraphs, card titles, the logo |
| `--fs-body` | 19px | All reading text — paragraphs, entries, descriptions, card body |
| `--fs-label` | 12px | Small gold-monospace labels, eyebrows, tags, badges, nav, buttons, captions, footnotes |
| `--fs-table` | 15px | **Table cells and headers** — a notch below body (see the table rule below) |

Rules:
- Every `font-size` references one of these tokens (`font-size: var(--fs-body)` etc.). No raw `px`/`rem`/`clamp()` font sizes anywhere.
- Map by **role, not old value**: reading text → `--fs-body` even if it used to be small; small labels/annotations → `--fs-label`.
- **Tables are not body text.** Table cells and headers use the smaller table size (`--fs-table`, 15px) with tight line-height (1.4), never body size — so each row scans as one unit and columns wrap less. Table **headers** sit on the light surface too (cream background, dark text, a divider underneath) — never a dark navy/slate header bar. This is all set **once** in `assets/css/main.css` (a shared `table` rule) and applies to every table automatically; individual pages must not override table font size or re-introduce a dark header.
- **One exception:** text drawn *inside* an SVG chart or diagram is sized to fit the drawing and is not bound to this scale (it is data-viz internal, like the shared Chart.js font size), though it should stay small and legible.

## 4. Colour

- Base palette: **navy, cream, gold.**
- **Green, amber, red are reserved for meaning only:** delivery/verification status (confirmed, partial, not delivered/negative), or marking an analytically important moment. Never use them for decoration.
- If a colour is not signalling something specific, it must be a neutral house tone (navy, cream, or grey), not a bright colour.

## 5. Charts (keep them spare)

Clarity rules here override brand. Aim for the restraint of a serious think-tank or FT chart.

- No chart borders, no background fills behind the plot, no 3D, no drop shadows.
- Thin, faint gridlines or none. Prefer labelling data directly over relying on gridlines.
- One accent colour carries the data; everything else muted. Use multiple distinct colours only when the categories genuinely need distinguishing.
- When several colours are unavoidable (for example a commodity breakdown), use a limited, colourblind-safe set with real contrast between categories, not a rainbow.
- Axis labels, category labels, and value labels in dark navy or dark grey, always legible. No faint grey text.
- Label the data in plain English; spell out what the numbers mean.

## 6. Diagrams (plain boxes and lines)

- Clean boxes and connecting lines in the house palette. No heavy fills, shadows, or depth effects.
- Box text in Garamond, dark navy, readable.
- Neutral boxes in cream or pale grey; use green/amber/red on a box only to signal status or an important node, per rule 4.
- Keep connectors simple and the layout aligned to a consistent grid.

## 7. Accessibility and interaction (hard rules, not optional)

- Body/reading text large enough to read comfortably (the site's current reading size).
- Real contrast: dark text on light surfaces; never rely on faint grey.
- Any hover detail must also work on tap, for phones and tablets.
- Interactive targets (points, nodes, buttons) big enough to tap on a phone.
- Everything usable by keyboard, not only mouse.

## 8. No internal plumbing on public pages

- Never show repository file names, paths, or raw analytical codes (for example `AR_-_CHBr`, `Sobstvenniki_na_13.01.2025.xlsx`). These are internal.
- Where a source is needed, link to the relevant research brief, not to a repo document.
- Remove stale/internal furniture from public pages: "last updated" lines, build notes, and similar.
- The published **Primary sources** page is the one exception: it is a real public collection and is unaffected by this rule. Primary-source file lists should not appear on individual briefing or dashboard pages; they live only on the Primary sources page.

## 9. Page furniture

- No intro/standfirst line that just repeats the first key finding. (Removed on briefings; the same applies to visualisation pages.)
- Every page follows the shared header and footer and the shared content width.

---

## How this is used

- This guide is the reference.
- The rules that can be set once (backgrounds, fonts, colours, spacing, the shared header/footer) are built into the site's shared styles, so pages inherit them.
- Each visualisation page is then refactored to use the shared styles and obey the chart, diagram, and content rules above.
- New visualisations follow this guide from the start, so nothing drifts again.
