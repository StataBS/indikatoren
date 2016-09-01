chartOptions['I.01.1.0016'] = {
  "plotOptions": {
    "series": {
      "pointWidth": 15,
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
    }
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
      "legendIndex": 0,
      "index": 8
    },
    {
      "color": "#FABD24",
      "legendIndex": 3,
      "index": 5
    },
    {
      "color": "#E7CFE2",
      "legendIndex": 6,
      "index": 2
    },
    {
      "color": "#007A2F",
      "legendIndex": 1,
      "index": 7
    },
    {
      "color": "#B9CFD7",
      "legendIndex": 4,
      "index": 4
    },
    {
      "color": "#FF8028",
      "legendIndex": 7,
      "index": 1
    },
    {
      "color": "#73BA7C",
      "legendIndex": 2,
      "index": 6
    },
    {
      "color": "#9F7C5A",
      "legendIndex": 5,
      "index": 3
    },
    {
      "color": "#C8C8C8",
      "legendIndex": 8,
      "index": 0
    }        
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 65,
    "marginTop": 75,
    "type": "column"
  }
};
