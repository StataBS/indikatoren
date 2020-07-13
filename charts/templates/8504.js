(function () {
  return {
    "plotOptions": {
      "series": {
        borderWidth: 0,
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        },
        "stacking": "percent"
      }
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1,
      labels: {
        rotation: 0
      }
    },
    "yAxis": {
      tickAmount: 5,
      "labels": {
        "format": "{value:,.0f}%",
      },
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "series": [
      { "color": "#008AC3", index: 1, legendIndex: 0 }, /**/
      { "color": "#B00000", index: 0, legendIndex: 1 }, /**/
    ],
    "chart": {
      "marginBottom": 35,
      "type": "column",
      "inverted": false
    },
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:.1f}%)<br/>',
      "shared": false
    },
  }
}());
