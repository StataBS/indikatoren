(function(){
    return {
  "xAxis": {
    "type": "category",
      /*labels: {
        style: {
            textOverflow: 'none'
        }
    }*/ 
  },
  "yAxis": {
    min: null,
    "labels": {
      "format": "{value}%"
    }    
  },
  "series": [
  {"color": "#8a8a8a"}, /* Schweiz = hellgrau */
  {"color": "#ff8028"}, /* BS = orange */
  {"color": "#256370",
  	"visible": false}, /* GE = dunkelblau */
  {"color": "#71a3b5",
  	"visible": false}  /* ZH = hellblau */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    shared: false
  },  
  "chart": {      
    "type": "column",
    "inverted": true /* false */
  },
}
}());

