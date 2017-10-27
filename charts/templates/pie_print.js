(function(){
    return {
    	 "chart": {
        "borderColor": "#fbfbfb",
        "backgroundColor": "#fbfbfb",
 		"width": 320,
    	"height": 208,  
        "spacingBottom": 30,
        "style": {
            "fontFamily": "Arial"
        },
        "zoomType": "xy",
        "events":{
                "load": function() {
                    this.credits.element.onclick = function() {}
                }
        }
    }, 
     pie:{
        	style: {fontSize: '10px' }
        		
        	},
      "series": [ 
            {
                "name": "Anzahl"
            }        
        ]
	}
}());
