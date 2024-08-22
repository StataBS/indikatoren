(function(){
    return {
  "plotOptions": {
    "series": {
      //"pointWidth": 25,
      "dataLabels": {
        "style": {
          "fontSize": 10
        }
      },
      "stacking": "normal"
    }
  },
  xAxis: {
    type: "category"    
  },  
  yAxis: {
    labels: {
      format: "{value:,.0f}"
    },
    "reversedStacks": false
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },  
  "legend": {
    "layout": "horizontal",
    itemDistance: 18,
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
   
    {
      "color": "#246370",
      "legendIndex": 4  
    },
    {
      "color": "#D3E2E4",
      "legendIndex": 3  
    },
    {
      "color": "#68AB2B ",
      "legendIndex": 2  
    },
    {
      "color": "#662673",
      "legendIndex": 1  
    }        
  ],
  "chart": {    
    "type": "column"
  }
	}
}());
