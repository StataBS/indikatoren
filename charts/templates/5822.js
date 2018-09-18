(function(){
    return {
    "yAxis":{
    tickInterval:25,
    },
   
 	"xAxis": {
        "type": "category",
        "labels": {
            "formatter": function() {
                  	 return this.value;
            }
        } 
  },  
  plotOptions: {
  	column: {
  		groupPadding: 0,
  		"pointWidth": 90,

  	}
  },
 "series": [
	 {"color": "#672773", "index": 14, legendIndex: 0}, /*dunkelpink */
	 {"color": "#E7CEE2", "index": 13, legendIndex: 1}, /*hellpink */
	 {"color": "#007A2F", "index": 12, legendIndex: 2}, /*dunkelgrün */
	 {"color": "#73BA7C", "index": 11, legendIndex: 3}, /*hellgrün */
	 {"color": "#FFBB58", "index": 10, legendIndex: 4}, /*dunkelgelb */
     ],
  "legend": { 
    "enabled": true,
    "layout": "vertical",
    reversed: true,
     //"itemWidth": 110,
     //itemDistance: 5, 
    "verticalAlign": "middle",
    "align": "right",
    "itemStyle": {
        "fontWeight": "normal"
    }
  },
 "data":{
  	"switchRowsAndColumns": true
  },
"chart": {  
     "inverted": false,
  },
"tooltip": {
        "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:.1f}%)<br/>',
    },
};
}());