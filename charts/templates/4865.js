(function(){
    return {
    "series": [
        {"color": "#71A3B5"},
        {"color": "#FFBB58"},
        {"color": "#8A8A8A"},
       // reversedStacks: true,       
  ],
  "xAxis": {
      "type": "category"
  },
  yAxis: {
    reversedStacks: false,
},
  legend: {
    reversed: false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 4,
    "align": "left",
    labelFormatter: function(){
        return this.name.replace("/", " /<br/>");

      }
  }
	}
}());

 