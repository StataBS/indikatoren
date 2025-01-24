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

/*          
          this.series[1].points[9].update({
            dataLabels: {
              enabled: true,
              y: -35,
              x: -50,
              format: 'Konvergierender Zielbereich<br>{key}: 0%-10% unter Zielpfad<br>2037: +/- 0%',
              connectorColor:  "#999999",
              connectorWidth: 2,
              style: {
                textOutline: false,
                color: "#999999",
              }
            },
          });
*/
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
              enabled: true,
            }
          });

          const chart = this,
            colors = ['#59fb59', '#fbf659', '#fb9999'],
            data = chart.series[0].data,
            assessed = chart.series[3].data;
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
      formatter: function (e) {
        //use shared tooltip for group of series only (instead of for all)
        //source: https://jsfiddle.net/BlackLabel/gq1d1aba/

        //console.log(this.point.series);

        var point = this.point,
          series = point.series,
          chart = series.chart,
          correspondingSeries = series.linkedSeries[0] || series.linkedParent,
          linePoint,
          arearangePoint,
          correspondingPoint,
          firstLine = '';

        if (correspondingSeries === undefined) return e.defaultFormatter.call(this, e);
        else {
          // unselect previously selected point
          if (chart.extraHoveredPoint) {
            chart.extraHoveredPoint.setState('');
          }

          // find corresponding point
          if (correspondingSeries) {
            //console.log(correspondingSeries,  correspondingSeries.points, point.index);
            //console.log(point.index, this.series.cropStart);
            correspondingPoint = correspondingSeries.points[point.index - this.series.cropStart];
            correspondingPoint.setState('hover');
            chart.extraHoveredPoint = correspondingPoint;
          }

          // identify type of points for formatting purposes
          if (point.low !== undefined) {
            arearangePoint = point;
            linePoint = correspondingPoint;
          } else {
            arearangePoint = correspondingPoint;
            linePoint = point;
          }
          //console.log(this);
          if (linePoint.y !== null) firstLine = "<span style='color:" + linePoint.series.color + "'>●</span> " +
            linePoint.series.name + ": <b>" + Highcharts.numberFormat(linePoint.y, 1) + "%</b><br>";

          return "<span style='font-size: 10px'>" + this.key + "</span><br>" +
            firstLine +
            arearangePoint.series.name.replace('Untere Grenze', '') + ": <b>" + Highcharts.numberFormat(arearangePoint.low, 1) + "%</b> bis <b>" + Highcharts.numberFormat(arearangePoint.high, 1) + "%</b>";
        }
      }
    },
    "series": [
      {
        "color": "#0091f7",
        zIndex: 3
      },
      {
        id: "Zielpfad",
        dashStyle: 'ShortDash',
        color: "#999999",
        zIndex: 2,
      },
      {
        "color": "#ccc",
        type: 'arearange',
        linkedTo: "Zielpfad",
        showInLegend: true,
        zIndex: 1,
        marker: {
          states: {
            hover: {
              enabled: false
            }
          }
        }
      },
      {
        visible: false,
        showInLegend: false
      }
    ]
  }
}());