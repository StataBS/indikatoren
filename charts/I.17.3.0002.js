chartOptions['I.17.3.0002'] = {
  "plotOptions": {
    "series": {      
      "dataLabels": {
        "style": {
          "fontSize": 10
        }
      }
    },
  },
  "xAxis": {
    "tickInterval": 1,
	"type": "category"    
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    shared: false
  },  
  "yAxis": {
    "min": 0,
	"tickInterval": 10,
	"labels": {
     	 "format": "{value}%"
    }    
  },
  "series": [
    {
      "legendIndex": 0,
	  "color": "#000000"       
    },
    {
      "legendIndex": 1,
	  "color": "#DC440E"
    }
  ],
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
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
