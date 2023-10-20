(function(){
    return {
   plotOptions: {
        series: {
        }
   },
  "xAxis": {
    "type": "category",
    "labels": {
      style: {
        fontSize: "10px"
      },
      "rotation": 0 
    } 
  },
  "yAxis": {
    //tickAmount: 10,
    tickInterval: 1000,
    //max: 9000,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#923F8D", "visible": true}, 
  ],
  "legend": {
    "enabled": false,
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
    "type": "column",
    "inverted": false,
    //"spacingTop": 100
  },
}
}());