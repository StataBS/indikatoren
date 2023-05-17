(function () {
  return {
    "chart": {
      //"type": "column",
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

          this.series[2].points[this.series[2].points.length - 1].update({
            dataLabels: {
              enabled: true,
              //y: -5,
              //x: -50,
              format: 'Zielwert: < {y:,.1f}‰',
              style: {
                textOutline: false,
                color: "#999999",
              }
            },
          });

          const chart = this,
          colors = ['#59fb59', '#fbf659', '#fb9999'],
          data = chart.series[0].data,
          assessed = chart.series[3].data;
          data.forEach(function (element, i) {
          if (assessed[i].y != null) {
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
    "xAxis": {
      "tickInterval": 2,
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.f}",
        "style": {
          "color": "#000000"
        }
      },
      "min": -2.5,
      "max": 10,
      tickAmount: 6,
      "title": ""
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}‰</b><br/>',
    },
    "series": [
      {
        "color": "#0091f7",
      },
      {
        dashStyle: 'ShortDash',
        "color": "#0091f7",
      },
      {
        dashStyle: 'ShortDash',
        "color": "#999999",
      },
      {
        visible: false,
        showInLegend: false
      },
    ],
  }
}());

