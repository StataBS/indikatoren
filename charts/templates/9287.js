(function(){
    return {
      "xAxis": {
        tickPositioner: function () {
          var interval = 8,
            ext = this.getExtremes(),
            i = ext.dataMax,
            pos = [i];
          while (i >= ext.dataMin) pos.unshift(i = i - interval);
          return pos;
        }
      },
  "yAxis": {
    "min": 0, 
    //tickInterval: 300,
    "labels": {
        "format": "{value:,.0f}"
    }
  },  
  "tooltip": {
    "shared": false, 
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [

    {
      "color": "rgb(250,189,36)", /* gelb */
      
    }, 
    {
      "color": "rgb(0,138,195)", /* violett */
 
        },
        {
          "color": "rgb(68,171,43)", /* grün */
 
            },
        {
          "color": "rgb(176,0,0)", /* rot */
          
        },
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  },
  chart: {
    marginRight: 20
  }
}
}());
