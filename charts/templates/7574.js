(function () {
  return {
    chart: {
      type: "column"
    },
    plotOptions: {
      series: {
        "stacking": "normal",
        pointPadding: 0,
        pointWidth: "15",
        groupPadding: 0.5, // exaclty overlaps columns
        borderWidth: 0
      }
    },
    yAxis: [
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        lineColor: '#B9CFD7',
        title: {
          style: {
            color: "#000000",
            fontSize: null
          },
          text: null
        },
        labels: {
          format: "{value:,.0f}",
          style: {
            color: "#000000"
          }
        }
      },
      {
        opposite: true,
        min: 0,
        max: 0.012,
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        lineColor: '#B9CFD7',
        title: {
          style: {
            color: "#000000",
            fontSize: null
          },
          text: null
        },
        labels: {
          formatter: function () {
            return Highcharts.numberFormat(this.value * 100, 1) + "%";
          },
          style: {
            color: "#000000"
          },
        }
      }
    ],
    xAxis: {
      tickInterval: 1,
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      itemMarginBottom: 5,
      itemDistance: 15,
      padding: 1,
      alignColumns: false,
      //symbolPadding: 5,
    },
    data: {
      seriesMapping: [
        {
          x: 1, y: 7
        },
        {
          x: 1, y: 6
        },
        {
          x: 1, y: 5
        },
        {
          x: 1, y: 4
        },
        {
          x: 1, y: 3
        },
        {
          x: 1, y: 2
        },
        {
          x: 1, y: 8
        }
      ]
    },
    series: [
      {
        color: '#7F5F1A',
        index: 1,
        legendIndex: 7
      },
      {
        color: '#CD9C00',
        index: 1,
        legendIndex: 6
      },
      {
        color: '#FABD24',
        index: 1,
        legendIndex: 5
      },
      {
        color: '#FFDA80',
        index: 1,
        legendIndex: 4
      },
      {
        color: '#246370',
        index: 1,
        legendIndex: 3
      },
      {
        color: '#A8C3CA',
        index: 1,
        legendIndex: 2
      },
      {
        yAxis: 1,
        color: "#B375AB",
        index: 0,
        type: "line",
        marker: {
          enabled: false
        },
        legendIndex: 8,
        tooltip: {
          headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
          pointFormatter: function () {
            return '<span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(100 * this.y, 1, ",", " ") + '%</b><br/>'; 
          }
        }
      },
    ],
    tooltip: {
      formatter() {
        // If the current series is index 0, show a separate tooltip
        if (this.series.userOptions.index === 0) {
          return '<span style="font-size: 10px">Jahr: ' + this.x +
            '</span><br><span style="color:' + this.color + '">●</span> ' + 
            this.series.name + ': <b>' + Highcharts.numberFormat(this.y*100, 2, ",", " ") + '%</b><br/>';
        } 
        // For all other series (index 1+), show a shared tooltip
        else {
          const series = this.series.chart.series;
          let tooltip = "";
          let s = 0;
          
          series.forEach(series => {
            // Skip series with index 0 (we want it separate)
            if (series.userOptions.index !== 0) {
              series.setState('hover');
              series.points.forEach(point => {
                if (point.x === this.x) {
                  tooltip += `<span style="color:${point.color}">\u25CF</span> ${point.series.name}: <b>${Highcharts.numberFormat(point.y, 0, ",", " ")}</b><br>`;
                  s += point.y;
                }
              });
            }
          });
          
          return '<span style="font-size: 10px">Jahr: ' + this.x +
            '</span><br>' + tooltip + 
            '<span style="opacity: 0">\u25CF</span> Total: <b>' + 
            Highcharts.numberFormat(s, 0, ",", " ") + '</b>';
        }
      }
    }

  };
}());
