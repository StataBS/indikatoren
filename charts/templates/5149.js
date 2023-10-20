(function () {
  return {
    xAxis: {
      tickInterval: 1,
      labels: {
        rotation: -45
      }
    },
    yAxis: {
      tickInterval: 2,
    },
    series: [
      { color: "#8AB77D", zIndex: 1 },
      { color: "#83522E", zIndex: 0 }
    ],
    legend: {
      enabled: true,
      verticalAlign: "top",
      align: "left",
      layout: "horizontal"

    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f} </b><br/>',
      shared: false
    }
  };
}());

