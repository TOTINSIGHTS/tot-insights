/* Data page manifest: one entry per data collection, rendered by data.html.
 *
 * This is the ONE place the Data page's counts, coverage and links live. When a
 * database grows, change `size.n` here (and the download date if the file was
 * re-exported). Bump `datasets.js?v=N` in data.html after editing.
 *
 * Fields
 *   title      Collection name as readers know it.
 *   kind       "database" (searchable records) | "dashboard" (several tabs) | "chart" (one visual or map).
 *   themes     Exact site theme tags (first = primary).
 *   territories  Any of: Donetsk, Luhansk, Zaporizhzhia, Kherson, Crimea.
 *   place      Optional city, shown before the oblast (e.g. Mariupol).
 *   size       { n: number, unit: "people" } or omit.
 *   covers     Time span as a phrase, or omit.
 *   finding    One sentence that states the finding with its number (house rule).
 *   details    Optional longer description, shown under "What's in it".
 *   tasks      Which question tiles list it: "who" | "trend" | "words" | "voices".
 *   updated    Optional cadence badge, only where the cadence is real (e.g. "Updated monthly").
 *   views      [ [button label, href], ... ]; the first is the primary button.
 *   download   [ format, href, version label ] or omit.
 *
 * Order = the "Suggested" sort order: living searchable databases first.
 *
 * Hidden pending review (do not add back without Jade's OK):
 *   George Oil visualisations, dashboards/george_oil_visualisations.html (DOC-J1).
 */
