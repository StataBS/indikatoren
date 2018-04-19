(function(){
    return {
    	chart: {		
        events:{
          load: function() {
            this.credits.element.onclick = function() {};

            //for top-left legends with no x defined: move legend to x position of first yAxis
            if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0){
              this.update(
                {
                  legend: {
                    x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
                  }
                }
              );
            }              

                  
          }
        },
    		"borderColor": "#fbfbfb",
    		"backgroundColor": "#fbfbfb",
    		"zoomType": "xy",
    		"width": 485,
        "height": 415,
        spacing: [10, 10, 45, 10],
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
        gridLineColor: '#B9CFD7', 
        gridLineWidth: 0.5,
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
        lineColor: '#B9CFD7',
        lineWidth: 0.5,
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
        "symbolRadius": 0,
        itemMarginBottom: 5,
        "itemStyle": {
          "fontWeight": "normal"
        }
      },
      "series": {
        "dataLabels": {
          "enabled": false
        }
      },
      "plotOptions": {
        "series": {
          "stacking": "percent",
          fillOpacity: 1
        }, 
        "area": {
          "lineWidth": 0,
          "itemMarginBottom": 5,   
          "marker": {
            "enabled": false,
            "symbol": "circle"
          }
        }
      }
	};
}());