(function () {
  return {
    "chart": {
      "type": "column",
    },
    "plotOptions": {
      "series": {
       // "pointWidth": 20,
        "stacking": "normal"
      }
    },
    "xAxis": {
      "type": "category",
      tickPositioner: function () {
        var interval = 1,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "yAxis": {
      min: 0,
      //"tickAmount": 5,
      tickInterval: 10000
    },
    "legend": {
      "layout": "horizontal",
      "align": "left",
      "verticalAlign": "top",
      "itemMarginBottom": 4,
     // itemDistance: 10,
    },
    "series": [
      { "color": "#6F6F6F", index: 9, legendIndex: 0 },
      { "color": "#990300", index: 8, legendIndex: 1 },
      { "color": "#CD9C00", index: 7, legendIndex: 2 },
      { "color": "#68AB2B", index: 6, legendIndex: 3 },
      { "color": "#246370", index: 4, legendIndex: 5 }
    ],
    tooltip: {
      shared: true,
      useHTML: true,
      followPointer: true,
      formatter: function () {
        var s = '<span style="font-size: 10px">' + this.points[0].key + '</span><table>', sum = 0;
        $.each(this.points, function (i, point) {
          s += '<tr><td><span style="color:' + point.color + '">\u25CF</span> ' + point.series.name + ':</td>'
            + '<td style="text-align:right">&nbsp;<b>' + Highcharts.numberFormat(point.y, 0) + '</b></td>'
            + '<td style="text-align:right">&nbsp;(' + Highcharts.numberFormat(point.percentage, 1) + '%)</td></tr>';
          sum += point.y;
        });
        s += '<tr><td>Total:</td><td style="text-align:right">&nbsp;<b>' + Highcharts.numberFormat(sum, 0) + '</b></td>'
          + '<td style="text-align:right">&nbsp;(100,0%)</td></tr></table>'
        return s;
      },
    },
  }
}());
