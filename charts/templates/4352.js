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
              return Highcharts.numberFormat(this.point.y, 1, ",", " ") + "%";
            }
            return "";
          }
      }
    }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}%",
    },
    max: 100
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1
  },
  "legend": {
    "enabled": false
  },
  "series": [
    {
    "color": "#b9cfd7"
    }
  ],
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    shared: false
  }, 
  "chart": {
    "marginBottom": 85,
    "marginTop": 75,
    "type": "column"
  }
	}
}());