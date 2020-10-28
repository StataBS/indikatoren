(function(){
    return {

    series: [
      { "color": "#689199"}, // dunkelgrün
      { "color": "#A8C3CA"}, // grün
      { "color": "#FFBB58"}, // gelb
      { "color": "#FF8028"}, // rot
      { "color": "#C9D6DB"}, // grau
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
        itemWidth: 200,
        width: 420,
        itemStyle: {
          textOverflow: "none",
          whiteSpace: "nowrap"
        },
        "itemMarginBottom": 4,
        "align": "left",
      //  labelFormatter: function(){
           // return this.name.replace("/", " /<br/>");
       // }
    }
	};
}());