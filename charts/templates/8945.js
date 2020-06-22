(function () {
  return {
    "chart": {
      //"marginBottom": 65,
      //"marginTop": 100,
      "type": "column"
    },
    "plotOptions": {
      "series": {
        "stacking": "percent",
        pointPadding: 0.1,
        groupPadding: 0.1,
        borderWidth: 0
      }
    },
    "xAxis": {
      "type": "category"
    },
    "yAxis": {
      "labels": {
        "format": "{value}%",
      },
      "reversedStacks": false
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
    },
    "series": [
      {
        "color": "#008AC3",
        "stack": "m",
        "legendIndex": 0
      },
      {
        "color": "#00bAf3",
        "stack": "m",
        "legendIndex": 1
      },
      {
        "color": "#B00000",
        "stack": "w",
        "legendIndex": 2
      },
      {
        "color": "#d00000",
        "stack": "w",
        "legendIndex": 3
      },
      {
        "color": "#474747",
        "stack": "t",
        "legendIndex": 4
      },
      {
        "color": "#6F6F6F",
        "stack": "t",
        "legendIndex": 5
      }
    ],
  }
}());
