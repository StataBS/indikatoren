(function () {
  return {
    "xAxis": { //label last tick
      tickPositioner: function () {
        var positions = [],
          ext = this.getExtremes(),
          xMax = Math.round(ext.max),
          xMin = Math.round(ext.min) + 1;
        var xMin_even = Math.round(ext.min);

        if (xMax % 2 == 1) {
          for (var i = xMin; i < xMax; i++) {
            if (i % 2 == 1) {
              positions.push(i);
            }
          }
          positions.push(xMax);
          return positions;
        } else if (xMax % 2 == 0) {
          for (var i = xMin_even; i < xMax; i++) {
            if (i % 2 == 0) {
              positions.push(i);
            }
          }
          positions.push(xMax);
          return positions;
        }
      },
      labels: {
        rotation: -45
      }
    },
    "yAxis": {
      "tickInterval": 5000000,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      {
        "color": "#FABD24",
        legendIndex: 0,
      }, /* hellgelb */
      {
        "color": "#7F5F1A",
        legendIndex: 2,
      }, /* dunkelgelb */
      {
        "color": "#008AC3",
        legendIndex: 1,
      }, /* hellblau */
      {
        "color": "#2B0099",
        legendIndex: 3,
      }, /* dunkelblau */
      {
        "color": "#68AB2B",
        legendIndex: 5,
      }, /* violett */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
      }
    }
  };
}());
