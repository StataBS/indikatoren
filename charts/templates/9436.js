(function () {
  return {
    xAxis: {
      tickPositioner: function () {
        var interval = 1,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      },
      "labels": {
        step: 1,
        "rotation": -45,
    }  
    },
    "yAxis": {
      "min": 0,
      tickAmount: 5,
      reversedStacks: false,
      //tickInterval: 10,
      //  max: 40, 
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    tooltip: {
      //pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      //footerFormat: 'Total: <b>{point.total:,.0f}</b>',
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
    "series": [
     // { "color": "#6F6F6F" }, /*BS*/
      //{ "color": "#FF8028" }, /*BL*/
      //{ "color": "#008AC3" }, /*AG*/
      //{ "color": "#FABD24" }, /*SO*/
      //{ "color": "#B00000" }, /*übrige CH*/
      //{ "color": "#68AB2B" },

      { "color": "#6F6F6F"},
      { "color": "#990300"},
      { "color": "#008AC3" }, /*AG*/
      { "color": "#CD9C00"},
      { "color": "#68AB2B"},
      { "color": "#246370"}

    ],
    "legend": {
      "enabled": true,
      //"y": 15,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //itemWidth: 10,
      "itemStyle": {
        // textOverflow: "none",
         whiteSpace: "nowrap",
       }
    },
    "chart": {
      type: 'column',
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        borderWidth: 0
      }
    }
  }
}());