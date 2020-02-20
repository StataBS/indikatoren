(function () {
  return {
    chart: {
      "type": "column"
    },
    yAxis: {
      tickInterval: 1
    },
    xAxis: {
      tickInterval: 1
    },
    legend: {
      "enabled": true,
      "verticalAlign": "top",
      "align": "left",
      labelFormatter: function () {
        return this.name.replace('Wohnviertel', '');
      }
    },
    series: [
      {
        "color": "#cd9c00"
      },
      {
        "color": "#b375ab"
      }
    ]
  };
}());