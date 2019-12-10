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
      tickInterval: 1,
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
      "align": "right",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "series": [
      {
        "color": "#73B97C",
        "index": 1
      },
      {
        "color": "#008AC3",
        "index": 2
      },
      {
        "color": "#ffbb58",
        "index": 3
      },
      {
        "color": "#662673",
        "index": 0
      }
    ],
    "chart": {
      "zoomType": "y",
      "type": "column"
    }
  };
}());
