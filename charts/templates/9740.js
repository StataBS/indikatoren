(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
            pointWidth: 10,
        }
   },
  xAxis: {
    type: "category",
    labels: {
      rotation: -90 
    } 
  },
  yAxis: {
   // tickAmount: 8,
   // tickInterval: 1000,
   max: 100,
    labels: {
      format: "{value:,.0f}%"
    }    
  },
  series: [
  {color: "#923F8D", 
  visible: true},
  ],
  legend: {
    enabled: false,
    layout: "horizontal",
    verticalAlign: "top",
    align: "left",
    //"x": 25,
	//"y": 55,    
    itemStyle: {
      fontWeight: "normal"
    }
  },
   tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
    shared: false
  },
  chart: {      
    type: "column",
    inverted: false,
    //"spacingTop": 100
  }
}
}());