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
    tickAmount: 7,
    //max: 1800,
    min: 0,
      labels: {
      format: "{value:,.0f}"
    },
    reversedStacks: true
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y} GWh</b> ({point.percentage:,.1f}%)<br/>',
    footerFormat: 'Total: <b>{point.total:,.0f} GWh</b><br/>'
 },
  legend: {
    enabled: true,
    layout: "horizontal",
    verticalAlign: "top",
    align: "left",
    //alignColumns: false,
    //itemWidth: 300,
    itemDistance: 10,
    itemStyle: {
      fontWeight: "normal"
    }
  },
  series: [
    {
      color: "#DC440E",
      legendIndex: 0     
    },
    {
      color:  "#FF8028", 
      legendIndex: 1
    },
	  {
      color:  "#A8C3CA", 
      legendIndex: 2     
    },
    {
      color:"#689199", 
      legendIndex: 3
    },
    {
      color:"#246370", 
      legendIndex: 4
    }/*,
    {
      color:"#083038", 
      legendIndex: 5
    }*/
  ],
  chart: {    
    /*marginBottom: 75,
    marginTop: 75,*/
    type: "column"
  }
	}
}());
