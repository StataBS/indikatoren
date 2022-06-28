(function () {
  return {
    "yAxis": {
      //tickAmount: 6,
      tickInterval: 1000,
      min: -2000,
      max: 3000,
      labels: {
        format: "{value:,.0f}",
      },
      opposite: false,
    },
    "xAxis": {
      tickInterval: 10,
      ordinal: false,
      labels: {
        //  rotation: -45
      }


    },
    "tooltip": {
      shared: false,
      split: false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    "series": [
      {
        "color": "#007A2F",
        //zIndex: 3,
        "marker": {
          "enabled": false
        }
      }, /* black */
      {
        "color": "#923F8D",
        //zIndex: 2,
        "marker": {
          "enabled": false
        }
      }, /* violett */
      {
        "color": "#DC440E",
        //zIndex: 1,
        "marker": {
          "enabled": false
        }
      }, /* rot */
      {
        "color": "#FFDA80",
        //zIndex: 0,
        "marker": {
          "enabled": false
        }
      },/* gelb  */
    ],
    "legend": {
      "enabled": true,
      //"x": 50,
      //"y": 25,
      width: 300,
      "itemWidth": 140,
      "layout": "horizontal",
      "verticalAlign": "top",
      //"itemMarginBottom": 0,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    chart: {
      type: 'column'
    },

    plotOptions: {
      column: {
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        groupPadding: 0,
        pointPadding: 0,
        pointWidth: 2,
      }
    }

  }
}());
