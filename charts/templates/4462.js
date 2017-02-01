(function(){
    return {
  "plotOptions": {
    "series": {
      "pointWidth": 50,
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
    "layout": "horizontal",
    "verticalAlign": "top",
    "x": 46,
    "y": 45, 
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#933F8D",
      "legendIndex": 4
    },
    {
      "color": "#B475AB",
      "legendIndex": 3
    },
    {
      "color": "#FABD24",
      "legendIndex": 2
    },
    {
      "color": "#FFDA80",
      "legendIndex": 1
    },
    {
      "color": "#4BACC6",
      "legendIndex": 0
    }
  ],
  "chart": {    
    "marginBottom": 60,
    "marginTop": 160,
    "type": "column"
  }
	}
}());
