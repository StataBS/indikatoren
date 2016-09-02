chartOptions["I.01.8.0001"] = {
  "yAxis": {
    "labels": {
      "formatter": function(){
        return Highcharts.numberFormat((this.value*100),0)+'%'; 
      } 
    },
    "max": 1 
  },
  "xAxis": {
    "tickInterval": 1
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "x": 0,
    "y": 30,
    "align": "left"
  },

  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },
      "index": 0,
      "color": "#008AC3"
    },
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },
      "index": 1,
      "color": "#990300"
    },
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },
      "index": 1,
      "color": "orange"
    }
  ],
  "tooltip": {
    "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ':<br/><b>' + Highcharts.numberFormat((this.y*100),2) + '% </b>reden deutsch oder schweizerdeutsch,<br/><b>' + Highcharts.numberFormat(((1-this.y)*100),2) + '% </b>reden eine andere Sprache<br/>'
    },
    "shared": false
  },  
  "chart": {    
    "marginTop": 100
  },  
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": false
      }
    }
  }
};
