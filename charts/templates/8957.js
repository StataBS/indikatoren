(function () {
  return {
    "xAxis": {
      "tickInterval": 1
    },
    "yAxis": {
      "min": undefined,
      tickInterval: 5,
      //max: 130,
      "labels": {
        "format": "{value:,.0f}"
      },
      plotLines: [{
        color: '#B9CFD7',
        value: 100,
        width: 1
      }]
    },
    "series": [
      { "color": "#ff8028", legendIndex: 0 },
      { "color": "#dc440e", legendIndex: 1 },
      { "color": "#b00000", legendIndex: 3 },
      { "color": "#661200", legendIndex: 4 },
      { "color": "#672773", legendIndex: 2 },
      //    {"color": "#008AC3"},/* blau  */
    ],
    "legend": {
      "enabled": true,
      reversed: true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "align": "right",
      "itemMarginBottom": 7,
      //    "x": 30,
      //"y": 35,
      //"itemWidth": 200,
      //      itemDistance: 15,
      labelFormatter: function () {
        return this.name.replace('wetter', 'wetter-<br>').replace('Stadt', 'Stadt-<br>');
      }
    },
  };
}());
