(function () {
  return {
    chart: {
      inverted: true,
      marginRight: 15
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
          return this.value.replace("Eingebürgerte","Eingebürgerte<br/>").replace("innen seit","innen<br>seit ");
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