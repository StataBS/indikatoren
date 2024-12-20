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
      line: {
        lineWidth: 3,
      }
    },
    yAxis: {
      min: 0,
      //    max: 100,
      //    tickAmount: 5,
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
    xAxis: {
//      type: "category",
      tickInterval: 1,
      endOnTick: false,
      startOnTick: false,
    },
    tooltip: {
      shared: true,
      useHTML: true,
      followPointer: true,
      headerFormat: '<span style="font-size: 10px"> {point.x} </span> <table>',
      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}: &nbsp;</td>'
        + '<td style="text-align:right">&nbsp;<b>{point.y:,.0f}</b></td></tr>',
    },
    legend: {
      itemWidth: 75,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      alignColumns: false,
      itemDistance: 10,
      labelFormatter: function () {
        if (this.index === 12) {
          return 'Total Pflegetage';
        } else {
          return this.name;
        }
      }
    },
    series: [
      {
        color: '#68ab2b', index: 12,
        legendIndex: 1,
      },
      {
        color: '#007a2f', index: 11,
        legendIndex: 2,
      },
      {
        color: '#ffda80', index: 10,
        legendIndex: 3,
      },
      {
        color: '#fabd24', index: 9,
        legendIndex: 4,
      },
      {
        color: '#cd9c00', index: 8,
        legendIndex: 5,
      },
      {
        color: '#7f5f1a', index: 7,
        legendIndex: 6,
      },
      {
        color: '#45381d', index: 6,
        legendIndex: 7,
      },
      {
        color: '#e7cee2', index: 5,
        legendIndex: 8,
      },
      {
        color: '#b375ab', index: 4,
        legendIndex: 9,
      },
      {
        color: '#923f8d', index: 3,
        legendIndex: 10,
      },
      {
        color: '#662673', index: 2,
        legendIndex: 11,
      },
      {
        color: '#2e1435', index: 1,
        legendIndex: 12,
      },
      {
        type: 'line',
        color: '#010101', index: 13,
        legendIndex: 13,
        visible: true
      },
    ],
  };
})();
