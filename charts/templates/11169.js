(function () {
  return {
    chart: {
      type: "column",
      //type: "area",
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
    xAxis: {
      //      type: "category",
      tickInterval: 1
    },
    yAxis: {
      tickAmount: 7,
      labels: {
        format: "{value:,.0f}",
        style: {
          color: "black",
        },
      },
      reversedStacks: true
    },
    tooltip: {
      shared: true,
      useHTML: true,
      followPointer: true,
      headerFormat: '<span style="font-size: 10px"> {point.x} </span><table>',
      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}: &nbsp;</td>'
        + '<td style="text-align:right">&nbsp;<b>{point.y:,.0f} Plätze</b></td>'
        + '<td style="text-align:right">&nbsp;({point.percentage:,.1f}%)</td></tr>',
      footerFormat: '<tr><td>Total: </td><td><b>{point.total:,.0f} Plätze</b></td><td></td></tr></table>',
    },
    /*
      tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:,.1f}%)<br/>',
    //    footerFormat: 'Total: <b>{point.total:,.0f}</b>'
     },
     */
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      itemStyle: {
        fontWeight: "normal"
      }
    },
    series: [
      {
        color: "#68ab2b"
      },
      {
        color: "#007a2f"
      },
      {
        color: "#0a3b19"
      },
      /*
      {
        type: 'line',
        color: '#010101',
        lineWidth: 3,
      }
      */
    ]
  }
}());
