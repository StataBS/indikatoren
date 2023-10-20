/*
global Highcharts
global geojson_wohnviertelEPSG2056
*/
(function(){
   return {
		"legend": {
			useHTML: false,
			"title": {
			"text": "Seit mindestens 10 Jahren an der<br/>gleichen Adresse lebende Personen<br/>in %",
			style: {'fontWeight':' bold'} 
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "right",
			"x": -5,
			"y": -10,
			itemMarginBottom: 2,
			symbolRadius: 0,
		},
         colorAxis: {
            dataClassColor: 'category',
                   dataClasses: [{
                from: 0,
                to:0.2999,
                color: '#ECE1D0',
                name:  "<span style='color: rgba(0,0,0,0)'>30,0</span> < 30,0"
            }, {
                from: 0.300,
                to: 0.319999,
                color: '#C4AB91',
                name: "30,0 − 31,9"
            }, {
                from: 0.320,
                to: 0.34999,
                 color: '#9E7C59',
                 name: "32,0 − 34,9"
            },{
                from: 0.350,
                to: 0.3999,
                 color: '#67401E',
                 name: "35,0 − 39,9"
            },{
                from: 0.400,
                color: '#3A2012',
                name:  "<span style='color: rgba(0,0,0,0)'>40,0</span> ≥ 40,0" 
            }],
		},
        "data": {
		    "seriesMapping": [
		      {
		      	x: 0, y: 1
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
                        this.point.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.point.value*100),1) + '%</b><br/>';
                }
            }
        },
	chart: {
			events: {
	            load: function (e) {
	            	this.credits.element.onclick = function() {};
	                var chart = this;
	                var fn = this.options.customFunctions;
	                //define new Highcharts template "mappie"
	                fn.addLegendRectangle(chart, 250, 215, 220, 140, '#fbfbfb');
	            }
			}
		}
	};
}());
