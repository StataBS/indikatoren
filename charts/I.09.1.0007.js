chartOptions["I.09.1.0007"] = {
 
  "plotOptions": {
 
    "series": {
 
      "dataLabels": {
 
        "enabled": false
 
      }
 
    }
 
  },
 
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
 
    "title": {
 
      "style": {
 
        "color": "#000000"
 
      }
 
    },
 
    "labels": {
 
      "style": {
 
        "color": "#000000"
 
      }
 
    },
 
    "tickColor": "#FFFFFF",
 
    "tickInterval": 5
 
  },
 
  "exporting": {
	    "sourceWidth": null,
	    "scale": 5,
	    buttons: {
	      contextButton: {
	        menuItems: Highcharts.getOptions().exporting.buttons.contextButton.menuItems.slice(0, 8)
	      }
	    }
	  },
  "credits": {
 
    "text": "Quelle: Kantonale Gebäude- und Wohnungsstatistik;<br/>Statistisches Amt des Kantons Basel-Stadt",
 
    "enabled": true,
 
    "style": {
 
      "color": "#000000",
 
      "fontSize": 10
 
    },
 
    "position": {
 
      "align": "left",
 
      "verticalAlign": "bottom",
 
      x: 10,
 
      y: -17
 
    }
 
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
 
  ],  "tooltip": {
 
    "shared": true
 
  },
 
  "title": {
 
    "style": {
 
      "fontSize": 14,
 
      "fontWeight": "bold",
 
      "color": "#000000"
 
    },
 
    "text": "Indikator 1.4.b: Genossenschaftswohnungen",
 
    "align": "left"
 
  },
 
  "subtitle": {
 
    "style": {
 
      "fontSize": 12,
 
      "fontWeight": "normal",
 
      "fontFamily": "Arial",
 
      "color": "#000000"
 
    },
 
    "text": "",
 
    "align": "left"
 
  },
 

 
  "chart": {
    "renderTo": "container-I.09.1.0007",
 
    "borderColor": "#fbfbfb",
 
    "backgroundColor": "#fbfbfb",
 
    "zoomType": "xy",
 
    "width": 485,
 
    "marginBottom": 65,
 
    "style": {
 
      "fontFamily": "Arial"
 
    },
 
    "type": "line",
 
    "alignTicks": false
 
  }
 
};
 