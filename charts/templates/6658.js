(function(){
    return {
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": 0,
      y: 3,
      step: 1,
    } 
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}%",
      y: 18, 
      style: {
        textOverflow: 'none'
      }
    }    
  },
  "series": [
  {"color": "#E6E600", "visible": true}, /* gelb*/
  {"color": "#68AB2B", "visible": true} /* grün */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    padding: 1,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": true,
    marginLeft: 120
  }
};
}());