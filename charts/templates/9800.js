(function(){
    return {
 "xAxis": {
    tickInterval: 1     
  },
  "yAxis": {
    tickInterval: 2000,
	"labels": {
		"format": "{value:,.0f}",
	}
  },	
  tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),0) + '</b>' 
    },
  },
 "series": [
 	{"color": "#008AC3"},/**/
	{"color": "#DC440E"}, /**/	  
	{"color": "#68AB2B"}, /**/
	{"color": "#FABD24"}, /**/
    {"color": "#8A8A8A"}, /**/


	  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,

    //itemDistance: 10,
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
  chart:{
    marginRight: 20,
  }
}
}());