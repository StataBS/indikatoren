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
      y: -7
    },
    series: [
      { "color": "#246370", index: 4, legendIndex: 4 }, // 
      { "color": "#A8C3CA", index: 3, legendIndex: 3 }, // 
      { "color": "#FABD24", index: 2, legendIndex: 2 }, // 
      { "color": "#999999", index: 0, legendIndex: 0 }, // 
    ]
  };
}());
