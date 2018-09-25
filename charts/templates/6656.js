(function(){
    return {
"plotOptions": {
    "series": {
      //borderWidth: 0,
      //pointWidth: 5,
      "stacking": "normal"
    }
  },
  "xAxis": {
  	min: 0,
    "type": "category",
    labels:{
    	step:1,
    	rotation: -45, 
    }
  },  
  "yAxis": {
     tickInterval: 15000,
     max: 75000,
    "labels": {
      //y: 10,
      "format": "{value:,.0f}",
    },
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
  {"color": "#246370", index: 9, legendIndex: 0}, /**/
  {"color": "#923F8D", index: 8, legendIndex: 1}, /**/
  {"color": "#7F5F1A", index: 7, legendIndex: 2}, /**/
  {"color": "#CD9C00", index: 6, legendIndex: 3}, /**/
  {"color": "#007A2F", index: 5, legendIndex: 4}, /* */
  {"color": "#DC440E", index: 4, legendIndex: 5}, /**/
],
  "chart": {
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
   "shared": false
  },
}
}());
