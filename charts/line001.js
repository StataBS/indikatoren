var template = {
	chart: {		
        events:{
            load: function() {
                this.credits.element.onclick = function() {
                    window.open(
                    "http://www.statistik.bs.ch",
                    '_blank' // http://stackoverflow.com/questions/16810556/how-to-open-credits-url-of-highcharts-in-new-tab
                    );
                }
            }
        },
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
	},
	navigation: {
		menuItemStyle: {
			fontFamily: Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
			padding: '2px 10px'
		}
	},
  "title": {
    "style": {
      "fontSize": 14,
      "fontWeight": "bold",
      "color": "#000000"
    },
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
  "tooltip": {
    "shared": false
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
      "style": {
        "color": "#000000"
      }
    }
  },
  "xAxis": {
    "labels": {
      "style": {
        "color": "#000000"
      }
    },
    tickLength: 0
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
    "enabled": false,
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right"
  }
};