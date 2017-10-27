(function(){
    return {
	 "data":{
	  	"switchRowsAndColumns": true
	  },
      "series": [ 
            {
                "name": "Anzahl"
            }        
        ],
	  plotOptions: {
	        pie: {
	         colors: [
	           '#B00000', 
	           '#FF8028', 
	           '#E6E600', 
	           '#68AB2B ', 
	           '#008AC3', 
	         ],
		dataLabels: {
		                enabled: true,
		                //crop: false,
		                //inside: false,
		                distance: 10,
		                format: '{point.percentage:.1f}%',
		                style: {
		                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                }
			}
      }
      }
    };
}());

