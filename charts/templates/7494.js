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
    "labels": {
      rotation: 0
    }
  },  
  "yAxis": {
    tickAmount: 8,
    "labels": {
      "format": "{value:,.0f}"
    },
    "reversedStacks": false
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },  
  "legend": {
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
    symbolPadding: 0,
    margin: 1,
    width: 105,
    "itemStyle": {
      fontSize: "9px",
      textOverflow: "undefined",
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
    "type": "column",
    spacingTop: 7
  }
	}
}());