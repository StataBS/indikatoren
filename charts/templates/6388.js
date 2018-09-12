/*  
	global Highcharts
	global geojson_wohnviertelEPSG2056 
	global $
*/
(function(){

    return {
		"legend": {
    		useHTML: false,
			"title": {
				"text": null, 
				style: {'fontWeight':' bold'}
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "right",
			"x": -140,
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
                to:15.99,
                color: '#ECE1D0',
                name:  "<span style='color: rgba(0,0,0,0)'>15,0</span> < 16,0"
            }, {
                from: 16.0,
                to: 19.999,
                color: '#C4AB91',
                name: "16,0 − 19,9"
            }, {
                from: 20.0,
                to: 21.9,
                 color: '#9E7C59',
                 name: "20,0 − 21,9"
            },{
                from: 22.0,
                to: 23.999,
                 color: '#67401E',
                 name: "22,0 − 23,9"
            },{
                from: 24.0,
                color: '#3A2012',
                name:  "<span style='color: rgba(0,0,0,0)'>24,0</span> ≥ 24,0"
            }], 
        },
        "data": {
		    "seriesMapping": [
		      {
		      	x: 0, y: 2
		      },
		      {
		      	//2nd series: use y values from column 3
		      	y: 3
		      }
		    ]
        },
		"series": [
			{
				"name": "Wohnviertel", 
				"animation": true,
				"mapData": geojson_wohnviertelEPSG2056,
				"borderColor": "#fbfbfb",		
				"joinBy": ['TXT', 'Wohnviertel_Id'],
				"keys": ['Wohnviertel_Id', 'value'],
				"states": {
					"hover": {
						"enabled": false,
						"borderColor": '#BADA55',
						"brightness": 0
					}
				}, 
				tooltip: {
					pointFormatter: function(){
						//console.log(this);
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),1) + '</b><br/>';
					}
				}
			}, 
			{
				"visible": false
			}
		],
		chart: {
			events: {
	            load: function (e) {
	            	
	            	this.credits.element.onclick = function() {};

	                var chart = this;
	                var fn = this.options.customFunctions;
	                //define new Highcharts template "mappie"
					fn.defineTemplate();
					
					var choroplethSeries = chart.series[1];
					var pieSizeSeries = chart.series[2];
					
					//pie diameters in px
					var maxPieDiameter = 20;
					
					//configuration of categorical pie sizes
					var pieSizeCatConfig = 
					[
						{
							name: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 < 1 000",
							from: 0,
							to: 999.9, 
							diameter: 5
						},
						{
							name: '1 000 − 2 299',
							from: 1000,
							to: 2299.9,
							diameter: 10
						},
						{
							name: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ≥  2 300",
							from: 2300,							
							to: 1000000000,
							diameter: 20
						}
					];
					
					//define different colors for positive and negative values
	                var color = function(value){
					return (value >= 0) ? '#C9D6DB' : '#C9D6DB';	                };					
					
					//define chart-specific details
					var pieSeriesConfig = function(data, correspondingMapSeriesItem, color){
						return {
	                        sizeFormatter: function () {
	                            var fn = this.chart.options.customFunctions;
								//return fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter); 
								return fn.pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
	                        },
	                        tooltip: {
	                            pointFormatter: function () {
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),0) + '</b><br/>';
	                            }
	                        }
	                    };
					};
					
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);

	                //Add manually drawn legend
	                fn.addLegendRectangle(chart, 243, 212, 105, 125, '#fbfbfb');
	                fn.addLegendRectangle(chart, 355, 212, 115, 125, '#fbfbfb');
	        		fn.addLegendTitle(chart, "Anteil über <br/>  64-Jähriger in %", 245, 210);
	                fn.addLegendTitle(chart, "Anzahl über <br/>  64-Jähriger", 355, 210);
	                
	                fn.addLegendCircle(chart, 373, 266, 0.5*pieSizeCatConfig[0].diameter, '#C9D6DB');
	                fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 465, 255, undefined, false, 'right');
	                fn.addLegendCircle(chart, 373, 285, 0.5*pieSizeCatConfig[1].diameter, '#C9D6DB');
	                fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 465, 275, undefined, false, 'right');
	                fn.addLegendCircle(chart, 373, 310, 0.5*pieSizeCatConfig[2].diameter, '#C9D6DB');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 465, 300, undefined, false, 'right');
					
					
					//fn.addLegendSquare(chart, 565, 240, 10, '#7F5F1A');
					//fn.addLegendLabel(chart, 'Zunahme', 580, 236);
					//fn.addLegendSquare(chart, 565, 256, 10, '#FABD24');
					//fn.addLegendLabel(chart, 'Abnahme', 580, 252);
				
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart, '#cccccc');
	            }
			}
		}
	};
}());

