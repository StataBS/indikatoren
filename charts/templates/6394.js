/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function(){
   return {
		"legend": {
    		useHTML: false,
			"title": {
			"text": "Median pro Veranlagung <br/> in Fr.",
				style: {'fontWeight':' bold'} 
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "right",
			"x": -60,
			"y": -20,
			itemMarginBottom: 2, 
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal'
				}
		},
         colorAxis: {
            dataClassColor: 'category',
                   dataClasses: [{
               	from: 0,
                to:41999,
                color: '#D3E2E4',
                name:  "<span style='color: rgba(0,0,0,0)'>00 000</span> < 42 000"
            }, {
                from: 42000,
                to: 44999,
                color: '#A8C3CA',
                name: "42 000 − 44 999"
            }, {
                from: 45000,
                to: 51999,
                 color: '#689199',
                 name: "45 000 − 51 999"
            },{
                from: 52000,
                to: 59999,
                 color: '#246370',
                 name: "52 000 − 59 999"
            },{
                from: 60000,
                color: '#083038',
                name:  "<span style='color: rgba(0,0,0,0)'>00 000</span> ≥ 60 000"
            }], 
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
	                fn.addLegendRectangle(chart, 260, 220, 160, 120, '#fbfbfb');
	            }
			}
		}		
	};
}());


