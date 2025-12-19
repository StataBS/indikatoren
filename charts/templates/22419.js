(function () {
  return {
    "chart": {
      "type": "column",
      marginBottom: 80
    },
    plotOptions: {
      "series": {
        "borderWidth": 0,
        "stacking": "absolute",
        "groupPadding": 0
      }
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1,
      labels: {
        step: 1,
        rotation: -90,
      }
    },
    "yAxis": {
      "min": 0,
        "labels": {
        format: '{value}%',
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.2f}%</b><br/>',
      /*formatter: function () {
        const total = this.series.data.reduce((sum, point) => sum + point.y, 0); // Calculate the total sum of all data points
        const percentage = ((this.y / total) * 100);
        return `${this.key}<br><span style="color:${this.point.color}">\u25CF</span> ${this.series.name}: <b>` + Highcharts.numberFormat(percentage, 2) + `%</b> (` + Highcharts.numberFormat(this.y / 1000000, 2) + ` km²)`;
      }*/
    },
    "series": [
      {
        visible: false,
        showInLegend: false,
      },
      {
        visible: false,
        showInLegend: false,
      },
      {
        visible: false,
        showInLegend: false,
      },
      {
        visible: false,
        showInLegend: false,
      },
      {
        visible: false,
        showInLegend: false,
      },
      {
        visible: false,
        showInLegend: false,
      },
      {
        "color": "#68ab2b",
        visible: false,
        legendIndex: 3,
        index: 3
      },
      {
        "color": "#67401E",
        visible: false,
        legendIndex: 2,
        index: 2
      },
      {
        "color": "#933F8D",
        legendIndex: 1,
        index: 1
      },
      {
        "color": "#008AC3",
        visible: false,
        legendIndex: 4,
        index: 4
      },
      {
        "color": "#474747",
        visible: false,
        legendIndex: 5,
        index: 5
      }, 
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "align": "left",
      "verticalAlign": "top",
      "itemMarginBottom": 2,
    }
  }
}());