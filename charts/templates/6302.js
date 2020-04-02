(function(){
    return {
    "yAxis": [{
      "labels": {
        "format": "{value:,.0f}",
        "style": {
          color: "#000000",
          fontSize: '10px', 
        }
      },
      "min": 0,
      "max": undefined,
      tickAmount: 5,
      "title": ""
    },
    {
      "title": {
        "style": {
          "color": "#000000",
          "fontSize": null
        },
        "text": null
      },
      "labels": {
        "format": "{value:,.0f}%",
        "style": {
          color: "#000000", 
          fontSize: '10px', 
        }
      },
      "min": 0,
      "max": undefined,
      tickAmount: 5,
      "gridLineWidth": 0,
      "opposite": true
    }
  ],
  "xAxis": {
	"tickInterval": 1,
	labels: {
	  step: 2
	},
  },
  "series": [
    {
      "color": "#008AC3",
      "yAxis": 0,
    },
    {
      "color": "#B00000",
      "yAxis": 0,
    },
    {
      "color": "#8A8A8A",
      "yAxis": 1,
    }
  ],
  "tooltip": {
	  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
};
}());

