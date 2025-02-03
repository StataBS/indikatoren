/* 
global Highcharts
global geojson_UA_Gemeinden_100
global rheinData
*/
(function () {
	return {
		chart: {
			//marginLeft: 80
			marginTop: 80,
			events: {
				load: function (e) {
					var fn = this.options.customFunctions;
					fn.addLegendRectangle(this, 10, 60, 215, 65, '#fbfbfb');
				}
			}
		},
		"legend": {
			"title": {
				"text": "Einwohner pro km<sup>2</sup>"
			},
			useHTML: true,
		},
		"colorAxis": {
			"minColor": "#D3E2E4",
			"maxColor": "#083038",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat(this.value, 0);
				}
			}
		},
		/*		"tooltip": {
					"formatter": function (args) {
						var this_point_index = this.series.data.indexOf(this.point);
						return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' +
							this.point.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.point.value), 0) + ' Einwohner pro km<sup>2</sup></b></b>';
					},
					useHTML: true
				},
		*/
		"data": {
			"seriesMapping": [
				{
					x: 0, y: 2
				}
			]
		},
		"series": [
			{
				"name": "Bevölkerungsdichte",
				"animation": true,
				"mapData": geojson_gemeinden,
				"borderColor": "#fbfbfb",
				"keys": ['Gemeinde', 'value'],
				"joinBy": ['GMDNR', 'Gemeinde'],
				"states": {
					"hover": {
						"enabled": false,
						"borderColor": '#BADA55',
						"brightness": 0
					}
				}
			},
			{
				visible: false,
				showInLegend: false,
				colorAxis: false
			}
		],
	};
}());