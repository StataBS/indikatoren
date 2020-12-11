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
    "itemMarginBottom": 0,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  plotOptions: {
    series: {
      dataLabels: {
          enabled: false,
          formatter: function() {
          //# Display only Max/Min labels
           if (this.point.y === this.series.dataMin || this.point.y === this.series.dataMax) {
           return Highcharts.numberFormat(this.point.y, 2, ",", " ");
          }
          /*        
            var max  = this.series.data[this.series.data.length - 1];
            var min  = this.series.data[2];
            if (this.point.x === min.x || this.point.x === max.x) {
              return Highcharts.numberFormat(this.point.y, 2, ",", " ");
            }*/
            return "";
          },
          style: {
              fontSize: "10px", 
              color: 'black', 
              fontWeight: 'normal',
              textOutline: undefined
          }
      }
  },
        "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  
}
}());