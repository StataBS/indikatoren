(function(){
    return {
    "chart": {
        "borderColor": "#fbfbfb",
        "backgroundColor": "#fbfbfb",
 		"width": 320,
    	"height": 208,  
    	spacing: [7,3,8,3], /*top, right, bottom and left */
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
            borderWidth: 0,
            "dataLabels": {
                "style": {
                "fontSize": "10px",
                fontFamily: "Arial",
                "fontWeight": "normal", 
                color: 'black',
                }
            }
        }
    },
    "title": {
        "style": {
        "fontSize": "10px",
        "fontWeight": "bold",
        "color": "#000000"
        },
        "align": "left"
    },
    "subtitle": {
        "style": {
        "fontSize": "10px",
        "fontWeight": "normal",
        "fontFamily": "Arial",
        "color": "#000000"
        },
        "text": "",
        "align": "left"
    },
    "xAxis": {
        lineColor: '#B9CFD7', 
        lineWidth: 0.5,
        "uniqueNames": true,
        "title": {
            "style": {
                "color": "#000000"
            }
        },
        "labels": {
            "style": {
            	fontSize: 10,
                "color": "#000000"
            }
        },
        "tickColor": "#FFFFFF"
    }, 
    "yAxis": {
        gridLineColor: '#B9CFD7', 
        gridLineWidth: 0.5,
        lineColor: '#B9CFD7', 
        "title": {
            "style": {
                "color": "#000000",
                "fontSize": null
            },
            "text": null
        },
        "labels": {
            "style": {
            	fontSize:10,
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
            "fontSize": "10",
            "cursor": "default"
        },
        "position": {
            "align": "left",
            "verticalAlign": "bottom",
            "x": 10
        }
    },
    "legend": {
        "symbolRadius": 0,
        itemStyle:{"fontSize": "10px"}
    },
    dataLabels: {
            enabled: false,
            style: {fontSize: 10}
        }
	}
}());