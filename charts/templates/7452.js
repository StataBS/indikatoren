(function(){
    return {
  "plotOptions": {
    "series": {
      "pointWidth": 25,
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
    "labels": {
      rotation: 0
    }
  },  
  "yAxis": {
    tickAmount: 7,
    "labels": {
      "format": "{value:,.0f}"
    },
    "reversedStacks": false
  },
  "tooltip": {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    footerFormat: 'Total: <b>{point.total:,.0f}</b>',
    "shared": true,
    valueDecimals: 0
  }, 
  "legend": {
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
      "color": "#246370",
      "legendIndex": 2  
    },
    {
      "color": "#689199",
      "legendIndex": 1  
    },
    {
      "color": "#D3E2E4",
      "legendIndex": 0  
    }        
  ],
  "chart": {    
    "type": "column"
  }
	}
}());
