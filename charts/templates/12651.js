/*  
	global Highcharts
	global geojson_wohnviertelEPSG2056 
	global $
*/
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
			"align": "right",
			"x": -136,
			"y": -25,
			itemMarginBottom: 2,
			symbolRadius: 0,
		},
		colorAxis: {
			dataClassColor: 'category',
			dataClasses: [{
				from: 0,
				to: 2.99,
				color: '#D7E8D2',
				name: "<span style='color: rgba(0,0,0,0)'>12,0</span> < <span style='color: rgba(0,0,0,0)'>1</span>3,0"
			}, {
				from: 3.0,
				to: 6.99,
				color: '#73B97C',
				name: "<span style='color: rgba(0,0,0,0)'>1</span>3,0 − <span style='color: rgba(0,0,0,0)'>1</span>6,9"
			}, {
				from: 7.0,
				to: 11.99,
				color: '#68AB2B',
				name: "<span style='color: rgba(0,0,0,0)'>1</span>7,0 − <span style='color: rgba(0,0,0,0)'></span>11,9"
			}, {
				from: 12.0,
				to: 15.99,
				color: '#007A2F',
				name: "12,0 − 15,9"
			}, {
				from: 16.0,
				color: '#0A3B19',
				name: "<span style='color: rgba(0,0,0,0)'>12,0</span> ≥ 16,0"
			}],
		},
		"data": {
			"seriesMapping": [
				{
					x: 0, y: 4
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

					var choroplethSeries = chart.series[1];
					var pieSizeSeries = chart.series[2];

					//pie diameters in px
					var maxPieDiameter = 20;

					//configuration of categorical pie sizes
					var pieSizeCatConfig =
						[
							{
								name: "< <span style='color: rgba(0,0,0,0)'>1 </span>300",
								from: 0,
								to: 299,
								diameter: 5
							},
							{
								name: "300 − 1 299",
								from: 300,
								to: 1299,
								diameter: 10
							},
							{
								name: "≥ 1 300",
								from: 1300,
								to: 1000000000,
								diameter: 20
							}
						];

					//define different colors for positive and negative values
					var color = function (value) {
						return (value >= 0) ? '#662673' : '#67401E';
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
					fn.addLegendRectangle(chart, 245, 215, 115, 135, '#fbfbfb');
					fn.addLegendRectangle(chart, 360, 215, 115, 135, '#fbfbfb');
					fn.addLegendTitle(chart, "Anteil Einwohner <br/> über 20 µg/m<sup>3</sup> in %", 245, 220, undefined, true); //addLegendTitle: function (chart, text, x, y, cssClass, useHtml)
					fn.addLegendTitle(chart, "Anzahl Einwohner <br/> über 20 µg/m<sup>3</sup>", 365, 220, undefined, true);

					fn.addLegendCircle(chart, 378, 271, 0.5 * pieSizeCatConfig[0].diameter, '#662673');
					fn.addLegendCircle(chart, 378, 290, 0.5 * pieSizeCatConfig[1].diameter, '#662673');
					fn.addLegendCircle(chart, 378, 315, 0.5 * pieSizeCatConfig[2].diameter, '#662673');
					fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 465, 260, undefined, false, 'right');
					fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 465, 280, undefined, false, 'right');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 465, 305, undefined, false, 'right');


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

