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
        index: 0,
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
        index: 1,
        type: "line",
        marker: {
          enabled: false
        },
        legendIndex: 8,
        tooltip: {
          headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
          pointFormatter: function () {
            return '<span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(100 * this.y, 1, ",", " ") + '%</b><br/>'; /*number of decimals changed from 2 to 1*/
          }
        }
      },
    ],
    tooltip: {
      shared: true
    },
  };
}());
