(function () {
  return {
    "plotOptions": {
      "series": {
        // pointPadding: 100,
        // "pointWidth": 15,
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
      "tickInterval": 1
    },
    "yAxis": {
      //tickInterval: 40000,
      //tickAmount: 6,
      "labels": {
        "format": "{value:,.0f}",
      },
      plotLines: [{
        color: '#B9CFD7',
        value: 0,
        width: 1
      }]

    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "tooltip": {
      "pointFormatter": function () {
        if (this.series.name == "Pendlersaldo") {
          return '<b>' + Highcharts.numberFormat(this.y, 0) + '</b><br/><b>'
        }
        else return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(Math.abs(this.y, 0), 0) + '</b><br/><b>'
      },
      "shared": true,
    },
    "series": [
      { "color": "#246370", "index": 1, legendIndex: 1 }, /*rot */
      { "color": "#A8C3CA", "index": 2, legendIndex: 3 }, /*blau */
      { "color": "#007A2F", "index": 3, legendIndex: 2 }, /*hellrot */
      { "color": "#8AB77D", "index": 4, legendIndex: 4 }, /*hellblau */
      {
        "color": "#000000",
        //"index": 1,
        "type": "scatter",
        "marker": {
          "enabled": true,
          symbol: "diamond",
          radius: 6,
        },
        legendIndex: 4,
      },
    ],
    "chart": {
      // width: 665,
      "marginBottom": 75,
      //"marginTop": 75,
      "type": "column",
    },
    "data": {
      "switchRowsAndColumns": true
    },
  };
}());
