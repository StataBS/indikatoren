(function () {
  return {
    "xAxis": {/*
      plotBands: [{
        color: "rgba(0,138,195,0.1)", from: 53, to: 67
      },
      {
        color: "rgba(103,39,115,0.1)", from: 61, to: 75
            }],*/
      type: "category",
      "tickInterval": 5,/*
    labels:{
    "formatter": function() {
        return this.value.replace("25. Feb", "<b>25. Feb")
        .replace("16. Mrz", "<b>16. Mrz")}}*/
    },
    "yAxis": {
      "min": 0,
      tickInterval: 2000,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
    },
    "series": [
      { "color": "#B375AB", "visible": false },
      { "color": "#71A3B5", "visible": false },
      { "color": "#662673" },
      { "color": "#008AC3" },
    ],
    "legend": {
      "enabled": true,
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
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
          "radius": 3
        }
      }
    }, chart: {
      // width: 600
    }
  };
}());
