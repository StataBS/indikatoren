chartOptions['I.01.1.0020'] = {
  "plotOptions": {
    "series": {
      "pointWidth": 25,
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
    {"color": "#933F8D"},
    {"color": "#B475AB"},
    {"color": "#FABD24"},
    {"color": "#FFDA80"},
    {"color": "#4BACC6"}
  ],
  "chart": {    
    "marginBottom": 60,
    "marginTop": 175,
    "type": "column"
  }
};
