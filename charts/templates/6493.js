(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      borderWidth: 0,
      "pointWidth": 20,
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
	 "rotation": 0,
     //tickInterval: 60000,
    "labels": {
      "format": "{value:,.0f}%",
    },
  },
  "legend": {
  	//"itemWidth": 145,
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right",
    reversed: true,
    itemMarginBottom: 5,
    labelFormatter: function(){
      return this.name.replace(" ", "<br/>").replace("-", "<br/>");
    },
	  //"y": 30,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#71a3b5", index: 6, legendIndex: 0}, 
  {"color": "#672773", index: 5, legendIndex: 1}, 
  {"color": "#ff8028", index: 4, legendIndex: 2}, 
  {"color": "#73ba7c", index: 3, legendIndex: 3}, 
  {"color": "#E7CEE2", index: 2, legendIndex: 4},
  {"color": "#fabd24", index: 1, legendIndex: 5}, 
  {"color": "#999999", index: 0, legendIndex: 6}, 
],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 130,
    //"marginTop": 75,
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
   "shared": false
  },
}
}());
