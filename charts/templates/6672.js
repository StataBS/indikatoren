(function () {
  return {
    chart: {
      inverted: true,
      marginLeft: 120,
      marginRight: 10,
      spacingRight: 3
    },
    legend: {
      layout: "horizontal",
      align: "left",
      verticalAlign: "top",
      itemDistance: 10,
      symbolPadding: 1
    },
    xAxis: {
      labels: {
        step: 1,
        y: 3,
        formatter: function () {
          return this.value.replace("und", "u.");
        }
      }
    },
    yAxis: {
      tickInterval: 20,
      labels: {
        y: 18,
        rotation: 0
      },
    },
    series: [
      { color: "rgb(103,39,115)", index: 2, legendIndex: 0 }, /*Sek1*/
      { color: "rgb(180,117,171)", index: 1, legendIndex: 1 }, /*Sek2*/
      { color: "rgb(231,207,226)", index: 0, legendIndex: 2 }, /*Tert.*/
    ]
  };
}());
