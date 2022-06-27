/*
    global $
    global rheinDataEPSG2056
    global scalebarDataEPSG2056
    global Highcharts
*/
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
    		"inverted": false, 
    		animation: true,
    		events:{
				redraw: function() {
					//position column charts on the map
					var fn = this.options.customFunctions;
			    	if (fn.redrawEnabled) {
			        	fn.redrawEnabled = false;
			        	fn.positionColumnSeries(this, fn.columnChartConfiguration.chartWidth, fn.columnChartConfiguration.chartHeight);
			        	fn.redrawEnabled = true;
			        }
			    }, 
    		}
        },
        /*
		tooltip: {
			enabled: true,
			positioner: function(labelWidth, labelHeight, point, obj){
				var conf = this.chart.options.customFunctions.columnChartConfiguration;
				//Hack: For xAxis with left > 0, the point returned here lists only the x distance from the start of the xAxis. 
				//To get the correct x coordinates, the MouseOver function of the series writes the x coordinate into conf.currentSeriesXAxisLeft, this used here. 
				//For columns on maps: point.plotX is always < 10 - I have not found any other clever idea how to find out if the tooltip is over a column charts
				point.plotX = point.plotX < 10 ? conf.currentSeriesXAxisLeft -7 : point.plotX;
				return { x: point.plotX, y: point.plotY };
			}
		},
		plotOptions: {
			series: {
					events: {
						mouseOver: function(e){
							//Hack: to prevent first tooltip of a column on map to be displayed at the left chart border, set current mouse position here. 
							var conf = this.chart.options.customFunctions.columnChartConfiguration;
							conf.currentSeriesXAxisLeft = e.target.xAxis.left;
						}
					}
			}
		},
		*/
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
            enableDoubleClickZoom: false, 
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
                    "fontWeight": "bold", 
                    "fontSize": "12px"
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
		
		xAxis: {
			events: {
				//hide svg elements on zoom
				afterSetExtremes: function(e){
					var divId = e['target']['chart']['renderTo']['id'] || 'dummySttingForExportServer';
					var divIdString = '#' + divId;
					divIdString = '';
					//only care about zoom events, not pan
					if (e.trigger != 'pan'){
						//determine current zoom level
						var zoom = (e.dataMax - e.dataMin) / (e.max - e.min);
						$(divIdString + ' .columnLegendHideOnZoom').attr('visibility', zoom == 1 ? 'inherit' : 'hidden');
					}
				}
			}
		},		


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
			
			redrawEnabled: true,
			
			columnChartConfiguration: {
			},

			//position the columns at the correct location within the wohnviertel
			positionColumnSeries: function(chart, chartWidth, chartHeight){
			  var mapXAxis = chart.xAxis[0];
			  var mapYAxis = chart.yAxis[0];
			  var zoomRatio = (mapXAxis.dataMax - mapXAxis.dataMin) / (mapXAxis.max - mapXAxis.min);
			
			  chart.series[0].points.forEach(function(state) {
			    var stateCenterX = mapXAxis.toPixels(state.series.mapData[state.index].properties.POINT_X),
			      stateCenterY = mapYAxis.toPixels(-state.series.mapData[state.index].properties.POINT_Y),
			      chartWidthZoomed = chartWidth * zoomRatio || 10, // stateWidth / 6,
			      chartHeightZoomed = chartHeight * zoomRatio || 50,// stateHeight / 2,
			      axisIndex = state.index + 1,
			      xAxis = chart.xAxis[axisIndex],
			      yAxis = chart.yAxis[axisIndex];
				
				/*
			    // applay minimum column plot dimensions if needed
			    if (chartWidth < minColumnWidth) {
			      chartWidth = minColumnWidth;
			    }
			    if (chartHeight < minColumnHeight) {
			      chartHeight = minColumnHeight;
			    }
			    */
			
			    var left = stateCenterX - (chartWidthZoomed / 2),
			      top = stateCenterY - chartHeightZoomed / 2;
			
			    // hide series which don't fit in the plot area
				if (left  < 0 || left  > chart.plotWidth || top  < 0 || top > chart.plotHeight + chart.plotTop) {		    	
			      xAxis.series.forEach(function(s) {
			        s.setVisible(false, false);
			      });
			    // show and position series that fit in the plot area
			    } else {
			      xAxis.series.forEach(function(s) {
			      	//if series must be hidden due to clicking on legend: hide despite ok position
			        s.setVisible(true && !s.userOptions._hide, false);
			        //define column width here and increase with zooming
			        s.update({pointWidth: s.options.columnWidth * zoomRatio}, false);
			      });
			
			      xAxis.update({
			        left: left, // + 'px'
			        width: chartWidthZoomed
			      }, false);
			
			      yAxis.update({
			        top: top, // + 'px'
			        height: chartHeightZoomed
			      }, false);
			    }
			  });
			
			  chart.redraw();
			},       	

            //draw columns onto the map			    		    
            drawColumns: function(chart, columnSeries, choroplethSeries, columnSeriesConfig, color, chartHeight, columnWidth){
				var fn = chart.options.customFunctions;
				var conf = fn.columnChartConfiguration;
				//get all y Data into array in order to get max and min            	
            	var allYData = Array.prototype.concat.apply(
						[], columnSeries.map(
							function(val, i, arr){
			            		return val.yData;
			            	}
		            	)
            	);
				var yMax = Math.max.apply(null, allYData);
				var yMin = Math.min.apply(null, allYData);
				var mapXAxis = chart.xAxis[0];
				var zoom = (mapXAxis.dataMax - mapXAxis.dataMin) / (mapXAxis.max - mapXAxis.min);
				
				conf.chartHeight = chartHeight;
				conf.chartWidth = columnWidth * columnSeries.length;
				conf.columnWidth = columnWidth;
				conf.columnCount = columnSeries.length;
				conf.yMax = yMax;
				conf.yMin = yMin;
				
				//see https://forum.highcharts.com/highmaps-usage-f14/how-to-make-world-map-with-with-overlaid-column-charts-t39522/ and http://jsfiddle.net/kkulig/d0dku2c2/
				choroplethSeries.points.forEach(function(state, i, array) {
					var correspondingMapSeriesItem = choroplethSeries.points[i];
					
					// create axes separate axes for each column plot    
					chart.addAxis({
						visible: false, 
						width: conf.chartWidth * zoom
					}, true, false);
					
					chart.addAxis({
						visible: false,
						height: conf.chartHeight * zoom,
						min: yMin, 
						max: yMax
					}, false, false);
					
					var mapColumnSeries = {
						type: 'column',
						showInLegend: false,
						xAxis: state.index + 1,
						yAxis: state.index + 1,
						pointPadding: 0,
						columnWidth: columnWidth,
						groupPadding: 0,
						borderWidth: 0,		
						data: [], 
					};
					
					columnSeries.forEach(function(item, i, arr){
						var value = item.yData[state.index];
						mapColumnSeries.data.push(
							{
							y: value, 
							v: value,
							name: item.name,
							color: color(value, i),
							borderColor: color(value, i)
							}
						);
					});
					
					//create the config handed in from the chart
					var columnTemplate = columnSeriesConfig(correspondingMapSeriesItem, color);
					//merge the two configs (2nd into first, see e.g. https://gist.github.com/TorsteinHonsi/f646f39d51d18b7d6bfb)
					var mergedColumnConfig = Highcharts.merge(true, mapColumnSeries, columnTemplate);
					
					chart.addSeries(mergedColumnConfig, false);
				});
				//chart.redraw();
				fn.positionColumnSeries(chart);
			},    		    
		    
		    
            //helper functions for column legend
	        addLegendTitle: function(chart, x, y, text){
        		return chart.renderer.label(text, x, y)
     				.css({
	                    fontSize: '12px',
	                    fontWeight: 'bold'
	                })
	                .attr({
			        	zIndex: 6,
			        	//class: 'columnLegend' 
			        }).add();	                
            },
			
			addLegendRectangle: function(chart, x, y, width, height, fill, cssClass){
            	return chart.renderer.rect(x, y, width, height).attr({
    	            'stroke-width':0,
    	            fill: fill,
    	            zIndex: 6,
    	            class: cssClass
            	}).add();
            },

            addLegendCircle: function(chart, x, y, radius, fill){
            	return chart.renderer.circle(x, y, radius, fill).attr({
				    fill: fill,
				    stroke: fill,
				    'stroke-width': 1, 
				    zIndex: 6,
				    class: 'columnLegend'
				}).add();
            },
	                
	                
            addLegendText: function(chart, x, y, text, color, cssClass, useHtml){
				return chart.renderer.text(text, x, y, undefined, undefined, undefined, useHtml)
					.attr({
						zIndex: 6,
						fill: color,
						class: (cssClass || "") + ' columnLegend'
					})
					.add();
            },
            
            addLegendTextbold: function(chart, x, y, text, color, cssClass, useHtml){
				return chart.renderer.text(text, x, y, undefined, undefined, undefined, useHtml)
					.attr({
						zIndex: 6,
						fill: color,
						class: (cssClass || "") + ' columnLegend'})
					.css({
                        fontWeight: 'bold' }).
                     add();
            },
          
            addLegendSquare: function(chart, x, y, width, fill){
            	return chart.renderer.rect(x, y, width, width, 0)
	            	.attr({
			            'stroke-width':0,
			            fill: fill,
			            zIndex: 6,
			            class: 'columnLegend'
		        	})
		        	.add();
            },
            
            
            addLegendColumnChart: function(chart, x, y, values, color, cssClass){
            	var fn = chart.options.customFunctions;
            	var conf = fn.columnChartConfiguration;
				values.forEach(function(value, i, arr){
					var height = value * conf.chartHeight / (conf.yMax - conf.yMin);
	            	chart.renderer.rect(x + i * conf.columnWidth, y - height, conf.columnWidth, height, 0).attr({
			            'stroke-width':0,
			            fill: color(values[0], i),
			            zIndex: 6,
			            class: cssClass + ' columnLegend'
		        	}).add();
				});
            	/*
				var axis = chart.yAxis[0];            	
				
				chart.addAxis({
					visible: false, 
					width: fn.columnChartConfiguration.columnWidth * values.length, 
					left: x
				}, true, false);
				chart.addAxis({
					visible: false,
					height: fn.columnChartConfiguration.chartHeight,
					min: fn.columnChartConfiguration.yMin, 
					max: fn.columnChartConfiguration.yMax, 
					top: 250
				}, false, false);
				
				var mapColumnSeries = {
					type: 'column',
					name: 'mapColumnLegend',
					id: 'mapColumnLegend',
					showInLegend: false,
					xAxis: chart.xAxis.length-1,
					yAxis: chart.yAxis.length-1,
					pointPadding: 0,
					groupPadding: 0,
					borderWidth: 0,		
					tooltip: {
						enabled: false
					},
					data: []
				};
				
				
				values.forEach(function(item, i, arr){
				  mapColumnSeries.data.push(
				  	{
				  		y: item, 
				  		v: item,
				  		color: color(item, i),
				  		borderColor: color(item, i)
				  	}
				  );
				});
				
				chart.addSeries(mapColumnSeries, true);
				*/				
            },
            

			//Add click handler to bubbleLegend items 
			AddColumnLegendClickHandler: function(chart){
				var divId = chart['renderTo']['id'] || 'dummySttingForExportServer';
				var divIdString = '#' + divId;
				divIdString = '';
			    $(divIdString + ' .columnLegend').click(function(){
					//Toggle visible of mapcolumns
					chart.series.forEach(function (series) {
						if (series.userOptions.type == 'column'){
							series.userOptions._hide = !series.userOptions._hide;
						}
					});
					chart.redraw();
					
					
					//if useHTMl is true, text is in span elements within DIVs classed .columnLegend. Add the class to these spans
					$(divIdString + ' .columnLegend>span').addClass('columnLegend').addClass('columnLegendHtmlText');
					//toggle active state of legend elements
					var columnLegendItems = $(divIdString + ' .columnLegend');
					//backup original color
					columnLegendItems.each(function(i, v){
						if (!$(this).attr('fill_active')) {
							//if no fill color is defined, set to  black
							$(this).attr('fill_active', $(this).attr('fill') || 'black');	
						}
						if (!$(this).attr('stroke_active')) {
							$(this).attr('stroke_active', $(this).attr('stroke') || null);	
						}
					});
					//toggle color
					if (columnLegendItems.attr('fill') == columnLegendItems.attr('fill_active')){
						//set all to grey
						columnLegendItems.attr('fill', '#cccccc');
						//if stroke is present, toggle it
						columnLegendItems.each(function(i, v){
							//if stroke_active is present, set it to grey
							if ($(this).attr('stroke_active')) {
								$(this).attr('stroke', '#cccccc');
							}
						});
						//same for html text spans
						$(divIdString + ' .columnLegendHtmlText').css('color', '#cccccc');
					} 
					else {
						columnLegendItems.each(function(i, v){
							//set each to its fill_active color
							$(this).attr('fill', $(this).attr('fill_active'));	
							$(this).attr('stroke', $(this).attr('stroke_active'));	
						});
						//same for html text spans
						$(divIdString + ' .columnLegendHtmlText').css('color', 'black');
					}
				});
			},      
			
			//override function getSVG to make sure charts are exported as displayed, see https://forum.highcharts.com/highcharts-usage/how-to-force-export-server-to-render-current-svg-t40838/
			exportCurrentSVG: function(chart, type){
				var origFn = Highcharts.Chart.prototype.getSVG;
				Highcharts.Chart.prototype.getSVG = function() {
					console.log("Using current SVG to export.");
					var svg = chart.getChartHTML();
					svg = chart.sanitizeSVG(svg);
					return svg;
				};		            	
                chart.exportChart({type: type || 'image/png'});
                Highcharts.Chart.prototype.getSVG = origFn;					
			}, 
			
			
		}
    }; 
    }()
);