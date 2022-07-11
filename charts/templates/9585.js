(function () {
  return {
    "plotOptions": {
      "line": {
        "connectNulls": true,
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
      tickAmount: 7,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>'
    },
    chart:{
        spacingBottom: 50,
        marginRight: 20, 
    },
    "series": [
      {
        "color": "#73B97C" /*Zugezogene Innenstadt*/
      },
      {
        "color": "#71A3B5", /*Weggezogene Innenstadt*/
        visible: true,
      },
      {
        "color": "#007A2F" /*Zugezogene Kanton BS*/
      },
      {
        "color": "#2B0099", /*Weggezogene Kanton BS*/
        visible: true,
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    }
  }
}());
