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
      tickinterval: 1
    },
    legend: {
      //      itemWidth: 100,
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
        color: '#52ada1',
        stacking: true
      },
      {
        color: '#e09f6e',
        stacking: true
      },
      {
        type: 'line',
        color: '#010101',
        visible: true,
        stacking: false
      },
    ],
    // Tooltip auskommentieren für das Bilden des Sets, sonst wird kein Bild erzeugt.
    /*
        tooltip: {
          useHTML: true,
          formatter: function() {
            if (this.series.userOptions.stacking == true) { // nur für series mit stacking: true
              const series = this.series.chart.series;
              let tooltip = "<table>";
              let s = 0;
              series.forEach(series => {
                if (series.userOptions.stacking == true) { // nur für series mit stacking: true
                  series.points.forEach(point => {
                    if (point.x === this.x) {
                      tooltip += `<tr><td><span style="color:${point.color}">\u25CF</span> ${point.series.name}: &nbsp;</td>`
                        + `<td style="text-align:right">&nbsp;<b>${Highcharts.numberFormat(point.y, 0, ",", " ")} Tage</b></td>`
                        + `<td style="text-align:right">&nbsp;(${Highcharts.numberFormat(point.percentage, 1, ",", " ")}%)</td></tr>`;
                      s += point.y;
                    }
                  });
                }
              });
              tooltip += `<tr><td>Total:</td><td style="text-align:right"><b>${Highcharts.numberFormat(s, 0, ",", " ")} Tage</b></td></tr></table>`;
              return `<span style="font-size: 10px">${this.x}</span><br>${tooltip}`;
            } else {
              return `<span style="font-size: 10px">${this.x}</span><br><span style="color:${this.color}">●</span> ${this.series.name}: <b>`
                + `${Highcharts.numberFormat(this.y, 0, ",", " ")}</b><br/>`;
            }
          }
        }
    */
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
              + `<td style="text-align:right"><b>${Highcharts.numberFormat(point.y, 0, ",", " ")} Tage</b></td>`
              + `<td style="text-align:right">&nbsp;(${Highcharts.numberFormat(point.percentage, 1, ",", " ")}%)</td>`
              + `</tr>`;
            s += point.y;
          }
        });

        tooltip += `<tr><td style="border-top: 1px solid #ccc">Total:</td>`
          + `<td style="text-align:right; border-top: 1px solid #ccc"><b>${Highcharts.numberFormat(s, 0, ",", " ")} Tage</b></td>`
          + `<td></td></tr></table>`;
        return tooltip;
      }
    }
  };
})();
