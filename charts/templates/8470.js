(function () {
  return {
    "xAxis": {
      // "tickInterval": 1,
      //"type": "category",
    },
    "yAxis": {
      tickInterval: 10,
      tickAmount: 5,
      "min": 90,
      max: 130
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    "series": [
      { "color": "rgb(71,71,71)" },
      { "color": "rgb(255,128,40)" },
      { "color": "rgb(250,189,36)" },
      { "color": "#B375AB" },
      { "color": "rgb(153,3,0)" }
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
