(function () {
  return {
    "xAxis": {
      tickInterval: 1,
      type: 'category',
      labels: {
        rotation: 0, 
        step: 5
      }
    },
    "yAxis": {
      tickInterval: 2,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>'
    },
    "series": [
      //stata-farben lilac: 45381d	7f5f1a	cd9c00	fabd24	ffda80	e7cee2	b375ab	923f8d	662673	2e1435
      { "color": "#45381d", "visible": true },
      { "color": "#7f5f1a", "visible": false },
      { "color": "#cd9c00", "visible": false },
      { "color": "#fabd24", "visible": false },
      { "color": "#ffda80", "visible": false },
      { "color": "#e7cee2", "visible": false },
      { "color": "#b375ab", "visible": false},
      { "color": "#923f8d", "visible": false},
      {"color": "#662673", "visible": false},
      {"color": "#B00000", "visible": true},
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
      itemDistance: 7,
      //"y": 45,
      itemWidth: 72,
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