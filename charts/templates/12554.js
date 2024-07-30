(function () {
  return {
    chart: {
marginRight: 10,
    },
    "yAxis": {
      tickInterval: 25000
    },
    xAxis: {
      tickPositioner: function () {
        var interval = 2,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "series": [
      {
        "marker": {
          "symbol": "circle",
          "enabled": false
        },
        "color": "#83522E"
      }
    ],
    /*"tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
    }*/
  }
}());
