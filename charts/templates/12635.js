(function () {
  return {
    "chart": {
      "type": "column",
      events: {
        load: function () {
          //set xAxis min in navigator
          this.xAxis[0].update({
            min: 2020
          });
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
      }
    },
    "yAxis": {
      tickInterval: 1,
      "labels": {
        "format": "{value:,.0f}",
      },
    },
    "xAxis": {
      tickInterval: 1
      //"type": "category",
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      },
      //x:25
    },
    "series": [
      { 
        "color": "#9E7C59" /*"#cd9c00" Pestalozzi*/ 
      },
      {
        "color": "#FF8028" /* "#689199" Kannenfeld*/
      },
      {
        "color": "#923F8D" /* "#662673" Landskron*/
      },
      {
        "color": "#689199" /* "#999" Lysbüchel*/
      },
      {
        "color": "#FABD24" /* "#b375ab" Friedmatt*/,
}
    ],
    "plotOptions": {
      series: {
        borderWidth: 0,
        marker: {
          enabled: true
        },
        showInNavigator: true
      }
    },
    subtitle: {
      useHTML: true
    },
    navigator: {
      enabled: true,
      top: 330,
      series: {
        type: 'column',
        pointRange: null
      },
      xAxis: {
        max: 2023.1,
        // tickInterval: 1,
        tickPositioner: function () {
          var interval = 2,
            ext = this.getExtremes(),
            i = ext.dataMax,
            pos = [i];
          while (i >= ext.dataMin) pos.unshift(i = i - interval);
          return pos;
        },
        labels: {
          //step: 1,
          rotation: 0,
          align: 'center',
          y: 15,
          x: -5,
          style: {
            color: "#000000"
          },
          /*formatter: function () {
            // get year from chart axis label names
            return this.chart.xAxis[0].names[this.value].slice(0, 4);
          }*/
        },
      }
    },
  };
}());