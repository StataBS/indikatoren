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
    //tickAmount: 7,
    //max: 6000,
      labels: {
      format: "{value:,.0f}"
    },
    reversedStacks: true
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} GWh</b> ({point.percentage:,.1f}%)<br/>',
    footerFormat: 'Total: <b>{point.total:,.0f} GWh</b><br/>'
 },
  legend: {
    enabled: true,
    layout: "horizontal",
    verticalAlign: "top",
    align: "left",
    alignColumns: false,
    itemWidth: 300,
    itemStyle: {
      fontWeight: "normal"
    }
  },
  series: [
    {
      color: "#FF8028"
    },
    {
      color:  "#DC440E"
    },
	  {
      color:  "#B00000"
    },
    {
      color: "#B375AB"
    },
    {
      color:"#662673"
    },
    {
      color:"#67401E"
    },
    {
      color:"#007A2F"
    }
  ],
  chart: {    
    type: "column"
  }
	}
}());
