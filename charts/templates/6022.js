/*  global rheinDataEPSG2056
	global Highcharts
	global geojson_wohnviertelEPSG2056
	global $
*/
(function () {

	return {
		"legend": {
			"title": {
				"text": "Bevölkerungssaldo",

			},
			"x": 0,
			"y": 10,
		},
		"colorAxis": {
			//"min": undefined,
			//"minColor": "#eff6e9",
			//"maxColor": "#4b7b1f",
			/*stops: [
				[0, 'rgb(103,39,115)'], //0,135,135
				[0.25, 'rgb(230,230,230)'],
				[0.9, 'rgb(0,135,135)']//103,39,115
			],*/
			stops: [
				[0, "#662673"],
				[0.4999999999, "#E7CEE2"],
				[0.5, "#ffffff"],
				[0.5000000001, "#D3E2E4"],
				[1, "#246370"]
				//[0,'#FF8028'],
				//[0.25,'#FFBB58'],
				//[0.5,'#D3E2E4'],
				//[0.75,'#689199'],
				//[1,'#246370']
			],
			min: -4,
			max: 4,
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value), 0);
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
				},
				{
					x: 0,
					y: 3
				},
				{
					x: 0,
					y: 4
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
					headerFormat: '',
					useHTML: true,
					pointFormatter: function () {
						console.log(this);
						var columnSeriesIndex = this.index + 6; //+ 6 offset for extras series in the object (4 data cols, rhein, massstab)
						var columnSeries = this.series.chart.series[columnSeriesIndex];
						console.log(columnSeries);
						//put together html for tooltip
						var tooltipText = '<span style="font-size: 8pt">' + this.properties.LIBGEO + ': </span>';
						//add a tooltip row for each column
						!columnSeries.points || columnSeries.points.forEach(function (element, index, array) {
							(columnSeries.visible) ? tooltipText += ('<br><span style="color:' + element.color + '">●</span> ' + element.name + ': <b>' + Highcharts.numberFormat((element.y), 2) + '</b>') : undefined;
						});
						tooltipText += '<br><span style="color:' + this.color + '">●</span> ' + this.series.name + ': ' + '<b>' + Highcharts.numberFormat((this.value), 2) + '</b>';
						return tooltipText;
					}
				}
			},
			{
				"visible": false
			},
			{
				visible: false,
				type: 'pie',
				color: 'red',
				borderColor: 'red',
			},
			{
				visible: false,
				type: 'pie',
				color: 'blue',
				borderColor: 'blue',
			}
		],
		chart: {
			events: {
				load: function (e) {

					this.credits.element.onclick = function () { };

					var chart = this;
					var fn = this.options.customFunctions;
					//define new Highcharts template "mapcolumn"
					//fn.defineTemplate();

					var choroplethSeries = chart.series[0];
					var columnSeries = [chart.series[2], chart.series[3]];

					//var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);

					//define chart-specific details
					var columnSeriesConfig = function (correspondingMapSeriesItem, color) {
						return {
							enableMouseTracking: false,
							/*
							tooltip: {
								headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {point.key} </span><br/>',
								pointFormatter: function () {
									return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),3) + '</b><br/>';
								}
							},
							*/
						};
					};

					//define different colors for positive and negative values
					var color = function (value, index) {
						//add polyfill for ie, see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sign                    	
						if (!Math.sign) {
							Math.sign = function (x) {
								return ((x > 0) - (x < 0)) || +x;
							};
						}

						var colors = {
							'1': ['#ffaa00', '#38a800'],
							'-1': ['#a87000', '#267300'],
							'0': ['#ffaa00', '#38a800']
						};
						return colors['' + Math.sign(value)][index];
					};
					var chartHeight = 60//72;
					var columnWidth = 5;

					//put the columns on the map
					fn.drawColumns(chart, columnSeries, choroplethSeries, columnSeriesConfig, color, chartHeight, columnWidth);


					//column values in legend
					//	var legendColumnValues = [3, 1.5]; 

					//Add manually drawn legend	
					var legendTop = 235;
					var legendLeft = 365;
					fn.addLegendRectangle(chart, legendLeft - 100, legendTop, 210, 145, '#fbfbfb');
					fn.addLegendTitle(chart, legendLeft - 100, legendTop + 0, 'Wanderung/Umzug');

					//     fn.addLegendColumnChart(chart, legendLeft+35,  legendTop+45,  legendColumnValues, color, 'columnLegendHideOnZoom');

					//   fn.addLegendText(chart,        legendLeft+50, legendTop+45,  Highcharts.numberFormat(legendColumnValues[0], 0,","," "), color(legendColumnValues[0], 0), 'columnLegendHideOnZoom');
					//fn.addLegendText(chart,        legendLeft+71, legendTop+45,  ',', undefined, 'columnLegendHideOnZoom');
					// fn.addLegendText(chart,        legendLeft+63, legendTop+45,  Highcharts.numberFormat(legendColumnValues[1], 1,","," "), color(legendColumnValues[1], 1), 'columnLegendHideOnZoom');

					fn.addLegendSquare(chart, legendLeft - 95, legendTop + 22, 10, color(1, 0));
					fn.addLegendText(chart, legendLeft - 80, legendTop + 32, 'Wanderung positiv');
					fn.addLegendSquare(chart, legendLeft - 95, legendTop + 37, 10, color(-1, 0));
					fn.addLegendText(chart, legendLeft - 80, legendTop + 47, 'Wanderung negativ');

					fn.addLegendSquare(chart, legendLeft - 95, legendTop + 52, 10, color(1, 1));
					fn.addLegendText(chart, legendLeft - 80, legendTop + 62, 'Umzug positiv');
					fn.addLegendSquare(chart, legendLeft - 95, legendTop + 67, 10, color(-1, 1));
					fn.addLegendText(chart, legendLeft - 80, legendTop + 77, 'Umzug negativ');
					//fn.addLegendTitle(chart,    legendLeft-98, legendTop+100 , 'Bevölkerungssaldo');	
					//fn.addLegendTextbold(chart,    legendLeft-98, legendTop+105 , 'Bewegung pro 100 Einwohner');
					//fn.addLegendTextbold(chart,    legendLeft-98, legendTop+108 , '(Saldo total)');

					//make sure columns are hidden upon click onto column legend
					fn.AddColumnLegendClickHandler(chart);
				}
			}
		}
	};
}());