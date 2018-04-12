/* global Highcharts */
(function(){
    return {
        "isStock": true,
        "chart": {
            "borderColor": "#fbfbfb",
            "backgroundColor": "#fbfbfb",
            "width": 485,
            "height": 415,        
            "spacingBottom": 60,
            "style": {
                "fontFamily": "Arial"
            },
            "events":{
                "load": function() {
                  this.credits.element.onclick = function() {};
                  //for top-left legends with no x defined: move legend to x position of first yAxis
                  if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0){
                    this.update(
                      {
                        legend: {
                          x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
                        }
                      }
                    );
                  }              
                }
            },
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
            //"uniqueNames": true,
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
                    "fontSize": null
                },
                "text": null
            },
            "labels": {
                "y": 3,
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
            buttonPosition: {
                x: 10,
                y: 365
            }
        },
        navigator: {
            margin: 10, 
            height: 30,
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
            csv: {
                dateFormat: '%d.%m.%Y'
            }
        }
	};
}());