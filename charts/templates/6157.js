(function () {
  return {
    title: {
      useHTML: true
    },
    subtitle: {
      useHTML: true
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    xAxis: {
      tickInterval: 1,
      tickPositioner: function () {
        var interval = 2,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      },
      labels: {
        step: 2
      }

    },
    "tooltip": {
      useHTML: true,
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    "series": [
      {
        "color": "#2B0099",
        "marker": {
          "enabled": false
        },
        legendIndex: 3,
        zIndex:1
      }, /* duneklblau */
      {
        "color": "#68AB2B",
        visible: true,
        "marker": {
          "enabled": false
        },
        dashStyle: 'ShortDash',
        legendIndex: 2,
        zIndex:0
      }, /* dunkelgrün */
      {
        "color": "#008AC3",
        "marker": {
          "enabled": false
        },
        dashStyle: 'ShortDash',
        legendIndex: 4,
        zIndex:0
      }, /* duneklblau */
      {
        "color": "#007A2F",
        visible: true,
        "marker": {
          "enabled": false
        },
        legendIndex: 1,
        zIndex:1
      }, /* dunkelgrün */


      {
        "color": "#FF8028",
        "marker": {
          "enabled": false
        },
        legendIndex: 5,
        zIndex:1
      }, /* orange */
      {
        "color": "#FFBB58",
        visible: true,
        "marker": {
          "enabled": false
        },
        dashStyle: 'ShortDash',
        legendIndex: 6,
        zIndex:0
      }, /* orange */
    ],
    "legend": {
      useHTML: true,
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    },
    exporting: {
      allowHTML: true,
    },
  };
}());
