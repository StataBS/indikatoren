(function(){
    return {
  "plotOptions": {
    "series": {  
       pointPadding: 0,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      }
    },
  },

        "xAxis": {
          type: 'datetime',
          tickInterval: 1000 * 60 * 60 * 24 * 30,
          labels: { 
            formatter: function() {
              if (this.isFirst || this.isLast) {
                return Highcharts.dateFormat('%b %y', this.value);
              } else {
                return Highcharts.dateFormat('%b', this.value);
              }
            },
          },
        },
        "yAxis": {
          "min": null,
        	"labels": {
        		"format": "{value:,.0f}",
        		"formatter": function(){
                return Highcharts.numberFormat((this.value*1),1)+'%'; 
              },
      	  }
        },	

  "series": [
    {
      "color": "rgb(111,111,111)"       
    },
    {
      "color": "rgb(176,0,0)"
    }
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    shared: false,
    "xDateFormat": '%Y-%m'
  },  
  "chart": {      
    "renderTo": 'container-I.05.1.0001',
    "type": "column",
    //"marginBottom": 90,
  }
	}
}());
