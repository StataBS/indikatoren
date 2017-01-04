var chartOptions = {
  "yAxis": [{
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
    "min": 0
  },
  {
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
    "opposite": true
  }
  ],
  "xAxis": {
    "tickInterval": 2
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 18,
		"y": 28,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#cd9c00",
      "index": 0,
      "type": "line",
      "pointWidth": "10"
    },
    {
      "color": "#73b97c",
      "index": 1,
      "type": "line",
      "yAxis": 1
    }
  ],  
  "tooltip": {
    "shared": true
  },
  "chart": {
    "marginBottom": 65,
    "marginTop": 90,
    "type": "line"
  }
};
