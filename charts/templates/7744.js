(function(){
    return {
      "yAxis": {
        showLastLabel: true,
        endOnTick: true,
      //tickAmount: 5,
      tickInterval: 1000,
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
       // tickInterval: 365 * 24 * 3600 * 1000 * 3,
        //minTickInterval: 365 * 24 * 3600 * 1000 * 3,
        ordinal: false,
        labels: {
        //rotation: -45
        }
    },
  "tooltip": {
    shared: false, 
    split: false,
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
  	   {"color": "#007A2F",
      "marker": {
        "enabled": false
      }    
    }, /* black */
    {"color": "#923F8D",
      "marker": {
        "enabled": false
      }    
    }, /* violett */
	{"color": "#DC440E",
      "marker": {
        "enabled": false
      }    
    }, /* rot */
    {"color": "#FFDA80",
      "marker": {
        "enabled": false
      }    
    },/* gelb  */
  ],
  "legend": {
    "enabled": true,
    //"x": 50,
    //"y": 25,
    "itemWidth": 150,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  chart: {
    type: 'column'
},
data: {
  //convert year in first column to UTC date to be used by Highstock
  parsed: function(columns){
      columns[0].forEach(function(v, i, a){
          columns[0][i] = Date.UTC(columns[0][i]);
      });
  }
}, 
rangeSelector: {
    //enabled:  false,
  buttonTheme: {
    width: null
  },         
buttons: 
[
    {
            count: 24,
            type: 'year',
            text: 'nur Szenarien'
        }, 
    {
            count: 30,
            type: 'year',
            text: '30 Jahre'
        }, 
    
        {
            type: 'all',
            text: 'Alle Jahre'
        }
      ],
  buttonSpacing: 40,                
  inputEnabled: false,
  selected: 1, 
  inputDateFormat: '%Y',
inputEditDateFormat: '%Y'
}, 
  plotOptions: {
    column: {
        groupPadding: 0,
        pointPadding: 0,   
    }
}
  
}
}());
 