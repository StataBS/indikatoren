(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      borderWidth: 0,
      "pointWidth": 80,
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
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#008AC3", index: 5, legendIndex: 0}, 
  {"color": "#68AB2B", index: 4, legendIndex: 1},
  {"color": "#E6E600", index: 3, legendIndex: 2}, 
  {"color": "#FABD24", index: 2, legendIndex: 3}, 
  {"color": "#DC440E", index: 1, legendIndex: 4},
  {"color": "#999999", index: 0, legendIndex: 5}, 
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
   "shared": false
  },
}
}());
