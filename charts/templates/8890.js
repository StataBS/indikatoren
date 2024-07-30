(function () {
  return {
    plotOptions: {
      series: {
        marker: {
          symbol: "circle",
          enabled: false
        },
      }
    },
    yAxis: [{
      labels: {
        format: "{value:,.1f}‰",
        style: {
          color: "#000000"
        }
      },
      min: -2.5,
      max: 10,
      tickAmount: 6,
      title: ""
    },
    ],
    xAxis: {
      tickInterval: 2,
      labels: {
        rotation: -45
      }
    },
    legend: {
      enabled: true,
      //"x": 25,
      //"y": 55,
      //itemWidth: 170,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      itemMarginBottom: 5,
      alignColumns: false,
      itemDistance: 10,
      labelFormatter: function () {
        return this.name.replace(" bis 2009","");
      },
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}‰</b><br/>',
    },
    series: [
      {
        color: "#008AC3",
      },
      {
        color: "#008AC3",
        dashStyle: 'ShortDash',
      },
      {
        color: "black",
        dashStyle: 'ShortDot',
        id: 'gw'
      },
      {
        color: "black",
        dashStyle: 'ShortDot',
        linkedTo: 'gw'
      }
    ],

  }
}());

