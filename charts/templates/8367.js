(function () {
  return {
    "plotOptions": {
      "series": {
        lineWidth: 0,
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
      shared: true,
      useHTML: true,
      headerFormat: "<table>",
      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}:</td>'
        + '<td style="text-align:right">&nbsp;<b>{point.y}</b></td></tr>',
      footerFormat: '</table>',
    },
    "series": [
      { "color": "#246370", "index": 1, legendIndex: 1 }, /*rot */
      { "color": "#A8C3CA", "index": 2, legendIndex: 3 }, /*blau */
      { "color": "#007A2F", "index": 3, legendIndex: 2 }, /*hellrot */
      { "color": "#8AB77D", "index": 4, legendIndex: 4 }, /*hellblau */
      {
        "color": "#000000",
        "type": "line",
        "marker": {
          "enabled": true,
          symbol: "diamond",
          radius: 6,
        },
        legendIndex: 5,
        "states": {
          "hover": {
            "enabled": "true",
            "lineWidthPlus": 0
          }
        }
      },
    ],
    "chart": {
      "marginBottom": 75,
      "type": "column",
    },
    "data": {
      "switchRowsAndColumns": true
    },
  };
}());
