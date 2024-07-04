(function () {
  return {
    chart: {
      type: "column",
      inverted: false,
      //"spacingTop": 100
    },
    plotOptions: {
      column: {
        stacking: 'normal',
      },
      series: {
        pointPadding: 0,
        borderWidth: 0,
        pointWidth: 10,
      }
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -90
      }
    },
    yAxis: {
      // tickAmount: 8,
      tickInterval: 10,
      //max: 100,
      reversedStacks: false,
      labels: {
        format: "{value:,.0f}%"
      }
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      //"x": 25,
      //"y": 55,    
      itemWidth: 120,
      //width: 220,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
      footerFormat: '<span style="color:none">\u25CF</span> Total: <b>{point.total:,.1f}%</b>',
      shared: false
    },
    series: [
      {
        color: "#672773",
      },
      {
        color: "#fabd24",
      },
      {
        color: "#ff8028",
      },
      {
        color: "#b00000",
      },
      {
        color: "#aaaaaa",
      },
    ],
  }
}());