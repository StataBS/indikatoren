(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        itemWidth: 10,
      }
    },
    "xAxis": {
      "type": "category",
      reversed: false,
      "labels": {

        step: 1,
        x: -5,
        y: 1,
        "rotation": 0
      }
    },
    "yAxis": {
      //max: 4000,
      "labels": {
       
        y: 18,
        "format": "{value:,.0f}"
      }
    },
    "series": [
      { "color": "#b00000", "visible": true }, /* */
      { "color": "#661200", "visible": true }, /*  */
      { "color": "#dc440e", "visible": true }, /* */
      { "color": "#cd9c00", "visible": true }, /*  */
      { "color": "#7f5f1a", "visible": true }, /* */
      { "color": "#ffda80", "visible": true } /*  */
    ],
    "legend": {
      x: -1,
      "enabled": true,
      itemDistance: 5,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left"
    },
    "chart": {
      marginRight: 18,
      "type": "column",
      "inverted": true,
    }
  }
}());