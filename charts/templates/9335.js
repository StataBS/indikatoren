(function () {
  return {
    "yAxis": {
      tickInterval: 10,
      labels: {
        x: -7,
        y: 3
      }
    },

    "xAxis": {
      "type": "category",
      "labels": {
        "formatter": function () {
          return this.value.replace("Summe Gesamtsteuer", "Summe<br>Gesamtsteuer");
        }
      }
    },
    plotOptions: {
      column: {
        groupPadding: 0.1,
        pointPadding: 0.2
      }
    },
    "series": [
      { "color": "#2B0099", legendIndex: 7, index: 7 },
      { "color": "#008AC3", legendIndex: 6, index: 6 },
      { "color": "#A0BEC8", legendIndex: 5, index: 5 },
      { "color": "#007A2F", legendIndex: 4, index: 4 },
      { "color": "#68AB2B", legendIndex: 3, index: 3 },
      { "color": "#73B97C", legendIndex: 2, index: 2 },
      { "color": "#D7E8D2", legendIndex: 1, index: 1 },
      { "color": "#FFDA80", legendIndex: 0, index: 0 },
    ],
    "legend": {
      "enabled": true,
      "layout": "vertical",
      symbolPadding: 2,
      itemDistance: 2,
      "verticalAlign": "middle",
      "align": "right",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "data": {
      "switchRowsAndColumns": true
    },
    "chart": {
      inverted: false,
      marginTop: 5,
      events: {
        load: function () {
          //draw lines between stacks of stacked columns
          this.customSvgLines = this.options.customFunctions.drawLinesBetweenStacks.call(this);
          //remove credits link
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

        },
        redraw: function () {
          if (this.customSvgLines !== undefined) {
            this.customSvgLines.forEach(function (line) {
              line.destroy();
            });
          }
          this.customSvgLines = this.options.customFunctions.drawLinesBetweenStacks.call(this);
        }
      }

    },
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:.1f}%)<br/>',
    },
    customFunctions: {
      //draw lines between stacks of stacked columns, see https://forum.highcharts.com/highcharts-usage/lines-between-stacked-columns-t40849/
      drawLinesBetweenStacks: function () {
        function drawLine(points) {
          return this.renderer.path(['M', points.x1, points.y1, 'L', points.x2, points.y2])
            .attr({
              'stroke-width': 0.4,
              stroke: 'black',
              zIndex: 3
            })
            .add();
        }

        var chart = this;
        var lines = [];
        var firstSeriesVisibleIndex = 0;

        for (var s = 0; s < chart.series.length; s++) {
          if (chart.series[s].visible) {
            firstSeriesVisibleIndex = s;
            break;
          }
        }

        for (var i = firstSeriesVisibleIndex + 1; i < chart.series.length; i++) {
          var series = chart.series[i];
          if (series.visible) {
            for (var j = 0; j < series.points.length - 1; j++) {
              var point1 = series.points[j];
              var point2 = series.points[j + 1];
              lines.push(drawLine.call(chart, {
                x1: point1.plotX + chart.plotLeft + point1.pointWidth / 2,
                y1: point1.plotY + chart.plotTop,
                x2: point2.plotX + chart.plotLeft - point1.pointWidth / 2,
                y2: point2.plotY + chart.plotTop
              }));
            }
          }
        }

        return lines;
      }
    }
  };
}());

