/* TOT Insights — shared Chart.js defaults
   Implements docs/STYLE_GUIDE.md rule 5 for every chart at once.

   Load AFTER Chart.js and BEFORE any `new Chart(...)` call:
     <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script>
     <script src="assets/js/chart-defaults.js"></script>

   Then build charts as normal — these defaults apply automatically:
   Garamond labels, dark legible text, no borders/fills/shadows, faint
   gridlines, and a gold accent as the default single series.

   For colour, use the house palette instead of ad-hoc colours:
     backgroundColor: TOT.color(0)          // gold accent
     backgroundColor: data.map((_, i) => TOT.color(i))   // multi-category
     borderColor: TOT.statusColors.confirmed // meaning: green/amber/red
*/
(function () {
  if (typeof Chart === 'undefined') {
    console.warn('[TOT] chart-defaults.js loaded before Chart.js — skipping.');
    return;
  }

  var css = getComputedStyle(document.documentElement);
  var v = function (name, fallback) {
    var val = css.getPropertyValue(name).trim();
    return val || fallback;
  };

  var SERIF   = "'EB Garamond', Georgia, serif";
  var navy    = v('--navy',    '#111d30');
  var grey900 = v('--grey-900', '#2a2a3a');
  var grey500 = v('--grey-500', '#6b6b78');
  var grey300 = v('--grey-300', '#cfccc4');
  var gold    = v('--gold',    '#c9a84c');

  var statusColors = {
    confirmed: v('--status-confirmed', '#3f7d5a'),
    partial:   v('--status-partial',   '#b8862b'),
    negative:  v('--status-negative',  '#a23b34')
  };

  /* House palette: gold accent first, then muted, colourblind-safe tones.
     Only reach past index 0 when categories genuinely need distinguishing. */
  var palette = [
    gold,
    navy,
    statusColors.confirmed,
    statusColors.partial,
    statusColors.negative,
    grey500
  ];

  /* Disable Chart.js v4's bundled auto-Colors plugin so datasets without an
     explicit colour fall back to the gold house accent, not its blue palette. */
  if (Chart.defaults.plugins && Chart.defaults.plugins.colors) {
    Chart.defaults.plugins.colors.enabled = false;
  }

  /* ── Global type + colour: Garamond, dark legible labels ── */
  Chart.defaults.font.family      = SERIF;
  Chart.defaults.font.size        = 14;
  Chart.defaults.color            = grey900;   /* all labels dark, never faint grey */
  Chart.defaults.borderColor      = grey300;   /* faint default line/grid colour */
  Chart.defaults.backgroundColor  = gold;      /* gold accent = default single series */

  Chart.defaults.plugins.legend.labels.color    = grey900;
  Chart.defaults.plugins.legend.labels.boxWidth = 12;
  Chart.defaults.plugins.legend.labels.font     = { family: SERIF, size: 13 };

  Chart.defaults.plugins.title.color   = navy;
  Chart.defaults.plugins.title.font    = { family: SERIF, size: 16, weight: '600' };
  Chart.defaults.plugins.title.padding = 12;

  Chart.defaults.plugins.tooltip.titleFont = { family: SERIF, weight: '600' };
  Chart.defaults.plugins.tooltip.bodyFont  = { family: SERIF };

  /* ── Spare scales: faint gridlines, dark tick labels, no tick marks ── */
  if (Chart.defaults.scale) {
    Chart.defaults.scale.grid   = Chart.defaults.scale.grid   || {};
    Chart.defaults.scale.ticks  = Chart.defaults.scale.ticks  || {};
    Chart.defaults.scale.border = Chart.defaults.scale.border || {};
    Chart.defaults.scale.grid.color     = grey300;
    Chart.defaults.scale.grid.drawTicks = false;
    Chart.defaults.scale.ticks.color    = grey900;
    Chart.defaults.scale.ticks.font     = { family: SERIF, size: 13 };
    Chart.defaults.scale.border.color   = grey300;
  }

  /* ── No accidental chrome: gold accent, no bar borders ── */
  if (Chart.defaults.elements) {
    if (Chart.defaults.elements.bar) {
      Chart.defaults.elements.bar.backgroundColor = gold;
      Chart.defaults.elements.bar.borderWidth = 0;
    }
    if (Chart.defaults.elements.line) {
      Chart.defaults.elements.line.borderColor = gold;
      Chart.defaults.elements.line.borderWidth = 2;
    }
    if (Chart.defaults.elements.point) {
      Chart.defaults.elements.point.backgroundColor = gold;
    }
    if (Chart.defaults.elements.arc) {
      Chart.defaults.elements.arc.borderColor = v('--cream-panel', '#f2f0ec');
      Chart.defaults.elements.arc.borderWidth = 1;
    }
  }

  /* ── Expose helpers for pages ── */
  window.TOT = window.TOT || {};
  window.TOT.chartColors  = palette;
  window.TOT.statusColors = statusColors;
  window.TOT.color = function (i) { return palette[i % palette.length]; };
})();
