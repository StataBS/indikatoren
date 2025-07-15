(function () {
  return {
    chart: {
      type: "column",
    },
    subtitle: {
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
    "xAxis": { //label last tick
      tickPositioner: function () {
        var positions = [],
          ext = this.getExtremes(),
          xMax = Math.round(ext.max),
          xMin = Math.round(ext.min) + 1;
        var xMin_even = Math.round(ext.min);

        if (xMax % 2 == 1) {
          for (var i = xMin; i < xMax; i++) {
            if (i % 2 == 1) {
              positions.push(i);
            }
          }
          positions.push(xMax);
          return positions;
        } else if (xMax % 2 == 0) {
          for (var i = xMin_even; i < xMax; i++) {
            if (i % 2 == 0) {
              positions.push(i);
            }
          }
          positions.push(xMax);
          return positions;
        }
      },
      labels: {
        rotation: -45
      }
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
      tickInterval: 5
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
