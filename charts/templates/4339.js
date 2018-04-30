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
    "shared": false
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
      "color": "#672773",
      "legendIndex": 5     
    },
    {
      "color": "#FABD24",
      "legendIndex": 4
    },
    {
      "color": "#E7CFE2",
      "legendIndex": 3  
    },
    {
      "color": "#007A2F",
      "legendIndex": 2  
    },
    {
      "color": "#B9CFD7",
      "legendIndex": 1  
    },
    {
      "color": "#FF8028",
      "legendIndex": 0  
    }        
  ],
  "chart": {    
    "type": "column"
  }
	}
}());
