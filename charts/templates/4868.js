(function(){
    return {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": false,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var last  = this.series.data[this.series.data.length - 1];
            var first  = this.series.data[0];
            if (this.point.x === first.x || this.point.x === last.x) {
              return Highcharts.numberFormat(this.point.y, 1, ",", " ");
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
    "color": "#FFBB58"
    }
  ],
  "tooltip": {
    valueDecimals: 1,
    "shared": false
  },
  "chart": {
    "type": "column"
  }
	};
}());