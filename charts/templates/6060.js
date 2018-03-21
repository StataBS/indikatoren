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
           '#672773', 
           '#007a2f ',
           '#fabd24',
           '#b475ab',
           '#71a3b5',
           '#b9cfd7', 
           '#ff8028 ',
           '#73ba7c',
           '#9f7c5a',
           '#999999',         
        
        ],
		dataLabels: {
		                enabled: true,
		                format: '{point.percentage:.1f}%',
		                distance: 1,
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
