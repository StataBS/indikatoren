(function(){
    return {
"plotOptions": {
    "series": {
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1, 
    labels: {
      y: 3,
      padding: 0
    }
  },  
  "yAxis": {
  	max: 100,
  	tickInterval: 20,
    "labels": {
    	      rotation:0,
        y: 15,
        "format": "{value:,.0f}%",
        style:{
          textOverflow: 'none' // prevents ellipsis
        }
      },  
  	},
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
 "series": [
  {"color": "#B00000", index: 2, legendIndex: 0}, /**/
  {"color": "#FABD24", index: 1, legendIndex: 1}, /**/
],
  "chart": {
  	marginRight: 6,
    "type": "column",
    "inverted": true, 
    marginLeft: 150
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
   "shared": false
  },
};
}());
