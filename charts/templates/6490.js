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
  	"type": "linear",
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"y": 60,
 	itemWidth: 100,
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
   {"color":"#2F656B", "index": 2, legendIndex: 0, "marker": {"enabled": false}}, //
   {"color":"#923F8D", "index": 1, legendIndex: 1,  "marker": {"enabled": false}}, //
   {"color":"#FF8028", "index": 0, legendIndex: 2,  "marker": {"enabled": false}}, //
  ],  
  "tooltip": {
    //"shared": true
  },
};
}());