chartOptions['I.01.5.0004'] = {
  "plotOptions": {
    "series": {
      "pointWidth": 35,
      "dataLabels": {
        "style": {
          "fontSize": 10
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
    }
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
    {},
    {},
    {},
    {},
    {}        
  ],
  "chart": {
    "marginBottom": 75,
    "marginTop": 145,
    "type": "column"
  }
};
