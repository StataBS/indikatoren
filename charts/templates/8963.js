(function () {
  return {
    chart: {
      inverted: true,
      marginLeft: 75
    },
    series: [
      { "color": "#007A2F" }, // dunkelgrün
      { "color": "#73B97C" }, // grün
      { "color": "#FFBB58" }, // orange
      { "color": "#DC440E" }, // orange
      { "color": "#C8C8C8" }, // grau
      { "color": "#6F6F6F" }, // grau
    ],
    xAxis: {
      type: "category",
      reversed: true,
      labels: {
        x: -70,
        align: "left"
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
  };
}());

