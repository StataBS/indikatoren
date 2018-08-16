(function(){
    return {
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
    "tickInterval": 2
  },
  "series": [
    {
      "color": "#923F8D"
    },
    {
      "color": "#FABD24"
    }
  ],
  "tooltip": {
    "shared": false
  },
  "plotOptions": {
    line: {
      marker: {
        enabled: false
      }
    },
    "series": {
      "dataLabels": {
        "enabled": true,
        "allowOverlap": true,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var last  = this.series.data[this.series.data.length - 1];
            if (this.point.category === last.category  && this.point.y === last.y) {
              return this.series.name;
            }
            return "";
          }
      }
    }
  }
	}
}());
 