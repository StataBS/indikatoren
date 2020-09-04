/*
global Highcharts
*/

(function () {
  return {
    "chart": {
      //"marginBottom": 75,
      "marginTop": 60,
      "type": "column"
    },
    plotOptions:{
      column:{
        borderWidth: 0
      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.f}",
      }
    },
    "xAxis": {
      tickInterval: 1
    },
    "series": [
      {
        "color": "#008AC3"
      }
    ],
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f} m²</b><br/>',
      "shared": false
    },
  }
}());
