(function () {
  return {
    "chart": {
      "type": "column",
      "spacingBottom": 4,
      width: 665,
      //height: 270
    },
    "plotOptions": {
      series: {
        pointPadding: 0
        //pointWidth: 5, 
      },
    },
    "xAxis": {
      "type": "category",
      "labels": {
        "rotation": -90,
        "formatter": function () {
          return this.value.replace("BS", "<b>BS<br/>")
          .replace("Kleinbasel", "KB")
          .replace("Grossbasel", "GB");
        }
      }
    },
    "yAxis": {
      tickInterval: 2,
    },
    series: [
      {
        "color": '#A8C3CA'
      },
      {
        "color": '#246370'
      },
      {
        "color": '#083038'
      }
    ],
    "legend": {
      "layout": "vertical",
      "verticalAlign": "middle",
      "align": "right",
      y: -45
    },
  }
}());