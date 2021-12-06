(function () {
  return {
    plotOptions: {
      series: {
        borderWidth: 0,
        pointWidth: 60
      }
    },
    xAxis: {
      type: "category",
      tickInterval: 1
    },
    legend: {
      "enabled": false
    },
    series: [
      { 
        color: "#0A3B19" 
      }
    ],
    chart: {
      type: "column",
      inverted: false
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.0f}</b><br/>'
    },
  }
}());
