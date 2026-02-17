(function () {
	return {
		"legend": {
			useHTML: true,
			"title": {
				"text": null,
				style: { 'fontWeight': ' bold' }
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "right",
			"x": -323,
			"y": -60,
			itemMarginBottom: 2,
			symbolRadius: 0,
		},
		colorAxis: {
			dataClassColor: 'category',
			dataClasses: [{
				to: 34.999,
				color: '#D7E8D2',
				name: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<&nbsp;&nbsp;&nbsp;35,0"
			}, {
				from: 35.0,
				to: 74.999,
				color: '#73B97C',
				name: "&nbsp;&nbsp;35,0 − &nbsp;&nbsp;74,9"
			}, {
				from: 75.0,
				to: 99.999,
				color: '#68AB2B',
				name: "&nbsp;&nbsp;75,0 − &nbsp;&nbsp;99,9"
			}, {
				from: 100,
				to: 149.999,
				color: '#007A2F',
				name: "100,0 − 149,9"
			}, {
				from: 150,
				color: '#0A3B19',
				name: "&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;≥&nbsp;150,0"
			}],
		},
		"data": {
			"seriesMapping": [
				{x: 0, y: 2},
				{y: 3} //2nd series: use y values from column 3
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
						return this.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.value), 3) + '</b><br/>';
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

					//configuration of categorical pie sizes
					var pieSizeCatConfig =
						[
							{
								name: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <&nbsp;&nbsp;&nbsp;4,0',
								from: 0,
								to: 3.999,
								diameter: 4
							},
							{
								name: ' 4,0 −&nbsp;&nbsp;&nbsp;9,9',
								from: 4.0,
								to: 9.999,
								diameter: 16
							},
							{
								name: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ≥ 10,0',
								from: 10,
								to: 1000000,
								diameter: 32
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
									return correspondingMapSeriesItem.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.v), 3) + '</b><br/>';
								}
							}
						};
					};

					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);

					//Add manually drawn legend
					fn.addLegendTitle(chart, choroplethSeries.name + "<br>in Einwohnern pro ha", 540, 270, 'pieLegend');
					fn.addLegendTitle(chart, pieSizeSeries.name + '<br>in Einwohnern pro ha', 765, 270, undefined, true);

					fn.addLegendCircle(chart, 778, 331, 0.5 * pieSizeCatConfig[0].diameter, 'grey');
					fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 795, 318, undefined, true, 'right');
					fn.addLegendCircle(chart, 778, 350, 0.5 * pieSizeCatConfig[1].diameter, 'grey');
					fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 795, 338, undefined, true, 'right');
					fn.addLegendCircle(chart, 778, 380, 0.5 * pieSizeCatConfig[2].diameter, 'grey');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 795, 368, undefined, true, 'right');

					fn.addLegendSquare(chart, 773, 410, 10, '#7F5F1A');
					fn.addLegendLabel(chart, 'Zunahme', 788, 403);
					fn.addLegendSquare(chart, 773, 430, 10, '#FABD24');
					fn.addLegendLabel(chart, 'Abnahme', 788, 423);

					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
				}
			}
		}
	};
}());