var chartOptions = {
  "yAxis": {
    "labels": {
      "format": "{value:,.1f}%",
    } 
  },
  "xAxis": {
    "tickInterval": 1
  },
  "tooltip": {
    "shared": false,
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
  },
  "series": [
    {"color": "#B00000"},
    {
      "color": "#71A3B5",
      "marker": {
        "enabled": true
      }    
    },
    {"color": "#672773"},
    {"color": "#007A2F"},
    {"color": "#73BA7C"},
    {"color": "#FABD24"},
    {"color": "#D3E2E5"}
  ],
  "legend": {
    "enabled": true,
    "x": 20,
    "y": 35,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  }, 
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    },
    "series": {
      "dataLabels": {
        "enabled": false,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var first  = this.series.data[0];
            var last  = this.series.data[this.series.data.length - 1];            
            if (this.point.category === first.category  &&  this.point.y === first.y ) {
              return this.series.name;
            }
            return "";
          }
      }
    }
  },
  "chart": {		
		"marginTop": 120
	}
};
 
