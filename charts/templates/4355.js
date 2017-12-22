(function(){
    return {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var last  = this.series.data[this.series.data.length - 1];
            var first  = this.series.data[0];
            if (this.point.x === first.x || this.point.x === last.x) {
              return Highcharts.numberFormat(this.point.y, 0, ",", " ");
            }
            return "";
          }
      }
    }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    },
  },
  "xAxis": {
    "tickInterval": 1
  },
  "legend": {
    "enabled": false
  },
  "series": [
    {
    "color": "#B00000"
    }
  ],
  "tooltip": {
    "shared": false
  },
  "chart": {
    "marginBottom": 65,
    "marginTop": 75,
    "type": "column"
  }
	}
}());