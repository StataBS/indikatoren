/*  global rheinData
	global Highcharts
	global geojson_wohnviertel
*/
(function(){
    return {
		"colorAxis": {
			"minColor": "#eff4f4",
			"maxColor": "#4f6e75",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value*100),1)+'%'; 
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
			}, 
			{
				visible: false,
				showInLegend: false,
    			colorAxis: false
			}
		]
	};
}());