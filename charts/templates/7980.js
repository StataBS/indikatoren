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
        "labels": {
            rotation: 0  
            //"format": "{value}%"
        }
      },
      "yAxis": {
        "min": 0,
        "max": 150000,
            reversedStacks: false, 
          tickAmount: 5
      },
      "series": [
        {
            stack: 1,
            color: 'rgb(220, 68, 14)'
        },
        {
            stack: 1,
            color: 'rgb(168, 196, 203)'
        },
        {
            stack: 2,
            color: 'rgb(176, 0, 0)'
        },
        {
            stack: 2,
            color: 'rgb(105, 146, 155)'
        }
      ],
      "legend": {
        "enabled": true,
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "left",
        itemWidth: 132,
        itemDistance: 4,
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
