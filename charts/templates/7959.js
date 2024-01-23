(function () {
  return {
    chart: {
      type: "column",
      animation: false,
      inverted: false,
      events: {
        load: function (event) {
          if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0){
            this.update(
              {
                legend: {
                  x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
                }
              }
            );
          }
          justifyColumns(event.target);
        },
        redraw: function (event) {
          justifyColumns(event.target);
        }
      }
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        pointWidth: 14,
        minPointLength: 2,
      },
    },
    yAxis: {
      //tickAmount: 6,
      tickInterval : 2,
      max: 8,
      min: -2,
      labels: {
      }
    },
    series: [
      { color: "#73B97C" },
      { color: "#FFBB58" },
      { color: "#FF8028" },
      { color: "#DC440E" },
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
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b><br/>',
    }
  }
}());