window.TOT_DATASETS = [
  {
    title: "Occupation Officials Database", kind: "database",
    themes: ["Governance", "Accountability and Legal"],
    territories: ["Donetsk", "Luhansk", "Zaporizhzhia", "Kherson", "Crimea"],
    size: { n: 1166, unit: "people" },
    finding: "1,166 individuals serving in administrative and governmental roles across the occupied territories.",
    details: "Searchable by name, territory, level of government, status and origin.",
    tasks: ["who"],
    views: [["Search the database", "officials.html"]],
    download: ["CSV", "assets/downloads/tot-officials-database-september2026.csv", "September 2026"]
  },
  {
    title: "Civilian Detainees Database", kind: "database",
    themes: ["Accountability and Legal", "Civilian Life and Resistance"],
    territories: ["Donetsk", "Luhansk", "Zaporizhzhia", "Kherson", "Crimea", "Kharkiv"],
    size: { n: 5880, unit: "people" }, covers: "2014 to 2026",
    finding: "5,880 Ukrainian civilians detained by Russian forces or charged and sentenced by Russian and Russian-installed courts, person by person.",
    details: "Home town and oblast, court, charge and articles, alleged act, sentence, what happened to them where known (release, exchange, deportation, death in custody), and every source that reported them, with each version kept where sources disagree. Searchable by oblast, crime type, stage and month.",
    tasks: ["who", "trend"], updated: "Updated monthly",
    views: [["Search the database", "civilian-detainees.html"]],
    download: ["XLSX", "data/civilian-detainees/detainees.xlsx"]
  },
  {
    title: "Sanctions Database", kind: "database",
    themes: ["Accountability and Legal"],
    territories: ["Donetsk", "Luhansk", "Zaporizhzhia", "Kherson", "Crimea"],
    size: { n: 2306, unit: "people and entities" },
    finding: "2,306 sanctioned individuals and entities across seven jurisdictions: Australia, the EU, Japan, Switzerland, the UK, the US and Ukraine.",
    details: "Searchable by name, type, territory and jurisdiction.",
    tasks: ["who"],
    views: [["Search the database", "sanctions.html"]],
    download: ["CSV", "assets/downloads/tot-sanctions-database-may2026.csv", "May 2026"]
  },
  {
    title: "Russian TOT Media", kind: "database",
    themes: ["Information Space"],
    territories: ["Donetsk", "Luhansk", "Zaporizhzhia", "Kherson", "Crimea"],
    size: { n: 22208, unit: "posts" }, covers: "Q3 2025 to Q2 2026",
    finding: "22,208 Russian media posts about the occupied territories over four quarters, each tagged by channel, region and theme with a short English summary.",
    details: "Seven chart views: theme share by quarter, theme by region, regions over time, the loudest channels, coverage over time, most-featured figures, and rising versus falling themes. The original post texts are not published; the summaries attribute the Russian narrative and are not endorsed.",
    tasks: ["words", "trend"],
    views: [["Search the posts", "tot-media-database.html"], ["Charts", "tot-media-visualisations.html"]],
    download: ["CSV", "assets/downloads/tot-media-posts-2025H2-2026H1.csv"]
  },
  {
    title: "Luhansk Occupation Press", kind: "database",
    themes: ["Information Space"],
    territories: ["Luhansk"],
    size: { n: 1102, unit: "issues" }, covers: "January 2024 to June 2026",
    finding: "One war report printed verbatim in sixteen town papers in a single week: 1,102 issues of 25 Luhansk occupation papers, indexed.",
    details: "Paper, town, date, page count and source link for every issue. The 2024 to 2025 back-catalogue was recovered from the Internet Archive after the holding purged it from its own site. Theme intensity by month, filterable by town, and short attributed excerpts with English glosses. Metadata and theme counts only; no article text is published.",
    tasks: ["words", "trend"],
    views: [["Issue index", "tot-luhansk-press-database.html"], ["Charts", "tot-luhansk-press-visualisations.html"], ["Excerpts", "tot-luhansk-press-excerpts.html"], ["Lysychansk issues (2023)", "dashboards/lysychansk_press_archive.html"]],
    download: ["CSV", "data/luhansk-press/issues_public.csv"]
  },
  {
    title: "Zaporizhzhia Occupation Press", kind: "database",
    themes: ["Information Space"],
    territories: ["Zaporizhzhia"],
    size: { n: 145, unit: "issues" },
    finding: "One holding, two registers: the official gazette carries the legal-administrative load (60 legal-register hits per page), the flagship paper carries the persuasion.",
    details: "Every issue in the ZaMedia public archive: masthead, date, issue number, page count, municipality edition and source link, across 1,212 pages and thirteen municipalities. Charts by masthead and municipality, and excerpts from the two mastheads side by side. Metadata and theme counts only; no article text is published.",
    tasks: ["words", "trend"],
    views: [["Issue index", "tot-zaporizhzhia-press-database.html"], ["Charts", "tot-zaporizhzhia-press-visualisations.html"], ["Excerpts", "tot-zaporizhzhia-press-excerpts.html"]],
    download: ["CSV", "data/zaporizhzhia-press/issues_public.csv"]
  },
  {
    title: "IDP Attitudes Survey", kind: "database",
    themes: ["Civilian Life and Resistance"],
    territories: ["Donetsk", "Luhansk", "Zaporizhzhia", "Kherson", "Crimea"],
    size: { n: 2008, unit: "respondents over two waves" }, covers: "2025 and 2026",
    finding: "In 2025, 76.4% of displaced respondents rated the Ukrainian government ineffective and 61.6% believed hidden resistance exists.",
    details: "Two waves fielded by OPERSO - Operatyvna Sotsiolohiia: 1,001 respondents in September 2025 and 1,007 in September 2026. The 2026 wave publishes all 31 questions as tables, with 2025 comparison where the question was asked. The 2025 results were corrected in October 2026.",
    tasks: ["voices", "trend"],
    views: [["2026 results", "idp-survey-2026.html"], ["2025 results", "idp-survey.html"], ["2025 dashboard", "dashboards/idp_polling.html"]],
    download: ["XLSX", "data/idp-survey/idp_survey_2026.xlsx", "2026 wave"]
  },
  {
    title: "Violent Resistance Monitoring", kind: "dashboard",
    themes: ["Civilian Life and Resistance"],
    territories: ["Donetsk", "Luhansk", "Zaporizhzhia", "Kherson", "Crimea"],
    size: { n: 555, unit: "incidents" }, covers: "December 2024 to October 2026",
    finding: "555 violent incidents across 46 fortnights, and a shift in activity from the occupied territories into Russia.",
    details: "Three tabs: the shift from the occupied territories into Russia, incident type, and region.",
    tasks: ["trend"],
    views: [["Open the dashboard", "dashboards/resistance_analytics.html"]]
  },
  {
    title: "Wage Arrears Register", kind: "database",
    themes: ["Coercion, Entrapment and Slavery", "Economics"],
    territories: ["Donetsk", "Luhansk", "Zaporizhzhia", "Kherson"],
    size: { n: 213, unit: "cases" }, covers: "April 2024 onwards",
    finding: "213 wage-arrears cases announced by occupation prosecutors in four oblasts, with employer, sector, workers owed, sum and outcome.",
    details: "Every case announced by the occupation prosecutors of Donetsk, Luhansk, Zaporizhzhia and Kherson oblasts: employer, sector, workers owed, sum, pay period, enforcement measure and reported outcome, with the source sentence and link.",
    tasks: ["who", "trend"],
    views: [["Search the register", "wage-arrears.html"]]
  },
  {
    title: "Youth Militarisation Dataset", kind: "database",
    themes: ["Education and Militarisation"],
    territories: ["Donetsk", "Luhansk", "Zaporizhzhia", "Kherson", "Crimea"],
    size: { n: 66, unit: "organisations and programmes" }, covers: "2014 to 2026",
    finding: "66 organisations, curriculum programmes, camps and structures through which Russia militarises children in the occupied territories.",
    details: "Affiliation, locality, founding date, legal status, funding, activity, participant numbers, sources and a confidence rating for each. Searchable by territory, object type and confidence.",
    tasks: ["who"],
    views: [["Search the dataset", "youth-militarisation.html"]],
    download: ["XLSX", "data/youth-militarisation/tot_youth_militarisation_dataset_en.xlsx"]
  },
  {
    title: "Mariupol Property Seizure", kind: "dashboard",
    themes: ["Civilian Life and Resistance", "Coercion, Entrapment and Slavery"],
    territories: ["Donetsk"], place: "Mariupol",
    size: { n: 8526, unit: "homes, plus about 460 commercial properties" }, covers: "20 monthly snapshots",
    finding: "8,526 residential and about 460 commercial properties listed in occupation administrative records.",
    tasks: ["trend"],
    views: [["Open the dashboard", "dashboards/mariupol_property.html"]]
  },
  {
    title: "State Grain Operator (DZO)", kind: "dashboard",
    themes: ["Economics"],
    territories: ["Zaporizhzhia", "Donetsk", "Crimea"],
    finding: "The State Grain Operator's structure, finances, export flows, personnel network and accountability indicators. Companion to the grain expropriation briefing.",
    tasks: ["who"],
    views: [["Open the dashboard", "dashboards/dzo.html"]]
  },
  {
    title: "Shadow Fleet at Mariupol Port", kind: "chart",
    themes: ["Economics"],
    territories: ["Donetsk"], place: "Mariupol",
    covers: "Autumn 2024 to spring 2026",
    finding: "Operational timeline of vessel counts and tonnage through Mariupol port. Companion to the shadow fleet briefing.",
    tasks: ["trend"],
    views: [["Open the chart", "dashboards/shadow_fleet_v2.html"]]
  },
  {
    title: "Mariupol Port Network", kind: "chart",
    themes: ["Economics"],
    territories: ["Donetsk"], place: "Mariupol",
    size: { n: 26, unit: "entities" }, covers: "2023 to 2025",
    finding: "26 companies and people and 24 links around Mariupol port, with two primary hubs identified.",
    tasks: ["who"],
    views: [["Open the network map", "dashboards/mariupol_port_network.html"]]
  },
  {
    title: "Mariupol Occupation Economy", kind: "dashboard",
    themes: ["Economics"],
    territories: ["Donetsk"], place: "Mariupol",
    finding: "73% of Mariupol's registered entities are limited companies (OOO), and no state or municipal entity filed financial data.",
    tasks: [],
    views: [["Open the dashboard", "dashboards/mariupol_economy.html"]]
  },
  {
    title: "Mariupol Budget Dynamics", kind: "chart",
    themes: ["Economics", "Governance"],
    territories: ["Donetsk"], place: "Mariupol",
    covers: "2024 to Q1 2025",
    finding: "71% of occupied Mariupol's income comes from Russian federal transfers; own-source income covers about 29%.",
    tasks: ["trend"],
    views: [["Open the chart", "dashboards/mariupol_budget_dynamics.html"]]
  },
  {
    title: "Mariupol Utility Tariffs", kind: "chart",
    themes: ["Economics", "Civilian Life and Resistance"],
    territories: ["Donetsk"], place: "Mariupol",
    size: { n: 13, unit: "utility services" }, covers: "2023 to July 2025",
    finding: "Sewerage up 71.4%, waste collection up 65 to 68% and cold water up 52.7% since 2023.",
    tasks: ["trend"],
    views: [["Open the chart", "dashboards/mariupol_utility_tariffs.html"]]
  },
  {
    title: "Market Prices, Occupied Donetsk", kind: "chart",
    themes: ["Economics", "Civilian Life and Resistance"],
    territories: ["Donetsk"],
    size: { n: 150, unit: "items" }, covers: "April and July 2026",
    finding: "A fieldwork supermarket price survey of 150+ items across six categories, priced in roubles, and a July follow-up in Mariupol: milk about 75% dearer than in Ukraine.",
    details: "April 2026: 150+ items in occupied Donetsk across six categories. July 2026: nine everyday items in one Mariupol supermarket set against Ukrainian and EU retail prices; branded coffee and biscuits a quarter to a third dearer than in Ukraine, only seasonal vegetables at or below Ukrainian prices.",
    tasks: ["trend"],
    views: [["April 2026 survey", "dashboards/prices_april_2026.html"], ["July 2026, Mariupol", "dashboards/prices_july_2026.html"]]
  },
  {
    title: "Occupation Court Sentencing, Zaporizhzhia", kind: "dashboard",
    themes: ["Accountability and Legal", "Civilian Life and Resistance", "Coercion, Entrapment and Slavery"],
    territories: ["Zaporizhzhia"],
    size: { n: 300, unit: "verdicts" },
    finding: "300 verdicts coded from the occupation court's own channel: political cases draw a median of 14 years against about 3 for ordinary crime.",
    details: "Treason, espionage, sabotage and 'extremism' cases compared with ordinary crime. Sending money to Ukraine draws 10 to 16 years regardless of the amount. Companion to the Civilian Detainees Database, which lists the people.",
    tasks: ["who", "trend"],
    views: [["Open the dashboard", "dashboards/zaporizhzhia_court_sentencing.html"], ["Civilian Detainees Database", "civilian-detainees.html"]]
  },
  {
    title: "Ghost Pensioners, Mariupol", kind: "chart",
    themes: ["Economics", "Coercion, Entrapment and Slavery", "Civilian Life and Resistance"],
    territories: ["Donetsk"], place: "Mariupol",
    finding: "About 134,600 ghost pensioners generating an estimated RUB 1.68bn a month in federal pension payments for people no longer in Mariupol.",
    details: "Pensioner population chart, key events timeline and the accountability angle. Companion to the ghost pensioners briefing.",
    tasks: [],
    views: [["Open the chart", "dashboards/ghost_pensioners_visual.html"]]
  },
  {
    title: "Departure and Return, Zaporizhzhia", kind: "chart",
    themes: ["Civilian Life and Resistance"],
    territories: ["Zaporizhzhia"],
    covers: "2022 to spring 2025",
    finding: "40% evacuated to Ukrainian-controlled territory, 30% migrated to the EU and 25% left for Russia; 5% returned in spring 2025.",
    tasks: ["trend"],
    views: [["Open the chart", "dashboards/zaporizhzhia_movement_trends.html"]]
  },
  {
    title: "Guardianship Programme", kind: "dashboard",
    themes: ["Economics", "Governance"],
    territories: ["Donetsk", "Luhansk", "Zaporizhzhia", "Kherson"],
    finding: "City-twinning pairings, promised versus delivered commitments and corruption cases: corruption is the operating mode, not an exception.",
    tasks: ["who"],
    views: [["Open the dashboard", "dashboards/guardianship.html"]]
  },
  {
    title: "Kiriyenko and the Occupation", kind: "dashboard",
    themes: ["Governance"],
    territories: ["Donetsk", "Luhansk", "Zaporizhzhia", "Kherson"],
    finding: "RUB 223 billion in federal transfers by September 2024, alongside Kiriyenko's career, domains of control, reconstruction projects and youth budget.",
    tasks: ["who"],
    views: [["Open the dashboard", "dashboards/kiriyenko.html"]]
  },
  {
    title: "ZNPP Under Occupation", kind: "chart",
    themes: ["Governance"],
    territories: ["Zaporizhzhia"],
    finding: "Rostekhnadzor licensing and the safety incident log, including the two critical Dniprovska line disconnections.",
    tasks: ["trend"],
    views: [["Open the chart", "dashboards/znpp.html"]]
  },
  {
    title: "Religious Persecution", kind: "chart",
    themes: ["Identity, Culture and Religion"],
    territories: ["Donetsk", "Luhansk", "Zaporizhzhia", "Kherson", "Crimea"],
    finding: "Suppression rates by denomination, structural destruction, displacement and Russian Orthodox Church expansion. Companion to the religious persecution briefing.",
    tasks: [],
    views: [["Open the charts", "dashboards/religious_persecution.html"]]
  },
  {
    title: "Western Road Machinery in Zaporizhzhia", kind: "chart",
    themes: ["Economics", "Accountability and Legal"],
    territories: ["Zaporizhzhia"],
    size: { n: 3, unit: "sanctioned machines" },
    finding: "Three sanctioned EU and NATO machines on the Azov military corridor, kept running by a spare-parts network through China, Turkey and Kazakhstan.",
    tasks: ["who"],
    views: [["Open the charts", "dashboards/china_road_visualisations.html"]]
  },
  {
    title: "Belt and Road in Occupied Ukraine", kind: "chart",
    themes: ["Economics", "Governance"],
    territories: ["Donetsk"],
    covers: "2018 to 2026",
    finding: "Chinese paradiplomacy reaching Mariupol State University by March 2026, and the Karansky quarry supply chain into Russian military logistics.",
    tasks: ["who"],
    views: [["Open the network map", "dashboards/bri_visualisations.html"]]
  },
  {
    title: "Russian Developer Networks", kind: "chart",
    themes: ["Economics", "Governance"],
    territories: ["Donetsk", "Luhansk", "Zaporizhzhia", "Kherson"],
    size: { n: 4, unit: "ownership clusters" },
    finding: "Four ownership clusters link construction companies in the occupied territories to their beneficial owners, centred on Etalon Group's layered subsidiaries.",
    tasks: ["who"],
    views: [["Open the network map", "dashboards/developer_network_visualisations.html"]]
  }
];
