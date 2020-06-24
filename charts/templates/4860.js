(function(){
    return {
    series: [
      { "color": "#083038"}, // dunkelblau
      { "color": "#FABD24"}, // grün
      { "color": "#A8C3CA"}, // orange
      { "color": "#C8C8C8"}, // hellgrau
      { "color": "#6F6F6F"}, // grau
    ],
    xAxis: {
        type: "category"
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
	};
}());

 