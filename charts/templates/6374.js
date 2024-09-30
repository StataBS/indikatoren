/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function(){
    return {
		"colorAxis": {
			min: 0,
			max: 110000,
			tickAmount: 5,
			/*tickInterval: 30000,*/
			"minColor": "#E7CEE2",
			"maxColor": "#2E1435",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value/1000),0); 
				}
			}
		},
		"legend": {
			"title": {
				"text": "Median pro Veranlagung <br/> in 1000 Fr.",
					style: {'fontWeight':' bold'} 
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
	chart: {
			events: {
	            load: function (e) {
	            	this.credits.element.onclick = function() {};
	                var chart = this;
	                var fn = this.options.customFunctions;
	                //define new Highcharts template "mappie"
	                fn.addLegendRectangle(chart, 260, 280, 220, 80, '#fbfbfb');
	            }
			}
		}
	};
}());