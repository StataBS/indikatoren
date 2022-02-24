(function () {
  return {
    plotOptions: {
      series: {
        pointWidth: 13,
        dataLabels: {
          style: {
            fontSize: 10
          }
        },
        stacking: "normal"
      }
    },
    xAxis: {
      type: "category",
      labels: {
        align: "Left",
        x: -90
      }
    },
    yAxis: {
      labels: {
        format: "{value:,.0f}%"
      },
      max: 100,
      reversedStacks: false
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.1f}' + '%' + '</b><br/>',
      shared: false,
      useHTML: true
    },
    legend: {
      layout: "horizontal",
      itemDistance: 18,
      verticalAlign: "top",
      itemMarginBottom: 5,
      align: "left",
      itemStyle: {
        fontWeight: "normal"
      }
    },
    series: [
      {
        color: "#2F656B",
      },
      {
        color: "#8B2223",
      },
      {
        color: "#9A86A6",
      },
      {
        color: "#BAA85A",
      },
      {
        color: "#71A3B5",
      },
      {
        color: "#8AB77D",
      }
    ],
    chart: {
      type: "column",
      inverted: "true",
      height: 600,
      spacingLeft: 100
    }
  }
}());
