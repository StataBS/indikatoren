(function(){
  return {
    plotOptions: {
      scatter: {
        marker: {
          symbol: 'circle'
        }
      },
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%",
      }
    },
    "xAxis": {
      "type": "category",
     //"tickInterval": 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"width": 50,
      "y": 50,
      //"x": 40,
      "itemMarginBottom": 5,
      itemWidth: 200,
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "series": [
      {"color": "#E64900", legendIndex: 0, "visible": false, marker: {symbol: 'diamond'}},
      {"color": "#E64900", legendIndex: 1, "visible": false }, // hellrot 
      {"color": "#008AC3", legendIndex: 2, "visible": false, marker: {symbol: 'diamond'}},
      {"color": "#008AC3", legendIndex: 4, "visible": false },// hellblau
      {"color": "#68AB2B", legendIndex: 4, "visible": true, marker: {symbol: 'diamond'}},
      {"color": "#68AB2B", legendIndex: 5, "visible": true }, //hellgrün 
      {"color": "#B375AB", legendIndex: 6, "visible": true, marker: {symbol: 'diamond'}},
      {"color": "#B375AB", legendIndex: 7, "visible": true }, //hellviolett
      {"color": "#FFDA80", legendIndex: 8, "visible": true, marker: {symbol: 'diamond'}},
      {"color": "#FFDA80", legendIndex: 9, "visible": true }, // hellgelb 
      {"color": "#3C3C3C", legendIndex: 10,"visible": true, marker: {symbol: 'diamond'}}, 
      {"color": "#3C3C3C", legendIndex: 11,"visible": true } // grau
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



