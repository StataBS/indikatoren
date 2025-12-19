(function () {
  return {
    xAxis:{
      type: "category"
    },
    "yAxis": [{
//      tickAmount: 6,   
  //    max: 75000,   
    //  alignTicks: true,
      title: {
        text: null,
        "color": "#000000",
        "fontSize": null
      },
      "labels": {
        "format": "{value:,.0f} ha",
        style: {
          color: "black",
        },
      },

    },
    {
 //     tickAmount: 6,
   //   tickInterval: 10,
    min:0,
      alignTicks: true,
      "title": {
        "style": {
          "color": "#000000",
          "fontSize": null
        },
        "text": null
      },
      "labels": {
        "format": "{value:,.0f} m<sup>2</sup>",
        useHTML: true,
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
        "color": "#008AC3",
        zIndex: 0,
        "type": "column",
        legendIndex: 2,
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} ha</b><br/>',
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
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f} m<sup>2</sup></b><br/>',
        },

      },

    ],
    "tooltip": {
      useHTML:true,
      outside: true
      //"shared": true
    },
    "chart": {
      "alignTicks": false
    }
  };
}());