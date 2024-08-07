(function () {
  return {
    "chart": {
      //  height: 500,
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    },
    "xAxis": {
      "tickInterval": 1,
    },
    "yAxis": {
      min: 60,
      tickInterval: 20,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    "legend": {
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "align": "right",
      "itemMarginBottom": 5,
    },
    "series": [
      // { "color": "#8B2223", "index": 14 }, /*dunkelrot */
      // { "color": "#DC440E", "index": 13 }, /*hellrot */
      { "color": "#FF8028", "index": 12 }, /*dunkelorange */
      { "color": "#FFBB58", "index": 11 }, /*dunkelgelb */
      { "color": "#FFDA80", "index": 10 }, /*hellgelb */
      { "color": "#007A2F", "index": 9 }, /*dunkelgrün */
      { "color": "#D7E8D2", "index": 8 }, /*hellgrün1 */
      { "color": "#73BA7C", "index": 7 }, /*hellgrün2 */
      { "color": "#2B0099", "index": 6 }, /*dunkelblau1 */
      { "color": "#008AC3", "index": 5 }, /*dunkelblau2 */
      { "color": "#246370", "index": 4 }, /*dunkelblau3 */
      { "color": "#B9CFD7", "index": 3 }, /*hellblau */
      { "color": "#672773", "index": 2 },  /*dunkelpink */
      { "color": "#E7CEE2", "index": 1 },  /*hellpink */
    ],
  }
}());