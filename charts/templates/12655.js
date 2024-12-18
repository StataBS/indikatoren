(function(){
  return {
"xAxis": { tickInterval: 1
},
"yAxis": {
"labels": {
  "format": "{value:,.0f}"
}
},	
"tooltip": {
  "shared": false, 
  useHTML: true,
"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>'
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
    "color": "#FABD24" /* "#b375ab" Friedmatt*/
  },
],
"legend": {
  "enabled": true,
  "layout": "horizontal",
  "verticalAlign": "top",
  "itemMarginBottom": 5,
  "align": "left",
  "itemStyle": {
    "fontWeight": "normal"
  },
  //x:30
},
"plotOptions": {
  "line": {
  "connectNulls": true,
    "marker":{
      "enabled": false,
      "symbol": "circle",
    }
  }
},
subtitle: {
  useHTML: true
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
  
,
}
}());
