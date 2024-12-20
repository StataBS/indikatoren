(function () {
  return {
    yAxis: [
      {
        min: 0,
        tickAmount: 7,
        labels: {
          formatter: function () {
            return Highcharts.numberFormat((this.value), 1) + '';
          },
          style: {
            color: "black",
          },
        },

        title: {
          text: ""
        }
      },
      {
        min: 0,
        tickAmount: 7,
        labels: {
          style: {
            color: "black",
          },
          formatter: function () {
            return Highcharts.numberFormat((this.value), 1) + '';
          }
        },
        title: {
          text: ""
        },
        opposite: true
      }
    ],
    xAxis: {
      type: "category",
      tickInterval: 1
    },
    legend: {
      itemDistance: 8,
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      itemMarginBottom: 5,
      align: "left",
      labelFormatter: function () {
        // Legende manuell beschriften
        if (this.index === 0) {
          return 'Kosten Kanton inkl. Gemeinden (in Mio. Fr.)';
        } else if (this.index === 1) {
          return 'Kosten Stadt Basel (in Mio. Fr.)';
        } else if (this.index === 2) {
          return 'Durchschnittsbeitrag pro Tag Stadt Basel (in Fr., rechte Skala)';
        }
      }
    },
    "series": [
      {
        "index": 0,
        "color": "#a1c436",
        "yAxis": 0
      },
      {
        "index": 1,
        "color": "#009984",
        "yAxis": 0
      },
      {
        "index": 1,
        "color": "#010101",
        "yAxis": 1
      }
    ],
    tooltip: {
      pointFormatter: function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '</b><br/><b>'
      },
      shared: false
    },
    "chart": {
      //"marginTop": 120
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
          symbol: "circle"
        },
        dataLabels: {
          enabled: false
        }
      }
    }
  };
}());
