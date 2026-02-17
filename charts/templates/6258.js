(function () {
  return {
    chart: {
      marginRight: 10
    },
    "xAxis": {
      "tickInterval": 1
    },
    "yAxis": {
      "min": 70,
      max: 170,
      tickInterval: 5,
      "labels": {
        "format": "{value:,.0f}"
      },
      plotLines: [{
        color: '#B9CFD7',
        value: 100,
        width: 2
      }]
    },
    "series": [
      { "color": "#ff8028", legendIndex: 2 },
      { "color": "#dc440e", legendIndex: 1, visible: true },
      { "color": "#b00000", legendIndex: 3, visible: true },
      { "color": "#661200", legendIndex: 4, visible: true },
      { "color": "#672773", legendIndex: 5, visible: true },
      { "color": "#999999", legendIndex: 6, "dashStyle": "ShortDash" }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      //itemDistance: 10,
      "verticalAlign": "top",
      //"itemMarginBottom": 5,
      "align": "left",
      itemWidth: 90,
      width: 250,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      }
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
      }
    }
  }
}());
