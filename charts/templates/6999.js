(function () {
  return {
    "chart": {
      // "marginBottom": 85,
      //"marginTop": 75,
      "type": "column",
      inverted: true,
    },
    "plotOptions": {
      "series": {
        "pointWidth": 15,
        "stacking": "normal",
        borderWidth: 0,
      }
    },
    "xAxis": {
      "type": "category"
    },
    "yAxis": {
      tickAmount: 5,
      "reversedStacks": false
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      "shared": false
    },
    "legend": {
      enabled: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
    },
    "series": [
      {
        "color": "#246370",
        "legendIndex": 1
      },
      {
        "color": "#D3E2E4",
        "legendIndex": 2
      },
      {
        "color": "#68AB2B",
        "legendIndex": 3
      },
    ],
  };
}());
