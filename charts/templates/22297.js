(function(){
  return {
plotOptions: {
  "series": {
        "stacking": "normal"
      }
  },
"yAxis": {
  "min": 0,
  tickInterval: 250,
  "labels": {
    "format": "{value:,.0f}",
  },
  plotLines: [{
    color: '#B9CFD7',
    value: 0,
    width: 2
}]
},
"xAxis": {
 "tickInterval": 1,
},
"legend": {
  "enabled": true,
  "layout": "horizontal",
  "verticalAlign": "top",
  "align": "left",
//"y": 40,
//"x": 40,
"itemMarginBottom": 5,
  "itemStyle": {
  "fontWeight": "normal"
  }
},
"series": [
  {
    "color": "#b475ab",
    "index": 0,
    "type": "column",
    "pointWidth": "15",
    legendIndex: 0,
    stack: 'group1'
  },
  {
    "color": "#E7CEE2",
    "index": 0,
    "type": "column",
    "pointWidth": "15",
    legendIndex: 0,
    stack: 'group1',
    visible:true
  },
  {
    "color": "#67401E",
    "index": 1,
    "type": "line",
    "marker": {
      "enabled": false
    }, 

    //"yAxis": 1,
    legendIndex: 5,
    tooltip: {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  }
  },
],  
"tooltip": {
  "shared": true
},
};
}());