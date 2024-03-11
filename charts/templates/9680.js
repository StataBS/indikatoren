(function () {
  return {
    "chart": {
      //"type": "line",
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

          this.series[8].points[0].update({ //this.series[1].points.length - 1
            dataLabels: {
              enabled: true,
              y: 20,
              x: 40,
              format: 'Zielwert: > {y:,.1f}%',
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
            data = chart.series[7].data,
            assessed = chart.series[9].data;
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
      "series": {
        borderWidth: 0,
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        },
        "stacking": "percent"
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
        turboThreshold: 0,
        "stacking": undefined,
        marker: {
          enabled: false
        }
      },
      column: {
        borderWidth: 0,
        stacking: "percent"
      }
    },
    xAxis: {
      type: "category",
      tickInterval: 1,
      labels: {
        //step: 2,
        "formatter": function () {
          //add sum of observations of visible series to the axis label

          var allVisibleSeries = this.chart.series.filter(function (val, i, arr) {
            return val.type == "column";
          });
          var indexOfCurrentValue = this.axis.names.indexOf(this.value);
          var sum = allVisibleSeries.reduce(function (accumulator, series, index, arr) {
            return accumulator + series.yData[indexOfCurrentValue];
          }, 0);
          //use N if all series are visible, otherwise use n
          var nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n=';
          var formattedSum = Highcharts.numberFormat(sum, 0, ",", " ")
          return this.value.replace(" ", "<br/>") + '<br/>(' + nString + sum + ')';

          return "";
        }
      }
    },
    yAxis: {
      reversedStacks: false,
      //min: 75,
      //max: 100,
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0) + '%';
        },
      }
    },
    legend: {
      enabled: true,
      reversed: false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemWidth: 150,
      width: 450,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      }
    },
    /*"tooltip": {
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '% </b>'
      },
    },*/
    series: [
      { "color": "#addbe5", legendIndex: 2 }, // dunkelgrün 246370
      { "color": "#d3e1e4", legendIndex: 3 }, // grün A8C3CA
      { "color": "#ffebcd", legendIndex: 4 }, // orange FFBB58
      { "color": "#fac4b1", legendIndex: 5 }, // orange DC440E
      { "color": "#D3E2E4", legendIndex: 6 }, // orange D3E2E4
      { "color": "#cccccc", legendIndex: 7 }, // grau C8C8C8
      { "color": "#a4a4a4", legendIndex: 8, visible: false }, // grau 6F6F6F
      {
        color: "#0091f7",
        type: "line",
        legendIndex: 0,
        "tooltip": {
          "pointFormatter": function () {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '% </b>'
          },
        }
      },
      {
        color: "#999999",
        type: "line",
        dashStyle: 'ShortDash',
        legendIndex: 1,
        "tooltip": {
          "pointFormatter": function () {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '% </b>'
          },
        }
      },
      {
        visible: false,
        showInLegend: false
      },

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



// xAxis: {
//   type: "category"
// },
// yAxis: {
//   reversedStacks: false,
// },
// legend: {
//   reversed: false,
//   "layout": "horizontal",
//   "verticalAlign": "top",
//   "itemMarginBottom": 4,
//   "align": "left",
//   labelFormatter: function(){
//       return this.name.replace("/", " /<br/>");

//     }
// }