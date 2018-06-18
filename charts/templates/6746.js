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
      "rotation": -90,
       step:1
    } 
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#68AB2B", "visible": true}, /* grün */
  {"color": "#E6E600", "visible": true}, /* gelb*/
  ],
  "legend": {
  	x:-5,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  "chart": {
  	spacing: [0,3,0,3], /*top, right, bottom and left */
    "type": "column",
    "inverted": false,
  }
}
}());