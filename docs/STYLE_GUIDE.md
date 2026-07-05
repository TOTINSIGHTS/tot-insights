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
