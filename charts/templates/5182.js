(function () {
  return {
    plotOptions: {
      scatter: {
        marker: {
          symbol: 'circle'
        }
      },
    },
    "yAxis": {
      max: 50,
      "tickInterval": 10,
      "labels": {
        "format": "{value:,.0f}%",
      }
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"width": 50,
      //"y": 50,
      //"x": 40,
      "itemMarginBottom": 2,
      itemWidth: 200,
      y: -10,
      margin:3,
      "itemStyle": {
        "fontWeight": ["bold", "normal", "bold"]
      },
      labelFormatter: function () {
        return this.name.replace(' Mädchen', '').replace(' Knaben','').replace('Knaben','<b>Knaben</b>').replace('Mädchen','<b>Mädchen</b>');
      }    
    },
    "series": [
      {
        "color": "rgba(255, 255, 255, 0)", legendIndex: 0, "visible": true, marker: { symbol: 'diamond' },
        events:
        {
          legendItemClick: function (e) {
            e.preventDefault()
          }
        }
      },
      {
        "color": "rgba(255, 255, 255, 0)", legendIndex: 1, "visible": true,
        events:
        {
          legendItemClick: function (e) {
            e.preventDefault()
          }
        }
      },
      { "color": "#E64900", legendIndex: 2, "visible": false, marker: { symbol: 'diamond' } },
      { "color": "#E64900", legendIndex: 3, "visible": false }, // hellrot 
      { "color": "#008AC3", legendIndex: 4, "visible": false, marker: { symbol: 'diamond' } },
      { "color": "#008AC3", legendIndex: 5, "visible": false },// hellblau
      { "color": "#68AB2B", legendIndex: 6, "visible": true, marker: { symbol: 'diamond' } },
      { "color": "#68AB2B", legendIndex: 7, "visible": true }, //hellgrün 
      { "color": "#B375AB", legendIndex: 8, "visible": true, marker: { symbol: 'diamond' } },
      { "color": "#B375AB", legendIndex: 9, "visible": true }, //hellviolett
      { "color": "#FFDA80", legendIndex: 10, "visible": true, marker: { symbol: 'diamond' } },
      { "color": "#FFDA80", legendIndex: 11, "visible": true }, // hellgelb 
      { "color": "#3C3C3C", legendIndex: 12, "visible": true, marker: { symbol: 'diamond' } },
      { "color": "#3C3C3C", legendIndex: 13, "visible": true } // grau
    ],
    "chart": {
      type: 'scatter',
      inverted: false
    },
    tooltip: {
      headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
      pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}%</b><br/>'
    }
    /*    
        "marginBottom": 65,
        "type": "line",
        "alignTicks": false
    */
  };
}());



