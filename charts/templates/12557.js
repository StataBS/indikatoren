(function () {
  return {
    "chart": {
      "type": "column",
      width: 665,
      "inverted": false,
      //"spacingBottom": 40
    },
    "plotOptions": {
      series: {
        //pointWidth: 5, 
      },
      "column": {
        "colorByPoint": true
      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        "rotation": -90
      }
    },
    "yAxis": {
      "max": 100,
      "labels": {
        "format": "{value:,.0f}"
      }
    },

    series: [{
      name: 'Kanton'
    }],

    /*"series": [
             function() {
             var col;
          if(this.series.data[0]=="BS"){
         col="#0066FF";
          }else {
          col="#0066EE";
        }
              }, 
    {"color": "col", "visible": true}, 
    ],*/

    "colors": [
      "#A8C3CA",
      "#689199",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
    ],
    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "x": 35,
      //"y": 35,    
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size: 10px">{series.name}</span><br/>',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.name}: <b>{point.y:,.1f}</b><br/>',
      "shared": false
    },
  }
}());