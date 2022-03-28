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
  "yAxis": [
      {
        gridLineColor: '#B9CFD7', 
        gridLineWidth: 0.5,
        lineColor: '#B9CFD7', 
        "min": 0, 
        tickInterval: 300,
        tickAmount: 7,
        title: {
            style: {
                color: "#000000",
                fontSize: null
            },
            text: null
        },
        labels: {
          format: "{value:,.0f}",
            style: {
            color: "#000000"
            }
        }
      },
      {
        opposite: true,
        min: 0,
        tickInterval: 10,
        tickAmount: 7,
        gridLineColor: '#B9CFD7', 
        gridLineWidth: 0.5,
        lineColor: '#B9CFD7', 
        title: {
            style: {
                color: "#000000",
                fontSize: null
            },
            text: null
        },
        labels: {
          format: "{value:,.0f}",
            style: {
            color: "#000000"
            }
        }
      }],
  
  "tooltip": {
    "shared": false, 
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [

    {
      "color": "#B00000", 
      "legendIndex": 1,
        yAxis: 1
    }, /* blau */
    {
      "color": "#FABD24", /* schwarz */
      "legendIndex": 0,
        
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
    marginRight: 30
  }
}
}());
