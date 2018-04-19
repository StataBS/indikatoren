(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      borderWidth: 0,
      "pointWidth": 10,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1
  },  
  "yAxis": {
     //tickInterval: 60000,
    "labels": {
      "format": "{value:,.0f}",
    },
  },
  "legend": {
  	"itemWidth": 100,
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
  {"color": "#7F5F1A", index: 1, legendIndex: 0}, /**/
  {"color": "#FABD24", index: 0, legendIndex: 1}, /**/
],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    //"marginTop": 75,
    "type": "column",
    "inverted": false
  },
  "tooltip": {
    headerFormat: '<style="font-size: 10px">Alter: {point.key}</span><br/>',
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.0f}</b><br/>',
   "shared": false
  },
}
}());
