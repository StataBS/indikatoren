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
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.2f} km² ({point.percentage:.1f}%)</b><br/>',
        "shared": false
      },
      plotOptions: {
        pie: {
         colors: [
           '#007A2F',  // Wald
           '#68AB2B ',  // Acker, Wiese, Weide
           '#73B97C',  // Übrige Grünfläche
           '#990300',  // Gebäude
           '#6F6F6F',  // Verkehrsflächen
           '#3C3C3C',  // Übrige versiegelte Fläche
           '#008AC3' // Gewässer
         ],
		dataLabels: {
		                enabled: true,
		                format: '{point.percentage:.1f}%',
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
