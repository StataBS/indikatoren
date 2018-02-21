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
            "spacingBottom": 45,
            "style": {
                "fontFamily": "Arial"
            },
            "zoomType": "xy",
            "type": "bubble"
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
        "yAxis": {
            gridLineColor: '#B9CFD7', 
            gridLineWidth: 0.5, 
            lineColor: '#B9CFD7',
            "title": {
                "style": {
                    "color": "black",
                    "fontSize": "11px"
                },
                "text": null
            },
            "labels": {
                "style": {
                    "color": "black",
                    "fontSize": "11px"
                }
            }, 
            "min": 0
        },
        "xAxis": {
            lineColor: '#B9CFD7',
            lineWidth: 0.5,
            "title": {
                "style": {
                    "color": "black",
                    "fontSize": "11px"
                }
            },
            "labels": {
                "style": {
                    "color": "black",
                    "fontSize": "11px"
                }
            },
            "tickLength": 0,
        },
        "credits": {
            "enabled": true,
            "style": {
                "color": "black",
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
        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><span style="color:{point.color}">\u25CF</span> {point.name}</th></tr>' +
                '<tr><th>X:</th><td>{point.x}</td></tr>' +
                '<tr><th>Y:</th><td>{point.y}</td></tr>' +
                '<tr><th>Size:</th><td>{point.z}</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },    	
    	plotOptions: {
    	    series: {
    	        marker: {
    	            fillOpacity: 1
    	        }
    	    },
    	    bubble: {
    	        label: {
    	            enabled: true
    	        },
                dataLabels: {
                    style: {
                        fontSize: 10,
                        color: 'black',
                        fontWeight: 'normal',
                        textShadow: 'none',
                    },
                    //format: '{point.name}', 
                    formatter: function(){
                        return this.key.replace(" ", "<br/>");// + ': ' + this.point.z + '%';
                    },
                    inside: false,
                    //align:'left',
                    //verticalAlign: 'top',
                    //verticalAlign: 'middle',
                    //verticalAlign: 'top',
                    y: -10,
                    padding: 0,
                    overflow: false,
                    crop: false,
                    enabled: true
                }
    	    }
    	}
    };
}());
