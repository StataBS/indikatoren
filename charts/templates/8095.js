/* 
global Highcharts
global geojson_UA_Gemeinden_100
global rheinData
*/
(function () {
	return {
		"tooltip": {
			"formatter": function (args) {
				var this_point_index = this.series.data.indexOf(this.point);
				return '<span style="color:' + this.color + ';">\u25CF</span> Gemeinde: <b>' + this.point.properties.LIBGEO + '</b>';
			},
			useHTML: true
		},
		"legend": {
			"title": {
				/*"text": "in Einwohner pro km<sup>2</sup>"*/
			},
			useHTML: true,
			symbolRadius: 0,
			itemWidth: 500
		},
		colorAxis: {
			dataClassColor: 'category',
			dataClasses: [{
				from: 1,
				to: 1,
				color: '#FFBB58',
				name: "Kernstadt"
			}, {
				from: 2,
				to: 2,
				color: '#FF8028',
				name: "Übrige Agglomeration CH"
			}, {
				from: 3,
				to: 3,
				color: '#DC440E',
				name: "Agglomeration D"
			}, {
				from: 4,
				to: 4,
				color: '#B00000',
				name: "Agglomeration F"
			}],
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
				"name": "Perimeter",
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
		chart: {
			width: 665
		}
	};
}());