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
      "labels": {
        "rotation": 0,
        padding: -100,
      }
    },
    "yAxis": {
      // type: "category",
      //"max": 100,
      	tickInterval: 15000,
      //max: 60000, 
      "labels": {
        style: { 
          textOverflow: "none" }
        ,      //rotation: 0,
        "format": "{value:,.0f}"
      }
    },
    "series": [
      { "color": "#7F5F1A", "visible": true }, /* hellbraun*/
      //{"color": "#83522E", "visible": true} /* dunkelbraun */
    ],
    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"x": 25,
      //"y": 55,    
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      "shared": false
    },
    "chart": {
      "type": "column",
      "inverted": true,
      marginRight: 25
      //"spacingTop": 100
    }
  }
}());