# TOT Insights Hub — Style Guide

**Version:** June 2026  
**Scope:** All HTML pages in `tot-insights-site/`  
**Source of truth:** `assets/css/main.css` + per-page `<style>` blocks

---

## Contents

1. [Colour Palette](#1-colour-palette)
2. [Typography](#2-typography)
3. [Spacing System](#3-spacing-system)
4. [Component Inventory](#4-component-inventory)
5. [Page Structure Patterns](#5-page-structure-patterns)
6. [Colour Usage Rules](#6-colour-usage-rules)

---

## 1. Colour Palette

### 1.1 CSS Variables (`main.css :root`)

```css
/* Core backgrounds */
--navy:              #111d30    /* Primary page background */
--navy-deep:         #0a1628    /* Header, footer, accent panels */
--navy-card:         #0D1624    /* Secondary card/panel background */
--color-bg:          #111d30    /* Alias → --navy */
--color-dark:        #0a1628    /* Alias → --navy-deep */
--color-bg-alt:      #0D1624    /* Alias → --navy-card */
--color-bg-stats:    #f7f5f1    /* Stats strip light background (index.html) */

/* Gold accent system */
--gold:              #B5923A    /* Primary accent — borders, labels, highlights */
--gold-pale:         #E8D5A0    /* Lighter gold for secondary accents */
--color-primary:     #B5923A    /* Alias → --gold */
--color-accent:      #B5923A    /* Alias → --gold */
--color-accent-pale: rgba(181,146,58,0.15)  /* Translucent gold for pill backgrounds */

/* Legacy aliases */
--steel:   var(--color-primary)
--gold-lt: var(--gold-pale)
--cream:   var(--color-bg-alt)
--paper:   var(--navy-card)

/* Text */
--text:              rgba(232,228,220,0.90)  /* Primary text on dark backgrounds */
--text-muted:        rgba(232,228,220,0.55)  /* Secondary/metadata text */
--color-text:        rgba(232,228,220,0.90)  /* Alias → --text */
--color-text-muted:  rgba(232,228,220,0.55)  /* Alias → --text-muted */
--muted:             var(--text-muted)

/* Borders */
--border:            rgba(255,255,255,0.07)  /* Subtle dividers on dark */
--color-border:      rgba(255,255,255,0.07)  /* Alias → --border */
--color-mid:         rgba(255,255,255,0.15)  /* Stronger dividers */

/* Typography */
--font-serif:   'Libre Baskerville', Georgia, serif
--font-sans:    'IBM Plex Sans', sans-serif
--font-mono:    'IBM Plex Mono', monospace
--font-display: 'Playfair Display', Georgia, serif
--font-source:  'Source Serif 4', Georgia, serif

/* Briefing shorthand aliases */
--serif: var(--font-serif)
--sans:  var(--font-sans)
--mono:  var(--font-mono)
```

---

### 1.2 Full Colour Catalogue

#### Primary — Dark Backgrounds

| Value | Variable | Name | Used on |
|-------|----------|------|---------|
| `#111d30` | `--navy`, `--color-bg` | Site navy | Page body background, site-wide |
| `#0a1628` | `--navy-deep`, `--color-dark` | Deep navy | Header, footer, doc-header |
| `#0D1624` | `--navy-card`, `--color-bg-alt` | Card navy | Secondary dark panels, modals |
| `#0d1b2a` | *(none)* | Key findings navy | Key Findings block background |
| `#0F1F3D` | *(none)* | Dashboard header navy | Dashboard `.page-header` backgrounds |
| `#1A2D4A` | *(none)* | Dashboard strip navy | Summary strips, tab bars |

#### Primary — Gold Accents

| Value | Variable | Name | Used on |
|-------|----------|------|---------|
| `#B5923A` | `--gold`, `--color-primary` | Site gold | Logo, border accents, CTA links |
| `#c9a84c` | *(none)* | Card/component gold | Back links, filter pills active, key-findings border, DOI links |
| `#E8B84B` | *(none)* | Warm gold | Citation box borders, stat underlines, some dashboard accents |
| `#C4964A` | *(none)* | Dashboard gold | Dashboard headers and tab underlines |
| `#E8D5A0` | `--gold-pale`, `--gold-lt` | Pale gold | Section divider underlines, h1 border in doc-content |
| `#FBE9A8` | *(none)* | Cream gold | Translation notice backgrounds, info panels |

#### Text Colours

| Value | Variable | Name | Used on |
|-------|----------|------|---------|
| `rgba(232,228,220,0.90)` | `--text`, `--color-text` | Primary light text | Body text on dark backgrounds |
| `rgba(232,228,220,0.75)` | *(none)* | Medium light text | Doc descriptor, citation text |
| `rgba(232,228,220,0.55)` | `--text-muted`, `--color-text-muted` | Muted light text | Metadata, secondary labels |
| `#E8E0D0` | *(none)* | Warm off-white | Dashboard headings |
| `#F0EDE8` | *(none)* | Lightest warm | ZNPP and some dashboard h1 |
| `#1a1a2e` | *(none)* | Dark navy text | Body text inside white content panels (briefings) |
| `#2a2a3a` | *(none)* | Dark paragraph text | `.doc-content p` inside `.doc-body` |
| `#3a3a4a` | *(none)* | Medium dark text | Card descriptions, blockquote text |
| `#9CA3AF` | *(none)* | Dashboard subtitle grey | Dashboard subtitle and secondary text |

#### Semantic Colours

| Value | Role | Used on |
|-------|------|---------|
| `#c0392b` | Error / Critical | Tariff callout border, critical severity badges |
| `#92400E` | Warning / High severity | Warning severity badges, amber callouts |
| `#1E40AF` | Info / Medium severity | Medium severity incident badges |
| `#134E4A` | Success / Teal | Licensed units, teal track cards |
| `#27ae60` | Success / Green | DZO dashboard positive indicators |

#### Research Theme Pills (research.html)

| Variable | Value | Theme |
|----------|-------|-------|
| `--theme-econ` / `--bg-econ` | `#0D4A7A` / `rgba(13,74,122,0.25)` | Economics |
| `--theme-gov` / `--bg-gov` | `#3D6678` / `rgba(61,102,120,0.25)` | Governance |
| `--theme-soc` / `--bg-soc` | `#1A5C35` / `rgba(26,92,53,0.25)` | Social conditions |
| `--theme-edu` / `--bg-edu` | `#7A5C0D` / `rgba(122,92,13,0.25)` | Education |
| `--theme-acc` / `--bg-acc` | `#0D5C4A` / `rgba(13,92,74,0.25)` | Accountability |
| `--theme-crs` / `--bg-crs` | `#7A1C28` / `rgba(122,28,40,0.25)` | Coercion / Security |
| `--theme-idr` / `--bg-idr` | `#6B2D8A` / `rgba(107,45,138,0.25)` | Identity / Religion |

#### Light-Body Dashboard Colours
*(mariupol_utility_tariffs.html, zaporizhzhia_movement_trends.html)*

| Value | Used on |
|-------|---------|
| `#fafaf8` | Body background |
| `#f8f9fb` | Body background (movement trends variant) |
| `#1a1a1a` | Body text |
| `#5a5a5a` | Subtitle text |
| `#888` / `#aaa` | Annotation / source text |
| `#1a1a2e` | Links, labels — use this for any text overlaid on light bg |

---

## 2. Typography

### 2.1 Font Stack

| Font | Stack | Variable | Role |
|------|-------|----------|------|
| EB Garamond | `'EB Garamond', Georgia, serif` | *(body override)* | Primary body font — all briefings, most pages |
| Libre Baskerville | `'Libre Baskerville', Georgia, serif` | `--font-serif`, `--serif` | Main.css default serif — research cards, headings, logo |
| IBM Plex Sans | `'IBM Plex Sans', sans-serif` | `--font-sans`, `--sans` | UI labels, navigation, card metadata |
| IBM Plex Mono | `'IBM Plex Mono', monospace` | `--font-mono`, `--mono` | Citations, DOI links, eyebrow labels, monospace data |
| Playfair Display | `'Playfair Display', Georgia, serif` | `--font-display` | Large display numbers (stat blocks on index.html) |
| Source Serif 4 | `'Source Serif 4', Georgia, serif` | `--font-source` | Key Findings bullets, profile bios, light-weight body |

> **Note:** EB Garamond is loaded via Google Fonts and overrides the main.css Libre Baskerville default in `body { font-family: 'EB Garamond', serif; }` on all pages that load main.css.

---

### 2.2 Size & Weight Reference

#### Navigation & Chrome

| Element | Font | Size | Weight | Colour |
|---------|------|------|--------|--------|
| `.logo-main` | `--font-serif` | 20px | 700 | `#fff` |
| `.logo-sub` | `--font-mono` | 9px | 400 | `rgba(255,255,255,0.35)` |
| `.header-nav a` | `--font-sans` | 12px (10px mobile) | 500 | `rgba(255,255,255,0.55)` |
| `.page-eyebrow` | `--font-mono` | 9px | 400 | `var(--color-primary)` |
| `.footer-inner span` | inherited | 11px | 400 | `rgba(255,255,255,0.65)` |

#### Briefing Pages (`.doc-*`)

| Element | Font | Size | Weight | Colour |
|---------|------|------|--------|--------|
| `.doc-title` | `var(--serif)` | 26px (20px mobile) | 700 | `rgba(232,228,220,0.90)` |
| `.doc-descriptor` | `var(--sans)` | 13px | 400 | `rgba(232,228,220,0.75)` |
| `.doc-eyebrow` | `var(--mono)` | 9px | 400 | `rgba(181,146,58,0.80)` |
| `.doc-content h1` | `var(--serif)` | 20px | 700 | `#1a1a2e` |
| `.doc-content h2` | `var(--serif)` | 17px | 700 | `#1a1a2e` |
| `.doc-content h3` | `var(--sans)` | 13px | 600 | `#1a1a2e` |
| `.doc-content p` | EB Garamond | 15px | 400 | `#2a2a3a` |
| `.doc-content p:first-child` | EB Garamond | 16px | 400 | `#222` |
| `.doc-content li` | EB Garamond | 14.5px | 400 | inherited |
| `.doc-content th` | `var(--sans)` | 11px | 500 | `#fff` |
| `.doc-content td` | `var(--sans)` | 13px | 400 | inherited |

#### Key Findings Block

| Element | Font | Size | Weight | Colour |
|---------|------|------|--------|--------|
| `.key-findings-label` | IBM Plex Mono | 0.62rem (~10px) | 400 | `#c9a84c` |
| `.key-findings li` | Source Serif 4 | 0.88rem (~14px) | 300 | `#e8eaf0` |

#### Research Cards

| Element | Font | Size | Weight | Colour |
|---------|------|------|--------|--------|
| `.doc-title` (card) | `'Libre Baskerville'` | 20px | 600 | `#1a1a2e` |
| `.doc-desc` | system | 13px | 400 | `#3a3a4a` |
| `.doc-theme-pill` | IBM Plex Mono | 11px | 600 | `#c9a84c` |
| `.doc-id` | IBM Plex Mono | 9px | 400 | `#8a6f2e` |
| `.doc-format` | IBM Plex Mono | 9px | 400 | `#3a3a4a` |

#### Dashboard Headers

| Element | Font | Size | Weight | Colour |
|---------|------|------|--------|--------|
| `.page-title` (dark dash) | EB Garamond | 21–24px | 700 | `#E8E0D0` |
| `.page-eyebrow` (dark dash) | IBM Plex Mono | 11px | 400 | `#C4964A` |
| `.page-subtitle` (dark dash) | IBM Plex Mono | 13px | 400 | `#9CA3AF` |
| `.tab-btn` | IBM Plex Mono | 11px | 700 | `#6B7280` / `#E8E0D0` active |

#### Citation & Metadata

| Element | Font | Size | Weight | Colour |
|---------|------|------|--------|--------|
| Citation label | IBM Plex Mono | 0.58rem (~9px) | 400 | `rgba(255,255,255,0.35)` |
| Citation text | IBM Plex Mono | 0.68rem (~11px) | 400 | `rgba(232,228,220,0.75)` |
| DOI link | IBM Plex Mono | 0.68rem | 400 | `#B5923A` or `#E8B84B` |
| Research integrity label | IBM Plex Mono | 0.6rem | 400 | `#555555` (light pages) |
| Research integrity link | IBM Plex Mono | 0.68rem | 400 | `#1a1a2e` (light pages) / `rgba(232,228,220,0.90)` (dark pages) |

---

### 2.3 Heading Hierarchy by Page Type

**Briefing pages** (white panel on dark page):
```
h1  →  .doc-content h1  →  20px, 700, Libre Baskerville, gold underline
h2  →  .doc-content h2  →  17px, 700, Libre Baskerville
h3  →  .doc-content h3  →  13px, 600, IBM Plex Sans, uppercase
```

**Main site pages** (main.css defaults):
```
h1  →  2.2rem (~35px), line-height 1.2
h2  →  1.6rem (~26px), line-height 1.25
h3  →  1.2rem (~19px), line-height 1.3
```

**Dashboard pages** (dark theme):
```
Title  →  21–24px, 600–700, EB Garamond
Section h2  →  14–15px, 700, IBM Plex Sans or EB Garamond
Section h3  →  13px, 700, EB Garamond
```

---

## 3. Spacing System

### 3.1 Standard Padding

| Context | Value | Class / Element |
|---------|-------|-----------------|
| Site header | `0 40px` (desktop: `0 48px`) | `.site-header` |
| Page hero | `36px 40px 32px` (desktop: `48px 48px 40px`) | `.page-hero` |
| Main content area | `48px 40px 80px` (desktop: `56px 48px 96px`) | `.main-content` |
| Briefing header | `28px 40px 24px` | `.doc-header` |
| Briefing body panel | `40px 48px` (mobile: `28px 20px 60px`) | `.doc-body` |
| Research card | `16px 18px 14px` | `.doc-card`, `.vis-card` |
| Filter button | `6px 14px` | `.filter-btn` |
| Site footer | `22px 40px` (desktop: `26px 48px`) | `.site-footer` |
| Key Findings block | `24px 28px` | `.key-findings` |
| Dashboard page header | `14px 32px 18px` or `28px 36px 20px` | `.page-header` |
| Dashboard content | `24px 32px 40px` | `.content` |
| Primary source meta panel | `18px 24px` | `.meta-panel` |

### 3.2 Standard Margins

| Context | Value |
|---------|-------|
| Section-to-section | `28px` – `40px` |
| Between card grid and next section | `28px` – `48px` |
| `.section-label` bottom | `18px` |
| `.doc-content p` bottom | `16px` |
| `.doc-content h1` | `36px 0 12px` |
| `.doc-content h2` | `28px 0 10px` |
| Content centering | `0 auto` on all `.main-content`, `.header-inner`, `.footer-inner` |

### 3.3 Border Radius

| Value | Used on |
|-------|---------|
| `2px` | Filter buttons, small UI elements, research pills |
| `3px` | Research cards (`.doc-card`), vis-cards, primary source cards |
| `4px` | Key Findings block, `.doc-body`, inline tag pills, dashboard cards |
| `6px` | Larger callout boxes, stat callout cards, mechanism cards |
| `8px` | Visualisation SVG wrappers, some dashboard boxes |
| `12px` | Small badge/pill elements in some dashboards |
| `20px` | Rounded filter pills (active timeline filters) |
| `50%` | Dot markers on timelines |

### 3.4 Standard Gap Values

| Value | Used on |
|-------|---------|
| `8px` | Footer inner gap, small element gaps |
| `10px` | Section label icon gap, small grids |
| `12px` | Logo gap, citation box gaps |
| `14px` | Card grid gap (mobile) |
| `16px` | Standard card grid gap |
| `20px` | Grid/flex gap in content sections |
| `24px` | Gap between major content blocks |
| `28px` | Main navigation gap |

---

## 4. Component Inventory

### 4.1 Research Card

Used on: `research.html` (browse grid), `index.html` (featured)

```html
<a href="path/to/briefing.html" class="doc-card">
  <div class="doc-card-top">
    <span class="doc-theme-pill t-econ">Economics</span>
    <span class="doc-id">DOC-A1</span>
  </div>
  <h3 class="doc-title">Card title</h3>
  <p class="doc-desc">Short descriptor sentence.</p>
  <div class="doc-card-footer">
    <span class="doc-format">Briefing</span>
    <span class="doc-arrow">→</span>
  </div>
</a>
```

**Key CSS:**
- Background: `#ffffff`
- Border: `1px solid rgba(26,26,46,0.12)`, `border-left: 3px solid #c9a84c`
- Border-radius: `3px`
- Padding: `16px 18px 14px`
- Height: `420px` (fixed, flex column)
- Hover: `box-shadow: 0 4px 16px rgba(0,0,0,0.15)`, `translateY(-2px)`
- `.doc-title`: Libre Baskerville, 20px, 600, `#1a1a2e`
- `.doc-desc`: 13px, `#3a3a4a`
- `.doc-theme-pill`: IBM Plex Mono, 11px, uppercase; background `rgba(201,168,76,0.15)`, color `#c9a84c`, border `rgba(201,168,76,0.4)`
- `.doc-id`: IBM Plex Mono, 9px, `#8a6f2e`

---

### 4.2 Visualisation Card

Used on: `data.html`

```html
<a href="dashboards/example.html" class="vis-card">
  <div class="vis-card-top">
    <span class="vis-tag">Visual · Interactive</span>
    <span class="vis-id">DOC-A7</span>
  </div>
  <div class="vis-title">Card title</div>
  <p class="vis-desc">Description text.</p>
  <div class="vis-card-footer">
    <span class="vis-label">Economics</span>
    <span class="vis-arrow">→</span>
  </div>
</a>
```

**Key CSS:** Same white card, gold left border as research card. `.vis-tag` uses `rgba(122,92,13,0.15)` / `#7a5c0d` (brown-gold). `.vis-title`: Libre Baskerville, 20px, 600, `#1a1a2e`. `.vis-desc`: 12px, `#3a3a4a`.

---

### 4.3 Stat Callout Banner

Used on: `index.html` stats strip (light background)

```html
<div class="stats-strip">
  <div class="stats-inner">
    <div class="section-label" style="color:var(--gold);">Platform metrics</div>
    <div class="stats-grid">
      <a href="..." class="stat-block">
        <div class="stat-number">464</div>
        <div class="stat-underline"></div>
        <div class="stat-label">Verified incidents</div>
        <span class="stat-cta">Explore data →</span>
      </a>
    </div>
  </div>
</div>
```

**Key CSS:**
- `.stats-strip`: background `#f7f5f1`, padding `2rem 3rem`
- `.stat-number`: Playfair Display, `clamp(1.6rem, 2.5vw, 2.2rem)`, color `#253545`
- `.stat-underline`: `width: 24px; height: 2px; background: #E8B84B`
- `.stat-label`: IBM Plex Mono, 0.65rem, uppercase, `rgba(13,24,40,0.6)`
- `.stat-cta`: IBM Plex Mono, 0.58rem, `#B5923A`

---

### 4.4 Key Findings Block

Used on: all `briefings/*.html` pages

```html
<div class="key-findings"
     style="background:#0d1b2a !important;border-left:3px solid #c9a84c !important;padding:24px 28px !important;border-radius:4px !important;">
  <span class="key-findings-label"
        style="color:#c9a84c !important;">Key findings</span>
  <ul>
    <li style="color:#e8eaf0 !important;">First finding.</li>
    <li style="color:#e8eaf0 !important;">Second finding.</li>
    <li style="color:#e8eaf0 !important;">Third finding.</li>
  </ul>
</div>
```

**Key CSS** (in per-page `<style>` block):
```css
.key-findings          { background: #0d1b2a !important; border-left: 3px solid #c9a84c !important;
                         padding: 24px 28px !important; border-radius: 4px !important; margin-bottom: 2rem !important; }
.key-findings-label    { color: #c9a84c !important; font-family: 'IBM Plex Mono', monospace;
                         font-size: 0.62rem; text-transform: uppercase; letter-spacing: 0.15em; }
.key-findings li       { color: #e8eaf0 !important; font-family: 'Source Serif 4', Georgia, serif;
                         font-size: 0.88rem; font-weight: 300; line-height: 1.55; }
.key-findings li::before { content: "■"; color: #c9a84c; font-size: 0.4rem; margin-right: 0.6rem; }
```

> **Important:** `!important` declarations are required on background, color, and border-left. The block sits inside a white `.doc-body` panel; without `!important`, inherited colours from `.doc-content` can bleed through.

> **Footnote conflict warning:** If a briefing page includes a `.doc-footnotes` section, its CSS rule `.doc-footnotes li { color: var(--muted) }` can conflict with `.key-findings li` styling. Fix: apply background, text colour, and border as plain `style=""` attributes directly on the Key Findings container and its `<li>` elements. Plain inline styles have specificity `1,0,0,0` and unconditionally beat any class-based rule without needing `!important`.

---

### 4.5 Filter Pill — Active State

```html
<button class="filter-btn active">All</button>
```

```css
.filter-btn.active {
  background: var(--color-primary);   /* #B5923A */
  border-color: var(--color-primary);
  color: #fff;
}
```

---

### 4.6 Filter Pill — Inactive State

```html
<button class="filter-btn">Economics</button>
```

```css
.filter-btn {
  background: transparent;
  border: 1px solid var(--color-mid);   /* rgba(255,255,255,0.15) */
  color: var(--color-text);
  padding: 6px 14px;
  border-radius: 2px;
  font-size: 14px;
}
.filter-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
```

---

### 4.7 Back Navigation Link

Used on: all `briefings/*.html` and `dashboards/*.html`

**Briefing variant** (inline style, outside `.doc-body`):
```html
<a href="../research.html"
   style="display:block;max-width:800px;margin:12px auto 0;padding:0 48px;
          color:#c9a84c;font-size:13px;font-variant:small-caps;
          text-decoration:none;font-family:'IBM Plex Mono',monospace;">
  &#8592; Back to Research
</a>
```

**Dashboard variant** (CSS class):
```html
<a class="back-link" href="../research.html">&#8592; Back to Research</a>
```

```css
.back-link {
  display: inline-block;
  color: #c9a84c;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  font-variant: small-caps;
  text-decoration: none;
  margin-bottom: 12px;
  letter-spacing: 0.04em;
}
.back-link:hover { text-decoration: underline; }
```

---

### 4.8 Section Heading with Gold Rule

From `main.css`:

```html
<div class="section-label">Section title</div>
```

```css
.section-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.section-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--color-mid);
}
```

---

### 4.9 DOI Link Style

Used in citation blocks and doc-footer:

```html
<a href="https://doi.org/10.5281/zenodo.XXXXXXX"
   target="_blank" rel="noopener noreferrer"
   style="color:#B5923A;text-decoration:none;">
  https://doi.org/10.5281/zenodo.XXXXXXX
</a>
```

- Font: IBM Plex Mono
- Size: 0.68rem (~11px)
- Colour: `#B5923A` or `#E8B84B` (gold variants)
- No underline by default; underline on hover

---

### 4.10 Tag / Theme Pill by Type

**Research theme pill** (research cards, research.html):
```html
<span class="doc-theme-pill t-econ">Economics</span>
```
```css
.doc-theme-pill {
  font-family: IBM Plex Mono; font-size: 11px; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 3px 7px; border-radius: 2px;
  background: rgba(201,168,76,0.15);
  color: #c9a84c;
  border: 1px solid rgba(201,168,76,0.4);
}
```

**Briefing theme pill** (eyebrow row in briefing header):
```html
<span class="theme-pill" style="background:rgba(255,255,255,0.08);color:rgba(181,146,58,0.75);">
  Economics
</span>
```

**Format tag** (data.html vis-card):
```html
<span class="vis-tag">Visual · Interactive</span>
```
```css
.vis-tag { background: rgba(122,92,13,0.15); color: #7a5c0d; font-size: 8px; }
```

**Severity badge** (dark dashboards):
```html
<span style="color:#8B1A1A;background:#fff0ed;padding:2px 8px;border-radius:3px;font-size:10px;font-weight:700;">
  Critical
</span>
```

---

### 4.11 Hero Section

Used on: `index.html`

```html
<section class="site-hero">
  <div class="hero-inner">
    <div class="hero-eyebrow">CSNS / KCL · War Studies</div>
    <h1 class="hero-title">Occupied Territories — Research & Data</h1>
    <p class="hero-desc">Description text.</p>
    <div class="hero-actions">
      <a href="research.html" class="btn-primary">Browse research</a>
      <a href="data.html" class="btn-ghost">Explore data</a>
    </div>
  </div>
</section>
```

**Key CSS:** background `var(--navy-deep)`, padding `4rem 3rem`, border-bottom `3px solid var(--gold)`.

---

### 4.12 Site Footer

```html
<footer class="site-footer">
  <div class="footer-inner">
    <span>© 2026 TOT Insights / King's College London</span>
    <a href="privacy.html">Privacy Notice</a>
  </div>
</footer>
```

**Key CSS:**
- Background: `var(--color-dark)` = `#0a1628`
- Border-top: `2px solid var(--color-accent)` = `#B5923A`
- Padding: `22px 40px`
- Text: 11px, `rgba(255,255,255,0.65)`
- Links: `rgba(255,255,255,0.38)` → hover `rgba(255,255,255,0.7)`

**Dashboard page footer** (monospace label, not `.site-footer`):
```html
<div class="page-footer">
  TOT INSIGHTS · UKRAINE &amp; RUSSIA PROGRAMME · CSNS / KCL · April 2026
</div>
```
- Font: IBM Plex Mono, 11px, `rgba(232,234,240,0.40)`
- Border-top: `1px solid rgba(255,255,255,0.08)` or `1px solid #1A2F1A`

---

### 4.13 Research Integrity Section

Used at the bottom of every briefing page and most dashboard pages.

**Standard pattern:**
```html
<div style="border-top:1px solid rgba(26,26,26,0.1);padding-top:1.25rem;margin-top:2rem;">
  <div style="font-family:'IBM Plex Mono',monospace;font-size:0.6rem;text-transform:uppercase;
              letter-spacing:0.12em;color:#555555;margin-bottom:0.4rem;">
    Research integrity
  </div>
  <a href="mailto:totinsights@proton.me?subject=Correction%20%E2%80%94%20[TITLE]%20%E2%80%94%20TOT%20Insights&body=..."
     style="font-family:'IBM Plex Mono',monospace;font-size:0.68rem;color:#1a1a2e;text-decoration:none;"
     onmouseover="this.style.textDecoration='underline'"
     onmouseout="this.style.textDecoration='none'">
    Flag an error or submit a correction →
  </a>
  <p style="font-family:'Source Serif 4',serif;font-size:0.75rem;color:#555555;margin-top:0.5rem;">
    Corrections are reviewed by the research team and incorporated into the next update.
  </p>
</div>
```

> **Colour note:** "Research integrity" label and paragraph text use `#555555`. The "Flag an error" link uses `#1a1a2e` on **light-background pages** (`mariupol_utility_tariffs.html`, `zaporizhzhia_movement_trends.html`). On dark-background pages (briefings), the link uses `rgba(232,228,220,0.90)`.

---

### 4.14 Citation Block

**Briefing variant:**
```html
<div style="background:rgba(61,102,120,0.05);border-left:2px solid rgba(122,172,190,0.5);
            padding:0.75rem 1rem;margin-bottom:1.5rem;">
  <div style="font-family:'IBM Plex Mono',monospace;font-size:0.58rem;text-transform:uppercase;
              letter-spacing:0.15em;color:rgba(232,228,220,0.55);margin-bottom:0.35rem;">
    Cite this output
  </div>
  <div style="font-family:'IBM Plex Mono',monospace;font-size:0.68rem;
              color:rgba(232,228,220,0.75);line-height:1.5;">
    McGlynn, J. et al. (2026). [Title]. TOT Insights / King's College London.
    DOI:&nbsp;<a href="https://doi.org/..." style="color:#B5923A;text-decoration:none;">
      https://doi.org/...
    </a>
  </div>
  <button onclick="..." style="font-family:'IBM Plex Mono',monospace;font-size:0.58rem;
                               border:1px solid #7AACBE;color:rgba(232,228,220,0.55);
                               background:transparent;padding:0.25rem 0.6rem;cursor:pointer;
                               margin-top:0.4rem;">
    Copy citation
  </button>
</div>
```

**Dashboard variant (CSS class):**
```css
.citation-box   { background: rgba(255,255,255,0.02); border-left: 2px solid rgba(232,184,75,0.3);
                  padding: 12px 16px; margin: 0 32px 16px; }
.citation-label { font-family: IBM Plex Mono; font-size: 0.58rem; text-transform: uppercase;
                  color: rgba(255,255,255,0.35); }
.citation-text  { font-family: IBM Plex Mono; font-size: 0.68rem; color: rgba(232,228,220,0.75); }
.citation-copy  { border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.4);
                  background: transparent; font-size: 0.58rem; }
```

---

## 5. Page Structure Patterns

### 5.1 Main Navigation Page
*(research.html, data.html, media.html, index.html)*

```
┌─────────────────────────────────────────────────┐
│  .site-header  (sticky, #0a1628, gold border)   │
├─────────────────────────────────────────────────┤
│  .page-hero  (#0D1624, eyebrow + title)         │
├─────────────────────────────────────────────────┤
│  .main-content  (max-width 1200px, 0 auto)      │
│    .section-label                               │
│    grid of .doc-card / .vis-card                │
│    ...                                          │
├─────────────────────────────────────────────────┤
│  .site-footer  (#0a1628, gold top border)       │
└─────────────────────────────────────────────────┘
```

- Page background: `#111d30`
- Loads: `main.css`, Google Fonts

---

### 5.2 Briefing Page
*(briefings/*.html)*

```
┌─────────────────────────────────────────────────┐
│  .doc-header  (#0a1628, gold bottom border)     │
│    .doc-eyebrow  (theme pills + doc ID)         │
│    .doc-title                                   │
│    last-updated meta line                       │
│    citation-box (inline style)                  │
│    .doc-descriptor (gold left-border pullquote) │
├─────────────────────────────────────────────────┤
│  Back to Research link (gold, small-caps)       │
├─────────────────────────────────────────────────┤
│  <main class="doc-body">                        │
│    (#f8f9fb white panel, max-width 800px)       │
│    <div class="doc-content">                    │
│      .key-findings  (#0d1b2a, gold border)      │
│      h1 / h2 / h3 / p / ul / table / blockquote│
│    </div>                                       │
│    research-integrity section (inline styles)   │
│    .doc-footer (monospace, muted gold)          │
│  </main>                                        │
└─────────────────────────────────────────────────┘
```

- Page background: `#111d30`
- Content panel: `#f8f9fb`, max-width 800px
- Loads: `main.css`, Google Fonts

---

### 5.3 Dark Dashboard Page
*(dashboards/shadow_fleet_v2.html, kiriyenko.html, znpp.html, etc.)*

```
┌─────────────────────────────────────────────────┐
│  .page-header  (#0F1F3D or gradient)            │
│    .back-link (gold, small-caps)                │
│    .page-eyebrow (IBM Plex Mono, gold)          │
│    .page-title  (.doc-title size)               │
│    .page-subtitle                               │
├─────────────────────────────────────────────────┤
│  [citation-box — optional]                      │
├─────────────────────────────────────────────────┤
│  summary-strip  (#1A2D4A or #0A150A)            │
│    .summary-item × N  (stat figures in gold)    │
├─────────────────────────────────────────────────┤
│  .tab-bar  (dark bg, gold underline on active)  │
├─────────────────────────────────────────────────┤
│  .content  (padding: 24px 32px 40px)            │
│    .panel.active  (one panel visible at a time) │
│    ...content, charts, cards...                 │
├─────────────────────────────────────────────────┤
│  research-integrity section                     │
├─────────────────────────────────────────────────┤
│  .page-footer  (IBM Plex Mono, muted)           │
└─────────────────────────────────────────────────┘
```

- Page background: `#111d30`
- No white content panel — everything on dark background
- Loads: Google Fonts (no `main.css` site nav)

---

### 5.4 Light-Body Dashboard Page
*(dashboards/mariupol_utility_tariffs.html, zaporizhzhia_movement_trends.html)*

```
┌─────────────────────────────────────────────────┐
│  Back to Research link (gold, inline style)     │
├─────────────────────────────────────────────────┤
│  .wrap  (max-width 760–820px, 0 auto)           │
│    .label-bar  (category label, 11px, #888)     │
│    h1  (22px, normal weight, #1a1a1a)           │
│    last-updated / citation box                  │
│    .subtitle  (italic)                          │
│    .callout  (red left-border callout)          │
│    .legend                                      │
│    .chart-area  (Chart.js canvas)               │
│    .annotation                                  │
│    .source                                      │
│  research-integrity section                     │
└─────────────────────────────────────────────────┘
```

- Page background: `#fafaf8` or `#f8f9fb` (light cream)
- No site navigation bar
- All text uses dark colours on light background
- Loads: Chart.js from cdnjs, Google Fonts

> **Critical:** Research integrity link must use `color:#1a1a2e` not the dark-theme cream colour. Do not copy the dark-page integrity section template directly onto these pages.

---

### 5.5 Data Visualisation Page
*(dashboards/bri_visualisations.html, china_road_visualisations.html, george_oil_visualisations.html)*

```
┌─────────────────────────────────────────────────┐
│  Back-link strip  (#111d30 bar, gold link)      │
├─────────────────────────────────────────────────┤
│  header.site-header  (dark gradient)            │
│    .label  (org label)                          │
│    h1  (Libre Baskerville, clamp size)          │
│    last-updated meta line                       │
│    .subtitle  (description)                     │
│    .meta  (source line, faded)                  │
├─────────────────────────────────────────────────┤
│  nav.viz-nav  (section anchors)                 │
├─────────────────────────────────────────────────┤
│  <main>  (max-width 900px, 0 1.5rem 4rem)       │
│    <section class="viz-section" id="...">       │
│      .section-kicker  (number + tag)            │
│      h2  (section heading)                      │
│      .description  (intro paragraph)            │
│      .svg-wrap  (SVG container)                 │
│      .caption                                   │
│      .desc-panel  (expandable detail)           │
│    </section>                                   │
│  </main>                                        │
├─────────────────────────────────────────────────┤
│  <footer>  (source attribution)                 │
└─────────────────────────────────────────────────┘
```

- Page background: `#111d30` or similar dark
- Content rendered directly on dark background (no white panel)

---

### 5.6 Primary Source Document Page
*(primary-sources/mariupol-admin-2026/doc-*.html)*

```
┌─────────────────────────────────────────────────┐
│  .site-header (main nav, from main.css)         │
├─────────────────────────────────────────────────┤
│  .page-hero  (eyebrow + title)                  │
├─────────────────────────────────────────────────┤
│  .main-content                                  │
│    .meta-panel  (#0a1628, grid of metadata)     │
│    .source-note  (italic, gold left border)     │
│    summary paragraph                            │
│    .doc-tab-bar  (Original / Translation tabs)  │
│    .doc-tab-panel  (tab content)                │
│      .translation-notice  (#FBE9A8 callout)     │
│      .translation-body  (structured content)   │
├─────────────────────────────────────────────────┤
│  .site-footer                                   │
└─────────────────────────────────────────────────┘
```

- Uses full `main.css` site navigation
- Loads: `main.css`, Google Fonts

---

## 6. Colour Usage Rules

### 6.1 When to use dark navy background vs white content panel

**Use dark navy (`#111d30`) as the entire page background when:**
- Building a dashboard with multiple tabs and interactive charts
- The page has its own custom header and no site navigation bar
- Content is data-heavy with stat strips, tab bars, and colour-coded elements
- Examples: `shadow_fleet_v2.html`, `kiriyenko.html`, `znpp.html`, `bri_visualisations.html`

**Use white content panel (`.doc-body`, background `#f8f9fb`) inside dark page when:**
- The page is a written briefing/analytical report
- Content is primarily prose with headings, tables, and footnotes
- You want print-like readability for long-form text
- Examples: all `briefings/*.html`

**Use light background for the entire page (`#fafaf8`, `#f8f9fb`) when:**
- The dashboard is a simple chart or table (1–2 visualisations, no tabs)
- The content is designed to be printed or shared
- The target audience is policy/formal contexts requiring document-style presentation
- Examples: `mariupol_utility_tariffs.html`, `zaporizhzhia_movement_trends.html`

---

### 6.2 When to use gold vs light text

| Context | Use gold (`#c9a84c` / `#B5923A`) | Use light text (`rgba(232,228,220,0.90)`) |
|---------|----------------------------------|-------------------------------------------|
| Body text on dark | ✗ Never | ✓ Always |
| Eyebrow labels on dark | ✓ Yes | ✗ No |
| Back-link | ✓ Always | ✗ No |
| DOI/citation links | ✓ Gold | ✗ No |
| Active tab underline | ✓ Gold border | ✗ No |
| Key Findings label | ✓ Gold | ✗ No |
| Key Findings bullets | ✗ No | ✓ Light grey `#e8eaf0` |
| Stat figures (dark bg) | ✓ Gold | ✗ No |
| Section divider rule | ✓ Gold (`var(--color-mid)` for subtle) | ✗ No |
| Primary CTA button | ✓ Gold fill, dark text | ✗ No |
| Navigation links (hover/active) | ✗ No | ✓ White |

---

### 6.3 How Key Findings blocks should be styled on light vs dark backgrounds

The Key Findings block **always** renders dark-on-dark (dark navy block inside a white or dark panel):

| Scenario | Correct styling |
|----------|----------------|
| Inside white `.doc-body` (`#f8f9fb`) | Background `#0d1b2a`, text `#e8eaf0`, gold border — creates deliberate dark inset |
| On a dark page background | Same: background `#0d1b2a`, text `#e8eaf0`, gold border |
| Never | Do NOT use transparent or amber background (`rgba(232,184,75,0.06)`) — text becomes invisible on white |

The `!important` flag is required on all Key Findings colour declarations because:
- `.doc-body { color: #1a1a2e }` inherits to all children
- `.doc-content li` can override `.key-findings li` at equal specificity
- Inline styles with `!important` on the div and each `<li>` guarantee correct rendering

---

### 6.4 Text colour on light-background pages

On pages with `body { background: #fafaf8 }` or `#f8f9fb`:

| Element | Correct colour |
|---------|---------------|
| Body text | `#1a1a1a` or `#1a1a2e` |
| Heading h1 | `#1a1a1a` or `#1a1a2e` |
| Subtitle | `#5a5a5a` |
| Annotation / source | `#888` or `#aaa` |
| Research integrity label | `#555555` |
| Research integrity link | `#1a1a2e` (NOT cream rgba) |
| Research integrity note | `#555555` |

> **Critical pitfall:** Do NOT copy the dark-page `rgba(232,228,220,0.90)` text colour onto light-background pages. Cream text on cream background is invisible.

---

*Style guide generated from source analysis of `tot-insights-site/`, June 2026.*
