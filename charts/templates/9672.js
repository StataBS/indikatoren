(function () {
  return {
    "chart": {
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

          this.series[1].points[this.series[1].points.length - 1].update({
            dataLabels: {
              enabled: true,
              y: -5,
              x: -50,
              format: 'Zielwert {key}: {y:,.1f}%',
              style: {
                textOutline: false,
                color: "#999999",
              }
            },
            marker: {
              enabled: true
            }
          });

          const chart = this,
            colors = ['#59fb59', '#fbf659', '#fb9999'],
            data = chart.series[0].data,
            assessed = chart.series[2].data;
          data.forEach(function (element, i) {
            if (assessed[i].y !== null) {
              element.update({
                color: colors[assessed[i].y],
                marker: {
                  enabled: true,
                  lineWidth: 1,
                  lineColor: "#0091f7",
                  radius: 3
                }
              });
              if (typeof assessed[i + 1] == 'undefined' || assessed[i + 1].y == null) {
                element.update({
                  marker: {
                    enabled: true,
                    lineWidth: 1,
                    lineColor: "#0091f7",
                    radius: 4.5
                  }
                });
              }
            }
          });

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
    "xAxis": {
      "type": "category",
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
    },
    "series": [
      {
        "color": "#0091f7",
        zIndex: 2
      },
      {
        dashStyle: 'ShortDash',
        color: "#999999",
      },
      {
        visible: false,
        showInLegend: false
      },
    ],
  }
}());