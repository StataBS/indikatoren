(function () {
    return {
      xAxis: {
        labels: {
          rotation: 0,
        } ,
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
      "yAxis": [{
        tickAmount: 6,   
        max: 75000,   
        alignTicks: true,
        title: {
          text: null,
          "color": "#000000",
          "fontSize": null
        },
        "labels": {
          "format": "{value:,.0f}",
          style: {
            color: "black",
          },
        },
  
      },
      {
        tickAmount: 6,
        tickInterval: 10,
      
        alignTicks: true,
        "title": {
          "style": {
            "color": "#000000",
            "fontSize": null
          },
          "text": null
        },
        "labels": {
          "format": "{value:,.0f}%",
          style: {
            color: "black",
          },
        },
        "opposite": true
      }
      ],
      "legend": {
        "enabled": true,
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "left",
        "itemMarginBottom": 5,
        "itemStyle": {
          "fontWeight": "normal",
          textOverflow: 'nowrap',
          whiteSpace: "nowrap"
        }
      },
      "series": [
        {
          "color": "#A0BEC8", 
          zIndex: 0,
          "type": "column",
          legendIndex: 1,
          "tooltip": {
            "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
          },
        },
        {
          "color": "#008AC3",
          zIndex: 0,
          "type": "column",
          legendIndex: 2,
          "tooltip": {
            "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
          },
        },
        {
          "color": "#FF8028",
          zIndex: 1,
          "type": "line",
          "marker": {
            "enabled": false
          },
          "yAxis": 1,
          legendIndex: 3,
          "tooltip": {
            "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
          },
  
        },

      ],
      "tooltip": {
        //"shared": true
      },
      "chart": {
        "alignTicks": false
      }
    };
  }());