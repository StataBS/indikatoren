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
  	tickInterval: 10,
  	"type": "linear",
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    itemDistance: 0,
    itemMarginBottom: 2,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {"color":"#73ba7c", "index": 3,legendIndex: 0,  "marker": {"enabled": false}, stacking: true}, //
    {"color":"#FABD24", "index": 2,legendIndex: 1,  "marker": {"enabled": false}, stacking: true }, //
    {"color":"#923F8D", "index": 1,legendIndex: 2, "marker": {"enabled": false}, stacking: true}, //
    {"color":"#999999", "index": 0,legendIndex: 3, "marker": {"enabled": false}, stacking: false}, //
    
  ],  
  "tooltip": {
    //"shared": true
  },

};
}());







