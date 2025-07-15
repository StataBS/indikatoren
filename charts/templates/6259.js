(function () {
  return {
    "chart": {
      "alignTicks": false,
      "width": 665
    },
    plotOptions: {
      area: {
        stacking: 'normal',
        //lineColor: '#666666',
        lineWidth: 1,
      }
    },
    "yAxis": [{
      title: {
        text: null,
        color: "#000000",
        fontSize: '10px'
      },
      labels: {
        format: "{value:,.0f}",
        style: {
          color: "black",
          fontSize: '10px'
        },
      },
      min: 0,
      max: 120000,
      tickInterval: 15000,
    },
    {
      "title": {
        "style": {
          "color": "#000000",
          "fontSize": null
        },
        "text": null
      },
      title: {
        text: null
      },
      "labels": {
        "format": "{value:,.0f}",
        style: {
          color: "black",
          fontSize: '10px'
        },
      },
      min: 0,
      max: 240000,
      tickInterval: 30000,
      "opposite": true
    }
    ],
    "xAxis": { //label last tick
      tickPositioner: function () {
				var maxlabels = 16,
					ext = this.getExtremes(),
					i = Math.round(ext.max-1),
					interval = Math.round((i - ext.min) / maxlabels),
					pos = [i];
				while (i >= ext.min) pos.unshift(i = i - interval);
				return pos;
      },
      labels: {
        rotation: -45
      }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
      //"itemWidth": 500, 
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "series": [
      {
        "color": "#FFBB58", // Area
        "index": 1,
        "type": "area",
        "marker": {
          "enabled": false,
          //radius: 3,
          "symbol": "circle",
        },
      },
      {
        "color": "#A8C3CA", // Area
        "index": 0,
        "type": "area",
        "marker": {
          "enabled": false,
          //radius: 3,
          "symbol": "circle",
        },
      },
      {
        "color": "#246370", // Line
        "index": 1,
        "type": "line",
        "yAxis": 1,
        "legendIndex": 3,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        },
      }
    ],
    "tooltip": {
      //"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.0f}</b><br/>',
      "shared": true
    },
  }
}());