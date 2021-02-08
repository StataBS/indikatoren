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
    type: "category",
    labels: {
      rotation: 0
    }   
  },  
  yAxis: {
    tickAmount: 8,
      labels: {
      format: "{value:,.0f}"
    },
    reversedStacks: false,
    maxPadding: 0.005,
    minPadding: 0.005
  },
  /*tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    shared: false
  },  */
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
    /*marginBottom: 75,
    marginTop: 75,*/
    type: "column"
  }
	}
}());
