(function(){
    return {
      "plotOptions": {
          column: {
              stacking: 'normal'
          },
        "series": {  
            pointPadding: 0,
            borderWidth: 0,
            //pointWidth: 10, 
          "dataLabels": {
            "style": {
              "fontSize": "10px"
            }
          }
        },
      },
      "xAxis": {
        tickInterval: 1
      },
      "yAxis": {
          max: 200000,
          tickAmount: 6,
          tickInterval: 40000,
          reversedStacks: false, 
         
      },
      "series": [
        {
            stack: 1,
            color: '#008AC3'
        },
        {
            stack: 1,
            color: '#B00000'
        },
        {
            stack: 2,
            color: '#00bAf3'
        },
        {
            stack: 2,
            color: '#F05A23'
        }
      ],
      "legend": {
        "enabled": true,
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "left",
        width: 300,
        itemWidth: 140, 
        itemDistance: 1,
        itemMarginBottom: 5,
		    //"y": 35,    
        "itemStyle": {
          "fontWeight": "normal"
        }
      },
      "chart": {      
        "type": "column"
      },
	tooltip: {
           //headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
           pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y:,.0f}</b><br/>'    
            }
	};
}());
// JavaScript File