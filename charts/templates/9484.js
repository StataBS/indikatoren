/* 
global Highcharts
global geojson_UA_Gemeinden_100
global rheinData
*/
(function(){
    return {
        "tooltip": {
            "formatter": function(args){
				var this_point_index = this.series.data.indexOf(this.point);
				return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' + 
					this.point.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.point.value),1) + '%</b></b>';
			},
			useHTML: true
        },    	
		"legend": {
			"title": {
				"text": ""
			},
			useHTML: true,
			y: -400,
		},
		"colorAxis": {
			min: 10,
			max: 50,
			"minColor": "#D3E2E4",
			"maxColor": "#083038",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat(this.value, 0) + '%'; 
				}
			}
		},
        "data": {
		    "seriesMapping": [
		      {
		      	x: 0, y: 2
		      }	      
		    ]
		},
		/*chart: {
			width: 400,
			height: 208

		},*/
		"series": [
			{
				"name": "Bevölkerungsdichte", 
				"animation": true,
				"mapData": geojson_gemeinden,
				"borderColor": "#fbfbfb",		
				"keys": ['gemeindecode', 'value'],
				"joinBy": ['CODGEO', 'gemeindecode'],
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
		],
		chart: {
			width: 665
		}
	};
}());