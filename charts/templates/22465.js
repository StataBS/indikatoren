(function(){
    return {
      xAxis: {
        type: "category",
        tickPositioner: function () {
          var maxlabels = 11,
            ext = this.getExtremes(),
            i = Math.round(ext.max),
            interval = Math.round((i - ext.min)/maxlabels),
            pos = [i];
          while (i >= ext.min) pos.unshift(i = i - interval);
          return pos;
          
        }
      },
  "yAxis": {
    tickInterval: 20000,
  "labels": {
    "format": "{value:,.0f}"
  }
  },	
  "tooltip": {
    "shared": false, 
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> TEU<br/>'
  },
  "series": [
    {"color": "#68AB2B",
    type: "column"
    }, 
    {"color": "#FABD24",
    type: "column"
    }, 
    {"color": "#3c3c3c",
  }, 
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
    "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    },
    column: {
      pointPadding: 0.2,
      groupPadding: 0.1,
    }
      },
  chart:{
      marginRight: 20,
  }
  }
  }());
  