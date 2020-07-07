(function () {
  return {
    chart: {
      type: "column",
      //animation: false,
      inverted: false,
  /*events: {
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
  }*/
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        //pointWidth: 14
      }
    },
    yAxis: {
      tickAmount: 5,
      labels: {
        "format": "{value:,.0f}"
      }
    },
    series: [
      { color: "#246370" },
      { color: "#0F7399" },
      { color: "#689199" },
      { color: "#A8C3CA" },
      { color: "#D3E2E4" }
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
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    }
  }
}());
