(function () {
  return {
    "xAxis": {
     "tickInterval": 1,
     labels: {
       rotation: -45
     }
      //"type": "category",
    },
    "yAxis": {
      /*labels: {
        formatter: function(){
          return Highcharts.numberFormat(this.value, 1);
        }
      },*/
      "labels": {
        format: "{value:,.0f}%"
      },
      /*tickInterval: 20,*/
      "min": 0,
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}%</b><br/>'
    }, 
    "series": [
      {color: "black"}, //Basel
      {color: "#67401E"}, //Bern
      {color: "#CD9C00"}, //Genf
      {color: "#007A2F"}, //Lausanne
      {color: "#8A8A8A"}, //Winterthur
      {color: "#008AC3"}, //Zürich
      {color: "#B00000"}  //Schweiz
    ],
    "legend": {
      "enabled": true,
      //"x": 30,
      //"y": 35,
      //"itemWidth": 145,
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
    }
  };
}());
