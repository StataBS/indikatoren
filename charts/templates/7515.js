
/*global Highcharts*/
(function(){
    return {
  
        "xAxis": {
          type: 'datetime',
          tickInterval: 1000 * 60 * 60 * 24 * 30,
          labels: { 
            formatter: function() {
              if (this.isFirst || this.isLast) {
                return Highcharts.dateFormat('%b %y', this.value);
              } else {
                return Highcharts.dateFormat('%b', this.value);
              }
            },
          },
        },
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
        }
   },
  "yAxis": {
	"max": 1000,
	"tickInterval": 250,
 min: -1000,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#FABD24", "visible": true}, /* gelb*/
    {"color": "#923F8D", "visible": true}, /* violett*/
  {"color": "#C8C8C8", "visible": true} /* grau */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //itemWidth: 300,
    //"x": 40,
    //"y": 55,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "xDateFormat": '%Y-%m'
   },
  "chart": {      
    "type": "column",
    "inverted": false,
    "spacingBottom": 40
  }
}
}());