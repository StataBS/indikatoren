(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        itemWidth: 10,
      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        step: 1,
        padding: -100,
        x: -5,
        y: 3,
        "rotation": 0,
        formatter: function () {
          return this.value.replace("und", "u.");
        }
      }
    },
    "yAxis": {
      max: 100000,
      tickInterval: 20000,
      "labels": {
        y: 10,
        "format": "{value:,.0f}"
      }
    },
    "series": [
      { "color": "#246370" }, /* */
      { "color": "#A8C3CA" } /*  */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemDistance: 10,
      symbolPadding: 3
    },
    "chart": {
      marginRight: 18,
      "type": "column",
      "inverted": true,
      //"spacingTop": 100
    }
  }
}());