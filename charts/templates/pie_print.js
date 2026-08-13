(function(){
    return {
    	 "chart": {
        "borderColor": "#ffffff",
        "backgroundColor": "#ffffff",
 		"width": 320,
    	"height": 208,  
        "spacingBottom": 30,
        "style": {
            "fontFamily": "Inter, Helvetica Neue, Helvetica, Arial, sans-serif"
        },
        "zoomType": "xy",
        "events":{
                "load": function() {
                    this.credits.element.onclick = function() {};
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
	};
}());
