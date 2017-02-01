(function(){
    return {
  "data": {
    "switchRowsAndColumns": false
  },
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
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}:<br/><b>{point.percentage:.1f}% </b><br/>',
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
      "index": 0
    },
    {
      "color": "#C5AB92",
      "index": 3
    },
    {
      "color": "#FF8028",
      "index": 1
    },
    {
      "color": "#E7CFE2",
      "index": 2
    },
    {
      "color": "#B9CFD7",
      "index": 4
    },
    {
      "color": "#FABD24",
      "index": 5
    },
    {
      "color": "#73BA7C",
      "index": 6
    },
    {
      "color": "#007A2F",
      "index": 7
    },
    {
      "color": "#672773",
      "index": 8
    }        
  ],
  "chart": {
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column"
  }
	}
}());
