
/*global Highcharts*/
(function () {
  return {
    "chart": {
      "type": "column",
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
      }
    },
    xAxis: {
      min: 2009,
      tickInterval: 1,
      labels: {
        rotation: -45
      }
    },
    yAxis: {
      labels: {
        format: "{value:,.0f}",
      },
      min: -1500,
      tickInterval: 500,
      plotLines: [{
        color: '#B9CFD7',
        value: 0,
        width: 1
      }]
    },
    "series": [
      { "color": "#FABD24", legendIndex: 1 }, /* gelb*/
      { "color": "#923F8D", legendIndex: 3 }, /* violett*/
      { "color": "#bbbbbb", legendIndex: 2 }, /* violett*/
      { "color": "#000000", legendIndex: 0, type: 'line' } /* grau */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemWidth: 105,
      itemStyle: {
        textOverflow: undefined,
        whiteSpace: 'nowrap',
      },
      labelFormatter: function () {
        return this.name.replace('veränderung', 'bilanz');
      }
    }
  }
}());