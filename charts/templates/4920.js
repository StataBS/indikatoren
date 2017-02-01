(function(){
    return {
  "yAxis": {
    "tickInterval": 250000,
    "labels": {
      "format": "{value:,.0f}",
    },
  "min": 0
  },
  "xAxis": {
    "tickInterval": 2
  },
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },
      "index": 0,
      "color": "#B375AB"
    }
  ],
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
		    var first = this.series.data[0];
			var last  = this.series.data[this.series.data.length - 1];
		    if (this.point.y === first.y || this.point.y === last.y ) {
			  return Highcharts.numberFormat(this.point.y, 0, ",", " ");
			}
			return "";
          }
      }
    }
  }
	}
}());