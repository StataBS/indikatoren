/* http://jsfiddle.net/zmktekak/14/ */

function justifyColumns(chart) {
    var categoriesNum = (1 + chart.xAxis[0].max - chart.xAxis[0].min),
      categoriesWidth = chart.plotSizeX / categoriesNum,
      each = Highcharts.each,
      sum, categories = chart.xAxis[0].names,
      number;
  
    for (var i = 0; i < categories.length; i++) {
      sum = 0;
      each(chart.series, function (p, k) {
        if (p.visible) {
          each(p.data, function (ob, j) {
            if (ob.options.name == categories[i]) {
              if (ob.options.y != null) {
                sum++;
              }
            }
          });
        }
      });
      number = 1;
      each(chart.series, function (p, k) {
        if (p.visible) {
          each(p.data, function (ob, j) {
            if (ob.options.name == categories[i]) {
              if (ob.options.y != null) {
                ob.graphic.element.x.baseVal.value = i * categoriesWidth + (categoriesWidth / 2) + ((number - 1) - (sum * 0.5)) * ob.pointWidth;
                number++;
              }
  
            }
          });
        }
      });
    }
  };