(function(){
    return {
  
  "yAxis": {
    "min": 0,
    "tickInterval": 5,
    "labels": {
      "format": "{value:,.0f}%",
    },
  },
  "xAxis": {
    "tickInterval": 1
  },
  "legend": {
    "enabled": false,
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right"
  },
  "series": [
    {
    "color": "#FF8028"
    }
  ],
  "tooltip": {
    "shared": false,
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
  },
  "chart": {
    "marginBottom": 65,
    "marginTop": 75,
    "type": "column"
  }
	}
}());