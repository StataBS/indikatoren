(function () {
  return {
    chart: {
      /*marginBottom: 75,
      marginTop: 75,*/
      type: "column",
      spacingBottom: 45,
    },
    plotOptions: {
      series: {
        minPointLength: 3,
        stacking: "normal",
      }
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      tickAmount: 7,
      //max: 6000,
      labels: {
        format: "{value:,.0f}"
      },
      reversedStacks: true
    },
    tooltip: {
      pointFormat: '<span style="color:transparent">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:,.1f}%)<br/>',
      footerFormat: '<span style="color:none">\u25CF</span> Total: <b>{point.total:,.0f}</b>'
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      //alignColumns: false,
      //itemWidth: 300,
    },
    series: [
      { color: "#CD9C00", index: 3 },
      { color: "#FABD24", index: 2 },
      { color: "#68AB2B", index: 1 },
      { color: "#0A3B19", index: 0 },
    ],
  }
}());
