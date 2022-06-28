/*  global rheinDataEPSG2056
	global Highcharts
	global geojson_wohnviertelEPSG2056
	global $
*/

var legendPosition = {
	blockChoropleth: {
		x: 518, // Customizable
		y: -5,  // Customizable
		title: {
			y: [320, 302, 285],
			x: 525, // Customizable
		}
	},
	blockSymbol: {
		x: [750,745], // Customizable
		y: [377, 402, 427, 452], // Customizable
		y3C: [382, 412, 442],
		y4S: [365, 390, 420, 445],
		numbers: {
			x: 0,
			y: [365, 390, 420, 445], // Customizable
			y3C: [370, 400, 430],
			y4S: [378, 403, 433, 458]
		},
		title: {
			x: 0
		}
	}
};

legendPosition.blockSymbol.numbers.x = legendPosition.blockSymbol.x[0] + 15;

legendPosition.blockSymbol.title.x = legendPosition.blockSymbol.x[0] - 10;
var i;
for (i = 0; i < 3; i++) {
	legendPosition.blockChoropleth.title.y[i] -= legendPosition.blockChoropleth.y;
};

(function(){

    return {
		"legend": 
		{
			useHTML: true,
			"title": 
			{
				"text": null, 
				style: 
				{
					fontWeight: 'normal',
					fontSize: "15px"
				}
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "left",
			"x": legendPosition.blockChoropleth.x,
			"y": legendPosition.blockChoropleth.y,
			itemMarginBottom: 2, 
			symbolRadius: 0,
			itemStyle: 
			{
				fontWeight: 'normal',
				fontSize: "15px"
			}
		},
		colorAxis: {
		            dataClassColor: 'category',
		                   dataClasses: [{
		                to: 6999.999,
		                color: '#ECE1D0',
		                name:  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<&nbsp;&nbsp;&nbsp;&nbsp;7 000"
		            }, {
		                from: 7000,
		                to:  9999.999,
		                color: '#C4AB91',
		                name: "&nbsp;&nbsp;&nbsp;7 000 − &nbsp;&nbsp;&nbsp;9 999"
		            }, {
		                from: 10000,
		                to: 14999.999,
		                 color: '#9E7C59',
		                 name: "&nbsp;10 000 − &nbsp;14 999"
		            },{
		                from: 15000,
		                to: 24999.999,
		                 color: '#67401E',
		                 name: "&nbsp;15 000 − &nbsp;24 999"
		            },{
		                from: 25000,
		                color: '#3A2012',
		                name: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;≥&nbsp;&nbsp;25 000"
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
		      },
		      {
		      	x: 0, 
		      	y: 4
		      },
		      {
		      	x: 0, 
		      	y: 5
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
			}, 
			{
				visible: false,
				type: 'pie',
				color: '#246370',
				borderColor: 'white',
				//borderWidth: 0.2

			}, 
			{
				visible: false,
				type: 'pie',
        		color: '#923F8D',
        		borderColor: 'white',
				//borderWidth: 0.2
			}
		],
		plotOptions:{
			pie:{
				borderWidth: 1
			}
		},
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
					var pieSeries = [chart.series[2], chart.series[3]];

					//pie diameters in px
					var maxPieDiameter = 35;

					var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);

					//define chart-specific details
					var pieSeriesConfig = function(data, correspondingMapSeriesItem, color){
						return {
	                        sizeFormatter: function () {
	                            var fn = this.chart.options.customFunctions;
	                            var yAxis = chart.yAxis[0], zoom = (yAxis.dataMax - yAxis.dataMin) / (yAxis.max - yAxis.min);
								return zoom * fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter); 
								//return fn.pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
	                        },
	                        tooltip: {
	                        	headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {point.key} </span><br/>',
	                            pointFormatter: function () {
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),1) + ' % </b><br/>';
	                            }
	                        },
	                    };
					};
					var pieSizeCatConfig;
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, pieSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig);
	                

                	//Add manually drawn legend	
                	
                //	var legendTop = 280;
                //	var legendLeft = 520;;
                	
                	var legendTop = 190;
                	var legendLeft = 350;;
                	
					fn.addLegendSquare(chart,      legendPosition.blockSymbol.x[1], legendPosition.blockSymbol.y4S[0],  15, "#246370");
					fn.addLegendText(chart,        legendPosition.blockSymbol.numbers.x+5, legendPosition.blockSymbol.numbers.y4S[0],  'Anteil Einkommenssteuer');
					fn.addLegendSquare(chart,      legendPosition.blockSymbol.x[1], legendPosition.blockSymbol.y4S[1],  15, "#923F8D");
					fn.addLegendText(chart,        legendPosition.blockSymbol.numbers.x+5, legendPosition.blockSymbol.numbers.y4S[1],  'Anteil Vermögenssteuer');
					fn.addLegendTitle(chart, 'Gesamtsteuerertrag<br>Mittelwert in Fr.<br>pro Veranlagung', legendPosition.blockChoropleth.title.x, legendPosition.blockChoropleth.title.y[1]);
					fn.addLegendTitle(chart, 'Gesamtsteuerertrag<br>Summe in Mio. Fr.', legendPosition.blockSymbol.title.x, legendPosition.blockChoropleth.title.y[1]);
				//	fn.addLegendText(chart,     330, 170 , 'Anzahl Zugezogene <br> pro 100 Einwohner <br>');
				//	fn.addLegendText(chart,     450, 170 , 'Anteil Zugezogene <br> nach Zuzugsland');
					
					//pie values in legend
					var minValueInLegend = 10000000; 
					var maxValueInLegend = 200000000; 
										
					fn.addLegendCircle(chart, 		legendPosition.blockSymbol.x[1]+7, legendPosition.blockSymbol.y4S[0]+70, 0.5*fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey', 'pieLegendStayeOnZoom');
					fn.addLegendCircle(chart, 		legendPosition.blockSymbol.x[1]+7, legendPosition.blockSymbol.y4S[0]+100, 0.5*fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey', 'pieLegendStayeOnZoom');
					fn.addLegendText(chart,        legendPosition.blockSymbol.numbers.x+22, legendPosition.blockSymbol.numbers.y4S[0]+60,  Highcharts.numberFormat(minValueInLegend/1000000,0,));
					fn.addLegendText(chart,        legendPosition.blockSymbol.numbers.x+15, legendPosition.blockSymbol.numbers.y4S[0]+90,  Highcharts.numberFormat(maxValueInLegend/1000000,0,));


				}
			}
		}
	};
}());