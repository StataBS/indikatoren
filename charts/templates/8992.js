(function () {
  return {

    "yAxis": {
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
      shared: true, 
      split: false,
      xDateFormat: '%Y-%m',
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    
    "series": [
      {
        "color": "#68AB2B",
        "marker": {
          "enabled": false
        }
      }, 
      {
        "color": "#008AC3",
        "marker": {
          "enabled": false
        }
      }, /* violett */
      {
        "color": "#FABD24",
        "marker": {
          "enabled": false
        }
      }, /* rot */

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

