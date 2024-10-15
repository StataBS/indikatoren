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
      "rotation": 0 
    } 
  },
  "yAxis": {
	"max": 100,
    "labels": {
      "format": "{value}%"
    }    
  },
   "series": [
    {"color": "#FFDA80", visible: true}, /* hellgelb*/
    {"color": "#FF8028", visible: true}, /* dunkelorange...*/
    {"color": "#DC440E", visible: true}, /* hellrot...*/
    {"color": "#953735", visible: true}, /* dunkelrot*/
    {"color": "#661200", visible: true}, /* ... */
    {"color": "#B375AB", visible: true}, /* violet*/
    {"color": "#672773", visible: true} /* dunktelviolet*/
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemWidth: 120,
      //"x": 40,
    //"y": 65,    
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
  },
   "labelFormatter": function () {
            return this.name;
        }
}
}());
