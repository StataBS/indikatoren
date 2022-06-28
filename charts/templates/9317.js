(function(){
    return {
   "chart": {
    width: 662, 
  	height: 208,
    type: "column",
    //"type": "area",
   },
  plotOptions: {
        series: {
        	"stacking": "normal",
			      pointPadding: 0,
            groupPadding: 0.2,
            borderWidth: 0,
            pointWidth: 2, 

        }
        /*
         area: {
            stacking: 'normal',
            lineWidth: 0,

        }*/
  },
  "yAxis": {
    tickAmount: 9,
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
  	tickInterval: 5,
    max: 105,
  	"type": "linear",
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "labelFormatter": function () {
      return this.name.replace('Bevölkerung', 'Wohnbevölkerung');
  },
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







