(function () {
  return {
    "chart": {
      "type": "line",
      events: {
        load: function () {
          this.credits.element.onclick = function () { };

          //for top-left legends with no x defined: move legend to x position of first yAxis
          if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0) {
            this.update(
              {
                legend: {
                  x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
                }
              }
            );
          }
        }
      }
    },
    plotOptions: {
      series: {
        connectNulls: true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    },
    title: {
      useHTML: true
    },
    subtitle: {
      useHTML: true
    },
    xAxis: {
      tickInterval: 1,
      labels: {
        step: 2,
        rotation: -45
      },
    },
    yAxis: {
      tickInterval: 1,
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
    },
    tooltip: {
      valueDecimals: 2,
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    series: [
      {
        color: "#0091f7",
        zIndex: 2,
      },
      {
        type: "line",
        dashStyle: 'ShortDash',
        color: "#999999",
      },
      {
        visible: false,
        showInLegend: false
      },
    ],
  };
}());
