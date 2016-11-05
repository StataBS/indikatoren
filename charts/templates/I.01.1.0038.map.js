chartOptions['I.01.1.0038.map'] = {
	title: {
		text: 'GeoJSON in Highmaps'
	},
	colorAxis: {
	},
	series: [{
		/*data: data,*/
		mapData: geojson_wohnviertel,
		joinBy: ['name', 0],
		keys: ['name', 'value'],
		name: 'Random data',
		states: {
			hover: {
				color: '#BADA55'
			}
		}
	}]
};

//Colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199