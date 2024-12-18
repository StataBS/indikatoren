(function () {
  return {
    chart: {
      marginRight: 20,
      events: {
        load: function () {
          // `this` refers to the chart instance
          /*this.series[5].update({
            name: "Bezirk Friedmatt"
          });*/

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
        }
      },
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    },
    subtitle: {
      useHTML: true
    },
    xAxis: {
      tickInterval: 1
    },
    "yAxis": {
      min: 30,
      max: 45,
      tickInterval: 5,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      itemWidth: 160,
      width: 450,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
        },
      "align": "left",
      labelFormatter: function () {
        /*return this.name.replace('Friedmattviertel', 'Friedmatt').split("Wohnviertel ").slice(-1).toString();*/
        return this.name.split("Bezirk ").slice(-1).toString();
      }
    },
    "tooltip": {
      "shared": false,
      useHTML: true,
      pointFormatter: function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' 
        + this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 1) + ' m<sup>2</sup></b><br/>'
      }
    },
    "series": [
      {
        "color": "#3c3c3c",
        "dashStyle": "ShortDash"
      },
      {
        "color": "#8A8A8A", dashStyle: 'shortDash' /*"#8A8A8A" Stadt Basel*/,
      },
      {
        "color": "#9E7C59"
      },
      {
        "color": "#FF8028"
      },
      {
        "color": "#923F8D"
      },
      {
        "color": "#689199"
      },
      {
        "color": "#FABD24",
        visible: true,
      },
    ],
  }
}());
