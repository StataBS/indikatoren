(function(){
    return {
   "chart": {   
  	"width":665,
    "type": "column",
    "inverted": false,
   //spacing: [3,3,10,3], /*top, right, bottom and left */ /*[3,3,3,3]*/
  },
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": -90 
    } 
  },
  "yAxis": {
	"max": 30000,
	tickInterval: 15000,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#FABD24", "visible": true}, /* hellrot*/
  {"color": "#B00000", "visible": true}, /* dunkelrot */
   ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 35,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },
  plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
        }
    }
}
}());