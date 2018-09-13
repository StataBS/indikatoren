(function(){
    return {
  "plotOptions": {
    "series": {
      "pointWidth": 15,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "percent"
    }
  },
  "xAxis": {
    "type": "category"    
  },  
  "yAxis": {
    "labels": {
      "format": "{value}%",
    },
    "reversedStacks": false
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.percentage:.2f}%</b><br/>',
    shared: false
  },  
  "legend": {
    "layout": "horizontal",
    "verticalAlign": "top",
    "y": -10, 
    "align": "left",
    symbolPadding: 0,
    padding: 0,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#256370"
    },
    {
      "color": "#933F8D"
    },
    {
      "color": "#7F5F1A"
    },
    {
      "color": "#CD9C00"
    },
    {
      "color": "#44AB2B"
    },
    {
      "color": "#FF8028"
    }
  ],
  "chart": {
    "type": "column",
    "inverted": true
  }
	}
}());
