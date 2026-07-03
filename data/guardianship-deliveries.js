// Russian Regional Guardianship (Шефство) Programme — Delivery Scorecard data
// SINGLE SOURCE OF TRUTH for BOTH the Delivery Scorecard tab AND the territorial map
// on dashboards/guardianship.html. Loaded via <script src="../data/guardianship-deliveries.js">.
//
// Source of record: "Copy of russia_guardianship_programme.xlsx"
//   - sheet "2. Promised vs Delivered"  -> recipient / donor / sector / status
//   - sheet "1. City-District Pairings" -> fuller pairing list (cross-checked)
//
// One row per scorecard entry. Columns:
//   recipient — the OCCUPIED Ukrainian settlement that received the assistance
//   donor     — the Russian donor region (the giver)
//   sectors   — sector(s) of the promised assistance
//   status    — delivery status: '✓' confirmed · '~' partial/disputed · '✗' not delivered · '?' unclear
//   lat, lon  — coordinates of the recipient settlement, used to plot the point on the map.
//               null = not plotted (either an area set aside, see `aside`, or awaiting confirmation).
//   check     — true = coordinate is a best guess that NEEDS VERIFICATION before it is trusted.
//   aside     — true = entry is an AREA, not a single place; no point is drawn, it is listed to the
//               side of the map instead.
//
// Editorial decisions:
//   • Moscow (city) funds two cities — split into two rows (Donetsk, Luhansk).
//   • "Far East bloc (Sakhalin Oblast)" and "Kupyansk area" are areas -> aside:true, listed to the side.
const GUARDIANSHIP_DELIVERIES = [
  {recipient:'Donetsk (DPR)',                donor:'Moscow (city)',                  sectors:'Infrastructure, housing, utilities',   status:'~', lat:48.015, lon:37.803},
  {recipient:'Luhansk (LPR)',                donor:'Moscow (city)',                  sectors:'Infrastructure, housing, utilities',   status:'~', lat:48.574, lon:39.308},
  {recipient:'Mariupol (DPR)',               donor:'St Petersburg (city)',           sectors:'Housing, civic, cultural',             status:'~', lat:47.095, lon:37.543},
  {recipient:'Makiivka (DPR)',               donor:'Sverdlovsk Oblast',              sectors:'Social infrastructure',               status:'?', lat:48.048, lon:37.926},
  {recipient:'Horlivka (DPR)',               donor:'Kemerovo Oblast (Kuzbass)',      sectors:'Social infrastructure',               status:'✗', lat:48.333, lon:38.067},
  {recipient:'Yenakiieve (DPR)',             donor:'Leningrad Oblast',               sectors:'Education',                           status:'?', lat:48.230, lon:38.207},
  {recipient:'Yasynuvata (DPR)',             donor:'Chelyabinsk Oblast',             sectors:'Infrastructure',                      status:'?', lat:48.125, lon:37.858},
  {recipient:'Amvrosiivka district (DPR)',   donor:'Amur Oblast',                    sectors:'Social infrastructure, roads, water', status:'✓', lat:47.792, lon:38.478},
  {recipient:'Debaltseve (DPR)',             donor:'Khabarovsk Krai',                sectors:'Social infrastructure',               status:'✓', lat:48.342, lon:38.408},
  {recipient:'Kirovske (DPR)',               donor:'Yakutia (Republic of Sakha)',    sectors:'Social infrastructure',               status:'✓', lat:48.238, lon:38.283, check:true},
  {recipient:'Various DNR settlements',      donor:'Far East bloc (Sakhalin Oblast)',sectors:'Social infrastructure',               status:'✓', lat:null,   lon:null,   aside:true},
  {recipient:'Pervomaysk / Manhush (DPR)',   donor:'Kursk Oblast',                   sectors:'Roads, social infrastructure',        status:'~', lat:47.050, lon:37.290, check:true},
  {recipient:'Brianka (LPR)',                donor:'Bryansk Oblast',                 sectors:'Utilities, social',                   status:'~', lat:48.513, lon:38.667},
  {recipient:'Severodonetsk + districts (LPR)',donor:'Perm Krai',                    sectors:'Infrastructure, social',              status:'~', lat:48.948, lon:38.492, check:true},
  {recipient:'Melitopol (Zaporizhzhia)',     donor:'Arkhangelsk Oblast',             sectors:'Infrastructure, utilities, cultural', status:'✗', lat:46.843, lon:35.367},
  {recipient:'Rovenky (LPR)',                donor:'Komi Republic',                  sectors:'Social infrastructure',               status:'✗', lat:48.083, lon:39.383},
  {recipient:'Alchevsk (LPR)',               donor:'Vologda Oblast',                 sectors:'Social infrastructure',               status:'✗', lat:48.470, lon:38.813},
  {recipient:'Stanychno-Luhanska (LPR)',     donor:'Volgograd Oblast',               sectors:'Social infrastructure',               status:'?', lat:48.653, lon:39.478},
  {recipient:'Chistyakove / Torez (DPR)',    donor:'Primorsky Krai',                 sectors:'Social infrastructure, water',        status:'~', lat:48.017, lon:38.617},
  {recipient:'Kupyansk area (Kharkiv Oblast)',donor:'Krasnodar Krai',                sectors:'Humanitarian, administrative',        status:'~', lat:null,   lon:null,   aside:true},
];
