var chartOptions = {
  "plotOptions": {
    "series": {
      "pointWidth": 45,
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
      "color": "#DC440E",
      "legendIndex": 3  
    },
    {
      "color": "#FFBB58",
      "legendIndex": 2  
    },
    {
      "color": "#923F8D",
      "legendIndex": 1  
    }
  ],
  "chart": {    
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column"
  }
};
