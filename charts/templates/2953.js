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
      "rotation": -90 
    } 
  },
  "yAxis": {
	"max": 100,
    "labels": {
      "format": "{value}%"
    }    
  },
  "series": [
  {"color": "#ffbb58", visible: false}, /* hellrot*/
  {"color": "#ff8028", visible: false}, /* ... */
  {"color": "#b00000", visible: false}, /* ...*/
  {"color": "#661200", visible: false}, /* ... */
  {"color": "#953735", visible: true}, /* dunkelrot*/
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 40,
	"y": 65,    
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
     //"marginBottom": 75,
     //"marginTop": 75,
  },
   "labelFormatter": function () {
            return this.name;
        }
}
}());

