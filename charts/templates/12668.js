/*  
8842
*/
(function () {
	return {
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true, //sets datalabels to true via mappie001_print (BL, 17.02.2020)
					color: '#ffffff',
					style: {
						fontWeight: 'normal'
					}
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
				color: '#7bb589',
			},
			{
				from: 2,
				to: 3,
				color: '#63a975',
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
						"enabled": true,
						color: '#2a9749',
						"borderColor": '#ddecde',
					}
				},
				tooltip: {
					headerFormat: undefined,
					pointFormatter: function () {
						return this.Wohnviertel_Id + ': <b>' + this.properties.LIBGEO + '</b>';
					}
				}
			},
			{
				"visible": false
			}
		],
		responsive: {
			rules: [{
				condition: {
					maxWidth: 796 /* webbs iframe breakpoint 1 */
				},
				chartOptions: {
					chart: {
						height: 680,
						marginLeft: 0,
						marginBottom: 300,
					},
					legend: {
						enabled: false
					}
				}
			}]
		},
		chart: {
			"width": undefined,
			"height": 415,
			marginLeft: -300,
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
								headerFormat: undefined,
								pointFormatter: function () {
									return correspondingMapSeriesItem.TXT + ': <b>' + correspondingMapSeriesItem.properties.LIBGEO + '</b>';
								}
							},
							"states": {
								"hover": {
									"enabled": false,
								}
							},
						};
					};

					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);

					//console.log(choroplethSeries);
					var xbase = chart.chartWidth - 200;
					var ybase = 10;
					var yoff = 0;
					var xoff = 0;
					if (chart.chartHeight > 500) {
						xbase = 20;
						ybase = 410;
					}
					fn.addLegendLabel(chart, "<b>Stadt Basel</b>", xbase, ybase, undefined, false, 'left');
					for (let i = 0; i < pieSizeSeries.data.length; i++) {
						if (pieSizeSeries.data[i].Wohnviertel_Id < 10) xoff = 8; else xoff = 0;
						if (chart.chartHeight > 500 && pieSizeSeries.data[i].Wohnviertel_Id == 13) {
							ybase = ybase - 12 * 16;
							xbase = 200;
						}
						if (pieSizeSeries.data[i].Wohnviertel_Id == 20) {
							fn.addLegendLabel(chart, "<b>Gemeinden</b>", xbase + xoff, ybase + 20 + i * 16 + 5, undefined, false, 'left');
							yoff = 25;
						}
						//console.log(pieSizeSeries.data[i]);
						fn.addLegendLabel(chart, pieSizeSeries.data[i].Wohnviertel_Id + ': ' + pieSizeSeries.data[i].properties.LIBGEO,
							xbase + xoff, ybase + 20 + i * 16 + yoff, undefined, false, 'left');
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
