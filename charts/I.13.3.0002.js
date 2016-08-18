chartOptions['I.13.3.0002'] = {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": false
      }
    }
  },
  "yAxis": [{
    "min": 0
,
 "max": 160,
    "tickInterval": 40,
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
  },
  {
    "min": 0,
 "max": 100,
    "tickInterval": 25,
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.0f}%",
      "style": {
        "color": "#000000"
      }
    },
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
		"y": 35,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#73b97c",
      "index": 0,
      "type": "column"
    },
  {
      "color": "#007A2F",
      "index": 1,
      "type": "column"
    },

   {
      "color": "#cd9c00",
      "index": 1,
      "type": "line",
      "yAxis": 1
    }
  ],  "tooltip": {
    "shared": true
  },
  "chart": {
    "marginBottom": 65,
    "marginTop": 100,
    "type": "line"
  }
};
