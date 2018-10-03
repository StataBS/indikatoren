/*
    global Highcharts
*/

(function(){
    return {
    //color of legend if colorByPoint is true: use additional series with linkedTo, see https://forum.highcharts.com/highcharts-usage/custom-legend-color-with-colorbypoint-t30609/
    //to have additional lnked columns before the columns from the csv file, create two dummy columns in the data.parsed method.
	  data: {
	    switchRowsAndColumns: true,
			parsed: function(columns){
				//create two columns without data, only with the names of their linked column so that the legend item title is correct
				columns.splice(1, 0, [columns[1][0]]);
				columns.splice(3, 0, [columns[3][0]]);
				//console.log(columns);
			}
	  },
    
    series: [
    		{
    			//used only to have a legend item with a defined color despite colorByPoint is true
    			id: 'dummy0',
    			color: "#FABD24",
    			grouping: false, 
    		},
        {
					linkedTo: 'dummy0',
					colors: ["#FABD24","#FABD24","#FABD24","#ECE1D0","#FABD24","#FABD24","#FABD24","#FABD24"],  
					colorByPoint: true,
        },
    		{
    			//used only to have a legend item with a defined color despite colorByPoint is true
    			id: 'dummy1',
    			color: "#7F5F1A",
    			grouping: false, 
    		},
        {
					linkedTo: 'dummy1',
					colors: ["#7F5F1A","#7F5F1A","#7F5F1A","black","#7F5F1A","#7F5F1A","#7F5F1A","#7F5F1A"],  
					colorByPoint: true,
        },
        {
            color: "#FF8028",
            type: 'scatter',
            marker: {
            		enabled: true,
                symbol: 'circle', 
                radius: 3
            },
            pointPlacement : -0.15
        },
        {
            color: "#68AB2B",
            type: 'scatter',
            marker: {
            		enabled: true,
                symbol: 'circle', 
                radius: 3
            },
            pointPlacement : 0.15
        }

  ],
  xAxis: {
      type: "category",
  "labels": {
          	step: 1,
              "rotation":-45,
        }  

  },
  yAxis: [
      {
        gridLineColor: '#B9CFD7', 
        gridLineWidth: 0.5,
        lineColor: '#B9CFD7', 
        title: {
            style: {
                color: "#000000",
                fontSize: null
            },
            text: null
        },
        labels: {
        	format: "{value:,.0f}",
            style: {
            color: "#000000"
            }
        }
      },
      {
        opposite: true,
        min: 0,
        gridLineColor: '#B9CFD7', 
        gridLineWidth: 0.5,
        lineColor: '#B9CFD7', 
        title: {
            style: {
                color: "#000000",
                fontSize: null
            },
            text: null
        },
        labels: {
        	format: "{value:,.0f}",
            style: {
                color: "#000000"
            }, 

        }
      }
    ],
  plotOptions: {
    series: {
        stacking: null,
        pointPadding: 0,
        borderWidth: 0,
    "column": {
        "colorByPoint": true
    }        
    //pointWidth: 10, 

    }, 
    scatter: {
        yAxis: 1,
    }
  },
 "legend": { 
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
    	"fontWeight": "normal",
  	},
    labelFormatter: function(){
    	return this.name.replace(' (', '<br/>(');
  	},
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  chart: {
        type: 'column',
             
 }
	};
}());

 