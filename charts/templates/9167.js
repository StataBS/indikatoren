(function(){
    return {

    series: [
      { "color": "#246370"}, // dunkelgrün
      { "color": "#A8C3CA"}, // grün
      { "color": "#FFBB58"}, // gelb
      { "color": "#C8C8C8"}, // rot
      { "color": "#6F6F6F"}, // grau
      
    ],
      yAxis: {
        reversedStacks: false,
        tickInterval: 20,
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