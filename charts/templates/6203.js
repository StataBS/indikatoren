/*  
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
			"minColor": "#f4ebf3",
			"maxColor": "#5b2659",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value), 0) + '%'; 
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
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),1) + '%</b><br/>';
					}
				}
			}, 
			{
				"visible": false
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
					var maxPieDiameter = 20;

					var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);
					
					//define different colors for positive and negative values
	                var color = function(value){
	                	return (value >= 0) ? '#007A2F' : '#FFBB58';
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
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + ((Math.sign(this.v) == 1) ? '+' : '') + Highcharts.numberFormat((this.v), 1) + ' Prozentpunkte</b><br/>';
	                            }
	                        }
	                    };
					};
					 var pieSizeCatConfig;
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);
	                
					//pie values in legend
	                var minValueInLegend = 0.1; 
	                var maxValueInLegend = 2; 
	                
                	//Add manually drawn legend	
	                fn.addLegendTitle(chart, pieSizeSeries.name + ' (pp)', 265, 240);
	                
	                fn.addLegendCircle(chart, 365, 275, 0.5*fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey', 'pieLegendHideOnZoom');
	                fn.addLegendLabel(chart, Highcharts.numberFormat((minValueInLegend),1,","," "), 380, 265, 'pieLegendHideOnZoom');
	                fn.addLegendCircle(chart, 365, 300, 0.5*fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey', 'pieLegendHideOnZoom');
	                fn.addLegendLabel(chart, Highcharts.numberFormat((maxValueInLegend),1,","," "), 380, 290, 'pieLegendHideOnZoom');

					fn.addLegendSquare(chart, 270, 270, 10, '#007A2F');
					fn.addLegendLabel(chart, 'Zunahme', 290, 265);
					fn.addLegendSquare(chart, 270, 295, 10, '#FFBB58');
					fn.addLegendLabel(chart, 'Abnahme', 290, 290);
					
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
	            }
			}
		}
	};
}());