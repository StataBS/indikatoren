(function () {
  return {
    "chart": {
      "type": "line",
      panning: {
        enabled: true,
        type: 'xy'
      },
      panKey: 'shift',
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
            assessed = chart.series[4].data;
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
        zIndex: 2,
        "tooltip": {
          "pointFormatter": function () {
            var tooltip = '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '</b>';
            var errorBarPoint = this.series.chart.series[1].points[this.index]; // corresponding error bar point
            return tooltip + ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((errorBarPoint.low), 1) + '</b> - <b>' + Highcharts.numberFormat((errorBarPoint.high), 1) + '</b>)';
          }
        }
      },
      {
        "index": 1,
        "type": "errorbar",
        "color": "#44b1f7",
        "tooltip": {
          "pointFormatter": function () {
            var parent = this.series.chart.series[0];
            parent.setState('hover'); //"aktiviere" alle series
            var tooltip = '<span style="color:' + parent.color + '">\u25CF</span> ' + parent.name + ': <b>' + Highcharts.numberFormat((parent.points[this.index].y), 1) + '</b>';
            var errorBarPoint = this.series.points[this.index]; // Find the corresponding error bar point
            return tooltip + ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((errorBarPoint.low), 1) + '</b> - <b>' + Highcharts.numberFormat((errorBarPoint.high), 1) + '</b>)';
          },
        }
      },
      {
        "color": "#999999",
        "tooltip": {
          "pointFormatter": function () {
            var tooltip = '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '</b>';
            var errorBarPoint = this.series.chart.series[3].points[this.index]; // corresponding error bar point
            return tooltip + ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((errorBarPoint.low), 1) + '</b> - <b>' + Highcharts.numberFormat((errorBarPoint.high), 1) + '</b>)';
          }
        }
        //dashStyle: 'ShortDash',
      },
      {
        "index": 3,
        "type": "errorbar",
        "color": "#aaaaaa",
        "tooltip": {
          "pointFormatter": function () {
            var parent = this.series.chart.series[0];
            parent.setState('hover'); //"aktiviere" alle series
            var tooltip = '<span style="color:' + parent.color + '">\u25CF</span> ' + parent.name + ': <b>' + Highcharts.numberFormat((parent.points[this.index].y), 1) + '</b>';
            var errorBarPoint = this.series.points[this.index]; // Find the corresponding error bar point
            return tooltip + ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((errorBarPoint.low), 1) + '</b> - <b>' + Highcharts.numberFormat((errorBarPoint.high), 1) + '</b>)';
          },
        }
      },

      {
        visible: false,
        showInLegend: false
      },
    ],
  }
}());
