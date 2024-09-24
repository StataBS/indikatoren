(function () {
  return {
    xAxis: {
      tickPositioner: function () {
        var interval = 1,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "yAxis":{
      "min": 0,
      "max": 1, 
    "labels": {
          //"format": "{value:,.1f}%",
          "formatter": function(){
              return Highcharts.numberFormat((this.value*100),0)+'%'; 
            },
    }
    },	
    tooltip: {
      "pointFormatter": function(){
          return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b><br/><b>' 
        },
      },
    "series": [
      {
        "color": "#cd9c00"
      },
      {
        "color": "#b375ab"
      },
      {
        "color": "#008AC3"
      },
      {
        "color": "#007A2F"
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left"
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());
