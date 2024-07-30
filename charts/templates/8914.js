(function () {
  return {
    "yAxis": {
      //tickAmount: 5,
      tickInterval: 1,
      /*"labels": {
        "format": "{value:,.1f}",
      }*/
    },
    "xAxis": {
      type: "category",
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
        "color": "#8b2223"
      },
      {
        "color": "#008AC3"
      }
    ],
    legend: {
      enabled: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left"
    },
  }
}());

