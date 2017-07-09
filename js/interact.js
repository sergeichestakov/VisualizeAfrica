var map = AmCharts.makeChart("chartdiv", {
  "type": "map",
  "theme": "light",
  "dataProvider": {
    "map": "worldLow",
    "zoomLevel": 2.7,
    "zoomLongitude": 24.0174,
    "zoomLatitude": -1.1076,
    "areas": [
      { "id": "AO",},
      { "id": "BF" },
      { "id": "BI" },
      { "id": "BJ" },
      { "id": "BW" },
      { "id": "CD" },
      { "id": "CF" },
      { "id": "CG" },
      { "id": "CI" },
      { "id": "CM" },
      { "id": "DJ" },
      { "id": "DZ" },
      { "id": "EG" },
      { "id": "ER" },
      { "id": "ET" },
      { "id": "GA" },
      { "id": "GH" },
      { "id": "GM" },
      { "id": "GN" },
      { "id": "GQ" },
      { "id": "GW" },
      { "id": "KE" },
      { "id": "LR" },
      { "id": "LS" },
      { "id": "LY" },
      { "id": "MA" },
      { "id": "MG" },
      { "id": "ML" },
      { "id": "MR" },
      { "id": "MW" },
      { "id": "MZ" },
      { "id": "NA" },
      { "id": "NE" },
      { "id": "NG" },
      { "id": "RW" },
      { "id": "SD" },
      { "id": "SL" },
      { "id": "SN" },
      { "id": "SO" },
      { "id": "SS" },
      { "id": "SZ" },
      { "id": "TD" },
      { "id": "TG" },
      { "id": "TN" },
      { "id": "TZ" },
      { "id": "UG" },
      { "id": "ZA" },
      { "id": "ZM" },
      { "id": "ZW"},
      { "id": "EH" }
    ]
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#CC0000",
    "unlistedAreasAlpha": 0
  },
  "listeners": [{
      "event": "clickMapObject",
      "method": clicked
      }],
  "dragMap": false,
  "zoomControl": {
    "homeButtonEnabled": false,
    "panControlEnabled": false,
    "zoomControlEnabled": false,
    "minZoomLevel": 2.7
  },
  "zoomOnDoubleClick": false
});

function clicked(event){
  var country = event.mapObject.title;
  document.getElementById("countryName").innerHTML = country;
  document.getElementById("myNav").style.height = "100%";
  $("#title").slideUp("slow");
}

/* Close */
function zoomOut() {
    document.getElementById("myNav").style.height = "0%";
    map.selectObject(map.dataProvider);
    map.fire({type: "homeButtonClicked", chart: map});
    $("#title").slideDown("slow");
}
