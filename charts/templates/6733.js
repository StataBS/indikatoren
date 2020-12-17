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
  	min: 0,
    "type": "category",
    "tickInterval": 1,
    labels:{
      rotation:-45,
      step: 1,
      formatter: function(){
        return this.value.replace("und","u.");
      },
    }
  },  
  "yAxis": {
  	 max: 100,
     tickInterval: 20,
    "labels": {
      "format": "{value:,.0f}%",
    },
  },

  "series": [
    {"color": "#71a3b5", index: 5, legendIndex: 1}, 
    {"color": "#672773", index: 4, legendIndex: 2}, 
    {"color": "#ff8028", index: 3, legendIndex: 3}, 
    {"color": "#73ba7c", index: 2, legendIndex: 4}, 
    {"color": "#E7CEE2", index: 1, legendIndex: 5}, 
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    spacing: [6,2,2,2], 	
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
   "shared": false
  },
  "legend": {
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "top",
    "align": "right",
    reversed: true,
    labelFormatter: function(){
      return this.name.replace(" ", "<br/>").replace("-", "-<br/>").replace("unbek", "<br/>unbek").replace("istka", "ist-<br/>ka");
    },
    "itemStyle": {
      "fontWeight": "normal", 
      lineHeight: 10
    }
  },
};
}());
