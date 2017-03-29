(function(){
    return {
    	chart: {		
        events:{
              load: function() {
                  this.credits.element.onclick = function() {}
              }
          },
    		"borderColor": "#fbfbfb",
    		"backgroundColor": "#fbfbfb",
    		"zoomType": "xy",
    		"width": 485,
        "height": 415,
        "spacingBottom": 45,    
    		"style": {
    		  "fontFamily": "Arial"
    		},
    		"type": "area"    
    	},
      "title": {
        "style": {
          "fontSize": '14px',
          "fontWeight": "bold",
          "color": "#000000"
        },
        "align": "left"
      },
      "subtitle": {
        "style": {
          "fontSize": '12px',
          "fontWeight": "normal",
          "fontFamily": "Arial",
          "color": "#000000"
        },
        "text": "",
        "align": "left"
      },
      "yAxis": {
        "min": 0,
        "max": 100,
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
        "tickLength": 0
      },
      "credits": {
        "href": "http://www.statistik.bs.ch",
        "enabled": true,
        "style": {
          "color": "#000000",
          "fontSize": '10px',
          "cursor": "default"
        },
        "position": {
          "align": "left",
          "verticalAlign": "bottom",
          "x": 10
        }
      },
      "tooltip": {
        "shared": false,
        "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f} ({point.percentage:.1f}%)</b><br/>'
      },      
      "legend": {
        "enabled": false,
        "layout": "vertical",
        "verticalAlign": "middle",
        "align": "right",
<<<<<<< HEAD
        "symbolRadius": 0,
        "itemStyle": {
          "fontWeight": "normal"
        }
=======
        "symbolRadius": 0
>>>>>>> issue-135
      },
      "series": {
        "dataLabels": {
          "enabled": false
        }
      },
      "plotOptions": {
        "series": {
          "stacking": "percent"
        }, 
        "area": {
          "lineWidth": 0,
          "marker": {
            "enabled": false,
            "symbol": "circle"
          }
        }
      }
	};
}());