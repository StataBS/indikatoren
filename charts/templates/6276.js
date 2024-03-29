(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
        }
   },


    "data":{
  	"switchRowsAndColumns": true
  },

  "xAxis": {
    "type": "category",
     "labels": { 
    } 
  },
  "yAxis": {
	"max": 100,
	tickInterval: 25,
    "labels": {
      "format": "{value}%",
      y: 3
    }    
  },
  "series": [
    {"color": "#ffbb58", visible: true}, /* hellrot*/
    {"color": "#ff8028", visible: true}, /* ... */
    {"color": "#b00000", visible: true}, /* ...*/
    {"color": "#953735", visible: true}, /* dunkelrot*/
    {"color": "#661200", visible: true}, /* ... */
    {"color": "#3A2012", visible: true},
    ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    padding: 0,
    itemDistance: 10,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false,
    width: 665,
  },
};
}());
