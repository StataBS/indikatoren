(function () {
  return {
    "plotOptions": {
      "series": {
        "pointWidth": 18,
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        },
        "stacking": "normal"
      }
    },
    xAxis: {
      type: "category", /* ausprobieren, ob "category" oder nicht - hat Auswirkung auf den Abstand der letzten Jahreszahl zu rechten Rand */
      "labels": {
        rotation: 0
      }
    },
    "yAxis": {
      tickAmount: 10,
      "labels": {
        "format": "{value:,.0f}"
      },
      "reversedStacks": false
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      "shared": true,
      valueDecimals: 0
    },
    "legend": {
      "layout": "vertical",
      "verticalAlign": "middle",
      "itemMarginBottom": 5,
      "align": "right",
      "itemStyle": {
        textOverflow: null,
        width: 120
      }
    },
    "series": [

      {
        "color": "#246370",
        "legendIndex": 2
      },
      {
        "color": "#689199",
        "legendIndex": 1
      },
      {
        "color": "#D3E2E4",
        "legendIndex": 0
      }
    ],
    "chart": {
      "type": "column"
    }
  }
}());
