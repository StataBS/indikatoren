(function () {
  return {
    chart: {
      type: "column",
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        borderWidth: 0,
      },
    },
    series: [
      { "color": "#007a00" },
      { "color": "#246370" }, //fabd24
      { "color": "#ffda80" },
      { "color": "#d8b43f" }, //a8c4cb
      { "color": "#68ab2b" },
    ],
    xAxis: {
      tickInterval: 1,
    },
    yAxis: {
      //   reversedStacks: true,
      labels: {
        formatter: function () {
          return Highcharts.numberFormat((this.value), 0);
        },
      }
    },
    tooltip: {
      shared: true,
      useHTML: true,
      followPointer: true,
      headerFormat: '<span style="font-size: 10px"> {point.x} </span><table>',
      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}:&nbsp;</td>'
        + '<td style="text-align:right">&nbsp;<b>{point.y:,.1f} GWh</b></td>'
        + '<td style="text-align:right">&nbsp;({point.percentage:,.1f}%)</td></tr>',
      footerFormat: '<tr><td><span style="color:transparent">\u25CF</span>&nbsp;Total: </td><td><b>{point.total:,.1f} GWh</b></td><td></td></tr></table>',
    },
    "legend": {
      enabled: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      reversed: false,
    }
  };
}());
