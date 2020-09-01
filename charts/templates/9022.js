/**
 * Experimental Highcharts plugin to implement chart.alignThreshold option. This primary axis
 * will be computed first, then all following axes will be aligned to the threshold.
 * Author: Torstein Hønsi
 * Last revision: 2016-11-02
 * http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/studies/alignthresholds/
 */

(function (H) {
  var Axis = H.Axis,
    inArray = H.inArray,
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
        // to the primary axis threshold
        while (!isAligned(this)) {

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
}(Highcharts));

(function () {
  return {
    chart: {
      alignThresholds: true, //function above necessary
      alignTicks: true,
      events: {
        load: function () {
          //add and move legend title (get it from series names)
          this.legend.title
            .attr({
              text:
                this.series[0].name.split(" ").slice(-1).toString()
                + ':<br>'
                + this.series[13].name.split(" ").slice(-1).toString()
                + ' (rechte Skala):'
            })
            .translate(-140, 8);
        }
      }
    },
    plotOptions: {
      line: {
        index: 1,
        visible: false,
        yAxis: 1,
      },
      column: {
        pointPadding: 0,
        borderWidth: 0,
        index: 0,
        visible: false,
        yAxis: 0,
      }
    },
    xAxis: {
      min: 1,
      tickInterval: 1,
      labels: {
        step: 2
      }
    },
    yAxis: [{
      title: {
        text: null,
      },
      labels: {
        format: "{value:,.0f}",
        style: {
          color: "black",
        },
      },
      plotLines: [{
        color: '#B9CFD7',
        value: 0,
        width: 2
      }]
    },
    {
      opposite: true,
      title: {
        text: null
      },
      labels: {
        format: "{value:,.0f}",
        style: {
          color: "black",
        },
      },
      plotLines: [{
        color: '#B9CFD7',
        value: 0,
        width: 2
      }]
    }],
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "right",
      y: -15,
      width: 325,
      itemWidth: 54,
      itemMarginBottom: 5,
      symbolPadding: 2,
      itemStyle: {
        textOverflow: undefined,
        whiteSpace: 'nowrap',
      },
      labelFormatter: function () {
        //remove text after year 
        return this.name.split(" ").slice(0, 1).toString();
      },
      title: {
        text: ' ', //wird via chart.events.load bearbeitet
        style: {
          fontWeight: 'normal',
          lineHeight: 40
        }
      },
    },
    series: [
      {
        color: "#7f5f1a", // 2009 kumuliert
        type: "line",
      },
      {
        color: "#7f5f1a", // 2009 wöchentlich
        type: "column",
      },
      {
        color: "#b375ab", // 2010 kummuliert
        type: "line",
      },
      {
        color: "#b375ab", // 2010 wöchentlich
        type: "column",
      },
      {
        color: "#8A8A8A", // 2011 kumuliert
        type: "line",
      },
      {
        color: "#8A8A8A", // 2011 wöchentlich
        type: "column",
      },
      {
        color: "#008AC3", // 2012 kumuliert
        type: "line",
      },
      {
        color: "#008AC3", // 2012 wöchentlich
        type: "column",
      },
      {
        color: "#DC4403", // 2013 kumuliert
        type: "line",
      },
      {
        color: "#DC4403", // 2013 wöchentlich
        type: "column",
      },
      {
        color: "#007a2f", // 2014 kumuliert
        type: "line",
      },
      {
        color: "#007a2f", // 2014 wöchentlich
        type: "column",
      },
      {
        color: "#FFBB58", // 2015 kummuliert
        type: "line",
      },
      {
        color: "#FFBB58", // 2015 wöchentlich
        type: "column",
      },
      {
        color: "#A8C3CA", // 2016 kumuliert
        type: "line",
      },
      {
        color: "#A8C3CA", // 2016 wöchentlich
        type: "column",
      },
      {
        color: "#B00000", // 2017 kumuliert
        type: "line",
      },
      {
        color: "#B00000", // 2017 wöchentlich
        type: "column",
      },
      {
        color: "#246370", // 2018 kumuliert
        type: "line",
      },
      {
        color: "#246370", // 2018 wöchentlich
        type: "column",
      },
      {
        color: "#923f8d", // 2019 kumuliert
        type: "line",
        visible: true,
      },
      {
        color: "#923f8d", // 2019 wöchentlich
        type: "column",
        visible: true,
      },
      {
        color: "#FF8028", // 2020 kumuliert
        type: "line",
        visible: true,
      },
      {
        color: "#FF8028", // 2020 wöchentlich
        type: "column",
        visible: true,
      },
    ],
  };
}());