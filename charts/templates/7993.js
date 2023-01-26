(function(){
    return {
  plotOptions: {
    series: {
      dataLabels: {
        style: {
          fontSize: "10px"
        }
      },
      stacking: "normal",
    }
  },
  xAxis: {
    type: "category"    
  },  
  yAxis: {
    tickInterval: 200000,
    max: 1200000,
      labels: {
      format: "{value:,.0f}"
    },
    reversedStacks: false
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:,.1f}%)<br/>',
    footerFormat: '\u25CF Total: <b>{point.total:,.0f}</b><br/>'
 },
  legend: {
    enabled: true,
    layout: "horizontal",
    verticalAlign: "top",
    align: "left",
    itemWidth: 300,
    itemStyle: {
      fontWeight: "normal"
    }
  },
  series: [
    {
      color: "#FFBB58",
      legendIndex: 0     
    },
    {
      color: "#FF8028",
      legendIndex: 1
    },
	  {
      color: "#DC440E",
      legendIndex: 2     
    },
    {
      color: "#B00000",
      legendIndex: 3
    }
  ],
  chart: {    
    type: "column"
  }
	}
}());
