/*
    global Highcharts
*/

(function(){
    return {
    series: [
        {
            color: "#FABD24",
        },
        {
            color: "#DC440E",
        }       
  ],
      xAxis: {
          type: "category",
          labels: {
            step: 1,
            rotation:-45,
          }  
    
      },
      yAxis: [
      {
        gridLineColor: '#B9CFD7', 
        gridLineWidth: 0.5,
        lineColor: '#B9CFD7', 
        title: {
            style: {
                color: "#000000",
                fontSize: null
            },
            text: null
        },
        labels: {
        	format: "{value:,.0f}",
            style: {
            color: "#000000"
            }
        }
      }
    ],
  plotOptions: {
    series: {
        stacking: null,
        pointPadding: 0,
        borderWidth: 0,
        //pointWidth: 10, 

    }
  },
 legend: { 
     labelFormatter: function(){
         return this.name.replace(' (', '<br/>(');
     },
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
        "fontWeight": "normal"
    },
    padding: 1,
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

 