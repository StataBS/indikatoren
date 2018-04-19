(function(){
    return {
    series: [
        {
            color: "rgb(231, 207, 226)",
        },
        {
            color: "rgb(180, 117, 171)",
        },
        {
            color: "rgb(103, 39, 115)",
            type: 'scatter',
            marker: {
                symbol: 'diamond', 
                radius: 8
            },
            tooltip: {
              headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
              pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y:,.0f}</b><br/>'    
            }
        }        
  ],
  "xAxis": {
      "type": "category"
  },
  plotOptions: {
     series: {
        stacking: null,
        pointPadding: 0,
        borderWidth: 0,
        //pointWidth: 10, 
    }, 
  },
  legend: {
    //y: 35,
    layout: "horizontal",
    verticalAlign: "top",
    itemMarginBottom: 5,     
    align: "left",
    useHTML: false,
    itemStyle: {
        fontWeight: "normal"
    },
    symbolRadius: 0,
  },
  data: {
      switchRowsAndColumns: true,
      //only keep first and last two lines
      parsed: function(rows){
          rows.splice(2, rows.length-4);
      }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  chart: {
      type: 'column',
 }
	};
}());

 