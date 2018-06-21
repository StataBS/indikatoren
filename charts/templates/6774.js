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
			"x": -235,
			"y":  -35,
			itemMarginBottom: 2, 
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal'
				}
		},
		colorAxis: {
		            dataClassColor: 'category',
		                   dataClasses: [{
		                to: 4.999,
		                color: 'rgb(242,242,242)',
		                name:  "<span style='color: rgba(0,0,0,0)'>7,0</span> <<span style='color: rgba(0,0,0,0)'>11</span>5,0"
		            }, {
		                from: 5,
		                to:  6.999,
		                color: 'rgb(230,230,230)',
		                name: "5,0 −<span style='color: rgba(0,0,0,0)'>11</span>6,9"
		            }, {
		                from: 7,
		                to:8.999,
		                 color: 'rgb(200,200,200)',
		                 name: "7,0 −<span style='color: rgba(0,0,0,0)'>11</span>8,9"
		            },{
		                from: 9,
		                to: 11.00,
		                 color: 'rgb(153,153,153)',
		                 name: "9,0 −<span style='color: rgba(0,0,0,0)'>1</span>11,0"
		            },{
		                from: 11.001,
		                color: 'rgb(60,60,60)',
		                name: "<span style='color: rgba(0,0,0,0)'>7,0</span> ≥<span style='color: rgba(0,0,0,0)'>1</span>11,0"
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
				color: 'red',
				borderColor: 'red'

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
                	
                	var legendTop = 180;
                	var legendLeft = 596;;
                	
					fn.addLegendSquare(chart,      legendLeft-145,  legendTop+20,  10, "#B00000");
					fn.addLegendText(chart,        legendLeft-120, legendTop+30,  'Schweiz');
					fn.addLegendSquare(chart,      legendLeft-145,  legendTop+35,  10, "blue");
					fn.addLegendText(chart,        legendLeft-120, legendTop+45,  'Ausland');
					fn.addLegendText(chart,     330, 170 , 'Anzahl Zugezogene <br> pro 100 Einwohner <br>');
					fn.addLegendText(chart,     450, 170 , 'Anteil Zugezogene <br> nach Zuzugsland');
				}
			}
		}
	};
}());