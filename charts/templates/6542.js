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
      type: "category", 
      reversed: false
  },
  yAxis: {
      reversedStacks: false, 
      max: 9000,
      tickInterval: 1800,
      labels: { 
      	format: "{value:,.0f}", 
      	style:{ color: "black", },
      },
  },
  plotOptions: {
    series: {
        stacking: 'normal', 
        dataLabels: {
            enabled: true,
            format: "{point.y:,.0f}",
            style: {
                fontSize: "11px", 
                color: 'black', 
                fontWeight: 'normal',
                textOutline: undefined
            }
        }
    }
  },
  legend: {
        reversed: false,
        itemDistance: 5,
        layout: "horizontal",
        verticalAlign: "top",
        itemMarginBottom: 5,     
        align: "left",
        //y: 15,
        itemStyle: {
            fontWeight: "normal"
        },
        symbolRadius: 0,
  },
  
  data: {
      //only keep second last and last year
      parsed: function(columns){
            columns.forEach(function(column, i, arr){
                column.splice(1, column.length-3);
            });
      }
  },
  chart: {
      type: 'bar',
 }, 
 tooltip: {
     pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
 }
	};
}());

 