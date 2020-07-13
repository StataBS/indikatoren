/*
global Highcharts
*/

(function () {
  return {
    //seriesMapping necessary for charts with error bars. 
    "data": {
      "seriesMapping": [
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        }
      ]
    },
    plotOptions: {
      series: {
       pointPadding: 0,
        //groupPadding: 0.1,
       borderWidth: 1
      }
    },
    tooltip: {
      shared: true
    },

    "series": [
      {
        "index": 0,
        crisp: false,
        color: "#246370",
        borderColor: null,
      },
      {
        "index": 1,
        crisp: false,
        "type": "errorbar",
        lineWidth: 0.5,
      },
      {
        "index": 2,
        crisp: false,
        color: "#0F7399",
        borderColor: null,

      },
      {
        "index": 3,
        crisp: false,
        "type": "errorbar",
        lineWidth: 0.5,
      },
      {
        "index": 4,
        crisp: false,
        color: "#689199",
        borderColor: null,
      },
      {
        "index": 5,
        crisp: false,
        "type": "errorbar",
        lineWidth: 0.5,
      },
      {
        "index": 6,
        crisp: false,
        color: "#A8C3CA",
        borderColor: null,
      },
      {
        "index": 7,
        crisp: false,
        "type": "errorbar",
        lineWidth: 0.5,
      },
      {
        "index": 8,
        crisp: false,
        color: "#D3E2E4",
        borderColor: null,
      },
      {
        "index": 9,
        crisp: false,
        "type": "errorbar",
        lineWidth: 0.5,
      },

    ],
    "xAxis": {
      "type": "category",
      labels: {
        rotation: 0,
      }
    },
    "yAxis": {
      tickAmount: 7,
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0);
        },
      }
    },
    "legend": {
      "enabled": true,
      itemDistance: 5,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "chart": {
      "marginBottom": 35,
      "type": "column",
      "inverted": false
    },
    subtitle: {
      useHTML: true
    },
    exporting: {
      allowHTML: true,
    },
  };
}());