(function(){
    return {
   "chart": {
    "type": "area",
   },
  plotOptions: {
        /*series: {
        	"stacking": "normal",
			pointPadding: 0,
            borderWidth: 0,
            pointWidth: 10, 

        }*/
         area: {
            stacking: 'normal',
            //lineColor: '#666666',
            lineWidth: 0,

        }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
"xAxis": {
  	"type": "category",
    "tickInterval": 4,
     labels:{
     		"formatter": function() {
   			 return this.value.split("-").slice(0, -1);
		},
     }  
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"y": 40,
	"x": 45,
 	itemWidth: 100,
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
  {"color":"#0A3B19", "index": 7, legendIndex:0 ,"marker": {"symbol": "circle", enabled: false}}, //rot
  {"color":"#007A2F", "index": 6, legendIndex:1,"marker": {"symbol": "circle", enabled: false}}, //orange
  {"color":"#73B97C", "index": 5, legendIndex:2, "marker": {"symbol": "circle", enabled: false}}, //gelb
  {"color":"#D7E8D2", "index": 4, legendIndex:3, "marker": {"symbol": "circle", enabled: false}}, //blau
  {"color":"#F2F2F2", "index": 3, legendIndex:4, "marker": {"symbol": "circle", enabled: false}}, //rot
  {"color":"#2F656B", "index": 2, legendIndex:5, "marker": {"symbol": "circle", enabled: false}}, //orange
  {"color":"#689199", "index": 1, legendIndex:6, "marker": {"symbol": "circle", enabled: false}}, //gelb
  {"color":"#D3E2E4", "index": 0, legendIndex:7, "marker": {"symbol": "circle", enabled: false}}, //blau
  ],  
  "tooltip": {
    //"shared": true
  },
};
}());