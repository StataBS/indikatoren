(function(){
    return {
  "yAxis": {
    tickAmount: 7,
    "labels": {
     	"formatter": function(){
        return Highcharts.numberFormat((this.value),0)+'%';
      } 
    },
    
  },
  "xAxis": {
    "tickInterval": 1
  },
  "legend": {
    itemDistance: 8,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    //"x": 35,
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
      "index": 2,
      "color": "#B475AB"
    },
    {
      "index": 3,
      "color": "orange"
    }
  ],
  "tooltip": {
   "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '% </b><br/><b>'
    },
    "shared": false
  },  
  "chart": {    
    //"marginTop": 120
  },  
  "plotOptions": {
    "series": {
      "marker": {
        "enabled": false,
        "symbol": "circle"
      },
      "dataLabels": {
        "enabled": false
      }
    }
  }
	}
}());
