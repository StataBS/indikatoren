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
					return '<span style="font-size: 0.85em;"><b> ' + this.point.name + '</b><br/>' +
						this.point.address + '<br/>' +
						this.point.spez + '</span><br/>' +
						'<b>' + this.point.z + '</b>&nbsp;Plätze';
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
					spez: 3,
					z: 4,
					address: 6
				},
				{
					lat: 0,
					lon: 1,
					name: 2,
					spez: 3,
					z: 5,
					address: 6
				},
			]
		},
		legend: {
			enabled: true,
			width: '200px',
			itemMarginBottom: 5,
			title: {
				text: "Anzahl Plätze",
				style: {
					"fontWeight": "bold",
					fontSize: "12px"
				}
			},
			labelFormatter: function () {
				if (this._i == 2) return "Allgemeine<br>Tagespflegeeinrichtungen";
				if (this._i == 3) return "Spezialisierte<br>Tagespflegeeinrichtungen";
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
				connectorDistance: 20,
				labels:{
					format: '{value:.0f}'
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
				name: 'Allgemeine Tagesstruktur',
				minSize: 7,
				maxSize: '6%',
				marker: {
					//radius: this.point.value
					fillColor: '#009884',
					fillOpacity: 0.6,
					lineColor: '#ffffff'
				},
				dataLabels: {
					enabled: false
				},
				showInLegend: true,
			},
			{
				type: 'mapbubble',
				id: 'points',
				name: 'Spezialisierte Tagesstruktur',
				minSize: 7,
				maxSize: '6%',
				marker: {
					//radius: this.point.value
					fillColor: '#ed802f',
					fillOpacity: 0.6,
					lineColor: '#ffffff'
				},
				dataLabels: {
					enabled: false
				},
				showInLegend: true
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