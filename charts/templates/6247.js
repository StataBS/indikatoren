(function () {
  return {
    chart: {
      marginRight: 10
    },
    "yAxis": {
      tickInterval: 10,
    },
    "xAxis": {
      tickPositioner: function () {
        var interval = 5,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "series": [
      {
        "color": "#83522E",
      }]
  }
}());
