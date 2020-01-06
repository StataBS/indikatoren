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
  tickInterval: 5000,
	"labels": {
		"format": "{value:,.0f}",
		"formatter": function(){
        return Highcharts.numberFormat((this.value),0)+''; 
      },
	}
  },	
  tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),0) + ' </b><br/><b>';
    },
  },
 "series": [
 	 {"color": "#6F6F6F", "index": 0}, /*BS*/
 	{"color": "#FF8028","index": 1}, /*BL*/
	{"color": "#A8C3CA", "index": 1}, /*AG*/	  
	{"color": "#008AC3", "index": 2}, /*ZH*/
	  ],
  "legend": {
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
 /* data: {
    parsed: function(columns){
      var pointsToKeep=40;
      //keep only the last n elements in the arrays but keep the column title
      Highcharts.each(columns, function(v, i, a){
        v.splice(1, v.length-pointsToKeep-1);
      });
    }
  },*/
};
}());