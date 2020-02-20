(function () {
  return {
    "chart": {
      "type": "column"
    },
    "plotOptions": {
      "series": {
        //pointPadding: 0,
        groupPadding: 0.2,
        borderWidth: 0
      }
    },
    "xAxis": {
      type: "category"
      //"tickInterval": 1
    },
    "yAxis": {
      "tickInterval": 30,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.1f} GWh</b><br/>'
    },
    "series": [
      {
        "color": "#cd9c00"
      },
      {
        "color": "#b375ab"
      },
      {
        "color": "#999",
        "visible": false,
        showInLegend: false
      }
    ],
    "legend": {
      //width: 460,
      //itemWidth: 230,
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      labelFormatter: function () {
        return this.name.replace('Stromverbrauch ', '');
      },
    }
  }
}());