(function(){
    return {
   "chart": {
    "type": "area",
   },
  plotOptions: {
        /*series: {
        	"stacking": "normal",
			pointPadding: 0,
            borderWidth: 0,
            pointWidth: 10, 

        }*/
         area: {
            stacking: 'normal',
            //lineColor: '#666666',
            lineWidth: 0,

        }
  },
  "yAxis": {
    "max": 1750000,
    tickInterval: 250000,
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
  	"type": "category",
  	tickInterval: 17,
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  //"y": 40,
 	  itemWidth: 100,
 	  labelFormatter: function(){
      //only return last word
      return this.name.split(" ").slice(-1);
    },
  	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
		{
            color: 'rgb(176, 0, 0)', index: 1, legendIndex:0,
        },
        {
            color: 'rgb(105, 146, 155)', index: 0,legendIndex:1,
        }
  ],  
     tooltip: {
         pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} ({point.percentage:.1f}%)</b><br/>',
         footerFormat: '<span style="color: black">\u25CF</span> Total: <b>{point.total:,.0f}</b>'
     }, 
};
}());


/*(function(){
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
      xAxis: {
          type: 'linear',
        tickInterval: 1, 
        labels: {
          step: 1,
          formatter: function(){
            //show first, last, and every 10th year
            var xData = this.chart.series[0].xData;
            if (xData[0] == this.value || xData[xData.length-1] == this.value || (this.value - xData[0]) % 10 == 0){
              return this.value;
            }
          }
        }
      },
      "yAxis": {
          reversedStacks: false, 
          tickAmount: 7
      },
      "series": [
        {
            color: 'rgb(176, 0, 0)'
        },
        {
            color: 'rgb(168, 196, 203)'
        }
      ],
      "legend": {
        "enabled": true,
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "left",
		"y": 15,    
        "itemStyle": {
          "fontWeight": "normal"
        }, 
        labelFormatter: function(){
            //only return last word
            return this.name.split(" ").slice(-1);
        },
      },
      "chart": {      
        "type": "column"
      }
	};
}());*/
