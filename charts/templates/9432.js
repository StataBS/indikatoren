(function () {
  return {
    "xAxis": {
      //tickInterval: 1,
      labels: {
        rotation: 0
      }
    },
    "yAxis": {
      min: null,
      //tickAmount: 5,
      tickInterval: 10,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    "series": [
      { "color": "rgb(0,138,195)" },
      { "color": "rgb(147,63,141)", dashStyle: "ShortDash" },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
      "x": 30,
      //"y": 35,
      //"itemWidth": 145,
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "symbol": "circle",
        }
      }
    }
  };
}());
