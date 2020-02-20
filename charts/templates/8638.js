(function () {
  return {
    "data": {
      "seriesMapping": [
        {
          x: 0, y: 2
        },
        {
          x: 0, y: 3
        },
        {
          x: 0, y: 5
        },
        {
          x: 0, y: 6
        }
      ]
    },
    "chart": {
      "alignTicks": false
    },
    "yAxis": [{
      tickInterval: 100,
      gridLineColor: '#B9CFD7',
      gridLineWidth: 0.5,
      "labels": {
        "format": "{value:,.0f}",
        "style": {
          "color": "#000000"
        }
      },
      "min": 0,
      "title": {
        enabled: false
      }
    },
    {
      tickInterval: 5,
      gridLineColor: '#B9CFD7',
      //gridLineWidth: 0.5,
      "title": {
        enabled: false
      },
      "labels": {
        "format": "{value:,.f}%",
        "style": {
          "color": "#000000"
        }
      },
      "min": 0,
      "max": 30,
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
      "itemMarginBottom": 5,
      labelFormatter: function () {
        return this.name.replace('Genossenschaftswohnungen ', '');
      }    
    },
    "series": [
      {
        //"color": "#D7E8D2",
        "color": "#cd9c00",
        "index": 0,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>' }
      },
      {
        //"color": "#E7CEE2",
        "color": "#b375ab",
        "index": 1,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>' }
      },
      {
        "color": "#7f5f1a", //rgb(0,122,47)
        "index": 2,
        "yAxis": 1,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        },
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        "color": "#923f8d", //rgb(146,63,141)
        "index": 3,
        "yAxis": 1,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        },
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      }
    ],
  };
}());
