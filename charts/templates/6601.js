/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function(){
    return {
		"colorAxis": {
			//"minColor": "#CD9C00",
			//"maxColor": "#007A2F",
		stops: [
            [0, '#CD9C00'],
            [0.25, '#F2F2F2'],
            [0.9, '#007A2F']
        ],
			min: -10,
			max: 30,
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value),0); 
				}
			}
		},
		"legend": {
			"title": {
				"text": "Durchschnittliche Abweichung vom <br> Referenzwohnviertel Iselin in %"
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
        "tooltip": {
            formatter: function(args){
        		if (! this.point["Wohnviertel Id"]) {
        		    //Rhein
        			return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
        		}
                else {
                    //Wohnviertel
                    return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' + 
                    	//special case for Riehen and Bettingen together in this chart
                        ((this.point.properties.TXT == "20" || this.point.properties.TXT == "30") ? "Riehen und Bettingen" : this.point.properties.LIBGEO) +': <b>' + Highcharts.numberFormat((this.point.value),1) + '%</b><br/>';
                }
            }
        },
	};
}());