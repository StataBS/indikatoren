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
      y: 3,
      step: 1,
      rotation: 0,
      formatter: function(){
		    return this.value.replace("und", "u.");
		  },
      
    } 
  },
  "yAxis": {
    labels: {
      "format": "{value:,.0f}",
      y: 18
    }    
  },
  "series": [
  {"color": "#E6E600", "visible": true}, /* gelb*/
  {"color": "#68AB2B", "visible": true} /* grün */
  ],
  "legend": {
  	x:114,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": true,
    marginLeft: 120
  }
};
}());