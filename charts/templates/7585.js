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
          //justifyColumns(event.target);
        }/*,
        redraw: function (event) {
          justifyColumns(event.target);
        }*/
      }
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        groupPaddin: 0.1,
        borderWidth: 0,
        pointWidth: 3
      }
    },
    yAxis: {
      tickAmount: 5,
      labels: {
        format: "{value:,.0f}%"
      }
    },
    xAxis: {
      //tickInterval: 1,
      labels: {
        //rotation: -45,
        staggerLines:2
      }
    },
    series: [
      { color: "#E7CEE2",
        visible: false
       },
      { color: "#B375AB",
        visible: false
       },
      { color: "#923F8D",
        visible: false },
      { color: "#662673" },
      { color: "#2E1435" } 
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
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}%</b><br/>',
      shared: true
    }
  }
}());
