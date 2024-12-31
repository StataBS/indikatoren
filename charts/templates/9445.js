(function () {
    return {
      plotOptions: {
        series: {
            pointPadding: 0.2,
        }
    },
      chart: {
        inverted: true
      },
      "xAxis": {
        "type": "category",
      },
      yAxis: {
        tickInterval: 25,
        labels: {
          y: 8
        }
      },
      legend: {
        layout: "horizontal",
        align: "left",
        verticalAlign: "top",
        reversed: true,
        itemDistance: 15,
        itemWidth: 110,
        "itemStyle": {
          // textOverflow: "none",
           whiteSpace: "nowrap",
         }
  
        /*      labelFormatter: function () {
                return this.name.replace(' ', '<br>').replace('/', '/<br>');
              },*/
      },
      series: [
        { "color": "#007a2f", index: 6 }, // dunkelgrün
        { "color": "#68ab2b", index: 5 }, // grün
        { "color": "#ffbb58", index: 4 }, // orange
        { "color": "#dc440e", index: 3 }, // rot
        { "color": "#C8C8C8", index: 2 }, // grau
        { "color": "#6F6F6F", index: 1 }, // grau
      ]
    };
  }());