(function () {
  return {
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      "labels": {
        x: -10,
        formatter: function () {
          return Highcharts.numberFormat((this.value * 100), 0) + '%';
        },
      }
    },
    "series": [
      {
        "color": "#cd9c00"
      },
      {
        "color": "#b375ab",
        visible: true,
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left"
    }
  }
}());
