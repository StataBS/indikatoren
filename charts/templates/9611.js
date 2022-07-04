(function(){
    return {
      xAxis: {
        labels:{
          rotation: 0,
        },
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
      tickAmount: 6,
  "labels": {
    "format": "{value:,.0f}"
  }
  },	
  "tooltip": {
    "shared": false, 
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
  },
  "series": [
    {"color": "#b00000"
    }, 
    {"color": "#6F6F6F",
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
    }
  },
  chart:{
      marginRight: 20,
  }
  }
  }());
  