(function () {
  return {
    chart: {
      type: "column"
    },
    plotOptions: {
      series: {
        stacking: "normal",
        borderWidth: 0,
        groupPadding: 0,
        minPointLength: 2
      }
    },
    xAxis: {
      type: "category",
      tickInterval: 1,
      labels: {
        step: 1,
        rotation: -90
      }
    },
    yAxis: {
      //max: 500000,
      //tickInterval: 50000,
      tickAmount: 6,
      labels: {
        format: "{value:,.0f}",
      },
      //max: 60000
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      itemMarginBottom: 2
    },
    subtitle: {
      useHTML: true
    },
    series: [
      {
        color: "#007A2F", index: 0, legendIndex: 0, tooltip: {
          valueDecimals: 0
        },
      },
      {
        color: "#73B97C", index: 1, legendIndex: 1, tooltip: {
          valueDecimals: 0
        },
      },
      {
        color: "#D7E8D2", index: 2, legendIndex: 2, tooltip: {
          valueDecimals: 0
        },
      },
      {
        color: "#68ab2b", index: 3, legendIndex: 3, tooltip: {
          valueDecimals: 0
        },
      },
      {
        color: "#fabd24", index: 4, legendIndex: 4, tooltip: {
          valueDecimals: 0
        },
      },
       {"color": "#672773", index: 5, legendIndex: 5},
       {"color": "#b475ab", index: 6, legendIndex: 6},
       {
        color: "#C8C8C8", index: 7, legendIndex: 7, tooltip: {
          valueDecimals: 0
        },
      },

    ],
    tooltip: {
      useHTML: true,
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} m<sup>2</sup></b><br/>',
      footerFormat: 'Total: <b>{point.total:,.0f}</b>',
      shared: true
    }
  }
}());
