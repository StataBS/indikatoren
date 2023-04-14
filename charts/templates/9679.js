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

          const chart = this,
            colors = ['#59fb59', '#fbf659', '#fb9999'],
            data = chart.series[0].data,
            assessed = chart.series[2].data;
          data.forEach(function (element, i) {
            if (assessed[i].y != null) {
              element.update({
                color: colors[assessed[i].y],
                marker: {
                  enabled: true,
                  lineWidth: 1,
                  lineColor: "#0091f7"
                }
              })
            }
          });
        }
      }
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    },
    "xAxis": {
      "tickInterval": 1,
      labels:{
        rotation: -45
      }
    },
    yAxis: {
      min: null
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left"
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    "series": [
      {
        "color": "#0091f7",
        zIndex: 2
      },
      {
        "color": "#999999",
        //dashStyle: 'ShortDash',
      },
      {
        visible: false,
        showInLegend: false
      },
    ],
  }
}());
