(function () {
  return {
    "xAxis": {
      "type": "category",
      reversed: true,
      labels: {
        x: -5,
      }
    },
    yAxis: {
      tickInterval: 25,
      max: 100,
      labels: {
        y: 10,
        "type": "category",
        rotation: 0
      }
    },
    "series": [
      { "color": "#007a2f", index: 5, legendIndex: 0 }, // dunkelgrün
      { "color": "#68ab2b", index: 4, legendIndex: 2 }, // grün
      { "color": "#ffbb58", index: 3, legendIndex: 1 }, // orange
      { "color": "#dc440e", index: 2, legendIndex: 3 }, // rot
      { "color": "#C8C8C8", index: 1, legendIndex: 4 },
      { "color": "#6F6F6F", index: 0, legendIndex: 5 },
    ],
    legend: {
      //x: 1,
      layout: "horizontal",
      align: "left",
      verticalAlign: "top",
      reversed: false,
      alignColumns: false,
      itemWidth: 100,
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
