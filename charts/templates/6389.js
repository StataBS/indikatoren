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
                to:3.999,
                color: '#D7E8D2',
                name:  "<span style='color: rgba(0,0,0,0)'>12,5</span> < <span style='color: rgba(0,0,0,0)'>0</span>4,0"
            }, {
                from: 4,
                to: 5.9999,
                color: '#73B97C',
                name: "<span style='color: rgba(0,0,0,0)'>0</span>4,0 − <span style='color: rgba(0,0,0,0)'>0</span>5,9"
            }, {
                from: 6.0,
                to: 9.999,
                 color: '#68AB2B',
                 name: "<span style='color: rgba(0,0,0,0)'>0</span>6,0 − <span style='color: rgba(0,0,0,0)'>0</span>9,9"
            },{
                from: 10,
                to: 12.99,
                 color: '#007A2F',
                 name: "10,0 − 12,9"
            },{
                from: 13.0,
                color: '#0A3B19',
                name:  "<span style='color: rgba(0,0,0,0)'>12,5</span> ≥ 13,0"
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
							name: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 <\u00A0\u00A0 500",
							from: 0,
							to: 499.9, 
							diameter: 5
						},
						{
							name: "500 − 1 199",
							from: 500,
							to: 1199.9,
							diameter: 10
						},
						{
							name: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0  ≥  1 200",
							from: 1200,							
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
	                fn.addLegendRectangle(chart, 355, 212, 105, 125, '#fbfbfb');
	        		fn.addLegendTitle(chart, choroplethSeries.name.replace("pro", "pro<br/>"), 245, 210);
	                fn.addLegendTitle(chart, pieSizeSeries.name, 355, 210);
	                
	            	fn.addLegendCircle(chart, 373, 266, 0.5*pieSizeCatConfig[0].diameter, '#7F5F1A');
	                fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 455, 255, undefined, false, 'right');
	                fn.addLegendCircle(chart, 373, 285, 0.5*pieSizeCatConfig[1].diameter, '#7F5F1A');
	                fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 455, 275, undefined, false, 'right');
	                fn.addLegendCircle(chart, 373, 310, 0.5*pieSizeCatConfig[2].diameter, '#7F5F1A');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 455, 300, undefined, false, 'right');
					
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

