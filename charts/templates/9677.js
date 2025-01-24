(function () {
  return {
    "chart": {
      "type": "column",
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
            data = chart.series[3].data,
            assessed = chart.series[2].data;
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
    plotOptions: {
      column: {
        borderWidth: 0,
        minPointLength: 1
      }
    },
    "xAxis": {
      type: "category",
      tickPositioner: function () {
        var maxlabels = 10,
          ext = this.getExtremes(),
          i = Math.round(ext.max),
          interval = Math.round((i - ext.min)/maxlabels),
          pos = [i];
        while (i >= ext.min) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "yAxis": {
      //max: 6,
      min: null,
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 1) + '%';
        },
      }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    "tooltip": {
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '% </b>'
      },
    },
    "series": [
      {
        color: "#0091f7",
        legendIndex: 3,
        "tooltip": {
          "pointFormatter": function () {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + ' Prozentpunkte </b>'
          },
        },
      },
      {
        color: "#999999",
        legendIndex: 4,
        "tooltip": {
          "pointFormatter": function () {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + ' Prozentpunkte </b>'
          },
        },
      },
      {
        visible: false,
        showInLegend: false
      },
      {
        color: "#0091f7",
        type: "line",
        legendIndex: 1
        //visible: false,
      },
      {
        //dashStyle: 'ShortDash',
        color: "#999999",
        type: "line",
        legendIndex: 2
        //visible: false,
      },

      /*{
        color: "#c9fbc9",
        type: "arearange",
        id: "grün",
        showInLegend: false,
        tooltip: {
          pointFormatter: function () {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>< ' + Highcharts.numberFormat((this.high), 1) + '% </b>'
          },
        },
        /*fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, "#c9fbc9"],
            [1, "#fbfbfb"]
          ]
        }*/
      //},
      /*
      {
        color: "#fbf6c9",
        type: "arearange",
        id: "gelb",
        showInLegend: false,
        tooltip: {
          pointFormatter: function () {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b> ' + Highcharts.numberFormat((this.low), 1) + '% - ' + Highcharts.numberFormat((this.high), 1) + '%</b>'
          },
        },
      },
      {
        color: "#fbc9c9",
        type: "arearange",
        id: "rot",
        showInLegend: false,
        tooltip: {
          pointFormatter: function () {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>> ' + Highcharts.numberFormat((this.low), 1) + '% </b>'
          },
        },
        /*fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, "#fbfbfb"],
            [1, "#fbc9c9"]
          ]
        }*/
      //},
    ]
  }
}());
