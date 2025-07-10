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
          minPointLength: 2
        }
   },
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": -45 
    } 
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
 "series": [
  {"color": "#FFDA80 "}, /* gelb */
	{"color": "#2E1435"},/* blau  */
	{"color": "#9A86A6"},/* grün  */
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
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": true
  },
  "chart": {      
    "type": "column",
    "inverted": false,
    "spacingBottom": 50
  }
}
}());