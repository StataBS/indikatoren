(function () {
    return {
      "yAxis": [{
        offset: -10,
        "labels": {
          "format": "{value:,.0f}",
          "formatter": function () {
            return Highcharts.numberFormat((this.value * 100), 0) + '%';
          },
          "style": {
            "color": "#000000"
          }
        },
        "min": 0,
        "max": undefined,
        tickAmount: 7,
        tickInterval: 0.02,
        "title": "",
      },
      {
        offset: -10,
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
        "min": 0,
        "max": undefined,
        tickAmount: 7,
        tickInterval: 100,
        "gridLineWidth": 0,
        "opposite": true
      }
      ],
      "xAxis": {
        "tickInterval": 12,
        "type": "category",
        labels: {
          rotation: 0,
          x: 12,
          "formatter": function () {
            return this.value.split("-").slice(0, -1);
          },
        }
      },
      "series": [
        {
          "color": "#B00000", "index": 0, //"yAxis": 0,
          "tooltip": {
            "pointFormatter": function () {
              return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y * 100), 1) + '% </b><br/><b>'
            }
          },
        },
        {
          "color": "#FF8028", "index": 1, "yAxis": 1,
          "tooltip": {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
          },
        }
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
    }
  }());
  
  