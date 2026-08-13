(function(){
    return {
  "yAxis": [{
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": undefined,
    "title": ""
  },
  {
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
    "max": undefined,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  xAxis: {
  type: "category", /* ausprobieren, ob "category" oder nicht - hat Auswirkung auf den Abstand der letzten Jahreszahl zu rechten Rand */
  tickPositioner: function () {
    var maxlabels = 10,
      ext = this.getExtremes(),
      i = Math.round(ext.max),
      interval = Math.round((i - ext.min)/maxlabels),
      pos = [i];
    while (i >= ext.min) pos.unshift(i = i - interval);
    return pos;
  }
},
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  "itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#71a3b5",
      "index": 0,
      "type": "column",
      //"pointWidth": "20"
    },
    {
      "color": "#7d60a0",
      "index": 1,
      "type": "line",
      "yAxis": 1,
       "marker": {
        "enabled": false
      },
      "tooltip": {
       "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
      }
    }
  ],  
  "tooltip": {
    "shared": true,
  },
  "chart": {
    "type": "line",
    "alignTicks": false
  }
}
}());
