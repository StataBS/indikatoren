(function(){
    return {
"plotOptions": {
    "series": {
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
    labels:{
    	rotation: -45,
    	padding: 0,
    	step: 1,
    }
  },  
  "yAxis": {
     tickAmount: 7,
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
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#7F5F1A", index: 1, legendIndex: 0}, /**/
  {"color": "#FABD24", index: 0, legendIndex: 1}, /**/
],
  "chart": {
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
