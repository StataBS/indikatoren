chartOptions['I.01.1.0013'] = {
  "plotOptions": {
    "series": {
      "pointWidth": 15,
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
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}:<br/><b>{point.y}% der Gesamtbevölkerung,</b>,<br/><b>{point.percentage:.2f}% der ausländischen Bevölkerung</b><br/>',
    shared: false
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
      "color": "#C8C8C8",
      "legendIndex": 8,
      "index": 0
    },
    {
      "color": "#C5AB92",
      "legendIndex": 5,
      "index": 3
    },
    {
      "color": "#FF8028",
      "legendIndex": 7,
      "index": 1
    },
    {
      "color": "#E7CFE2",
      "legendIndex": 6,
      "index": 2
    },
    {
      "color": "#B9CFD7",
      "legendIndex": 4,
      "index": 4
    },
    {
      "color": "#FABD24",
      "legendIndex": 3,
      "index": 5
    },
    {
      "color": "#73BA7C",
      "legendIndex": 2,
      "index": 6
    },
    {
      "color": "#007A2F",
      "legendIndex": 1,
      "index": 7
    },
    {
      "color": "#672773",
      "legendIndex": 0,
      "index": 8
    }        
  ],
  "chart": {
    "marginBottom": 65,
    "marginTop": 75,
    "type": "column"
  }
};
