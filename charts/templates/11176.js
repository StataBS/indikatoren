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
      { "color": "#007a2f" }, // Eigenbetrag Pension und Betreuung 
      { "color": "#68ab2b" }, // Eigenbetrag Pflege 
      { "color": "#246370" }, // Krankenversicherer
      { "color": "#ffda80" }, // Kanton/Gemeinde: Restfinanzierung
      { "color": "#fabd24" }, // Kanton/Gemeinde: Ergänzungsleistungen
      /*
            {
              type: 'line',
              "color": "black",
              visible: true,
              lineWidth: 2,
            },
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
      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}:&nbsp;</td>'
        + '<td style="text-align:right">&nbsp;<b>{point.y:,.1f} Mio. Fr.</b></td>'
        + '<td style="text-align:right">&nbsp;({point.percentage:,.1f}%)</td></tr>',
      footerFormat: '<tr><td>Total: </td><td><b>{point.total:,.1f} Mio. Fr.</b></td><td></td></tr></table>',
    },
    /*
        tooltip: {
          shared: true,
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f} Mio. Fr.</b> ({point.percentage:,.1f}%)<br/>',
          footerFormat: 'Total: <b>{point.total:,.1f} Mio. Fr.</b>',
        },
    */
    "legend": {
      enabled: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      reversed: false,
    }
  };
}());
