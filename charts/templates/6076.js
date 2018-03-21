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
  	"y": 20,
   	itemWidth: 140,
	  "itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {"color":"#b00000", "index": 11,legendIndex: 0, "marker": {"enabled": false}}, //
    {"color":"#672773", "index": 10,legendIndex: 1,  "marker": {"enabled": false}}, //
	{"color":"#007a2f", "index": 9,legendIndex: 2,  "marker": {"enabled": false}}, //
    {"color":"#fabd24", "index": 8,legendIndex: 3,  "marker": {"enabled": false}}, //
    {"color":"#b475ab", "index": 7,legendIndex: 4,  "marker": {"enabled": false}}, //
    {"color":"#71a3b5", "index": 6,legendIndex: 5,  "marker": {"enabled": false}}, //
    {"color":"#b9cfd7", "index": 5,legendIndex: 6,  "marker": {"enabled": false}}, //
    {"color":"#ff8028", "index": 4,legendIndex: 7,  "marker": {"enabled": false}}, //
    {"color":"#73ba7c", "index": 3,legendIndex: 8,  "marker": {"enabled": false}}, //
    {"color":"#9f7c5a", "index": 2,legendIndex: 9,  "marker": {"enabled": false}}, //
    {"color":"#999999", "index": 1,legendIndex: 10, "marker": {"enabled": false}}, //
  ],  
  "tooltip": {
    //"shared": true
  },
};
}());