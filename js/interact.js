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

var data = [{
    "year": "2003",
    "gdp": "14956"
}, {
    "year": "2004",
    "gdp": "19775"
}, {
    "year": "2005",
    "gdp": "30632"
}, {
    "year": "2006",
    "gdp": "45163"
}, {
    "year": "2007",
    "gdp": "59263"
}, {
    "year": "2008",
    "gdp": "4"
}, {
    "year": "2009",
    "gdp": "4"
}]

$.ajaxPrefilter( function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //options.url = "http://cors.corsproxy.io/url=" + options.url;
  }
});

var dataLoad = null;

function loadGDP(name) {
$.ajax(
{
   async:false,
   type: "POST",
   dataType: 'json',
   url: "http://schedulehelper.info/africa/gdpJSON.py" ,
   data: {country: name},
   success: function(response)
   {
       dataLoad = response;
       chart.dataProvider = dataLoad;
       chart.validateData();
       document.getElementById("gdpGraph").style.display = "block";
   },
   error: function(data)
   {
      //alert(data.responseText + "error");
      document.getElementById("gdpGraph").style.display = "none";
   },
});




}

var chart = AmCharts.makeChart("gdpGraph", {
    "type": "serial",
<<<<<<< HEAD
    "theme": "light",
    "marginRight": 60,
=======
    "theme": "dark",
    "marginRight": 40,
>>>>>>> 9efee159856d2eeda1763ceb9191273cc66698e3
    "marginLeft": 60,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled":false,
    "dataDateFormat": "YYYY",
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "g1",
        "balloon":{
          "drop":true,
          "adjustBorderColor":false,
          "color":"#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "gdp",
        "balloonText": "<span style='font-size:18px;'>$[[value]]</span>"
    }],
    "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#258cbb",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2,
        "valueZoomable":true
    },
    "color": "#ffffff",
    "categoryField": "year",
    "categoryAxis": {
        "parseDates": false,
        "dashLength": 1,
        "minorGridEnabled": true
    },
    "dataProvider": dataLoad
});

//Map clicked
function clicked(event){
  var country = event.mapObject.title;
  document.getElementById("countryName").innerHTML = country;
  document.getElementById("myNav").style.height = "100%";
  $("#title").slideUp("slow");
  loadGDP(event.mapObject.title);
}

//Modal closed
function zoomOut() {
    document.getElementById("myNav").style.height = "0%";
    map.selectObject(map.dataProvider);
    map.fire({type: "homeButtonClicked", chart: map});
    $("#title").slideDown("slow");
}
