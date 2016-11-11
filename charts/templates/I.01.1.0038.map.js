//var rheinData = Highcharts.geojson(geojson_rhein, 'map');

chartOptions['I.01.1.0038.map'] = {
	"tooltip": {
		"pointFormatter": function(){
			return '<span style="color:{series.color}">' + this.series.data[this.x].name + '</span>: <b>'+Highcharts.numberFormat((this.value*100),2)+'%</b><br/>Rang <b>' + parseInt(this.x + 1) + '</b>'
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
		/*,
		{
			"name": "Rhein", 
			"data": rheinData
		}	
		*/	
	]
};

//Colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199