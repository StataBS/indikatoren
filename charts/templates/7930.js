(function () {
  return {
    "chart": {
      "type": "column"
    },
    "plotOptions": {
      "series": {
        pointPadding: 0,
        groupPadding: 0.15,
        borderWidth: 0
      }
    },
    "xAxis": {
      type: "category"
      //"tickInterval": 1
    },
    "yAxis": {
      tickInterval: 100000,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      {  //Wohnen Messe
        "color": "#cd9c00",
        legendIndex: 1
      },
      { // Wohnen Erlenmatt
        "color": "#b375ab",
        index: 2,
        legendIndex: 2
      },
      { // Arbeiten Messe
        "color": "#7f5f1a",
        index: 1,
        legendIndex: 3
      },
      {  //Arbeiten Erlenmatt
        "color": "#923f8d",
        legendIndex: 4
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