(function(){
    return {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": false
      }
    }
  },
  "yAxis": [{
    gridLineColor: '#B9CFD7', 
    gridLineWidth: 0.5,
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
    tickAmount: 6,
  },
  {
    gridLineColor: '#B9CFD7', 
    gridLineWidth: 0.5,
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
    "min": 0,
    "max": 5,
    tickAmount: 6,
    "opposite": true
  }
  ],
  "xAxis": {
    lineColor: '#B9CFD7', 
    lineWidth: 0.5,    
    "tickInterval": 1
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
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
      "color": "#cd9c00",
      "index": 1,
      "type": "line",
      "yAxis": 1
    }
  ],  "tooltip": {
    "shared": true, 
    valueDecimals: 2
  },
  "chart": {
    "zoomType": "xy",
    "type": "line"
  }
	}
}());