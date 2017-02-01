(function(){
    return {
    "chart": {
        "borderColor": "#fbfbfb",
        "backgroundColor": "#fbfbfb",
        "width": 485,
        "height": 415,        
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
    "plotOptions": {
        "series": {
            "dataLabels": {
                "style": {
                "fontSize": "10px"
                }
            }
        }
    },
    "title": {
        "style": {
        "fontSize": "14px",
        "fontWeight": "bold",
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
    "xAxis": {
        "uniqueNames": true,
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
	"navigation": {
		"menuItemStyle": {
			"fontFamily": Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
			"padding": '2px 10px'
		}
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
    "legend": {
        "symbolRadius": 0
    }
	}
}());