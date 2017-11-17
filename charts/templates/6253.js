(function(){
    return {
	 "data":{
	  	"switchRowsAndColumns": true
	  },
	   legend:{
      	itemStyle: {
		fontSize: "1opx"
		}
      },
	  "legend": {
	    "enabled": true,
	    "layout": "horizontal",
	    "verticalAlign": "top",
	    "align": "center",
		//"x": 45,
		"itemWidth": 100,
	    "itemStyle": {
	    "fontWeight": "normal"
	    }
	  },
      plotOptions: {
        pie: {
         colors: [
 	           '#B00000', 
	           '#FF8028', 
	           '#E6E600', 
	           '#68AB2B ', 
	           '#008AC3', 
         ],
        size: "100%",
		dataLabels: {
		                enabled: true,
		                softConnector: false, 
		                format: '{point.percentage:.1f}%',
		                distance: 20,
		                style: {
		                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
		                    fontSize: '10px', 
		                    fontWeight: 'normal'
		                }
	      }
      }
    }
    };
}());
