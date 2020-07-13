(function () {
  return {
    "xAxis": {
      // "tickInterval": 1,
      //"type": "category",
    },
    "yAxis": {
      tickInterval: 20,
      "min": 80,
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    "series": [
      { "color": "#474747" },
      { "color": "#FF8028" },
      { "color": "#FABD24" },
      { "color": "#B375AB" },
      { "color": "#990300" },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
          "radius": 3
        }
      }
    }
  };
}());
