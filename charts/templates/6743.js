(function () {
  return {
    chart: {
      spacing: [5, 2, 2, 2]
    },
    plotOptions: {
      series: {
        pointWidth: 20
      }
    },
    xAxis: {
      reversed: false, //default in template befragung001_print is true
      type: "category"
    },
    yAxis: {
      tickInterval: 20,
      max: 100,
      labels: {
        rotation: 0
      }
    },
    "series": [
      { "color": "#B00000", index: 3, legendIndex: 3 }, // 
      { "color": "#FABD24", index: 2, legendIndex: 2 }, // 
      { "color": "#999999", index: 0, legendIndex: 0 }, // 
    ]
  };
}());
