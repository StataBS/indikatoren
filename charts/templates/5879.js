(function(){
    return {
   	"chart": {
			spacing: [15,3,8,3], /*top, right, bottom and left */ /*[3,3,3,3]*/
		},
      "xAxis": {
        "type": "category"
      },  
      "tooltip": {
        valueDecimals: 1
      },  
       /* "legend": {
	    "enabled": true,
	    "layout": "horizontal",
	    "verticalAlign": "top",
	    "align": "left",
		//"x": 45,
		"itemWidth": 120,
	    "itemStyle": {
	    "fontWeight": "normal"
	    }
	  },*/
      "series": [
        {"color": "#C8C8C8", index: 1, legendIndex: 1}, /*grau*/
        {"color": "#CD9C00", index: 2, legendIndex: 2}, /*dunkelrot*/
        {"color": "#FABD24", index: 3, legendIndex: 3}, /*hellrot*/
        {"color": "#73B97C", index: 4, legendIndex: 4}, /*hellgrün*/
        {"color": "#007A2F", index: 5, legendIndex: 5} /*dunkelgrün*/
      ]
    };
}());