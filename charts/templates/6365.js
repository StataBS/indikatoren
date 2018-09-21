(function(){
    return {
  title: {
      useHTML: true
    },
    subtitle: {
      useHTML: true
    },
	plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
  "data":{
  	"switchRowsAndColumns": true
  },
  "xAxis": {
    "type": "category"
  },
  "yAxis": {
  	"min": 0,
    "labels": {
      "format": "{value}" 
    }    
  },
  "series": [
  {"color": "#008AC3", "visible": true}, /* blau*/
  {"color": "#B00000", "visible": true}, /* rot */
  {"color": "#3C3C3C", "visible": true} /* schwarz */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	  //"y": 35,  
	  //"itemWidth": 300,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f} m²</b><br/>',
    shared: false
  },  
  "chart": {      
    "type": "column",
    "inverted": false,
    spacingBottom: 50,
  }
}
}());

 




