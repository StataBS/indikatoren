(function () {
  return {
    "chart": {
      "type": "scatter",
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
          const chart = this;
          console.log(this);
          chart.series[0].data.forEach(function (element, i) {
            console.log(element.name, i);
            if (chart.series[0].data[i].name == "<b>BS</b>") {
              element.update({
                color: "#0091f7"
              })
            }
          });
/*
          this.series[1].points[this.series[1].points.length - 1].update({
            dataLabels: {
              enabled: true,
              y: -80,
              x: -50,
              format: 'Zielwert {key}: {y:,.1f}',
              style: {
                textOutline: false,
              }
            },
            marker: {
              enabled: true
            }
          });

          const chart = this,
            colors = ['#59fb59', '#fbf659', '#fb9999'],
            data = chart.series[0].data,
            assessed = chart.series[1].data;
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
    "plotOptions": {
      series: {
        //pointWidth: 5, 
      },
      "column": {
        "colorByPoint": true
      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        "rotation": -90,
        x: -2
      },
/*      plotLines: [
        {
        value: 1.5,
        dashStyle: 'ShortDash',
        color: "#999999",
        width: 1.5,
        label: {
          text: "Zielwert: Rang 2",
          rotation: 0,
          y: 12,
          style: {
            color: "#999999",
            fontWeight: "bold",
            fontSize: 10
          }
        }
      }]
*/
    },
    "yAxis": {
      "max": 100,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "x": 35,
    },
    tooltip: {
      headerFormat: '<span style="font-size: 10px">{series.name}</span><br/>',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.name}: <b>{point.y:,.1f}</b><br/>',
      "shared": false
    },
    series: [
      {
        name: 'Kanton',
        color: "#aaaaaa",
        zIndex: 2,
      },
/*      {
        visible: false,
        showInLegend: false
      },*/
    ],
  /*"colors": [
    "#A8C3CA",
    "#0091f7",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
  ],*/

}
}());