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
                    + `<td style="text-align:right">&nbsp;<b>${Highcharts.numberFormat(point.y, 0, ",", " ")} Stunden</b></td>`
                    + `<td style="text-align:right">&nbsp;(${Highcharts.numberFormat(point.percentage, 1, ",", " ")}%)</td></tr>`;
                  s += point.y;
                }
              });
            }
          });
          tooltip += `<tr><td>Total:</td><td style="text-align:right"><b>${Highcharts.numberFormat(s, 0, ",", " ")} Stunden</b></td></tr></table>`;
          return `<span style="font-size: 10px">${this.x}</span><br>${tooltip}`;
        } else {
          return `<span style="font-size: 10px">${this.x}</span><br><span style="color:${this.color}">●</span> ${this.series.name}: <b>`
            + `${Highcharts.numberFormat(this.y, 0, ",", " ")}</b><br/>`;
        }
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
