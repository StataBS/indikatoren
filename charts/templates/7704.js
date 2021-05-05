(function () {
  return {
    "plotOptions": {
      "series": {
        pointPadding: 100,
        borderWidth: 0,
        "pointWidth": 20,
        "stacking": "normal"
      }
    },
    "xAxis": {
      min: 0,
      "type": "category",
      "tickInterval": 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemDistance: 10
    },
    "series": [
      {"color": "#9E7C59", index: 5, legendIndex: 0, tooltip: {valueDecimals: 0},
      },
      {
        "color": "#C4AB91", index: 4, legendIndex: 1, tooltip: {
          valueDecimals: 0
        },
      },
      {
        "color": "#FFDA80", index: 3, legendIndex: 2, tooltip: {
          valueDecimals: 0
        },
      },
      {
        "color": "#C9D6DB", index: 2, legendIndex: 3, tooltip: {
          valueDecimals: 0
        },
      },
     /* {
        "color": "#6F6F6F", index: 1, legendIndex: 4, tooltip: {
          valueDecimals: 0
        },
      },*/
      // {"color": "#ff8028", index: 4, legendIndex: 5},
    ],
    "chart": {
      "renderTo": 'container-I.01.1.0016',
      //"marginTop": 75,
      "type": "column",
      "inverted": false
    },

    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      "shared": true

    },




  }
}());
