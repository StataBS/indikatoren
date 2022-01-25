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
		"tooltip": {
			useHTML: true,
			"formatter": function (args) {
				if (!this.point["CODGEO"]) {
					//Grenzen, Massstab
					return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
				} else {
					var einheit = '%';
					return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' +
						this.point.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.point.value), 1) + einheit + '</b>';
				}
			}
		},
		"colorAxis": {
			min: 10,
			max: 50,
			"minColor": "#D3E2E4",
			"maxColor": "#083038",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat(this.value, 0) + '%';
				}
			}
		},
		"data": {
			"seriesMapping": [
				{
					x: 0, y: 2
				}
			]
		},
		"series": [
			{
				"name": "",
				"animation": true,
				"mapData": geojson_gemeinden,
				"borderColor": "#fbfbfb",
				"keys": ['gemeindecode', 'value'],
				"joinBy": ['CODGEO', 'gemeindecode'],
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