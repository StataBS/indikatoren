(function () {
  return {

    "yAxis": {
      //max: 100000,
      tickAmount: 7,
      showLastLabel: true,
      endOnTick: true,

      labels: {
        format: "{value:,.0f}",
      },
      opposite: false,
    },
    "xAxis": {
      endOnTick: true,
      startOnTick: true,
      showFirstLabel: true,
      showLastLabel: true,
      ordinal: false,
      labels: {
        //  rotation: -45
      }


    },
    "tooltip": {
      enabled: true,
      shared: true,
      split: false,
      borderColor: '#000000',
      xDateFormat: '%Y-%m',
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    
    "series": [
      {
        "color": "#B00000",
        showInNavigator: true,
        "marker": {
          "symbol": "circle",
          "enabled": false
        }
      }, 
      {
        "color": "#008AC3",
        showInNavigator: true,
        "marker": {
          "symbol": "circle",
          "enabled": false
        }
      }, 
      {
        "color": "#FABD24",
        showInNavigator: true,
        "marker": {
          "symbol": "circle",
          "enabled": false
        }
      },

    ],
    "legend": {
      "enabled": true,
      //"x": 50,
      //"y": 25,
      //"itemWidth": 150,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },

    /*data: {
      //convert year in first column to UTC date to be used by Highstock
      parsed: function(columns){
          columns[0].forEach(function(v, i, a){
              columns[0][i] = Date.UTC(columns[0][i]);
          });
      }
    }, */
    
    rangeSelector: {
      //enabled:  false,
      buttonTheme: {
        width: null
      },
      /*buttons:
        [
          {
            count: 14,
            type: 'year',
            text: 'ohne 2020'
        },
          {

            type: 'all',
            text: 'Alle Jahre'
          }

  

    ],*/
    buttonSpacing: 40,
    enabled: false,
    inputEnabled: false,
    selected: 1,
    inputDateFormat: '%Y',
    inputEditDateFormat: '%Y'
    
  }, 
  }
}());

