(function () {
  return {
    "xAxis": {
      "tickInterval": 2,
      showLastLabel: true,
      labels: {
        rotation: -45,
      }
    },
    "yAxis": {
      tickAmount: 5,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      {
        "color": "#b00000 ",
        legendIndex: 1,
      }, /* rot */
      {
        "color": "#672773",
        legendIndex: 2,
      }, /* violett */
      {
        "color": "#007a2f",
        legendIndex: 0,
      },/* grün  */
      {
        "color": "#008AC3",
        legendIndex: 3,
      },/* blau  */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    }
  }
}());
