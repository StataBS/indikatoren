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

 