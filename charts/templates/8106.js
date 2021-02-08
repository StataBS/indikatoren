(function(){
    return {
    xAxis: {
        type: "category", 
        labels: {
            formatter: undefined,
            style: {
                fontSize: "10px"
            }
        }
    },
    yAxis: {
        type: "linear",
        tickAmount: 5,
        tickInterval: 25,
        reversedStacks: false,
        labels: {
            rotation: 0,
            y: 15
        }
    },   
    series: [
        {
        color: "#923F8D"
        },
        {
        color: "#FF8028"
        },
        {
        color: "#73B97C"
        },      
    ],        
    legend: {
        layout: "horizontal",
        verticalAlign: "top",
        itemMarginBottom: 5,     
        align: "left",
        //itemWidth: 250,
        //x: -1,
        itemStyle: {
            fontWeight: "normal"
        }
    },      
    chart:
    {
        height: 350, // ***
        width: 650,//535,
        inverted: true
    },
    plotOptions: {
        series: {
          groupPadding: 0.1
        }
      },
      tooltip: {
        footerFormat: '\u25CF Total: <b>{point.total:,.0f}</b><br/>'
     },
	}
}());
 