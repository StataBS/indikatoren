(function(){
    return {
  "yAxis": [{"tickInterval": 500,
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": 3000,
    "title": ""
  },
  {"tickInterval": 1000,
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    
    "min": 0,
    "max": undefined,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  "xAxis": {
    "tickInterval": 1
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  "itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#B00000",
      "index": 0,
      "type": "line",
      "pointWidth": "20"
    },
    {
      "color": "#FF8028",
      "index": 1,
      "type": "line",
      "yAxis": 1,
       "marker": {
        "enabled": false
      },
      "tooltip": {
       "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
      }
    }
  ],  
  "tooltip": {
    "shared": false,
  },
  "chart": {
    "type": "line",
    "alignTicks": false
  }
}
}());
