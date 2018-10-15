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
  {"color": "#B00000"}, /* Schweiz = dunkelrot */
  {"color": "#6F6F6F"}, /* BS = dunkelgrau */
  {"color": "#FABD24",
  	"visible": false}, /* GE = gelb */
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

