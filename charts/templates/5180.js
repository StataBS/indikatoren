(function(){
    return {
      "xAxis": {
        "tickInterval": 1,
        labels: { 
          style: { 
            textOverflow: 'none' // prevents ellipsis
          }
        }
      },
      "yAxis": {
        "labels": {
          "format": "{value:,.0f}"
        }
      },	
  "tooltip": {
    "shared": false, 
  	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
  },
  "series": [
    {"color": "#B00000"}, /* dunkelrot */
    {"color": "#4f81bd"}, //dunkelblau 
  ],
  "legend": {
    "enabled": true,
    //"x": 45,
    //"y": 35,
    "itemWidth": 100,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left"
  },
  "plotOptions": {
    "line": {
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  }
}
}());
 