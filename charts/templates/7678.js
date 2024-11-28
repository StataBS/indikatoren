(function () {
  return {
    data: {
      parsed: function (columns) {
        //Negate the numbers in the the 2nd column to create the left side of the population pyramid
        var negateNumbersInColumn = function (columnIndex) {
          columns.forEach(function (column, i, c) {
            if (i == columnIndex) {
              column.forEach(function (item, j, v) {
                if (typeof (item) == 'number') {
                  v[j] = -v[j];
                }
              });
            }
          });
        };
        negateNumbersInColumn(2);
        negateNumbersInColumn(4);
      }
    },
    "chart": {
      "type": "column"
    },
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      min: -1000000,
      tickInterval: 250000,
      "labels": {
        "format": "{value:,.0f}"
      },
      plotLines: [{
        value: 0,
        color: '#B6CFD7',
        width: 2,
        zIndex: 0,
      }]
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f} Fr.</b><br/>',
    },
    "series": [
      {
        "color": "#cd9c00",
        "stacking": "normal",
        stack: 0,
        legendIndex: 1,
      },
      {
        "color": "#7f5f1a",
        "stacking": "normal",
        stack: 0,
        legendIndex: 3,
      },
      {
        "color": "#b375ab",
        "stacking": "normal",
        stack: 1,
        legendIndex: 2,
      },
      {
        "color": "#923f8d",
        "stacking": "normal",
        stack: 1,
        legendIndex: 4,
      },
      {
        "color": "#fabd24",
        type: "line",
        lineWidth: 0,
        legendIndex: 5,
        marker: {
          radius: 4
        },
        zIndex: 2,
        states: {
          hover: {
            lineWidth: 2
          }
        }
      },
      {
        "color": "#d7bed2",
        type: "line",
        lineWidth: 0,
        legendIndex: 6,
        marker: {
          symbol: 'diamond',
          radius: 5
        },
        zIndex: 1,
        tooltip: {
          shared: true
        },
        states: {
          hover: {
            lineWidth: 2
          }
        }
      }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left"
    },
    "plotOptions": {
      series: {
        borderWidth: 0,
        marker: {
          enabled: true
        }
      }
    }
  }
}());
