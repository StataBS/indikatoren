(function () {
  return {
    chart: {
      marginRight: 10
    },
    "xAxis": {
      "tickInterval": 1
    },
    "yAxis": {
      "min": 70,
      max: 170,
      tickInterval: 5,
      "labels": {
        "format": "{value:,.0f}"
      },
      plotLines: [{
        color: '#B9CFD7',
        value: 100,
        width: 2
      }]
    },
    "series": [
      {
        "color": "#b00000 ",
      }, /* rot */
      {
        "color": "#672773",
      }, /* violett */
      {
        "color": "#007a2f",
      },/* grün  */
      {
        "color": "#7F5F1A",
      },/* braun  */
      {
        "color": "#E6E600",
      },/* gelb  */
      /*{
        "color": "#008AC3",
      },*//* blau  */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      itemDistance: 10,
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
      }
    }
  }
}());
