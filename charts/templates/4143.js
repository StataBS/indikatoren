var chartOptions = {
  "yAxis": [{
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "title": ""
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
      "format": "{value:,.0f}%",
      "step": 2,
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": 24,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  "xAxis": {
    "tickInterval": 5
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
		"y": 35,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#73b97c",
      "index": 0,
      "type": "column",
      "pointWidth": "10"
    },
    {
      "color": "#cd9c00",
      "index": 1,
      "type": "line",
      "yAxis": 1
    }
  ],  
  "tooltip": {
    "shared": false
  },
  "chart": {
    "marginBottom": 65,
    "type": "line",
    "alignTicks": false
  }
};
 