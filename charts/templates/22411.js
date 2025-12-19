(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        //itemWidth: 10,
      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        rotation: 0,
        useHTML: true,
            style: {
                whiteSpace: 'normal', 
                //width: '80px',
                textOverflow: 'none',
                textAlign: 'left'
            }

      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      { "color": "#490200" },
      { "color": "#9b0200" },
      { "color": "#f20003" },
      { "color": "#fe4400" },
      { "color": "#ff7f00" },
      { "color": "#ffca01" },
      { "color": "#fffd03" },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      useHTML: true
    },
    tooltip: {
      useHTML: true      
    },
    "chart": {
      "type": "column",
      "inverted": false,
      //marginRight: 30,
      //"spacingTop": 100
    }
  }
}()); 