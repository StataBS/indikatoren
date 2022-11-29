(function () {
  return {
    "xAxis": {
      "type": "category",
      "labels": {
        x: -190,
        align: "leftt",
      /* style: {
            textOverflow: 'none'
        }*/
    }
    },
    "yAxis": {
      min: null,

      /*tickInterval: 3,*/
      "labels": {
        "formatter": function(){
            return Highcharts.numberFormat((this.value*100),0)+'%'; 
          }
        } 
    },
    "series": [
    { "color": "#71a3b5" }, /* Innenstadt */
    { "color": "#007A2F" }, /* Stadt Basel */

    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    tooltip: {
      "pointFormatter": function(){
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b>'; 
      },
      shared: false
    },
    "chart": {
      marginLeft: 200,
      marginRight: 30,
      "type": "column",
      "inverted": true, /* false */
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        pointPadding: 0.13
      }
    },
  }
}());


