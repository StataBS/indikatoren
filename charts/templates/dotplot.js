(function(){ 
    return {
        "chart": {		
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
            "borderColor": "#fbfbfb",
            "backgroundColor": "#fbfbfb",
            "width": 485,
            "height": 415,
            "spacingBottom": 35,
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
                "formatter": function(){
                    return Highcharts.numberFormat((this.value*100),0)+'%';                
                },
                "style": {
                    "color": "#000000", 
                    textOverflow: 'none'
                }
            }, 
            "min": 0
        },
        "xAxis": {
            lineColor: '#B9CFD7',
            lineWidth: 0.5,
            "title": {
                "style": {
                    "color": "#000000"
                }
            },
            "labels": {
                "style": {
                    "color": "#000000",
                    "fontSize": "10px"
                }
            },
            "tickLength": 0,
            "tickInterval": 1,
            "type": "category",
            "uniqueNames": true        
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
    	},
        "tooltip": {
            "formatter": function(args){
                var this_point_index = this.series.data.indexOf(this.point);
                var other_series_index = this.series.index == 0 ? 1 : 0; // assuming 2 series
                var other_series = args.chart.series[other_series_index];
                var other_point = other_series.data[this_point_index];
                return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' + 
                    this.point.name +': <b>' + Highcharts.numberFormat((this.y*100),1) + '%</b><br/>' + 
                    'Rang <b>' + other_point.y + '</b>';
            },        
            shared: true
        }
    };
}());

//Colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199