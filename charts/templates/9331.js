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
        columns.splice(5, 0, [columns[5][0]]);
				columns.splice(7, 0, [columns[7][0]]);
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
					colors: ["#FABD24","#FABD24","#FABD24",/*"#ECE1D0"*/"rgba(250,189,36,0.3)","#FABD24","#FABD24","#FABD24","#FABD24"],
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
					colors: ["#7F5F1A","#7F5F1A","#7F5F1A","rgba(127,95,26,0.3)","#7F5F1A","#7F5F1A","#7F5F1A","#7F5F1A"],  
					colorByPoint: true,
        },
        {
    			//used only to have a legend item with a defined color despite colorByPoint is true
    			id: 'dummy2',
    			color: "#FF8028",
    			grouping: false, 
          type: 'scatter',
          yAxis: 1,
          marker: {
              enabled: true,
              symbol: 'circle', 
              radius: 3
          },
    		},
        {
          linkedTo: 'dummy2',
          colors: ["#FF8028","#FF8028","#FF8028","rgba(255,128,40,0.3)","#FF8028","#FF8028","#FF8028","#FF8028"],  
					colorByPoint: true,
            type: 'scatter',
            yAxis: 1,
            marker: {
            		enabled: true,
                symbol: 'circle', 
                radius: 3
            },
            pointPlacement : -0.15
        },
        {
    			//used only to have a legend item with a defined color despite colorByPoint is true
    			id: 'dummy3',
    			color: "#68AB2B",
    			grouping: false, 
          type: 'scatter',
          yAxis: 1,
          marker: {
              enabled: true,
              symbol: 'circle', 
              radius: 3,
          },
    		},
        {
          linkedTo: 'dummy3',
          colors: ["#68AB2B","#68AB2B","#68AB2B","rgba(68,171,43,0.3)","#68AB2B","#68AB2B","#68AB2B","#68AB2B"],  
					colorByPoint: true,
            type: 'scatter',
            yAxis: 1,
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
        }  

  },
  yAxis: [
      {
        tickAmount: 5,
        max: 400000000,
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
        tickAmount: 5,
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
      minPointLength: 2,
        stacking: null,
        pointPadding: 0,
        borderWidth: 0,
    "column": {
        "colorByPoint": true
    } , 
    scatter: {
      colorByPoint: true
  } 
    //pointWidth: 10, 
    }, 

  },
 "legend": { 
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    itemDistance: 5,
    "itemStyle": {
    	"fontWeight": "normal",
  	}
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  "chart": {
    type: "column",
    width: 662,
    height: 208,
}
	};
}());

 