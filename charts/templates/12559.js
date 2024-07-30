(function () {
  return {
    chart: {
      //spacingBottom: 40
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
    xAxis:{
      tickInterval: 1,
    },
    "yAxis": {
      min: 0,
      tickInterval: 500,
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