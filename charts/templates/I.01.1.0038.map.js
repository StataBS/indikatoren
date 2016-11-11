chartOptions['I.01.1.0038.map'] = {
	"tooltip": {
		"pointFormatter": function(){
			if (this.series.data[this.x].name === undefined) {
				return '<span style="color:{series.color}"></span>';
			}
			else {
				return '<span style="color:{series.color}">' + this.series.data[this.x].name + '</span>: <b>'+Highcharts.numberFormat((this.value*100),2)+'%</b><br/>Rang <b>' + parseInt(this.x + 1) + '</b>';
			}
		}
	},
	"colorAxis": {
		"labels": {
			"formatter": function () {
				return Highcharts.numberFormat((this.value*100),0)+'%'; 
			}
		}
	},			
	"series": [
		{
			"name": "Wohnviertel", 
			"animation": true,
			"mapData": geojson_wohnviertel,
			"borderColor": "#fbfbfb",		
			"joinBy": ['TXT', 'Wohnviertel Id'],
			"keys": ['Wohnviertel Id', 'value'],
			"states": {
				"hover": {
					"color": '#BADA55'
				}
			}
		}	
	],
	/* series with fixed data that should be added to the series object after merging with csv data */
	"afterSeries": [
		{
			"name": "Rhein",
			"animation": true,
			"data": rheinData, 
			"color": "#008AC3",    
			"borderColor": "#fbfbfb",		              
		}
	]
};

//Colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199