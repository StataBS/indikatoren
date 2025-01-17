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
			"align": "left",
			"x": 230,
			"y": -15,
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
                to:3.999,
                color: '#D3E2E4',
                name:  "<span style='color: rgba(0,0,0,0)'>00,0 </span> <<span style='color: rgba(0,0,0,0)'>...</span>4,0"
            }, {
                from: 4,
                to: 7.999,
                color: '#A8C3CA',
                name: "<span style='color: rgba(0,0,0,0)'>0</span>4,0 −<span style='color: rgba(0,0,0,0)'>0</span> 7,9"
            }, {
                from: 8,
                to: 10.999,
                 color: '#689199',
                 name: "<span style='color: rgba(0,0,0,0)'>1</span>8,0 − <span style='color: rgba(0,0,0,0)'></span> 10,9"
            },{
                from: 11,
                to: 15.999,
                 color: '#246370',
                 name: "11,0 − 15,9"
            },{
                from: 16.0,
                color: '#083038',
                name:  "<span style='color: rgba(0,0,0,0)'>00,0</span> ≥ 16,0"
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
	            
					var lp = { //legendPosition
						blockChoropleth: {
							x: 230, // Customizable
							y: -15,  // Customizable
							title: {
								y: [232, 217, 202],
								x: 245, // Customizable
							}
						},
						blockSymbol: {
							x: [378,373], // Customizable
							y: [277, 297, 317, 337], // Customizable
							y3C: [276, 303, 330],
							numbers: {
								x: 0,
								y: [267, 287, 310, 330], // Customizable
								y3C: [267, 292, 317]
							},
							title: {
								x: 0
							}
						}
					};
					
					lp.blockSymbol.numbers.x = lp.blockSymbol.x[0] + 90;
					
					lp.blockSymbol.title.x = lp.blockSymbol.x[0] - 10;
					var i;
					for (i = 0; i < 3; i++) {
						lp.blockChoropleth.title.y[i] -= lp.blockChoropleth.y;
					};
					

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
							name: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 < 100",
							from: 0,
							to: 100, 
							diameter: 5
						},
						{
							name: ' 100 − 299',
							from: 100,
							to: 299,
							diameter: 10
						},
						{
							name: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ≥  300",
							from: 300,							
							to: 1000000000,
							diameter: 20
						}
					];
					
					//define different colors for positive and negative values
	                var color = function(value){
	                	return (value >= 0) ? '#7F5F1A' : '#FABD24';
	                };					
					
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
					fn.addLegendRectangle(chart, 355, 212, 120, 125, '#fbfbfb');              
	        		fn.addLegendTitle(chart, choroplethSeries.name.replace(" ", "<br/>"), lp.blockChoropleth.title.x, lp.blockChoropleth.title.y[1]);
	                fn.addLegendTitle(chart, pieSizeSeries.name.replace("lfe", "lfe-<br/>"), lp.blockSymbol.title.x, lp.blockChoropleth.title.y[1]);
	                
					fn.addLegendCircle(chart, lp.blockSymbol.x[0], lp.blockSymbol.y3C[0], 0.5*pieSizeCatConfig[0].diameter, '#7F5F1A');
	                fn.addLegendLabel(chart, pieSizeCatConfig[0].name, lp.blockSymbol.numbers.x, lp.blockSymbol.numbers.y3C[0], undefined, false, 'right');
	                fn.addLegendCircle(chart, lp.blockSymbol.x[0], lp.blockSymbol.y3C[1], 0.5*pieSizeCatConfig[1].diameter, '#7F5F1A');
	                fn.addLegendLabel(chart, pieSizeCatConfig[1].name, lp.blockSymbol.numbers.x, lp.blockSymbol.numbers.y3C[1], undefined, false, 'right');
	                fn.addLegendCircle(chart, lp.blockSymbol.x[0], lp.blockSymbol.y3C[2], 0.5*pieSizeCatConfig[2].diameter, '#7F5F1A');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, lp.blockSymbol.numbers.x, lp.blockSymbol.numbers.y3C[2], undefined, false, 'right');
				
					
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

