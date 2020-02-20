(function () {
  return {
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%",
      }
    },
    "xAxis": {
      "tickInterval": 2
    },
    "series": [
      {
        "marker": {
          "symbol": "circle",
          "enabled": false
        },
        "color": "#999",
        //"dashStyle": "ShortDash"
        "index": 3
      },      
      { "color": "#cd9c00",
      "index": 1
      }, 
      {"color": "#b375ab",
      "index": 2
      }
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
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
    }
  }
}());
