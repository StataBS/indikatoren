(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
             groupPadding: 0,
        }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
  	"type": "category",
   "tickInterval": 1,
          "labels": {
          	step: 1,
            //"rotation": 0,
            "rotation": -45,
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
	 {"color": "#8B2223", "index": 14}, /*dunkelrot */
	 {"color": "#DC440E", "index": 13}, /*hellrot */
	 {"color": "#FF8028", "index": 12}, /*dunkelorange */
	 {"color": "#FFBB58", "index": 11}, /*dunkelgelb */
	 {"color": "#FFDA80", "index": 10}, /*hellgelb */
	 {"color": "#007A2F", "index": 9}, /*dunkelgrün */
	 {"color": "#D7E8D2", "index": 8}, /*hellgrün1 */
	 {"color": "#73BA7C", "index": 7}, /*hellgrün2 */
	 {"color": "#2B0099", "index": 6}, /*dunkelblau1 */
	 {"color": "#008AC3", "index": 5}, /*dunkelblau2 */
	 {"color": "#B9CFD7", "index": 4}, /*hellblau */
	 {"color": "#672773", "index": 3},  /*dunkelpink */
	 {"color": "#E7CEE2", "index": 2},  /*hellpink */
  ],
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
    
  },
  "chart": {
  	type: "column",
    "inverted": false,
  }
};
}());





