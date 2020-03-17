(function () {
  return {
    "xAxis": {
      "tickInterval": 1
    },
    "yAxis": {
      "min": undefined,
      tickInterval: 2,
      "labels": {
        "format": "{value:,.f}"
      },
      plotLines: [{
        value: 100,
        color: '#B9CFD7',
        width: 2
      }]
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    "series": [
      {
        "color": "#68AB2B ",
        "marker": {
          "enabled": false
        }

      }, /* rot */
      {
        "color": "#672773",
        "marker": {
          "enabled": false
        }
      },/* blau  */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      itemDistance: 15,
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
    }
  }
}());
