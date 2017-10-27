/*  global rheinDataEPSG2056
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
			"x": -185,
			"y": 3,
			itemMarginBottom: 2, 
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal'
				}
		},
         colorAxis: {
            dataClassColor: 'category',
                   dataClasses: [{
                to: 599999,
                color: '#D7E8D2',
                name:  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<&nbsp;&nbsp;&nbsp; 600 000"
            }, {
                from: 600000,
                to: 899999,
                color: '#73B97C',
                name: "&nbsp;&nbsp;&nbsp;600 000 − &nbsp;&nbsp;&nbsp;899 999"
            }, {
                from: 900000,
                to: 999999,
                 color: '#68AB2B',
                 name: "&nbsp;&nbsp;&nbsp;900 000 − &nbsp;&nbsp;&nbsp;999 999"
            },{
                from: 1000000,
                to: 1499999,
                 color: '#007A2F',
                 name: "1 000 000 − 1 499 999"
            },{
                from: 1500000,
                color: '#0A3B19',
                name:  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;≥&nbsp;1 500 000"
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
					var maxPieDiameter = 20;
					
					//configuration of categorical pie sizes
					var pieSizeCatConfig = 
					[
						{
							name: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; < 20 000',
							from: 0,
							to: 19999, 
							diameter: 2
						},
						{
							name: ' 20 000 − &nbsp;59 999',
							from: 20000,
							to: 59999,
							diameter: 8
						},
						{
							name: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ≥ 60 000',
							from: 60000,							
							to: 1000000000,
							diameter: 16
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
	                fn.addLegendTitle(chart, choroplethSeries.name, 325, 200);
	                fn.addLegendTitle(chart, pieSizeSeries.name, 460, 200);
	                
	                fn.addLegendCircle(chart, 465, 231, 0.5*pieSizeCatConfig[0].diameter, 'grey');
	                fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 478, 221, true);
	                fn.addLegendCircle(chart, 465, 248, 0.5*pieSizeCatConfig[1].diameter, 'grey');
	                fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 478, 237, true);
	                fn.addLegendCircle(chart, 465, 265, 0.5*pieSizeCatConfig[2].diameter, 'grey');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 478, 255, true);
					
					fn.addLegendSquare(chart, 565, 225, 10, '#7F5F1A');
					fn.addLegendLabel(chart, 'Zunahme', 580, 221);
					fn.addLegendSquare(chart, 565, 241, 10, '#FABD24');
					fn.addLegendLabel(chart, 'Abnahme', 580, 237);
					
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
	            }
			}
		}
	};
}());