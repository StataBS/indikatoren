(function () {
  return {
    chart: {
      type: "column",
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        //lineWidth: 0,
        borderWidth: 0,
      },
      line: {
        lineWidth: 3,
      }
    },
    series: [
      { "color": "#68ab2b" }, // Eigenbetrag Klient
      { "color": "#246370" }, // Beiträge Krankenversicherer
      { "color": "#fabd24" }, // Kanton/Gemeinde: Restfinanzierung
      
      
      /*
      {
        type: 'line',
        color: '#010101',
        visible: true,
        lineWidth: 3,
        legendIndex: 4,
      }
      */
    ],
    xAxis: {
      tickInterval: 1,
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
        + '<td style="text-align:right">&nbsp;<b>{point.y:,.1f} Mio. CHF</b></td>'
        + '<td style="text-align:right">&nbsp;({point.percentage:,.1f}%)</td></tr>',
      footerFormat: '<tr><td>Total: </td><td><b>{point.total:,.1f} Mio. CHF</b></td><td></td></tr></table>',
    },
    /*
        tooltip: {
          shared: true,
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f} Mio. CHF</b> ({point.percentage:,.1f}%)<br/>',
          footerFormat: 'Total: <b>{point.total:,.1f} Mio. CHF</b>',
        },
    */
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
