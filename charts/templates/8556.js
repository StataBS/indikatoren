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
		/* 
		
		series with fixed data that should be added to the series object before merging with csv data 
		
		workaround to define color = background-color for series with no data (Riehen & Bettingen)
		BL/7.2.2020

		*/
		beforeSeries: [
			{
				//Outline Wohnviertel if all choropleth shapes have been deselected through classed colorAxis, see https://forum.highcharts.com/highmaps-usage-f14/outline-shapes-hidden-by-click-onto-classed-coloraxis-t40837/
				name: "WohnviertelOutline",
				enableMouseTracking: false,
				color: '#fbfbfb', //#ededed
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
		"series": [
			{
				"name": "Wohnviertel",
				"animation": true,
				"mapData": geojson_wohnviertelEPSG2056_StadtBasel,
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
						return this.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.value), 1) + '%</b><br/>';
					}
				}
			},
			{
				"visible": true
			}
		],
		legend: {
			useHTML: false,
			title: {
				text: null,
				style: { 'fontWeight': ' bold' }
			},
			layout: "vertical",
			"align": "left",
			"x": legendPosition.blockChoropleth.x,
			"y": legendPosition.blockChoropleth.y,
			itemMarginBottom: 2,
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal',
			}
		},
		colorAxis: {
			dataClassColor: 'category',
			dataClasses: [{
				from: 0.0,
				to: 39.9,
				color: '#D3E2E4',
				name: "<span style='color: rgba(0,0,0,0)'>00,0 </span> < 40,0"
			}, {
				from: 40.0,
				to: 69.9,
				color: '#A8C3CA',
				name: "40,0 − 69,9"
			}, {
				from: 70.0,
				to: 79.9,
				color: '#689199',
				name: "70,0 − 79,9"
			}, {
				from: 80.0,
				to: 89.9,
				color: '#246370',
				name: "80,0 − 89,9"
			}, {
				from: 90,
				color: '#083038',
				name: "<span style='color: rgba(0,0,0,0)'>00,0 </span> ≥ 90,0"
			}],
		},
		chart: {
			events: {
				load: function (e) {

					this.credits.element.onclick = function () { };

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
								name: "<span style='color: rgba(0,0,0,0)'>000</span> < <span style='color: rgba(0,0,0,0)'>0</span> 300",
								from: 0,
								to: 299,
								diameter: 5
							},
							{
								name: "300 − <span style='color: rgba(0,0,0,0)'>0</span> 999",
								from: 300,
								to: 999,
								diameter: 10
							},
							{
								name: "<span style='color: rgba(0,0,0,0)'>000</span> ≥  1 000",
								from: 1000,
								to: 2000,
								diameter: 20
							}
						];

					//define different colors for positive and negative values
					var color = function (value) {
						return (value >= 0) ? '#7F5F1A' : '#FABD24';
					};

					//define chart-specific details
					var pieSeriesConfig = function (data, correspondingMapSeriesItem, color) {
						return {
							sizeFormatter: function () {
								var fn = this.chart.options.customFunctions;
								//return fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter);
								return fn.pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
							},
							tooltip: {
								pointFormatter: function () {
									return correspondingMapSeriesItem.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.v), 0) + '</b><br/>';
								}
							}
						};
					};

					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);

					//Add manually drawn legend
					//fn.addLegendRectangle(chart, 243-5, 212+20, 105+5, 130-10, '#fbfbfb');
					//					fn.addLegendRectangle(chart, 355 - 115, 212 + 10, 130, 130, '#fbfbfb');
					fn.addLegendTitle(chart, choroplethSeries.name.replace(' ', ' <br>') + ' (%)', legendPosition.blockChoropleth.title.x, legendPosition.blockChoropleth.title.y[1]);
					fn.addLegendTitle(chart, pieSizeSeries.name.replace(' ', ' <br>'), legendPosition.blockSymbol.title.x, legendPosition.blockChoropleth.title.y[1]);

					fn.addLegendCircle(chart, legendPosition.blockSymbol.x[0], legendPosition.blockSymbol.y3C[0], 0.5*pieSizeCatConfig[0].diameter, '#7F5F1A');
	                fn.addLegendLabel(chart, pieSizeCatConfig[0].name, legendPosition.blockSymbol.numbers.x, legendPosition.blockSymbol.numbers.y3C[0], undefined, false, 'right');
	                fn.addLegendCircle(chart, legendPosition.blockSymbol.x[0], legendPosition.blockSymbol.y3C[1], 0.5*pieSizeCatConfig[1].diameter, '#7F5F1A');
	                fn.addLegendLabel(chart, pieSizeCatConfig[1].name, legendPosition.blockSymbol.numbers.x, legendPosition.blockSymbol.numbers.y3C[1], undefined, false, 'right');
	                fn.addLegendCircle(chart, legendPosition.blockSymbol.x[0], legendPosition.blockSymbol.y3C[2], 0.5*pieSizeCatConfig[2].diameter, '#7F5F1A');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, legendPosition.blockSymbol.numbers.x, legendPosition.blockSymbol.numbers.y3C[2], undefined, false, 'right');

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




/*
	global Highcharts
	global geojson_wohnviertelEPSG2056
	global $
*/
/*(function () {

	return {
		"legend": {
			useHTML: false,
			"title": {
				"text": null,
				style: { 'fontWeight': ' bold' }
			},
			"layout": "vertical",
			"align": "right",
			"x": -345,
			"y": -15,
			itemMarginBottom: 2,
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal'
			}
		},
		colorAxis: {
			dataClassColor: 'category',
			dataClasses: [{
				from: 0.0,
				to: 39.9,
				color: '#D3E2E4',
				name: "<span style='color: rgba(0,0,0,0)'>00,0% </span> < 40,0%"
			}, {
				from: 40.0,
				to: 69.9,
				color: '#A8C3CA',
				name: "40,0% − 69,9%"
			}, {
				from: 70.0,
				to: 79.9,
				color: '#689199',
				name: "70,0% − 79,9%"
			}, {
				from: 80.0,
				to: 89.9,
				color: '#246370',
				name: "80,0% − 89,9%"
			}, {
				from: 90,
				color: '#083038',
				name: "<span style='color: rgba(0,0,0,0)'>00,0% </span> ≥ 90,0%"
			}],
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
				"mapData": geojson_wohnviertelEPSG2056_StadtBasel,
				"borderColor": "#fbfbfb",
				"joinBy": ['TXT', 'Wohnviertel_Id'],
				"keys": ['Wohnviertel_Id', 'value'],
				tooltip: {
					pointFormatter: function () {
						//console.log(this);
						return this.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.value), 1) + '%</b><br/>';
					}
				}
			},
			{
				"visible": false
			}
		],
	};
}());

*/