(function () {
  return {
    xAxis: {
      tickPositioner: function () {
        var interval = 2,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'
    },
    "series": [
      {
        "color": "#9E7C59", legendIndex: 2 /*"#cd9c00" Pestalozzi*/
      },
      {
        "color": "#FF8028", legendIndex: 3 /* "#689199" Kannenfeld*/
      },
      {
        "color": "#923F8D", legendIndex: 4 /* "#662673" Landskron*/
      },
      {
        "color": "#689199", legendIndex: 5 /* "#999" Lysbüchel*/
      },
      {
        "color": "#FABD24", legendIndex: 6 /* "#b375ab" Friedmatt*/,
        visible: true,
      },
      {
        "color": "#8A8A8A", legendIndex: 1, dashStyle: 'shortDash' /*"#8A8A8A" Stadt Basel*/,
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      alignColumns: true,
     // x: 35,
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    },
    chart: {
      marginRight: 20,
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
