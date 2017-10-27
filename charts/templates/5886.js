(function(){
    return {
	"chart": {
			spacing: [15,3,8,3], /*top, right, bottom and left */ /*[3,3,3,3]*/
		},
   "yAxis": {
    "labels": {
      "format": "{value:,.0f} ha",
    }
  },
  "xAxis": {
	  //tickInterval: 1,
	  //padding: 0
  },
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },     
      "color": "#007A2F",
       "dataLabels": {
        style: {"fontSize": "10px", "fontWeight": "normal"}, 
        "enabled": true,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var first = this.series.data[0];
            var last  = this.series.data[this.series.data.length - 1];
            if (this.point.x === first.x || this.point.x === last.x) {
              return /*this.point.x + ":<br/>" + */ Highcharts.numberFormat(this.point.y, 0, ",", " ") + "";
            }
            return "";
          }
      }
    }
  ],
  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  "plotOptions": {
    /*"series": {
      "dataLabels": {
        "enabled": true,
        "allowOverlap": true,
          y: 30,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var last = this.series.data[this.series.data.length - 1];
            var first = this.series.data[0];
            if (this.point.category === first.category && this.point.y === first.y || this.point.category === last.category && this.point.y === last.y ) {
              return Highcharts.numberFormat(this.point.y, 2, ",", " ");
            }
            return "";
          }
      }
    },*/
    
    
  }
}
}());

