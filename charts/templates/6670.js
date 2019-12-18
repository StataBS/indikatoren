(function () {
  return {
    "xAxis": {
      tickInterval: 1,
    },
    "yAxis": {
      tickAmount: 5,
      "labels": {
        "format": "{value}%"
      }
    },
    "series": [
      { "color": "#b00000", legendIndex: 0 }, /*Schweiz*/
      { "color": "#661200", legendIndex: 2, dashStyle: 'ShortDash' }, /*Schweizer*/
      { "color": "#dc440e", legendIndex: 4, dashStyle: 'ShortDash' }, /*Schwezerinnen*/
      { "color": "#cd9c00", legendIndex: 1 }, /*Ausland*/
      { "color": "#7f5f1a", legendIndex: 2, dashStyle: 'ShortDash' }, /*Ausländer*/
      { "color": "#ffda80", legendIndex: 5, dashStyle: 'ShortDash' }, /*Ausländerinnnen*/
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left"
    }
  }
}());