(function(){
    return {
    series: [
      { "color": "#246370"}, // dunkelgrün
      { "color": "#FFBB58"}, // grün
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

 