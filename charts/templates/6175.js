(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
             groupPadding: 0,
        }
  },
  "yAxis": {
  	max: 42000,
  	tickInterval: 10500,
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
  	"type": "category",
   "tickInterval": 1,
          "labels": {
          	align: "left",
          	step: 1,
            "rotation": 0,
             overflow: 'justify',
             x: -80
       }  
  },
 "legend": {
    enabled:true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5, 
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#b475ab",
      "index": 3,
      "type": "column",
      //"pointWidth": "15",
      legendIndex: 3
    },
    {
      "color": "#a8c4cb",
      "index": 2,
      "type": "column",
      //"pointWidth": "15",
      legendIndex: 2
    },
    {
      "color": "#fabd24",
      "index": 1,
      "type": "column",
      //"pointWidth": "15",
      legendIndex: 1
    },
    {
      "color": "#68AB2B",
      "index": 0,
      "type": "column",
      //"pointWidth": "15",
      legendIndex: 0
    },    
  ],  
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  },
  "chart": {
  	  marginLeft:95,
     "inverted": true,
  }
};
}());

