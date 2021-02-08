(function(){
    return {
  plotOptions: {
    series: {
      dataLabels: {
        style: {
          fontSize: "10px"
        }
      },
      stacking: "percent",
    }
  },
  xAxis: {
    type: "category"    
  },  
  yAxis: {
    tickAmount: 6,
      labels: {
      format: "{value:,.0f}%"
    },
    reversedStacks: false
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:,.1f}%)<br/>',
    footerFormat: '\u25CF Total: <b>{point.total:,.0f}</b><br/>',
    shared: true
 },
  legend: {
    enabled: true,
    layout: "horizontal",
    verticalAlign: "top",
    align: "left",
    //itemWidth: 300,
    itemStyle: {
      fontWeight: "normal"
    }
  },
  series: [
    {
      color: "#2F656B",
      legendIndex: 0     
    },
    {
      color: "#BAA85A",
      legendIndex: 1
    },
	  {
      color: "#8B2223",
      legendIndex: 2     
    }
  ],
  chart: {    
    /*marginBottom: 75,
    marginTop: 75,*/
    type: "column",
    width: 665
  }
	}
}());
