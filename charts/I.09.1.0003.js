chartOptions['I.09.1.0003'] = {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "style": {
          "fontSize": 10
        }
      },
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
    "tickColor": "#FFFFFF"
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
    "href": "http://www.statistik.bs.ch",
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
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,     
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#DC440E",
      "index": 5
    },
    {
      "color": "#923F8D",
      "index": 4
    },
    {
      "color": "#68AB2B",
      "index": 3
    },
    {
      "color": "#689199",
      "index": 2
    },
    {
      "color": "#CD9C00",
      "index": 1
    },
    {
      "color": "#B00000",
      "index": 0
    }
  ],
  "title": {
    "style": {
      "fontSize": 14,
      "fontWeight": "bold",
      "fontFamily": "Arial",
      "color": "#000000"
    },
    "text": "Indikator 1.2.a: Wohnungsbestand nach Zimmerzahl",
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
    "renderTo": "container-I.09.1.0003",
    "borderColor": "#fbfbfb",
    "backgroundColor": "#fbfbfb",
    "width": 485,
    "marginBottom": 75,
    "marginTop": 75,
    "style": {
      "fontFamily": "Arial"
    },
    "zoomType": "y",
    "type": "column"
  }
};