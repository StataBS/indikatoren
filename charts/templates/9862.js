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
			min: 0.5,
			max: 0.8,
			tickInterval: 0.1,
			"minColor": "#E7CEE2",
			"maxColor": "#662673",
			labels: {
				formatter: function () {
					return Highcharts.numberFormat(100 * this.value,0) + '%'; 
				}, 
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
		      	y: 6
		      },
			  {
				x: 0, 
				y: 8
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
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat(100 * this.value, 0) + '%</b><br/>';
					}
				}
			}, 
			{
				"visible": false
			}, 
			{
				visible: false,
				type: 'pie',
				color: '#0F7399',
				borderColor: '#0F7399'

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
				color: '#C8C8C8',
				borderColor: '#C8C8C8'

			},
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
					var pieSeries = [chart.series[3], chart.series[4], chart.series[5]];

					//pie diameters in px
					var maxPieDiameter = 30;

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
	                        	headerFormat: correspondingMapSeriesItem.properties.LIBGEO + '<br><span style="color:{point.color}">\u25CF</span> {point.key} </span>',
								pointFormatter: function () {
	                            	return ': <b>' + Highcharts.numberFormat((this.v),0) + '</b> (' +  Highcharts.numberFormat((this.percentage),1) + '%)<br>' +
									'\u25CF Total aus dem Ausland: <b>' + Highcharts.numberFormat((this.total),0) + '</b>';
	                            }
	                        }
	                    };
					};
					var pieSizeCatConfig;
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, pieSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig);

                	//Add manually drawn legend	
                	fn.addLegendRectangle(chart, 243, 221, 230, 101, '#fbfbfb', 'pieLegend');
                	fn.addLegendRectangle(chart, 243, 330, 230, 60, '#fbfbfb');

                	//fn.addLegendLabelbold(chart, pieSizeSeries.name, 250, 221, undefined, true);
					fn.addLegendSquare(chart, 255, 245, 10, '#0F7399');
					fn.addLegendLabel(chart, 'Deutschland', 265, 239);
					fn.addLegendSquare(chart, 255, 265, 10, '#FABD24');
					fn.addLegendLabel(chart, 'Ukraine', 265, 259);
					fn.addLegendSquare(chart, 255, 285, 10, '#C8C8C8');
					fn.addLegendLabel(chart, 'Übrige Länder', 265, 279);
					
					//pie values in legend
	                var minValueInLegend = 10; 
	                var maxValueInLegend = 1000; 
	                
	                fn.addLegendCircle(chart, 390, 250, 0.5*fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey', 'pieLegendStayeOnZoom');
	                fn.addLegendCircle(chart, 390, 290, 0.5*fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey', 'pieLegendStayeOnZoom');
	                
					var zoomableLabels = [];
	                zoomableLabels.push({
	                	chart: chart, 
	                	text: Highcharts.numberFormat((minValueInLegend), 0, "," ," "), 
	                	x: 455, 
	                	y: 239, 
	                	cssClass: 'pieLegendRecalculateOnZoom', 
	                	useHtml: false, 
	                	initialValue: minValueInLegend,
	                	align: 'right',
	                	legendLabelZoomFormatter: function(value){
	                		return Highcharts.numberFormat((value), 0, ",", " ");
	                	},					
	                }); 
	                zoomableLabels[0].label = fn.addLegendLabel(zoomableLabels[0].chart, zoomableLabels[0].text, zoomableLabels[0].x, zoomableLabels[0].y, zoomableLabels[0].cssClass, zoomableLabels[0].useHtml, zoomableLabels[0].align);
	                //copy first label but overwrite some properties
	                zoomableLabels.push($.extend({}, zoomableLabels[0], {
	                	text: Highcharts.numberFormat((maxValueInLegend),0,"."," "),
	                	y: 281,
	                	initialValue: maxValueInLegend,
	                }));
	                zoomableLabels[1].label = fn.addLegendLabel(zoomableLabels[1].chart, zoomableLabels[1].text, zoomableLabels[1].x, zoomableLabels[1].y, zoomableLabels[1].cssClass, zoomableLabels[1].useHtml, zoomableLabels[1].align);						                					
					
					
					
					fn.addLegendTitle(chart, choroplethSeries.name, 250, 330);

					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
					
					chart.update(
					{
						xAxis: {
				    		events: {
								//recalculate and hide svg elements on zoom
								afterSetExtremes: function(e){
									var fn = this.chart.userOptions.customFunctions;
									fn.recalculateOnZoom(e, zoomableLabels);
								}
				    		}
						}
					});					
	            }
			}
		}
	};
}());