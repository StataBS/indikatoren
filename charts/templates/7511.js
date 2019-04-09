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
          tickAmount: 9,
          tickInterval:200,
      },
      "series": [
        {
            stack: 1,
            legendIndex: 1,
            color: 'rgb(115, 186, 124)'
        },
        {
            stack: 1,
            legendIndex: 3,
            color: 'rgb(250, 189, 36)'
        },
        {
            stack: 2,
            legendIndex: 0,
            color: 'rgb(0, 122, 47)'
        },
        {
            stack: 2,
            legendIndex: 2,
            color: 'rgb(205, 156, 0)'
        }
      ],
      "legend": {
        "enabled": true,
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "left",
       // itemWidth: 180, 
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
