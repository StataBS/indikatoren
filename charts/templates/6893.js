/*
    global Highcharts
    global $
*/

(function(){
    return {
        data: {
            parsed: function (columns) {
                //Negate the numbers in the a column to create the left side of the population pyramid
                var negateNumbersInColumn = function(columnIndex){
                    columns.forEach(function(column, i, c) {
                        if (i == columnIndex){
                            column.forEach(function(item, j, v){
                                if (typeof(item) == 'number'){
                                    v[j] = -v[j];
                                }
                            });
                        }
                    });
                };

                negateNumbersInColumn(9); 
                negateNumbersInColumn(11); 
              
                //define which wohnviertel to display
                //var filterValue = 1;
                var filterValue = this.chartOptions.customFunctions.filter;
                
                //define which column (zero-based index) should be filtered 
                var filterColumnIndex = 1;
                //go backwards through the column with the values to filter (because we remove values at the end of the array and want to retain the index)
                for (var i = columns[0].length; i > 0; i--){
                  if (columns[filterColumnIndex][i] != filterValue){
                    //go through all columns and remove the value at the current position
                    for (var j=0; j < columns.length; j++){
                      columns[j].splice(i, 1);
                    }
                  }
                }
                
              },
    		    seriesMapping: [
                {x: 3, y: 8, absolut: 4},
                {x: 3, y: 9, absolut: 5},
                {x: 3, y: 10, absolut: 6},
                {x: 3, y: 11, absolut: 7},
  		        {x: 2, y: 1}
            ],
        },
        yAxis:[{
            //tickInterval: 6000,
            min: 0,
            tickInterval: 1,
            tickAmount: 15,
            max: 7,
            title: {
                text: null
            },
            labels: {
            	step: 1,
                formatter: function () {
                	return Highcharts.numberFormat(Math.abs(this.value), 0, ",", " ") + '%';
            	},
                style: {
                    color: "#000000"
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
        }],
		series: [
            {
              color: "#B00000", 
              stacking: 'normal',
              stack: 'female',
              legendIndex: 1,
              index: 2,
            }, 
            {
              color: "#008AC3", 
              stacking: 'normal',
              stack: 'male',
              legendIndex: 0,
              index: 3,
            },
            {
              color: "#d00000", 
              stacking: 'normal',
              stack: 'female',
              legendIndex: 3,
              index: 0,
            }, 
            {
              color: "#00bAf3", 
              stacking: 'normal',
              stack: 'male',
              legendIndex: 2,
              index: 1,
            },
            {
        			visible: false,
        			showInLegend: false,
            }
	    ],
        "legend": {
            "enabled": true,
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
           	//"y": 55,
           	//"x": 105,
           	"itemWidth": 140,
            "itemStyle": {
                "fontWeight": "normal"
            }
        },
        "tooltip": {
            "shared": true,
            formatter: function() { //sum values correctly
                var s = '<span style="font-size: 12px">' + this.points[0].series.chart.series[4].data[0].name + ':</span><br/> <span style="font-size: 12px">Alter: <b>' + this.points[0].key + '</b></span><br/>';
                var sum = 0;
                var sum_percent = 0;
                $.each(this.points, function(i, point) {
                    var v = Math.sqrt(this.point.absolut*this.point.absolut); //make - to + again
                    var z = Math.sqrt(this.point.y*this.point.y); //make - to + again
                    s += '<span style="color:'+point.series.color+'">\u25CF</span> '+point.series.name+': <b>'+v+'</b>' + ' (' + Highcharts.numberFormat(z, 1) + '%)<br/>';
                    sum += v;
                    sum_percent += z;
                });
                s += 'Total: <b>'+ sum + '</b>' + ' (' +  Highcharts.numberFormat(sum_percent, 1) + '%)' ;
                return s;
            },

        },
        "chart":{
         	marginRight: 15,
            events: { // copied from resp. overwrite /charts/templates/populationPyramid001.js
                load: function(){
                    this.credits.element.onclick = function() {};
                    
                    //for top-left legends with no x defined: move legend to x position of first yAxis
                    if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top'){
                      this.update({
                         legend: {
                           x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding + 105 //fixed offset instead of /charts/templates/populationPyramid001.js
                         }
                      });
                    }
                },
            }
        }
	};
}());