(function () {
  return {
    "chart": {
      "type": "column",
      "inverted": true,
      marginRight: 15
    },
    "plotOptions": {
      "series": {
        pointPadding: 20,
        borderWidth: 0,
        "pointWidth": 10,
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        },
        "stacking": "normal"
      }
    },
    "xAxis": {
      min: 0,
      "type": "category",
      "tickInterval": 1,
      labels: {
        padding: 0,
        step: 1,
      }
    },
    "yAxis": {
      max: 1,
      tickInterval: .2,
      "labels": {
        y: 10,
        formatter: function () {
          return Highcharts.numberFormat(100 * this.value, 0, ",", " ") + '%';
        },
        //"format": "{value:,.0f}",
      },
    },
    "legend": {
      x: -1,
      enabled: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      symbolPadding: 1,
      itemDistance: 5,
      padding: 0,
      "align": "right",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "series": [
      { "color": "#923F8D", index: 10, legendIndex: 0 }, /**/
      { "color": "#E7CEE2", index: 9, legendIndex: 1 }, /**/
      { "color": "#CD9C00", index: 8, legendIndex: 2 }, /**/
      { "color": "#FABD24", index: 7, legendIndex: 3 }, /**/
      { "color": "#008AC3", index: 6, legendIndex: 4 }, /**/
    ]
  };
}());
