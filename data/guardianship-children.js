// Russian Regional Guardianship (Шефство) — CHILDREN'S-PROGRAMME EVIDENCE LAYER
// Companion to data/guardianship-deliveries.js for dashboards/guardianship.html.
//
// Where guardianship-deliveries.js scores RECONSTRUCTION delivery (infrastructure,
// housing, utilities) from the "russia_guardianship_programme.xlsx" record, this file
// records the SAME donor→recipient patronage evidenced through a wholly independent
// stream: children's camps, "health" trips, school twinning and gifts, as reported in
// the occupied-Luhansk press (Luganmedia holding, 2023–2026).
//
// Analytic point: several pairings the reconstruction scorecard marks '✗ not delivered'
// or '? unclear' (notably Vologda→Alchevsk and Komi→Rovenky) are demonstrably ACTIVE in
// the children's-programme channel. Delivery, in other words, is sector-specific: the
// patron relationship is live and spending on children even where infrastructure stalls.
// See children_analysis/04_GUARDIANSHIP_CROSSREF.md for the full cross-analysis.
//
// One row per municipality. Columns:
//   recipient  — occupied-Luhansk settlement whose children are sent / hosted
//   donor      — Russian patron region(s) evidenced through children's programmes
//   evidence   — the child-facing channel ('Camps & trips', 'Gifts & school aid', etc.)
//   years      — years the activity is attested in the corpus
//   scorecard  — cross-reference to guardianship-deliveries.js:
//                the reconstruction delivery status for the same town, or 'not scored'
//   sources    — passage ids in the private corpus (children_corpus_coded.csv)
//   lat, lon   — recipient coordinates. check:true = APPROXIMATE, needs verification
//                (all newly-added towns are flagged; the four overlaps reuse the
//                 coordinates already in guardianship-deliveries.js).
//
// This layer is EVIDENCE OF ACTIVITY, not a delivery score: the occupation press is the
// source, so a claim here marks a reported, editorially-emphasised programme, not an
// independently verified outcome. Treat as an object of study.
const GUARDIANSHIP_CHILDREN = [
  {recipient:'Dovzhansk / Sverdlovsk (LPR)', donor:'Krasnoyarsk Krai (+ Khakassia, Tyva)', evidence:'Camps & trips', years:'2024–2026', scorecard:'not scored', sources:'LP01103, LP01177, LP06876', lat:48.083, lon:39.650, check:true},
  {recipient:'Alchevsk (LPR)',               donor:'Vologda Oblast',                     evidence:'Camps & trips (>700 children, 2024)', years:'2024', scorecard:'✗ not delivered (infrastructure)', sources:'LP03649, LP03565, LP03592', lat:48.470, lon:38.813},
  {recipient:'Lutuhyne (LPR)',               donor:'Ulyanovsk Oblast',                   evidence:'Camps & trips', years:'2024', scorecard:'not scored', sources:'LP02940', lat:48.412, lon:39.220, check:true},
  {recipient:'Slovianoserbsk (LPR)',         donor:'Altai Republic (+ Altai Krai)',      evidence:'Camps & trips (~500/yr)', years:'2023–2025', scorecard:'not scored', sources:'LP04934, LP04976, LP05090', lat:48.725, lon:39.078, check:true},
  {recipient:'Svatove (LPR)',                donor:'Saratov Oblast',                     evidence:'Camps & trips', years:'2024', scorecard:'not scored', sources:'LP04123, LP04125, LP04146', lat:49.412, lon:38.157, check:true},
  {recipient:'Novopskov (LPR)',              donor:'Saratov Oblast',                     evidence:'University shifts', years:'2024', scorecard:'not scored', sources:'LP03288', lat:49.535, lon:39.098, check:true},
  {recipient:'Perevalsk (LPR)',              donor:'Orenburg Oblast',                    evidence:'Camps & trips', years:'2024', scorecard:'not scored', sources:'LP03972', lat:48.438, lon:38.822, check:true},
  {recipient:'Troitske (LPR)',               donor:'Orel Oblast',                        evidence:'Camps & trips (179 children; rest + transport paid)', years:'2024–2025', scorecard:'not scored', sources:'LP06201, LP06193, LP06338', lat:49.950, lon:38.297, check:true},
  {recipient:'Markivka (LPR)',               donor:'Ivanovo Oblast',                     evidence:'Camps & trips', years:'2024', scorecard:'not scored', sources:'LP02246', lat:49.535, lon:39.567, check:true},
  {recipient:'Severodonetsk + districts (LPR)', donor:'Perm Krai',                       evidence:'Camps & trips (549 children, 2024)', years:'2024', scorecard:'~ partial (infrastructure)', sources:'LP00867, LP00964', lat:48.948, lon:38.492, check:true},
  {recipient:'Starobilsk (LPR)',             donor:'Perm Krai',                          evidence:'University shifts', years:'2024', scorecard:'not scored', sources:'LP05705', lat:49.281, lon:38.905, check:true},
  {recipient:'Sorokyne / Krasnodon (LPR)',   donor:'Kurgan Oblast; Tyumen Oblast',       evidence:'Camps & trips', years:'2024–2025', scorecard:'not scored', sources:'LP04329, LP07276, LP04420', lat:48.300, lon:39.733, check:true},
  {recipient:'Stanychno-Luhanska (LPR)',     donor:'Volgograd Oblast',                   evidence:'Camps & trips (camp «Орлёнок»)', years:'2024–2025', scorecard:'? unclear (infrastructure)', sources:'LP05347, LP05480, LP05372', lat:48.653, lon:39.478},
  {recipient:'Kadiivka / Stakhanov (LPR)',   donor:'Omsk Oblast (+ Stavropol, Tula)',    evidence:'Camps & trips (Crimea)', years:'2024–2025', scorecard:'not scored', sources:'LP05943, LP06113', lat:48.567, lon:38.640, check:true},
  {recipient:'Novoaidar (LPR)',              donor:'Tambov Oblast',                      evidence:'Camps & trips (winter shift)', years:'2025', scorecard:'not scored', sources:'LP03071', lat:48.963, lon:39.020, check:true},
  {recipient:'Bilovodsk (LPR)',              donor:'Novosibirsk Oblast',                 evidence:'Camps & trips', years:'2026', scorecard:'not scored', sources:'LP07073', lat:49.208, lon:39.588, check:true},
  {recipient:'Milove (LPR)',                 donor:'Kostroma Oblast',                    evidence:'Camps & trips (quotas)', years:'2026', scorecard:'not scored', sources:'LP07073', lat:49.372, lon:40.141, check:true},
  {recipient:'Rovenky (LPR)',                donor:'Komi Republic (+ Orenburg)',         evidence:'Camp counsellors; search-movement shift', years:'2024–2025', scorecard:'✗ not delivered (infrastructure)', sources:'LP01672, LP01467', lat:48.083, lon:39.383},
  {recipient:'Antratsyt (LPR)',              donor:'Stavropol Krai; Kalmykia',           evidence:'Camps & trips; medical trip', years:'2024–2026', scorecard:'not scored', sources:'LP00134, LP06662', lat:48.112, lon:39.089, check:true},
  {recipient:'Bilokurakyne (LPR)',           donor:'Orenburg Oblast (co-host)',          evidence:'Camps & trips (Crimea)', years:'2024–2026', scorecard:'not scored', sources:'LP00646, LP06775', lat:49.560, lon:38.680, check:true},
];
