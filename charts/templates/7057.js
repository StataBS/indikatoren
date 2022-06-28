(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
      }
    },

    "xAxis": {
      rotation: 0,
      "type": "category"
    },
    "yAxis": {
      tickAmount: 9,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      { "color": "#0A3B19" },
      { "color": "#68AB2B" },
      { "color": "#8A8A8A" }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemWidth: 85,
      width: 320,
      itemDistance: 0,
      "itemStyle": {
        "fontWeight": "normal",
        textOverflow: "none"
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    },
    "chart": {
      "type": "column",
      "inverted": false
    }
  }
}());

