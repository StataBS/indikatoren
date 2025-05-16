(function () {
  return {
    plotOptions: {
      series: {
        "stacking": "normal",
        pointPadding: 0,
        minPointLength: 3,
        groupPadding: 0.5, // exaclty overlaps columns,
        borderWidth: 0
      }
    },
    "yAxis": {
      "min": -500,
      "tickInterval": 250,
      "labels": {
        "format": "{value:,.0f}",
      },
      plotLines: [{
        color: '#B9CFD7',
        value: 0, 
        width: 1
      }]
    },
    "xAxis": {
      //"tickInterval": 1
    },
    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"width": 50,
      //"y": 50,
      //"x": 40,
      "itemMarginBottom": 5,
      //itemWidth: 110,
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "series": [
      {
        "color": "#689199", // dunkelblau - Zuzug aus der Schweiz
        "type": "column",
        "pointWidth": "15",
      },
      /*{
        "color": "#71A3B5", //dunkelgrün - Wegzug in die Schweiz
        "type": "column",
        "pointWidth": "15",
      },
      {
        "color": "#000000",
        "type": "scatter",
        tooltip: {
          headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
          pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>'
        }
      },*/
    ],
    "chart": {
      /*    
          "marginBottom": 65,
          "type": "line",
          "alignTicks": false
      */
    }
  };
}());
