(function () {
  return {
    /*"yAxis": {
      "labels": {
        "format": "{value:,.0f}",
      }
    },*/
    chart: {
      marginRight: 20
    },
    "xAxis": {
      type: "category",
      //"tickInterval": 5,
      tickPositioner: function () {
        var maxlabels = 10,
          ext = this.getExtremes(),
          i = Math.round(ext.max),
          interval = Math.round((i - ext.min)/maxlabels),
          pos = [i];
        while (i >= ext.min) pos.unshift(i = i - interval);
        return pos;
      }
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
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b> globale Hektaren pro Kopf<br/>',
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
      },
    }
  }
}());

