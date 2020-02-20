(function () {
  return {
    subtitle: {
      useHTML: true
    },
    "chart": {
      "type": "column"
    },
    "xAxis": {
      type: "category"
      //"tickInterval": 1
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      useHTML: true,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f} m<sup>2</sup></b><br/>'
    },
    "series": [
      {  //Wohnen Klybeck
        "color": "#cd9c00",
        index: 1,
        legendIndex: 1
      },
      { // Wohnen Kleinhüningen
        "color": "#b375ab",
        index: 3,
        legendIndex: 3
      },
       { // Wohnen Basel
        "color": "#8A8A8A",
        "visible": false,
        index: 5,
        legendIndex: 5
      },
      { // Arbeiten Klybeck
        "color": "#7f5f1a",
        index: 2,
        legendIndex: 2
      },
      {  //Arbeiten Kleinhüningen
        "color": "#923f8d",
        index: 4,
        legendIndex: 4
      },
     {  //Arbeiten Basel
        "color": "#474747",
        "visible": false,
        index: 6,
        legendIndex: 6
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left"
    },
    "plotOptions": {
      "series": {
        pointPadding: 0,
        groupPadding: 0.15,
        borderWidth: 0
      }
    },
  }
}());