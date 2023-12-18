(function () {
  return {
    yAxis: {
      tickAmount: 7,
      labels: {
        formatter: function () {
          return Highcharts.numberFormat((this.value), 0) + '';
        }
      },

    },
    xAxis: {
      tickInterval: 1
    },
    legend: {
      itemDistance: 8,
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      itemMarginBottom: 5,
      align: "left"
    },

    series: [
      {
        index: 0,
        color: "#ed802f"
      },
      {
        index: 1,
        color: "#7a3050"
      },
      {
        index: 1,
        color: "#ed3f7a",
      }
    ],
    tooltip: {

      shared: true,
      useHTML: true,
      followPointer: true,
      headerFormat: '<span style="font-size: 10px"> {point.x} </span><table>',
      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}: &nbsp;</td>'
        + '<td style="text-align:right">&nbsp;<b>{point.y:,.1f} Tage</b></td> </tr>',
      /*
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f} Tage</b><br/>',
            shared: true
      */
    },
    chart: {
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
          symbol: "circle"
        },
        /*
        "dataLabels": {
          "enabled": true,
          formatter: function () {
            return Highcharts.numberFormat(this.y, 2);
          },
          style: {
            fontSize: "9px"
          }
        }
        */
      }
    }
  }
}());
