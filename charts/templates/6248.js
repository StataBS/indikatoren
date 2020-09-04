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
      max: 1050,
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
    "xAxis": {
      "tickInterval": 1,
      labels:{
        rotation: -45,
        step: 2
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