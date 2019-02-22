
/*global Highcharts*/
(function(){
    return {
        plotOptions: {
          series: {
              stacking: null,
      				pointPadding: 0, 
      				groupPadding: 0.1, 
      				borderWidth: 0
          }, 
          line: {
            marker:{
              enabled: false,
              symbol: "circle",
            } 
          }
        },
        "chart": {      
            "type": "line",
        },
        "series": [
            {"color": "#083038"},
            {"color": "#008AC3"},
            {"color": "#71A3B5"}
        ],
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
        	"labels": {
        		"format": "{value:,.0f}",
        		"formatter": function(){
                return Highcharts.numberFormat((this.value*100),0)+'%'; 
              },
      	  }
        },	
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
        "pointFormatter": function(){
          return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b><br/><b>';
        },
          "xDateFormat": '%Y-%m'
        },
    };
}());

 
 /*"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{(point.y*100),1)}%</b><br/>',*/