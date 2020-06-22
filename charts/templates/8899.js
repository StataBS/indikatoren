(function () {
  return {
    "chart": {
      type: 'line',
      inverted: false
    },
    plotOptions: {
      scatter: {
        marker: {
          symbol: 'circle'
        }
      },
      line: {
        connectNulls: true,
        marker: {
          enabled: false,
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
      "tickInterval": 1,
      "labels": {
        formatter: function () {
          return this.value.replace('-', '/'); //workaround for Chrome which automatically replaces e.g. 2000/01 by 2000-01 (interprets it as year/month)
        }
      },
      /*tickPositioner: function () {
        var interval = 1,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }*/
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
      itemWidth: 100,
      //y: -10,
      //margin: 7,
      "itemStyle": {
        "fontWeight": ["bold", "normal", "bold"]
      },
      labelFormatter: function () {
        return this.name
          .replace(' Mädchen', '')
          .replace(' Knaben', '')
          .replace('11. Stufe ', '')
          .replace('CH', 'Schweiz')
          .replace('Knaben', '<b>Knaben</b>')
          .replace('Mädchen', '<b>Mädchen</b>');
      }
    },
    "data": {
      "seriesMapping": [
        {
          x: 0, y: 1
        },
        {
          x: 0, y: 2
        },
        {
          x: 0, y: 11
        },
        {
          x: 0, y: 12
        },
        {
          x: 0, y: 13
        },
        {
          x: 0, y: 14
        }
      ]
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
      /*
                  { "color": "#E64900", legendIndex: 2, "visible": false, marker: { symbol: 'diamond' } },
                  { "color": "#E64900", legendIndex: 3, "visible": false }, // hellrot 
                  { "color": "#008AC3", legendIndex: 4, "visible": false, marker: { symbol: 'diamond' } },
                  { "color": "#008AC3", legendIndex: 5, "visible": false },// hellblau
                  { "color": "#68AB2B", legendIndex: 6, "visible": true, marker: { symbol: 'diamond' } },
                  { "color": "#68AB2B", legendIndex: 7, "visible": true }, //hellgrün 
                  { "color": "#B375AB", legendIndex: 8, "visible": true, marker: { symbol: 'diamond' } },
                  { "color": "#B375AB", legendIndex: 9, "visible": true }, //hellviolett
            */
      { "color": "#005a93", legendIndex: 10, "visible": true, marker: { symbol: 'diamond' } }, //#FFDA80
      { "color": "#bb0000", legendIndex: 11, "visible": true, marker: { radius: 3 } }, // hellgelb  //#FFDA80
      { "color": "#00baf3", legendIndex: 12, "visible": true, marker: { symbol: 'diamond' } }, //#3C3C3C
      { "color": "#ff6666", legendIndex: 13, "visible": true, marker: { radius: 3 } }  //#3C3C3C
    ],
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



