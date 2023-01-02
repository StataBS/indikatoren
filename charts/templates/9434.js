(function(){
    return {
    series: [
      { "color": "#007A2F"}, // dunkelgrün
      { "color": "#68AB2B"}, // grün
      { "color": "#FFBB58"}, // gelb
      { "color": "#B00000"}, // rot
      //{ "color": "#C8C8C8"}, // hellgrau
      //{ "color": "#6F6F6F"}, // grau
    ],
    "plotOptions": {
        "series": {
          pointPadding: 0.3
        }
    },
    xAxis: {
        type: "category"
    },
    yAxis: {
        reversedStacks: false,
    },
    legend: {
        reversed: false,
        "layout": "vertical",
        "verticalAlign": "middle",
        "align": "right",
        itemMarginBottom: 2,
        //itemWidth: 220,
        //width: 450,
        labelFormatter: function(){
            return this.name.replace(" seniorenfreundlich", "")
            //.replace("seniorenfreundlich", "")
            ;
        }
    }
    };
}());
