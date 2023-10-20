(function () {
  return {
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0) + '%';
        },
      }
    },

    "xAxis": {
      "type": "category",
      "labels": {
        "formatter": function () {
          return this.value;
        }
      }
    },
    plotOptions: {

      series: {
        minPointLength: 3,
        "stacking": "percent",
        //pointWidth: 50,
        // groupPadding: 0,
      }
    },
    "series": [
      { "color": "#68AB2B", legendIndex: 4, index: 4 },
      { "color": "#FF8028", legendIndex: 3, index: 3 },
      { "color": "#DC440E", legendIndex: 2, index: 2 },
      { "color": "#FABD24", legendIndex: 1, index: 1 }
    ],
    "legend": {
      "enabled": true,
      "layout": "vertical",
      itemDistance: 5,
      "verticalAlign": "middle",
      "align": "right",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "data": {
      "switchRowsAndColumns": true
    },
    "chart": {
      type: "column",
      inverted: false,
    },
    "tooltip": {
      formatter: function() {
      
      if (this.point.name == 'Wegpendler' && this.series.name == 'Ausland') {
        return '<span style="font-size: 10px">' + this.point.name + '</span><br>' + '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b> N/A </b> - zu kleine Stichprobe'
      
      }
      
    else {
      return '<span style="font-size: 10px">' + this.point.name + '</span><br>' + '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),0)
        + '</b> (' + Highcharts.numberFormat((this.point.percentage),1) + '% von ' + Highcharts.numberFormat((this.point.total),0) +')'
    }
  }
    },
  };
}());

