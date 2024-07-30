(function () {
  return {
    "yAxis": {
      tickInterval: 10
    },
    "xAxis": {
      labels: {
        rotation: -45
      },
      tickPositioner: function () {
        var interval = 3,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "series": [
      {
        "color": "#008AC3"
      }
    ],
    "chart": {
      "marginTop": 60,
      "type": "column"
    },
    "plotOptions": {
      "series": {
        borderWidth: 0,
      }
    }
  }
}());
