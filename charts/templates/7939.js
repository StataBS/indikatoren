/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function () {
	return {
		"legend": {
			useHTML: false,
			"title": {
				"text": "Mittlere Anzahl<br>Tropennächte"
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "right",
			"x": -337,
			"y": -65,
			itemMarginBottom: 2,
			symbolRadius: 0,
		},
		colorAxis: {
			dataClassColor: 'category',
			dataClasses: [{
				from: 0,
				to: 9,
				color: '#D3E2E4',
				name: "< 10"
			}, {
				from: 9.5,
				to: 10.5,
				color: '#A8C3CA',
				name: "<span style='color: rgba(0,0,0,0)'>.0</span>10"
			}, {
				from: 10.6,
				to: 11.5,
				color: '#689199',
				name: "<span style='color: rgba(0,0,0,0)'>.0</span>11"
			}, {
				from: 11.6,
				to: 12.5,
				color: '#246370',
				name: "<span style='color: rgba(0,0,0,0)'>.0</span>12"
			}, {
				from: 13,
				color: '#083038',
				name: "≥ 13"
			}],
		},
		"data": {
			"seriesMapping": [
				{
					x: 0, y: 3
				}
			]
		},
		"series": [
			{
				"name": "Wohnviertel",
				"animation": true,
				"mapData": geojson_wohnviertelEPSG2056,
				"borderColor": "#fbfbfb",
				"joinBy": ['TXT', 'Wohnviertel Id'],
				"keys": ['Wohnviertel Id', 'value'],
				"states": {
					"hover": {
						"enabled": false,
						"borderColor": '#BADA55',
						"brightness": 0
					}
				}
			}

		],
	};
}());


