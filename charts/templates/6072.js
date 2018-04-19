(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      borderWidth: 0,
      "pointWidth": 20,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
  	min: 0,
    "type": "category",
    "tickInterval": 1
  },  
  "yAxis": {
  	max: 100,
     //tickInterval: 60000,
    "labels": {
      "format": "{value:,.0f}%",
    },
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    itemDistance: 15,
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
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    //"marginTop": 75,
    "type": "column",
    "inverted": true
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
   "shared": false
  },
}
}());
