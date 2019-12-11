(function () {
  return {
    "chart": {
      //"marginBottom": 75,
      //"marginTop": 75,
      "type": "column",
      spacing: [5, 2, 5, 2]
    },
    "plotOptions": {
      column: {
        pointWidth: 10,
      },
      "series": {
        "stacking": "percent",
        groupPadding: 0.1
      },
      borderwidth: 0
    },
    "xAxis": {
      type: "category",
      tickInterval: 1,
      labels: {
        step: 1,
        rotation: -90,
        formatter: function () {
          return this.value.replace('Messe', 'M.').replace('Erlenmatt', 'E.');
        }
      }
      //        align: "left",
      //      y: 45,

    },
    "yAxis": {
      "tickInterval": 20,
      "labels": {
        "format": "{value}%"
      },
      "min": 0
    },
    "legend": {
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "itemMarginBottom": 5,
      //"itemWidth": 205,
      "align": "right",
      y: -30,
      "itemStyle": {
        "fontWeight": "normal"
      },
      labelFormatter: function () {
        var l = this.name.replace('-', '-<br>');
        l = l.replace('Zugehörigkeit', 'Zugehö-<br>rigkeit');
        return l;
      }
    },
    "series": [
      { "color": "#71a3b5", index: 6, legendIndex: 1 },
      { "color": "#672773", index: 5, legendIndex: 2 },
      { "color": "#ff8028", index: 4, legendIndex: 3 },
      { "color": "#73ba7c", index: 3, legendIndex: 4 },
      { "color": "#E7CEE2", index: 2, legendIndex: 5 },
      { "color": "#999999", index: 1, legendIndex: 6 },

    ]
  }
}());

