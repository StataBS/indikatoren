/*  global rheinDataEPSG2056
	global Highcharts
	global geojson_wohnviertelEPSG2056
	global $
*/
(function(){

    return {
    	"legend": {
			"title": {
				"text": ""
			}
			},
		"colorAxis": {
			//"min": undefined,
			"minColor": "#eff6e9",
			"maxColor": "#4b7b1f",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value),1); 
				}
			}
		},
        "data": {
		    "seriesMapping": [
		      {
		      	x: 0, y: 2
		      },
		      {
		      	//2nd series: use y values from column 3
		      	y: 3
		      }
		    ]
        },
		"series": [
			{
				"name": "Wohnviertel", 
				"animation": true,
				"mapData": geojson_wohnviertelEPSG2056,
				"borderColor": "#fbfbfb",		
				"joinBy": ['TXT', 'Wohnviertel_Id'],
				"keys": ['Wohnviertel_Id', 'value'],
				"states": {
					"hover": {
						"enabled": false,
						"borderColor": '#BADA55',
						"brightness": 0
					}
				}, 
				tooltip: {
					pointFormatter: function(){
						//console.log(this);
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),1) + '</b><br/>';
					}
				}
			}, 
			{
				"visible": false
			}
		],
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

			}
		],
		chart: {
			events: {
	            load: function (e) {
	            	
	            	this.credits.element.onclick = function() {};


	                var chart = this;


					    
					//define new chart type
					// source: https://www.highcharts.com/blog/data-journalism/effectively-visualizing-us-election-results/, 
					//  which displays  http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/maps/demo/map-pies/
					
					    
					// New map-pie series type that also allows lat/lon as center option.
					// Also adds a sizeFormatter option to the series, to allow dynamic sizing
					// of the pies.
					Highcharts.seriesType('mappie', 'pie', {
					    center: null, // Can't be array by default anymore
					    clip: true, // For map navigation
					    states: {
					        hover: {
					            halo: {
					                size: 5
					            }
					        }
					    },
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
					
					

	                // Compute max and min value to find relative sizes of bubbles. 
	                var maxNumber = Number.NEGATIVE_INFINITY;
	                var maxAbsNumber = Number.NEGATIVE_INFINITY;
	                var minNumber = Number.POSITIVE_INFINITY;
	                var minAbsNumber = Number.POSITIVE_INFINITY;
					Highcharts.each(chart.series[1].points, function (wohnviertel) {
					    maxNumber = Math.max(maxNumber, wohnviertel.value);
					    maxAbsNumber = Math.max(maxAbsNumber, Math.abs(wohnviertel.value));
					    minNumber = Math.min(minNumber, wohnviertel.value);
					    minAbsNumber = Math.min(minAbsNumber, Math.abs(wohnviertel.value));
					});

	                
	                //Pie size 
	                var pieSize = function(value, minAbsNumber, maxAbsNumber, chart){
		                var yAxis = chart.yAxis[0],
		                    zoomFactor = (yAxis.dataMax - yAxis.dataMin) / (yAxis.max - yAxis.min);
		                //Increase or decrease default pie size
		            	var pieSizeFactor = 0.3;
		            	//Minimal pie size: a summand added to the calculated size
		            	var pieSizeMin = 5;
						//Negative values: return absolute value
						var size = pieSizeMin + Math.abs(chart.chartWidth / 11 * pieSizeFactor * zoomFactor * value / maxAbsNumber); 
						return size;
	                }
	                
	                /*
	                // When clicking legend items, also toggle connectors and pies
	                Highcharts.each(chart.legend.allItems, function (item) {
	                    var old = item.setVisible;
	                    item.setVisible = function () {
	                        var legendItem = this;
	                        old.call(legendItem);
	                        Highcharts.each(chart.series[0].points, function (point) {
	                            if (chart.colorAxis[0].dataClasses[point.dataClass].name === legendItem.name) {
	                                // Find this Wohnviertel's pie and set visibility
	                                Highcharts.find(chart.series, function (item) {
	                                    return item.name === point.id;
	                                }).setVisible(legendItem.visible, false);
	                                // Do the same for the connector point if it exists
	                                var connector = Highcharts.find(chart.series[1].points, function (item) {
	                                    return item.name === point.id;
	                                });
	                                if (connector) {
	                                    connector.setVisible(legendItem.visible, false);
	                                }
	                            }
	                        });
	                        chart.redraw();
	                    };
	                });
	                */
	                
	                // Add the pies after chart load, optionally with offset and connectors
	                // series[0] contains the choropleth map data, series[1] the pie chart data
	                Highcharts.each(chart.series[1].points, function (data) {
	                    if (!data.value) {
	                        return; // Skip points with no data, if any
	                    }

	                	var wohnviertelSeries = chart.series[0].points[data.index];
	                	
	                    var pieOffset = wohnviertelSeries.pieOffset || {},
	                        centerLat = parseFloat(wohnviertelSeries.properties.lat),
	                        centerLon = parseFloat(wohnviertelSeries.properties.lon);
	                	
						
						//define different colors for positive and negative values
                        var color = function(){
                        	return (data.value >= 0) ? 'grey' : 'salmon';
                        };

	                    var currentPieSeries = 
	                    {
	                        type: 'mappie',
	                        //name: data.id,
	                        name: data.series.name,
	                        wohnviertel_Name: data["hc-key"],
	                        wohnviertel_Id : wohnviertelSeries.wohnviertel_Id,
	                        zIndex: 6, // Keep pies above connector lines
	                        borderWidth: 1,
	                        borderColor: color(),
	                        sizeFormatter: function () {
								return pieSize(data.value, minAbsNumber, maxAbsNumber, chart);
	                        },
	                        tooltip: {
	                        	headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {series.name} </span><br/>',
	                            pointFormatter: function () {
	                            	return wohnviertelSeries.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),1) + '</b><br/>';
	                            }
	                        },
	                        data: [
	                        	{
	                        		name: chart.series[1].name,
	                        		//put absolute value in y, real value in v
	                        		y: Math.abs(data.value),
	                        		v: data.value,
	                        		color: color()
	                        	}
	                        ],
	                        /*
	                        data: [{
	                            name: 'FDP',
	                            y: 1, //wohnviertel.demVotes,
	                            color: 'red'
	                        }, {
	                            name: 'SP',
	                            y: 2, //wohnviertel.repVotes,
	                            color: 'blue'
	                        }, {
	                            name: 'CVP',
	                            y: 3, //wohnviertel.libVotes,
	                            color: 'green'
	                        }, {
	                            name: 'Grüne',
	                            y: 4, //wohnviertel.grnVotes,
	                            color: 'yellow'
	                        }],
	                		*/
	                        center: {
	                            lat: centerLat + (pieOffset.lat || 0),
	                            lon: centerLon + (pieOffset.lon || 0)
	                        }, 
	                        dataLabels: {
						        enabled: false
						    }
	                    }
	                    ;
	                    
	                    
	                    // Add the pie for this wohnviertel
	                    chart.addSeries(currentPieSeries, false);
	                    
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
	                        chart.series[1].addPoint({
	                            name: wohnviertel.id,
	                            path: 'M' + offsetPoint.x + ' ' + offsetPoint.y +
	                                'L' + centerPoint.x + ' ' + centerPoint.y
	                        }, false);
	                    }
	                    */
	                    
	                    //console.log(chart.series[chart.series.length-1]);
	                    
	                });
	                // Only redraw once all pies and connectors have been added
	                chart.redraw();
	                
	                
	                //Add manually drawn legend
	                 chart.renderer.label(chart.series[1].name, 285, 240)
     				.css({
	                    fontSize: '12px',
	                    fontWeight: 'bold'
	                })
	                .attr({
			        	zIndex: 6,
			        	//class: 'pieLegend'
			        }).add();
	                var maxBubbleSize = 3;
	                var minBubbleSize = 0.5
	                chart.renderer.circle(410, 275, 0.5*pieSize(minBubbleSize, minAbsNumber, maxAbsNumber, chart)).attr({
					    fill: 'grey',
					    'stroke-width': 0, 
					    zIndex: 6,
					    class: 'pieLegend'
					}).add();
					chart.renderer.label(Highcharts.numberFormat((0.5),1, ",", " "), 430, 265).attr({
						zIndex: 6,
						class: 'pieLegend'
					}).add();
	                chart.renderer.circle(410, 300, 0.5*pieSize(maxBubbleSize, minAbsNumber, maxAbsNumber, chart)).attr({
					    fill: 'grey',
					    stroke: 'grey',
					    'stroke-width': 0,
					    zIndex: 6,
					    class: 'pieLegend'
					}).add();
					chart.renderer.label(maxBubbleSize, 430, 290).attr({
						zIndex: 6,
						class: 'pieLegend'
					}).add();
				    chart.renderer.rect(290, 270, 10, 10, 0).attr({
			            'stroke-width':0,
			            fill: 'grey',
			            zIndex: 6,
			            class: 'pieLegend'
			        }).add();
			        chart.renderer.label('Zunahme', 310, 265).attr({
			        	zIndex: 6,
			        	class: 'pieLegend'
			        }).add();
					chart.renderer.rect(290, 295, 10, 10, 0).attr({
			            'stroke-width':0,
			            fill: 'salmon',
			            zIndex: 6,
			            class: 'pieLegend'
			        }).add();
			        chart.renderer.label('Abnahme', 310, 290).attr({
			        	zIndex: 6,
			        	class: 'pieLegend'
			        }).add();

									//Add click handler to bubbleLegend items
					$('.pieLegend').click(function(){
						//Toggle visible of mappies
						Highcharts.each(chart.series, function (series) {
							if (series.userOptions.type == 'mappie'){
								series.setVisible(!series.visible, false);
							}
						});
						chart.redraw();
						
						//toggle active state of legend elements
						var pieLegendItems = $('.pieLegend');
						//backup original color
						pieLegendItems.each(function(i, v){
							if (!$(this).attr('fill_active')) {
								//if no fill color is defined, set to  black
								$(this).attr('fill_active', $(this).attr('fill') || 'black');	
							}
						});
						//toggle color
						if (pieLegendItems.attr('fill') == pieLegendItems.attr('fill_active')){
							//set all to grey
							pieLegendItems.attr('fill', '#cccccc');
						} 
						else {
							pieLegendItems.each(function(i, v){
								//set each to its fill_active color
								$(this).attr('fill', $(this).attr('fill_active'));	
							});
						}
					});
	            }
			}
		}
	};
}());