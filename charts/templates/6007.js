(function () {
  return {
    "xAxis": {
      "tickInterval": 1
    },
    "yAxis": {
      "min": undefined,
      //tickInterval: 10,
      "labels": {
        "format": "{value:,.0f}"
      },
      plotLines: [{
        color: '#B9CFD7',
        value: 100,
        width: 2
      }]
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    "series": [
      { "color": "#ff8028" },
      { "color": "#dc440e", visible: true },
      { "color": "#b00000", visible: true },
      { "color": "#661200", visible: true },
      { "color": "#672773", visible: true },
      { "color": "#999999", "dashStyle": "ShortDash" }
    ],
    "legend": {
      "enabled": true,
      "x": 30,
      //"y": 35,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      itemWidth: 200,
      //width: 220,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      }
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
          "radius": 3
        }
      }
    },
    chart: {
      marginRight: 20,
    }
  };
}());
