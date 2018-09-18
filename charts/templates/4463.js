(function(){
    return {
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
    "x": 35,
    //"y": 50,
    "align": "left"
  },

  "series": [
    {
      "index": 0,
      "color": "#008AC3"
    },
    {
      "index": 1,
      "color": "#990300"
    },
    {
      "index": 1,
      "color": "orange"
    }
  ],
  "tooltip": {
    "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ':<br/><b>' + Highcharts.numberFormat((this.y*100),1) + '% </b>Deutsch oder Schweizerdeutsch,<br/><b>' + Highcharts.numberFormat(((1-this.y)*100),1) + '% </b>nicht Deutsch oder Schweizerdeutsch<br/>'
    },
    "shared": false
  },  
  "chart": {    
    //"marginTop": 120
  },  
  "plotOptions": {
    "series": {
      marker: {
        enabled: false
      },
      "dataLabels": {
        "enabled": false
      }
    }
  }
	}
}());
