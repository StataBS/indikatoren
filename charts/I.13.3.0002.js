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
    "tickInterval": 1
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
    "text": "Quelle: Sozialhilfe des Kantons Basel-Stadt, Notschlafstelle und Notwohnungen",
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
  "title": {
    "style": {
      "fontSize": 14,
      "fontWeight": "bold",
      "color": "#000000"
    },
    "text": "Indikator 4.1.e: Bestand an Notwohnungen und ihre Belegung",
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
    "renderTo": "container-I.13.3.0002",
    "borderColor": "#fbfbfb",
    "backgroundColor": "#fbfbfb",
    "zoomType": "xy",
    "width": 485,
    "marginBottom": 65,

    "style": {
      "fontFamily": "Arial"
    },
    "type": "line"
  }
};
