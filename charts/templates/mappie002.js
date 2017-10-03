/*
    global $
    global rheinDataEPSG2056
    global scalebarDataEPSG2056
    global Highcharts
*/

//use this template for pies on map

(function(){
    return {
        "chart": {		
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
    	
		/* series with fixed data that should be added to the series object after merging with csv data */
		"afterSeries": [
			{
				"name": "Rhein",
				"animation": true,
				"data": rheinDataEPSG2056, 
				"color": "#008AC3",    
				"borderColor": "#fbfbfb",
				tooltip: {
					pointFormatter: function(){
						return '<br/>';
					}
				}

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
		    
			//calculate pie size using categories defined in the conf object
			pieSizeCategorical: function(value, conf){
				for (var i=0; i < conf.length; i++ ){
					if (value >= conf[i].from && value < conf[i].to) {
						return conf[i];
					}
				}
			},  
			
			
            //Pie size 
            pieSize: function(value, maxAbsValue, maxPieDiameter){
            	
            	function circleAreaByDiameter(diameter){
            		return Math.PI * diameter * diameter / 4;
            	}
            	
            	function circleDiameterByAre(area){	                		
            		return Math.sqrt(4 * area / Math.PI);
            	}
            	
            	/*
                var yAxis = chart.yAxis[0],
                    zoomFactor = (yAxis.dataMax - yAxis.dataMin) / (yAxis.max - yAxis.min);
                */
                
				//Negative values: return absolute value
				//size by Area: use sqrt of value to define size
				//var size = pieSizeMin + chart.chartWidth / 11 * pieSizeFactor *  Math.sqrt(Math.abs(value)) / maxAbsNumber; 
				
				//transform value to a number between 0 and 1 representing its relation to the min and max values
				//var relativeValue = (Math.abs(value) - minAbsValue) / (maxAbsValue - minAbsValue);
				
				//transform value to a number between 0 and 1, where value 0 is represented by 0 and maxAbsValue by 1
				var relativeValue = Math.abs(value) / maxAbsValue ;
				//console.log('absVal rel: '+ Math.abs(value) + ' ' + relativeValue);
				//infer the pie size 
				var maxPieArea = circleAreaByDiameter(maxPieDiameter);
				var area = relativeValue * maxPieArea;
				
				//var minPieArea = circleAreaByDiameter(minPieDiameter);
				//var area = relativeValue * (maxPieArea - minPieArea) + minPieArea;
				
				var diameter = circleDiameterByAre(area);
				//console.log('value absValue area diameter: ' + value + ' ' + Math.abs(value) + ' ' + area + ' ' + diameter);
				return diameter;
            }, 
	                			
		    
		    defineTemplate: function(){

					//define new chart type
					// source: https://www.highcharts.com/blog/data-journalism/effectively-visualizing-us-election-results/, 
					//  which displays  http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/maps/demo/map-pies/
					
					    
					// New map-pie series type that also allows lat/lon as center option.
					// Also adds a sizeFormatter option to the series, to allow dynamic sizing
					// of the pies.
					Highcharts.seriesType('mappie', 'pie', {
					    center: null, // Can't be array by default anymore
					    clip: true, // For map navigation
					    dataLabels: {
					        enabled: false
					    }
					    
					}, {
					    getCenter: function () {
					        var options = this.options,
					            chart = this.chart,
					            slicingRoom = 2 * (options.slicedOffset || 0);
					        if (!options.center) {
					            options.center = [null, null]; // Do the default here instead
					        }
					        // Handle lat/lon support
					        if (options.center.lat !== undefined) {
					            var point = chart.fromLatLonToPoint(options.center);
					            options.center = [
					                chart.xAxis[0].toPixels(point.x, true),
					                chart.yAxis[0].toPixels(point.y, true)
					            ];
					        }
					        // Handle dynamic size
					        if (options.sizeFormatter) {
					            options.size = options.sizeFormatter.call(this);
					        }
					        // Call parent function
					        var result = Highcharts.seriesTypes.pie.prototype.getCenter.call(this);
					        // Must correct for slicing room to get exact pixel pos
					        result[0] -= slicingRoom;
					        result[1] -= slicingRoom;
					        return result;
					    },
					    translate: function (p) {
					        this.options.center = this.userOptions.center;
					        this.center = this.getCenter();
					        return Highcharts.seriesTypes.pie.prototype.translate.call(this, p);
					    }
					});

    		    },
    		    
				// Compute max and min value to find relative sizes of bubbles. 
				getPointsExtremes: function(points){
	                var maxNumber = Number.NEGATIVE_INFINITY;
	                var maxAbsNumber = Number.NEGATIVE_INFINITY;
	                var minNumber = Number.POSITIVE_INFINITY;
	                var minAbsNumber = Number.POSITIVE_INFINITY;
					Highcharts.each(points, function (point) {
					    maxNumber = Math.max(maxNumber, point.value);
					    maxAbsNumber = Math.max(maxAbsNumber, Math.abs(point.value));
					    minNumber = Math.min(minNumber, point.value);
					    minAbsNumber = Math.min(minAbsNumber, Math.abs(point.value));
					});
					return {
					    maxNumber: maxNumber,
					    maxAbsNumber: maxAbsNumber,
					    minNumber: minNumber,
					    minAbsNumber: minAbsNumber
					};
				},
				    		    
				    		    
	            //draw pies onto he map			    		    
                drawPies: function(chart, pieSizeSeries, pieSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig){
                    
                    //iterate over each wohnviertel and draw the pies / bubbles
	                Highcharts.each(pieSizeSeries.points, function (data, i) {
	                    
	                    if (!data.value) {
	                        return; // Skip points with no data, if any
	                    }
	                    
	                	var correspondingMapSeriesItem = choroplethSeries.points[data.index];
	                	
	                	//define where to place the pies on the map
	                    var pieOffset = correspondingMapSeriesItem.pieOffset || {},
	                        centerLat = parseFloat(correspondingMapSeriesItem.properties.lat),
	                        centerLon = parseFloat(correspondingMapSeriesItem.properties.lon);
	                	
                        //create the highcharts pie chart config
	                    var currentPieSeries = function(config){
	                        //define default properties
	                        var mapPieConfig = {
    	                        type: 'mappie',
    	                        name: data.series.name,
    	                        wohnviertel_Name: data["hc-key"],
    	                        wohnviertel_Id : correspondingMapSeriesItem.wohnviertel_Id,
    	                        zIndex: 6, // Keep pies above connector lines
    	                        borderWidth: 1,
    	                        tooltip: {
	                        	    headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {series.name} </span><br/>',
		                            pointFormatter: function () {
		                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),3) + '</b><br/>';
		                            }
    	                        },
	                            center: {
    	                            lat: centerLat + (pieOffset.lat || 0),
    	                            lon: centerLon + (pieOffset.lon || 0)
    	                        }, 
    	                        
    	                        //defaults that are normally overwritten
		                        sizeFormatter: function () {
		                            var fn = this.chart.options.customFunctions;
									//pie diameters in px
									var maxPieDiameter = 20;		 
									//pie Size proportional to absolute value, no categories used
		                            return fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter); 
		                        },
		                        dataLabels: {
							        enabled: false
							    }, 
							    data: [
							    	/*
		                        	//Pies: Two series
		                        	{
		                        		name: pieSeries[0].name,
		                        		//put absolute value in y, real value in v
		                        		y: Math.abs(pieSeries[0].points[i].y),
		                        		v: pieSeries[0].points[i].y,
		                        		color: pieSeries[0].userOptions.color,
		                        		borderColor: pieSeries[0].userOptions.borderColor
		                        	},
		                        	{
		                        		name: pieSeries[1].name,
		                        		//put absolute value in y, real value in v
		                        		y: Math.abs(pieSeries[1].points[i].y),
		                        		v: pieSeries[1].points[i].y,
		                        		color: pieSeries[1].userOptions.color,
		                        		borderColor: pieSeries[1].userOptions.borderColor
		                        	}
		                        	*/
						    	]
	                        };
	                        
	                        //add data object to mapPieConfig: for bubbles only one, for pies several
	                        pieSeries.forEach(function(item, index, arr){
	                        	mapPieConfig.data.push(
	                        		{
		                        		name: item.name,
		                        		//put absolute value in y, real value in v
		                        		y: Math.abs(item.points[i].y),
		                        		v: item.points[i].y,
		                        		color: item.userOptions.color,
		                        		borderColor: item.userOptions.borderColor
		                        	}
                        		);
	                        });

	                        //create the config handed in from the chart
	                        var pieTemplate = config(data, correspondingMapSeriesItem);
	                        //merge the two configs (2nd into first, see e.g. https://gist.github.com/TorsteinHonsi/f646f39d51d18b7d6bfb)
	                        return Highcharts.merge(true, mapPieConfig, pieTemplate);
	                    };
	                    
	                    // Add the pie for this wohnviertel to the chart
	                    chart.addSeries(currentPieSeries(pieSeriesConfig), false);
	                    
	                    /*
	                    // Draw connector to wohnviertel center if the pie has been offset
	                    if (pieOffset.drawConnector !== false) {
	                        var centerPoint = chart.fromLatLonToPoint({
	                                lat: centerLat,
	                                lon: centerLon
	                            }),
	                            offsetPoint = chart.fromLatLonToPoint({
	                                lat: centerLat + (pieOffset.lat || 0),
	                                lon: centerLon + (pieOffset.lon || 0)
	                            });
	                        pieSizeSeries.addPoint({
	                            name: wohnviertel.id,
	                            path: 'M' + offsetPoint.x + ' ' + offsetPoint.y +
	                                'L' + centerPoint.x + ' ' + centerPoint.y
	                        }, false);
	                    }
	                    */
	                    
	                });
	                // Only redraw once all pies and connectors have been added
	                chart.redraw();
				},    		    
    		    
                //helper functions for pie legend
    	        addLegendTitle: function(chart, title, x, y){
            		return chart.renderer.label(title, x, y)
         				.css({
    	                    fontSize: '12px',
    	                    fontWeight: 'bold'
    	                })
    	                .attr({
    			        	zIndex: 6,
    			        	//class: 'pieLegend'
    			        }).add();	                
                },
    	                
                addLegendCircle: function(chart, x, y, radius, fill){
                	return chart.renderer.circle(x, y, radius, fill).attr({
    				    fill: fill,
    				    stroke: fill,
    				    'stroke-width': 1, 
    				    zIndex: 6,
    				    class: 'pieLegend'
    				}).add();
                },
    	                
    	                
                addLegendLabel: function(chart, text, x, y, useHtml){
    				return chart.renderer.label(text, x, y, undefined, undefined, undefined, useHtml).attr({
    					zIndex: 6,
    					class: 'pieLegend'
    				}).add();
                },
                
                addLegendSquare: function(chart, x, y, width, fill){
                	return chart.renderer.rect(x, y, width, width, 0).attr({
    		            'stroke-width':0,
    		            fill: fill,
    		            zIndex: 6,
    		            class: 'pieLegend'
    	        	}).add();
                },
                
                

				//Add click handler to bubbleLegend items
				AddPieLegendClickHandler: function(chart){
					var divId = chart['renderTo']['id'] || 'dummySettingForExportServer';
					var divIdString = '#' + divId;
				    $(divIdString + ' .pieLegend').click(function(){
						//Toggle visible of mappies
						Highcharts.each(chart.series, function (series) {
							if (series.userOptions.type == 'mappie'){
								series.setVisible(!series.visible, false);
							}
						});
						chart.redraw();
						
						
						//if useHTMl is true, text is in span elements within DIVs classed .pieLegend. Add the class to these spans
						$(divIdString + ' .pieLegend>span').addClass('pieLegend').addClass('pieLegendHtmlText');
						//toggle active state of legend elements
						var pieLegendItems = $('.pieLegend');
						//backup original color
						pieLegendItems.each(function(i, v){
							if (!$(this).attr('fill_active')) {
								//if no fill color is defined, set to  black
								$(this).attr('fill_active', $(this).attr('fill') || 'black');	
							}
							if (!$(this).attr('stroke_active')) {
								$(this).attr('stroke_active', $(this).attr('stroke') || null);	
							}
						});
						//toggle color
						if (pieLegendItems.attr('fill') == pieLegendItems.attr('fill_active')){
							//set all to grey
							pieLegendItems.attr('fill', '#cccccc');
							//if stroke is present, toggle it
							pieLegendItems.each(function(i, v){
								//if stroke_active is present, set it to grey
								if ($(this).attr('stroke_active')) {
									$(this).attr('stroke', '#cccccc');
								}
							});
							//same for html text spans
							$(divIdString + ' .pieLegendHtmlText').css('color', '#cccccc');
						} 
						else {
							pieLegendItems.each(function(i, v){
								//set each to its fill_active color
								$(this).attr('fill', $(this).attr('fill_active'));	
								$(this).attr('stroke', $(this).attr('stroke_active'));	
							});
							//same for html text spans
							$(divIdString + ' .pieLegendHtmlText').css('color', 'black');
						}
					});
				}          	
		}
    };
    }()
);
