(function () {
  return {
    "plotOptions": {
      "series": {
        "stacking": "percent",
        borderWidth: 0,
        groupPadding: 0
      }
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1,
      labels: {
        step: 1,
        rotation: -45
      }
    },
    "yAxis": {
      "tickInterval": 10,
      "labels": {
        "format": "{value}%"
      },
      "min": 0
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      "shared": false
    },
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
    "series": [
      {
        "color": "#2f656b",
        "index": 0
      },
      {
        "color": "#73b97c",
        "index": 1
      },
      {
        "color": "#d7e8d2",
        "index": 2
      }
    ],
    "chart": {
      "type": "column"
    }
  }
}());

