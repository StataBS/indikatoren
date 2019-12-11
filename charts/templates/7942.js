(function () {
  return {
    "chart": {
      "type": "column",
      spacing: [5, 2, -30, 2],
      //width: 665
    },
    "plotOptions": {
      "series": {
        //pointPadding: 100,
        borderWidth: 0,
        "pointWidth": 10,
        "stacking": "normal"
      }
    },
    xAxis: {
      type: "category",
      tickInterval: 1,
      labels: {
        step: 1,
        rotation: -90,
        align: "left",
        y: 45,
        formatter: function () {
          return this.value.replace('Messe', 'Me.').replace('Erlenmatt', 'Erl.');
        }
      }
    },
    yAxis: {
      tickAmount: 5,
      labels:{
        x: -10
      }
    },
    "legend": {
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "align": "right",
      reversed: true,
      "itemMarginBottom": 5,
      y: -30,
      "itemStyle": {
        "width": 70,
        textOverflow: null
      },
      /*      labelFormatter: function () {
              return this.name.replace("Verkehrs", "Verkehrs-<br/>")
            }
      */
    },
    "series": [
      {
        "color": "#9E7C59", index: 5, legendIndex: 0, tooltip: {
          valueDecimals: 0
        },
      },
      {
        "color": "#C4AB91", index: 4, legendIndex: 1, tooltip: {
          valueDecimals: 0
        },
      },
      {
        "color": "#FFDA80", index: 3, legendIndex: 2, tooltip: {
          valueDecimals: 0
        },
      },
      {
        "color": "#C9D6DB", index: 2, legendIndex: 3, tooltip: {
          valueDecimals: 0
        },
      },
      {
        "color": "#6F6F6F", index: 1, legendIndex: 4, tooltip: {
          valueDecimals: 0
        },
      },
      // {"color": "#ff8028", index: 4, legendIndex: 5},
    ]
  }
}());
