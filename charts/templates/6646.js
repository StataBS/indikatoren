(function(){
    return {
      legend:{
      	style: {
		fontSize: "12px"
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
         //size: '75%',
         colors: [
    	   '#B00000', 
           '#FF8028',
           '#FABD24',
           '#E6E600',
           "#8AB77D",
           '#68AB2B',
           '#007A2F',

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
