(function(){
  return {
    "data":{
    	"switchRowsAndColumns": true
    },
    "plotOptions": {
      "series": {
        pointPadding: 0, 
        groupPadding: 0.1,
        borderWidth: 0
      }
    },
    "chart":{
      "type": "column",
      "inverted": true, /* false */
      "marginLeft": 210,
      "marginBottom": 55,
      "marginRight": 15
    },
    "xAxis": {
      "type": "category"
    },
    "yAxis": {
      min: null,
      max: 40,
      "labels": {
        "format": "{value}%"
      }    
    },
    "series": [
      {"color": "#661200", "visible": true}, //2000
      //{"color": "#ffbb58", "visible": false},
      //{"color": "#246370", "visible": false},
      //{"color": "#cd9c00", "visible": false},
      //{"color": "#e7cee2", "visible": false},
      {"color": "#b00000", "visible": true}, //2005
      //{"color": "#d3e2e4", "visible": false},
      //{"color": "#083038", "visible": false},
      //{"color": "#fabd24", "visible": false},
      //{"color": "#b375ab", "visible": false},
      {"color": "#dc440e", "visible": true}, //2010
      //{"color": "#a8c3ca", "visible": false},
      //{"color": "#45381d", "visible": false},
      //{"color": "#ffda80", "visible": false},
      //{"color": "#923f8d", "visible": false},
      {"color": "#ff8028", "visible": true}, //2015
      {"color": "#689199", "visible": true}, //2016
      //{"color": "#7f5f1a", "visible": true} //2017
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"x": 155,
      "y": 30,   
      "itemWidth": 60,
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
      shared: false
    }
  }
}());

