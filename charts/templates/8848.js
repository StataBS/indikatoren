/*  
8842
*/
(function () {
	return {
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true, //sets datalabels to true via mappie001_print (BL, 17.02.2020)
				}
			}
		},
		"legend": {
			enabled: false
		},
		colorAxis: {
			dataClassColor: 'category',
			dataClasses: [{
				from: 0,
				to: 1,
				color: '#aaa',
			}],
		},
		"data": {
			"seriesMapping": [
				{
					x: 0, y: 1
				},
				{
					//2nd series: use y values from column 3
					y: 1
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
					//var maxPieDiameter = 40; //20

					//configuration of categorical pie sizes
					var pieSizeCatConfig =
						[
							{
								name: " < \u00A0\u00A0 300",
								from: 0,
								to: 299,
								diameter: 0.000001
							},
						];

					//define different colors for positive and negative values
					var color = function (value) {
						return (value >= 0) ? '#aaa' : '#aaa';
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

					//console.log(choroplethSeries);
					for (let i = 0; i < pieSizeSeries.data.length; i++) {
						if (choroplethSeries.data[i].Wohnviertel_Id < 10) var xoff=8; else var xoff = 0;
						fn.addLegendLabel(chart, choroplethSeries.data[i].Wohnviertel_Id.toString() + ': ' + pieSizeSeries.data[i].options["hc-key"], 800+xoff, 30 + i * 20, undefined, false, 'right');
					}

					/*
						//Add manually drawn legend
						//fn.addLegendRectangle(chart, 245, 215, 115, 135, '#fbfbfb');
						//fn.addLegendRectangle(chart, 360, 215, 115, 135, '#fbfbfb');
						fn.addLegendTitle(chart, "Anteil Einwohner <br/> über 20 µg/m<sup>3</sup> in %", 540, 270, undefined, true); //addLegendTitle: function (chart, text, x, y, cssClass, useHtml)
						fn.addLegendTitle(chart, "Anzahl Einwohner <br/> über 20 µg/m<sup>3</sup>", 765, 270, undefined, true);
	
						fn.addLegendCircle(chart, 778, 331, 0.5 * pieSizeCatConfig[0].diameter, '#662673');
						fn.addLegendCircle(chart, 778, 350, 0.5 * pieSizeCatConfig[1].diameter, '#662673');
						fn.addLegendCircle(chart, 778, 375, 0.5 * pieSizeCatConfig[2].diameter, '#662673');
						fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 828, 320, undefined, false, 'right');
						fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 795, 340, undefined, false, 'right');
						fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 829, 365, undefined, false, 'right');
	
						//fn.addLegendSquare(chart, 565, 240, 10, '#7F5F1A');
						//fn.addLegendLabel(chart, 'Zunahme', 580, 236);
						//fn.addLegendSquare(chart, 565, 256, 10, '#FABD24');
						//fn.addLegendLabel(chart, 'Abnahme', 580, 252);
	
						//make sure pies are hidden upon click onto pie legend
						fn.AddPieLegendClickHandler(chart, '#cccccc');
					*/
				}
			}
		}
	};
}());
