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
        max: 1,
        //        tickAmount: 5,
        labels: {
          format: '{value:.0f}',
          "formatter": function () {
            return Highcharts.numberFormat((this.value * 100), 0) + '%';
          },
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
      type: "category",
    },
    tooltip: {
      shared: true,
      useHTML: true,
      followPointer: true,
      headerFormat: '<span style="font-size: 10px"> {point.key} </span> <table>',
      pointFormatter: function () {
        var value = (this.y * 100).toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
        return '<tr><td><span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': &nbsp;</td>'
          + '<td style="text-align:right">&nbsp;<b>' + value + '%</b></td></tr>';
      },
    },
    //      pointFormatter: function () {
    //        return '<tr><td><span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': &nbsp;</td>'
    //          + '<td style="text-align:right">&nbsp;<b>' + (this.y * 100).toFixed(1) + '%</b></td></tr>';
    //      },
    //    },
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
      },
      {
        color: '#43b696',
      },
      {
        color: '#4af1c3',
      },
    ],
  };
})();
