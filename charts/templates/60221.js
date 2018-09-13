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
			"x": -210,
			"y":  2,
			itemMarginBottom: 2, 
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal'
				}
		},
         colorAxis: {
            dataClassColor: 'category',
                   dataClasses: [{
                to: -0.75999,
                color: 'rgb(0,135,135)',
                name:  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<&nbsp;-0,760"
            }, {
                from: -0.76,
                to:  -0.15,
                color: 'rgb(168,196,203)',
                name: "-0,760 − -0,150"
            }, {
                from: -0.14999,
                to: 0.149999,
                 color: 'rgb(230,230,230)',
                 name: "-0,149 − &nbsp;0,149"
            },{
                from: 0.150,
                to: 1.99,
                 color: 'rgb(231,207,226)',
                 name: "&nbsp;0,150 − &nbsp;0,199"
            },{
                from: 2.0,
                color: 'rgb(103,39,115)',
                name:  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;≥&nbsp;&nbsp;2,000"
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
                	var legendTop = 230;
                	var legendLeft = 596;

	                fn.addLegendColumnChart(chart, legendLeft-95,  legendTop+10,  legendColumnValues, color, 'columnLegendHideOnZoom');
	                fn.addLegendText(chart,        legendLeft-75, legendTop+10,  Highcharts.numberFormat(legendColumnValues[0], 0,","," "), color(legendColumnValues[0], 0), 'columnLegendHideOnZoom');
	                fn.addLegendText(chart,        legendLeft-60, legendTop+10,  Highcharts.numberFormat(legendColumnValues[1], 1,","," "), color(legendColumnValues[1], 1), 'columnLegendHideOnZoom');
					
					fn.addLegendSquare(chart,      legendLeft-95,  legendTop+20,  10, color(1, 0));
					fn.addLegendText(chart,        legendLeft-80, legendTop+30,  'Wanderung positiv');
					fn.addLegendSquare(chart,      legendLeft-95,  legendTop+35,  10, color(-1, 0));
					fn.addLegendText(chart,        legendLeft-80, legendTop+45,  'Wanderung negativ');
					fn.addLegendSquare(chart,      legendLeft-95,  legendTop+50,  10, color(1, 1));
					fn.addLegendText(chart,        legendLeft-80, legendTop+60,  'Umzug positiv');
					fn.addLegendSquare(chart,      legendLeft-95,  legendTop+65, 10, color(-1, 1));
					fn.addLegendText(chart,        legendLeft-80, legendTop+75 , 'Umzug negativ');
					fn.addLegendText(chart,     330, 170 , 'Bevölkerungssaldo infolge <br> räumlicher Bewegung <br> pro 100 Einwohner <br>(Saldo total)');
					fn.addLegendText(chart,     500, 170 , 'Saldo pro 100 Einwohner');

					
					//make sure columns are hidden upon click onto column legend
					fn.AddColumnLegendClickHandler(chart);
	            }
			}
		}
	};
}()); 