(function(){
    return {
   title: {
      useHTML: true
    },
    subtitle: {
      useHTML: true
    },
   plotOptions: {
        series: {
          pointPadding: 0,
          //groupPadding: 0.2,
          borderWidth: 0,
          //grouping: false /* disable automatic grouping */
        }
   },
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": 0 
    } 
  },
  "yAxis": {
    max: 25,
    tickInterval: 5,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
 "series": [
  {"color": "#7F5F1A",
    pointPlacement: -0.05
  }, 
	{"color": "#CD9C00",
    pointPlacement: -0.05
  },
	{"color": "#FFBB58 ",
    pointPlacement: -0.05
  },
  {"color": "#246370",
    pointPlacement: 0.05,
    visible: false
  }, 
	{"color": "#689199",
    pointPlacement: 0.05,
    visible: false
  },
	{"color": "#A8C3CA ",
    pointPlacement: 0.05,
    visible: false
  }
  ],
  "legend": {
    "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 2,
      //itemDistance: 7,
      x: 190,
      y: -45,
      itemWidth: 80,
      width: 240,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
    title: {
      text: '-<br>-', //pro <br> in chart.events.load ein <br> hier als Platzhalter, sonst springt die Legende beim anklicken
      style: {
        fontWeight: 'normal',
        lineHeight: 18
      }
    },
    labelFormatter: function () {
      return this.name.split(", ").slice(-1).toString();  //holt 1. Quartil etc.
    },
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f} CHF/m²</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false,
    "spacingBottom": 50,
    events: {
      load: function () {
        //add and move legend title (get it from series names)
        this.legend.title
          .attr({
            text:
              this.series[0].name.split(", ").slice(0,1).toString() //holt 'Mietwohnungen'
              + ':<br>'
              + this.series[3].name.split(", ").slice(0,1).toString() //holt 'Genossenschaftswohnungen'
              + ':<br>'
          })
          .translate(-160, 39); //move -140 to the left and 8 down
      }
    }
  }
}
}());