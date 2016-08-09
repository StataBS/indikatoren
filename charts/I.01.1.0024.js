chartOptions['I.01.1.0024'] = {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var last  = this.series.data[this.series.data.length - 1];
            var first  = this.series.data[0];
            if (this.point.y === first.y || this.point.y === last.y ) {
              return Highcharts.numberFormat(this.point.y, 0, ",", " ");
            }
            return "";
          }
      }
    }
  },
  "yAxis": {
    "min": 0,
    "max": 16,
    "tickInterval": 2,
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
    "max": 2015,
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
    "tickInterval": 5,
    "showLastLabel": true,
    "endOnTick": true
  },
  "exporting": {
	    "sourceWidth": null,
	    "scale": 4,
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
    "enabled": false,
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right",
  },
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },
      "index": 0,
      "color": "#008AC3"
    }
  ],
 tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>%<br/>',
    shared: true
  },
  "title": {
    "style": {
      "fontSize": 14,
      "fontWeight": "bold",
      "fontFamily": "Arial",
      "color": "#000000"
    },
    "text": "Indikator 1.7.a: Wohneigentumsquote in Prozent",
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
    "renderTo": "container-I.01.1.0024",
    "borderColor": "#fbfbfb",
    "backgroundColor": "#fbfbfb",
    "zoomType": "xy",
    "width": 485,
    "marginBottom": 65,
    "marginTop": 75,
    "style": {
      "fontFamily": "Arial"
    },
    "type": "line"
  }
};