(function(){
    return {
	  "legend": { 
	    y: 55,
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
		dataLabels: {
		                enabled: true,
		                format: '{point.percentage:.1f}%',
		                distance: 10,
		                style: {
		                    color: 'black',
		                    textOutline: "0px black", 
                        fontWeight: "normal", 
                        fontSize: "12px"
		                }
	      }
      }
    }
    };
}());
