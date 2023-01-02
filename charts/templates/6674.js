/*  
	global Highcharts
	global geojson_wohnviertelEPSG2056 
	global $
*/
(function(){

    return {
		"legend": {
    		useHTML: true,
			"title": {
				"text": null, 
				style: {'fontWeight':' bold'}
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "right",
			"x": -372,
			"y": -20,
			itemMarginBottom: 2, 
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal', 
				color: "black",
				}
		},
         colorAxis: {
            dataClassColor: 'category',
        	dataClasses: [{
        		from: 0,
                to:25.999,
                color: '#D7E8D2',
                name:  "<span style='color: rgba(0,0,0,0)'>0,34</span> < 25,9"
            },{
                from:26,
                to: 29.999,
                color: '#73B97C',
                name: "26,0 −  29,9"
            },{
                from:30,
                to: 35.999,
                color: '#73B97C',
                name: "30,0 −  35,9"
            },{
                from: 36,
                to: 44.999,
                 color: '#007A2F',
                 name: "36,0 − 44,9"
            },{
                from: 45,
                color: '#0A3B19',
                name:  "<span style='color: rgba(0,0,0,0)'>0,80</span> ≥ 45,0"
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
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),3) + '</b><br/>';
					}
				}
			}, 
			{
				"visible": false
			}
		],
		chart: {
			"width": 992,
            "height": 484,
			events: {
	            load: function (e) {
	            	
	            	this.credits.element.onclick = function() {};

	                var chart = this;
	                var fn = this.options.customFunctions;
	                //define new Highcharts template "mappie"
					fn.defineTemplate();
					
					var choroplethSeries = chart.series[0];
					var pieSizeSeries = chart.series[1];
					
					//pie diameters in px
					var maxPieDiameter = 30;
					
					//configuration of categorical pie sizes
					var pieSizeCatConfig = 
	[
						{
							name: "\u00A0\u00A0\u00A0\u00A0\u00A0 < \u00A0 8,0",
							from: 0,
							to: 7.999, 
							diameter: 7.5
						},
						{
							name: ' 8,0 − 12,9',
							from: 8,
							to: 12.999,
							diameter: 15
						},
						{
							name: "\u00A0\u00A0\u00A0\u00A0\u00A0 ≥  13,0",
							from: 13,							
							to: 1000000000,
							diameter: 30
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
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),3) + '</b><br/>';
	                            }
	                        }
	                    };
					};
					
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);

	                //Add manually drawn legend
	                fn.addLegendTitle(chart, choroplethSeries.name.replace(" in", "<br/>in"), 505, 315);
	                fn.addLegendTitle(chart, pieSizeSeries.name.replace(" in", "<br/>in"), 720, 315);
	                
	             	fn.addLegendCircle(chart, 735, 382+25, 0.5*pieSizeCatConfig[0].diameter, '#7F5F1A');
	                fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 750, 370+25, true);
	                fn.addLegendCircle(chart, 735, 402+25, 0.5*pieSizeCatConfig[1].diameter, '#7F5F1A');
	                fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 750, 390+25, true);
	                fn.addLegendCircle(chart, 735, 428+25, 0.5*pieSizeCatConfig[2].diameter, '#7F5F1A');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 750, 414+25, true);
					
					fn.addLegendSquare(chart, 730, 360, 10, '#7F5F1A');
					fn.addLegendLabel(chart, 'Zunahme', 745, 354);
					fn.addLegendSquare(chart, 730, 380, 10, '#FABD24');
					fn.addLegendLabel(chart, 'Abnahme', 745, 374);
					
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
	            }
			}
		}
	};
}());