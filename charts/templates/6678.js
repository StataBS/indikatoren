(function () {
  return {
    chart: {
      inverted: true,
      marginLeft: 120,
      marginRight: 10,
      spacingRight: 3
    },
    legend: {
      layout: "horizontal",
      align: "left",
      verticalAlign: "top",
      itemDistance: 10,
      symbolPadding: 1
    },
    xAxis: {
      labels: {
        formatter: function () {
          return this.value.replace("und", "u.");
        }
      }
    },
    yAxis: {
      tickInterval: 20,
      labels: {
        rotation: 0,
        y: 18
      }
    },
    series: [
      { color: "#923F8D", index: 1, legendIndex: 0 },
      { color: "#E7CEE2", index: 0, legendIndex: 1 }
    ]
  };
}());