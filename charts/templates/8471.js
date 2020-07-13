(function () {
  return {
    plotOptions: {
      series: {
        borderWidth: 0,
        "stacking": "percent",
        pointPadding: 0.1,
        //groupPadding: 0,
      }
    },
    "yAxis": {
      tickAmount: 6,
      "labels": {
        "format": "{value:,.0f}%",
      }
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1,
      "labels": {
        formatter: function () {
          return this.value.replace("BS", "Basel-Stadt")
            .replace("BL", "Basel-Landschaft")
            .replace("JU", "Jura")
            .replace("Basel-Stadt/Basel-Landschaft/Jura", "BS/BL/JU")
            .replace("CH", "Schweiz")
        },
        step: 1,
      }
    },
    "legend": {
      enabled: true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "itemMarginBottom": 2,
      "align": "right",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "series": [
      { "color": "#8B2223", "index": 14 }, /*dunkelrot */
      { "color": "#DC440E", "index": 13 }, /*hellrot */
      { "color": "#FF8028", "index": 12 }, /*dunkelorange */
      { "color": "#FFBB58", "index": 11 }, /*dunkelgelb */
      { "color": "#FFDA80", "index": 10 }, /*hellgelb */
      { "color": "#007A2F", "index": 9 }, /*dunkelgrün */
      { "color": "#D7E8D2", "index": 8 }, /*hellgrün1 */
      { "color": "#73BA7C", "index": 7 }, /*hellgrün2 */
      { "color": "#2B0099", "index": 6 }, /*dunkelblau1 */
      { "color": "#008AC3", "index": 5 }, /*dunkelblau2 */
      { "color": "#B9CFD7", "index": 4 }, /*hellblau */
      { "color": "#672773", "index": 3 },  /*dunkelpink */
      { "color": "#E7CEE2", "index": 2 },  /*hellpink */
    ],
    "tooltip": {
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y * 100), 1) + '% </b><br/><b>'
      },
    },
    "data": {
      "switchRowsAndColumns": true
    },
    "chart": {
      marginTop: 8,
      width: 665,
      type: "column",
      "inverted": false,
    }
  };
}());





