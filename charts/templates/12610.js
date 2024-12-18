(function () {
  return {
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    },
    xAxis: {
      type: "category", /* ausprobieren, ob "category" oder nicht - hat Auswirkung auf den Abstand der letzten Jahreszahl zu rechten Rand */
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
       max:7500,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>'
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
        visible: true,
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
      alignColumns: false,
      //x: 45,
    },
    chart: {
      events: {
          load: function() {
              // `this` refers to the chart instance
              this.series[4].update({
                  name: "Friedmatt"
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
          },
          }
  }
}());
