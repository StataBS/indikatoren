(function(){
    return {
    series: [
      { "color": "#246370"}, // dunkelblau
      { "color": "#689199"}, // blau
      { "color": "#FABD24"}, // orange
      { "color": "#FF8028"}, // rot
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
        //"align": "left",
        x: -17,
        itemWidth: 140,
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