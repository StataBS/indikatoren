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
          borderWidth: 0,
        }
   },
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": 0 
    } 
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
 "series": [
  {"color": "#b00000 "}, /* rot */
	{"color": "#2B0099"},/* blau  */
	{"color": "#007A2F"},/* grüm  */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  itemDistance: 3,
	  symbolPadding: 3,
	  padding: 0,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f} m²</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false,
    "spacingBottom": 50
  }
}
}());