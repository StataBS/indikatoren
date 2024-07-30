(function () {
  return {
    chart: {
      //spacingBottom: 40
      marginRight: 20
    },
    title:{
      margin: 30
    },
    "yAxis": {
      "min": 0,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    xAxis: {
      tickPositioner: function () {
        var interval = 5,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    tooltip: {
      valueDecimals: 1,
    },
    "series": [
      {
        "marker": {
          "symbol": "circle",
          "enabled": false
        },
        "color": "#000000"
      }
    ],
  };
}());