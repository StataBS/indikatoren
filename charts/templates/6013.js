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
         colors: [
           '#71A3B5', 
           '#B00000 ',
           '#FF8028',
           '#CD9C00',
           '#923F8D',
           '#999999'         ],
		dataLabels: {
		                enabled: true,
		                format: '{point.percentage:.0f}%',
		                distance: -30,
		                style: {
		                    color: 'white',
		                    textOutline: "0px white", 
                        fontWeight: "normal", 
                        fontSize: "12px"
		                }
	      }
      }
    }
    };
}());
