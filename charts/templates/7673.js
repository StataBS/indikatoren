(function () {
  return {

    "xAxis": {
      "type": "category",
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
      }
    },
    "yAxis": {
      //"max": 450,
      "tickInterval": 100,
      //min: -200,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      // {"inverted": true},

      { "color": "#FFBB58", "visible": true }, /* rot*/
      { "color": "#DC440E", "visible": true }, /* blau*/
      { "color": "#A8C3CA", "visible": true }, /* blau*/
      { "color": "#246370", "visible": true }, /* blau*/
      { "color": "#083038", "visible": true } /* schwarz */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //itemWidth: 300,
      //"x": 40,
      //"y": 55,    
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>',
      "shared": false
    },
    "chart": {
      "type": "column",
      "inverted": false,
      "spacingBottom": 40
    }
  }
}());