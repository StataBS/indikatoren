(function(){
    return {
    "chart": {		
        "events":{
            "load": function() {
                this.credits.element.onclick = function() {
                    /*
                    window.open(
                    "http://www.statistik.bs.ch",
                    '_blank' // http://stackoverflow.com/questions/16810556/how-to-open-credits-url-of-highcharts-in-new-tab
                    );
                    */
                }
            }
        },
        "borderColor": "#fbfbfb",
        "backgroundColor": "#fbfbfb",
        "width": 485,
        "height": 415,
        "spacingBottom": 30,
        "style": {
			"fontFamily": "Arial"
        },
        "zoomType": "xy",
        "type": "column"
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
			"color": "#000000"
        },
		"align": "left"
    },
    "navigation": {
        "menuItemStyle": {
            "fontFamily": Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
            "padding": '2px 10px'
        }
    },
    "plotOptions": {
        "series": {
            "dataLabels": {
                "style": {
                    "fontSize": "10px"
                }
            },
            "stacking": "percent"
        }
    },
    "yAxis": {
        "tickInterval":10,
        "reversedStacks": false,
        "title": {
            "style": {
            "color": "#000000",
            "fontSize": null
            },
            "text": null
        },
        "labels": {
            "format": "{value}%",
            "style": {
            "color": "#000000"
            }
        }
    },
    "xAxis": {    
        "type": "category",
        "uniqueNames": true,
        "tickColor": "#FFFFFF",
        "title": {
            "style": {
				"color": "#000000"
            }
        },
        "labels": {
            "rotation": 0,
			"style": {
                "color": "#000000",
                "width": 1,
                "textOverflow": "none"
            },
            "formatter": function() {
            	return this.value.replace(" ", "<br/>");
            }
        }                
    },
    "tooltip": {
        "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
        "shared": false
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
        "reversed": true,
        "layout": "vertical",
        "verticalAlign": "middle",
        "itemMarginBottom": 5,     
        "align": "right",
        "useHTML": true,
        "itemStyle": {
            "fontWeight": "normal",
            "width": 115
        },
        "symbolRadius": 0,
        "labelFormatter": function () {
            return this.name.replace('/ ', '/<br/>');
        }
    }    
	}
}());