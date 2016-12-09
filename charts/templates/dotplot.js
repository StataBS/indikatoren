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
        "zoomType": "xy",
        "type": "scatter",
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
    "plotOptions": {
        "series": {
            "dataLabels": {
                "x": 5,
                "align": "left",
                "verticalAlign": "middle",
                "enabled": false,
                "style": {
                    "fontSize": "10px"
                },
                "formatter": function(){
                    return Highcharts.numberFormat((this.y*100),1)+'%';                
                },
            }
        }
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
            "formatter": function(){
                return Highcharts.numberFormat((this.value*100),0)+'%';                
            },
            "style": {
                "color": "#000000"
            }
        }, 
        "min": 0
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
        "type": "category",
        "uniqueNames": true        
    },
    "tooltip": {
        "pointFormatter": function(){
            //rank is calculated from index, thus data needs to be sorted by rank ascending.
            return '<span style="color:{series.color}">' + this.series.data[this.x].name + '</span>: <b>'+Highcharts.numberFormat((this.y*100),2)+'%</b><br/>Rang <b>' + parseInt(this.x + 1) + '</b>'                
        },        
        shared: false
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
		"enabled": false,
        "symbolRadius": 0
	}
};

//Colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199