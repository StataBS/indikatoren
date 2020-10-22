
/*global Highcharts*/
(function () {
  return {
    "chart": {
      "type": "column",
      "inverted": false,
      "spacingBottom": 40
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
      }
    },
    /*"xAxis": {
      tickInterval: 1,
     
    },*/
    yAxis: {
      showLastLabel: true,
      endOnTick: true,
      maxPadding: 0,
      labels: {
        format: "{value:,.0f}",
      },
      opposite: false,
      reversedStacks: false,
      //"max": 1000,
      min: null,
      //tickInterval: 250,
      plotLines: [{
        color: '#B9CFD7',
        value: 0,
        width: 1
      }]
    },
    "series": [
      { "color": "#FABD24", showInNavigator: false }, /* gelb*/
      { "color": "#923F8D", showInNavigator: false }, /* violett*/
      { "color": "#bbbbbb", showInNavigator: false }, /* violett*/
      { "color": "#000000", type: 'line', showInNavigator: true } /* grau */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left"
    },
    tooltip: {
      shared: false,
      split: false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    },
    navigator: {
      enabled: true,
      series: {
        type: 'line'
      }
    },
    xAxis: {
    
      endOnTick: true,
      startOnTick: true,
      showFirstLabel: true,
      showLastLabel: true,
      tickInterval: 365 * 24 * 3600 * 1000,
     // minTickInterval: 365 * 24 * 3600 * 1000,
      ordinal: false,
      crosshair: {
        width: 0
      }
    },
    data: {
      parsed: function (columns) {
        //convert year in first column to UTC date to be used by Highstock
        var utcDate = [];
        columns[0].forEach(function (v, i, a) {
          utcDate.push(Date.UTC(columns[0][i]));
        });
        columns[0] = utcDate;
      }
    },
    rangeSelector: {
      buttons:
        [
          {
            count: 9,
            type: 'year',
            text: '10 J'
          },
          {
            count: 19,
            type: 'year',
            text: '20 J'
          },
          {
            count: 29,
            type: 'year',
            text: '30 J'
          },
          {
            type: 'all',
            text: 'Alle J'
          }
        ],
      buttonSpacing: 15,
      inputEnabled: false,
      selected: 0,
      inputDateFormat: '%Y',
      inputEditDateFormat: '%Y'
    }
  }
}());