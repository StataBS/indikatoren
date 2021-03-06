(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
			itemWidth: 10, 

        }
   },
  "xAxis": {
    "type": "category",
    "labels": {
    	"rotation": 0 
    } 
  },
  "yAxis": {
  	//max: 140000,
  	//tickInterval: 40000,
    "labels": {
      formatter: function(){
        return Highcharts.numberFormat(100 * this.value, 0, ",", " ") + '%';
      }
    }    
  },
  "series": [
  {"color": "#b00000", "visible": true}, /* */
  {"color": "#cd9c00", "visible": true} /*  */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	  //"y": 55,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    pointFormatter: function(){
      return '<span style="color:'+ this.series.color+'">\u25CF</span> '+ this.series.name + ': <b>'+ Highcharts.numberFormat(100 * this.y, 1, ",", " ") +'%</b><br/>';
      },
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": true,
    //"spacingTop": 100
  }
};
}());