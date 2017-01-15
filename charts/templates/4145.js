var chartOptions = {
  "xAxis": {
    "max": 2015,
    "tickInterval": 5,
    "showLastLabel": true,
    "endOnTick": true
  },
  "yAxis": {
    "min": 0,
    "max": 16,
    "tickInterval": 2,
    "labels": {
      "format": "{value}%"
     }
  },
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },
      "index": 0,
      "color": "#008AC3"
    }
  ],
 tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b>%<br/>',
    shared: true
  },
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
};