(function(){
    return {
  "yAxis": [{
    gridLineColor: '#B9CFD7', 
    gridLineWidth: 0.5,
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "title": ""
  },
  {
    gridLineColor: '#B9CFD7', 
    //gridLineWidth: 0.5,
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.f}%",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": 25,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  "xAxis": {
    "tickInterval": 1,
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
		//"y": 35,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      color: "#73b97c",
      index: 0,
      type: "column",
      pointWidth: 8,
      tooltip: {
        valueDecimals: 0,
      }

    },
    {
      "color": "#cd9c00",
      "index": 1,
      type: 'scatter',
      marker: {
          symbol: 'dot', 
          radius: 5,
      },
      "yAxis": 1, 
      connectNulls: true,
      tooltip: {
        valueDecimals: 1,
        headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
        pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}%</b><br/>',
      }
    }
  ],  
  "tooltip": {
    "shared": false, 
     valueDecimals: 1,
  },
  "chart": {
    "type": "line",
    "alignTicks": false
  },
  plotOptions: {
    series: {
      borderWidth: 1  
    }
  }  
	};
}());
 