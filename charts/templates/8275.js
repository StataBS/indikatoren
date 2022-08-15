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
			},
			"layout": "vertical",
			"verticalAlign": "top",
			"align": "left",
			"x": 230,
			"y": 250,
			itemMarginBottom: 2,
			symbolRadius: 0,
		},
		colorAxis: {
			dataClassColor: 'category',
			dataClasses: [{
				from: 0,
				to: 0.69999,
				color: '#D7E8D2',
				name: "<span style='color: rgba(0,0,0,0)'>0,34</span> < 0,70"
			}, {
				from: 0.7,
				to: 1.09999,
				color: '#73B97C',
				name: "0,70 −  1,09"
			}, {
				from: 1.1,
				to: 1.34999,
				color: '#68AB2B',
				name: "1,10 − 1,34"
			}, {
				from: 1.35,
				to: 1.49999,
				color: '#007A2F',
				name: "1,35 − 1,49"
			}, {
				from: 1.5,
				color: '#0A3B19',
				name: "<span style='color: rgba(0,0,0,0)'>1,29</span> ≥ 1,50"
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
					pointFormatter: function () {
						//console.log(this);
						return this.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.value), 2) + '</b><br/>';
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
					console.log(this.legend);
					//legend positioning
					var lx = this.legend.options.x, //230
						ly = this.legend.options.y, //250

						tr = 2, //number of title rows
						lht = 15, //line-height title
						lhc = 25, //line-height circles
						col_pos = '#FABD24',
						col_neg = '#FFDA80',
						lh = this.legend.legendHeight + tr * lht + 5, //background height 
						lcw = this.legend.legendWidth + 3, //background width choropleth block
						sox = this.legend.legendWidth + 30, //x-offset symbol block
						lsw = this.chartWidth - lx - this.legend.legendWidth - 30; //background width symbol block


					var lp = { //legendPosition 
						blockChoropleth: {
							x: lx + 15,
							y: ly - (tr * lht),
							ty: [ly - lht, ly - 2 * lht, ly - 3 * lht],
							tx: lx + 15,
						},
						blockSymbol: {
							x: lx + sox,
							cx: lx + sox + 13, //circles x
							cy: [ly + 3 + lhc, ly + 3 + 2 * lhc, ly + 3 + 3 * lhc], //circles y
							nx: lx + 230, //numbers x
							ny: [ly + 17, ly + 17 + lhc, ly + 17 + 2 * lhc], //numbers y
							tx: lx + sox
						}
					};

					/*lp.blockSymbol.nx = lp.blockSymbol.x[0] + 90;
					lp.blockSymbol.title.x = lp.blockSymbol.x[0] - 10;
					var i;
					for (i = 0; i < 3; i++) {
						//lp.blockChoropleth.title.y[i] -= lp.blockChoropleth.y;
					};
*/
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
					var color = function (value) {
						return (value >= 0) ? col_pos : col_neg;
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
					fn.addLegendRectangle(chart, lp.blockChoropleth.x, lp.blockChoropleth.y, lcw, lh, '#fbfbfb');
					fn.addLegendRectangle(chart, lp.blockSymbol.x, lp.blockChoropleth.y, lsw, lh, '#fbfbfb');

					fn.addLegendTitle(chart, choroplethSeries.name.replace("ngs", "ngs-<br/>"), lp.blockChoropleth.tx, lp.blockChoropleth.ty[1]);
					fn.addLegendTitle(chart, pieSizeSeries.name.replace("ende ", "ende<br/>"), lp.blockSymbol.x, lp.blockChoropleth.ty[1]);

					fn.addLegendCircle(chart, lp.blockSymbol.cx, lp.blockSymbol.cy[0], 0.5 * pieSizeCatConfig[0].diameter, col_pos);
					fn.addLegendCircle(chart, lp.blockSymbol.cx, lp.blockSymbol.cy[1], 0.5 * pieSizeCatConfig[1].diameter, col_pos);
					fn.addLegendCircle(chart, lp.blockSymbol.cx, lp.blockSymbol.cy[2], 0.5 * pieSizeCatConfig[2].diameter, col_pos);
					fn.addLegendLabel(chart, pieSizeCatConfig[0].name, lp.blockSymbol.nx, lp.blockSymbol.ny[0], undefined, false, 'right');
					fn.addLegendLabel(chart, pieSizeCatConfig[1].name, lp.blockSymbol.nx, lp.blockSymbol.ny[1], undefined, false, 'right');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, lp.blockSymbol.nx, lp.blockSymbol.ny[2], undefined, false, 'right');

					//fn.addLegendSquare(chart, 565, 240, 10, col_neg);
					//fn.addLegendLabel(chart, 'Zunahme', 580, 236);
					//fn.addLegendSquare(chart, 565, 256, 10, col_pos);
					//fn.addLegendLabel(chart, 'Abnahme', 580, 252);

					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart, '#cccccc');
				}
			}
		}
	};
}());