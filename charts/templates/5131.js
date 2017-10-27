/*  global rheinData
	global Highcharts
	global geojson_wohnviertel
*/
(function(){
    return {
		"colorAxis": {
			//"min": undefined,
			"minColor": "#eff6e9",
			"maxColor": "#4b7b1f",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value),1); 
				}
			}
		},
        "tooltip": {
            "formatter": function(args){
        		if (this.series.data[this.point.x].name === undefined) {
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
                        this.point.name +': <b>' + Highcharts.numberFormat((this.point.value),3) + '</b><br/>' + 
                        'Rang <b>' + other_point.value + '</b>';
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
				"joinBy": ['TXT', 'Wohnviertel_Id'],
				"keys": ['Wohnviertel_Id', 'value'],
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
	};
}());