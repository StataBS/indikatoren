var template = {
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
        "marginBottom": 65,
        "marginTop": 75,
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
        "tickColor": "#FFFFFF",
        "title": {
            "style": {
            "color": "#000000"
            }
        },
        "labels": {
            "rotation": 0,
			"style": {
                "color": "#000000"
            }
        }                
    },
    "tooltip": {
        "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
        "shared": false
    },
    "exporting": {
        "sourceWidth": null,
        "scale": 5,
        "buttons": {
            "contextButton": {
                "menuItems": Highcharts.getOptions().exporting.buttons.contextButton.menuItems.slice(0, 8)
            }
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
            x: 10,
            y: -17
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
            "fontWeight": "normal"
        }
    }    
};