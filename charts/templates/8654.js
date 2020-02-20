(function () {
  return {
    "chart": {
      "type": "column",
      spacingTop: 5,
      spacingBottom: 5
      //spacing: [5, 2, -30, 2],
      //width: 665
    },
    "plotOptions": {
      "series": {
        //pointPadding: 100,
        borderWidth: 0,
        "pointWidth": 10,
        "stacking": "normal"
      }
    },
    xAxis: {
      type: "category",
      tickInterval: 1,
      labels: {
        step: 1,
        rotation: -90,
        //align: "left",
        y: 10,
        formatter: function () {
          return this.value.replace('Kleinhüningen', 'Kleinh.');
        }
      }
    },
    yAxis: {
      tickAmount: 5,
      labels:{
        //x: -10
      }
    },
    "legend": {
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "align": "right",
      reversed: true,
      "itemMarginBottom": 5,
      y: -30,
      "itemStyle": {
        "width": 70,
        textOverflow: null
      },
      /*      labelFormatter: function () {
              return this.name.replace("Verkehrs", "Verkehrs-<br/>")
            }
      */
    },
    "series": [
      {
        "color": "#9E7C59", index: 5, legendIndex: 0, tooltip: {
          valueDecimals: 0
        },
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
      /*{
        "color": "#6F6F6F", index: 1, legendIndex: 4, tooltip: {
          valueDecimals: 0
        },
      },*/
      // {"color": "#ff8028", index: 4, legendIndex: 5},
    ]
  }
}());
/*(function () {
  return {
    "plotOptions": {
      "series": {
        pointPadding: 100,
        "pointWidth": 20,
        "stacking": "normal"
      }
    },
    "xAxis": {
      min: 0,
      "type": "category",
      "tickInterval": 1,
      labels: {
        formatter: function () {
          return this.value.replace('Kleinhüningen', 'Kleinh.');
        }
      }
    },
    "yAxis": {
      "tickInterval": 100,
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemDistance: 5
    },
    "series": [
      {
        "color": "#9E7C59", index: 5, legendIndex: 0
      },
      {
        "color": "#C4AB91", index: 4, legendIndex: 1
      },
      {
        "color": "#FFDA80", index: 3, legendIndex: 2
      },
      {
        "color": "#C9D6DB", index: 2, legendIndex: 3
      },
      {
        "color": "#6F6F6F", index: 1, legendIndex: 4
      },
    ],
    "chart": {
      "type": "column",
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      "shared": true
    }
  }
}());
*/