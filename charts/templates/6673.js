(function () {
  return {
    chart: {
      inverted: true,
      marginRight: 10
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
        formatter: function () {
          return this.value.replace("Eingebürgerte","Eingebürgerte<br/>").replace("innen seit","innen<br>seit ");
        }
      }
    },
    yAxis: {
      tickInterval: 20,
      labels: {
        rotation: 0,
        y: 18
      }
    },
    series: [
      { color: "rgb(103,39,115)", index: 2, legendIndex: 0 }, /*Sek1*/
      { color: "rgb(180,117,171)", index: 1, legendIndex: 1 }, /*Sek2*/
      { color: "rgb(231,207,226)", index: 0, legendIndex: 2 }, /*Tert.*/
    ]
  };
}());