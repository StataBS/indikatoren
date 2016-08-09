chartOptions["I.09.1.0013"] = {
  "plotOptions": {
    "series": {
      "stacking": null,
      "groupPadding": 0.05
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
		"floating": false,
		"y": 20,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },

  "series": [
    {
      "color": "#2e1435",
      "marker": {
        "enabled": false
      },
      "index": 3,
      "type": "line"
    },
    {
      "color": "#68ab2b",
      "index": 0
    },
    {
      "color": "#cd9c00",
      "index": 1
    },
    {
      "color": "#008ac3",
      "index": 2
    }
  ],
    "title": {
    "style": {
      "fontSize": 14,
      "fontWeight": "bold",
      "fontFamily": "Arial",
      "color": "#000000"
    },
    "text": "Indikator 1.2.c-1: Nettowohnungsproduktion",
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
    "renderTo": "container-I.09.1.0013",
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
