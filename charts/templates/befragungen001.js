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
            borderWidth: 0,
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
            "format": "{value}%",
            "style": {
            "color": "#000000"
            }
        }
    },
    "xAxis": {    
        lineColor: '#B9CFD7', 
        lineWidth: 0.5,
        "type": "category",
        "uniqueNames": true,
        "tickLength": 0,
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
        "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
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
        "layout": "vertical",
        "verticalAlign": "middle",
        "itemMarginBottom": 5,     
        "align": "right",
        "useHTML": false,
        "itemStyle": {
            "fontWeight": "normal"
        },
        "symbolRadius": 0,
        "labelFormatter": function () {
            return this.name.replace('/ ', '/<br/>');
        }
    }
	};
}());