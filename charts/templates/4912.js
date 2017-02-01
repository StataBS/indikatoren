(function(){
    return {
  "yAxis": {
    "min": 0,
	"labels": {
      "format": "{value:,.0f}"
	  }
    },
    "xAxis": {
	  "tickInterval": 5
  },
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },
      "index": 0,
      "color": "#FF8028"
    }
  ],
  "plotOptions": {
    "series": {
      "dataLabels": {
              "y": 25,
              "enabled": true,
                //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
                formatter: function() {
                  var first = this.series.data[0];
                  var last  = this.series.data[this.series.data.length - 1];
                  if (this.x === first.x || this.x === last.x) {
                    return Highcharts.numberFormat(this.y, 0  , ",", " ");
                  }
                } 
      }
    }
  }
	}
}());