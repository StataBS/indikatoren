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
        tickInterval: 20,
        max: 100,
    },
    legend: {
        reversed: false,
        "layout": "horizontal",
        "verticalAlign": "top",
        "itemMarginBottom": 4,
        "align": "left",
        itemWidth: 90,
            width: 300,
            itemStyle: {
                textOverflow: "none",
                whiteSpace: "nowrap"
                },
        labelFormatter: function(){
            return this.name.replace("/", " /<br/>");
        }
    }
	};
}());

 