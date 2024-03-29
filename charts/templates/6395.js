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
			"y": -15,
			itemMarginBottom: 2, 
			symbolRadius: 0,
		},
         colorAxis: {
            dataClassColor: 'category',
               dataClasses: [{
                from: 0,
                to:4.49,
                color: '#FFDA80',
                name:  "<span style='color: rgba(0,0,0,0)'>0,0</span> <<span style='color: rgba(0,0,0,0)'>0</span> 4,5"
            }, {
                from: 4.5,
                to: 4.999,
                color: '#FABD24',
                name: "4,5 −<span style='color: rgba(0,0,0,0)'>0</span> 4,9"
            }, {
                from: 5.0,
                to: 6.9,
                 color: '#CD9C00',
                 name: "5,0 −<span style='color: rgba(0,0,0,0)'>0</span> 6,9"
            },{
                from: 7.0,
                to: 11.9,
                 color: '#7F5F1A',
                 name: "7,0 − 11,9"
            },{
                from: 12.0,
                color: '#45381D',
                name:  "<span style='color: rgba(0,0,0,0)'>0,0</span> ≥ 12,0"
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
							name: " < \u00A0\u00A0 400",
							from: 0,
							to: 399.9, 
							diameter: 5
						},
						{
							name: "400 − \u00A0\u00A0 999",
							from: 400,
							to: 999.9,
							diameter: 10
						},
						{
							name:"≥  1 000",
							from: 1000,							
							to: 1000000000,
							diameter: 20
						}
					];
					
					//define different colors for positive and negative values
	                var color = function(value){
	                	return (value >= 0) ? '#007A2F' : '#007A2F';
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
	                fn.addLegendRectangle(chart, 245, 212, 110, 120, '#fbfbfb');
	                fn.addLegendRectangle(chart, 360, 212, 105, 120, '#fbfbfb');	                
	        		fn.addLegendTitle(chart, "Arbeitsstätten pro <br/> 100 Einwohner", 245, 210);
	                fn.addLegendTitle(chart, "Anzahl <br/> Arbeitsstätten", 365, 210);
	                
	              	fn.addLegendCircle(chart, 378, 266, 0.5*pieSizeCatConfig[0].diameter, '#007A2F');
	                fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 460, 255, undefined, false, 'right');
	                fn.addLegendCircle(chart, 378, 285, 0.5*pieSizeCatConfig[1].diameter, '#007A2F');
	                fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 460, 275, undefined, false, 'right');
	                fn.addLegendCircle(chart, 378, 310, 0.5*pieSizeCatConfig[2].diameter, '#007A2F');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 460, 300, undefined, false, 'right');
					
					
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

