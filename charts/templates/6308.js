(function(){
    return {
      chart: {
        spacingTop: 10
      },
      "yAxis": {
         tickAmount: 5,
        "labels": {
          "format": "{value:,.0f}%",
        }
      },
      "xAxis": {
        "tickInterval": 2,
      },
      "series": [
        {
      	"color": "#B00000",
        	"legendIndex": 2
        }, /* rot */
        {
      	"color": "#662673",
        	"legendIndex": 0
        }, /* violett */
        {
      	"color": "#008AC3",
        	"legendIndex": 1
        }, /* blau */
        {
        	"color": "#007A2F", 
        	"legendIndex": 3
        }, /* grün */
      ],
       "legend": {
        "enabled": true,
        "itemWidth": 50,
        "layout": "vertical",
        "verticalAlign": "middle",
        "itemMarginBottom": 5,
        "align": "right",
        "itemStyle": {
          "fontWeight": "normal"
        }
      },
      /*  
      "series": [
        {
          "marker": {
            "symbol": "circle",
            "enabled": true
          },     
          "color": "#8b2223"
        }
      ],
      */
      "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}%</b><br/>',
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
            "enabled": false,
            "allowOverlap": true,
              y: 40,
              //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
              formatter: function() {
                var last = this.series.data[this.series.data.length - 1];
                var first = this.series.data[0];
                if (this.point.category === first.category && this.point.y === first.y || this.point.category === last.category && this.point.y === last.y ) {
                  return Highcharts.numberFormat(this.point.y, 0, ",", " ") + '%';
                }
                return "";
              }
          }
        },
      }
      };
}());

