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
  "xAxis": {
    "type": "category"    
  },  
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    },
    "reversedStacks": false
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
    "shared": false
  },  
  "legend": {
    "layout": "horizontal",
    itemDistance: 15,
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
      "legendIndex": 3  
    },
    {
      "color": "#D3E2E4",
      "legendIndex": 2  
    },
    {
      "color": "#68AB2B",
      "legendIndex": 1  
    },
    {
      "color": "#662673",
      "legendIndex": 0  
    }        
  ],
  "chart": {    
    "marginBottom": 85,
    //"marginTop": 75,
    "type": "column"
  }
	};
}());
