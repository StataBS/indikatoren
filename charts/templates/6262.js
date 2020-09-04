(function () {
  return {
    "chart": {
      "type": "area",
      "width": 665,
    },
    plotOptions: {
      area: {
        stacking: 'normal',
        //lineColor: '#666666',
        lineWidth: 0
      }
    },
    "yAxis": {
      tickInterval: 20000
    },
    "xAxis": {
      "type": "category",
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left"
    },
    "series": [
      { "color": "#B00000", "index": 4, "marker": { "enabled": false } }, //rot
      { "color": "#FF8028", "index": 3, "marker": { "enabled": false } }, //orange
      { "color": "#E6E600", "index": 2, "marker": { "enabled": false } }, //gelb
      { "color": "#71a3b5", "index": 1, "marker": { "enabled": false } }, //blau
      { "color": "#007a2f", "index": 0, "marker": { "enabled": false } }, //grün
    ]
  };
}());