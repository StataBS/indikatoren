/*
global Highcharts
*/

(function(){
    return {
 plotOptions: {
        series: {
            pointPadding: 0,
        }
    },
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": 0 
    } 
  },
  "yAxis": {
  	tickInterval: 0.2,
    "labels": {
      "formatter": function(){
        return  Highcharts.numberFormat(100 * this.value, 0, ",", " ") + "%";
      }
    }    
  },
  "series": [
  {"color": "#b00000", "visible": true}, /* grüm*/
  {"color": "#cd9c00", "visible": true} /* orange */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    pointFormatter: function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> '+ this.series.name + ': <b>'+ Highcharts.numberFormat(100 * this.y, 1, ",", " ") + '%</b><br/>';
    },
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false,
  }
};
}());