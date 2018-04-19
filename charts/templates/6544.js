/*  
global Highcharts
*/

(function(){
    return {
  xAxis: {
    labels: {
      step: 1, 
      //only display month, not year
      formatter: function(){
        return this.value.slice(0, 3);
      }
    }
  },
  yAxis: 
    {
      min: 0, 
      //max: 3.25,
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
          color: "#000000"
        }
      }
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
    //"y": 35,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
        formatter: function(){
          //only create dataLabels for max or min value within a series
          if (this.y == Math.max.apply(null, this.series.yData) || this.y == Math.min.apply(null, this.series.yData)){
            return Highcharts.numberFormat(this.y, 2, ",", " ");
          }
        }
      },
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
}
}());