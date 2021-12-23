(function(){
    return {
    "series": [
        {"color": "#3A2012", index: 4, legendIndex: 4}, // 
        {"color": "#7F5F1A", index: 3, legendIndex: 3}, // 
        {"color": "#CD9C00", index: 2, legendIndex: 2}, // 
        {"color": "#C8C8C8", index: 1, legendIndex: 1},
        {"color": "#6F6F6F", index: 0, legendIndex: 0}, //
],
  "xAxis": {
      "type": "category",
  },
  plotOptions: {
    series:{
    //groupPadding: 0,
    pointPadding: 0.2
    }
  },
  legend: {
    reversed: true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    labelFormatter: function(){
        return this.name.replace("/", " /<br/>");

      }
  }
	}
}());

 