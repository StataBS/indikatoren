(function(){
    return {
 "xAxis": {
    "tickInterval": 12,
     "type": "category",
     labels:{
        x: 14,
       rotation: 0,
     		"formatter": function() {
   			 return this.value.split("-").slice(0, -1);
		},
     }
  },
  "yAxis": {
    tickAmount: 10,
    tickInterval: 0.01,
	"labels": {
		"format": "{value:,.0f}",
		"formatter": function(){
        return Highcharts.numberFormat((this.value*100),0)+'%'; 
      },
	}
  },	
  tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b><br/><b>' 
    },
  },
 "series": [
 	{"color": "#008AC3"},/**/
	{"color": "#662673"}, /**/	  
	{"color": "#689199"}, /**/
	{"color": "#B375AB"}, /**/


	  ],
  "legend": {
    "enabled": true,
    //"y": 45,
    width: 300,
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
  }
}
}());