//Wohnviertel Choropleth Map with Ranks read from data file displayed in tooltip

/* 
    global Highcharts
    global rheinDataEPSG2056
    global scalebarDataEPSG2056
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
    		"enabled": true, 
            "align": "right",
            "floating": true,
            "title": {
                "style": {
                    "fontWeight": "normal", 
                    "fontSize": "11px"
                }
            }
    	},
        "tooltip": {
            "formatter": function(args){
        		if (! this.point["Wohnviertel Id"]) {
        		    //Rhein
        			return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
        		}
                else {
                    //Wohnviertel
                    var this_point_index = this.series.data.indexOf(this.point);
                    var other_series_index = this.series.index == 0 ? 1 : 0; // assuming 2 series
                    var other_series = args.chart.series[other_series_index];
                    var other_point = other_series.data[this_point_index];
                    return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' + 
                        this.point.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.point.value*100),1) + '%</b><br/>' + 
                        'Rang <b>' + other_point.value + '</b>';
                }
            }
        },
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
