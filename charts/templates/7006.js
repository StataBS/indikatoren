/*
global Highcharts
*/

(function(){
    return {
 "xAxis": {
    "tickInterval": 4,
     "type": "category",
     labels:{
       x: 11,
       rotation: 0,
     		"formatter": function() {
   			 return this.value.split("-").slice(0, -1);
		},
     }
  },
  "yAxis": {
    tickAmount: 9,
	"labels": {
		"format": "{value:,.0f}",
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
  {"color": "#E7CEE2"},
  {"color": "#B375AB"}, 
  {"color": "#662673"}, 
	  ],
  "legend": {
  	//itemWidth: 300,
    "enabled": true,
    //"y": 45,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  },
  data: {
    parsed: function(columns){
      var pointsToKeep=40;
      //keep only the last n elements in the arrays but keep the column title
      columns.forEach(function(v, i, a){
        v.splice(1, v.length-pointsToKeep-1);
      });
    }
  },
};
}());