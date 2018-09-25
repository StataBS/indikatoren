(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      borderWidth: 0,
      "pointWidth": 40,
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
    "tickInterval": 1,
    labels:{
    rotation:0,	
    }
  },  
  "yAxis": {
  	 max: 100,
     tickInterval: 25,
    "labels": {
      "format": "{value:,.0f}%",
    },
  },

"legend": {
    enabled: true,
    "layout": "vertical",
    "verticalAlign": "middle",
    reversed: true,
    "itemMarginBottom": 5, // space between legend boxes
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },

 "series": [
  {"color": "#672773", index: 5, legendIndex: 0}, 
  {"color": "#b475ab", index: 4, legendIndex: 1},
  {"color": "#73ba7c", index: 3, legendIndex: 2}, 
  {"color": "#fabd24", index: 2, legendIndex: 3}, 
  {"color": "#007a2f", index: 1, legendIndex: 4},
  {"color": "#999999", index: 0, legendIndex: 5}, 
  ],
  "chart": {
  	 spacing: [5,2,2,2],
    "renderTo": 'container-I.01.1.0016', 
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
   "shared": false
  },
};
}());
