(function(){
    return {
    series: [
        {
            color: "#B375AB",
            index: 1,
            legendIndex: 1
        },
        {
            color: "#FFBB58",
            index: 3,
            legendIndex: 3 
        },
        {
            color: "#DC440E",
            index: 2,
            legendIndex: 2 
        },
        {
            color: "#A8C3CA",
            index: 0,
            legendIndex: 0
        },
        {
            color: "#246370",
            index: 4,
            legendIndex: 4 
        },
        {
            color: "#FF8028",
            index: 5,
            legendIndex: 5 
        }
  ],
  xAxis: {
      type: "category"
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:,.1f}%)<br/>',
    footerFormat: '<span style="color: black">\u25CF</span> Total: <b>{point.total:,.0f}</b>',
    shared: false
},
plotOptions: {
    series: {
        stacking: "normal"
    }
},
yAxis: {
    tickInterval:2000,
    reversedStacks: false,
    labels: {
        format: "{value:,.0f}"
    }
},
	}
}());

 