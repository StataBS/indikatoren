(function () {
  return {
    "xAxis": {
      "tickInterval": 1,
      type: "category",
      labels: {
        //rotation: 0
      },
    },
    "yAxis": {
      min: 70,
      //max: 150,
      tickInterval: 10,
      plotLines: [{
        color: '#B9CFD7',
        value: 100,
        width: 1.5
    }]
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemWidth: 150,
      width: 300,
      "itemStyle": {
        textOverflow: "none",
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    "series": [
      { "color": "#ff8028" },
      { "color": "#dc440e" },
      { "color": "#b00000" },
      { "color": "#661200" },
      { "color": "#672773" },
      /*{"color": "#008AC3",},*//* blau  */
    ],
  };
}());
