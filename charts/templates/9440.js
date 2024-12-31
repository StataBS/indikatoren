(function () {
    return {
      "chart": {
        "type": "column"
      },
      "plotOptions": {
        "series": {
          "stacking": "normal"
        }
      },
      "yAxis": {
        tickAmount: 5,
        max: 120000,
        "labels": {
          "format": "{value:,.0f}"
        }
      },
      "xAxis": {
        tickInterval: 2,
        "type": "category",
        tickPositioner: function () {
          var interval = 2,
            ext = this.getExtremes(),
            i = ext.dataMax,
            pos = [i];
          while (i >= ext.dataMin) pos.unshift(i = i - interval);
          return pos;
        },
        labels:{
          rotation: -45
        }
      },
      "legend": {
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "left",
        itemDistance: 0,
        itemWidth: 92,
        width: 300,
        itemStyle:{
          textOverflow: "none"
        }
      },
      "series": [
        {
          "color": "#DC440E",
          "index": 5
        },
        {
          "color": "#923F8D",
          "index": 4
        },
        {
          "color": "#68AB2B",
          "index": 3
        },
        {
          "color": "#689199",
          "index": 2
        },
        {
          "color": "#CD9C00",
          "index": 1
        },
        {
          "color": "#B00000",
          "index": 0
        }
      ],
      tooltip: {
        shared: true,
        useHTML: true,
        followPointer: true,
        formatter: function () {
          var s = '<span style="font-size: 10px">' + this.points[0].key + '</span><table>', sum = 0;
          $.each(this.points, function (i, point) {
            s += '<tr><td><span style="color:' + point.color + '">\u25CF</span> ' + point.series.name + ':</td>'
              + '<td style="text-align:right">&nbsp;<b>' + Highcharts.numberFormat(point.y, 0) + '</b></td>'
              + '<td style="text-align:right">&nbsp;(' + Highcharts.numberFormat(point.percentage, 1) + '%)</td></tr>';
            sum += point.y;
          });
          s += '<tr><td>Total:</td><td style="text-align:right">&nbsp;<b>' + Highcharts.numberFormat(sum, 0) + '</b></td>'
            + '<td style="text-align:right">&nbsp;(100,0%)</td></tr></table>'
          return s;
        },
      }
    };
  }());