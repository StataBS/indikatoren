(function () {
  return {
    "chart": {
      "type": "column",
      "inverted": false,
      "spacingBottom": 40
    },
    plotOptions: {
      column: {
          stacking: 'normal'
      }
  },
    "xAxis": {
      type: "category"
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%",
      },
      "min": 0,
      "max": 100,
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'+
                     '<span style="color:transparent">\u25CF</span> Total Kronenbedeckung: <b>{point.stackTotal:,.2f}%</b>',
      "shared": false
    },
    "series": [
      { "color": "#672773", stack: "BS", index: 2, legendIndex: 1 }, /* hellbraun*/
      { "color": "#d095db", stack: "BS", index: 1, legendIndex: 2 }, /* hellbraun*/
      { "color": "#fabd24", stack: "Ba", index: 4, legendIndex: 3 }, /* dunkelbraun */
      { "color": "#fde5a7", stack: "Ba", index: 3, legendIndex: 4 }, /* dunkelbraun */
      { "color": "#73ba7c", stack: "Ri", index: 6, legendIndex: 5  }, /* dunkelbraun */
      { "color": "#c7e3cb", stack: "Ri", index: 5, legendIndex: 6  }, /* dunkelbraun */
      { "color": "#b475ab", stack: "Be", index: 8, legendIndex: 7  }, /* dunkelbraun */
      { "color": "#e1c8dd", stack: "Be", index: 7, legendIndex: 8  } /* dunkelbraun */
    ]
  
  }
}());