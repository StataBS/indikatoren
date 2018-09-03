/*  
	global Highcharts
	global geojson_wohnviertelEPSG2056 
*/
(function(){

    return {
    	"legend": {
			"title": {
				"text": ""
			}
			},
		"colorAxis": {
			min: 0,
			max: 1,
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
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),2) + '  </b><br/>';
					}
				}
			}, 
			{
				"visible": false
			}
		],
		xAxis: {
    		events: {
				//recalculate and hide svg elements on zoom
				afterSetExtremes: function(e){
					if (this.chart){
						var fn = this.chart.userOptions.customFunctions;
						fn.recalculateOnZoom(e, '.pieLegendRecalculateOnZoom');
						fn.hideOnZoom(e, '.pieLegendHideOnZoom');
					}
				}
    		}
		},
		chart: {
			events: {
	            load: function (e) {
	            	
	            	this.credits.element.onclick = function() {};

	                var chart = this;
	                var fn = this.userOptions.customFunctions;
	                //define new Highcharts template "mappie"
					fn.defineTemplate();
					
					var choroplethSeries = chart.series[1];
					var pieSizeSeries = chart.series[2];
					
					//pie diameters in px
					var maxPieDiameter = 25; 

					var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);
					
					//define different colors for positive and negative values
	                var color = function(value){
	                	return (value >= 0) ? '#7F5F1A' : '#FABD24';
	                };					
	                
	                //define number format in zoomed legend labels
	                fn.legendLabelZoomFormatter = function(value){
	                	return Highcharts.numberFormat((value),3,","," ");
	                };
					
					//define chart-specific details
					var pieSeriesConfig = function(data, correspondingMapSeriesItem, color){
						return {
	                        sizeFormatter: function () {
	                            var yAxis = chart.yAxis[0];
	                            var zoom = (yAxis.dataMax - yAxis.dataMin) / (yAxis.max - yAxis.min);
	                            //size of pies depend on zoom level
	                            var size = zoom * fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter);
								return size;
	                        },
	                        tooltip: {
	                            pointFormatter: function () {
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),3) + '  </b><br/>';
	                            }
	                        }
	                    };
					};
					var pieSizeCatConfig;
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);
	                
					//pie values in legend
	                var minValueInLegend = 10; 
	                var maxValueInLegend = 70; 
	                
                	//Add manually drawn legend	
                	fn.addLegendRectangle(chart, 250, 220, 230, 77, 'rgba(222, 222, 222, 0.5)', 'pieLegend');
	                fn.addLegendTitle(chart, pieSizeSeries.name, 265, 220, 'pieLegend pieLegendStayOnZoom');
	                
	                fn.addLegendCircle(chart, 280, 255, 0.5*fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), '#7F5F1A', 'pieLegendStayOnZoom');
	                fn.addLegendLabel(chart, Highcharts.numberFormat((minValueInLegend),0,","," "), 300, 245, 'pieLegendRecalculateOnZoom', false);
	                fn.addLegendCircle(chart, 280, 280, 0.5*fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), '#7F5F1A', 'pieLegendStayOnZoom');
	                fn.addLegendLabel(chart, Highcharts.numberFormat((maxValueInLegend),0,"."," "), 300, 270, 'pieLegendRecalculateOnZoom', false);

					//fn.addLegendSquare(chart, 270, 250, 10, '#7F5F1A');
					//fn.addLegendLabel(chart, 'Zunahme', 300, 245);
					//fn.addLegendSquare(chart, 270, 275, 10, '#FABD24');
					//fn.addLegendLabel(chart, 'Abnahme', 300, 270);
					fn.addLegendRectangle(chart, 250, 300, 230, 60, 'rgba(222, 222, 222, 0.5)');
					fn.addLegendTitle(chart, 'Leerwohnungsquote in %', 265, 300);
					
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart); 
	            }
			}
		}
	};
}());