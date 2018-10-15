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
  		groupPadding: 0.2,
  	}
  },
 "series": [
	 {"color": "#083038", index: 3, legendIndex: 0}, /* */
	 {"color": "#2F656B", index:  2, legendIndex: 1}, /* */
	 {"color": "#689199", index: 1, legendIndex: 2},  /* */
	 {"color": "#D3E2E4", index: 0, legendIndex: 3},  /* */
     ],
  "legend": { 
    "enabled": true,
    "layout": "horizontal",
    itemDistance: 5, 
    "verticalAlign": "top",
    "align": "left",
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
}
}());
