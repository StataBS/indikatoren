(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
        	    pointWidth: 5,
             borderWidth: 0,
        }
  },
  "yAxis": {
   tickAmount: 6,
   tickInterval: 500,
   max: 2500,
    "labels": {
      "format": "{value:,.0f}",
       "formatter": function(){
        return Highcharts.numberFormat((this.value),0)+''; 
      }, 
    }
  },
  "xAxis": {
  	"type": "category",
   "tickInterval": 4,
    labels:{
     x: 11,
     rotation: 0,
     		"formatter": function() {
   			 return this.value.split("-").slice(0, -1);
		},
     }
 
  },
 "legend": { 
     //y: 55,
     //x: -1,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    itemMarginBottom: 1,
     //width: 350,
     //itemWidth: 175,
     //itemDistance: 0,
     //symbolPadding: 0,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },


 "series": [
	 {"color": "#007A2F", index: 5, legendIndex:5}, /* */
	 {"color": "#73B97C", index: 4, legendIndex:4}, /* */
	 {"color": "#B00000", index: 3, legendIndex:3},  /* */
	 {"color": "#FF8028", index: 2, legendIndex:2},  /* */
	 {"color": "#FFBB58", index: 1, legendIndex:1}, /* */
	 {"color": "#CD9C00", index: 0, legendIndex:0}, /* */
  ],
 tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),0) + ' </b><br/><b>' 
    },
  },  
  "chart": {
  //height: 600,
  	type: "column",
    "inverted": false,
  }
};
}());





