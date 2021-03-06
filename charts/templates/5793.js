(function () {
  return {
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    "xAxis": {
      type: "category",
      "tickInterval": 5,
    },
    "series": [
      {
        "color": "#8b2223"
      },
      {
        "color": "#008AC3"
      }

    ],
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b> globale Hektaren pro Kopf<br/>',
      "shared": false
    },
    legend: {
      enabled: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left"
    },
    "plotOptions": {
      "series": {
        "marker": {
          "symbol": "circle",
          "enabled": false
        },
        "dataLabels": {
          "enabled": false,
          "allowOverlap": true,
          y: 40,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function () {
            var last = this.series.data[this.series.data.length - 1];
            var first = this.series.data[0];
            if (this.point.category === first.category && this.point.y === first.y || this.point.category === last.category && this.point.y === last.y) {
              return Highcharts.numberFormat(this.point.y, 1, ",", " ");
            }
            return "";
          }
        }
      },


    }
  }
}());

