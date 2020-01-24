(function(){
    return {
  "yAxis": [{
    gridLineColor: '#B9CFD7', 
    gridLineWidth: 0.5,
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
    },
    "min": 0
  },
  {
    gridLineColor: '#B9CFD7', 
    gridLineWidth: 0.5,
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.0f}%",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    tickInterval: 10,
    "opposite": true
  }
  ],
  "xAxis": {
    lineColor: '#B9CFD7', 
    lineWidth: 0.5,
    "tickInterval": 1,
    labels:{
      rotation: -46

    }
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
		//"y": 25,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#73b97c",
      "index": 0,
      "type": "column",
      "pointWidth": "10"
    },
    {
      "color": "#923F8D",
      "index": 1,
      "type": "scatter",
      "yAxis": 1, 
      //shadow: true,
      connectNulls: true,
      tooltip: {
        valueDecimals: 1,
        headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
      }
    }
  ],  
  //"tooltip": {
    //"shared": false
  //},
  "chart": {
    "type": "line"
  },
  plotOptions: 
  { 
    series: 
    {
      borderWidth: 0  
    }
  }
	}
}());
