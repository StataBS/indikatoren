(function () {
  return {
    "yAxis": {
      tickInterval: 10,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "xAxis": {
      tickInterval: 2
    },
    "tooltip": {
      useHTML: true,
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    "series": [
      {
        "color": "#2B0099",
        legendIndex: 2
      }, /* duneklblau */
      {
        "color": "#68AB2B",
        visible: true,
        dashStyle: 'ShortDash',
        legendIndex: 3
      }, /* dunkelgrün */
      {
        "color": "#008AC3",
        dashStyle: 'ShortDash',
        legendIndex: 4
      }, /* duneklblau */
      {
        "color": "#007A2F",
        visible: true,
        legendIndex: 1
      }, /* dunkelgrün */
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
