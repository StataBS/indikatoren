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
    yAxis: [
      {
        min: 0,
        //        max: 1,
        //        tickAmount: 5,
        labels: {
          format: '{value:,.0f}',
          style: {
            color: "black",
          },
        },
        title: {
          text: "", // Beschriftung linke Achse
        },
      },
    ],
    xAxis: {
      //      type: "category",
    },
    legend: {
      itemWidth: 150,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      alignColumns: false,
      itemDistance: 10
    },
    series: [
      {
        color: '#1f5647',
        stacking: true
      },
      {
        color: '#43b696',
        stacking: true
      },
      {
        color: '#4af1c3',
        stacking: true
      },
      {
        type: 'line',
        color: '#010101',
        stacking: false,
      },
    ],
    tooltip: {
      shared: true,
      useHTML: true, // Nötig für Tabellnformat
      formatter: function() {
        let tooltip = `<span style="font-size: 10px">${this.x}</span><br/>`;
        tooltip += `<table style="min-width: 150px">`; // Tabelle für Ausrichtung

        let s = 0;
        this.points.forEach(point => {
          if (point.series.userOptions.stacking == true) {
            tooltip += `<tr>`
              + `<td><span style="color:${point.color}">\u25CF</span> ${point.series.name}:&nbsp;</td>`
              + `<td style="text-align:right"><b>${Highcharts.numberFormat(point.y, 0, ",", " ")} Stunden</b></td>`
              + `<td style="text-align:right">&nbsp;(${Highcharts.numberFormat(point.percentage, 1, ",", " ")}%)</td>`
              + `</tr>`;
            s += point.y;
          }
        });

        tooltip += `<tr><td style="border-top: 1px solid #ccc">Total:</td>`
          + `<td style="text-align:right; border-top: 1px solid #ccc"><b>${Highcharts.numberFormat(s, 0, ",", " ")} Stunden</b></td>`
          + `<td></td></tr></table>`;
        return tooltip;
      }
    },
    /*
        tooltip: {
          shared: true,
          useHTML: true,
          followPointer: true,
          headerFormat: '<span style="font-size: 10px"> {point.key} </span> <table>',
          pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}: &nbsp;</td>'
            + '<td style="text-align:right">&nbsp;<b>{point.y:,.0f}</b></td></tr>',
        },
    */
  };
})();
