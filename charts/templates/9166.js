(function(){
    return {

    series: [
      { "color": "#007A2F"}, // dunkelgrün
      { "color": "#73B97C"}, // grün
      { "color": "#FFDA80"}, // gelb
      { "color": "#B00000"}, // rot
      { "color": "#C8C8C8"}, // grau
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