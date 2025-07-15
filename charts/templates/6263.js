(function () {
  return {
    plotOptions: {
      series: {
        "stacking": "normal",
      }
    },
    "yAxis": {
      max: 100,
      tickInterval: 25,
      "labels": {
        "format": "{value:,.0f}%",
      }
    },
    "xAxis": {
      "type": "category",
      tickInterval: 1,
      labels: {
				rotation: -45,
        step:1
			}
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    "series": [
      {
        "color": "#b475ab",
        "index": 3,
        "type": "column",
//        "pointWidth": "15",
        legendIndex: 3
      },
      {
        "color": "#a8c4cb",
        "index": 2,
        "type": "column",
        //"pointWidth": "15",
        legendIndex: 1
      },
      {
        "color": "#fabd24",
        "index": 1,
        "type": "column",
        //"pointWidth": "15",
        legendIndex: 2
      },
      {
        "color": "#68AB2B",
        "index": 0,
        "type": "column",
        //"pointWidth": "15",
        legendIndex: 0
      },
    ],
  };
}());

