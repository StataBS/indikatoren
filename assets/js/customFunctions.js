/**
 * Experimental Highcharts plugin to implement chart.alignThreshold option. This primary axis
 * will be computed first, then all following axes will be aligned to the threshold.
 * 
 * call:    chart: { alignThresholds: true }
 * example: 9022, 9023
 * 
 * Author: Torstein Hønsi
 * Last revision: 2016-11-02
 * http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/studies/alignthresholds/
 */

try { (function (H) {
  var Axis = H.Axis,
    inArray = H.inArray || function (elem, arr) { return arr.indexOf(elem); },
    wrap = H.wrap;

  wrap(Axis.prototype, 'adjustTickAmount', function (proceed) {
    var chart = this.chart,
      primaryAxis = chart[this.coll][0],
      primaryThreshold,
      primaryIndex,
      index,
      newTickPos,
      threshold;

    // Find the index and return boolean result
    function isAligned(axis) {
      index = inArray(threshold, axis.tickPositions); // used in while-loop
      return axis.tickPositions.length === axis.tickAmount && index === primaryIndex;
    }

    if (chart.options.chart.alignThresholds && this !== primaryAxis) {
      primaryThreshold = (primaryAxis.series[0] && primaryAxis.series[0].options.threshold) || 0;
      threshold = (this.series[0] && this.series[0].options.threshold) || 0;

      primaryIndex = primaryAxis.tickPositions && inArray(primaryThreshold, primaryAxis.tickPositions);

      if (this.tickPositions && this.tickPositions.length &&
        primaryIndex > 0 &&
        primaryIndex < primaryAxis.tickPositions.length - 1 &&
        this.tickAmount) {

        // Add tick positions to the top or bottom in order to align the threshold
        // to the primary axis threshold (guard against infinite loop)
        var safetyLimit = 20;
        while (!isAligned(this) && safetyLimit-- > 0 && this.tickInterval > 0) {

          if (index < primaryIndex) {
            newTickPos = this.tickPositions[0] - this.tickInterval;
            this.tickPositions.unshift(newTickPos);
            this.min = newTickPos;
          } else {
            newTickPos = this.tickPositions[this.tickPositions.length - 1] + this.tickInterval;
            this.tickPositions.push(newTickPos);
            this.max = newTickPos;
          }
          proceed.call(this);
        }
      }
    } else {
      proceed.call(this);
    }
  });
}(Highcharts)); } catch(e) { console.warn('alignThresholds plugin failed:', e); }


/* http://jsfiddle.net/zmktekak/14/ */

window.justifyColumns = function justifyColumns(chart) {
    var categoriesNum = (1 + chart.xAxis[0].max - chart.xAxis[0].min),
      categoriesWidth = chart.plotSizeX / categoriesNum,
      sum, categories = chart.xAxis[0].names,
      number;

    for (var i = 0; i < categories.length; i++) {
      sum = 0;
      chart.series.forEach(function (p, k) {
        if (p.visible) {
          p.data.forEach(function (ob, j) {
            if (ob.options.name == categories[i]) {
              if (ob.options.y != null) {
                sum++;
              }
            }
          });
        }
      });
      number = 1;
      chart.series.forEach(function (p, k) {
        if (p.visible) {
          p.data.forEach(function (ob, j) {
            if (ob.options.name == categories[i]) {
              if (ob.options.y != null) {
                if (ob.graphic && ob.graphic.element && ob.graphic.element.x && ob.graphic.element.x.baseVal) {
                  ob.graphic.element.x.baseVal.value = i * categoriesWidth + (categoriesWidth / 2) + ((number - 1) - (sum * 0.5)) * ob.pointWidth;
                } else if (ob.graphic) {
                  ob.graphic.attr({ x: i * categoriesWidth + (categoriesWidth / 2) + ((number - 1) - (sum * 0.5)) * ob.pointWidth });
                }
                number++;
              }

            }
          });
        }
      });
    }
  };