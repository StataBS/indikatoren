(function () {
  return {
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      min: null,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    "series": [
      { "color": "rgb(0,138,195)" },
      { "color": "rgb(0,138,195)", dashStyle: "ShortDash" },
      { "color": "rgb(147,63,141)" },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
      itemWidth: 150,
      width: 300,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      }
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
