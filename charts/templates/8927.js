(function () {
  return {
    "xAxis": {
      tickInterval: 2,
      tickPositioner: function () {
        var interval = 4,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "yAxis": {
      tickInterval: 0.2,
      "labels": {
        "format": "{value:,.1f}"
      }
    },
    "series": [
      {
        "color": "#008AC3",
      }, /* dunkelrot */
      {
        "color": "#007A2F",
        visible: true,
      }, /* dunkelgrün */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
    }
  }
}());
