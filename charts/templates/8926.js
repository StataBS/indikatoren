(function () {
  return {
    series: [
      { "color": "#246370" }, // dunkelgrün
      { "color": "#A8C3CA" }, // grün
      { "color": "#FFBB58" }, // orange
      { "color": "#DC440E" }, // orange
      { "color": "#D3E2E4" }, // orange
      { "color": "#C8C8C8" }, // grau
      { "color": "#6F6F6F" }, // grau
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
      itemWidth: 123,
      itemDistance: 2,
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

