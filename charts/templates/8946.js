(function () {
  return {
    chart: {
      marginRight: 10
    },
    "yAxis": {
      tickInterval: 2,
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    "xAxis": {
      //"tickInterval": 5,
      tickPositioner: function () {
        var interval = 10,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "series": [{
      "color": "#8b2223"
    }],
  }
}());

