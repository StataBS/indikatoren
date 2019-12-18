(function () {
  return {
    chart: {
      inverted: true,
      marginLeft: 130,
      marginRight: 5
    },
    xAxis: {
      labels: {
        style: {
          fontSize: "9px"
        },
        align: "left",
        x: -125,
        
        step: 1
      }
    },
    yAxis: {
      tickInterval: 50,
      max: 100,
      labels: {
        y: 15,
        rotation: 0
      }
    },
    legend: {
      layout: "horizontal",
      align: "left",
      verticalAlign: "top",
      x: -1,
      margin: 10,
      padding: 1,
      itemWidth: 155,
      itemDistance: 1,
      itemMarginBottom: 2,
      symbolPadding: 1
    },
    series: [
      { color: "#007a2f", index: 6, legendIndex: 0 }, // dunkelgrün
      { color: "#68ab2b", index: 5, legendIndex: 1 }, // grün
      { color: "#FABD24", index: 4, legendIndex: 2 }, // gelb
      { color: "#DC440E", index: 3, legendIndex: 3 }, // orange
      { color: "#C8C8C8", index: 1, legendIndex: 5 }, // hellgrau
    ]
  }
}());
