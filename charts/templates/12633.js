(function(){
    return {
  "xAxis": {tickInterval: 1
  },
  "yAxis": {
	"labels": {
		formatter: function(){
            return Highcharts.numberFormat((this.value*100), 1)+'%';
        },
	}
  },	
  "tooltip": {
    //"shared": false, 
    "pointFormatter": function(){
    return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': ' + Highcharts.numberFormat((this.y*100),1) + '%'
},
   //   return '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: Highcharts.numberFormat((this.value*100), 1)+%</b><br/>'
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
}
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
   // x:35
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
 