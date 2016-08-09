chartOptions['I.09.3.0002'] = {
  "plotOptions": {
    "series": {
      "stacking": "normal"
    }
  },
  "yAxis": {
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

    }
  },
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
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.2f}%)<br/>',
    shared: false
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
		"verticalAlign": "top",
    "align": "left",
		"floating": false,
		"y": 20,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },

  "series": [
    {
      "color": "#007a2f",
      "index": 0,
      "type": "column"
    },
    {
      "color": "rgba(0, 122, 47, 0.38)",
      "index": 1,
      "type": "column"
    },
    {
      "color": "#b00000",
      "marker": {
        "enabled": false
      },
      "index": 2,
      "type": "line"
    }
  ],

"title": {
    "style": {
      "fontSize": 14,
      "fontWeight": "bold",
      "fontFamily": "Arial",
      "color": "#000000"
    },
    "text": "Indikator 1.2.e: Anzahl neu erstellte Wohnungen",
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
    "renderTo": "container-I.09.3.0002",
    "borderColor": "#fbfbfb",
    "backgroundColor": "#fbfbfb",
    "width": 485,
    "marginBottom": 65,
    "marginTop": 100,
    "style": {
      "fontFamily": "Arial"
    },
    "zoomType": "xy",
    "type": "column"
  }
};

