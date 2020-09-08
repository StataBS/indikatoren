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
			x: 765,
			y: [365, 390, 420, 445], // Customizable
			y3C: [370, 400, 430],
			y4S: [378, 403, 433, 458]
		},
		title: {
			x: 740
		}
	}
};

//legendPosition.blockSymbol.numbers.x = legendPosition.blockSymbol.x[0] + 15;

//legendPosition.blockSymbol.title.x = legendPosition.blockSymbol.x[0] - 10;
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
		                to: -1.0,
		                color: '#662673', //rgb(242,242,242)',
		                name:  "<span style='color: rgba(0,0,0,0)'>0 -0,99</span> <<span style='color: rgba(0,0,0,0)'>1</span>-1,00"//"<span style='color: rgba(0,0,0,0)'>0</span> <<span style='color: rgba(0,0,0,0)'>0</span>-1,00"
		            }, {
		                from: -0.99999,
		                to:  -0.5,
		                color: '#B375AB',//rgb(230,230,230)',
		                name:  "<span style='color: rgba(0,0,0,0)'>0 </span>-0,99 −<span style='color: rgba(0,0,0,0)'>1</span>-0,50" //"-0,99 − -0,50"
		            }, {
		                from: -0.499999,
		                to:-0.000001,
		                 color: '#E7CEE2',  //rgb(200,200,200)',
		                 name: "<span style='color: rgba(0,0,0,0)' >0 </span>-0,49 −<span style='color: rgba(0,0,0,0)'>1</span>-0,01" //"-0,49 − -0,01" 
		            },{
		                from: 0,
		                to: 0.79999,
		                 color: '#D3E2E4', //rgb(153,153,153
		                 name: "<span style='color: rgba(0,0,0,0)' >-0 </span>0,00 −<span style='color: rgba(0,0,0,0)'>1-</span>0,79"//" 0,00 − -0,79" //
		            },{
		                from: 0.8,
		                color: '#71A3B5', //rgb(60,60,60)
		                name: "<span style='color: rgba(0,0,0,0)'>0 -0,99</span> ≥<span style='color: rgba(0,0,0,0)'>1-</span>0,80" //"<span style='color: rgba(0,0,0,0)'>7,0</span> ≥<span style='color: rgba(0,0,0,0)'>1</span> 0,80"
		            }], 
        },
       

  /*  return {
    	"legend": {
			"title": {
				"text": "Bevölkerungssaldo"
			}
			},
		"colorAxis": {
			//"min": undefined,
			//"minColor": "#eff6e9",
			//"maxColor": "#4b7b1f",
			stops: [
	            [0, 'rgb(0,135,135)'],
	            [0.25, 'rgb(230,230,230)'],
	            [0.9, 'rgb(103,39,115)']
	        ],
	        min: -1,
			max: 5,
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value),0); 
				}
			}
		},*/
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
						Highcharts.each(columnSeries.points || [], function(element, index, array){
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
                    		'-1': ['#a87000', '#267300'],
                    		'0': ['#ffaa00','#38a800']
                    	};
						return colors[''+Math.sign(value)][index];
                    };
                    var chartHeight = 60//72;
                    var columnWidth = 5;
					
					//put the columns on the map
					fn.drawColumns(chart, columnSeries, choroplethSeries, columnSeriesConfig, color, chartHeight, columnWidth);

	                
					//column values in legend
					var legendColumnValues = [3, 1.5]; 

                	//Add manually drawn legend	
                    var legendTop = 190;
                	var legendLeft = 350;;
                	
                	//var legendTop = 280; //220
                	//var legendLeft = 520; //365
					//fn.addLegendText(chart, legendLeft+0,  legendTop+0, 'Wanderungs-/Umzugssaldo'); //Reihenfolge bei 6022.js falsch xy und dann Titel...
					fn.addLegendTitle(chart,  'Bevölkerungssaldo', legendPosition.blockChoropleth.title.x, legendPosition.blockChoropleth.title.y[1]);	
					fn.addLegendTitle(chart, choroplethSeries.name.replace("er ", "er<br/>"), legendPosition.blockSymbol.title.x, legendPosition.blockChoropleth.title.y[1]);
	                	                // fn.addLegendTitle(chart, 'Wanderung/Umzug', 500, 280); //Reihenfolge bei 6022.js falsch xy und dann Titel...
	                fn.addLegendColumnChart(chart, legendPosition.blockSymbol.x[1], legendPosition.blockSymbol.y4S[0]+15,  legendColumnValues.map(function(x) { return x * 0.8; }), color, 'columnLegendHideOnZoom'); //Hemdsärmlige Lösung MB
	                fn.addLegendText(chart, legendPosition.blockSymbol.numbers.x + 10, legendPosition.blockSymbol.numbers.y4S[0],  Highcharts.numberFormat(3.0, 1,","," "), color(3, 0), 'columnLegendHideOnZoom');
	                fn.addLegendText(chart, legendPosition.blockSymbol.numbers.x + 35, legendPosition.blockSymbol.numbers.y4S[0],  Highcharts.numberFormat(1.5, 1,","," "), color(1.5, 1), 'columnLegendHideOnZoom');

					fn.addLegendSquare(chart,      legendPosition.blockSymbol.x[1], legendPosition.blockSymbol.y4S[0]+21+5,  15, color(1, 0));
					fn.addLegendText(chart,        legendPosition.blockSymbol.numbers.x, legendPosition.blockSymbol.numbers.y4S[0]+21+5,  'Wanderung positiv');
					fn.addLegendSquare(chart,      legendPosition.blockSymbol.x[1], legendPosition.blockSymbol.y4S[1]+14+5,  15, color(-1, 0));
					fn.addLegendText(chart,        legendPosition.blockSymbol.numbers.x, legendPosition.blockSymbol.numbers.y4S[1]+14+5,  'Wanderung negativ');
					
					fn.addLegendSquare(chart,      legendPosition.blockSymbol.x[1], legendPosition.blockSymbol.y4S[2]+7,  15, color(1, 1));
					fn.addLegendText(chart,        legendPosition.blockSymbol.numbers.x, legendPosition.blockSymbol.numbers.y4S[2]+7,  'Umzug positiv');
					fn.addLegendSquare(chart,      legendPosition.blockSymbol.x[1], legendPosition.blockSymbol.y4S[3],  15, color(-1, 1));
					fn.addLegendText(chart,        legendPosition.blockSymbol.numbers.x, legendPosition.blockSymbol.numbers.y4S[3], 'Umzug negativ');
					
					//fn.addLegendTitle(chart,  pieSizeSeries.name.replace(" ", "<br/>"), legendPosition.blockSymbol.title.x, legendPosition.blockChoropleth.title.y[1]);

					//fn.addLegendTextbold(chart,    legendLeft-98, legendTop+105 , 'Bewegung pro 100 Einwohner');
					//fn.addLegendTextbold(chart,    legendLeft-98, legendTop+108 , '(Saldo total)');
					
					//make sure columns are hidden upon click onto column legend
					fn.AddColumnLegendClickHandler(chart);
	            }
			}
		}
	};
}()); 