(function(){
  return {
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
      },
      "min": 0
    },
    "xAxis": {
      "type": "category"
    },
    "series": [
      {
        "marker": {
          "symbol": "circle",
          "enabled": false
        },
        "index": 0,
        "color": "#B375AB"
      },
      {
        "marker": {
          "symbol": "circle",
          "enabled": false
        },
        "index": 1,
        "color": "#CD9C00"
      },
      {
        "marker": {
          "symbol": "circle",
          radius: 3,
          "enabled": true
        },
        type: "scatter",
        "index": 2,
        "color": "#662673"
      },
      {
        "marker": {
          "symbol": "circle",
          radius: 3,
          "enabled": true
        },
        type: "scatter",
        "index": 3,
        "color": "#7F5F1A"
      },
    ],
    "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    itemMarginBottom: 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    },
    // itemDistance: 6,
     //itemWidth: 205, 
     //padding: 1,
  },
    "tooltip": {
      "shared": false
    },
    "plotOptions": {
      scatter:{
        tooltip: {
          headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
          pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>'    
        }  	    
      },
      "series": {
        "dataLabels": {
          "enabled": false,
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
