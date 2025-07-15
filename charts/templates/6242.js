(function () {
  return {
    "yAxis": {
      max: 60,
      tickInterval: 10,
      "labels": {
        "format": "{value:,.0f}",
      }
    },
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
    "series": [
      {
        "color": "#8b2223",
      }
    ],
  }
}());

