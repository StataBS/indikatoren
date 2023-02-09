(function(){
  return {
    xAxis: {
      tickInterval: 1, 
    },
    yAxis: 
      {
        min: 30
      },	
    "tooltip": {
      "shared": false, 
  	  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
   "series": [
     {
       color: 'rgb(176, 0, 0)'
     }, 
     {
       color: 'rgb(105, 146, 155)'
     }
  	  ],
    "legend": {
      "enabled": true,
      //"y": 35,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "chart": {
      "marginRight": 20
    },
    "plotOptions": {
      "line": {
        "marker":{
          "enabled": false,
          "symbol": "circle",
        } 
      }
    }
  };
}());