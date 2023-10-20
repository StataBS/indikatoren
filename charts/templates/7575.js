/*  
/*  
	global Highcharts
	global geojson_wohnviertelEPSG2056 
	global $
*/
(function () {

	return {
		"legend": {
			y: -250,
			x: 10,
			symbolWidth: 150,
			"title": {
				"text": ""
			}
		},
		"colorAxis": {
			"min": 0,
			"minColor": "#eff6e9",
			"maxColor": "#0A3B19",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value*100), 2);
				}
			}
		},
		"data": {
			"seriesMapping": [
				//default tsv: first column = GeoID, second = choroplethe, 3rd = bubble
				{
					//1st series: y values from column 3
					y: 3
				},
				{
					//2nd series: use y values from column 2
					x: 1, y: 1
				}
			]
		},
		"series": [
			{
				name: "Gemeinden",
				animation: true,
				mapData: geojson_GemeindenBSBL_EPSG_2056,
				borderColor: "#fbfbfb",
				joinBy: ['GeoID', 'GeoID'],
				keys: ['GeoID', 'value'],
				"states": {
					"hover": {
						"enabled": true,
						"borderColor": '#aaa',
						"brightness": 0,
					}
				},
				//choroplethe-tooltip
				tooltip: {
					//headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> Leerwohnungsquote </span><br/>',
					pointFormatter: function () {
						return this.properties.GeoName + ': <b>' + Highcharts.numberFormat((this.value*100), 2) + '  </b><br/>';
					},
					useHTML: true
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

					this.credits.element.onclick = function () { };

					var chart = this;
					var fn = this.options.customFunctions;
					//define new Highcharts template "mappie"
					fn.defineTemplate();

					var choroplethSeries = chart.series[1];
					var pieSizeSeries = chart.series[2];
					//pieSizeSeries.colorKey="value";

					//pie diameters in px
					var maxPieDiameter = 20;

					var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);

					//define different colors for positive and negative values
					var color = function (value) {
						return (value >= 0) ? '#7F5F1A' : '#FABD24';
					};

					//define chart-specific details
					var pieSeriesConfig = function (data, correspondingMapSeriesItem, color) {
						return {
							sizeFormatter: function () {
								var fn = this.chart.options.customFunctions;
								var yAxis = chart.yAxis[0], zoom = (yAxis.dataMax - yAxis.dataMin) / (yAxis.max - yAxis.min);
								return zoom * fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter);
								//return fn.pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
							},
							//Overwrite pie-tooltip from template
							/*tooltip: {
								pointFormatter: function () {
									return correspondingMapSeriesItem.properties.GeoName + ': <b>' + Highcharts.numberFormat((this.v), 0) + ' </b><br/>';
								}
							}*/
						};
					};


					var pieSizeCatConfig;
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);

					//pie values in legend
					var minValueInLegend = 1;
					var maxValueInLegend = 1200;

					//Add manually drawn legend		
					fn.addLegendRectangle(chart, 250-260, 220-170, 230-70, 72, '#fbfbfb', 'pieLegend');
					fn.addLegendRectangle(chart, 250+70, 300-250, 230-50, 62, '#fbfbfb');
					//fn.addLegendTitle(chart, pieSizeSeries.name + "", 265, 220, 'pieLegend pieLegendHideOnZoom');

					fn.addLegendCircle(chart, 280-260, 255-170, 0.5 * fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), '#7F5F1A', 'pieLegendStayeOnZoom');
					//fn.addLegendLabel(chart, Highcharts.numberFormat((minValueInLegend),0,","," "), 300, 245, 'pieLegendRecalculateOnZoom', false, minValueInLegend);
					fn.addLegendCircle(chart, 280-260, 280-170, 0.5 * fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), '#7F5F1A', 'pieLegendStayeOnZoom');
					//fn.addLegendLabel(chart, Highcharts.numberFormat((maxValueInLegend),0,"."," "), 300, 270, 'pieLegendRecalculateOnZoom', false, maxValueInLegend);

					var zoomableLabels = [];
					zoomableLabels.push({
						chart: chart,
						text: Highcharts.numberFormat((minValueInLegend), 0, ",", " "),
						x: 350-260,
						y: 245-170,
						cssClass: 'pieLegendRecalculateOnZoom',
						useHtml: false,
						initialValue: minValueInLegend,
						align: 'right',
						legendLabelZoomFormatter: function (value) {
							return Highcharts.numberFormat((value), 1, ",", " ");
						},
					});
					zoomableLabels[0].label = fn.addLegendLabel(zoomableLabels[0].chart, zoomableLabels[0].text, zoomableLabels[0].x, zoomableLabels[0].y, zoomableLabels[0].cssClass, zoomableLabels[0].useHtml, zoomableLabels[0].align);
					//copy first label but overwrite some properties
					zoomableLabels.push($.extend({}, zoomableLabels[0], {
						text: Highcharts.numberFormat((maxValueInLegend), 0, ".", " "),
						y: 270-170,
						initialValue: maxValueInLegend,
					}));
					zoomableLabels[1].label = fn.addLegendLabel(zoomableLabels[1].chart, zoomableLabels[1].text, zoomableLabels[1].x, zoomableLabels[1].y, zoomableLabels[1].cssClass, zoomableLabels[1].useHtml, zoomableLabels[1].align);

					fn.addLegendLabelbold(chart, 'Anzahl Leerwohnungen', 265-260, 220-170, 'pieLegendStayeOnZoom');
					fn.addLegendTitle(chart, 'Leerwohnungsquote in %', 265+60, 300-250);

					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);

					chart.update(
						{
							xAxis: {
								events: {
									//recalculate and hide svg elements on zoom
									afterSetExtremes: function (e) {
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