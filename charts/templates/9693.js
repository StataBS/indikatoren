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
      column: {
        borderWidth: 0
      }
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: null,
      //max: 100,
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
      itemWidth: 280,
      width: 600,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
    },
    "tooltip": {
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 1) + '% </b>'
      },
    },
    series: [
      {
        color: "#0091f7",
        legendIndex: 1,
        zIndex: 2
      },
      {
        color: "#999999",
        //dashStyle: 'ShortDash',
        legendIndex: 3
      },
      {
        visible: false,
        showInLegend: false
      },
      {
        "color": "#0091f7", type: "column", legendIndex: 5,
        "tooltip": {
          "pointFormatter": function () {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 1) + ' Prozentpunkte </b>'
          },
        },
      },
      {
        "color": "#999999", type: "column", legendIndex: 7,
        "tooltip": {
          "pointFormatter": function () {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 1) + ' Prozentpunkte </b>'
          },
        },
      },
      { "color": "#007A2F", legendIndex: 2, visible: false },
      { "color": "#2B0099", legendIndex: 4, visible: false },
      { "color": "#B00000", legendIndex: 6, visible: false },
      { "color": "#73B97C", legendIndex: 8, visible: false },
      { "color": "#ffbb58", legendIndex: 12, visible: false },
      { "color": "#cd9c00", legendIndex: 14, visible: false },
    ],
  };
}());
