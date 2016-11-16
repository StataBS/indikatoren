var template = {
    "chart": {		
        events:{
            load: function() {                
                this.credits.element.onclick = function() {
                    /*
                    window.open(
                    "http://www.statistik.bs.ch",
                    '_blank' // http://stackoverflow.com/questions/16810556/how-to-open-credits-url-of-highcharts-in-new-tab
                    );
                    */
                };
            }
        },
        "borderColor": "#fbfbfb",
        "backgroundColor": "#fbfbfb",
        "width": 485,
        "height": 415,
        "spacingBottom": 45,
        "style": {
            "fontFamily": "Arial"
        },
        "type": "map",
		"inverted": true
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
        "gridLineWidth": 0,
        "labels": {	
		    "style": {"color": "black", "cursor": "default", "fontSize": "11px"}
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
        "floating": true
	}
};

//Colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199