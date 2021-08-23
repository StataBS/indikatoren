/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function(){
    return {
    	
		"colorAxis": {
			min: 0.10,
			max: 0.50,
			"minColor": "#ECE1D0",
			"maxColor": "#3A2012",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value*100),0)+'%'; 
				}
			}
		},
		"legend": {
			"title": {
				"text": "Seit mindestens zehn Jahren an der<br/>gleichen Adresse lebende Personen in %",
					style: {'fontWeight':' bold'} 
			}
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

       /*exporting: {
            buttons: {
                customButton: {
                    text: 'Kategorische Legende',
                      onclick: function () {
                        onclick=window.open("https://stata-test-richtplan-larafaelivrin.c9users.io//chart-details.html?id=6385&indikatorensetView=true&suppressNumberInTitle=true");
                    }
                    //onclick: function () {
                    //    alert('You pressed the button!');
                    //}
                }
            }
        }*/
	chart: {
			events: {
	            load: function (e) {
	            	this.credits.element.onclick = function() {};
	                var chart = this;
	                var fn = this.options.customFunctions;
	                //define new Highcharts template "mappie"
	                fn.addLegendRectangle(chart, 220, 285, 260, 75, '#fbfbfb');
	            }
			}
		}
	};
}());