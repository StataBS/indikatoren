(function(){
    return {
 /* "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var last  = this.series.data[this.series.data.length - 1];
            var first  = this.series.data[0];
            if (this.point.y === first.y || this.point.y === last.y ) {
              return Highcharts.numberFormat(this.point.y, 1, ",", " ");
            }
            return "";
          }
      }
    }
  },*/
  "yAxis": {
    "min": -15,
    "max": 15,
    "tickInterval": 5,
    "labels": {
      "format": "{value:,.0f}",
    },
  },
  "xAxis": {
    "tickInterval": 1
  },
  "legend": {
    "enabled": false,
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right"
  },
  "series": [{
    "marker": {
      "symbol": "circle",
      "enabled": true
    },
    "index": 0,
    "color": "#008AC3"
  }],
  "tooltip": {
    "shared": false
  },
  "chart": {
    "type": "column"
  }
	}
}());