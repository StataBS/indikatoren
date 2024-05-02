(function () {
  return {
    "chart": {
      "type": "line",
      "alignTicks": false,
      spacingBottom: 45,
    },
    "yAxis": [{
      "labels": {
        "format": "{value:,.0f}",
        "style": {
          "color": "#000000"
        }
      },
      "min": 0,
      "max": undefined,
      "title": ""
    },
    {
      "title": {
        "style": {
          "color": "#000000",
          "fontSize": null
        },
        "text": null
      },
      "labels": {
        "format": "{value:,.0f}%",
        "style": {
          "color": "#000000"
        }
      },
      "min": 0,
      "max": 100,
      "tickInterval": 20,
      "gridLineWidth": 0,
      "opposite": true
    }
    ],
    "xAxis": {
      "tickInterval": 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "series": [
      {
        "color": "#246370",
        "index": 0,
        "type": "column",
        //"pointWidth": "20"
      },
      {
        "color": "#A8C3CA",
        "index": 0,
        "type": "column",
        //"pointWidth": "20"
      },
      {
        "color": "#7d60a0",
        "index": 2,
        "type": "line",
        "yAxis": 1,
        "marker": {
          "enabled": false
        },
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
        }
      }
    ],
    "tooltip": {
      "shared": true,
    }
  }
}());
