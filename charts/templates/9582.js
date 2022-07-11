(function () {
  return {
    "xAxis": {
      tickInterval: 1,
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'
    },
    chart:{
      spacingBottom: 50,
      marginRight: 20, 
    },
    "series": [
      { "color": "#71a3b5" },
      { "color": "#ff8028" },
      /*{ "color": "#999" },grau*/
    ],
    "legend": {
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
    }
  }
}());
