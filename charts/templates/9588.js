(function () {
  return {
    plotOptions: {
      series: {
        "stacking": "normal",
        groupPadding: 0,
        borderWidth: 0,
      }
    },
    "yAxis": {
      tickAmount: 8,
      "labels": {
        "format": "{value:,.0f}",
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0) + '';
        },
      }
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1,
      "labels": {
        step: 1,
      }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      padding: 0,
      itemDistance: 2,
      width: 500,
      itemWidth: 235,
      reversed: true
    },
    "series": [
      { "color": "#73B97C", index: 12 }, /* */
      { "color": "#B6CFD7", index: 11 }, /* */
      { "color": "#007A2F", index: 10 }, /* */
      { "color": "#FFDA80", index: 9 }, /* */
      { "color": "#FFBB58", index: 8 }, /* */
      { "color": "#689199", index: 6 }, /* */
      { "color": "#008AC3", index: 3 },  /* */
      { "color": "#C8C8C8", index: 2 },  /* */
      { "color": "#2B0099", index: 1 }, /* */
      { "color": "#8A8A8A", index: 0 }, /* */
    ],
    "tooltip": {
      // "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:.1f}%)<br/>',
      //"footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      shared: true,
      useHTML: true,
      followPointer: true,
      formatter: function () {
        var s = '<span style="font-size: 10px">' + this.points[0].key + '</span><table>', sum = 0;
        $.each(this.points, function (i, point) {
          s += '<tr><td><span style="color:' + point.color + '">\u25CF</span> ' + point.series.name + ':</td>'
            + '<td style="text-align:right">&nbsp;<b>' + point.y + '</b></td>'
            + '<td style="text-align:right">&nbsp;(' + Highcharts.numberFormat(point.percentage, 1) + '%)</td></tr>';
          sum += point.y;
        });
        s += '<tr><td><span style="color:transparent">\u25CF</span> <b>&nbsp;Total: <b></td><td style="text-align:right">&nbsp;<b>' + Highcharts.numberFormat(sum, 0) + '</b></td><td></td></table>'
        return s;
      },
    },
    "chart": {
      //	height: 600,
      type: "column",
      inverted: false,
    }
  };
}());





