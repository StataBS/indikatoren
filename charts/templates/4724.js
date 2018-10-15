(function(){
    return {
        series: [
      { "color": "#007a2f"}, // dunkelgrün
      { "color": "#68ab2b"}, // grün
      { "color": "#ffbb58"}, // orange
      { "color": "#dc440e"}, // rot
      { "color": "#999999"}, // grau
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

 