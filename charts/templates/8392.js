(function(){
    return {
    series: [
      { "color": "#71A3B5"}, // blau
      { "color": "#FABD24"}, // gelb
      { "color": "#C8C8C8"}, // hellgrau
      { "color": "#6F6F6F"}, // grau
    ],
    xAxis: {
        type: "category"
    },
    yAxis: {
        reversedStacks: false,
        tickInterval: 20,
            max: 100,
    },
    legend: {
        reversed: false,
        "layout": "horizontal",
        "verticalAlign": "top",
        "itemMarginBottom": 4,
        "align": "left",
       itemDistance: 10,
        labelFormatter: function(){
            return this.name.replace("/", " /<br/>");
        }
    }
	};
}());