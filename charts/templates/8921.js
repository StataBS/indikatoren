(function () {
  return {
    "yAxis": {
      tickInterval: 10,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    xAxis: {
      tickPositioner: function () {
        var interval = 4,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
      /*labels: {
        step: 2,
        rotation: -45
      }*/
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
      "align": "left",
      "itemMarginBottom": 5,
      itemWidth: 135,
      itemStyle: {
				textOverflow: undefined,
				whiteSpace: 'nowrap',
			}
      //      alignColumns: false,
    },
    exporting: {
      allowHTML: true,
    },
  };
}());
