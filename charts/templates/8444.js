(function(){
    return {
"plotOptions": {
    "series": {
      borderWidth: 0,
      pointPadding: 0.2,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "percent"
    }
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1
  },  
  "yAxis": {
     //tickInterval: 60000,
    "labels": {
      "format": "{value:,.0f}%",
    },
  },
  "legend": {
  	//"itemWidth": 100,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  //"y": 50,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#008AC3", index: 1, legendIndex: 0}, /**/
  {"color": "#B00000", index: 0, legendIndex: 1}, /**/
],
  "chart": {
   // "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    //"marginTop": 75,
    "type": "column",
    "inverted": false
  },
  "tooltip": {
    //"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} Mio. Franken</b> ({point.percentage:.1f}%)<br/>',
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.percentage:.1f}% </b> ({point.y:,.0f} Mio. Franken)<br/>',
    "shared": false
  },
}
}());
