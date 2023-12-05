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
            )
          };
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
        pointWidth: 14
      }
    },
    yAxis: {
      tickAmount: 5,
      labels: {
        format: "{value:,.0f}%"
      }
    },
    series: [
      { color: "#007A2F" },
      { color: "#E7CEE2" },
      { color: "#B375AB" },
      { color: "#923F8D" },
      { color: "#662673" },
      { color: "#2E1435" },
     
    ],
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      //itemWidth: 300,
      itemStyle: {
        fontWeight: "normal"
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}%</b><br/>',
    }
  }
}());
