(function () {
    return {
      "chart": {
        "type": "column",
        "inverted": true,
        marginRight: 30,
        //"spacingBottom": 30
      },
      plotOptions: {
        series: {
          pointPadding: 0,
          borderWidth: 0,
        }
      },
      "xAxis": {
        "type": "category",
        reversed: false
      },
      "yAxis": {
        "labels": {
            "format": "{value:,.0f}",
          },
       // "tickInterval": 20,
      "min": -1000,
      "max": 10000,
        plotLines: [{
          color: '#B9CFD7',
          value: 0
   
          //width: 2 
        }]
      },
      "series": [
        {
          "color": "#689199"
        },
      
      ],
      "legend": {
        "enabled": false,
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "left",
        //itemWidth: 200,
      },
      tooltip: {
        "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>',
      },
    }
  }());