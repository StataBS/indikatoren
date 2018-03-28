(function(){
    return {
	 title: {
	      useHTML: true
	    },
	    subtitle: {
	      useHTML: true
	    },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    },
    "min": 0
  },
  "xAxis": {
    "tickInterval": 5,
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
  "tooltip": {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
    "shared": false
  },
  "plotOptions": {
    "series": {
      "dataLabels": {
        overflow: 'none',
        crop: false,
        enabled: true,
        style: {
          textOverflow: 'none'
        },
        //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
        formatter: function() {
          var first = this.series.data[0];
          var last  = this.series.data[this.series.data.length - 1];
          if (this.point.y === first.y || this.point.y === last.y ) {
            return Highcharts.numberFormat(this.point.y, 1, ",", " ");
          }
          return "";
        }
      }
    }
  }
	}
}());

