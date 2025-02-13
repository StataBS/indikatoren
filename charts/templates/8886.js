(function () {
  return {
    /*chart: {
      marginTop: 30,
        marginRight: 10
    },*/
    "xAxis": {
      "tickInterval": 2,
      labels:{
        rotation: 0
      },
      tickPositioner: function () {
        var interval = 2,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    yAxis: {
      tickInterval: 2,
    },
    series: [
      { color: "#8AB77D", zIndex: 1 },
      { color: "#83522E", zIndex: 0 }
    ],
    legend: {
      enabled: true,
      verticalAlign: "top",
      align: "left",
      layout: "horizontal"

    },
  };
}());
