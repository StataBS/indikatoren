(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
            pointWidth: 5, 
        }
   },
  "xAxis": {
    "type": "category",
    "labels": {
      sytep: 1, 
      y: 3,
      "rotation": 0,
      formatter: function(){
		    return this.value.replace("und", "u.");
		  },
    } 
  },
  "yAxis": {
  	tickInterval: 5,
  	//max: 20,
    "labels": {
      "format": "{value:,.0f}",
      y: 18, 
    }    
  },
  "series": [
  {"color": "#007A2F", "visible": true}, /* grüm*/
  {"color": "#DC440E", "visible": true} /* orange */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    padding: 1,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": true,
    marginLeft: 120
  }
};
}());