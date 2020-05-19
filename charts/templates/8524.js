(function(){
    return {
  "plotOptions": {
    "series": {
      "stacking": "percent"
    }
  },
  "xAxis": {
    "type": "category"
  },
  "yAxis": {
    "tickInterval":20,
      "labels": {
        "format": "{value}%",
        x: -5,
      },
      "min": 0
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    "shared": false
  },
  "legend": {
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    { color: "#FFBB58", index: 5, legendIndex: 0 },
    { color: "#CD9C00", index: 4, legendIndex: 1 },
    { color: "#7F5F1A", index: 3, legendIndex: 2 },
    { color: "#FF8028", index: 2, legendIndex: 3 },
    { color: "#B00000", index: 1, legendIndex: 4 },
    { color: "#661200", index: 0, legendIndex: 5 }
  ],
  "chart": {
    "type": "column"
  }
	}
}());

