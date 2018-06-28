(function(){
    return {
    "chart": {		
        "events":{
            "load": function() {
                this.credits.element.onclick = function() {};
                //square legends must be placed 3 pixels more to the left that lines, don't know why
                var squareLegendX = (this['options']['chart']['type'] == 'line' ? 0 : 3);
                
              //for top-left legends with no x defined: move legend to x position of first yAxis
              if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0){
                this.update(
                  {
                    legend: {
                      x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding - squareLegendX
                    }
                  }
                );
              }                              
            }
        },
        "borderColor": "#fbfbfb",
        "backgroundColor": "#fbfbfb",
       	"width": 320,
    	"height": 208, 
    	spacing: [2,2,2,2], /*top, right, bottom and left */
         "style": {
			"fontFamily": "Arial",
			"fontSize": "10px",
        },
        "zoomType": "xy",
        "type": "column"
    },    
    "title": {
        "style": {
			"fontSize": "10px",
			"fontWeight": "normal",
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
            "fontSize": 10
            },
            "text": ''
        },
        "labels": {
            y: 3, 
            "format": "{value}%",
            "style": {
            "color": "#000000",
           "fontSize": "10px"
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
                 whiteSpace: 'nowrap', 
                "textOverflow": "none",
                "fontSize": "10px",
            },
              "formatter": function() {
                //add sum of observations of visible series to the axis label
                var allVisibleSeries = this.chart.series.filter(function(val, i, arr){
                    return val.visible;
                });
                var indexOfCurrentValue = this.axis.names.indexOf(this.value);
                var sum = allVisibleSeries.reduce(function(accumulator, series, index, arr){
                    return accumulator + series.yData[indexOfCurrentValue];
                }, 0);
                //use N if all series are visible, otherwise use n
                var nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n='; 
                var formattedSum = Highcharts.numberFormat(sum, 0, ",", " ")
            	return this.value.replace(" ", "<br/>") + '<br/>(' + nString + sum + ')';
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
    	 padding: 0,
        "layout": "vertical",
        "verticalAlign": "middle",
        //"itemMarginBottom": 5,     
        "align": "right",
        "useHTML": true,
        "itemStyle": {
        	"fontSize": "10px",
        	fontFamily: "Arial",
            "fontWeight": "normal",
            //"width": 95,
        },
        "symbolRadius": 0,
        "labelFormatter": function () {
            return this.name.replace('/ ', '/<br/>');
        }
    }
	};
}());