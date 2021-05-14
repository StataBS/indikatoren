(function(){
    return {
        "legend": {
            "enabled": true,
            "layout": "horizontal",
            "verticalAlign": "top",
            "itemMarginBottom": 5,
            "align": "left",
            itemWidth: 200,
  width: 400,
  itemStyle: {
    textOverflow: "none",
    whiteSpace: "nowrap"
  }
          },
    series: [
        {
            color: "#FFDA80",
            index: 0,
            legendIndex: 2 
        },
        {
            color: "#CD9C00",
            index: 1,
            legendIndex: 1 
        },/*
        {
            color: "#D7E8D2",
            index: 2,
            legendIndex: 2 
        },*/
        {
            color: "#007A2F",
            index: 2,
            legendIndex: 0
        }/*,
        {
            color: "#E7CEE2",
            index: 4,
            legendIndex: 4 
        },
        {
            color: "#B00000",
            index: 5,
            legendIndex: 5 
        }*/ 
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
    tickInterval:500,
    reversedStacks: false,
    labels: {
        format: "{value:,.0f}",
        y:4
    }
},
	}
}());

 