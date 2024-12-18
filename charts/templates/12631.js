(function () {
  return {
    plotOptions: {
      series: {
        "stacking": "normal",
        pointPadding: 0,
        groupPadding: 0.5, // exaclty overlaps columns
        borderWidth: 0
      }
    },
    "yAxis": {
      "tickInterval": 50,
     // "min": -100,
     // "max": 600,
      "labels": {
        "format": "{value:,.0f}",
      },
      plotLines: [{
        value: 0,
        color: '#B6CFD7',
        width: 2,
        zIndex: 0,
      }]
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
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"y": 40,
      //"x": 40,
      "itemMarginBottom": 5
    },
    "series": [
      {
        "color": "#689199",
        "index": 0,
        "type": "column",
        "pointWidth": "15",
        legendIndex: 0
      },
      {
        "color": "#83522E",
        "index": 0,
        "type": "column",
        "pointWidth": "15",
        legendIndex: 1
      },
      {
        "color": "#fabd24",
        "index": 0,
        "type": "column",
        "pointWidth": "15",
        legendIndex: 2
      },
      {
        "color": "#000000",
        "index": 1,
        "type": "line",
        "marker": {
          "enabled": false
        },

        //"yAxis": 1,
        legendIndex: 3,
        tooltip: {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
        }
      },
    ],
    "tooltip": {
      "shared": true
    },
  };
}());