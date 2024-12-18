(function () {
  return {
    "plotOptions": {
      "series": {
        "stacking": "normal"
      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "xAxis": {
      tickInterval: 2,
      "type": "category"
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      "shared": false
    },
    "legend": {
      "layout": "vertical",
      "verticalAlign": "middle",
      "itemMarginBottom": 5,
      "align": "right"
    },
    "series": [
      {
        "color": "#DC440E",
        "index": 5
      },
      {
        "color": "#923F8D",
        "index": 4
      },
      {
        "color": "#68AB2B",
        "index": 3
      },
      {
        "color": "#689199",
        "index": 2
      },
      {
        "color": "#CD9C00",
        "index": 1
      },
      {
        "color": "#B00000",
        "index": 0
      }
    ],
    "chart": {
      "zoomType": "y",
      "type": "column"
    }
  };
}());