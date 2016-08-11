chartOptions['I.01.1.0024'] = {
  "title": {
    "text": "Indikator 1.7.a: Wohneigentumsquote in Prozent"
  },
  "chart": {
    "renderTo": "container-I.01.1.0024"
  },
  "xAxis": {
    "max": 2015,
    "tickInterval": 5,
    "showLastLabel": true,
    "endOnTick": true
  },
  "yAxis": {
    "min": 0,
    "max": 16,
    "tickInterval": 2,
    "labels": {
      "format": "{value}%"
     }
  },
  "credits": {
    "text": "Quelle: Kantonale Gebäude- und Wohnungsstatistik;<br/>Statistisches Amt des Kantons Basel-Stadt"
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
 tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>%<br/>',
    shared: true
  },
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
		    var first = this.series.data[0];
			var last  = this.series.data[this.series.data.length - 1];
		    if (this.point.y === first.y || this.point.y === last.y ) {
			  return Highcharts.numberFormat(this.point.y, 0, ",", " ");
			}
			return "";
          }
      }
    }
  }
};