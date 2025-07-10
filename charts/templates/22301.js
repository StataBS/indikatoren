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
          //tickAmount: 9,
          //tickInterval:200,
      },
      "series": [
        {
            stack: 1,
            legendIndex: 0,
            color: "#D3E2E4"
        },
        {
            stack: 1,
            legendIndex: 2,
            color: "#A8C3CA" 
        },
        {
          stack: 1,
          legendIndex: 3,
          color: "#689199"
      },
        {
            stack: 2,
            legendIndex: 4,
            color: "#B00000"
        },
        {
            stack: 3,
            legendIndex: 5,
            color: "#68AB2B"
        }
      ],
      "legend": {
        "enabled": true,
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "left",
        //itemWidth: 200, 
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
           pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y:,.0f}</b><br/>',    
           footerFormat: 'Total : <b>{point.total:,.0f}</b>',
           shared: false
          }
	};
}());
