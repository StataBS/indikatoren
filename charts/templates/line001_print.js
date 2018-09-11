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
		"width": 320,
    	"height": 208,
    	spacing: [7,3,8,3], /*top, right, bottom and left */
		"style": {
		 "fontFamily": "Arial"
		},
		"type": "line"    
		},
  "title": {
    "style": {
      "fontSize": '10px',
      "fontWeight": "bold",
      "color": "#000000"
    },
    "align": "left"
  },
  "subtitle": {
    "style": {
      "fontSize": '10px',
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
    "min": 0,
    gridLineColor: '#B9CFD7', 
    gridLineWidth: 0.5,
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": 10,
      },
      "text": ''
    },
    "labels": {
      y: 3,
      "style": {
      	"fontSize": 10,
        "color": "#000000"
      }
    }
  },
  "xAxis": {
    lineColor: '#B9CFD7', 
    lineWidth: 0.5,
    "labels": {
      "style": {
      	"fontSize": 10,
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
  "legend": {
    "enabled": false,
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right",
    "symbolRadius": 0,
    itemStyle:{"fontSize": "10px"}
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false
      }
    }
  },
	};
}());