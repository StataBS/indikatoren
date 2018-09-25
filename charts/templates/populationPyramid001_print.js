/*
    global Highcharts
*/

(function(){
    return {
        chart: {
        	marginRight: 11,
            type: 'bar', 
            borderColor: "#fbfbfb", 
            backgroundColor: "#fbfbfb",
            width: 320,
            height: 208,        
    		spacing: [2,2,2,2], /*top, right, bottom and left */
            style: {
                fontFamily: "Arial"
            },
            zoomType: "xy",
            events: {
                load: function(){
                    this.credits.element.onclick = function() {};
                    
                    //create symmetric xAxes
                    var fn = this.options.customFunctions;
                    fn.createSymmetricAxis(this.yAxis[0]);
                    
                    //for top-left legends with no x defined: move legend to x position of first yAxis
                    if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top'){ // && this['legend']['options']['x'] == 0){
                      this.update(
                        {
                          legend: {
                            x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
                          }
                        }
                      );
                    }
                },
            }
        },    
        plotOptions: {
        	bar: {
        		grouping: false
        	},
            series: {
            	stacking: null,
	            pointPadding: 0,
	            borderWidth: 0,
	            groupPadding: 0,            	
                dataLabels: {
                    style: {
                        fontSize: "10px"
                    }
                }
            }
        },
        title: {
            style: {
                fontSize: "14px",
                fontWeight: "bold",
                color: "#000000"
            },
            align: "left"
        },
        subtitle: {
            style: {
                fontSize: "12px",
                fontWeight: "normal",
                fontFamily: "Arial",
                color: "#000000"
            },
            text: "",
            align: "left"
        },        
        xAxis: {
            lineColor: '#B9CFD7',
            lineWidth: 0.5,
            labels: {
                style: {
                	color: "#000000",
                    textOverflow: 'none', 
                    fontSize: '10px'
                }
            }
        },
        yAxis: {
            gridLineColor: '#B9CFD7',
            gridLineWidth: 0.5,
            title: {
                style: {
                    color: "#000000",
                    fontSize: null
                },
                text: null
            },
            labels: {
                style: {
                	color: "#000000",
                    textOverflow: 'none', 
                    fontSize: '10px'
                }, 
                distance: -50, 
                //Display absolute value
                formatter: function () {
                    return Highcharts.numberFormat(Math.abs(this.value), 0, ",", "\u00a0");
                },
            },
        },   
    	navigation: {
    		menuItemStyle: {
    			fontFamily: Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
    			padding: '2px 10px'
    		}
    	},
        credits: {
            enabled: true,
            style: {
                color: "#000000",
                fontSize: "10px",
                cursor: "default"
            },
            position: {
                align: "left",
                verticalAlign: "bottom",
                x: 10
            }
        },
        legend: {
        	symbolRadius: 0, 
        	padding: 1,
        	itemStyle: {
                fontWeight: "normal", 
                fontSize: '10px'
            }
        },
        tooltip: {
            pointFormatter: function () {
                return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>'+ Highcharts.numberFormat( Math.abs(this.y), 0, ",", " ") + '</b><br/>';
            }
        },
        customFunctions: {
        	createSymmetricAxis: function(axis){
                var absMax = Math.max(Math.abs(axis.min), Math.abs(axis.max));
                axis.setExtremes(-absMax, absMax);
        	}
        }
	};
}());