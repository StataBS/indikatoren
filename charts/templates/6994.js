(function () {
  return {
    "xAxis": {
      "tickInterval": 1,
    },
    "yAxis": {
      "tickInterval": 200,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    "series": [
      //stata-farben (analog 6991 ab 2012)
      //sand:  0a3b19	007a2f	68ab2b	73b97c	d7e8d2	ece1d0	c4ab91	9e7c59	67401e	3a2012
      //lilac: 45381d	7f5f1a	cd9c00	fabd24	ffda80	e7cee2	b375ab	923f8d	662673	2e1435
      { "color": "#0a3b19", "visible": true },
      { "color": "#007a2f", "visible": false },
      { "color": "#68ab2b", "visible": false },
      { "color": "#73b97c", "visible": false },
      
      { "color": "#45381d", "visible": false },
      { "color": "#7f5f1a", "visible": false },
      { "color": "#cd9c00", "visible": false },
      { "color": "#fabd24", "visible": false },
      { "color": "#ffda80", "visible": false },
      { "color": "#e7cee2", "visible": false },
      { "color": "#b375ab", "visible": true },
      //{"color": "#923f8d", "visible": false},
      //{"color": "#662673", "visible": false},
      //{"color": "#2e1435", "visible": false},
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemDistance: 18,
      "itemMarginBottom": 5,
      //"y": 45,
      //  itemWidth: 72,
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());