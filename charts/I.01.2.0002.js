var chartOptions = {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": false
      },
      "stacking": "percent"
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
      "format": "{value}%",
      "style": {
        "color": "#000000"
      }
    },
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
    "tickColor": "#FFFFFF"
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
    "text": "Quelle: Kantonale Bevölkerungsstatisstik;<br/>Statistisches Amt des Kantons Basel-Stadt",
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
    "layout": "vertical",
    "verticalAlign": "top",
    "align": "top",
		"y": 40,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#2f656b",
      "index": 1
    },
    {
      "color": "#689199",
      "index": 2
    },
    {
      "color": "#923f8d",
      "index": 3
    },
    {
      "color": "#008ac3",
      "index": 4
    }
  ],
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    shared: false
  },
  "title": {
    "style": {
      "fontSize": 14,
      "fontWeight": "bold",
      "color": "#000000"
    },
    "text": "Indikator 1.4.a-2: Familienhaushalte nach Art der Zusammensetzung",
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
    "borderColor": "#fbfbfb",
 
    "backgroundColor": "#fbfbfb",
 
    "zoomType": "xy",
    "width": 485,
    "marginBottom": 65,
    "marginTop": 150,
    "style": {
      "fontFamily": "Arial"
    },
    "type": "column"
  }
};