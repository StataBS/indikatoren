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
    tickAmount: 5,
    //max: 2000,
      labels: {
      format: "{value:,.0f}"
    },
    //reversedStacks: true
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> GWh ({point.percentage:,.1f}%)<br/>',
    footerFormat: 'Total: <b>{point.total:,.0f}</b> GWh<br/>'
 },
  legend: {
    enabled: true,
    layout: "horizontal",
    verticalAlign: "top",
    align: "left",
    alignColumns: false,
    //itemWidth: 95,
    itemStyle: {
      fontWeight: "normal",
      textOverflow: "none",
      whiteSpace: "nowrap"
    },
    width: 320,
    itemWidth: 106
  },
  series: [
    {
      color: "#FF8028",
    },
    {
      color: "#DC440E",
    },
    {
      color:  "#B00000",
    },
	  {
      color:  "#B375AB",  
    },
    {
      color: "#662673", 
    },
    {
      color:"#2F656B", 
    },
    {
      color:"#73B97C",
    },
    {
      color:"#68AB2B",
    },
    {
      color:"#9E7C59",
    },
    {
      color:"#C4AB91",
    }
  ],
  chart: {    
    /*marginBottom: 75,
    marginTop: 75,*/
    type: "column"
  }
	}
}());
