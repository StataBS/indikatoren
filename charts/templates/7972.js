(function(){
    return {
    series: [
        {
            color: "rgb(237, 226, 208)",
        },
        {
            color: "rgb(197, 171, 146)",
        },
        {
            color: "rgb(159, 124, 90)",
        },
        {
            color: "rgb(138, 138, 138)",
        }
  ],
  xAxis: {
      type: "category"
  },
  yAxis: {
      min: 0,
      max: 70,
      tickAmount: 6,
      tickInterval: 14,
      reversedStacks: false
  },
  plotOptions: {
    series: {
        stacking: 'normal', 
        dataLabels: {
            enabled: false,
            style: {
                fontSize: "10px", 
                color: 'black', 
                fontWeight: 'normal',
                textOutline: undefined
            }
        }
    }
  },
  legend: {
        reversed: false,
        layout: "horizontal",
        verticalAlign: "top",
        itemMarginBottom: 5,     
        align: "left",
        useHTML: false,
        itemStyle: {
            fontWeight: "normal"
        },
        symbolRadius: 0,
  },
  
  data: {
      //only keep first and last year
      parsed: function(columns){
            columns.forEach(function(column, i, arr){
                column.splice(2, column.length-3);
            });
      }
  },
  chart: {
      type: 'column',
 }
	};
}());

 