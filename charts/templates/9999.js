/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function(){
    return {
		"colorAxis": {
			"minColor": "#f4ebf3",
			"maxColor": "#5b2659",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value/1000),0); 
				}
			}
		},
		"legend": {
			"title": {
				"text": "in tausend Einheiten"
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