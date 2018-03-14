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
      },
      "yAxis": {
          reversedStacks: false, 
          tickAmount: 7
      },
      "series": [
        {
            stack: 1,
            color: '#008AC3'
        },
        {
            stack: 1,
            color: '#923F8D'
        },
        {
            stack: 2,
            color: '#A8C3CA'
        },
        {
            stack: 2,
            color: '#B375AB'
        }
      ],
      "legend": {
        "enabled": true,
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "left",
        itemWidth: 180, 
        itemMarginBottom: 5,
		"y": 35,    
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
