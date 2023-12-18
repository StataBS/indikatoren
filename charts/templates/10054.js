(function(){
    return {
  plotOptions: {
        series: {
            borderWidth: 0,
            "stacking": "percent",
            pointPadding: 0.1,
            groupPadding: 0,
            minPointLength:5 
        }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}%",
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
    enabled:true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5, 
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
	 {"color": "#FF8028", "index": 14}, /*dunkelrot */
	 {"color": "#FFBB58", "index": 13}, /*hellrot */
	// {"color": "#FF8028", "index": 12}, /*dunkelorange */
	// {"color": "#FFBB58", "index": 11}, /*dunkelgelb */
	// {"color": "#FFDA80", "index": 10}, /*hellgelb */
	// {"color": "#007A2F", "index": 9}, /*dunkelgrün */
	// {"color": "#D7E8D2", "index": 8}, /*hellgrün1 */
	// {"color": "#73BA7C", "index": 7}, /*hellgrün2 */
	 //{"color": "#2B0099", "index": 6}, /*dunkelblau1 */
	 //{"color": "#008AC3", "index": 5}, /*dunkelblau2 */
	 //{"color": "#B9CFD7", "index": 4}, /*hellblau */
     {"color": "#E7CEE2", "index": 3},  /*hellpink */
	 {"color": "#672773", "index": 2},  /*dunkelpink */
	
     {"color": "#8a8a8a", "index": 1},  /*hellpink */
  ],
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:.1f}% von {point.total:,.0f})<br/>',
},
  "chart": {
  	type: "column",
    "inverted": false,
  }
};
}());





