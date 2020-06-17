(function(){
    return {
    series: [
      { "color": "#007a2f"}, // dunkelgrün
      { "color": "#68ab2b"}, // grün
      { "color": "#ffbb58"}, // orange
      { "color": "#dc440e"}, // rot
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

 