(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
        	   pointWidth: 30,
             groupPadding: 0.1,
             borderWidth: 0,
        }
  },
  "yAxis": {
    tickAmount: 11,
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
        }  
  },
 "legend": { 
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "top",
    "align": "right",
    itemMarginTop: 0,
    itemMarginBottom: 1,
    labelFormatter: function(){
      return this.name
        .replace("Öffentliche Verwaltung, Sozialversicherungen (inkl. staatl. Bildungsinstitutionen)", "Öffentl. Verw., Sozialvers. (inkl. staatl. Schulen)")
        ;
    },
    "itemStyle": {
    "fontWeight": "normal",
    fontSize: "9px",  
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
  	width: 665, 
  	spacingTop: 7,
  	type: "column",
    "inverted": false,
  }
};
}());





