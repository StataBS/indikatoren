/*  
	global Highcharts
	global geojson_wohnviertelEPSG2056 
	global $
*/
(function(){

    return {
		subtitle: {
			useHTML: true
		  },
		  "legend": {
			"x": 0,
			"y": 15, 
			"title": {
				"text": ""
			}
			},
		"colorAxis": {
			"minColor": "#FFDA80",
			"maxColor": "#7F5F1A",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value),0); 
				}
			}
		},
        "data": {
		    "seriesMapping": [
		      {
		      	x: 0, y: 3
		      },
		      {
		      	//2nd series: use y values from column 3
		      	y: 2
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
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),1) + '  </b>%<br/>';
					}
				}
			}, 
			{
				visible: false, 
				showInLegend: false,
    			colorAxis: false
			}
		],
		chart: {
			events: {
	            load: function (e) {
	            	
	            	this.credits.element.onclick = function() {};

	                var chart = this;
	                var fn = this.options.customFunctions;
	                //define new Highcharts template "mappie"
					fn.defineTemplate();
					
					var choroplethSeries = chart.series[1];
					var pieSizeSeries = chart.series[2];
					
					//pie diameters in px
					var maxPieDiameter = 25;

					var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);

					//define different colors for positive and negative values
	                var color = function(value){
	                	return (value >= 0) ? '#007A2F' : '#007A2F';
	                };					
					
					//define chart-specific details
					var pieSeriesConfig = function(data, correspondingMapSeriesItem, color){
						return {
	                        sizeFormatter: function () {
	                            var fn = this.chart.options.customFunctions;
	                            var yAxis = chart.yAxis[0], zoom = (yAxis.dataMax - yAxis.dataMin) / (yAxis.max - yAxis.min);
								return zoom * fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter); 
								//return fn.pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
	                        },
	                        tooltip: {
	                            pointFormatter: function () {
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),0) + ' m²</b><br/>';
	                            }
	                        }
	                    };
					};
					 var pieSizeCatConfig;
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);
	                
					//pie values in legend
	                var minValueInLegend = 15000; 
	                var maxValueInLegend = 1500000; 
	                
                	//Add manually drawn legend		
                	fn.addLegendRectangle(chart, 250, 220, 230, 77, '#fbfbfb', 'pieLegend');
                	fn.addLegendRectangle(chart, 250, 300, 230, 85, '#fbfbfb');

	                fn.addLegendCircle(chart, 280, 255, 0.5*fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), '#007A2F', 'pieLegendStayeOnZoom');
	                //fn.addLegendLabel(chart, Highcharts.numberFormat((minValueInLegend),0,","," "), 300, 245, 'pieLegendRecalculateOnZoom', false, minValueInLegend);
	                fn.addLegendCircle(chart, 280, 280, 0.5*fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), '#007A2F', 'pieLegendStayeOnZoom');
	                //fn.addLegendLabel(chart, Highcharts.numberFormat((maxValueInLegend),0,"."," "), 300, 270, 'pieLegendRecalculateOnZoom', false, maxValueInLegend);
	                
					var zoomableLabels = [];
	                zoomableLabels.push({
	                	chart: chart, 
	                	text: Highcharts.numberFormat((minValueInLegend),0,","," "), 
	                	x: 355, 
	                	y: 245, 
	                	cssClass: 'pieLegendRecalculateOnZoom', 
	                	useHtml: false, 
	                	initialValue: minValueInLegend,
	                	align: 'right',
	                	legendLabelZoomFormatter: function(value){
	                		return Highcharts.numberFormat((value), 1, ",", " ");
	                	},					
	                }); 
	                zoomableLabels[0].label = fn.addLegendLabel(zoomableLabels[0].chart, zoomableLabels[0].text, zoomableLabels[0].x, zoomableLabels[0].y, zoomableLabels[0].cssClass, zoomableLabels[0].useHtml, zoomableLabels[0].align);
	                //copy first label but overwrite some properties
	                zoomableLabels.push($.extend({}, zoomableLabels[0], {
	                	text: Highcharts.numberFormat((maxValueInLegend),0,"."," "),
	                	y: 270,
	                	initialValue: maxValueInLegend,
	                }));
	                zoomableLabels[1].label = fn.addLegendLabel(zoomableLabels[1].chart, zoomableLabels[1].text, zoomableLabels[1].x, zoomableLabels[1].y, zoomableLabels[1].cssClass, zoomableLabels[1].useHtml, zoomableLabels[1].align);						                	                
	                
					fn.addLegendLabelbold(chart, 'Bruttogeschossfläche Arbeiten in m²', 265, 220, 'pieLegendStayeOnZoom');
					fn.addLegendTitle(chart, 'Anteil Arbeiten an der<br>Gesamtbruttogeschossfläche in %', 265, 300);
					
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
					
					chart.update(
					{
						xAxis: {
				    		events: {
								//recalculate and hide svg elements on zoom
								afterSetExtremes: function(e){
									var fn = this.chart.userOptions.customFunctions;
									fn.recalculateOnZoom(e, zoomableLabels);
								}
				    		}
						}
					});
					
	            }
			}
		}
	};
}());