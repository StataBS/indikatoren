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
        type: "category",
        reversed: false,
        labels: {
            x: -5
        }
    },
    yAxis: {
        reversedStacks: false,
        tickInterval: 25,
        labels: {
            y: 10
        }
    },
    legend: {
        //x: 1,
        layout: "horizontal",
        align: "left",
        verticalAlign: "top",
        reversed: false,
        alignColumns: false,
      itemWidth: 110,
      labelFormatter: function () {
        return this.name;
      },
      itemStyle: {
        textOverflow: undefined,
        whiteSpace: 'nowrap',
      }
    },
    chart: {
        inverted: true
    }
	};
}());

 