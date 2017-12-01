/* global Highcharts */
(function(){
    return {
        "isStock": true,
        "chart": {
            "borderColor": "#fbfbfb",
            "backgroundColor": "#fbfbfb",
            "width": 320,
            "height": 208,        
            //spacing: [3,0,3,2],
            "style": {
                "fontFamily": "Arial"
            },
            "events":{
                    "load": function() {
                        this.credits.element.onclick = function() {};
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
            lineColor: '#B9CFD7', 
            lineWidth: 0.5,
            "uniqueNames": true,
            "ordinal": false,
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
            "tickLength": 0,
        }, 
        "yAxis": {
            gridLineColor: '#B9CFD7', 
            gridLineWidth: 0.5,
            lineColor: '#B9CFD7', 
            "title": {
                "style": {
                    "color": "#000000",
                    "fontSize": 10
                },
                "text": ''
            },
            "labels": {
                y: 3, 
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
        }, 
        "rangeSelector": {
            //floating: false,
            verticalAlign: 'bottom',
            buttonPosition: {
                x: 10,
                //y: 100
            }
        },
        navigator: {
            margin: 10, 
            height: 20,
            series: {
                includeInCSVExport: false
            },
            outlineColor: '#B9CFD7'
        }, 
        tooltip: {
            dateTimeLabelFormats: {
                day:"%A, %e. %b, %Y"
            }
        },
        exporting: {
            enabled: false,
            csv: {
                dateFormat: '%d.%m.%Y'
            }
        }
	};
}());