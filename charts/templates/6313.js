(function(){
    return {
  
  "xAxis": {
    "type": "category",
  },
  "yAxis": {
    //max: 40,
    //tickAmount: 5,
    tickInterval: 5,
    "labels": {
      "format": "{value:,.0f}%"
    }    
  },
  "series": [
  {"color": "#990300", "visible": true}, /* rot*/
  //{"color": "#007A2F", "visible": true} /* ... */
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
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false,
    spacingTop: 5,
  },
};
}());