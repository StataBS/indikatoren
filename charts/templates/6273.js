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
    min: -4,
    max: 12,
    tickInterval: 1,
    "labels": {
      rotation: 0,
      y: 12,
      "format": "{value}%"
    }    
  },
  "series": [
  {"color": "#B00000"}, /* Schweiz = rot */
  {"color": "#6F6F6F"}, /* BS = dunkelgrau */
  {"color": "#256370",
  	"visible": false, showInLegend: false}, /* GE = dunkelblau */
  {"color": "#71a3b5",
  	"visible": false, showInLegend: false}  /* ZH = hellblau */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  //"y": 60,   
	 // "itemWidth": 75,
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
    "inverted": true,
    width: 665
  },
  plotOptions: {
    series: {
        borderWidth: 0,
        pointPadding: 0.13
    }
},
};
}());

