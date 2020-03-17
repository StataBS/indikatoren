(function () {
  return {
    "plotOptions": {
      "series": {
        "pointWidth": 25,
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        },
        "stacking": "normal"
      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        rotation: 0
      }
    },
    "yAxis": {
      tickAmount: 8,
      "labels": {
        "format": "{value:,.0f}"
      },
      "reversedStacks": false
    },
    "tooltip": {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      footerFormat: 'Total: <b>{point.total:,.0f}</b>',
      "shared": true,
      valueDecimals: 0
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
        "color": "#661200",
        "legendIndex": 9
      },
      {
        "color": "#B00000",
        "legendIndex": 8
      },
      {
        "color": "#DC440E",
        "legendIndex": 7
      },
      {
        "color": "#FF8028",
        "legendIndex": 6
      },
      {
        "color": "#2E1435",
        "legendIndex": 5
      },
      {
        "color": "#662673",
        "legendIndex": 4
      },
      {
        "color": "#923F8D",
        "legendIndex": 3
      },
      {
        "color": "#B375AB",
        "legendIndex": 2
      },
      {
        "color": "#E7CEE2",
        "legendIndex": 1
      },
      {
        "color": "#C9D6DB",
        "legendIndex": 0
      }
    ],
    "chart": {
      "type": "column"
    }
  }
}());
