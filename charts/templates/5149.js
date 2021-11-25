(function () {
  return {
    xAxis: {
      tickInterval: 1,
      labels: {
        rotation: 0
      }
    },
    yAxis: {
      tickInterval: 2,
    },
    series: [
      { color: "#3C3C3C", legendIndex: 2 }
    ],
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> Geburtenziffer: <b>{point.y:,.1f} </b><br/>',
      shared: false
    }
  };
}());
