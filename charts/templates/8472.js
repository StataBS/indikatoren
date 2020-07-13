(function () {
  return {
    "xAxis": {
      "tickInterval": 1,
      labels: {
        rotation: 0,
      }
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
    "series": [
      {"color": "#8B2223", "index": 12}, /*dunkelrot */
      {"color": "#DC440E", "index": 11}, /*hellrot */
      {"color": "#FF8028", "index": 10}, /*dunkelorange */
      {"color": "#FFBB58", "index": 9}, /*dunkelgelb */
      //{"color": "#FFDA80", "index": 9, showInLegend: false}, /*hellgelb */
      {"color": "#007A2F", "index": 8}, /*dunkelgrün */
      {"color": "#D7E8D2", "index": 7}, /*hellgrün1 */
      {"color": "#73BA7C", "index": 6}, /*hellgrün2 */
      {"color": "#2B0099", "index": 5}, /*dunkelblau1 */
      {"color": "#008AC3", "index": 4}, /*dunkelblau2 */
      {"color": "#B9CFD7", "index": 3}, /*hellblau */
      {"color": "#672773", "index": 2},  /*dunkelpink */
      {"color": "#E7CEE2", "index": 1},  /*hellpink */
    ],
    "legend": {
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "top",
      "align": "right",
      //"itemMarginBottom": 5,
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "chart": {
      marginTop: 8,
      width: 665
      // height: 500,
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());