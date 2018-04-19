(function(){
    return {
  
  "xAxis": {
    "type": "category",
    },
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
        }
   },
  "yAxis": {
	"max": 3500,
	"tickInterval": 500,
 min: -1500,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#990300", "visible": true}, /* rot*/
    {"color": "#0F7399", "visible": true}, /* blau*/
  {"color": "#000000", "visible": true} /* schwarz */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //itemWidth: 300,
    //"x": 40,
    //"y": 55,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false,
    "spacingBottom": 40
  }
}
}());