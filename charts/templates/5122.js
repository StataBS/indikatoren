/*  global rheinData
	global Highcharts
	global geojson_wohnviertel
*/
(function(){
    return {
        "tooltip": {
            "formatter": function(args){
        		if (! this.point["Wohnviertel Id"]) {
        		    //Rhein
        			return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
        		}
                else {
                    //Wohnviertel
                    var this_point_index = this.series.data.indexOf(this.point);
                    var other_series_index = this.series.index == 0 ? 1 : 0; // assuming 2 series
                    var other_series = args.chart.series[other_series_index];
                    var other_point = other_series.data[this_point_index];
                    return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' + 
                        this.point.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.point.value),0) + ' Fr.</b><br/>' + 
                        'Rang <b>' + other_point.value + '</b>';
                }
            }
        },    	
		"legend": {
			"title": {
				"text": "in 1000 Fr."
			}
		},
		"colorAxis": {
			min: 0,
			max: 80000,
			tickInterval: 20000,
			"minColor": "#E7CEE2",
			"maxColor": "#2E1435",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value / 1000), 0); 
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
				"visible": false
			}
		]
	};
}());