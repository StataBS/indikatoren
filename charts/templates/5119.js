/*  global rheinData
	global Highcharts
	global geojson_wohnviertel
*/
(function(){
	    return {
		"colorAxis": {
			"minColor": "#eff6e9",
			"maxColor": "#4b7b1f",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value*100),0)+'%'; 
				}
			}
		},
        "data": {
		    "seriesMapping": [
		      {
		      	x: 0, y: 1
		      },
		      {
		      	//2nd series: use x values from column 2
		      	x: 2
		      }		      
		    ]
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
						"enabled": false,
						"borderColor": '#BADA55',
						"brightness": 0
					}
				}
			}, 
			{
				"visible": false
			}
		],
		/* series with fixed data that should be added to the series object after merging with csv data */
		"afterSeries": [
			{
				"name": "Rhein",
				"animation": true,
				"data": rheinData, 
				"color": "#008AC3",    
				"borderColor": "#fbfbfb"
			}
		]
	}
}());