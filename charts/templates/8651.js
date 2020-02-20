(function () {
  return {
    "chart": {
      "type": "column",
      spacing: [5,2,5,2],
      width: 665
    },
    plotOptions: {
      series: {
        stacking: "normal",
        borderWidth: 0,
        groupPadding: 0,
        minPointLength: 2
      }
    },
    xAxis: {
      type: "category",
      tickInterval: 1,
      labels: {
        step: 1,
        rotation: -90,
        "formatter": function () {
          return this.value.replace('Kleinhüningen', 'Kleinh.');
        }
      }
    },
    yAxis: {
      //max: 120000,
      //tickInterval: 60000,
      tickAmount: 7,
      labels: {
        format: "{value:,.0f}",
      },
      max: 300000
    },
    "legend": {
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "middle",
      y: -30,
      "align": "right",
      "itemMarginBottom": 5,
      "itemStyle": {
        "width": 70,
        textOverflow: null
      },
      labelFormatter: function () {
        return this.name.replace("/", "/<br/>")
      }
    },
    subtitle: {
      useHTML: true
    },
    series: [
      {
        color: "#007A2F", index: 0, legendIndex: 0, tooltip: {
          valueDecimals: 0
        },
      },
      {
        color: "#73B97C", index: 1, legendIndex: 1, tooltip: {
          valueDecimals: 0
        },
      },
      {
        color: "#D7E8D2", index: 2, legendIndex: 2, tooltip: {
          valueDecimals: 0
        },
      },
      {
        color: "#68ab2b", index: 3, legendIndex: 3, tooltip: {
          valueDecimals: 0
        },
      },
      {
        color: "#C8C8C8", index: 5, legendIndex: 4, tooltip: {
          valueDecimals: 0
        },
      },
      // {"color": "#ff8028", index: 4, legendIndex: 5},
    ]
  }
}());