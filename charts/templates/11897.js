(function () {
	return {
		plotOptions: {
			series: {
				showInLegend: false
			}
		},
		"tooltip": {
			"formatter": function (args) {
				if (!this.point["lat"]) {
					//Rhein
					return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
				}
				else {
					return '<span style="font-size: 0.85em;"><b>'+ this.point.name + '</b></span>' +
						//'<br>' + this.point.address + '</span><br/>' +
						'<br><b>' + Highcharts.numberFormat((this.point.z),0) + '</b> stationäre Austritte';
				}
			}
		},
		"data": {
			"seriesMapping": [
				//default tsv: first column = GeoID, second = choroplethe, 3rd = bubble
				{
					lat: 0,
					lon: 1,
					name: 2,
					z: 3,
					//address: 5
				},
			]
		},
		legend: {
			enabled: true,
			width: '200px',
			itemMarginBottom: 5,
			title: {
				text: "Spitalaustritte",
				style: {
					"fontWeight": "bold",
					fontSize: "12px"
				}
			},
			labelFormatter: function () {
				if (this._i == 2) return "Spitäler";
				//				if (this._i == 2)	return "xxx";
			},
			itemStyle: {
				fontWeight: "normal"
			},
			bubbleLegend: {
				enabled: true,
				borderColor: '#ffffff',
				borderWidth: 1,
				color: '#bbbbbb',
				connectorColor: '#cccccc',
				connectorDistance: 25,
				labels: {
					//format: '{value:.0f}'
					formatter: function (args) {
						return Highcharts.numberFormat((this.value),0);
					}
				}
			}
		},
		"colorAxis": {
			showInLegend: false
		},
		beforeSeries: [
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
					}
				},
				nullColor: '#cccccc',
			},
			{
				"name": "Rhein",
				"animation": true,
				"data": rheinDataEPSG2056,
				"color": "#008AC3",
				"borderColor": "#fbfbfb"
			},
		],

		"series": [
			{
				type: 'mapbubble',
				id: 'points',
				name: 'Spitaeler',
				minSize: 7,
				maxSize: '15%',
				marker: {
					//radius: this.point.value
					fillColor: '#ad7938',
					fillOpacity: 0.6,
					lineColor: '#ffffff'
				},
				dataLabels: {
					enabled: false
				},
				showInLegend: true,
			}
		],
		"afterSeries": [
			{
				name: 'Massstab',
				animation: true,
				type: 'mapline',
				data: scalebarDataEPSG2056,
				color: 'black',
				tooltip: {
					pointFormatter: function () {
						return '<br/>';
					}
				},
				dataLabels: {
					enabled: true,
					formatter: function () {
						return '1 km';
					},
					style: { fontSize: "12px", fontWeight: "normal", color: 'black' },
					y: -10
				}
			}
		],
	};
}());