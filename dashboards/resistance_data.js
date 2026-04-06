// TOT Insights — Resistance Monitoring Dataset
// Dec 2024–Feb 2026 · 387 verified incidents
// Single shared data source for resistance_analytics.html and resistance_map.html
// Do not edit data here without updating both dashboards.

var RDATA = (function () {

  var periods = [
    "Dec '24","Jan '25a","Jan '25b","Feb '25a","Feb '25b",
    "Mar '25a","Mar '25b","Apr '25a","Apr '25b","May '25a",
    "May '25b","Jun '25a","Jun '25b","Jul '25a","Jul '25b",
    "Aug '25a","Aug '25b","Sep '25a","Sep '25b","Oct '25a",
    "Oct '25b","Nov '25a","Nov '25b","Dec '25a","Dec '25b",
    "Dec '25c","Jan '26a","Jan '26b","Feb '26a","Feb '26b"
  ];

  var periodLabels = [
    "25.12.24\u201313.01.25","14.01.25\u201330.01.25","31.01.25\u201313.02.25","13.02.25\u201327.02.25","28.02.25\u201313.03.25",
    "14.03.25\u201327.03.25","28.03.25\u201310.04.25","11.04.25\u201324.04.25","25.04.25\u201308.05.25","09.05.25\u201322.05.25",
    "22.05.25\u201305.06.25","05.06.25\u201318.06.25","18.06.25\u201302.07.25","03.07.25\u201316.07.25","17.07.25\u201330.07.25",
    "31.07.25\u201313.08.25","14.08.25\u201327.08.25","28.08.25\u201311.09.25","11.09.25\u201324.09.25","25.09.25\u201309.10.25",
    "10.10.25\u201323.10.25","23.10.25\u201306.11.25","06.11.25\u201319.11.25","19.11.25\u201304.12.25","04.12.25\u201318.12.25",
    "18.12.25\u201331.12.25","31.12.25\u201314.01.26","14.01.26\u201328.01.26","29.01.26\u201312.02.26","12.02.26\u201325.02.26"
  ];

  var totCounts = [11,5,4,9,7,13,12,7,6,8,10,8,12,8,4,12,14,10,8,12,11,7,8,7,9,7,4,4,4,5];
  var rfCounts  = [0,0,0,0,0,0,0,2,8,2,4,4,2,3,2,3,9,2,5,4,6,5,10,10,10,8,12,12,12,10];

  var totCategories = [
    {name:"Other / sabotage",       value:87, color:"#6b7a99"},
    {name:"Vehicle attack",         value:64, color:"#c9a84c"},
    {name:"Railway / transport",    value:36, color:"#4a6fa5"},
    {name:"Critical infra / comms", value:26, color:"#3a7a8b"},
    {name:"Targeted killing",       value:24, color:"#8b3a3a"},
    {name:"Armed raid / personnel", value:5,  color:"#4a8b6f"},
    {name:"Intel / targeting",      value:4,  color:"#b5652a"}
  ];

  var rfCategories = [
    {name:"Railway sabotage",        value:47, color:"#4a6fa5"},
    {name:"Other / sabotage",        value:40, color:"#6b7a99"},
    {name:"Power / electrical infra",value:18, color:"#3a7a8b"},
    {name:"Vehicle / transport",     value:17, color:"#c9a84c"},
    {name:"Fuel / munitions supply", value:8,  color:"#b5652a"},
    {name:"Defence industry",        value:5,  color:"#4a8b6f"},
    {name:"Targeted killing",        value:4,  color:"#8b3a3a"},
    {name:"Comms tower / signals",   value:2,  color:"#243560"}
  ];

  // Geographic distribution of TOT incidents (known-location incidents only, n=216)
  // lat/lng = approximate centroid of occupied portion of each oblast
  var geoData = [
    {name:"Zaporizhzhia oblast", value:65, color:"#c9a84c", lat:47.40, lng:35.80},
    {name:"Kherson oblast",      value:58, color:"#4a6fa5", lat:46.55, lng:34.10},
    {name:"Crimea",              value:37, color:"#3a7a8b", lat:45.20, lng:34.10},
    {name:"Donetsk oblast",      value:35, color:"#8b3a3a", lat:48.00, lng:37.80},
    {name:"Luhansk oblast",      value:6,  color:"#4a8b6f", lat:48.70, lng:39.30},
    {name:"Unknown / unspecified",value:30,color:"#6b7a99", lat:null,  lng:null}
  ];

  // Representative centroid for RF-territory operations (Bryansk/Kursk/Belgorod corridor)
  var rfRegion = {name:"Russian Federation (ops area)", value:141, color:"#8b3a3a", lat:52.00, lng:36.20};

  var totTotal   = 246;
  var rfTotal    = 141;
  var grandTotal = 387;

  return {
    periods:periods, periodLabels:periodLabels,
    totCounts:totCounts, rfCounts:rfCounts,
    totCategories:totCategories, rfCategories:rfCategories,
    geoData:geoData, rfRegion:rfRegion,
    totTotal:totTotal, rfTotal:rfTotal, grandTotal:grandTotal
  };
})();
