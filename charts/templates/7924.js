(function () {
  return {
    chart: {
      spacing: [5,2,2,2]
    },
    plotOptions: {
      series: {
        "stacking": "normal",
        "pointWidth": "10",
          //pointPadding: 0,
        //groupPadding: 0.5, // exaclty overlaps columns
      }
    },
    "yAxis": {
      "tickInterval": 100,
      "min": -100,
      "max": 600,
      "labels": {
        "format": "{value:,.0f}",
      },
      plotLines: [{
        value: 0,
        color: '#B6CFD7',
        width: 1,
        zIndex: 0,
      }]
    },
    "xAxis": {
      "tickInterval": 2,
    },
    "legend": {
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "align": "right",
      //"y": 40,
      //"x": 40,
      "itemMarginBottom": 5,
      labelFormatter: function () {
        var l = this.name.replace('Nettowohnungs', 'Netto-<br>wohnungs-<br>');
        return l;
      }
    },
    "series": [
      {
        "color": "#689199",
        "index": 0,
        "type": "column",
        //"pointWidth": "15",
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
        lineWidth: 1,
        legendIndex: 3,
      },
    ],
    "tooltip": {
      "shared": true
    },
  };
}());