(function () {
  return {
    yAxis: {
      //      tickAmount: 10,
      min: 3,
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
      },
      {
        color: '#ffda80',
      },
      {
        color: '#FF8028',
      },
      {
        color: '#010101',
      },
      {
        color: '#671a7f',
      },
    ],
    tooltip: {
      pointFormatter: function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '</b><br/><b>'
      },
      "shared": false
    },
    chart: {
    },
    plotOptions: {
      "series": {
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
