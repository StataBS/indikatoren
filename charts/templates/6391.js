/*  
	global Highcharts
	global geojson_wohnviertelEPSG2056 
	global $
*/
(function(){

    return {
		"legend": {
    		useHTML: false,
			"title": {
				"text": null, 
				style: {'fontWeight':' bold'}
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "right",
			"x": -132,
			"y": -35,
			itemMarginBottom: 2, 
			symbolRadius: 0,
		},
		colorAxis: {
			dataClassColor: 'category',
			dataClasses: [{
				from: 0,
				to: 0.54999,
				color: '#D7E8D2',
				name: "<span style='color: rgba(0,0,0,0)'>0,34</span> < 0,55"
			}, {
				from: 0.55,
				to: 0.79999,
				color: '#73B97C',
				name: "0,55 −  0,79"
			}, {
				from: 0.8,
				to: 0.89999,
				color: '#68AB2B',
				name: "0,80 − 0,89"
			}, {
				from: 0.9,
				to: 1.09999,
				color: '#007A2F',
				name: "0,90 − 1,09"
			}, {
				from: 1.1,
				color: '#0A3B19',
				name: "<span style='color: rgba(0,0,0,0)'>1,29</span> ≥ 1,10"
			}],
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
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),2) + '</b><br/>';
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
					
					//configuration of categorical pie sizes
					var pieSizeCatConfig =
						[
							{
								name: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 < 35,0",
								from: 0,
								to: 34.999,
								diameter: 5
							},
							{
								name: ' 35,0 − 79,9',
								from: 35,
								to: 79.9999,
								diameter: 10
							},
							{
								name: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ≥  80,0",
								from: 80,
								to: 1000000000,
								diameter: 20
							}
						];
					
					//define different colors for positive and negative values
	                var color = function(value){
	                	return (value >= 0) ? '#FABD24' : 'FFDA80';
	                };					
					
					//define chart-specific details
					var pieSeriesConfig = function(data, correspondingMapSeriesItem, color){
						return {
	                        sizeFormatter: function () {
	                            var fn = this.chart.options.customFunctions;
								//return fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter); 
								return fn.pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
	                        },
	                        tooltip: {
	                            pointFormatter: function () {
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),0) + '</b><br/>';
	                            }
	                        }
	                    };
					};
					
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);

	                //Add manually drawn legend
	                fn.addLegendRectangle(chart, 250, 210, 100, 120, '#fbfbfb');
	                fn.addLegendRectangle(chart, 355, 210, 125, 120, '#fbfbfb');

	        		fn.addLegendTitle(chart, "Leerwohnungs- <br/>  quote in %", 250, 210);
	                fn.addLegendTitle(chart, "Anzahl leerstehende <br/>  Wohnungen", 355, 210);
	                
	               	fn.addLegendCircle(chart, 373, 266, 0.5*pieSizeCatConfig[0].diameter, '#FABD24');
	                fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 450, 255, undefined, false, 'right');
	                fn.addLegendCircle(chart, 373, 285, 0.5*pieSizeCatConfig[1].diameter, '#FABD24');
	                fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 450, 275, undefined, false, 'right');
	                fn.addLegendCircle(chart, 373, 310, 0.5*pieSizeCatConfig[2].diameter, '#FABD24');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 450, 300, undefined, false, 'right');
					
					//fn.addLegendSquare(chart, 565, 240, 10, '#7F5F1A');
					//fn.addLegendLabel(chart, 'Zunahme', 580, 236);
					//fn.addLegendSquare(chart, 565, 256, 10, '#FABD24');
					//fn.addLegendLabel(chart, 'Abnahme', 580, 252);
				
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart, '#cccccc');
	            }
			}
		}
	};
}());