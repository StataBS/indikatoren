(function () {
  return {
    chart: {
      type: "column",
      animation: false,
      inverted: false,
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        pointWidth: 50
      }
    },
    yAxis: {
      //tickAmount: 6
      min: 0,
      labels: {
        format: "{value:,.0f}%"
      }
    },
    xAxis: {
      type: "category"
    },
    series: [
      { color: "#FF8028" }
    ],
    legend: {
      enabled: false,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      itemWidth: 300,
      itemStyle: {
        fontWeight: "normal"
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
    }
  }
}());
