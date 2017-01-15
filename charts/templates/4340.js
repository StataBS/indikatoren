var chartOptions = {
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
    "itemMarginBottom": 5,
    "x": 5,
    "y": 35, 
    "align": "right",
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
    "marginBottom": 65,
    "marginTop": 85,
    "type": "column",
    "inverted": true
  }
};
