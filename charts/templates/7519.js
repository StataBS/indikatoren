(function(){
    return {
        
      legend:{
      	style: {
		fontSize: "12px"
		}
      },
      "series": [ 
          {
              borderWidth: 2,
              "name": "Anteil"
          }        
      ],
    	"tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.percentage:,.1f}%</b><br/>',
        "shared": false
      },
      plotOptions: {
        pie: {
         colors: [
           "#B00000",
           "#FABD24", 
           "#68AB2B",
           "#C4AB91",
           "#246370",
           "#008AC3",
           "#FFDA80", 
           "#BAA85A",
           "#B375AB",
           "#FF8028",
           "#C8C8C8",
        ],
		/*dataLabels: {
		                enabled: true,
		                format: '{point.percentage:.1f}',
		                distance: 1,
		                style: {
		                    color: 'black',
		                    textOutline: "0px black", 
                        fontWeight: "normal", 
                        fontSize: "12px"
		                }
	      }*/
      }
      }
    
    };
}());
