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
			"align": "left",
			"x": 230,
			"y": -15,
			itemMarginBottom: 2, 
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal'
				},
				enabled: false
		},
         colorAxis: {
            dataClassColor: 'category',
        	dataClasses: [{
               	from: 0,
                to:49.9,
                color: '#A8C3CA',
                name:  "<span style='color: rgba(0,0,0,0)'>000,0</span> < 50,0"
			}/*, {
                from: 50.0,
                to: 54.9,
                color: '#A8C3CA',
                name: "<span style='color: rgba(0,0,0,0)'>0</span>50,0 − 54,9"
            }, {
                from: 55.0,
                to: 59.9,
                 color: '#689199',
                 name: "<span style='color: rgba(0,0,0,0)'>0</span>55,0 − 59,9"
            },{
                from: 60.0,
                to: 64.9,
                 color: '#246370',
                 name: "<span style='color: rgba(0,0,0,0)'>0</span>60,0 − 64,9"
            },{
                from: 65,
                color: '#083038',
                name:  "<span style='color: rgba(0,0,0,0)'>000,0</span> ≥ 65,0"
            }*/], 
        },
        "data": {
		    "seriesMapping": [
		      {
				  x: 0, y: 1
		      },
		      {
		      	//2nd series: use y values from column 3
		      	y: 1
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
				enableMouseTracking: false,
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

					var choroplethSeries = chart.series[0];
					var pieSizeSeries = chart.series[1];
					
					//pie diameters in px
					var maxPieDiameter = 20;

					var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);
					
					//define different colors for positive and negative values
	                var color = function(value){
	                	return (value >= 0) ? '#B00000' : '#B00000';
	                };					
					
					//define chart-specific details
					var pieSeriesConfig = function(data, correspondingMapSeriesItem, color){
						return {
	                        sizeFormatter: function () {
	                            var fn = this.chart.options.customFunctions;
								return fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter); 
								//return fn.pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
	                        },
	                        tooltip: {
	                            pointFormatter: function () {
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),0) + '</b><br/>';
	                            }
	                        }
	                    };
					};
					 var pieSizeCatConfig;
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);
	                
					//pie values in legend
	                var minValueInLegend = 1; 
	                var maxValueInLegend = 16; 
	                
                	//Add manually drawn legend	
					//fn.addLegendTitle(chart, "Veränderung von 1995 bis 2015 in m²", 265, 220);

					//fn.addLegendRectangle(chart, 243, 212, 105, 145, '#fbfbfb');
					fn.addLegendRectangle(chart, 355, 212, 110, 145, '#fbfbfb');
					
					//fn.addLegendTitle(chart, "In der Schweiz <br/> geborenen <br/> Personen (%)", 245, 210);
					
					fn.addLegendTitle(chart, pieSizeSeries.name.replace("lte ", "lte<br/>"), 260, 260);
					//fn.addLegendSquare(chart, 363, 275, 10, '#007A2F');
					//fn.addLegendLabel(chart, 'Zunahme', 382, 269);
					//fn.addLegendSquare(chart, 363, 295, 10, '#990300');
					//fn.addLegendLabel(chart, 'Abnahme', 382, 289)

					fn.addLegendCircle(chart, 270, 310, 0.5*fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), '#B00000');
	                fn.addLegendLabel(chart, Highcharts.numberFormat((minValueInLegend),0,","," "), 285, 300);
	                fn.addLegendCircle(chart, 270, 335, 0.5*fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), '#B00000');
					fn.addLegendLabel(chart, Highcharts.numberFormat((maxValueInLegend),0,"."," "), 285, 325);

					//var shiftDown = 12;

					/*
					fn.addLegendCircle(chart, 373, 266+shiftDown, 0.5*pieSizeCatConfig[0].diameter, '#007A2F');
	                fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 465, 255+shiftDown, undefined, false, 'right');
	                fn.addLegendCircle(chart, 373, 285+shiftDown, 0.5*pieSizeCatConfig[1].diameter, '#007A2F');
	                fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 465, 275+shiftDown, undefined, false, 'right');
	                fn.addLegendCircle(chart, 373, 310+shiftDown, 0.5*pieSizeCatConfig[2].diameter, '#007A2F');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 465, 300+shiftDown, undefined, false, 'right');
					*/
					
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
	            }
			}
		}
	};
}());

