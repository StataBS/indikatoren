(function () {
  return {
    xAxis: {
      tickInterval: 1
    },
    yAxis: {
      labels: {
        format: "{value:,.0f}",
      }
    },
    /*
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:,.1f}%)<br/>',
    },
    */

    series: [
      {
        color: "#010101",
        visible: false,
        legendIndex: 3,
      },
      {
        "color": "#006400",
        legendIndex: 1,
      },
      {
        "color": "#68ab2b",
        legendIndex: 2,
      },
    ],
    legend: {
      itemWidth: 300,
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    plotOptions: {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        },
      }
    }
  };
}());