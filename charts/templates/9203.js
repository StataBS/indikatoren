(function () {
  return {
    "yAxis": [{
      //min: 0,
      max: 15000000,
      tickAmount: 6,
      //tickInterval: 2500000,
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
      min: 0,
      max: 100,
      //tickInterval: 5,
      tickAmount: 6,
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
    "xAxis": {
      "tickInterval": 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemWidth: 140,
      "itemMarginBottom": 5,
      "itemStyle": {
        "fontWeight": "normal",
        textOverflow: 'nowrap',
        whiteSpace: "nowrap"
      }
    },
    "series": [
      {
        "color": "#FFBB58", // Bevölkerung
        //"index": 0,
        zIndex: 0,
        "type": "column",
        pointWidth: 10,
        //pointPadding: 0,
        borderWidth: 0,
        legendIndex: 1,
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        },
      },
      {
        "color": "#B00000", // Anteil Frauen
        //"index": 1,
        zIndex: 1,
        "type": "scatter",
        "yAxis": 1,
        "marker": {
          "enabled": true
        },
        legendIndex: 2,
        "tooltip": {
          headerFormat: '<span style="font-size: 10px"> {point.key}</b><br/>',
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
        },
      }
    ],
    "tooltip": {
      "shared": true
    },
    "chart": {
      "alignTicks": false,
      width: 665
    }
  };
}());