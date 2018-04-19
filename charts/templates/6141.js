(function(){
    return {
"plotOptions": {
    "series": {
       borderWidth: 0,
      "pointWidth": 30,
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1
  },  
  "yAxis": {
      "labels": {
      "format": "{value:,.0f}%",
    },
	"max": undefined
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#b00000", "index": 5}, /*rot */
  {"color": "#2f656b", "index": 4}, /*dunkelblau */
  ],
  "chart": {
    //"renderTo": 'container-I.01.1.0016', 
    //"marginBottom": 75,
    //"marginTop": 75,
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
  "footerFormat": 'Total: <b>{point.total:,.1f}%</b>',
   "shared": true
  },
}
}());
