/*
    global Highcharts
*/

(function(){
    return {
  title: {
      useHTML: true
    },
    subtitle: {
      useHTML: true
    },
        data: {
            parsed: function (columns) {
                //Negate the numbers in the the 2nd column to create the left side of the population pyramid
                var negateNumbersInColumn = function(columnIndex){
                    Highcharts.each(columns, function(column, i, c) {
                        if (i == columnIndex){
                            Highcharts.each(column, function(item, j, v){
                                if (typeof(item) == 'number'){
                                    v[j] = -v[j];
                                }
                            });
                        }
                    });
                };
                negateNumbersInColumn(1);
            }     
        },
        yAxis:[{
            //max: 18000,
            //tickInterval: 6000,
            min:0,
            title: {
                text: null
            },
            "labels": {
            	formatter: function () {
                	return Highcharts.numberFormat(Math.abs(this.value), 0, ",", " ");
            	},
                "style": {
                    "color": "#000000"
                }
            },
             plotLines: [{
                    value: 0,
                    color: 'white',
                    width: 1,
                    zIndex: 4
                }],
            //create symmetric xAxis
            events: {
                afterSetExtremes: function(args){
            	    this.chart.options.customFunctions.createSymmetricAxis(this);
                }, 
            }
        }],
        xAxis: [{
                reversed: false,
                type: 'category',
                labels: {
    	        	step: 1,
	                style: {
	                    color: "#000000"
	                }
                }, 
                tickLength: 0, 
	            title: {
	                style: {
	                    color: "#000000"
	                }
	            },
	            tickColor: "#FFFFFF"
            }, 
            { // mirror axis on right side
                type: 'category',
                visible: false,
                opposite: true,
                reversed: false,
                linkedTo: 0
            }
        ],                
		series: [
            {
              color: "#73B97C", // grün
              borderWidth: 0.5,
              //pointWidth: 15
            }, 
            {
              color: "#E6E600", //gelb
              borderWidth: 0-5,
              //pointWidth: 15
            },
	    ],
        "legend": {
            "enabled": true,
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "center",
            x: 15,
           	"y": 35,    
            "itemStyle": {
              "fontWeight": "normal"
            }
          },
            tooltip: {
            pointFormatter: function () {
                return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>'+ Highcharts.numberFormat( Math.abs(this.y), 1, ",", " ") + " m²" + '</b><br/>';
            }
            },
  "chart": {      
    "spacingBottom": 50
  }
	};
}());