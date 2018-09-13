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
                to:4999.999,
                color: '#E7CEE2',
                name:  "<span style='color: rgba(0,0,0,0)'>5 0000</span> < <span style='color: rgba(0,0,0,0)'>0</span>5 000"
            }, {
                from: 5000,
                to: 9999.999,
                color: '#B375AB',
                name: "<span style='color: rgba(0,0,0,0)'>0</span>5 000 − <span style='color: rgba(0,0,0,0)'>0</span>9 999"
            }, {
                from: 10000,
                to: 29999.999,
                 color: '#923F8D',
                 name: "10 000 − 29 999"
            },{
                from: 30000,
                to:39999.999,
                 color: '#662673',
                 name: "30 000 − 39 999"
            },{
                from: 40000,
                color: '#2E1435',
                name:  "<span style='color: rgba(0,0,0,0)'>100 00</span> ≥ 40 000"
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


