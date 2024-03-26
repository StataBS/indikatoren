(function () {
  return {
    chart: {
      type: "column",
    },
    subtitle:{
			useHTML: true,
		},
    plotOptions: {
      column: {
        stacking: 'normal',
        borderWidth: 0,
      },
    },
    series: [
      { "color": "#68ab2b" }, // Tagesgäste
      { "color": "#246370" }, // Krankenversicherer
//      { "color": "#fabd24" }, // Kanton/Gemeinde
    ],
    xAxis: {
      tickInterval: 1,
    },
    tooltip: {
      shared: false,
      useHTML: true,
      followPointer: true,
      headerFormat: '<span style="font-size: 10px"> {point.x} </span><table>',
      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}:&nbsp;</td>'
        + '<td style="text-align:right">&nbsp;<b>{point.y:,.1f} Mio. m<sup>3</sup></b></td>'
        + '<td style="text-align:right">&nbsp;({point.percentage:,.1f}%)</td></tr>',
      footerFormat: '<tr><td>Total: </td><td><b>{point.total:,.1f} Mio. m<sup>3</sup></b></td><td></td></tr></table>',
    },

    yAxis: 
      {
        min: 0,
        reversedStacks: true,
      },
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      reversed: false,
    }
  };
}());
