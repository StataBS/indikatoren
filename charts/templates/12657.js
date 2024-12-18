(function () {
  return {

    "xAxis": {
      "type": "category",
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
      }
    },
    "yAxis": {
      //	"max": 3500,
      "tickInterval": 100,
      //min: -1500,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      { 
        "color": "#FABD24" /* "#b375ab" Friedmatt*/   
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
          "color": "#9E7C59" /*"#cd9c00" Pestalozzi*/
  }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
      //itemWidth: 300,
      //"x": 40,
      //"y": 55,    
      "itemStyle": {
        "fontWeight": "normal"
      },
      labelFormatter: function () {
        return this.name.split(" ").slice(-1).toString();  //holt z.B. 'Freiraumfäche' aus 'Freiraumfäche Friedmatt'
      },
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>',
      "shared": false
    },
    "chart": {
      "type": "column",
      "spacingBottom": 40,
      events: {
        load: function() {
            // `this` refers to the chart instance
            this.series[0].update({
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