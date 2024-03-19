(function () {
  return {
    chart: {
      spacingBottom: 40
    },
    title:{
      margin: 30
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false, //null,
        }
      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        color: '#0091f7',
      },
    ],
  }
}());