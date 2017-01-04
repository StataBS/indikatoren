var chartOptions = {
  "plotOptions": {
    "series": {
      "pointWidth": 35,
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
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}:<br/><b>{point.y}</b> Menschen, dies entspricht <b>{point.percentage:.1f}%</b> der ausländischen Bevölkerung<br/>',
    "shared": false
  },  
  "legend": {
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "x": 40,
    "y": 30,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#B475AB"
    },
    {
      "color": "#933F8D"
    },
    {
      "color": "#FFDA80"
    },
    {
      "color": "#FABD24"
    },
    {
      "color": "#C8C8C8"
    }    
  ],
  "chart": {
    "marginBottom": 65,
    "marginTop": 150,
    "type": "column"
  }
};
