(function () {
  return {
    "yAxis": {
      tickInterval: 10,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    xAxis: {
      tickInterval: 1,
      labels: {
        step: 2,
        rotation: -45
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
        legendIndex: 3
      }, /* duneklblau */
      {
        "color": "#68AB2B",
        visible: true,
        "marker": {
          "enabled": false
        },
        dashStyle: 'ShortDash',
        legendIndex: 2
      }, /* dunkelgrün */
      {
        "color": "#008AC3",
        "marker": {
          "enabled": false
        },
        dashStyle: 'ShortDash',
        legendIndex: 4
      }, /* duneklblau */
      {
        "color": "#007A2F",
        visible: true,
        "marker": {
          "enabled": false
        },
        legendIndex: 1
      }, /* dunkelgrün */


      {
        type: 'scatter',
        "color": "#FF8028",
        "marker": {
          "enabled": true,
          symbol: "circle"
        },
        legendIndex: 5
      }, /* orange */
      {
        "color": "#FFBB58",
        visible: true,
        "marker": {
          "enabled": false
        },
        dashStyle: 'ShortDash',
        legendIndex: 6
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
