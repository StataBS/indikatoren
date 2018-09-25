(function(){
    return {
	  "legend": { 
	    "enabled": true,
	    "layout": "vertical",
	    "verticalAlign": "middle",
	    "align": "right",
	    "itemStyle": {
	        "fontWeight": "normal",
	    },
	    labelFormatter: function(){
	        return this.name
	            .replace("ohne", "ohne<br/>")
	            .replace("mit", "mit<br/>")
	            //.replace("Migrationshintergrund", "Migrations-<br/>hintergrund")
	            //.replace(" der", "<br/>der")
	            .replace(" und", "<br/>und")
	            //.replace(" Generation", "<br/>Generation")
	            .replace("ersten Generation", "ersten<br/>Generation")
            ;
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
		                enabled: false,
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
