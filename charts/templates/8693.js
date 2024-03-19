(function () {
  return {
    "plotOptions": {
      "series": {
       /* "pointWidth": 25, 
        borderWidth: 0, */
        pointPadding: 0.1,
        groupPadding: 0.1,
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
      enabled: true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "itemMarginBottom": 5,
      "align": "right",
      itemWidth: 133,
      labelFormatter: function () {
        return this.name.replace("Postdienste von Universaldienstleistungsanbietern", "Postdienste von Universal-<br/>dienstleistungsanbietern");
      },
      "itemStyle": {
        textOverflow: null,
        /*width: 150,*/
        "fontWeight": "normal"
      }
    },
    "series": [
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
