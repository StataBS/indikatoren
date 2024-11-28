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
      { "color": "#083038", "visible": true }, /* schwarz */
      { "color": "#C4AB91", "visible": true }, /* braun */
      { "color": "#67401E", "visible": true }, /* braun */
      { "color": "#73B97C", "visible": true }, /* grün */
      { "color": "#007A2F", "visible": true }, /* grün */
      { "color": "#B375AB", "visible": true } /* purple */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemWidth: 75,
      width: 380,
      itemMarginBottom: 5,
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