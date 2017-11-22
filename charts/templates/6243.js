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
                to: 34.999,
                color: '#D7E8D2',
                name:  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<&nbsp;&nbsp;&nbsp;35,0"
            }, {
                from: 35.0,
                to: 79.999,
                color: '#73B97C',
                name: "&nbsp;&nbsp;35,0 − &nbsp;&nbsp;79,9"
            }, {
                from: 80.0,
                to: 90.999,
                 color: '#68AB2B',
                 name: "&nbsp;&nbsp;80,0 − &nbsp;&nbsp;99,9"
            },{
                from: 100,
                to: 149.999,
                 color: '#007A2F',
                 name: "100,0 − 149,9"
            },{
                from: 150,
                color: '#0A3B19',
                name:  "&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;≥&nbsp;150,0"
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
							name: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; < 1,0',
							from: 0,
							to: 0.999, 
							diameter: 2
						},
						{
							name: ' 1,0 − 2,9',
							from: 1.0,
							to: 2.999,
							diameter: 8
						},
						{
							name: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ≥ 3,0',
							from: 3,							
							to: 1000000,
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
	                fn.addLegendTitle(chart, choroplethSeries.name + "", 362, 200);
	                fn.addLegendLabel(chart, 'in Einwohner pro ha', 362, 210)
	                .css({
                        fontWeight: 'bold' }).
                     add();
	                fn.addLegendTitle(chart, pieSizeSeries.name  + "", 475, 200);
	                fn.addLegendLabel(chart, 'in Einwohner pro ha', 475, 210)
	                .css({
                        fontWeight: 'bold' }).
                     add();
	                
	                fn.addLegendCircle(chart, 483, 246, 0.5*pieSizeCatConfig[0].diameter, 'grey');
	                fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 495, 236, true);
	                fn.addLegendCircle(chart, 483, 263, 0.5*pieSizeCatConfig[1].diameter, 'grey');
	                fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 495, 253, true);
	                fn.addLegendCircle(chart, 483, 280, 0.5*pieSizeCatConfig[2].diameter, 'grey');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 495, 270, true);
					
					fn.addLegendSquare(chart, 565, 240, 10, '#7F5F1A');
					fn.addLegendLabel(chart, 'Zunahme', 580, 236);
					fn.addLegendSquare(chart, 565, 256, 10, '#FABD24');
					fn.addLegendLabel(chart, 'Abnahme', 580, 252);
					
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
	            }
			}
		}
	};
}());