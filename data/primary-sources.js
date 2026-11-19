/* Primary Sources registry: drives primary-sources.html (the finder).
   One entry per document or collection. To add a source, add an entry here, then bump primary-sources.js?v=N in primary-sources.html.
   id        catalogue id shown on the card (must be unique)
   short     card title, about 12 words
   title     full official title (shown in list view and as the card tooltip)
   desc      one or two sentences: the finding, not a description of the file
   year      "YYYY" of signing/publication, or "" with `undated` = "In force" | "Reference" | "Undated"
   territory any of rf, four (all four regions annexed 2022), cri, don, mar (Mariupol city; also matches Donetsk), lug, zap, khe
   issuer    any of fed (Kremlin and federal bodies), occ (occupation authorities), muni (Mariupol city administration), non (movements, firms, others)
   kind      law | decree | order | teach | record
   english   full | key | sum   (full translation / key provisions in English / English summary only); ai = AI-assisted translation
   themes    site theme tags
   questions question tiles it belongs to: annex, children, property, military, dissent, identity
   url       site-relative link to the document page or file */
window.TOT_PRIMARY_SOURCES = [
 {
"id": "DOC-154",
"short": "Admission of the \"DPR\" to Russia (Law 5-FKZ)",
"title": "Federal Constitutional Law No. 5-FKZ on the Admission of the \"Donetsk People's Republic\" to the Russian Federation, with Presidential Decree No. 705 Appointing its Acting Head (4 October 2022)",
"desc": "The admission law for the \"DPR\": citizenship by recognition (art. 5), presidential appointment of the acting Head (art. 8, exercised in Decree 705) and recognition of pre-annexation documents only (art. 12).",
"year": "2022",
"undated": "",
"territory": [
"don"
],
"issuer": [
"fed"
],
"kind": "law",
"english": "key",
"ai": true,
"themes": [
"Governance",
"Accountability and Legal",
"Civilian Life and Resistance"
],
"questions": [
"annex"
],
"url": "primary-sources/rf-annexation-laws/doc-154.html"
},
 {
"id": "DOC-155",
"short": "Admission of Kherson Oblast to Russia (Law 8-FKZ)",
"title": "Federal Constitutional Law No. 8-FKZ on the Admission of Kherson Oblast to the Russian Federation (4 October 2022)",
"desc": "The Kherson counterpart of Law 5-FKZ: admission of the whole oblast, citizenship by recognition, a Moscow-appointed acting governor and a transition regime to 2026.",
"year": "2022",
"undated": "",
"territory": [
"khe"
],
"issuer": [
"fed"
],
"kind": "law",
"english": "key",
"ai": true,
"themes": [
"Governance",
"Accountability and Legal"
],
"questions": [
"annex"
],
"url": "primary-sources/rf-annexation-laws/doc-155.html"
},
 {
"id": "DOC-158",
"short": "Martial-law procurement without tenders (Res. 2559)",
"title": "Government Resolution No. 2559 on Measures to Ensure the Martial Law Regime and Special Procurement Rules for the Occupied Territories (31 December 2022)",
"desc": "Single-supplier procurement without tender or publication for all state and municipal purchasing in the four occupied regions under martial law.",
"year": "2022",
"undated": "",
"territory": [
"four"
],
"issuer": [
"fed"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Governance",
"Economics",
"Accountability and Legal"
],
"questions": [
"annex"
],
"url": "primary-sources/rf-economic-integration/doc-158.html"
},
 {
"id": "DOC-103",
"short": "\"DPR\" constitution, 2020 text",
"title": "Donetsk People's Republic: Constitution (Consolidated Text, March 2020)",
"desc": "Constitutional foundation for the entire DPR legal order, adopted 2014 and revised through March 2020. Underpins every legislative act and executive decree in this collection.",
"year": "2020",
"undated": "",
"territory": [
"don"
],
"issuer": [
"occ"
],
"kind": "law",
"english": "key",
"ai": true,
"themes": [
"Governance",
"Accountability and Legal"
],
"questions": [
"annex"
],
"url": "primary-sources/dnr-legal-acts/doc-103.html"
},
 {
"id": "DOC-112",
"short": "Kherson accession treaty",
"title": "Treaty on the Accession of Kherson Oblast to the Russian Federation (30 September 2022)",
"desc": "Annexation treaty purporting to incorporate Kherson Oblast into the Russian Federation. Not recognised by Ukraine, the UN General Assembly (143 to 5), the EU, or the US.",
"year": "2022",
"undated": "",
"territory": [
"khe"
],
"issuer": [
"fed"
],
"kind": "law",
"english": "key",
"ai": true,
"themes": [
"Governance",
"Accountability and Legal"
],
"questions": [
"annex"
],
"url": "primary-sources/ko-zo-legal-acts/doc-112.html"
},
 {
"id": "DOC-113",
"short": "Kherson treaty ratification (Law 375-FZ)",
"title": "RF Federal Constitutional Law: Ratification of the Treaty on the Accession of Kherson Oblast (4 October 2022)",
"desc": "Ratification law making the Kherson annexation enter the Russian legal order. Article 3 declares Kherson's borders to be the state border of the Russian Federation.",
"year": "2022",
"undated": "",
"territory": [
"khe"
],
"issuer": [
"fed"
],
"kind": "law",
"english": "key",
"ai": true,
"themes": [
"Governance",
"Accountability and Legal"
],
"questions": [
"annex"
],
"url": "primary-sources/ko-zo-legal-acts/doc-113.html"
},
 {
"id": "DOC-114",
"short": "Saldo appointed acting governor of Kherson (Decree 708)",
"title": "RF Presidential Decree No. 708,  Appointment of Acting Governor of Kherson Oblast (4 October 2022)",
"desc": "Decree appointing Vladimir Saldo as Acting Governor on the same day as the ratification law, integrating the occupation administration into the Russian federal executive hierarchy.",
"year": "2022",
"undated": "",
"territory": [
"khe"
],
"issuer": [
"fed"
],
"kind": "decree",
"english": "full",
"ai": true,
"themes": [
"Governance",
"Accountability and Legal"
],
"questions": [
"annex"
],
"url": "primary-sources/ko-zo-legal-acts/doc-114.html"
},
 {
"id": "DOC-115",
"short": "Structure of the Zaporizhzhia occupation government",
"title": "Zaporizhzhia Oblast (Occupied): Government Composition Amendment (2024)",
"desc": "Government composition document showing the occupation administration restructured to mirror a standard Russian federal subject, operating from Melitopol while Zaporizhzhia city remains under Ukrainian control.",
"year": "2024",
"undated": "",
"territory": [
"zap"
],
"issuer": [
"occ"
],
"kind": "record",
"english": "key",
"ai": true,
"themes": [
"Governance",
"Accountability and Legal"
],
"questions": [
"annex"
],
"url": "primary-sources/ko-zo-legal-acts/doc-115.html"
},
 {
"id": "DOC-123",
"short": "Mariupol \"self-government\" bodies (Decrees 1162 to 1166)",
"title": "Territorial Public Self-Government (TOS) Bodies in Mariupol (Decrees Nos. 1162–1166)",
"desc": "Five decrees (18 June 2026) rolling out Russian-style \"territorial public self-government\" bodies across Mariupol districts, approving territory boundaries and registering a charter.",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Governance"
],
"questions": [
"identity"
],
"url": "primary-sources/mariupol-admin-2026/doc-123.html",
"collection": "mariupol"
},
 {
"id": "DOC-125",
"short": "Officials who can write offence reports, Mariupol (Decree 1176)",
"title": "Officials Authorised to Draw Up Administrative-Offence Protocols (Decree No. 1176)",
"desc": "Restates the list of Mariupol officials empowered to issue administrative-offence protocols, including for \"obstruction of the lawful activity of local self-government\".",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Governance",
"Accountability and Legal"
],
"questions": [
"dissent"
],
"url": "primary-sources/mariupol-admin-2026/doc-125.html",
"collection": "mariupol"
},
 {
"id": "DOC-126",
"short": "Municipal servants' conduct commission, Mariupol (Decree 1177)",
"title": "Municipal-Servants' Conduct and Conflict-of-Interest Commission (Decree No. 1177)",
"desc": "Approves the regulation and membership of the commission on municipal servants' official conduct and conflicts of interest, modelled on the Russian federal template.",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Governance",
"Accountability and Legal"
],
"questions": [
"identity"
],
"url": "primary-sources/mariupol-admin-2026/doc-126.html",
"collection": "mariupol"
},
 {
"id": "DOC-156",
"short": "The \"2 per cent\" mortgage for occupied regions (Res. 2565)",
"title": "Government Resolution No. 2565: Rules for Subsidising Mortgages Issued to Citizens of the Russian Federation for Housing in the Occupied Territories, the \"2 Per Cent Mortgage\" (31 December 2022)",
"desc": "The \"2 per cent mortgage\" for the occupied regions: federal subsidies through DOM.RF for housing loans available only to citizens of the Russian Federation.",
"year": "2022",
"undated": "",
"territory": [
"four"
],
"issuer": [
"fed"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Economics",
"Civilian Life and Resistance"
],
"questions": [
"annex",
"property"
],
"url": "primary-sources/rf-economic-integration/doc-156.html"
},
 {
"id": "DOC-157",
"short": "Free economic zone and tax rules (Laws 266-FZ, 268-FZ)",
"title": "Federal Laws No. 266-FZ on the Free Economic Zone in the Occupied Territories and No. 268-FZ Amending the Tax Code for its Participants (24 June 2023)",
"desc": "The free economic zone covering all four occupied regions, with tax and customs preferences for businesses that register under Russian law.",
"year": "2023",
"undated": "",
"territory": [
"four"
],
"issuer": [
"fed"
],
"kind": "law",
"english": "key",
"ai": true,
"themes": [
"Economics",
"Governance"
],
"questions": [
"annex"
],
"url": "primary-sources/rf-economic-integration/doc-157.html"
},
 {
"id": "DOC-095",
"short": "Official housing prices per square metre, Mariupol",
"title": "Official Market Valuation of Residential Property in Mariupol, 2026",
"desc": "Decree setting the official average market price per square metre of residential property in Russian-occupied Mariupol for 2026: 146,212 rubles (primary market) and 80,695 rubles (secondary market).",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "full",
"ai": true,
"themes": [
"Economics",
"Civilian Life and Resistance"
],
"questions": [
"property"
],
"url": "primary-sources/mariupol-admin-2026/doc-095.html",
"collection": "mariupol"
},
 {
"id": "DOC-096",
"short": "Lease auction, Lenin and Metallurgov Prospekts, Mariupol",
"title": "Auction Decree: Municipal Property Lease, Lenin Prospekt & Metallurgov Prospekt, Mariupol",
"desc": "Decree authorising the electronic auction of two non-residential municipal properties on five-year leases under Russian federal competition law.",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "full",
"ai": true,
"themes": [
"Economics",
"Governance"
],
"questions": [
"property"
],
"url": "primary-sources/mariupol-admin-2026/doc-096.html",
"collection": "mariupol"
},
 {
"id": "DOC-097",
"short": "Wage-arrears subsidy for Mariupolzhilkompleks",
"title": "Subsidy Amendment: MUP Mariupolzhilkompleks Wage Arrears, January–February 2026",
"desc": "Decree amending a subsidy scheme to cover wage debt owed to employees of the municipal housing utility enterprise MUP \"Mariupolzhilkompleks\" for January–February 2026.",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "full",
"ai": true,
"themes": [
"Economics",
"Governance"
],
"questions": [
"property"
],
"url": "primary-sources/mariupol-admin-2026/doc-097.html",
"collection": "mariupol"
},
 {
"id": "DOC-098",
"short": "Lease auction, Stroiteley and Lenin Prospekts, Mariupol",
"title": "Auction Decree: Municipal Property Lease, Stroiteley Prospekt & Lenin Prospekt, Mariupol",
"desc": "Decree authorising the electronic auction of two further non-residential municipal properties on five-year leases under Russian federal competition law.",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "full",
"ai": true,
"themes": [
"Economics",
"Governance"
],
"questions": [
"property"
],
"url": "primary-sources/mariupol-admin-2026/doc-098.html",
"collection": "mariupol"
},
 {
"id": "DOC-100",
"short": "Auction file for municipal leases, Mariupol",
"title": "Full Auction Documentation: Municipal Property Leases, Mariupol (April–May 2026)",
"desc": "Complete auction documentation package for the electronic tender of two Mariupol municipal properties via the Russian federal RTS-Tender platform. Application window 15 April–5 May 2026; auction date 7 May 2026.",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "record",
"english": "full",
"ai": true,
"themes": [
"Economics",
"Governance"
],
"questions": [
"property"
],
"url": "primary-sources/mariupol-admin-2026/doc-100.html",
"collection": "mariupol"
},
 {
"id": "DOC-127",
"short": "Investor support rules, Mariupol (Decree 1178)",
"title": "Investor Inquiries and Investment-Project Support Regulations (Decree No. 1178)",
"desc": "Approves regulations for receiving investor inquiries and \"accompanying\" investment projects in Mariupol, modelled on Russia's Regional Investment Standard.",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Economics",
"Governance"
],
"questions": [],
"url": "primary-sources/mariupol-admin-2026/doc-127.html",
"collection": "mariupol"
},
 {
"id": "DOC-129",
"short": "Small business programme 2026 to 2028, Mariupol (Decree 1180)",
"title": "Small and Medium Enterprise Development Programme 2026–2028 (Decree No. 1180)",
"desc": "Approves the SME programme: 10,744 SMEs as of Jan 2026 (up 21%, attributed partly to the \"free economic zone\"), targeting 8,865 registered SMEs by 2028.",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Economics",
"Governance"
],
"questions": [],
"url": "primary-sources/mariupol-admin-2026/doc-129.html",
"collection": "mariupol"
},
 {
"id": "DOC-130",
"short": "Mariupolzhilkompleks wound up (Decree 1181)",
"title": "Liquidation of the Municipal Housing Enterprise \"Mariupolzhilkompleks\" (Decree No. 1181)",
"desc": "Orders the municipal housing-maintenance enterprise \"Mariupolzhilkompleks\" wound up within a year and appoints a liquidator, months after the administration subsidised its wage arrears (DOC-097).",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "full",
"ai": true,
"themes": [
"Economics",
"Governance"
],
"questions": [
"property"
],
"url": "primary-sources/mariupol-admin-2026/doc-130.html",
"collection": "mariupol"
},
 {
"id": "DOC-139",
"short": "Azovstal \"post-industrial park\" plan",
"title": "Post-Industrial Park: Development Project for the Azovstal Plant Territory, Mariupol",
"desc": "A 2024 Agency for the Development of Mariupol project to convert the former Azovstal steelworks into a 125-hectare industrial-tourism park billed as the principal industrial monument-museum of Russia.",
"year": "2024",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"occ"
],
"kind": "record",
"english": "sum",
"ai": false,
"themes": [
"Economics"
],
"questions": [
"property"
],
"url": "primary-sources/education-and-memory/azovstal-post-industrial-park.pdf"
},
 {
"id": "DOC-140",
"short": "Premium housing sales brochure, Mariupol",
"title": "\"Residence\" Collection House: Elite Housing Sales Brochure, Mariupol (YugStroyInvest)",
"desc": "A private developer's marketing brochure for a premium residential complex on occupied Mariupol's Primorsky seafront. It sells the city as a future Russian resort \"alongside Sochi, Kislovodsk and Gelendzhik,\" invites buyers to open a business \"in the new territories of the RF among the first\" under free-economic-zone tax breaks, and quotes Deputy Prime Minister Marat Khusnullin calling the \"new regions\" Russia's biggest construction project.",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"non"
],
"kind": "record",
"english": "sum",
"ai": false,
"themes": [
"Economics",
"Identity, Culture and Religion"
],
"questions": [
"property"
],
"url": "primary-sources/mariupol-reconstruction/residence-collection-house-mariupol.pdf"
},
 {
"id": "DOC-180",
"short": "Boys born in 2006 called for military registration (Decree 54)",
"title": "Decree of the Acting Head of the \"Donetsk People's Republic\" No. 54 on the Commissions for the Initial Military Registration of Citizens in 2023 (18 February 2023): Boys Born in 2006 Registered through Schools",
"desc": "Pushilin's decree setting up 23 commissions to put boys born in 2006 on the Russian military register across occupied Donetsk Oblast, Mariupol included, with medical examinations organised at their schools.",
"year": "2023",
"undated": "",
"territory": [
"don"
],
"issuer": [
"occ"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Governance",
"Accountability and Legal"
],
"questions": [
"children",
"military"
],
"url": "primary-sources/dnr-legal-acts/doc-180.html"
},
 {
"id": "DOC-178",
"short": "Federal tests in every Luhansk school (VPR order)",
"title": "Luhansk Oblast (Occupied): Ministry of Education and Science Order \"On Conducting All-Russian Verification Tests in General Education Organisations of the Luhansk People's Republic in 2025\", with the Testing Procedure and List of Municipal Coordinators",
"desc": "The occupation education ministry puts every school in occupied Luhansk Oblast through Russia's federal knowledge tests (VPR), run through Rosobrnadzor's online system, with independent observers and 23 municipal coordinators.",
"year": "2025",
"undated": "",
"territory": [
"lug"
],
"issuer": [
"occ"
],
"kind": "order",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Governance"
],
"questions": [
"children"
],
"url": "primary-sources/lnr-legal-acts/doc-178.html"
},
 {
"id": "DOC-179",
"short": "Ban on Ukrainian phone numbers for officials (Order 23)",
"title": "Zaporizhzhia Oblast (Occupied): Ministry of Education Order No. 23 \"On the Protection of Information\", Banning Staff from Using Ukrainian Mobile Numbers (27 October 2022)",
"desc": "Eight days after Russia's martial-law decree, the occupation education ministry in Melitopol bans its staff from using Ukrainian mobile numbers, or messengers registered to them, for work.",
"year": "2022",
"undated": "",
"territory": [
"zap"
],
"issuer": [
"occ"
],
"kind": "order",
"english": "full",
"ai": true,
"themes": [
"Information Space",
"Education and Militarisation",
"Governance"
],
"questions": [
"children",
"dissent"
],
"url": "primary-sources/ko-zo-legal-acts/doc-179.html"
},
 {
"id": "DOC-174",
"short": "\"Historical enlightenment\" in schools",
"title": "\"Historical Enlightenment\" in Schools: the Ministry of Education's Concept (approved 15 April 2026), Guidance for the 2026–2027 School Year, and Letter No. OK-1984/03 on Extracurricular Activities (9 July 2026)",
"desc": "The new federal system of school \"historical enlightenment\": SVO veterans in schools, an openly \"ideological\" function, vetting of online history, a points rating for every school, and basic military training in Years 8 and 10.",
"year": "2026",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "order",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Identity, Culture and Religion"
],
"questions": [
"children"
],
"url": "primary-sources/rf-education-policy/doc-174.html"
},
 {
"id": "DOC-175",
"short": "Reading lists sent to schools (Letter OK-1799/03)",
"title": "Ministry of Education Letter No. OK-1799/03 of 22 June 2026 Sending Reading Lists to Schools, with a List of \"Patriotic\" Works by Contemporary Writers Including the Section «Zа наших» (\"For Our Guys\")",
"desc": "Reading lists for every school library: a \"patriotic\" list that ends, for teenagers, with a section headed in the war's Latin \"Z\", «Zа наших», of books on Donbas and the SVO, and no Ukrainian author in any list.",
"year": "2026",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "order",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Identity, Culture and Religion"
],
"questions": [
"children"
],
"url": "primary-sources/rf-education-policy/doc-175.html"
},
 {
"id": "DOC-173",
"short": "Crimea regional history course, Years 5 to 7",
"title": "\"History of Our Region\" for Crimea: The Programme of the Compulsory Regional History Course for Years 5 to 7 in Occupied Crimea (Simferopol, 2025)",
"desc": "The occupation authorities' programme for the compulsory regional history course in Crimean schools: the 1954 transfer called illegitimate, 1991 to 2014 left out, the 1944 deportation in one undated line, and a project lesson on \"Crimeans, heroes of the SVO\".",
"year": "2025",
"undated": "",
"territory": [
"cri"
],
"issuer": [
"occ"
],
"kind": "teach",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Identity, Culture and Religion"
],
"questions": [
"children",
"identity"
],
"url": "primary-sources/education-and-memory/doc-173.html"
},
 {
"id": "DOC-171",
"short": "\"Donbass and Novorossiya\" history textbooks",
"title": "\"Donbass and Novorossiya: History of Our Region\": The Regional History Textbooks for Years 5 and 6 to 7 in Occupation Schools (Moscow, 2026)",
"desc": "The full Russian textbooks of the regional history course written for schools in the occupied territories, 249 and 281 pages, with an English table of key passages.",
"year": "2026",
"undated": "",
"territory": [
"four"
],
"issuer": [
"fed"
],
"kind": "teach",
"english": "key",
"ai": false,
"themes": [
"Education and Militarisation",
"Identity, Culture and Religion"
],
"questions": [
"children",
"identity"
],
"url": "primary-sources/education-and-memory/doc-171.html"
},
 {
"id": "DOC-165",
"short": "Rosmolodezh counter-extremism manual",
"title": "Rosmolodezh Methodological Recommendations on Preventing the Spread of the Ideology of Terrorism, Extremism and Neo-Nazism among Young People from the Occupied Territories (28 February 2025)",
"desc": "The federal youth agency's manual for the occupied regions: Ukrainian nationalism as \"the historical basis\" of extremism, and the FSB, Rosgvardia, police and prison service as partners in youth work.",
"year": "2025",
"undated": "",
"territory": [
"four"
],
"issuer": [
"fed"
],
"kind": "teach",
"english": "key",
"ai": true,
"themes": [
"Information Space",
"Education and Militarisation",
"Identity, Culture and Religion"
],
"questions": [
"children",
"dissent"
],
"url": "primary-sources/counter-extremism/doc-165.html"
},
 {
"id": "DOC-132",
"short": "Rosgvardia guards at a kindergarten, Telmanovsky district",
"title": "Russian National Guard (Rosgvardia) Security Services at a Kindergarten, Telmanovsky District",
"desc": "A redacted contract addendum showing the Russian National Guard (Rosgvardia) contracted to service the security systems of the \"Katyusha\" kindergarten in occupied Telmanovsky district.",
"year": "2026",
"undated": "",
"territory": [
"don"
],
"issuer": [
"occ"
],
"kind": "record",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Governance"
],
"questions": [
"dissent"
],
"url": "primary-sources/security-services-2026/doc-132.html"
},
 {
"id": "DOC-167",
"short": "Federal upbringing programme, section 166 (Order 370)",
"title": "Ministry of Education Order No. 370: Federal Educational Programme for Basic General Education, Section 166, the Federal Work Programme of Upbringing (18 May 2023)",
"desc": "The federal upbringing programme every school must follow: patriotism and \"respect for the memory of the defenders of the Fatherland\" as aims, military-patriotic courses among extracurricular activities. Extract of section 166 from the 5,683-page act.",
"year": "2023",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "order",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Identity, Culture and Religion"
],
"questions": [
"children"
],
"url": "primary-sources/rf-education-policy/doc-167.html"
},
 {
"id": "DOC-161",
"short": "Traditional values decree and the school course built on it",
"title": "Presidential Decree No. 809 on Traditional Russian Spiritual and Moral Values (9 November 2022) and Ministry of Education Order No. 808 Introducing the Compulsory Course \"Spiritual and Moral Culture of Russia\" (10 November 2025)",
"desc": "The values decree of 2022 and the 2025 order that turns it into a compulsory school subject from September 2026, with \"heroes of the special military operation\" as exemplars.",
"year": "2025",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Identity, Culture and Religion"
],
"questions": [
"children"
],
"url": "primary-sources/rf-education-policy/doc-161.html"
},
 {
"id": "DOC-162",
"short": "Federal textbook and literature lists",
"title": "The Federal Textbook List and Federal Literature List: Ministry of Education Orders No. 436 (22 June 2026), No. 495 (26 June 2025), No. 769 (5 November 2024) and No. 258 (1 April 2025), with the List of Literary Works in the Federal Programmes",
"desc": "The lists that define what occupation schools may teach: native-language textbooks for Bashkir, Tatar and Adyghe, none for Ukrainian, and a federal literature canon with no Ukrainian work.",
"year": "2026",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "order",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Identity, Culture and Religion"
],
"questions": [
"children"
],
"url": "primary-sources/rf-education-policy/doc-162.html"
},
 {
"id": "DOC-163",
"short": "Russian-language test for school admission (Order 171)",
"title": "Ministry of Education Order No. 171 Amending the School Admission Procedure: Russian-Language Testing and Status Checks for Children Who Are Foreign Citizens (4 March 2025)",
"desc": "School admission conditioned on legal status and a Russian-language test for children who are foreign citizens, which in the occupied territories includes families that refused Russian passports.",
"year": "2025",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "order",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Civilian Life and Resistance"
],
"questions": [
"children"
],
"url": "primary-sources/rf-education-policy/doc-163.html"
},
 {
"id": "DOC-099",
"short": "Mariupol education programme 2026 to 2028",
"title": "\"Development of Education in Mariupol\" Municipal Programme, 2026–2028",
"desc": "Full text of the occupation administration's three-year education programme. Total budget RUB 8.76 billion. Objectives explicitly include \"patriotic upbringing\" and \"formation of traditional Russian spiritual-moral values.\"",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "full",
"ai": true,
"themes": [
"Education and Militarisation",
"Identity, Culture and Religion"
],
"questions": [
"children"
],
"url": "primary-sources/mariupol-admin-2026/doc-099.html",
"collection": "mariupol"
},
 {
"id": "DOC-104",
"short": "\"DPR\" education law",
"title": "Donetsk People's Republic: Law on Education (Consolidated Text, December 2021)",
"desc": "DPR education law modelled on Russian Federal Law No. 273-FZ, replacing the Ukrainian curriculum with Russian federal standards and mandating Russian-language instruction.",
"year": "2021",
"undated": "",
"territory": [
"don"
],
"issuer": [
"occ"
],
"kind": "law",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Governance"
],
"questions": [
"children"
],
"url": "primary-sources/dnr-legal-acts/doc-104.html"
},
 {
"id": "DOC-105",
"short": "\"DPR\" law on military duty",
"title": "Donetsk People's Republic: Law on Military Duty and Military Service (Law No. 08-INs, Consolidated March 2020)",
"desc": "Foundational DPR conscription statute defining who must serve, grounds for exemption (Article 23, amended by DOC-107), and obligations during mobilisation. Direct statutory basis for DOC-108.",
"year": "2020",
"undated": "",
"territory": [
"don"
],
"issuer": [
"occ"
],
"kind": "law",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Governance",
"Accountability and Legal"
],
"questions": [
"military"
],
"url": "primary-sources/dnr-legal-acts/doc-105.html"
},
 {
"id": "DOC-106",
"short": "\"DPR\" law on mobilisation",
"title": "Donetsk People's Republic: Law on Mobilisation Preparation and Mobilisation (Law No. 10-INs, 22 September 2021)",
"desc": "Governs the full cycle of DPR mobilisation planning. Adopted five months before the general mobilisation decree; the direct statutory basis for Decree No. 29 (DOC-108).",
"year": "2021",
"undated": "",
"territory": [
"don"
],
"issuer": [
"occ"
],
"kind": "law",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Governance",
"Accountability and Legal"
],
"questions": [
"military"
],
"url": "primary-sources/dnr-legal-acts/doc-106.html"
},
 {
"id": "DOC-107",
"short": "\"DPR\" mobilisation deferral for students (Law 376-IINs)",
"title": "Donetsk People's Republic: Law No. 376-IINs of 20 May 2022 on Mobilisation Deferral for Students and Graduates (Amending Article 23 of the Law on Military Duty and Article 17 of the Law on Mobilisation)",
"desc": "Adopted 20 May 2022, three months into the general mobilisation: gives full-time students at schools, colleges and universities a deferral from mobilisation call-up and sets a deferral for new graduates.",
"year": "2022",
"undated": "",
"territory": [
"don"
],
"issuer": [
"occ"
],
"kind": "law",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Governance",
"Accountability and Legal"
],
"questions": [
"military"
],
"url": "primary-sources/dnr-legal-acts/doc-107.html"
},
 {
"id": "DOC-108",
"short": "\"DPR\" general mobilisation, February 2022 (Decree 29)",
"title": "Decree of the Head of the DPR No. 29,  On the Conduct of General Mobilisation (19 February 2022)",
"desc": "Signed by Denis Pushilin five days before Russia's full-scale invasion, declaring general mobilisation and ordering all conscription-age men to report to military commissariats.",
"year": "2022",
"undated": "",
"territory": [
"don"
],
"issuer": [
"occ"
],
"kind": "decree",
"english": "full",
"ai": true,
"themes": [
"Education and Militarisation",
"Governance",
"Accountability and Legal"
],
"questions": [
"military"
],
"url": "primary-sources/dnr-legal-acts/doc-108.html"
},
 {
"id": "DOC-116",
"short": "Zaporizhzhia occupation education ministry regulations",
"title": "Zaporizhzhia Oblast (Occupied): Regulations on the Organisation and Activity of the Ministry of Education",
"desc": "Regulations establishing the ZO Ministry of Education under the Russian federal framework: the institutional and legal basis for replacing Ukrainian-language schooling with Russian federal curriculum standards.",
"year": "2025",
"undated": "",
"territory": [
"zap"
],
"issuer": [
"occ"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Governance"
],
"questions": [
"children"
],
"url": "primary-sources/ko-zo-legal-acts/doc-116.html"
},
 {
"id": "DOC-117",
"short": "\"LPR\" amendment on contract service in Russia's army (Law 390-III)",
"title": "Luhansk People's Republic: Law No. 390-III of 22 June 2022 Amending Article 53 of the Law on Military Duty and Military Service (Contract Service in the Armed Forces of the Russian Federation)",
"desc": "Signed 22 June 2022: adds a new ground to Article 53 of the LPR military duty law, \"entering military service voluntarily (by contract) in the Armed Forces of the Russian Federation\".",
"year": "2022",
"undated": "",
"territory": [
"lug"
],
"issuer": [
"occ"
],
"kind": "law",
"english": "full",
"ai": true,
"themes": [
"Education and Militarisation",
"Governance",
"Accountability and Legal"
],
"questions": [
"military"
],
"url": "primary-sources/lnr-legal-acts/doc-117.html"
},
 {
"id": "DOC-118",
"short": "\"LPR\" travel ban on men of call-up age",
"title": "Luhansk People's Republic: Decree on Restrictions on Departure of Citizens Subject to Military Duty During General Mobilisation",
"desc": "Travel ban preventing conscription-age men from leaving LPR-controlled territory without military commissariat permission. The enforcement corollary of the February 2022 general mobilisation declaration.",
"year": "2022",
"undated": "",
"territory": [
"lug"
],
"issuer": [
"occ"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Governance",
"Accountability and Legal"
],
"questions": [
"military"
],
"url": "primary-sources/lnr-legal-acts/doc-118.html"
},
 {
"id": "DOC-119",
"short": "Defenders of the Fatherland Foundation extended to occupied regions",
"title": "Presidential Instructions: Expansion of the Defenders of the Fatherland Foundation to Occupied Ukrainian Oblasts (2025)",
"desc": "Kremlin instructions extending the veterans' welfare and ideological foundation to the four occupied oblasts, running patriotic school programmes and normalising military service across occupied territory.",
"year": "2025",
"undated": "",
"territory": [
"four"
],
"issuer": [
"fed"
],
"kind": "order",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Governance"
],
"questions": [
"children",
"military"
],
"url": "primary-sources/lnr-legal-acts/doc-119.html"
},
 {
"id": "DOC-120",
"short": "Luhansk spring 2025 call-up (Decree UG-341/25)",
"title": "Luhansk Oblast (Occupied): Conscription Decree No. UG-341/25,  Spring 2025 Call-Up (28 March 2025)",
"desc": "Spring 2025 call-up targeting citizens born 1995 to 2007. The youngest cohort (born 2007, aged 17–18) are the first generation schooled entirely under the Russian occupation curriculum.",
"year": "2025",
"undated": "",
"territory": [
"lug"
],
"issuer": [
"occ"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Governance",
"Accountability and Legal"
],
"questions": [
"military"
],
"url": "primary-sources/lnr-legal-acts/doc-120.html"
},
 {
"id": "DOC-121",
"short": "Military training in schools (Law 423-FZ)",
"title": "RF Federal Law No. 423-FZ,  Mandatory Military Training in Schools (4 August 2023)",
"desc": "Introduces Foundations of Security and Defence of the Motherland (weapons handling, drone operation, combat first aid) as a mandatory school subject from September 2024. Applies in occupied territories via formal annexation.",
"year": "2023",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "law",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Governance"
],
"questions": [
"children",
"military"
],
"url": "primary-sources/mobilisation-martial-law/doc-121.html"
},
 {
"id": "DOC-128",
"short": "Mariupol youth policy and \"Youth Centre\" (Decree 1179)",
"title": "Youth Policy Programme Amendment: Youth Centre and Ideological Content (Decree No. 1179)",
"desc": "Amends the 2026–2028 youth-policy programme: a Rosmolodezh-aligned \"Youth Centre\", a 75%-by-2028 enrolment target, and \"creation and dissemination of anti-terrorist content\".",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Education and Militarisation",
"Governance"
],
"questions": [
"children"
],
"url": "primary-sources/mariupol-admin-2026/doc-128.html",
"collection": "mariupol"
},
 {
"id": "DOC-133",
"short": "\"A Connection Between Generations\", Movement of the First, Kherson",
"title": "A Connection Between Generations: Movement of the First Youth Project, Kherson Oblast",
"desc": "A Rosmolodezh-funded book by the Kherson Oblast branch of Russia's state youth movement, Movement of the First, tying Second World War memory to the narrative of the war on Ukraine.",
"year": "2025",
"undated": "",
"territory": [
"khe"
],
"issuer": [
"non"
],
"kind": "teach",
"english": "sum",
"ai": false,
"themes": [
"Education and Militarisation"
],
"questions": [
"children",
"identity"
],
"url": "primary-sources/education-and-memory/connection-between-generations.pdf"
},
 {
"id": "DOC-135",
"short": "Movement of the First activity calendar, September 2025",
"title": "Calendar of the First: Movement of the First Monthly Activity Programme (September 2025)",
"desc": "The September 2025 activity calendar of Russia's state children and youth movement, Movement of the First, setting monthly tasks for children from kindergarten age upward.",
"year": "2025",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"non"
],
"kind": "teach",
"english": "sum",
"ai": false,
"themes": [
"Education and Militarisation"
],
"questions": [
"children"
],
"url": "primary-sources/education-and-memory/calendar-of-the-first-sep2025.pdf"
},
 {
"id": "DOC-136",
"short": "\"Magazine of the First\", issue 2, Kherson",
"title": "Magazine of the First, Issue 2: Movement of the First, Kherson Oblast",
"desc": "The second issue of the Kherson Oblast branch magazine of Russia's state youth movement, distributed free in schools and youth centres, themed on Victory Day and the 'Year of the Defender'.",
"year": "2025",
"undated": "",
"territory": [
"khe"
],
"issuer": [
"non"
],
"kind": "teach",
"english": "sum",
"ai": false,
"themes": [
"Education and Militarisation"
],
"questions": [
"children"
],
"url": "primary-sources/education-and-memory/magazine-of-the-first-issue-2.pdf"
},
 {
"id": "DOC-137",
"short": "\"Magazine of the First\", issue 3, Kherson",
"title": "Magazine of the First, Issue 3: Movement of the First, Kherson Oblast",
"desc": "The third issue of the Kherson Oblast branch magazine of Russia's state youth movement, recording its activity from April to July 2025.",
"year": "2025",
"undated": "",
"territory": [
"khe"
],
"issuer": [
"non"
],
"kind": "teach",
"english": "sum",
"ai": false,
"themes": [
"Education and Militarisation"
],
"questions": [
"children"
],
"url": "primary-sources/education-and-memory/magazine-of-the-first-issue-3.pdf"
},
 {
"id": "DOC-138",
"short": "Soviet heroes reference book for \"LPR\" schools",
"title": "My Countrymen, Heroes of the Soviet Union: LNR Ministry of Education Reference Book",
"desc": "A reference book approved for schools of the self-proclaimed Luhansk People's Republic, containing 315 biographies of Heroes of the Soviet Union from the Luhansk region.",
"year": "2020",
"undated": "",
"territory": [
"lug"
],
"issuer": [
"occ"
],
"kind": "teach",
"english": "sum",
"ai": false,
"themes": [
"Education and Militarisation"
],
"questions": [
"children",
"identity"
],
"url": "primary-sources/education-and-memory/my-countrymen-heroes-soviet-union.pdf"
},
 {
"id": "DOC-D4-1",
"short": "Youth library spreadsheet: 961 most-requested titles and 155 new releases of 2022",
"title": "Leaders of Reader Demand and New Releases of 2022: A Youth Library's Reading Spreadsheet",
"desc": "Two sheets: 961 titles listed as \"leaders of reader demand\", with author, translator, year and publisher, and 155 new releases of 2022. The list mixes Russian and translated foreign fiction, from Narine Abgaryan to Aravind Adiga and Chimamanda Ngozi Adichie. The file does not name the library in full or say how the list was used in occupied territories.",
"year": "2022",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "teach",
"english": "sum",
"ai": false,
"themes": [
"Education and Militarisation"
],
"questions": [
"children"
],
"url": "data/manuals_reading_list_youth_library.xlsx",
"collection": "manuals"
},
 {
"id": "DOC-D4-2",
"short": "Children's reading list of about 990 titles (attributed to the Russian State Children's Library)",
"title": "Recommended Children's Reading List in Seven Sections (attributed to the Russian State Children's Library)",
"desc": "About 990 numbered children's books in seven sections, from Russian and foreign classics for preschoolers to popular science and contemporary literature for primary and middle school, with illustrators named for picture books. The copy carries no date, issuer or reference to occupied territories.",
"year": "",
"undated": "Undated",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "teach",
"english": "sum",
"ai": false,
"themes": [
"Education and Militarisation"
],
"questions": [
"children"
],
"url": "data/manuals_reading_list_rgdb.pdf",
"collection": "manuals"
},
 {
"id": "DOC-D4-3",
"short": "Literary works set by Russia's federal school programmes: 219 authors",
"title": "List of Literary Works Included in the Federal Educational Programmes of Primary, Basic and Secondary General Education (Annex)",
"desc": "The annex naming 219 authors and the works set in Russia's federal educational programmes for primary, basic and secondary schools, from Abramov to Yakovlev. The same federal programmes apply in schools in the occupied territories. The same list appears with the federal textbook and literature orders in DOC-162.",
"year": "",
"undated": "Undated",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "teach",
"english": "sum",
"ai": false,
"themes": [
"Education and Militarisation"
],
"questions": [
"children"
],
"url": "data/manuals_reading_list_minpros.pdf",
"collection": "manuals"
},
 {
"id": "DOC-D4-4",
"short": "\"Year of the Family\" guide from the Crimean House of Friendship of Peoples, 2024",
"title": "Methodological Recommendations \"2024: the Year of the Family in Russia\" (House of Friendship of Peoples, Simferopol)",
"desc": "A guide for cultural workers in occupied Crimea on marking Putin's \"Year of the Family\": main lines of work, a family calendar, a script for a republican contest \"The Best Mum\" and internet resources. It opens with Putin's statement that the family is \"the basis of morality\".",
"year": "2024",
"undated": "",
"territory": [
"cri"
],
"issuer": [
"occ"
],
"kind": "teach",
"english": "sum",
"ai": false,
"themes": [
"Education and Militarisation"
],
"questions": [
"children"
],
"url": "data/manuals_god_semi.pdf",
"collection": "manuals"
},
 {
"id": "DOC-D4-5",
"short": "Rosmolodezh guide to its 2025 grant competition for university youth projects",
"title": "Methodological Recommendations for Participants in the All-Russian Competition of Youth Projects among Higher Education Institutions in 2025 (Rosmolodezh)",
"desc": "Rules for universities applying to Rosmolodezh's 2025 grant competition for youth projects, run under Government Resolutions 1780 and 1781 of 25 October 2023. Universities in the occupied territories compete in the same federal programme.",
"year": "2025",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "teach",
"english": "sum",
"ai": false,
"themes": [
"Education and Militarisation"
],
"questions": [
"children"
],
"url": "data/manuals_oovo_2025.pdf",
"collection": "manuals"
},
 {
"id": "DOC-D4-7",
"short": "Zaporizhzhia occupation youth ministry's handbook on student councils and activists",
"title": "Methodological Materials on Organising Work with Student Youth (Ministry of Youth Policy of Zaporizhzhia Oblast with Rosmolodezh)",
"desc": "A handbook for college and university staff in occupied Zaporizhzhia Oblast: a portrait of students, the region's youth movements, the legal basis and running of student councils, building a team of student activists and \"forming an opinion leader\". The explanatory note sets the aim of developing students' \"civic position\" and patriotism.",
"year": "",
"undated": "Undated",
"territory": [
"zap"
],
"issuer": [
"occ",
"fed"
],
"kind": "teach",
"english": "sum",
"ai": false,
"themes": [
"Education and Militarisation"
],
"questions": [
"children"
],
"url": "data/manuals_student_work.pdf",
"collection": "manuals"
},
 {
"id": "DOC-D4-8",
"short": "\"Ukrainian Crimes against Humanity (2022 to 2023)\", Grigoriev and Sablin",
"title": "Ukrainian Crimes against Humanity (2022 to 2023), by M. S. Grigoriev and D. V. Sablin",
"desc": "A book of allegations against Ukrainian forces, in chapters on the shelling of civilians, \"human shields\", hostage-taking, firing from residential areas and torture by the Armed Forces and the SBU. M. S. Grigoriev is also the lead author of D4-10. The copy held does not say where the book was distributed.",
"year": "2023",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"non"
],
"kind": "teach",
"english": "sum",
"ai": false,
"themes": [
"Education and Militarisation",
"Information Space"
],
"questions": [
"children",
"dissent"
],
"url": "data/manuals_ukrainian_crimes.pdf",
"collection": "manuals"
},
 {
"id": "DOC-D4-9",
"short": "Bezsonov, \"Methods of information-psychological influence\" used by Ukrainian IPSO units",
"title": "Methods of Information-Psychological Influence Used by Ukrainian Information-Psychological Operations Units against Participants in the SVO, Their Relatives and Other Citizens, by D. V. Bezsonov",
"desc": "A booklet on the methods it attributes to Ukrainian information-psychological operations units (TsIPsO) against Russian soldiers in the \"special military operation\", their relatives and other citizens, with chapters on staged \"fake\" videos, how to recognise fake material and the \"Overton window\".",
"year": "2024",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"non"
],
"kind": "teach",
"english": "sum",
"ai": false,
"themes": [
"Education and Militarisation",
"Information Space"
],
"questions": [
"children",
"dissent"
],
"url": "data/manuals_tsipso.pdf",
"collection": "manuals"
},
 {
"id": "DOC-D4-10",
"short": "\"History of Ukraine. Monograph\" (English edition, Moscow 2023)",
"title": "History of Ukraine. Monograph, by M. S. Grigoriev, V. N. Deynego, A. R. Dyukov, S. A. Zasorin, A. A. Malkevich, S. A. Manko and V. L. Shapovalov (English edition)",
"desc": "An English-language history of Ukraine for foreign readers. The book's own credentials page lists among its authors the LPR's foreign minister of 2017 to 2022 (V. N. Deynego), members of Russia's Civic Chamber and the Presidential Council's Commission on Inter-Ethnic Relations, and the head of journalism at Kherson State University (A. A. Malkevich).",
"year": "2023",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"non"
],
"kind": "teach",
"english": "full",
"ai": false,
"themes": [
"Education and Militarisation",
"Information Space"
],
"questions": [
"children",
"identity"
],
"url": "data/manuals_mgimo.pdf",
"collection": "manuals"
},
 {
"id": "DOC-183",
"short": "Museum acts of occupied Ukraine, 2014 to 2026 (CURIA Lab, 180 acts)",
"title": "Official Acts on the Museums of Occupied Ukraine, 2014 to 2026 (compiled by CURIA Lab, University of Virginia)",
"desc": "178 federal and occupation-authority acts that took Ukrainian state property, set up occupation culture ministries and brought the museums of Crimea, Donetsk, Luhansk, Zaporizhzhia and Kherson regions into Russia's Museum Fund. Searchable by title, number, issuer, topic and year.",
"year": "2026",
"undated": "",
"territory": [
"cri",
"don",
"lug",
"zap",
"khe",
"rf"
],
"issuer": [
"fed",
"occ"
],
"kind": "law",
"english": "sum",
"ai": false,
"themes": [
"Identity, Culture and Religion",
"Governance"
],
"questions": [
"annex",
"property",
"identity"
],
"url": "primary-sources/occupied-museums/doc-183.html"
},
 {
"id": "DOC-184",
"short": "Nationalities policy strategy to 2036 (Decree 858)",
"title": "State National Policy Strategy of the Russian Federation to 2036 (Presidential Decree No. 858, 25 November 2025)",
"desc": "Russia's master doctrine on ethnic, linguistic and religious policy, in force 1 January 2026. Makes counter-extremism a headline priority and ties it directly to the four occupied Ukrainian regions, imposing Russian, \"countering falsification of history,\" and setting a target of 2.56 million occupied-region residents in all-Russian events by 2036.",
"year": "2025",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Identity, Culture and Religion",
"Information Space"
],
"questions": [
"identity"
],
"url": "primary-sources/nationalities-policy/doc-133.html"
},
 {
"id": "DOC-164",
"short": "State language policy (Decree 474)",
"title": "Presidential Decree No. 474 Approving the Foundations of State Language Policy of the Russian Federation (11 July 2025)",
"desc": "The state language doctrine: Russian mandatory in administration, courts, schools and media, with protection reserved for the languages of the peoples of Russia, a category that excludes Ukrainian.",
"year": "2025",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Identity, Culture and Religion",
"Governance"
],
"questions": [
"identity"
],
"url": "primary-sources/rf-education-policy/doc-164.html"
},
 {
"id": "DOC-166",
"short": "\"Palette of Cultures\" native-languages contest rules",
"title": "Regulation on the VIII International Contest of the Multi-Genre Culture of Peoples \"Palette of Cultures\", 2026 to 2027 School Year (Fund for the Support of Native Languages \"Language of the Ancestors\", approved 3 September 2026)",
"desc": "The rules of a national \"native languages\" contest for which children in occupied Mariupol were reportedly entered; the 2026 form does list Ukrainian, so the document corrects an earlier claim of exclusion.",
"year": "2026",
"undated": "",
"territory": [
"rf"
],
"issuer": [
"non"
],
"kind": "record",
"english": "key",
"ai": true,
"themes": [
"Identity, Culture and Religion",
"Education and Militarisation"
],
"questions": [
"identity"
],
"url": "primary-sources/identity-culture/doc-166.html"
},
 {
"id": "DOC-109",
"short": "Simplified citizenship for Kherson and Zaporizhzhia (Decree 304)",
"title": "RF Presidential Decree No. 304 (25 May 2022),  Simplified Citizenship Extended to Kherson and Occupied Zaporizhzhia",
"desc": "Step 5 of 10 in the passportisation sequence: simplified citizenship extended to Kherson and Zaporizhzhia residents three months after military seizure and five months before formal annexation.",
"year": "2022",
"undated": "",
"territory": [
"khe",
"zap"
],
"issuer": [
"fed"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Identity, Culture and Religion",
"Governance"
],
"questions": [
"annex"
],
"url": "primary-sources/citizenship/doc-109.html"
},
 {
"id": "DOC-110",
"short": "Simplified citizenship procedure (reference)",
"title": "RF Regulatory Reference: Admission to Citizenship in Simplified Procedure for Foreign Nationals and Stateless Persons",
"desc": "Procedural framework through which passportisation applications were processed, including the three-month processing timeline and biometric data requirements for applicants from occupied territories.",
"year": "",
"undated": "Reference",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "record",
"english": "key",
"ai": true,
"themes": [
"Identity, Culture and Religion",
"Governance"
],
"questions": [
"annex"
],
"url": "primary-sources/citizenship/doc-110.html"
},
 {
"id": "DOC-111",
"short": "Citizenship for Transnistria residents, the earlier model",
"title": "RF Regulatory Reference: Admission to Citizenship for Residents of Transnistria (Transnistrian Moldovan Republic)",
"desc": "Russia's Transnistrian passportisation model (operational since the early 2000s): the earliest instance of the policy, used here as a comparator for the Ukraine passportisation sequence.",
"year": "",
"undated": "Reference",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "record",
"english": "key",
"ai": true,
"themes": [
"Identity, Culture and Religion",
"Governance"
],
"questions": [
"annex"
],
"url": "primary-sources/citizenship/doc-111.html"
},
 {
"id": "DOC-131",
"short": "Mariupol street-naming commission (Decree 821)",
"title": "Commission on Naming and Renaming Streets and Planning Elements (Decree No. 821)",
"desc": "Amends (22 April 2026) the commission that assigns and changes the names of Mariupol's streets and planning-structure elements, the administrative machinery of toponymic control.",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Identity, Culture and Religion",
"Governance"
],
"questions": [
"identity"
],
"url": "primary-sources/mariupol-admin-2026/doc-131.html",
"collection": "mariupol"
},
 {
"id": "DOC-134",
"short": "Pereyaslav Rada anniversary lecture, Zaporizhzhia legislature",
"title": "Lecture Marking the 372nd Anniversary of the Pereyaslav Rada, Zaporizhzhia Oblast Legislative Assembly",
"desc": "A record of an occupation-legislature lecture recasting the 1654 Pereyaslav Rada as the reunification of Ukraine with Russia.",
"year": "2026",
"undated": "",
"territory": [
"zap"
],
"issuer": [
"occ"
],
"kind": "teach",
"english": "sum",
"ai": false,
"themes": [
"Identity, Culture and Religion"
],
"questions": [
"children",
"identity"
],
"url": "primary-sources/education-and-memory/pereyaslav-rada-lecture-2026.pdf"
},
 {
"id": "DOC-177",
"short": "Compensation for war-damaged homes, \"DPR\" (Res. 61-1)",
"title": "Compensation for Homes Lost or Damaged in the War, \"Donetsk People's Republic\": Government Resolution No. 61-1 (7 August 2023) and Amending Resolution No. 38-7 (11 April 2024)",
"desc": "The occupation scheme for paying people whose homes were destroyed or damaged in the fighting: open only to Russian citizens, closed to anyone who served the Ukrainian state after May 2014, and financed from the federal budget.",
"year": "2023",
"undated": "",
"territory": [
"don"
],
"issuer": [
"occ"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Civilian Life and Resistance",
"Accountability and Legal",
"Economics"
],
"questions": [
"property"
],
"url": "primary-sources/dnr-legal-acts/doc-177.html"
},
 {
"id": "DOC-176",
"short": "Mariupol lists of \"ownerless\" property (Orders 243 to 245)",
"title": "Lists of Property with \"Signs of Ownerless Property\", Mariupol: Annexes to Orders Nos. 243, 244 and 245 of 19 August 2026 (345 Flats, 10 Houses, 89 Non-Residential Buildings)",
"desc": "Three Mariupol lists of homes and buildings declared to show \"signs of ownerless property\", the first step to taking them into municipal ownership: 345 flats in eleven blocks, ten houses and 89 non-residential buildings, with every address and cadastral number.",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "record",
"english": "key",
"ai": true,
"themes": [
"Civilian Life and Resistance",
"Accountability and Legal",
"Economics"
],
"questions": [
"property"
],
"url": "primary-sources/mariupol-admin-2026/doc-176.html",
"collection": "mariupol"
},
 {
"id": "DOC-153",
"short": "Zemsky relocation programmes for teachers and doctors",
"title": "Zemsky Relocation Programmes: Government Resolutions Extending \"Zemsky Teacher\", \"Zemsky Doctor\", \"Zemsky Culture Worker\" and \"Zemsky Coach\" to the Occupied Territories (2019 to 2025)",
"desc": "Six government resolutions establishing the Zemsky Teacher, Doctor, Culture Worker and Coach programmes and doubling the relocation payment to two million roubles for the four occupied regions, against a five-year service bond.",
"year": "2025",
"undated": "",
"territory": [
"four"
],
"issuer": [
"fed"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Civilian Life and Resistance",
"Economics",
"Education and Militarisation"
],
"questions": [
"annex"
],
"url": "primary-sources/zemsky-programmes/doc-153.html"
},
 {
"id": "DOC-159",
"short": "Russian pensions for occupied-region residents (Law 17-FZ)",
"title": "Federal Law No. 17-FZ on the Specifics of Pension and Additional Social Provision for Citizens Living in the Occupied Territories (17 February 2023)",
"desc": "Russian pensions and social payments for residents of the occupied regions, available to citizens of the Russian Federation: the fiscal counterpart of passportisation.",
"year": "2023",
"undated": "",
"territory": [
"four"
],
"issuer": [
"fed"
],
"kind": "law",
"english": "key",
"ai": true,
"themes": [
"Civilian Life and Resistance",
"Governance"
],
"questions": [
"annex"
],
"url": "primary-sources/rf-economic-integration/doc-159.html"
},
 {
"id": "DOC-160",
"short": "\"Ownerless\" housing laws (4-FKZ and \"DPR\" 66-RZ)",
"title": "\"Ownerless\" Housing: Federal Constitutional Law No. 4-FKZ (15 December 2025) and Law of the \"Donetsk People's Republic\" No. 66-RZ (21 March 2024) on Identifying and Taking Dwellings with Signs of Ownerless Property into Public Ownership",
"desc": "The dispossession regime: the DPR law defining \"signs of ownerless property\" (2024) and the federal law vesting such homes in the occupation authorities for reallocation (2025).",
"year": "2025",
"undated": "",
"territory": [
"don"
],
"issuer": [
"fed",
"occ"
],
"kind": "law",
"english": "key",
"ai": true,
"themes": [
"Civilian Life and Resistance",
"Accountability and Legal",
"Economics"
],
"questions": [
"property"
],
"url": "primary-sources/rf-property-regime/doc-160.html"
},
 {
"id": "DOC-G1",
"short": "\"DPR\" ombudswoman's situation reports",
"title": "DPR Ombudswoman: Social-Humanitarian Situation Reports",
"desc": "Five socio-humanitarian situation reports by the Ombudswoman of the self-proclaimed Donetsk People's Republic, presented as a searchable dashboard. Read critically: their value lies in the grievances the occupation administration considered permissible to record, not as independent accounts of conditions in occupied Donetsk.",
"year": "2026",
"undated": "",
"territory": [
"don"
],
"issuer": [
"occ"
],
"kind": "record",
"english": "sum",
"ai": false,
"themes": [
"Civilian Life and Resistance",
"Governance"
],
"questions": [],
"url": "dashboards/obzor_dnr.html"
},
 {
"id": "DOC-101",
"short": "Sports complex tariffs, Mariupol",
"title": "Official Sports Facility Tariffs: Municipal Sports Complex \"Lider,\" Mariupol, 2026",
"desc": "Decree approving ruble-denominated tariffs for paid services at the occupation administration's municipal sports complex operating across two former Mariupol stadiums.",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "full",
"ai": true,
"themes": [
"Civilian Life and Resistance",
"Economics"
],
"questions": [
"property"
],
"url": "primary-sources/mariupol-admin-2026/doc-101.html",
"collection": "mariupol"
},
 {
"id": "DOC-102",
"short": "War-damaged housing repair programme, Mariupol",
"title": "Housing Repair Programme Amendment: War-Damaged Residential Properties, Mariupol",
"desc": "Decree amending a co-financed programme for capital repair of 21 apartments damaged in what the occupation administration terms \"military actions,\" requiring residents to co-finance their own war damage repairs.",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "full",
"ai": true,
"themes": [
"Civilian Life and Resistance",
"Accountability and Legal"
],
"questions": [
"property"
],
"url": "primary-sources/mariupol-admin-2026/doc-102.html",
"collection": "mariupol"
},
 {
"id": "DOC-124",
"short": "Housing repair eligibility commission, Mariupol (Decree 1175)",
"title": "War-Damaged Housing Repair Programme: Eligibility Commission (Decree No. 1175)",
"desc": "Amends the resident-co-financed war-damage repair programme (see DOC-102), creating a commission to decide which damaged homes qualify for repair.",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Civilian Life and Resistance"
],
"questions": [
"property"
],
"url": "primary-sources/mariupol-admin-2026/doc-124.html",
"collection": "mariupol"
},
 {
"id": "DOC-185",
"short": "Criminal Code art. 275: high treason",
"title": "Russian Criminal Code Article 275,  High Treason",
"desc": "Criminalises high treason by a citizen of the Russian Federation, espionage, handing over state secrets, \"going over to the enemy's side,\" or providing assistance to a foreign state against Russian security. 12–20 years or life. The pivotal charge once passportisation is factored in: taking a Russian passport is what makes contact with Ukraine chargeable as treason.",
"year": "",
"undated": "In force",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "law",
"english": "full",
"ai": false,
"themes": [
"Coercion, Entrapment and Slavery",
"Accountability and Legal"
],
"questions": [
"dissent"
],
"url": "primary-sources/rf-security-law/doc-134.html",
"collection": "security"
},
 {
"id": "DOC-186",
"short": "Criminal Code art. 275.1: confidential cooperation with a foreign state",
"title": "Russian Criminal Code Article 275.1,  Confidential Cooperation with a Foreign State or Organisation",
"desc": "The catch-all (added July 2022). Criminalises merely \"establishing and maintaining\" a confidential relationship with a foreign state or organisation to assist activity against Russian security, no transfer of secrets required. Reaches both Russian citizens and non-citizens, closing the gaps left by Articles 275, 276 and 276.1. 3–8 years.",
"year": "",
"undated": "In force",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "law",
"english": "full",
"ai": false,
"themes": [
"Coercion, Entrapment and Slavery",
"Accountability and Legal"
],
"questions": [
"dissent"
],
"url": "primary-sources/rf-security-law/doc-135.html",
"collection": "security"
},
 {
"id": "DOC-187",
"short": "Criminal Code art. 276: espionage",
"title": "Russian Criminal Code Article 276,  Espionage",
"desc": "Espionage by a foreign citizen or stateless person. A 2022 amendment added the transfer or gathering, in armed conflict, of information usable against the Russian Armed Forces, covering the passing of coordinates or troop positions to Ukraine. The non-citizen counterpart to treason: passport status changes the article, not the exposure. 10–20 years.",
"year": "",
"undated": "In force",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "law",
"english": "full",
"ai": false,
"themes": [
"Coercion, Entrapment and Slavery",
"Accountability and Legal"
],
"questions": [
"dissent"
],
"url": "primary-sources/rf-security-law/doc-136.html",
"collection": "security"
},
 {
"id": "DOC-188",
"short": "Criminal Code art. 276.1: assisting the enemy",
"title": "Russian Criminal Code Article 276.1,  Providing Assistance to the Enemy",
"desc": "The newest addition (December 2024) and cleanest \"aiding the enemy\" offence: financial, material, consultative or \"other\" assistance to the enemy by a non-citizen, with no transfer of information required. Completes the non-citizen half of the scheme and marks how the collaboration net tightened in late 2024. 10–15 years.",
"year": "",
"undated": "In force",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "law",
"english": "full",
"ai": false,
"themes": [
"Coercion, Entrapment and Slavery",
"Accountability and Legal"
],
"questions": [
"dissent"
],
"url": "primary-sources/rf-security-law/doc-137.html",
"collection": "security"
},
 {
"id": "DOC-189",
"short": "Criminal Code art. 280.4: calls against state security",
"title": "Russian Criminal Code Article 280.4,  Public Calls to Activity Directed Against State Security",
"desc": "A speech offence (introduced 2023). Criminalises public calls against Russian security or to obstruct the authorities, reaching pro-Ukrainian statements, calls for liberation and encouragement of resistance, especially online. Sits above the administrative discrediting charge as the criminal escalation. Fine or 2–4 years, up to 6–7 for organised forms.",
"year": "",
"undated": "In force",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "law",
"english": "full",
"ai": false,
"themes": [
"Coercion, Entrapment and Slavery",
"Accountability and Legal"
],
"questions": [
"dissent"
],
"url": "primary-sources/rf-security-law/doc-138.html",
"collection": "security"
},
 {
"id": "DOC-190",
"short": "Administrative Code art. 20.3: banned symbols",
"title": "Russian Code of Administrative Offences Article 20.3,  Public Display of Banned Symbols",
"desc": "The everyday tool for policing Ukrainian identity. Penalises display of \"banned\" symbols; the phrase \"or other symbols whose display is banned by federal law\" sweeps in the Azov, UPA and Right Sector emblems, and in practice the Ukrainian trident and flag. Fine with confiscation or up to 15 days' arrest; routinely stacked with CoAP 20.3.3.",
"year": "",
"undated": "In force",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "law",
"english": "full",
"ai": false,
"themes": [
"Coercion, Entrapment and Slavery",
"Accountability and Legal"
],
"questions": [
"dissent"
],
"url": "primary-sources/rf-security-law/doc-139.html",
"collection": "security"
},
 {
"id": "DOC-191",
"short": "Administrative Code art. 20.3.3: \"discrediting\" the army",
"title": "Russian Code of Administrative Offences Article 20.3.3,  Discrediting the Use of the Russian Armed Forces",
"desc": "The workhorse administrative charge for dissent (introduced March 2022). Captures any public criticism of the war, support for Ukraine or objection to mobilisation. A first offence is administrative; a repeat within a year escalates to Criminal Code Art. 280.3. Court practice already runs in occupied Crimea.",
"year": "",
"undated": "In force",
"territory": [
"rf"
],
"issuer": [
"fed"
],
"kind": "law",
"english": "full",
"ai": false,
"themes": [
"Coercion, Entrapment and Slavery",
"Accountability and Legal"
],
"questions": [
"dissent"
],
"url": "primary-sources/rf-security-law/doc-140.html",
"collection": "security"
},
 {
"id": "DOC-192",
"short": "Mariupol city administration acts, 2026 (18 documents)",
"title": "Mariupol City Administration Acts, April to August 2026: 18 Decrees and Orders of the Occupation Administration",
"desc": "25 decrees and orders of the occupation administration of Mariupol, grouped by city government, property and housing, business, and schools; each with the Russian original and English.",
"year": "2026",
"undated": "",
"territory": [
"mar"
],
"issuer": [
"muni"
],
"kind": "decree",
"english": "key",
"ai": true,
"themes": [
"Governance",
"Economics",
"Civilian Life and Resistance",
"Education and Militarisation"
],
"questions": [
"property"
],
"url": "primary-sources/mariupol-admin-2026/doc-192.html",
"isCollection": true
},
 {
"id": "DOC-D4",
"short": "Reading lists, youth guidance and books on Ukraine (10 documents)",
"title": "Russian Occupation Education and Propaganda Manuals: Source Document Collection",
"desc": "A federal school literature list, children's and youth library lists, guidance from occupied Crimea, Zaporizhzhia Oblast and Rosmolodezh, and three Moscow-published books on Ukraine and the war.",
"year": "2026",
"undated": "",
"territory": [
"rf",
"cri",
"zap",
"four"
],
"issuer": [
"fed",
"occ",
"non"
],
"kind": "teach",
"english": "sum",
"ai": false,
"isCollection": true,
"themes": [
"Education and Militarisation",
"Information Space"
],
"questions": [
"children"
],
"url": "dashboards/manuals.html"
},
 {
"id": "DOC-193",
"short": "Russian security law in the occupied territories (7 articles, 22 acts)",
"title": "Russian Security Law in the Occupied Territories: Seven Articles of the Criminal and Administrative Codes and the Cases Brought under Them",
"desc": "Seven Criminal and Administrative Code articles linked to the people charged under them, and 22 martial-law and security acts: curfews, expulsion, resettlement, seizures and bans in the occupied territories.",
"year": "",
"undated": "In force",
"territory": [
"rf",
"cri",
"four"
],
"issuer": [
"fed"
],
"kind": "law",
"english": "full",
"ai": false,
"isCollection": true,
"themes": [
"Accountability and Legal",
"Coercion, Entrapment and Slavery",
"Civilian Life and Resistance",
"Governance"
],
"questions": [
"dissent",
"annex",
"property"
],
"url": "primary-sources/rf-security-law/doc-193.html"
}
];
