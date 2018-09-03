//Simple Wohnviertel Choropleth Map without ranks and with simple tooltip

/* 
    global Highcharts
    global rheinDataEPSG2056
    global scalebarDataEPSG2056
    global geojson_wohnviertelEPSG2056
*/

(function(){
    return {
        "chart": {		
            events:{
                load: function() {                
                    this.credits.element.onclick = function() {};
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
            "type": "map",
    		"inverted": false
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
        "colorAxis": {
    		"min": 0,
    		"gridLineColor": "#fbfbfb",	
            "gridLineWidth": 1,
            "labels": {	
    		    "style": {"color": "black", "cursor": "default", "fontSize": "11px", "textOverflow": "none"}
    		},
    		"marker": {
                    "color": "black"
            }
    	},    
        "mapNavigation": {
            "enabled": true,
            "buttonOptions": {
                "align": "left",
                "verticalAlign": 'bottom'
            }
        },
        "legend": {
			useHTML: false,
    		"enabled": true, 
            "align": "right",
            "floating": true,
           itemStyle: {
				fontWeight: 'normal'
			},
            "title": {
                "style": {
                    "fontWeight": "normal", 
                    "fontSize": "12px"
                }
            }
    	},
    	/* series with fixed data that should be added to the series object before merging with csv data */
    	beforeSeries: [
            {      
                //Outline WOhnviertel if all choropleth shapes have been deselected through classed colorAxis, see https://forum.highcharts.com/highmaps-usage-f14/outline-shapes-hidden-by-click-onto-classed-coloraxis-t40837/
				name: "WohnviertelOutline",
              	enableMouseTracking: false,
                color: '#ededed',
                borderWidth: 1,
                borderColor: '#fbfbfb',
				"animation": true,
				"mapData": geojson_wohnviertelEPSG2056,
				"joinBy": ['TXT', 'Wohnviertel Id'],
				"keys": ['Wohnviertel Id', 'value'],
                "states": {
                  "hover": {
                    "enabled": false,
                    "borderColor": "#BADA55",
                    "brightness": 0
                  }
                },
                "data": [
                  [1,-999],
                  [2,-999],
                  [3,-999],
                  [4,-999],
                  [5,-999],
                  [6,-999],
                  [7,-999],
                  [8,-999],
                  [9,-999],
                  [10,-999],
                  [11,-999],
                  [12,-999],
                  [13,-999],
                  [14,-999],
                  [15,-999],
                  [16,-999],
                  [17,-999],
                  [18,-999],
                  [19,-999],
                  [20,-999],
                  [30,-999]
                ],    	            
			}
	    ],
		/* series with fixed data that should be added to the series object after merging with csv data */
		"afterSeries": [
			{
				"name": "Rhein",
				"animation": true,
				"data": rheinDataEPSG2056, 
				"color": "#008AC3",    
				"borderColor": "#fbfbfb"
			},
			{
				name: 'Massstab', 
				animation: true,
				type: 'mapline',
				data: scalebarDataEPSG2056,
				color: 'black', 
				tooltip: {
					pointFormatter: function(){
						return '<br/>';
					}
				}, 
				dataLabels: {
					enabled: true, 
					formatter: function(){
						return '1 km';
					}, 
					style: {fontSize: "12px", fontWeight: "normal", color: 'black'},
					y: -10 
				}
    		}
		],
        "tooltip": {
            formatter: function(args){
        		if (! this.point["Wohnviertel Id"]) {
        		    //Rhein
        			return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
        		}
                else {
                    //Wohnviertel
                    return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' + 
                        this.point.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.point.value),0) + '</b><br/>';
                }
            }
        },
        
        customFunctions: {
            addLegendRectangle: function(chart, x, y, width, height, fill, cssClass){
            	return chart.renderer.rect(x, y, width, height).attr({
    	            'stroke-width':0,
    	            fill: fill,
    	            zIndex: 6,
    	            class: cssClass
            	}).add();
            },
        }

    };
    }()
);
