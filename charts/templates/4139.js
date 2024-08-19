(function(){
    return {
  "plotOptions": {
    "series": {
      "stacking": null,
      "groupPadding": 0.1
    }
  },
  "yAxis": [
   {
    gridLineColor: '#B9CFD7', 
    gridLineWidth: 0.5,
    min: 0,
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    }
  },
  {
    gridLineColor: '#B9CFD7', 
    //gridLineWidth: 0.5,
    min: 0,
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.1f}%",
      "style": {
        "color": "#000000"
      }
    },
    "gridLineWidth": 0,
    "opposite": true
  },
  ],
  "xAxis": {
    lineColor: '#B9CFD7', 
    lineWidth: 0.5,    
    "tickInterval": 1
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    shared: false
  },
  "legend": {
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 7,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#d7e8d2",
      "visible": false
    },
    {
      "color": "#73B97C",
      "visible": false
    },
    {
      "color": "#68ab2b",
      "visible": false
    },
    {
      "color": "#0a3b19"
    },
    {
      "color": "#FABD24",
      "marker": {
        "enabled": false
      },
      "yAxis": 1,
      "type": "line",
      "visible": false, 
      tooltip: {
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
      }
    },
     {
      "color": "#ff8028",
      "marker": {
        "enabled": false
      },
      "yAxis": 1,
      "type": "line",
      "visible": false,
      tooltip: {
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
      }
    },
    {
      "color": "#923f8d",
      "marker": {
        "enabled": false
      },
      "yAxis": 1,
      "type": "line",
      "visible": false, 
      tooltip: {
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
      }
    }
    ,
    {
      "color": "#b00000",
      "marker": {
        "enabled": false
      },
      "yAxis": 1,
      "type": "line", 
      tooltip: {
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
      }
    }
  ],
  "chart": {
    "type": "column"
  }
	}
}());
