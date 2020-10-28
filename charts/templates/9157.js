(function(){
    return {

    series: [
      { "color": "#007A2F"}, // dunkelgrün
      { "color": "#73B97C"}, // grün
      { "color": "#FFDA80"}, // gelb
      { "color": "#B00000"}, // rot
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
        itemWidth: 150,
        width: 420,
        itemStyle: {
          textOverflow: "none",
          whiteSpace: "nowrap"
        },
        "itemMarginBottom": 4,
        "align": "left",
        
    }
	};
}());