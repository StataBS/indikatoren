/*  global rheinDataEPSG2056
	global Highcharts
	global geojson_wohnviertelEPSG2056
	global $
*/
(function(){

    return {
    	"legend": {
    		"x": -15,
			"y": 25,
			"title": {
				"text": ""
			}
			},
		"colorAxis": {
			"min": 0.2,
			"minColor": "#ECE1D0",
			"maxColor": "#3A2012",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value*100),0); 
				}
			}
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
		      },
		      {
		      	x: 0, 
		      	y: 6
		      },
		      {
		      	x: 0, 
		      	y: 7
		      },
		      {
		      	x: 0, 
		      	y: 8
		      },
		      {
		      	x: 0, 
		      	y: 9
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
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value*100),1) + '</b><br/>';
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
				color: '#FABD24',
				borderColor: '#FABD24'

			}, 
				{
				visible: false,
				type: 'pie',
				color: '#E6E600',
				borderColor: '#E6E600'

			}, 
				{
				visible: false,
				type: 'pie',
				color: '#68AB2B',
				borderColor: '#68AB2B'

			}, 
				{
				visible: false,
				type: 'pie',
				color: '#923F8D',
				borderColor: '#923F8D'

			}, 
			{
				visible: false,
				type: 'pie',
        		color: '#A8C3CA',
        		borderColor: '#A8C3CA'
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
					var pieSeries = [chart.series[3], chart.series[4], chart.series[5], chart.series[6], chart.series[7], chart.series[8]];

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
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),2) + '% </b><br/>';
	                            }
	                        },
	                    };
					};
					var pieSizeCatConfig;
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, pieSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig);
	                
					//pie values in legend
	                var minValueInLegend = 0.001; 
	                var maxValueInLegend = 0.1; 
	                
                	//Add manually drawn legend	
                	fn.addLegendRectangle(chart, 243, 210, 230, 100, '#fbfbfb', 'pieLegend');
                	fn.addLegendRectangle(chart, 243, 320, 230, 60, '#fbfbfb');
	                fn.addLegendTitle(chart,"Ausländeranteil in %", 250, 320);
	                
	                //fn.addLegendCircle(chart, 410, 275, 0.5*fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey');
	                //fn.addLegendLabel(chart, Highcharts.numberFormat((minValueInLegend),3,","," "), 430, 265);
	                //fn.addLegendCircle(chart, 410, 300, 0.5*fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey');
	                //fn.addLegendLabel(chart, Highcharts.numberFormat((maxValueInLegend),2,"."," "), 430, 290);
					fn.addLegendLabelbold(chart, 'Staatsangehörigkeit', 250, 210);
					fn.addLegendSquare(chart, 255, 240, 10, '#B00000');
					fn.addLegendLabel(chart, 'Deutschland', 265, 234);
					fn.addLegendSquare(chart, 255, 260, 10, '#FABD24');
					fn.addLegendLabel(chart, 'Italien', 265, 254);
					fn.addLegendSquare(chart, 255, 280, 10, '#68AB2B');
					fn.addLegendLabel(chart, 'Serbien, Monte-<br/>negro,  Kosovo', 265, 274);
					fn.addLegendSquare(chart, 360, 240, 10, '#E6E600');
					fn.addLegendLabel(chart, 'Türkei', 370, 234);
					fn.addLegendSquare(chart, 360, 260, 10, '#923F8D');
					fn.addLegendLabel(chart, 'Spanien', 370, 254);
					fn.addLegendSquare(chart, 360, 280, 10, '#A8C3CA');
					fn.addLegendLabel(chart, 'Übrige', 370, 274);
					


					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
	            }
			}
		}
	};
}());