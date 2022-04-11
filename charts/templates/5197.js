(function () {
  return {
    "chart": {
      "type": "column",
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
      }
    },
    "xAxis": {
      tickPositioner: function () {
        var maxlabels = 7,
          ext = this.getExtremes(),
          i = Math.round(ext.max),
          interval = Math.round((i - ext.min)/maxlabels),
          pos = [i];
        while (i >= ext.min) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "yAxis": {
      "labels": {
        "format": "{value}%"
      }
    },
    "series": [
      { "color": "#b00000" },
      { "color": "#4f81bd" },
    ],
    "legend": {
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    },
  }
}());

