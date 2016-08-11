var template = {
    chart: {		
        events:{
            load: function() {
                this.credits.element.onclick = function() {
                    window.open(
                    "http://www.statistik.bs.ch",
                    '_blank' // http://stackoverflow.com/questions/16810556/how-to-open-credits-url-of-highcharts-in-new-tab
                    );
                }
            }
        },
        "borderColor": "#fbfbfb",
        "backgroundColor": "#fbfbfb",
        "width": 485,
        "marginBottom": 65,
        "marginTop": 75,
        "style": {
        "fontFamily": "Arial"
        },
        "zoomType": "y",
        "type": "column"
    },
    "title": {
        "style": {
        "fontSize": 14,
        "fontWeight": "bold",
        "fontFamily": "Arial",
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
    navigation: {
        menuItemStyle: {
            fontFamily: Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
            padding: '2px 10px'
        }
    },
    "plotOptions": {
        "series": {
            "dataLabels": {
            "style": {
                "fontSize": 10
            }
            },
            "stacking": "percent"
        }
    },
    "yAxis": {
        "tickInterval":10,
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
        "tickColor": "#FFFFFF",
        "type": "category"        
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: false
    },
    "exporting": {
        "sourceWidth": null,
        "scale": 5,
        buttons: {
            contextButton: {
            menuItems: Highcharts.getOptions().exporting.buttons.contextButton.menuItems.slice(0, 8)
            }
        }
        },
    "credits": {
        "text": "Quelle: Kantonale Befragung 55plus;<br/>Statistisches Amt des Kantons Basel-Stadt",
        "enabled": true,
        "style": {
            "color": "#000000",
            "fontSize": 10
        },
        "position": {
            "align": "left",
            "verticalAlign": "bottom",
            x: 10,
            y: -17
        }
    },
    "legend": {
        "layout": "vertical",
        "verticalAlign": "middle",
        "itemMarginBottom": 5,     
        "align": "right",
        "itemStyle": {
            "fontWeight": "normal"
        }
    }    
};