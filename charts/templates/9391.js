(function () {
  return {
   // "chart": {
   //   "type": "column"
   // },
  //  title: {
      //useHTML: true
   // },
    "plotOptions": {
      "series": {
        "borderWidth": 0,
        "stacking": "true",
        minPointLength: 2,
      },
    },
    "xAxis": {
      "type": "category",
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
      // tickAmount: 5
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
      "opposite": true
    }
    ],
    "legend": {
      //useHTML: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      labelFormatter: function () {
        return this.name.replace("-elektrisch", "-elektr.");
      },
    },
    "series": [
      {
        "index": 4,
        "color": "#2F656B",
        "legendIndex": 1,
        "type": "column"/*,
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
          shared: true
        }*/
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
        "index": 0,
        "color": "#BAA85A",
        "legendIndex": 5,
        "type": "column",
        "stacking": false,
        visible: false/*,
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
        }*/
      },
      {
        index: 6,
        "color": "#000000",
        "type": "line",
        "stacking": false,
        "legendIndex": 6,
        zIndex: 100,
        "yAxis": 1,
        "marker": {
          "enabled": false
        }/*,
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
          shared: false
        }*/
      }
    ],
    /*    tooltip: {
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>', "footerFormat": 'Total neue Inverkehrsetzungen von Elektroautos: <b>{point.total:,.0f}</b>',
          shared: true,
          useHTML: true
        }
        */
    tooltip: {
      //useHTML: true,
     // outside: true,
      formatter: function () {
        if (this.series.userOptions.stacking != false) { //nur für series mit stacking: true
          const series = this.series.chart.series;
          let tooltip = "";
          let s = 0;
          series.forEach(series => {
            if (series.userOptions.stacking != false) { //nur für series mit stacking: true
              series.setState('hover'); //"aktiviere" alle series
              series.points.forEach(point => {
                if (point.x === this.x) {
                  tooltip += `<span style="color:${point.color}">\u25CF</span> ${point.series.name}:</span> <b> ${Highcharts.numberFormat(point.y, 0, ",", " ")} </b><br>`;
                  s += point.y;
                }
              })
            }
          },
          )
          return '<span style="font-size: 10px">' + this.key +
            '</span><br>' + tooltip + '<span style="opacity: 0">\u25CF</span> Total neue Inverkehrsetzungen von Elektroautos: <b>' + Highcharts.numberFormat(s, 0, ",", " ") + '</b>';
        } else {
          if (this.series.userOptions.type == 'line') { //add % and 1 decimalplace
            return '<span style="font-size: 10px">' + this.key +
              '</span><br><span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>'
              + Highcharts.numberFormat(this.y, 1, ",", " ") + '</b>%<br/>';
          } else {
            return '<span style="font-size: 10px">' + this.key +
              '</span><br><span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>'
              + Highcharts.numberFormat(this.y, 0, ",", " ") + '</b><br/>';
          }
        }
      }
    }
  };
}());
