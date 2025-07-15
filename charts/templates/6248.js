(function () {
  return {
    chart: {
      marginTop: 5
      //"width":665,
    },
    plotOptions: {
      series: {
        "stacking": "normal",
        //pointPadding: 0,
        //groupPadding: 0.5, // exaclty overlaps columns
        borderColor: 0
      }
    },
    "yAxis": {
      max: 1350,
      tickInterval: 150,
      min: -300,
      "labels": {
        "format": "{value:,.0f}",
        x: -5
      },
      plotLines: [{
        value: 0,
        color: '#B9CFD7',
        width: 2,
        zIndex: 0
      }]
    },
    "xAxis": { //label last tick
      tickPositioner: function () {
        var positions = [],
          ext = this.getExtremes(),
          xMax = Math.round(ext.max),
          xMin = Math.round(ext.min) + 1;
        var xMin_even = Math.round(ext.min);

        if (xMax % 2 == 1) {
          for (var i = xMin; i < xMax; i++) {
            if (i % 2 == 1) {
              positions.push(i);
            }
          }
          positions.push(xMax);
          return positions;
        } else if (xMax % 2 == 0) {
          for (var i = xMin_even; i < xMax; i++) {
            if (i % 2 == 0) {
              positions.push(i);
            }
          }
          positions.push(xMax);
          return positions;
        }
      },
      labels: {
        rotation: -45
      }
    },
    "legend": {
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "align": "right",
      labelFormatter: function () {
        return this.name.replace('Nettowohnungs', 'Netto-<br>wohnungs-<br>');
      }    
    },
    "series": [
      {
        "color": "#b475ab",
        "index": 0,
        "type": "column",
       // "pointWidth": "15",
        legendIndex: 0
      },
      {
        "color": "#a8c4cb",
        "index": 0,
        "type": "column",
        //"pointWidth": "15",
        legendIndex: 1
      },
      {
        "color": "#fabd24",
        "index": 0,
        "type": "column",
        //"pointWidth": "15",
        legendIndex: 2
      },
      {
        "color": "#000000",
        "index": 1,
        "type": "line",
        "marker": {
          "enabled": false
        },
        //"yAxis": 1,
        legendIndex: 3,
      },
    ]
  };
}());