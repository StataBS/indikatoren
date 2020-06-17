(function(){
    return {
    series: [
      { "color": "#083008"}, // dunkelgrün
      { "color": "#FFBB58"}, // grün
      { "color": "#689199"}, // orange
      { "color": "#C8C8C8"}, // grau
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

 