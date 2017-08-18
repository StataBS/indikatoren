(function(){
    return {
        "chart": {		
            "borderColor": "#fbfbfb",
            "backgroundColor": "#fbfbfb",
            "width": 485,
            "height": 415,
            "spacingBottom": 45,
            "style": {
                "fontFamily": "Arial"
            },
            "type": "map",
    		"inverted": false
        },
        "title": {
            "style": {
                "fontSize": "14px",
                "fontWeight": "bold",
                "fontFamily": "Arial",
                "color": "#000000"
            },        
            "align": "left"
        },
        "subtitle": {
            "style": {
                "fontSize": "12px",
                "fontWeight": "normal",
                "fontFamily": "Arial",
                "color": "#000000"
            },
            "text": "",
            "align": "left"
        },
        "credits": {
            "enabled": true,
            "style": {
                "color": "#000000",
                "fontSize": "10px",
                "cursor": "default"
            },
            "position": {
                "align": "left",
                "verticalAlign": "bottom",
                "x": 10
            }
        },
        "colorAxis": {
    		"min": 0,
    		"gridLineColor": "#fbfbfb",	
            "gridLineWidth": 1,
            "labels": {	
    		    "style": {"color": "black", "cursor": "default", "fontSize": "11px", "textOverflow": "none"}
    		},
    		"marker": {
                    "color": "black"
            }
    	},    
        "mapNavigation": {
            "enabled": true,
            "buttonOptions": {
                "align": "left",
                "verticalAlign": 'bottom'
            }
        },
        "legend": {
    		"enabled": true, 
            "align": "right",
            "floating": true,
            "title": {
                "style": {
                    "fontWeight": "normal", 
                    "fontSize": "11px"
                }
            }
    	}
    };
    }()
);
