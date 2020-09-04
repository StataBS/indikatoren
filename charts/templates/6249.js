(function () {
  return {
    "chart": {
      "width": 665,
      "type": "column",
      spacing: [15, 3, 8, 3], /*top, right, bottom and left */ /*[3,3,3,3]*/
    },
    "xAxis": {
      "type": "category",
      "labels": {
        "rotation": -90
      }
    },
    "yAxis": {
//      "max": 1200,
      tickInterval: 200,
      "labels": {
        "format": "{value:,.0f}"
      },
      plotLines: [{
        value: 0,
        color: '#B9CFD7',
        width: 2,
        zIndex: 0
      }]
    },
    "series": [
      { "color": "#83522E", "visible": true }, /* dunkelbraun*/
      //{"color": "#007A2F", "visible": true} /* ... */
    ],
    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "x": 35,
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      "shared": false
    }
  }
}());