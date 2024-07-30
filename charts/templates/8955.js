(function () {
  return {
    chart: {
      inverted: true
    },
    xAxis: {
      type: "category",
      reversed: true,
      labels: {
        x: -8
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
      layout: "horizontal",
      align: "left",
      verticalAlign: "top",
      reversed: false,
      alignColumns: false,
      itemWidth: 80,
      itemStyle: {
        textOverflow: undefined,
        whiteSpace: 'nowrap',
      },
      labelFormatter: function () {
        return this.name;
      }
    },
    series: [
      { "color": "#083008" }, // dunkelgrün
      { "color": "#FFBB58" }, // grün
      { "color": "#689199" }, // orange
      { "color": "#C8C8C8" }, // grau
      { "color": "#6F6F6F" }, // grau
    ],
  };
}());

