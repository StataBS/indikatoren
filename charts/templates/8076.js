(function () {
  return {
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    chart: {
      marginRight: 15
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'
    },
    "series": [
      {"color": "#cd9c00"
      }, 
      {"color": "#b375ab",
        visible:true,
      },
      { "color": "#999999" 
      },
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
