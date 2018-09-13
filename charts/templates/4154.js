(function(){
    return {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": false
      },
	    pointPadding: 0,
        borderWidth: 0,
    },
  },
  "yAxis": [{
    "min": 0,
    gridLineColor: '#B9CFD7', 
    gridLineWidth: 0.5,
    lineColor: '#B9CFD7',     
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
    gridLineColor: '#B9CFD7', 
    gridLineWidth: 0.5,
    lineColor: '#B9CFD7',     
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
  }],
  "xAxis": {
    "tickInterval": 1
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
		//"y": 35,
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
      "yAxis": 1, 
      tooltip: {
        valueDecimals: 1
      }
    }
  ],  
  "tooltip": {
    "shared": false
  },
  "chart": {
    "type": "line",
    "alignTicks": false,
  }
	}
}());
