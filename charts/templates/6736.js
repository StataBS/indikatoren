(function () {
  return {
    chart: {
      width: 665,
      marginBottom: 75,
      spacingTop: 5
    },
    xAxis: {
      labels: {
        rotation: -90,
        x: -6,
        y: 10
      }
    },
    yAxis: {
      tickInterval: 25,
      max: 100
    },
    legend: {
      reversed: true,
      y: -13
    },
    series: [
      { color: "#007a2f", index: 4, legendIndex: 0 }, // dunkelgrün
      { color: "#68ab2b", index: 3, legendIndex: 1 }, // grün
      { color: "#ffbb58", index: 2, legendIndex: 2 }, // orange
      { color: "#dc440e", index: 1, legendIndex: 3 }, // rot
      { color: "#999999", index: 0, legendIndex: 4 }, // grau
    ]
  };
}());