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

          /*this.series[1].points[this.series[1].points.length - 1].update({
            dataLabels: {
              enabled: true,
              //y: -80,
              //x: -50,
              format: 'Zielwert: {y:,.1f}%',
              style: {
                textOutline: false,
                color: "#999999",
              }
            },
            marker: {
              enabled: false
            }
          });

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
          */
        }
      }
    },
    plotOptions: {
      arearange: {
        lineWidth: 0.5,
        //fillOpacity: 0.2,
        zIndex: -1,
        tooltip: {
          crosshairs: true,
          shared: true
        },
        marker: { states: { hover: { enabled: false } } }
      },
      series: {
        turboThreshold: 0
      }
    },
    xAxis: {
      //type: "category"
      tickInterval: 1,
      labels: {
        step: 2
      }
    },
    yAxis: {
      min: 75,
      max: 100,
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0) + '%';
        },
      }
    },
    legend: {
      enabled: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    "tooltip": {
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '% </b>'
      },
    },
    series: [
      {
        color: "#0091f7",
        legendIndex: 3
      },
      /*{
        color: "#999999",
        dashStyle: 'ShortDash',
        legendIndex: 4
      },
      {
        visible: false,
        showInLegend: false
      },
      */
      /*
            {
              color: "#fb9999", //colors = ['#59fb59', '#fbf659', '#fb9999'],
              type: "line",
              dashStyle: 'ShortDash',
              id: "rot",
              showInLegend: false,
              tooltip: {
                pointFormatter: function () {
                  return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>< ' + Highcharts.numberFormat((this.high), 1) + '% </b>'
                },
              },
              /*fillColor: {
                linearGradient: [0, 0, 0, 300],
                stops: [
                  [0, "#fbfbfb"],
                  [1, "#fbc9c9"]
                ]
              }*/
      /* }, {
 
         color: "#fbf659",
         type: "line",
         dashStyle: 'ShortDash',
         id: "gelb",
         showInLegend: false,
         tooltip: {
           pointFormatter: function () {
             return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b> ' + Highcharts.numberFormat((this.low), 1) + '% - ' + Highcharts.numberFormat((this.high), 1) + '%</b>'
           },
         },
       },
       {
         color: "#59fb59",
         type: "line",
         dashStyle: 'ShortDash',
         id: "grün",
         showInLegend: false,
         tooltip: {
           pointFormatter: function () {
             return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>> ' + Highcharts.numberFormat((this.low), 1) + '% </b>'
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

    ],
  };
}());

