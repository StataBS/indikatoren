/*  global rheinDataEPSG2056
	global Highcharts
	global geojson_wohnviertelEPSG2056
	global $
*/
(function(){

    return {
    	"legend": {
			"title": {
				"text": ""
			}
			},
		"colorAxis": {
			//"min": undefined,
			"minColor": "#eff6e9",
			"maxColor": "#4b7b1f",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value),0); 
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
		      	y: 3
		      },
		      {
		      	x: 0, 
		      	y: 4
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
					headerFormat: '',
					useHTML: true,
					pointFormatter: function(){
						var columnSeriesIndex = this.index + 6; // 6 series statically defined in this chart incl. afterSeries (rhein and massstab)
						var columnSeries = this.series.chart.series[columnSeriesIndex];
						//put together html for tooltip
						var tooltipText = 
							this.properties.LIBGEO + ': <br/><br/>' + 
							'<table>'
							+'<tr><td><span style="color:' + this.color + '">●</span></td> <td>' + this.series.name + ': </td> <td><b>' + Highcharts.numberFormat((this.value),2) + '</b></td></tr><br/>';
						//add a tooltip row for each column
						Highcharts.each(columnSeries.points, function(element, index, array){
							(columnSeries.visible) ? tooltipText += ('<tr><td><span style="color:' + element.color + '">●</span></td> <td>' + element.name + ': </td> <td><b>' + Highcharts.numberFormat((element.y),2) + '</b></td></tr><br/>') : undefined ;	
						});
						tooltipText += '</table>';
						return tooltipText;
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
				borderColor: 'red', 
			}, 
			{
				visible: false,
				type: 'pie',
        		color: 'blue',
        		borderColor: 'blue', 
			}
		],
		chart: {
			events: {
	            load: function (e) {
	            	
	            	this.credits.element.onclick = function() {};
					
	                var chart = this;
	                var fn = this.options.customFunctions;
	                //define new Highcharts template "mapcolumn"
					//fn.defineTemplate();
					
					var choroplethSeries = chart.series[0];
					var columnSeries = [chart.series[2], chart.series[3]];

					//var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);

					//define chart-specific details
					var columnSeriesConfig = function(correspondingMapSeriesItem, color){
						return {
							enableMouseTracking: false,
							/*
	                        tooltip: {
	                        	headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {point.key} </span><br/>',
	                            pointFormatter: function () {
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),3) + '</b><br/>';
	                            }
	                        },
	                        */
	                    };
					};
					
					//define different colors for positive and negative values
                    var color = function(value, index){
						//add polyfill for ie, see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sign                    	
                    	if (!Math.sign) {
						  Math.sign = function(x) {
						    return ((x > 0) - (x < 0)) || +x;
						  };
						}
                    	
                    	var colors = {
                    		'1': ['#ffaa00','#38a800'],
                    		'-1': ['#a87000', '#267300']
                    	};
						return colors[''+Math.sign(value)][index];
                    };
                    var chartHeight = 72;
                    var columnWidth = 5;
					
					//put the columns on the map
					fn.drawColumns(chart, columnSeries, choroplethSeries, columnSeriesConfig, color, chartHeight, columnWidth);
	                
					//column values in legend
					var legendColumnValues = [5, 2.5]; 

                	//Add manually drawn legend	
                	var legendTop = 220;
                	var legendLeft = 365;
	                fn.addLegendTitle(chart, 'Wanderung/Umzug', 265, 215);
	                
	                fn.addLegendColumnChart(chart, legendLeft+35,  legendTop+45,  legendColumnValues, color, 'columnLegendHideOnZoom');
	                
	                fn.addLegendText(chart,        legendLeft+50, legendTop+45,  Highcharts.numberFormat(legendColumnValues[0], 0,","," "), color(legendColumnValues[0], 0), 'columnLegendHideOnZoom');
	                //fn.addLegendText(chart,        legendLeft+71, legendTop+45,  ',', undefined, 'columnLegendHideOnZoom');
	                fn.addLegendText(chart,        legendLeft+63, legendTop+45,  Highcharts.numberFormat(legendColumnValues[1], 1,","," "), color(legendColumnValues[1], 1), 'columnLegendHideOnZoom');

					fn.addLegendSquare(chart,      legendLeft-95,  legendTop+20,  10, color(1, 0));
					fn.addLegendText(chart,        legendLeft-80, legendTop+30,  'Wanderung positiv');
					fn.addLegendSquare(chart,      legendLeft-95,  legendTop+35,  10, color(-1, 0));
					fn.addLegendText(chart,        legendLeft-80, legendTop+45,  'Wanderung negativ');
					
					fn.addLegendSquare(chart,      legendLeft-95,  legendTop+50,  10, color(1, 1));
					fn.addLegendText(chart,        legendLeft-80, legendTop+60,  'Umzug positiv');
					fn.addLegendSquare(chart,      legendLeft-95,  legendTop+65, 10, color(-1, 1));
					fn.addLegendText(chart,        legendLeft-80, legendTop+75 , 'Umzug negativ');
					fn.addLegendTextbold(chart,    legendLeft-98, legendTop+100 , 'Bevölkerungssaldo');	
					//fn.addLegendTextbold(chart,    legendLeft-98, legendTop+105 , 'Bewegung pro 100 Einwohner');
					//fn.addLegendTextbold(chart,    legendLeft-98, legendTop+108 , '(Saldo total)');
					
					//make sure columns are hidden upon click onto column legend
					fn.AddColumnLegendClickHandler(chart);
	            }
			}
		}
	};
}()); 