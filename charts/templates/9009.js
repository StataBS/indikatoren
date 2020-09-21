(function () {
  return {
    chart: {
      type: "line",
      animation: false,
      inverted: false,
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        pointWidth: 14
      }
    },
    yAxis: {
      //tickAmount: 6
      min: 0,
      labels: {
        format: "{value:,.0f}%"
      }
    },
    xAxis: {
      tickPositioner: function () {
        var interval = 2,
        ext = this.getExtremes(),
        i = ext.dataMax,
        pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      },
      labels: {
        rotation: -45
      }
    },
    series: [
      { color: "#FF8028" },
      { color: "#B00000" }
    ],
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      itemWidth: 300,
      itemStyle: {
        fontWeight: "normal"
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
    }
  }
}());
