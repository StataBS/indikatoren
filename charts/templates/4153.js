(function(){
    return {
  "yAxis": {
    "min": 0,
    //"max": 10000000,
    "tickInterval": 2000000,
    "labels": {
      "format": "{value:,.0f}",
    },
  },
  "xAxis": {
    "type": "category"
  },
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },
      "index": 0,
      "color": "#923f8d"
    }
  ],
  "tooltip": {
    "shared": false
  },
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
        //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
        "formatter": function() {
          var last  = this.series.data[this.series.data.length - 1];
          var first  = this.series.data[0];
          if (this.point.y === first.y || this.point.y === last.y ) {
            return Highcharts.numberFormat(this.point.y, 0, ",", " ");
          }
        }
      }
    }
  }
	}
}());
