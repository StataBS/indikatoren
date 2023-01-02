(function () {
  return {
    "chart": {
      "type": "column"
    },
    title: {
      useHTML: true
    },
    "plotOptions": {
      "series": {
        "borderWidth": 0,
        /*"pointWidth": 30,*/
        "stacking": "true",
        minPointLength: 2
      }
    },
    "xAxis": {
      //"type": "category",
      tickPositioner: function () {
        var interval = 2,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      },
      labels: {
        rotation: -45
      }
    },
    "yAxis": [{
      title: {
        text: null
      },
      "labels": {
        "format": "{value:,.0f}",
        "style": {
          "color": "black"
        },
      },
      "min": 0,
      tickAmount: 5,
      //tickInterval: 100
    },
    {
      title: {
        text: null
      },
      "labels": {
        "format": "{value:,.0f}%",
        "style": {
          "color": "black"
        },
      },
      "min": 0,
      tickAmount: 5,
      "opposite": true
    }
    ],
    "legend": {
      useHTML: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemWidth: 130,
      width: 300,
      itemDistance: 0,
      itemStyle: {
        textOverflow: "none"
      },
      labelFormatter: function(){
        return this.name.replace("-elektrisch", "-elektr.")
        .replace("Normal-Hybrid", "Normal")
        .replace("Plug-in-Hybrid", "Plug-in");
      },
    },
    "series": [
      {
        "index": 4,
        "color": "#2F656B",
        "legendIndex": 1,
        "type": "column",
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
          shared: true
        }
      }, // Blau
      {
        "index": 3,
        "color": "#8B2223",
        "legendIndex": 3,
        "type": "column"/*,
          "tooltip": {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
           }*/
      },
      {
        "index": 2,
        "color": "#83522E",
        "legendIndex": 2,
        "type": "column"/*,
            "tooltip": {
              "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
             }*/
      },
      {
        "index": 1,
        "color": "#9A86A6",
        "legendIndex": 4,
        "type": "column"/*,
              "tooltip": {
                "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
               }*/
      },
      {
        "index": 5,
        "color": "#BAA85A",
        "legendIndex": 5,
        "type": "column",
        visible: false,
        showInLegend: false,
        /*,
                "tooltip": {
                  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
                 }*/
      },
      {
        index: 6,
        "color": "#000000",
        "type": "line",
        "legendIndex": 6,
        "yAxis": 1,
        "marker": {
          "enabled": false
        },
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
          shared: false
        }
      }
    ],
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>', "footerFormat": 'Total neue Inverkehrsetzungen von Elektroautos: <b>{point.total:,.0f}</b>',
      shared: true,
      useHTML: true
    }
  };
}());
