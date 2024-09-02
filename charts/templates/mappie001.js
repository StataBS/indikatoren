/*
		global $
		global geojson_wohnviertelEPSG2056
	global rheinDataEPSG2056    
		global scalebarDataEPSG2056
		global Highcharts
*/

// use this tenplate for bubbles on maps

(function () {
	return {
		"chart": {
			"borderColor": "#fbfbfb",
			"backgroundColor": "#fbfbfb",
			"width": 485,
			"height": 415,
			"spacingBottom": 45,
			"style": {
				"fontFamily": "Arial",
			},
			"type": "map",
			"inverted": false
		},
		plotOptions: {
			series: {
				states: {
					inactive: {
						opacity: 1
					}
				}
			}
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
				"style": { "color": "black", "cursor": "default", "fontSize": "11px", "textOverflow": "none" }
			},
			"marker": {
				"color": "black"
			}
		},
		"mapNavigation": {
			enabled: true,
			enableButtons: true,
			enableDoubleClickZoom: false,
			"buttonOptions": {
				"align": "left",
				"verticalAlign": 'bottom'
			},
			/*
			buttons: {
				zoomIn: {
					onclick: function () { this.mapZoom(0.75); }
				},
				zoomOut: {
					onclick: function () { this.mapZoom(1.5); }
				}
			}
			*/

		},
		"legend": {
			"enabled": true,
			"align": "right",
			"floating": true,
			itemStyle: {
				fontSize: "12px", fontFamily: "Arial", fontWeight: 'normal', fontStyle: "normal", color: "#000000"
			},
			"title": {
				"style": {
					"fontWeight": "normal",
					"fontSize": "12px"
				}
			}
		},
		xAxis: {
			events: {
				//hide svg elements on zoom
				afterSetExtremes: function (e) {
					var divId = e['target']['chart']['renderTo']['id'] || 'dummySettingForExportServer';
					var divIdString = '#' + divId;
					divIdString = '';
					//only care about zoom events, not pan
					if (e.trigger != 'pan') {
						//determine current zoom level
						var zoom = (e.dataMax - e.dataMin) / (e.max - e.min);
						$(divIdString + ' .pieLegendHideOnZoom').attr('visibility', zoom == 1 ? 'inherit' : 'hidden');
					}
				}
			}
		},

		/* series with fixed data that should be added to the series object before merging with csv data */
		beforeSeries: [
			{
				//Outline Wohnviertel if all choropleth shapes have been deselected through classed colorAxis, see https://forum.highcharts.com/highmaps-usage-f14/outline-shapes-hidden-by-click-onto-classed-coloraxis-t40837/
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
					[1, -999],
					[2, -999],
					[3, -999],
					[4, -999],
					[5, -999],
					[6, -999],
					[7, -999],
					[8, -999],
					[9, -999],
					[10, -999],
					[11, -999],
					[12, -999],
					[13, -999],
					[14, -999],
					[15, -999],
					[16, -999],
					[17, -999],
					[18, -999],
					[19, -999],
					[20, -999],
					[30, -999]
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
				"borderColor": "#fbfbfb",
				tooltip: {
					pointFormatter: function () {
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
					pointFormatter: function () {
						return '<br/>';
					}
				},
				dataLabels: {
					enabled: true,
					formatter: function () {
						return '1 km';
					},
					style: { fontSize: "12px", fontFamily: "Arial", fontWeight: 'normal', fontStyle: "normal", color: "#000000" },
					y: -10
				}
			}
		],
		//make sure charts are exported as displayed
		exporting: {
			menuItemDefinitions: {
				downloadPNG: {
					onclick: function () {
						this.options.customFunctions.exportCurrentSVG(this, 'image/png');
					},
				},
				downloadJPEG: {
					onclick: function () {
						this.options.customFunctions.exportCurrentSVG(this, 'image/jpeg');
					},
				},
				downloadPDF: {
					onclick: function () {
						this.options.customFunctions.exportCurrentSVG(this, "application/pdf");
					},
				},
				downloadSVG: {
					onclick: function () {
						this.options.customFunctions.exportCurrentSVG(this, 'image/svg+xml');
					},
				},
			}
		},

		customFunctions: {

			hideOnZoom: function (e, selector) {
				var divId = e['target']['chart']['renderTo']['id'] || 'dummySettingForExportServer';
				var divIdString = '#' + divId;
				divIdString = '';
				//only care about zoom events, not pan
				if (e.trigger != 'pan') {
					//determine current zoom level
					var zoom = (e.dataMax - e.dataMin) / (e.max - e.min);
					$(divIdString + selector).attr('visibility', zoom == 1 ? 'inherit' : 'hidden');
				}
			},

			/*
			legendLabelZoomFormatter: function(value){
							return Highcharts.numberFormat((value),1,","," ");
						},
						*/


			recalculateOnZoom: function (e, zoomableLabels) {
				if (e.target.chart) {
					var fn = e.target.chart.userOptions.customFunctions;
					fn.hideOnZoom(e, '.pieLegendHideOnZoom');

					//wait for zoom animation to be finished before attempting calculation of zoom
					if (Array.isArray(zoomableLabels)) {
						setTimeout(function (context) {
							zoomableLabels.forEach(function (v, i, a) {
								//catch exception that occurs only in Highcharts Export Server for 6379. todo: fix in 6379
								try {
									var yAxis = e.target.chart.yAxis[0];
									var zoom = (yAxis.dataMax - yAxis.dataMin) / (yAxis.max - yAxis.min);
									if (!v.initialText) { v.initialText = v.text; }
									var legendValue = (zoom == 1 ? v.initialText : v.legendLabelZoomFormatter(v.initialValue / zoom / zoom));
									v.label.destroy();
									v.text = legendValue;
									v.label = fn.addLegendLabel(e.target.chart, v.text, v.x, v.y, v.cssClass, v.useHtml, v.align);
									//handle right-align
									if (v.align == 'right') {
										v.label.attr({ x: v.x - v.label.width });
									}
								}
								catch (e) { console.log(e) }
							});
						}, 750); //default jQuery animmation is 500 ms, see https://api.highcharts.com/highmaps/chart.animation 
					}
				}
			},


			/*
			recalculateOnZoom: function(e, selector){
				var divId = e['target']['chart']['renderTo']['id'] || 'dummySettingForExportServer';
				var divIdString = '#' + divId;
				divIdString = '';
				//var fn = e.target.chart.userOptions.customFunctions;
				var fn = this;
				try{
					//only care about zoom events, not pan: 
					if (e.trigger != 'pan'){
						
						
						//wait for zoom animation to be finished before attempting calculation of zoom
						setTimeout(function(){
							//determine current zoom level
							if (e.target.chart){
								var yAxis = e.target.chart.yAxis[0];
								if(yAxis){
									var zoom = (yAxis.dataMax - yAxis.dataMin) / (yAxis.max - yAxis.min);
									$(divIdString + selector).each(function(){
										var initialValue = $(this).attr('initialValue');
										var initialText = $(this).attr('initialText');
										var legendValue = initialValue / zoom / zoom;
										$(this).contents()[0].innerHTML = (zoom ==1)  ? initialText : fn.legendLabelZoomFormatter(legendValue);
									});
								}
							}
						}, 750); //default jQuery animmation is 500 ms, see https://api.highcharts.com/highmaps/chart.animation 
						
					}
				}
				catch(error){
					console.log(error);
				}
			},			
			*/
			//calculate pie size using categories defined in the conf object
			pieSizeCategorical: function (value, conf) {
				for (var i = 0; i < conf.length; i++) {
					if (value >= conf[i].from && value < conf[i].to) {
						return conf[i];
					}
				}
			},

			//get pie Value by pie Diameter
			pieValue: function (size, maxAbsValue, maxPieDiameter) {
				var value = maxAbsValue * size * size / maxPieDiameter / maxPieDiameter;
				return value;
			},


			pieSize: function (value, maxAbsValue, maxPieDiameter) {
				var diameter = Math.sqrt(Math.abs(value) / maxAbsValue * maxPieDiameter * maxPieDiameter);
				return diameter;
				/*
				function circleAreaByDiameter(diameter){
					return Math.PI * diameter * diameter / 4;
				}
				
				function circleDiameterByAre(area){	                		
					return Math.sqrt(4 * area / Math.PI);
				}
				
	//Negative values: return absolute value
	//size by Area: use sqrt of value to define size
	//var size = pieSizeMin + chart.chartWidth / 11 * pieSizeFactor *  Math.sqrt(Math.abs(value)) / maxAbsNumber; 
	
	//transform value to a number between 0 and 1 representing its relation to the min and max values
	//var relativeValue = (Math.abs(value) - minAbsValue) / (maxAbsValue - minAbsValue);
	
	//transform value to a number between 0 and 1, where value 0 is represented by 0 and maxAbsValue by 1
	var relativeValue = Math.abs(value) / maxAbsValue ;
	
	//infer the pie size 
	var maxPieArea = circleAreaByDiameter(maxPieDiameter);
	var area = relativeValue * maxPieArea;
	
	//var minPieArea = circleAreaByDiameter(minPieDiameter);
	//var area = relativeValue * (maxPieArea - minPieArea) + minPieArea;
	
	var diameter = circleDiameterByAre(area);
	return diameter;
	*/
			},


			defineTemplate: function () {

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

			},

			// Compute max and min value to find relative sizes of bubbles. 
			getPointsExtremes: function (points) {
				var maxNumber = Number.NEGATIVE_INFINITY;
				var maxAbsNumber = Number.NEGATIVE_INFINITY;
				var minNumber = Number.POSITIVE_INFINITY;
				var minAbsNumber = Number.POSITIVE_INFINITY;
				points.forEach(function (point) {
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
			drawPies: function (chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color) {
				var fn = chart.userOptions.customFunctions;
				fn["pieSizeSeries"] = pieSizeSeries;
				fn["maxPieDiameter"] = fn["maxPieDiameter"] ? fn["maxPieDiameter"] : 20;

				//iterate over each wohnviertel and draw the pies / bubbles
				pieSizeSeries.points.forEach(function (data) {

					if (!data.value) {
						return; // Skip points with no data, if any
					}

					var correspondingMapSeriesItem = choroplethSeries.points[data.index];

					//define where to place the pies on the map
					var pieOffset = correspondingMapSeriesItem.pieOffset || {},
						centerLat = parseFloat(correspondingMapSeriesItem.properties.lat),
						centerLon = parseFloat(correspondingMapSeriesItem.properties.lon);

					//create the highcharts pie chart config
					var currentPieSeries = function (config) {
						//define default properties
						var mapPieConfig = {
							type: 'mappie',
							name: data.series.name,
							wohnviertel_Name: data["hc-key"],
							wohnviertel_Id: correspondingMapSeriesItem.wohnviertel_Id,
							zIndex: 6, // Keep pies above connector lines
							borderWidth: 1,
							tooltip: {
								headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {series.name} </span><br/>',
								pointFormatter: function () {
									return correspondingMapSeriesItem.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.v), 3) + '</b><br/>';
								}
							},
							center: {
								lat: centerLat + (pieOffset.lat || 0),
								lon: centerLon + (pieOffset.lon || 0)
							},

							//defaults that are normally overwritten
							sizeFormatter: function () {
								var fn = this.chart.userOptions.customFunctions;
								//pie diameters in px
								var maxPieDiameter = fn.maxPieDiameter || 20;
								//pie Size proportional to absolute value, no categories used
								return fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter);
							},
							data: [
								//Bubbles: Only one element in the array
								{
									name: pieSizeSeries.name,
									//put absolute value in y, real value in v
									y: Math.abs(data.value),
									v: data.value,
									color: color(data.value),
									borderColor: color(data.value)
								}
							],
							dataLabels: { //show dataLabels if set in chart-JS, e.g. for Wohnviertel-Nummerierung (BL, 10.02.2021)
								enabled: (Highcharts.charts[0] !== undefined ? Highcharts.charts[0].userOptions.plotOptions.pie.dataLabels.enabled : false), //gets setting from chart-js
								color: (Highcharts.charts[0] !== undefined ? Highcharts.charts[0].userOptions.plotOptions.pie.dataLabels.color : '#000000'), //gets setting from chart-js
								distance: 0,
								padding: 2,
								x: -10,
								borderWidth: 0,
								style: {
									textOutline: '0px',
									fontWeight: 'normal'
								},
								formatter: function () {
									return correspondingMapSeriesItem['Wohnviertel Id'];
									//return correspondingMapSeriesItem.properties.LIBGEO;
								}
							},
							colorAxis: false
						};
						//create the config handed in from the chart
						var pieTemplate = config(data, correspondingMapSeriesItem, color);
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
			addLegendTitle: function (chart, text, x, y, cssClass, useHtml) {
				return chart.renderer.label(text, x, y, undefined, undefined, undefined, useHtml)
					.attr({
						zIndex: 6,
						class: cssClass + ' pieLegendTitle'
					})
					.css({
						fontSize: '12px',
						fontWeight: 'bold'
					})
					.add();
			},


			addSubtitle: function (chart, text, x, y, cssClass, useHtml) {
				return chart.renderer.label(text, x, y, undefined, undefined, undefined, useHtml).attr({
					zIndex: 6,
					class: cssClass + ' pieSubtitle'
				}).add();
			},

			addLegendCircle: function (chart, x, y, radius, fill, cssClass) {
				return chart.renderer.circle(x, y, radius, fill)
					.attr({
						fill: fill,
						stroke: fill,
						'stroke-width': 1,
						zIndex: 6,
						class: cssClass + ' pieLegend'
					}).add();
			},


			addLegendLabel: function (chart, text, x, y, cssClass, useHtml, align) {
				var label =
					chart.renderer.label(text, x, y, undefined, undefined, undefined, useHtml)
						.css({
							fontSize: "12px", fontFamily: "Arial", fontWeight: 'normal', fontStyle: "normal"
						})
						.attr({
							zIndex: 6,
							class: cssClass + ' pieLegend',
						}).add();
				//handle right-align
				if (align == 'right') {
					label.attr({ x: x - label.width });
				}
				return label;
			},

			addLegendLabelbold: function (chart, text, x, y, cssClass, useHtml, initialValue) {
				return chart.renderer.label(text, x, y, undefined, undefined, undefined, useHtml)
					.attr({
						zIndex: 6,
						class: cssClass + ' pieLegend',
						initialValue: initialValue,
						initialText: text
					})
					.css({
						fontWeight: 'bold'
					}).
					add();
			},

			addLegendSquare: function (chart, x, y, width, fill, cssClass) {
				return chart.renderer.rect(x, y, width, width, 0).attr({
					'stroke-width': 0,
					fill: fill,
					zIndex: 6,
					class: cssClass + ' pieLegend'
				}).add();
			},


			addLegendRectangle: function (chart, x, y, width, height, fill, cssClass) {
				return chart.renderer.rect(x, y, width, height).attr({
					'stroke-width': 0,
					fill: fill,
					zIndex: 6,
					class: cssClass
				}).add();
			},



			//Add click handler to bubbleLegend items
			AddPieLegendClickHandler: function (chart, colorPassive) {
				var divId = chart['renderTo']['id'] || 'dummySettingForExportServer';
				var divIdString = '#' + divId;
				$(divIdString + ' .pieLegend').click(function () {
					//Toggle visible of mappies
					chart.series.forEach(function (series) {
						if (series.userOptions.type == 'mappie') {
							series.setVisible(!series.visible, false);
						}
					});
					chart.redraw();


					//if useHTMl is true, text is in span elements within DIVs classed .pieLegend. Add the class to these spans
					$(divIdString + ' .pieLegend>span').addClass('pieLegend').addClass('pieLegendHtmlText');
					//toggle active state of legend elements
					var pieLegendItems = $(divIdString + ' .pieLegend');
					//backup original color
					pieLegendItems.each(function (i, v) {
						if (!$(this).attr('fill_active')) {
							//if no fill color is defined, set to  black
							$(this).attr('fill_active', $(this).attr('fill') || 'black');
							$(this).attr('fill', $(this).attr('fill') || 'black');
						}
						if (!$(this).attr('stroke_active')) {
							$(this).attr('stroke_active', $(this).attr('stroke') || null);
							$(this).attr('stroke', $(this).attr('stroke') || null);
						}
					});
					//toggle color

					var whiteTransp = 'rgba(255,255,255, 0)';
					var grey = '#cccccc';
					//if no passiveColor is given, default to white transparent
					var passiveColor = colorPassive || whiteTransp;

					if (pieLegendItems.attr('fill') == pieLegendItems.attr('fill_active')) {
						//set all to grey or the predefined color

						//if fill is present, toggle it
						pieLegendItems.each(function (i, v) {
							//if fill_active is present, set it to transparent white
							if ($(this).attr('fill_active')) {
								$(this).attr('fill', $(this).attr('fill_passive') || passiveColor);
							}
							//if stroke_active is present, set it to transparent white
							if ($(this).attr('stroke_active')) {
								$(this).attr('stroke', $(this).attr('fill_passive') || passiveColor);
							}
						});

						//same for html text spans
						$(divIdString + ' .pieLegendHtmlText').css('color', passiveColor);
					}
					else {
						pieLegendItems.each(function (i, v) {
							//set each to its fill_active color
							$(this).attr('fill', $(this).attr('fill_active'));
							$(this).attr('stroke', $(this).attr('stroke_active'));
						});
						//same for html text spans
						//$(divIdString + ' .pieLegendHtmlText').css('color', $(this).attr('color_active') || 'black');
						$(divIdString + ' .pieLegendHtmlText').each(function (i, v) {
							$(this).css('color', $(this).attr('color_active') || 'black');
						});
					}
				});
			},


			//override function getSVG to make sure charts are exported as displayed, see https://forum.highcharts.com/highcharts-usage/how-to-force-export-server-to-render-current-svg-t40838/
			exportCurrentSVG: function (chart, type) {
				var origFn = Highcharts.Chart.prototype.getSVG;
				Highcharts.Chart.prototype.getSVG = function () {
					console.log("Using current SVG to export.");
					var svg = chart.getChartHTML();
					svg = chart.sanitizeSVG(svg);
					return svg;
				};
				chart.exportChart({ type: type || 'image/png' });
				Highcharts.Chart.prototype.getSVG = origFn;
			},
		}
	};

}()
);