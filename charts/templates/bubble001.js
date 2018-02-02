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
                    "color": "#000000",
                    "fontSize": null
                },
                "text": null
            },
            "labels": {
                "style": {
                    "color": "#000000"
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
    	    bubble: {
    	        label: {
    	            enabled: true
    	        },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}<br/>{point.x}%', 
                    align: 'center', 
                    //verticalAlign: 'middle',
                    y:-20,
                    x: 30,
                    overflow: "none",
                    crop: false,
                    style: {
                        fontSize: "11px", 
                        color: 'black', 
                        //textOutline: undefined
                    }
                }
    	    }
    	}
    };
}());
