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
  "tickAmount": 6,
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
 	 {"color": "#6F6F6F", "index": 0,	
 	 "marker": {
        "enabled": false
    }}, /*BS*/
 	{"color": "#FF8028","index": 1}, /*BL*/
	{"color": "#A8C3CA", "index": 1}, /*AG*/	  
	{"color": "#008AC3", "index": 2}, /*ZH*/
	{"color": "#990300", "index": 3}, /*CH*/
 
	  ],
  "legend": {
    "enabled": true,
    //"y": 45,
    "layout": "horizontal",
    "verticalAlign": "top",
     width: 300,
     itemDistance: 20,
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