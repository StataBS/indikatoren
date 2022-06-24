/*  global rheinDataEPSG2056
	global Highcharts
	global geojson_wohnviertelEPSG2056
	global $
*/

var legendPosition = {
	blockChoropleth: {
		x: 518, // Customizable
		y: -15,  // Customizable
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
		                to: 3.999,
		                color: '#FFDA80', //rgb(242,242,242)',
		                name:  "<span style='color: rgba(0,0,0,0)'>11----</span> <<span style='color: rgba(0,0,0,0)'>11</span>4,00"
		            }, {
		                from: 4,
		                to:  5.999,
		                color: '#FABD24',//rgb(230,230,230)',
		                name: "<span style='color: rgba(0,0,0,0)'>1</span>4,00 −<span style='color: rgba(0,0,0,0)'>11</span>5,99"
		            }, {
		                from: 6,
		                to:7.499,
		                 color: '#CD9C00',  //rgb(200,200,200)',
		                 name: "<span style='color: rgba(0,0,0,0)'>1</span>6,00 −<span style='color: rgba(0,0,0,0)'>11</span>7,49"
		            },{
		                from: 7.5,
		                to: 9.9999999,
		                 color: '#7F5F1A', //rgb(153,153,153
		                 name: "<span style='color: rgba(0,0,0,0)'>1</span>7,50 −<span style='color: rgba(0,0,0,0)'>11</span>9,99"
		            },{
		                from: 10.00,
		                color: '#45381D', //rgb(60,60,60)
		                name: "<span style='color: rgba(0,0,0,0)'>117,--</span> ≥<span style='color: rgba(0,0,0,0)'>1</span>10,00"
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
				color: '#B00000',
				borderColor: '#B00000'

			}, 
			{
				visible: false,
				type: 'pie',
        		color: 'blue',
        		borderColor: 'blue'
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
					var pieSeries = [chart.series[2], chart.series[3]];

					//pie diameters in px
					var maxPieDiameter = 15;

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
                	
					fn.addLegendSquare(chart,      legendPosition.blockSymbol.x[1], legendPosition.blockSymbol.y4S[0],  15, "#B00000");
					fn.addLegendText(chart,        legendPosition.blockSymbol.numbers.x, legendPosition.blockSymbol.numbers.y4S[0],  'Schweiz');
					fn.addLegendSquare(chart,      legendPosition.blockSymbol.x[1], legendPosition.blockSymbol.y4S[1],  15, "blue");
					fn.addLegendText(chart,        legendPosition.blockSymbol.numbers.x, legendPosition.blockSymbol.numbers.y4S[1],  'Ausland');
					fn.addLegendTitle(chart, 'Anzahl Zugezogene <br> pro 100 Einwohner <br>', legendPosition.blockChoropleth.title.x, legendPosition.blockChoropleth.title.y[1]);
					fn.addLegendTitle(chart, 'Anteil Zugezogene <br> nach Zuzugsland', legendPosition.blockSymbol.title.x, legendPosition.blockChoropleth.title.y[1]);
				//	fn.addLegendText(chart,     330, 170 , 'Anzahl Zugezogene <br> pro 100 Einwohner <br>');
				//	fn.addLegendText(chart,     450, 170 , 'Anteil Zugezogene <br> nach Zuzugsland');
				}
			}
		}
	};
}());