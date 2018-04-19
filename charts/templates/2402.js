(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
             groupPadding: 0,
             borderWidth: 0,
        }
  },
  "yAxis": {
  	max: 1,
    "labels": {
      "format": "{value:,.0f}",
       "formatter": function(){
        return Highcharts.numberFormat((this.value*100),0)+'%'; 
      }, 
    }
  },
  "xAxis": {
  	"type": "category",
   "tickInterval": 1,
          "labels": {
          	step: 1,
            //"rotation": 0,
            //"rotation": -90,
        }  
  },
 "legend": { 
 	x: -1,
     //y: 45,
    "enabled": true,
    "layout": "horizontal",
   "itemWidth": 1000,
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
    "fontWeight": "normal"
    }
  },


 "series": [
	 {"color": "#E7CEE2", index: 15}, /* */
	 {"color": "#923F8D", index: 14}, /* */
	 {"color": "#662673", index: 13}, /* */
	 {"color": "#73B97C", index: 12}, /* */
	 {"color": "#B6CFD7", index: 11}, /* */
	 {"color": "#007A2F", index: 10}, /* */
	 {"color": "#0A3B19", index: 9}, /* */
	 {"color": "#FFDA80", index: 8}, /* */
	 {"color": "#FFBB58", index: 7}, /* */
	 {"color": "#FF8028", index: 6}, /* */
   	 {"color": "#B00000", index: 5}, /* */
	 {"color": "#689199", index: 4}, /* */
	 {"color": "#008AC3", index: 3},  /* */
	 {"color": "#C8C8C8", index: 2},  /* */
	 {"color": "#2B0099", index: 1}, /* */
	 {"color": "#8A8A8A", index: 0}, /* */
  ],
 tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b><br/><b>' 
    },
  },  
  "chart": {
  	height: 600,
  	type: "column",
    "inverted": false,
  }
};
}());





