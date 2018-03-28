(function(){
    return {
    "series": [
        {"color": "#3A2012", index: 3, legendIndex: 3}, // 
        {"color": "#7F5F1A", index: 2, legendIndex: 2}, // 
        {"color": "#CD9C00", index: 1, legendIndex: 1}, // 
        {"color": "#C8C8C8", index: 0, legendIndex: 0}, //
],
  "xAxis": {
      "type": "category",
  },
    "legend": {
        "layout": "vertical",
        "verticalAlign": "middle",
        "itemMarginBottom": 5,     
        "align": "right",
        "useHTML": false,
        "itemStyle": {
            "fontWeight": "normal"
        },
        "symbolRadius": 0,
        "labelFormatter": function () {
            return this.name.replace('/', '/<br/>');
        },
        "reversed": false
    }
	}
}());

 