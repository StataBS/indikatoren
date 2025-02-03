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