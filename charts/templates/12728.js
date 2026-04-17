(function () {
  return {
    yAxis: {
      //      tickAmount: 10,
      labels: {
        formatter: function () {
          return Highcharts.numberFormat((this.value), 0) + '';
        }
      },

    },
    xAxis: {
      //      type: "category",
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
        color: '#68ab2b',
        stacking: true
      },
      {
        color: '#ffda80',
        stacking: true
      },
      {
        color: '#FF8028',
        stacking: true
      },
      {
        color: '#7f5f1a',
        stacking: true
      },
      {
        color: '#671a7f',
        stacking: true
      },
      {
        type: 'line',
        color: '#010101',
        stacking: false
      },
    ],
    /*
    tooltip: {
      useHTML: true,
      formatter() {
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
      useHTML: true, // Nötig für Tabellenformat
      formatter: function () {
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
    },
    chart: {
      type: "column"
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        borderWidth: 0,
      },
      series: {
        "marker": {
          "enabled": false,
          "symbol": "circle"
        },
        "dataLabels": {
          "enabled": false
        }
      }
    }
  }
}());
