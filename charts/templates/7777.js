(function(){
    return {
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}%",
    },
  },
  "xAxis": {
    "tickInterval": 1
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
		//"y": 35,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
    "color": "#71a3b5"
    },
    {
      "color": "#DC440E",
      "type": "line",
      "tooltip": {
        "shared": false,
        "headerFormat": '',
        "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}%</b><br/>'
      },
    },
    {
      "color": "#cd9c00",
      "type": "line",
      "tooltip": {
        "shared": false,
        "headerFormat": '',
        "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}%</b><br/>'
      },
    }

  ],
  "tooltip": {
    "shared": false,
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}%</b><br/>'
  },
  "chart": {
    "type": "column",
  }
  };
}());