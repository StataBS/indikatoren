(function () {
  return {
    "chart": {
      "type": "column",
    },
    "plotOptions": {
      "series": {
        "stacking": "normal"
      }
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1,
      "labels": {
        //rotation: 0
      }
    },
    "yAxis": {
      tickInterval: 20000,
      "labels": {
        "format": "{value:,.0f}"
      },
      plotLines: [{
        value: 0,
        color: '#B9CFD7',
        width: 2
      }]
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemDistance: 0,
      itemWidth: 210,
      width: 450,
    },
    tooltip: {
      shared: true,
      useHTML: true,
      followPointer: true,
      headerFormat: "<table>",
      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}:</td>'
      + '<td style="text-align:right">&nbsp;<b>{point.y}</b></td></tr>',
      footerFormat: '</table>',
    },
    "series": [
      { "color": "#344549", legendIndex: 5 },
      { "color": "#689199", legendIndex: 3 },
      { "color": "#A8C3CA", legendIndex: 1 },
      { "color": "#0A3B19", legendIndex: 0 },
      { "color": "#007A2F", legendIndex: 2 },
      { "color": "#68AB2B", legendIndex: 4 },
      {
        "color": "#000000", legendIndex: 6,
        //"index": 1,
        "type": "line",
        "marker": {
          "enabled": false
        },
      },
    ],
  };
}());
