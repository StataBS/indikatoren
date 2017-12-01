(function(){
    return {
  "yAxis": [{
    "labels": {
      y: 3,
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": 60000,
    tickInterval: 20000,
    "title": ""
  },
  {
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": 10
      },
      "text": ''
    },
    "labels": {
      "format": "{value:,.0f}%",
      y: 3,
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    max: 30, 
    tickInterval: 10,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  "xAxis": {
    "tickInterval": 1
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    margin: 3, 
    padding: 3,
  	//"y": 40,
  	//"x": 40,
  	//line break before (rechte Achse)
  	labelFormatter: function(){
  	  return this.name.replace("(rechte", "<br/>(rechte");
  	},
  	"itemMarginBottom": 5,
      "itemStyle": {
      "fontWeight": "normal"
      }
    },
  "series": [
    {
      "color": "#71a3b5",
      "index": 0,
      "type": "column",
      "pointWidth": "15"
    },
    {
      "color": "#7d60a0",
      "index": 1,
      "type": "line",
      "yAxis": 1,
      "tooltip": {
       "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
      }
    }
  ],  
  "tooltip": {
    "shared": true,
  },
  "chart": {
    //"marginBottom": 65,
    "type": "line",
    "alignTicks": false
  }
}
}());
