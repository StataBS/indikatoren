var template = {	
    "chart": {
        "borderColor": "#fbfbfb",
        "backgroundColor": "#fbfbfb",
        "width": 485,
        "marginBottom": 65,
        "marginTop": 75,
        "style": {
            "fontFamily": "Arial"
        },
        "zoomType": "xy",
        events:{
                load: function() {
                    this.credits.element.onclick = function() {}
                }
        }
    },    
    "plotOptions": {
        "series": {
            "dataLabels": {
                "style": {
                "fontSize": 10
                }
            }
        }
    },
    "position": {
        "align": "left",
        "verticalAlign": "bottom",
        x: 10,
        y: -17
    },        
    "title": {
        "style": {
        "fontSize": 14,
        "fontWeight": "bold",
        "color": "#000000"
        },
        "align": "left"
    },
    "subtitle": {
        "style": {
        "fontSize": 12,
        "fontWeight": "normal",
        "fontFamily": "Arial",
        "color": "#000000"
        },
        "text": "",
        "align": "left"
    },
    "xAxis": {
        "title": {
        "style": {
            "color": "#000000"
        }
        },
        "labels": {
        "style": {
            "color": "#000000"
        }
        },
        "tickColor": "#FFFFFF"
    }, 
    "yAxis": {
        "title": {
            "style": {
                "color": "#000000",
                "fontSize": null
            },
            "text": null
        },
        "labels": {
            "style": {
            "color": "#000000"
            }
        }
    },    
	navigation: {
		menuItemStyle: {
			fontFamily: Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
			padding: '2px 10px'
		}
	},
    "credits": {
        "enabled": true,
        "style": {
            "color": "#000000",
            "fontSize": 10,
            "cursor": "default"
        },
        "position": {
            "align": "left",
            "verticalAlign": "bottom",
            x: 10,
            y: -17
        }
    }
};