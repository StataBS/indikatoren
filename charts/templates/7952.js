/* 
global Highcharts
global geojson_UA_Gemeinden_100
global rheinData
*/
(function () {
	return {
		"tooltip": {
			useHTML: true,
			"formatter": function (args) {
				if (!this.point["GMDNR"]) {
					//Grenzen, Massstab
					return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
				} else {
					return '<span style="color:' + this.color + ';">\u25CF </span>Gemeinde: <b>' + this.point.properties.GMDNAME + '</b>';
				}
			}
		},
		"legend": {
			itemWidth: 300
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
		]
	};
}());