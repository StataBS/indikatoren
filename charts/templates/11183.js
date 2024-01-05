(function () {
  return {
    chart: {
      type: "column",
    },
    plotOptions: {
      series: {
        dataLabels: {
          style: {
            fontSize: "10px"
          }
        },
        stacking: "normal",
        borderWidth: 0,
      }
    },
    series: [
      {
        "color": "#ed3f7a",
        legendIndex: 2,
      },
      {
        "color": "#ed802f",
        legendIndex: 1,
      },
      /*
            {
              type: 'line',
              color: '#010101',
              visible: true,
              lineWidth: 3,
              legendIndex: 3,
            }
      */
    ],
    xAxis: {
      // type: "category"
    },
    yAxis: {
      reversedStacks: true,
    },

    tooltip: {
      shared: true,
      useHTML: true,
      followPointer: true,
      headerFormat: '<span style="font-size: 10px"> {point.x} </span><table>',
      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}: &nbsp;</td>'
        + '<td style="text-align:right">&nbsp;<b>{point.y:,.0f} Austritte</b></td>'
        + '<td style="text-align:right">&nbsp;({point.percentage:,.1f}%)</td></tr>',
      footerFormat: '<tr><td>Total: </td><td><b>{point.total:,.0f} Austritte</b></td><td></td></tr></table>',
    },

    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      itemMarginBottom: 4,
      align: "left",
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      reversed: false,
    }
  };
}());
