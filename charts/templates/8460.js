(function(){
    return {
    series: [
      { "color": "#007A2F"}, // dunkelgrün
      { "color": "#73B97C"}, // grün
      { "color": "#FFBB58"}, // orange
      { "color": "#DC440E"}, // orange
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
        reversed: true,
        labelFormatter: function(){
            return this.name.replace("/", " /<br/>");
        }
    }
	};
}());

 