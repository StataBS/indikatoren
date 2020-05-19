/*  
	global Highcharts
	global geojson_wohnviertelEPSG2056 
	global $
*/

var legendPosition = {
	blockChoropleth: {
		x: 518, // Customizable
		y: -15,  // Customizable
		title: {
			y: [320, 302, 285],
			x: 525, // Customizable
		}
	},
	blockSymbol: {
		x: [750,745], // Customizable
		y: [377, 402, 427, 452], // Customizable
		y3C: [382, 412, 442],
		numbers: {
			x: 0,
			y: [365, 390, 420, 445], // Customizable
			y3C: [370, 400, 430]
		},
		title: {
			x: 0
		}
	}
};

legendPosition.blockSymbol.numbers.x = legendPosition.blockSymbol.x[0] + 15;

legendPosition.blockSymbol.title.x = legendPosition.blockSymbol.x[0] - 10;
var i;
for (i = 0; i < 2; i++) {
	legendPosition.blockChoropleth.title.y[i] -= legendPosition.blockChoropleth.y;
};

(function () {

	return {
		"legend": {
			useHTML: false,
			"title": {
				"text": null,
				style: { 'fontWeight': ' bold' }
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "left",
			"x": legendPosition.blockChoropleth.x,
			"y": legendPosition.blockChoropleth.y,
			itemMarginBottom: 2,
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal'
			}
		},
		colorAxis: {
			dataClassColor: 'category',
			dataClasses: [{
				from: 0,
				to: 0.199,
				color: '#D3E2E4',
				name: "<span style='color: rgba(0,0,0,0)'>00,00</span> < 0,19"
			}, {
				from: 0.200,
				to: 0.229,
				color: '#A8C3CA',
				name: "<span style='color: rgba(0,0,0,0)'>0</span>0,20 − 0,22"
			}, {
				from: 0.23,
				to: 0.259,
				color: '#689199',
				name: "<span style='color: rgba(0,0,0,0)'>0</span>0,23 − 0,25"
			}, {
				from: 0.26,
				to: 0.319,
				color: '#246370',
				name: "<span style='color: rgba(0,0,0,0)'>0</span>0,26 − 0,31"
			}, {
				from: 0.32,
				color: '#083038',
				name: "<span style='color: rgba(0,0,0,0)'>00,00</span> ≥ 0,32"
			}],
		},
		"data": {
			"seriesMapping": [
				{
					x: 0, y: 1
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
					pointFormatter: function () {
						//console.log(this);
						return this.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.value), 1) + '</b><br/>';
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

					this.credits.element.onclick = function () { };

					var chart = this;
					var fn = this.options.customFunctions;
					//define new Highcharts template "mappie"
					fn.defineTemplate();

					var choroplethSeries = chart.series[0];
					var pieSizeSeries = chart.series[1];

					//pie diameters in px
					var maxPieDiameter = 20;

					var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);

					//define different colors for positive and negative values
					var color = function (value) {
						return (value >= 0) ? '#007A2F' : '#990300';
					};

					//define chart-specific details
					var pieSeriesConfig = function (data, correspondingMapSeriesItem, color) {
						return {
							sizeFormatter: function () {
								var fn = this.chart.options.customFunctions;
								return fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter);
								//return fn.pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
							},
							tooltip: {
								pointFormatter: function () {
									return correspondingMapSeriesItem.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.v), 0) + ' m² </b><br/>';
								}
							}
						};
					};
					var pieSizeCatConfig;
					//put the pies / bubbles on the map
					//fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);

					//pie values in legend
					var minValueInLegend = 1;
					var maxValueInLegend = 5;

					//Add manually drawn legend	
					//fn.addLegendTitle(chart, "Veränderung von 1995 bis 2015 in m²", 265, 220);

					//fn.addLegendRectangle(chart, 243, 212, 105, 145, '#fbfbfb');
					//fn.addLegendRectangle(chart, 355, 212, 110, 145, '#fbfbfb');

					fn.addLegendTitle(chart, "Jugendquotient", legendPosition.blockChoropleth.title.x, legendPosition.blockChoropleth.title.y[0]);
					/*
					fn.addLegendTitle(chart, "Veränderung <br/> gegenüber <br/> 2009", 385 + shiftHoriz, 220 + shiftVert);
					fn.addLegendSquare(chart, 388 + shiftHoriz, 305 + shiftVert, 10, '#007A2F');
					fn.addLegendLabel(chart, 'Zunahme', 405 + shiftHoriz, 298 + shiftVert);
					fn.addLegendSquare(chart, 388 + shiftHoriz, 325 + shiftVert, 10, '#990300');
					fn.addLegendLabel(chart, 'Abnahme', 405 + shiftHoriz, 318 + shiftVert)

	                fn.addLegendCircle(chart, 392 + shiftHoriz, 360 + shiftVert, 0.5*fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey');
	                fn.addLegendLabel(chart, Highcharts.numberFormat((minValueInLegend),0,","," "), 405 + shiftHoriz, 347 + shiftVert);
	                fn.addLegendCircle(chart, 392 + shiftHoriz, 385 + shiftVert, 0.5*fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey');
	                fn.addLegendLabel(chart, Highcharts.numberFormat((maxValueInLegend),0,"."," "), 405 + shiftHoriz, 375 + shiftVert);
					
					var shiftDown = 12;

					fn.addLegendCircle(chart, 373, 266 + shiftDown, 0.5 * pieSizeCatConfig[0].diameter, '#007A2F');
					fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 465, 255 + shiftDown, undefined, false, 'right');
					fn.addLegendCircle(chart, 373, 285 + shiftDown, 0.5 * pieSizeCatConfig[1].diameter, '#007A2F');
					fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 465, 275 + shiftDown, undefined, false, 'right');
					fn.addLegendCircle(chart, 373, 310 + shiftDown, 0.5 * pieSizeCatConfig[2].diameter, '#007A2F');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 465, 300 + shiftDown, undefined, false, 'right');

					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
					*/
				}
			}
		}
	};
}());

