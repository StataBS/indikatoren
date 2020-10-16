(function () {
  return {
    "xAxis": {
      "tickInterval": 1,
      labels: {
        step: 2,
        rotation: -45
      }
    },
    "yAxis": {
      "min": undefined,
      tickAmount: 5,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      { "color": "#b00000", legendIndex: 0, },
      { "color": "#672773", legendIndex: 2, },
      { "color": "#007a2f", legendIndex: 1, },
      { "color": "#008AC3", legendIndex: 3, },
    ],
    "legend": {
      "enabled": true,
      alignColumns: false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
      "itemWidth": 90,
      itemStyle: {
        textOverflow: undefined,
        whiteSpace: 'nowrap',
      }
    },
  }
}());
