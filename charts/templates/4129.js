(function(){
  return {
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    "xAxis": {
      "type": "category"
    },
    "tooltip": {
      "shared": false
    },
    "series": [
      {
        "marker": {
          "symbol": "circle",
          "enabled": true
        },
        "index": 4,
        "color": "#DC440E"
      },
      {
        "marker": {
          "symbol": "circle",
          "enabled": true
        },
        "index": 3,
        "color": "#933F8D"
      },
      {
        "marker": {
          "symbol": "circle",
          "enabled": true
        },
        "index": 2,
        "color": "#68AB2B"
      },
      {
        "marker": {
          "symbol": "circle",
          "enabled": true
        },
        "index": 1,
        "color": "#689199"
      },
      {
        "marker": {
          "symbol": "circle",
          "enabled": true
        },
        "index": 0,
        "color": "#008AC3"
      }
    ],
    "plotOptions": {
      "series": {
        "dataLabels": {
          "enabled": true,
          "allowOverlap": true,
            //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
            formatter: function() {
              var last  = this.series.data[this.series.data.length - 1];
              if (this.point.category === last.category  &&  this.point.y === last.y ) {
                return this.series.name;
              }
              return "";
            }
        }
      }
    }
	};
}());
 