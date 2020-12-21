(function(){
    return {
  xAxis: {
    tickInterval: 1, 
    labels: {
      step: 1,
      formatter: function(){
        //show first, last, and every 10th year
        if (this.isFirst || this.isLast || (this.value - this.chart.series[0].xData[0]) % 17 == 0){
          return this.value;
        }
      }
    }
  },
  yAxis: 
    {
      min: 0.0,
      tickInterval: 0.5,  
      max: 3.5,
      //tickAmount: 8,
      gridLineColor: '#B9CFD7', 
      gridLineWidth: 0.5,
      title: {
        style: {
          color: "#000000",
          fontSize: null
        },
        text: null
      },
      labels: {
  		  format: "{value:,.1f}", 
        style: {
          color: "#000000",
          fontSize: '10px'
        }
      }
    },	
    chart: {
      marginRight: 15
    },
  "tooltip": {
    "shared": false, 
	  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b><br/>'
  },
 "series": [
   {
     color: 'rgb(176, 0, 0)'
   }, 
   {
     color: 'rgb(105, 146, 155)'
   }
	  ],
  "legend": {
    "enabled": true,
    //"y": 30,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
}
}());