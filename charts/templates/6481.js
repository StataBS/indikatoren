(function(){
    return {
    "yAxis":{
    tickInterval:20,
	//width:'50%'
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
  	    groupPadding: 20,
  		"pointWidth": 20,

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
     "itemWidth": 125,
     //itemDistance: 5, 
    "verticalAlign": "middle",
    "align": "right",
    "itemStyle": {
        "fontWeight": "normal"
    }
  },
 "data":{
  	"switchRowsAndColumns": false
  },
"chart": {  
     "inverted": false,
  },
"tooltip": {
        "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:.1f}%)<br/>',
		"shared": true
	},
};
}());


/* old 
(function(){
    return {
	  "legend": { 
	    //y: 55,
	    "enabled": true,
	    "layout": "horizontal",
	   "itemWidth": 1000,
	    "verticalAlign": "top",
	    "align": "left",
	    "itemStyle": {
	    "fontWeight": "normal"
	    }
	  },
      "data":{
      	"switchRowsAndColumns": true
      },
      "series": [ 
          {
              "name": "Anzahl"
          }        
      ],
    	"tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} ({point.percentage:,.1f}%)</b><br/>',
        "shared": false
      },
      plotOptions: {
        pie: {
         colors: [
    	   '#B00000', 
           '#FF8028',
           '#FABD24',
           '#E6E600',
        ],
		/*dataLabels: {
		                enabled: true,
		                format: '{point.percentage:.1f}',
		                distance: 10,
		                style: {
		                    color: 'black',
		                    textOutline: "0px black", 
                        fontWeight: "normal", 
                        fontSize: "12px"
		                }
	      }*/ /*
      }
    }
    };
}());
*/