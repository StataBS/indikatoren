(function () {
  return {
    "chart": {
      "type": "column",
      //"spacingBottom": 28,
      width: 665
    },
    "plotOptions": {
      "series": {
        "stacking": null,
        pointPadding: 0,
        groupPadding: 0.1,

      },
      line: {
        tooltip: {
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
          shared: false
        },
        //shadow: true
      }
    },
    "yAxis": [
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        "title": {
          "style": {
            "color": "#000000",
            "fontSize": null
          },
          "text": null
        },
        "labels": {
          "format": "{value:,.0f}",
          "style": {
            "color": "#000000"
          }
        }
      },
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        "title": {
          "style": {
            "color": "#000000",
            "fontSize": null
          },
          "text": null
        },
        "labels": {
          "format": "{value:,.1f}%",
          "style": {
            "color": "#000000"
          }
        },
        "opposite": true
      },
    ],
    "xAxis": {
      lineColor: '#B9CFD7',
      lineWidth: 0.5,
      "tickInterval": 1
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      shared: false
    },
    "legend": {
      "enabled": true,
      "layout": "vertical",
      //padding: 0,
      //symbolPadding: 3,
      itemMarginBottom: 6,
      "verticalAlign": "top",
      "align": "right",
      "itemStyle": {
        "fontWeight": "normal",
        textOverflow: null,
        whitespace: 'nowrap'
      },
    },
    "series": [
      {
        "color": "#B00000",
        "index": 1,
        legendIndex: 2, // 1 zimmer
        "visible": true
      },
      {
        "color": "#ffbb58",
        "index": 2, // 2 Zimmer
        legendIndex: 4,
        "visible": true
      },
      {
        "color": "#007a2f",
        "index": 3, //3 Zimmer
        legendIndex: 6,
        "visible": true
      },
      {
        "color": "#923f8d",
        "index": 4,//4 Zimmer
        legendIndex: 8,
        "visible": true
      },
      {
        "color": "#2B0099",
        "index": 5,//5 Zimmer
        legendIndex: 10,
        "visible": true
      },
      {
        "color": "#8A8A8A",
        "index": 0, // Alle
        legendIndex: 0,
        "visible": true
      },
      {
        "color": "#000000",
        "index": 5, // Alle
        legendIndex: 0,
        "type": "line",
        "yAxis": 1,
        "marker": {
          "enabled": false
        }
      },
      {
        "color": "#B00000",
        "index": 6, // 1 zimmer
        legendIndex: 3,
        "type": "line",
        "yAxis": 1,
        "marker": {
          "enabled": false
        },
        "visible": true
      },
      {
        "color": "#ffbb58",
        "index": 7,
        "type": "line",
        legendIndex: 5,  // 2 zimmer
        "yAxis": 1,
        "marker": {
          "enabled": false
        },
        "visible": true
      },
      {
        "color": "#007a2f",
        "index": 8, // 3 zimmer
        legendIndex: 7,
        "type": "line",
        "yAxis": 1,
        "marker": {
          "enabled": false
        },
        "visible": true
      },
      {
        "color": "#923f8d",
        "index": 9,
        legendIndex: 9,  // 4 zimmer
        "type": "line",
        "yAxis": 1,
        "marker": {
          "enabled": false
        },
        "visible": true
      },
      {
        "color": "#2B0099",
        "index": 10,
        legendIndex: 11, // 5 zimmer
        "type": "line",
        "yAxis": 1,
        "marker": {
          "enabled": false
        },
        "visible": true
      }
    ],
  }
}());
